import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe(
      {
         whitelist: true,
        // whitelist: solo deja pasar la data que estamos esperando en el dto validado. Si en el boddy mandan mas atributos no se los toma en cuenta.
        
        forbidNonWhitelisted: true
        //forbidNonWhitelisted: En caso de enviarle mas data de la que los dto capturan se ejecuta un bad request 400.
         
      }
    )
  )

  //Pipes global: cuando revise los decorados/anotations que tienen mis dtos va a aplicar la validacion de forma automatica.
  await app.listen(3000);
}
bootstrap();
