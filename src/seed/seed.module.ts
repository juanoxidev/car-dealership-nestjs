import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { CarsModule } from '../cars/cars.module';
import { BrandsModule } from 'src/brands/brands.module';

// nest g res seed --no-spec Crear seed sin los test, se usa en desarrrollo para tener datos precargados
@Module({
  controllers: [SeedController],
  providers: [SeedService],
  // Se indica que este modulo puede inyectar los serviciso de otros modulos, de los modulos indicados indicados entre [] toma el modulo y se fija en la propiedad export de ese modulo poara ahcer la inyeccion de dependencias.
  imports: [CarsModule, BrandsModule]
})
export class SeedModule {}
