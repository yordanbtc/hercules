/**
 * RESUMEN DE LÓGICA: Configuración dinámica de seguridad mediante JWT y variables de entorno.
 * FLUJO DE ARCHIVOS (Paso 1): 'ConfigModule' (Global) carga el archivo .env al arranque.
 * FLUJO DE ARCHIVOS (Paso 2): 'JwtModule.registerAsync' inyecta 'ConfigService' para obtener 'JWT_SECRET'.
 * ORDEN DE EJECUCIÓN: Se resuelve durante la inicialización del módulo antes de procesar cualquier login.
 * IMPACTO: Permite cambiar la clave de firmado sin modificar ni recompilar el código fuente.
 */
import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './strategies/jwt.stratey';

@Module({
    imports: [
        PassportModule,
        PrismaModule,
        // Registro asíncrono para asegurar que el ConfigService esté disponible
        JwtModule.registerAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: async (configService: ConfigService) => ({
                // Se extrae el valor del .env de forma segura
                secret: configService.get<string>('JWT_SECRET'),
                signOptions: {
                    expiresIn: '24 h',
                },
            }),
        }),
    ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
})
export class AuthModule {}