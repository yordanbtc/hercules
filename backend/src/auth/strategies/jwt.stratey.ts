/**
 * RESUMEN DE LÓGICA: Estrategia de validación de identidad mediante JWT.
 * FLUJO DE ARCHIVOS (Paso 1): Extrae el Bearer Token y lo valida contra la clave del sistema.
 * FLUJO DE ARCHIVOS (Paso 2): El ConfigService garantiza que no haya claves "hardcoded" en el código.
 * ORDEN DE EJECUCIÓN: Se instancia al iniciar el AuthModule y valida cada petición protegida.
 * IMPACTO: Elimina redundancias de seguridad y asegura que el sistema no arranque sin configuración.
 */
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {

    constructor(configService: ConfigService) {
        const secret = configService.get<string>('JWT_SECRET');

        // VALIDACIÓN ESTRICTA: Si la clave no existe, el sistema debe fallar inmediatamente
        if (!secret) {
            throw new InternalServerErrorException('JWT_SECRET no está definida en las variables de entorno');
        }

        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            // Ahora pasamos la variable directamente, TypeScript sabe que aquí ya es un string
            secretOrKey: secret, 
        });
    }

    async validate(payload: any) {
        // Inyecta los datos del payload directamente en req.user
        return { 
            userId: payload.id, 
            email: payload.email, 
            role: payload.role 
        };
    }
}