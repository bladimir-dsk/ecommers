import { IsString } from "class-validator"

export class CreateRegisterDto {
    @IsString()
    nombre: string
    @IsString()
    apellidoPaterno: string
    @IsString()
    apellidoMaterno: string
    @IsString()
    correo: string
    @IsString()
    telefono: string
    @IsString()
    password: string

}
