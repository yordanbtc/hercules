/**
 * RESUMEN DE LÓGICA: Contiene las reglas de negocio y transacciones de clientes.
 * FLUJO DE ARCHIVOS (Paso 2): Recibe instrucciones del Controller y usa 'PrismaService'.
 * FLUJO DE ARCHIVOS (Paso 3): Realiza operaciones CRUD en la tabla 'customer' de la DB.
 * ORDEN DE EJECUCIÓN: Se ejecuta después de la validación del Controller.
 * IMPACTO: Es el responsable directo de la integridad de los datos de los clientes.
 */
import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CustomersService {
  constructor(private prisma: PrismaService){}

  create(createCustomerDto: CreateCustomerDto) {
    // Persiste el nuevo cliente utilizando el mapeo automático de Prisma
    return this.prisma.customer.create({
      data: createCustomerDto
    });
  }

  findAll() {
    // Recupera todos los registros de la tabla cliente sin excepciones
    return this.prisma.customer.findMany();
  }

  findOne(id: string) {
    // Nota: Implementar this.prisma.customer.findUnique para completar lógica
    return this.prisma.customer.findUnique({
      where: {id}
    });
  }

  update(id: string, updateCustomerDto: UpdateCustomerDto) {
    // Nota: Implementar this.prisma.customer.update con la cláusula where
    return this.prisma.customer.update({
      where: {id},
      data:updateCustomerDto
    });
  }

  remove(id: string) {
    // Nota: Implementar this.prisma.customer.delete para eliminar de la DB
    return this.prisma.customer.delete({
      where:{id}
    });
  }
}