/**
 * RESUMEN DE LÓGICA: Punto de entrada principal y orquestador del árbol de dependencias.
 * FLUJO DE ARCHIVOS: Importa 'ConfigModule' global, la conexión de 'PrismaModule' 
 * y centraliza los submódulos (Users, Products, Customers, Auth).
 * IMPACTO: Define qué recursos están disponibles para la inyección de dependencias
 * en toda la aplicación y configura variables de entorno globales.
 */
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { AppController } from './app.controller'; 
import { AppService } from './app.service'; 

import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { CustomersModule } from './customers/customers.module';
import { AuthModule } from './auth/auth.module';
import { OrganizationModule } from './organization/organization.module';

@Module({
  imports: [
    // Habilita variables de entorno en todo el sistema sin repetir importaciones
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    // Proveedor de persistencia compartido para todos los módulos
    PrismaModule,
    UsersModule,
    ProductsModule,
    CustomersModule,
    AuthModule,
    OrganizationModule,
  ],
  controllers: [AppController], 
  providers: [AppService],    
})
export class AppModule {}