import {IsNotEmpty, IsOptional, IsString, IsUUID} from "class-validator";



export class UpdateCarDto {
  @IsString({ message: 'No se envio al servidor el id del car a modificar' })
  @IsUUID()
  @IsNotEmpty()
  readonly id: string;
  @IsString({ message: 'La marca debe ser un String'})
  @IsOptional()
  readonly brand?: string;
  @IsString({ message: 'El modelo debe ser un String'})
  @IsOptional()
  readonly model?: string;
}