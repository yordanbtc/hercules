/**
 * RESUMEN DE LÓGICA: Provee los datos base o de prueba para el controlador raíz.
 * FLUJO DE ARCHIVOS: Es consumido exclusivamente por 'app.controller'.
 * RESPONSABILIDAD: Contiene la implementación mínima para el saludo del sistema.
 * ESTADO: Este archivo suele ser un placeholder para lógica de mantenimiento.
 */
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  // Función de utilidad simple para validar que el servidor responde correctamente
  getHello(): string {
    return 'Hercules Backend API!';
  }
}