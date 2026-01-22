/**
 * LÓGICA DE NEGOCIO: Punto de entrada de la API que gestiona las peticiones HTTP de usuarios.
 * FLUJO: Recibe el Request (JSON/Params) -> Valida los datos -> Delega al Service.
 * IMPACTO: Define las rutas finales (endpoints) y genera la documentación interactiva Swagger.
 * RESPONSABILIDAD: Mapear los verbos HTTP (GET, POST, etc.) a funciones específicas de ejecución.
 * SEGURIDAD: Es el lugar ideal para aplicar decoradores de autenticación y protección de rutas.
 */
import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { UserEntity } from './entities/user.entity';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guards';
import type { AuthenticatedRequest } from 'src/interfaces/authenticated-user.interfaces';

@ApiTags('Usuarios')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiCreatedResponse({ type: UserEntity  })
  
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @ApiCreatedResponse({ type: UserEntity, isArray: true  })
  @UseGuards(JwtAuthGuard)
  findAll(@Req() req: AuthenticatedRequest) {
    req.user;
    return this.usersService.findAll();
  }

  @Get(':id')
  @ApiCreatedResponse({ type: UserEntity  })
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  @ApiCreatedResponse({ type: UserEntity  })
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  @ApiCreatedResponse({ type: UserEntity  })
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}