/**
 * RESUMEN DE LÓGICA: Maneja las peticiones HTTP de la ruta raíz (Health Check).
 * FLUJO DE ARCHIVOS: Recibe peticiones del cliente y delega la respuesta a 'app.service'.
 * ASOCIACIÓN: Utiliza decoradores de Swagger para la documentación de la API.
 * IMPACTO: Sirve como punto de verificación para confirmar que la API está en línea.
 */
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Módulo Main')
@Controller()
export class AppController {
  // Inyección del servicio para separar la lógica de negocio del transporte HTTP
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    // Retorna el mensaje de saludo definido en la capa de servicio
    return this.appService.getHello();
  }
}