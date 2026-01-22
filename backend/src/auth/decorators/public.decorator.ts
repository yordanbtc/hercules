/**
 * RESUMEN DE LÓGICA: Define un marcador (metadato) para saltar la protección JWT.
 * FLUJO DE ARCHIVOS: Es importado por los Controllers y leído por 'JwtAuthGuard'.
 * ORDEN DE EJECUCIÓN: Se procesa en tiempo de compilación/decoración de clases.
 * IMPACTO: Permite declarar excepciones de seguridad de forma declarativa y limpia.
 * RESPONSABILIDAD: Crear la constante única 'isPublic' en el mapa de metadatos de Nest.
 */
import { SetMetadata } from "@nestjs/common";

// Clave única utilizada por el Reflector para encontrar este metadato específico
export const IS_PUBLIC_KEY = 'isPublic';

/**
 * Decorador @Public()
 * Al colocarlo sobre un método, le dice al Guard que no pida token para esa ruta.
 */
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);