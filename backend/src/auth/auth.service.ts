/**
 * RESUMEN DE LÓGICA: Ejecuta la validación de identidad y generación de tokens.
 * FLUJO DE ARCHIVOS (Paso 2): Consulta en 'PrismaService' la existencia del usuario.
 * FLUJO DE ARCHIVOS (Paso 3): Si es válido, utiliza 'JwtService' para firmar el acceso.
 * ORDEN DE EJECUCIÓN: Se ejecuta inmediatamente después de que el Controller valida el Body.
 * IMPACTO: Centraliza la seguridad; aquí se decide si un usuario es quien dice ser.
 */
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt  from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(
        private jwtService: JwtService,
        private prisma: PrismaService,
    ){}

    async validateUser(user: LoginDto) {
        // 1. Buscar al usuario
        const foundUser = await this.prisma.user.findUnique({
            where: { email: user.email },
        });

        // 2. Si no existe, retornar null de inmediato
        if (!foundUser) return null;

        // 3. COMPARACIÓN: bcrypt.compare(textoPlano, hashBD)
        const isPasswordMatching = await bcrypt.compare(
            user.password,foundUser.password
        );

        if (isPasswordMatching) {
            // 4. Generar el token si la contraseña es correcta
            return this.jwtService.sign({
                id: foundUser.id,
                email: foundUser.email,
                type: foundUser.type,
            });
        }

        // Si la contraseña no coincide
        return null;
    }
}