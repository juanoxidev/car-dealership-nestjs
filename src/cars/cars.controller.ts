import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Controller('cars')
export class CarsController {
  // crea el bean de la instancia carsService al ser Injectable()
  constructor(
    private readonly carsService: CarsService
  ) { }


  @Get()
  getAllCars() {
    return this.carsService.getAll();
  }
  // aun si defino a id pasado por pametro como number, sigue siendo un string. El @Param recibe como argumento un Pipe que hace la transformacion del dato a otro y ahi si definimos el id como number.Regresa un bad request si lo q le pasan al pipe no es un numero.
  @Get(':id')
    // se puede instanciar el parseuuidpipe e indicarle la version qu edebe usar {version:'3/4/5'}, ya que uuid tiene dif versiones.
  getCarById(@Param('id', new ParseUUIDPipe({version:'4'})) id: string) {

    // nest tiene un exceptionzone que engloba todos los componentes, en caso de no controlar una excepcion ejecuta directamente un http response con cod.500 
    
    //throw new Error('Error de prueba')
    return this.carsService.findOneById(id);
  }

  //cuando mandamos info al backend c/post, o para crear recursos. @Body() obtiene el body de la peticion Cubre el envio por json, form-data, url-encode de forma nativa. Debe validarse lo que recibimos en el controller.
  @Post()
    // pipe a nivel metodo de controlador. El validationPipe necesita del class validator y eventualmente necesitamos el class transformer. yarn add class-validator class-transformer
    
 // @UsePipes(ValidationPipe)
  createCar(@Body() createCarDto: CreateCarDto) {
    return this.carsService.create(createCarDto);
  }

  // hay varias formas de implementar el patch con body o param
    @Patch()
    updateCar(
      //Los pipes pueden usarse en  parametros del metodo de controlador, a nivel global del controlador, a nivel glgobal de apliccacion o a nivel metodo de controlador 
      @Body() updateCarDto: UpdateCarDto)
    {
      return this.carsService.updateCar(updateCarDto);
    }

    @Delete(':id')
    deleteCar(@Param('id', ParseUUIDPipe) id: string) {
      this.carsService.deleteCar(id);
  }

}
