import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {
  
  findOneById(id: number) {
    const car = this.cars.find(car => car.id === id);
    //Si no encontro el car porque no existe con ese id, lanza un not found exception, como nos encontramos en la exception zone va a ser automaticamente catcheado por nest en su exception filter
    if (!car) throw new NotFoundException(`Car with id '${4}' not found`);
    
    return car;
    //throw new Error('Method not implemented.');
  }
  
  
  getById(id: string):Object {
    return this.cars[+id-1];
  }
  
  
  getAll(): Object[] {
    return this.cars;
  }
  
  private cars = [
    {
      id: 1,
      brand: 'Toyota',
      model: 'Corola'
    },
    {
      id: 2,
      brand: 'Honda',
      model: 'Civic'
    },
    {
      id: 3,
      brand: 'Jeep',
      model: 'Cherokee'
    }
  ]

}
