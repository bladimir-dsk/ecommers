import {  IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateProductDto {
    @IsString()
  
    @MinLength(3, { message: 'The name must be at least 3 characters long' })
    name: string;

}
