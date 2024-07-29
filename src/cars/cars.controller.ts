import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put } from '@nestjs/common';
import { CarsService } from './cars.service';

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
  getCarById(@Param('id', ParseIntPipe) id: number) {

    // nest tiene un exceptionzone que engloba todos los componentes, en caso de no controlar una excepcion ejecuta directamente un http response con cod.500 
    
    //throw new Error('Error de prueba')
    return this.carsService.findOneById(id);
  }

  //cuando mandamos info al backend c/post, o para crear recursos. @Body() obtiene el body de la peticion Cubre el envio por json, form-data, url-encode de forma nativa. Debe validarse lo que recibimos en el controller.
  @Post()
  createCar(@Body() body: any) {
    return body;
  }

    @Patch(':id')
    updateCar(
      @Param('id', ParseIntPipe) id:number,
      @Body() body: any
      ) {
    return body;
  }

    @Delete(':id')
  deleteCar(@Param('id', ParseIntPipe) id: number) {
      return {
        method: 'delete',
        id: id,
    };
  }

}
