import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
// yarn add -D @types/uuid los types nunca son de prod son de desarrollo, permite en tyscript tengamos las ayudas.
import {v4 as uuid} from 'uuid';
import { CreateCarDto, UpdateCarDto } from './dto';

@Injectable()
export class CarsService {



  private cars:Car[] = [
    // {
    //   id: uuid(),
    //   brand: 'Toyota',
    //   model: 'Corola'
    // }
  ]
  
  findOneById(id: string) {
    const car = this.cars.find(car => car.id === id);
    //Si no encontro el car porque no existe con ese id, lanza un not found exception, como nos encontramos en la exception zone va a ser automaticamente catcheado por nest en su exception filter
    if (!car) throw new NotFoundException(`Car with id '${id}' not found`);
    
    return car;
    //throw new Error('Method not implemented.');
  }
  
  
  getById(id: string):Object {
    return this.cars[+id-1];
  }
  
  
  getAll(): Object[] {
    return this.cars;
  }

  //  Sin destructuracion
  // create(createCarDto: CreateCarDto): CreateCarDto {
  //   const car:Car = {
  //   id: uuid(),
  //   brand: createCarDto.brand,
  //   model: createCarDto.model
  //   };
//    this.cars.push(car);
//     return createCarDto
//   }

// Con destructuracion
    // create({brand, model}: CreateCarDto): CreateCarDto {
    // const car:Car = {
    // id: uuid(),
    // brand,
    // model,
    // };

    // this.cars.push(car);
  // return {brand, model}
  
  // la forma mas clara/legible con spreed operator
    create(createCarDto: CreateCarDto): CreateCarDto {
    const car:Car = {
    id: uuid(),
    ... createCarDto
    };

    this.cars.push(car);
    return createCarDto;
  }
  

    updateCar( updateCarDto: UpdateCarDto) {
      let carBD: Car = this.findOneById(updateCarDto.id)
      const id= carBD.id;

      // se actualiza el car en el array, el speed operator sobreescribe las propiedades que fueron modificadas, y luego se vuelve a indicar el mismo id por cuestiones de seg.
      this.cars = this.cars.map(car => {
        if (car.id === id) {
          carBD = { ...carBD, ...updateCarDto, id }
          return carBD;
        }
        return car;
      })
      
      return carBD;
    
  }
  
  deleteCar(id: string):void {
    const car: Car = this.findOneById(id);

    this.cars = this.cars.filter(carBD => carBD !== car);
  }

  fillCarsWithSeedData(cars:Car[]) {
    this.cars = cars;
  }
  

}
