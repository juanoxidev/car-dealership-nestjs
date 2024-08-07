import { Module } from '@nestjs/common';
import { CarsController } from './cars.controller';
import { CarsService } from './cars.service';

@Module({
  controllers: [CarsController],
  providers: [CarsService],
  // Se indica que el service puede ser inyectable en otros modulos.
  exports: [CarsService]
})
export class CarsModule {}
