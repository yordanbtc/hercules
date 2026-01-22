/**
 * Define la estructura de una petición (Request) autenticada exitosamente.
 * Se utiliza para extender el objeto Request de Express/NestJS, permitiendo
 * el acceso tipado a los datos del usuario (ID, email y rol) extraídos 
 * previamente de un token JWT o sesión de base de datos.
 */
import { UserType } from "@prisma/client";

export interface AuthenticatedRequest {
    /** Información del usuario vinculado a la sesión actual */
    user: {
        /** Identificador único del usuario (UUID o similar) */
        userId: string;
        /** Correo electrónico registrado */
        email: string;
        /** Rol o tipo de usuario definido en el esquema de Prisma */
        type: UserType;
    }
}