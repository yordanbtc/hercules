/**
 * RESUMEN DE LÓGICA: Empaqueta los componentes del dominio de Clientes.
 * FLUJO DE ARCHIVOS: Importa 'PrismaModule' para proveer acceso a la DB a sus servicios.
 * ORDEN DE EJECUCIÓN: Registra los controladores y proveedores en el arranque global.
 * RESPONSABILIDAD: Centraliza las dependencias necesarias para que el módulo sea funcional.
 * IMPACTO: Permite que el módulo sea importado y reconocido por el AppModule raíz.
 */
import { Module } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CustomersController } from './customers.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule], // Inyecta la capacidad de base de datos en este módulo
  controllers: [CustomersController],
  providers: [CustomersService],
})
export class CustomersModule {}