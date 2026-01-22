/**
 * LÓGICA DE NEGOCIO: Contiene las reglas operativas y la manipulación directa de los datos.
 * FLUJO: Recibe datos limpios del Controller -> Ejecuta consultas mediante Prisma -> Retorna el resultado.
 * IMPACTO: Centraliza el acceso a la base de datos, garantizando la integridad de las transacciones.
 * RESPONSABILIDAD: Abstraer la complejidad del ORM (Prisma) para que el controlador no conozca la DB.
 * MANTENIMIENTO: Permite reutilizar la lógica de usuarios en otros módulos o servicios del sistema.
 */
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService){}
  create(createUserDto: CreateUserDto) {
    return this.prisma.user.create({ data: createUserDto })
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(id: string) {
    return this.prisma.user.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.prisma.user.update({
      where: {id},
      data:updateUserDto
    });
  }

  remove(id: string) {
    return this.prisma.user.delete({ where: {id}})
  }
}
