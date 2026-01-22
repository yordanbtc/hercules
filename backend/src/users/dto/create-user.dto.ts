import { ApiProperty } from "@nestjs/swagger";
import { User, UserType } from "@prisma/client";
// 1. Importa los validadores
import { IsEmail, IsString, IsOptional, IsEnum, MinLength } from "class-validator";

export class CreateUserDto {
    @ApiProperty({ required: true })
    @IsEmail() // <--- Añade esto
    email: string;

    @ApiProperty({ required: false })
    @IsOptional() // <--- Muy importante para campos opcionales
    @IsString()
    telephone?: string;

    @ApiProperty({ required: true })
    @IsString()
    firstName: string;

    @ApiProperty({ required: true })
    @IsString()
    lastName: string;

    @ApiProperty({ required: true })
    @IsString()
    @MinLength(6) // Opcional: validación de seguridad
    password: string;

    @ApiProperty({ required: false, default: 'USER', enum: UserType })
    @IsOptional()
    @IsEnum(UserType) // <--- Valida que el rol exista en tu enum de Prisma
    type?: UserType = 'USER';
}