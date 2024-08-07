import { Module } from '@nestjs/common';
import { BrandsService } from './brands.service';
import { BrandsController } from './brands.controller';


@Module({
  controllers: [BrandsController],
  providers: [BrandsService],
// Se indica que el service puede ser inyectable en otros modulos.
  exports:[BrandsService],
})
export class BrandsModule {}
