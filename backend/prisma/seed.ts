import { PrismaClient, UserType, OrganizationMemberRole, InvoiceStatus } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';
import * as dotenv from 'dotenv';
import * as bcrypt from 'bcrypt';

dotenv.config();

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log('🌱 Iniciando carga completa de datos...');

  const salt = await bcrypt.genSalt(10);
  const password = await bcrypt.hash('password123', salt);

  // --- 1. USUARIOS ---
  const admin = await prisma.user.upsert({
    where: { email: 'admin@hercules.com' },
    update: {},
    create: { 
      email: 'admin@hercules.com', 
      firstName: 'Admin', 
      lastName: 'Master', 
      password, 
      type: UserType.ADMIN,
      telephone: '+584120000000'
    }
  });

  const seller = await prisma.user.upsert({
    where: { email: 'vendedor@hercules.com' },
    update: {},
    create: { 
      email: 'vendedor@hercules.com', 
      firstName: 'Carlos', 
      lastName: 'Ventas', 
      password, 
      type: UserType.USER,
      telephone: '+584140000000'
    }
  });

  // --- 2. ORGANIZACIONES ---
  const orgA = await prisma.organization.create({
    data: { 
      name: 'Hércules Logística',
      memberships: { 
        create: [
          { userId: admin.id, role: OrganizationMemberRole.MANAGER },
          { userId: seller.id, role: OrganizationMemberRole.MEMBER }
        ]
      }
    }
  });

  // --- 3. CATEGORÍAS Y PRODUCTOS ---
  const cat1 = await prisma.category.create({
    data: {
      name: 'Maquinaria Pesada',
      products: {
        create: [
          { name: 'Montacargas X1', description: 'Capacidad 2 Ton', price: 15000, stock: 5 },
          { name: 'Grua Portátil', description: 'Alcance 10m', price: 8500, stock: 2 }
        ]
      }
    },
    include: { products: true }
  });

  const cat2 = await prisma.category.create({
    data: {
      name: 'Seguridad Industrial',
      products: {
        create: [
          { name: 'Casco Reforzado', description: 'Certificación ANSI', price: 45.50, stock: 100 },
          { name: 'Guantes de Nitrilo', description: 'Pack x12', price: 12.99, stock: 250 }
        ]
      }
    },
    include: { products: true }
  });

  // --- 4. CLIENTES ---
  const customer = await prisma.customer.create({
    data: {
      name: 'Constructora del Norte',
      phone: '555-0199',
      address: 'Av. Industrial #456'
    }
  });

  // --- 5. ÓRDENES ---
  const prodMaquinaria = cat1.products[0]; // Montacargas
  const prodSeguridad = cat2.products[0];  // Casco

  const subTotal = Number(prodMaquinaria.price) + Number(prodSeguridad.price);
  const tax = subTotal * 0.16; // 16% IVA
  const total = subTotal + tax;

  const order1 = await prisma.order.create({
    data: {
      status: 'PENDING',
      total: total,
      customerId: customer.id,
      userId: seller.id,
      createdAt: new Date(),
      orderItems: {
        create: [
          { productId: prodMaquinaria.id, quantity: 1 },
          { productId: prodSeguridad.id, quantity: 1 }
        ]
      }
    }
  });

  const order2 = await prisma.order.create({
    data: {
      status: 'PENDING',
      total: total,
      customerId: customer.id,
      userId: seller.id,
      createdAt: new Date(),
      orderItems: {
        create: [
          { productId: prodMaquinaria.id, quantity: 1 },
          { productId: prodSeguridad.id, quantity: 1 }
        ]
      }
    }
  });

  // --- 6. FACTURAS (INVOICES) ---
  // Ahora con los campos del nuevo esquema
  await prisma.invoice.create({
    data: {
      number: `FAC-${Date.now()}`, // Genera un número único basado en el tiempo
      status: InvoiceStatus.PAID,
      subTotal: subTotal,
      tax: tax,
      total: total,
      userId: seller.id,
      orderId: order1.id,
      createdAt: new Date(),
      dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // Vence en 7 días
      paidAt: new Date()
    }
  });

  console.log('✅ Seed finalizado: Se han restaurado todos los datos y creado la facturación correctamente.');
}

main()
  .catch((e) => { 
    console.error('❌ Error en el seed:', e); 
    process.exit(1); 
  })
  .finally(async () => { 
    await prisma.$disconnect(); 
    await pool.end();
  });