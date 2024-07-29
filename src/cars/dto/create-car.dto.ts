// podria ser una interface pero los dto me sirven para hacer validaciones, si fuera una interface no me dejaria hacer la validacion, en cambio si fuera una clase si me dejaria hacerlas.

import { IsNotEmpty, IsString} from "class-validator";



export class CreateCarDto {
  @IsString({ message: 'La marca debe ser un String'})
  @IsNotEmpty()
  readonly brand: string;
  @IsString()
  @IsNotEmpty()
  readonly model: string;
}