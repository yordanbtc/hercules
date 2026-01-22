/**
 * RESUMEN DE LÓGICA: Punto de exposición de la API para la gestión de clientes.
 * FLUJO DE ARCHIVOS (Paso 1): Recibe DTOs y parámetros desde las peticiones HTTP.
 * FLUJO DE ARCHIVOS (Paso 4): Retorna la respuesta procesada por el Service al cliente.
 * ORDEN DE EJECUCIÓN: Intercepta la petición, valida tipos y delega a 'CustomersService'.
 * IMPACTO: Define el contrato de comunicación (Endpoints) para el frontend y externos.
 */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { ApiTags, ApiCreatedResponse } from '@nestjs/swagger';
import { CustomerEntity } from './entities/customer.entity';

@ApiTags('Clientes')
@Controller('Customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @Post()
  @ApiCreatedResponse({ type: CustomerEntity  })
  create(@Body() createCustomerDto: CreateCustomerDto) {
    // Inicia el proceso de creación enviando la data limpia al servicio
    return this.customersService.create(createCustomerDto);
  }

  @Get()
  findAll() {
    // Solicita la lista completa de registros sin filtros adicionales
    return this.customersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    // Convierte el parámetro string de la URL a number para compatibilidad con DB
    return this.customersService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCustomerDto: UpdateCustomerDto) {
    // Coordina la actualización parcial del cliente identificado por ID
    return this.customersService.update(id, updateCustomerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    // Solicita el borrado físico o lógico del registro mediante el servicio
    return this.customersService.remove(id);
  }
}