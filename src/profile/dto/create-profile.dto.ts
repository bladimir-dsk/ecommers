import { IsNumber, IsString } from "class-validator";

export class CreateProfileDto {
    @IsString()
    PrimerApellido: string;
    @IsString()

    SegundoApellido: string;
    @IsString()

    Nombre: string;
    @IsString()
    genero: string;
    @IsString()
    Pais: string;
    @IsNumber()
    Edad: number;
}
