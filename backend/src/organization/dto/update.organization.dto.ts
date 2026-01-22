import { ApiProperty, PartialType } from "@nestjs/swagger";
import { partialDeepStrictEqual } from "assert";
import { IsString, IsNotEmpty, MinLength } from "class-validator"; // Importa estos
import { minLength } from "class-validator";
import { CreateOrganizationDto } from "./create-organization.dto";

export class UpdateOrganizationDto extends PartialType(CreateOrganizationDto) {}