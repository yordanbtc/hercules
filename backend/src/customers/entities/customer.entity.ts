import { Customer as PrismaCustomer } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { UserEntity } from '../../users/entities/user.entity'; // Importa tu entidad de usuario


export class CustomerEntity implements Partial<PrismaCustomer> {
    @ApiProperty({ example: 'uuid-v4-123' })
    id: string;

    @ApiProperty({ example: 'Nombre del Cliente' })
    name: string;

    @ApiProperty({ example: 4242598673 })
    phone: string;

    @ApiProperty({ example: "Direccion" })
    address: string;

    @ApiProperty()
    createdAt: Date;
}