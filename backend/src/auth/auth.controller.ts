/**
 * RESUMEN DE LÓGICA: Orquestador de peticiones HTTP para el inicio de sesión.
 * FLUJO DE ARCHIVOS (Paso 1): Recibe 'LoginDto' del cliente -> Envía a 'AuthService'.
 * FLUJO DE ARCHIVOS (Paso 4): Retorna el JWT al cliente o lanza excepción 404.
 * ORDEN DE EJECUCIÓN: Es el primero en interceptar la solicitud mediante el decorador @Post.
 * IMPACTO: Puerta de acceso segura a la API; gestiona la respuesta final del proceso.
 */
import { Body, Controller, HttpException, HttpStatus, Post } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { AuthService } from './auth.service';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { Public } from './decorators/public.decorator';

@ApiTags('Autenticación')
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){}
    
    @Post('login')
    @Public()
    @ApiResponse({ status: 201, type: LoginDto})
    async login(@Body() data: LoginDto){
        // Delega la validación de identidad a la capa de servicio
        const userToken = await this.authService.validateUser(data)

        // Manejo de errores: detiene la ejecución si las credenciales no coinciden
        if(!userToken) throw new HttpException('User not found', HttpStatus.NOT_FOUND)
            
        return userToken; 
    }
}