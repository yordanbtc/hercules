/**
 * RESUMEN DE LÓGICA: Portero de seguridad que decide si una petición puede acceder a un recurso.
 * FLUJO DE ARCHIVOS (Paso 1): Verifica si el controlador o método tiene el decorador '@Public()'.
 * FLUJO DE ARCHIVOS (Paso 2): Si no es público, activa la validación de 'JwtStrategy'.
 * ORDEN DE EJECUCIÓN: Se ejecuta después de los Middlewares y antes de que la petición llegue al Controller.
 * IMPACTO: Centraliza la seguridad para no tener que validar el token manualmente en cada ruta.
 */
import { ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { AuthGuard } from "@nestjs/passport";
import { Observable } from "rxjs";
import { IS_PUBLIC_KEY } from "../decorators/public.decorator";

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
    constructor(private reflector: Reflector) {
        super();
    }

    /**
     * @param context Contiene los detalles de la petición actual y el destino (clase/método).
     * @returns boolean | Promise | Observable - 'true' permite el paso, 'false' lo bloquea (401).
     */
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        
        // El Reflector busca metadatos (claves) adjuntos al método o a la clase del controlador
        const isPublic = this.reflector.getAllAndOverride<boolean>(
            IS_PUBLIC_KEY, 
            [
                context.getHandler(), // Verifica si el método (ej: findAll) es público
                context.getClass(),   // Verifica si todo el controlador es público
            ]
        );

        // Si existe el decorador @Public(), se permite el acceso sin validar token
        if (isPublic) {
            return true;
        }

        // Si no es público, ejecuta la lógica estándar de Passport JWT (llama a JwtStrategy)
        return super.canActivate(context);
    }
}