import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNotEmpty, MinLength } from "class-validator"; // Importa estos
import { minLength } from "class-validator";

export class CreateOrganizationDto {
    @ApiProperty()
    @MinLength(1, {
        message : 'Debe tener de al menos un caracter',
    })
    @IsString()      // ✅ Obligatorio para que ValidationPipe lo reconozca
    @IsNotEmpty()    // ✅ Evita que manden el nombre vacío
    name!: string;
}