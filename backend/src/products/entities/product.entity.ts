import { Product as PrismaProduct } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { UserEntity } from '../../users/entities/user.entity'; // Importa tu entidad de usuario


export class ProductEntity implements Partial<PrismaProduct> {
    @ApiProperty({ example: 'uuid-v4-123' })
    id: string;

    @ApiProperty({ example: 'Nombre del Producto' })
    name: string;

    @ApiProperty({ example: 99.99 })
    price: any; // O number

    @ApiProperty({ example: 10 })
    stock: number;

    @ApiProperty({ example: 'Descripcion del roducto' })
    description: string;

    @ApiProperty()
    createdAt: Date;
}