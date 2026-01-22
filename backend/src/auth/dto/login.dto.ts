import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, MinLength } from "class-validator";

export class LoginDto {
    @ApiProperty({ example: 'admin@hercules.com' })
    @IsEmail({}, { message: 'El formato del email no es válido' })
    email: string;

    @ApiProperty({ example: 'password123' })
    @IsString()
    @MinLength(6)
    password: string;
}