/**
 * LÓGICA DE NEGOCIO: Orquestador de dependencias que agrupa el controlador y el servicio de usuarios.
 * FLUJO: Importa PrismaModule -> Registra UsersService como proveedor -> Expone UsersController.
 * IMPACTO: Define el alcance (scope) y la visibilidad de los componentes dentro de la aplicación.
 * RESPONSABILIDAD: Encapsular el recurso "Usuarios" para mantener el principio de modularidad de NestJS.
 * INTEGRACIÓN: Permite inyectar las capacidades de este módulo en otras partes del software.
 */

import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [PrismaModule]
})
export class UsersModule {}
