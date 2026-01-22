📘 Guía de Referencia: NestJS + Prisma + Swagger + Postgres
1. Capa de Datos (Prisma)

El "Origen de la Verdad". Define el modelo en prisma/schema.prisma.
Fragmento de código

model Product {
  id          String   @id @default(uuid())
  name        String   @unique
  price       Decimal
  stock       Int      @default(0)
  createdAt   DateTime @default(now())
}

    Comando: npx prisma generate (Actualiza tipos de TS).

    Comando: npx prisma migrate dev (Impacta la base de datos).

2. Capa de Documentación (Entity)

Define cómo se muestran los datos al cliente. Se crea en product.entity.ts.

    Regla: Debe implementar el tipo de Prisma para asegurar consistencia.

    Decorador: @ApiProperty() para que aparezca en Swagger.

3. Capa de Entrada (DTOs)

Define qué datos recibe la API.

    CreateProductDto: Usa class-validator para validar datos entrantes.

    UpdateProductDto: Usa PartialType de @nestjs/swagger para hacer que todos los campos sean opcionales automáticamente.

TypeScript

export class UpdateProductDto extends PartialType(CreateProductDto) {}

4. Capa de Control (Controller)

Usa los métodos HTTP para definir la acción.
Método	Acción	Decorador Nest	Decorador Swagger
GET	Leer	@Get()	@ApiResponse({ type: [Entity] })
POST	Crear	@Post()	@ApiCreatedResponse({ type: Entity })
PATCH	Editar parcial	@Patch(':id')	@ApiOkResponse({ type: Entity })