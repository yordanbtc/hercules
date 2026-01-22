import 'dotenv/config'; 
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { UsersModule } from './users/users.module';
import { ValidationPipe } from '@nestjs/common'; // 1. Importa esto
import { Type } from 'class-transformer';
import { scheduleArray } from 'rxjs/internal/scheduled/scheduleArray';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guards';
import { writeFileSync } from 'fs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //const app = await NestFactory.create(UsersModule);

  const config = new DocumentBuilder()
    .setTitle('Hercules Script')
    .setDescription('The Hercules AAPI')
    .setVersion('0.1')
    .addBearerAuth({
      type:'http',
      scheme: 'bearer',
      bearerFormat: 'JWT',
      in: 'header',
      name: 'Authorization',
      description: 'Enter your bearer token',

    })
    .addSecurityRequirements('bearer')
    .build();

  // 2. Activa la validación global
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Elimina datos que no estén en el DTO
      forbidNonWhitelisted: true, // Lanza error si hay datos extra
      transform: true, // Convierte los tipos automáticamente
    }),
  );
  
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('openapi', app, document);

  writeFileSync('./swagger.json', JSON.stringify(document, null,2));

  const jwtAuthGuard = app.get(JwtAuthGuard);
  app.useGlobalGuards(jwtAuthGuard);

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
  console.log('DATABASE_URL detectada:', process.env.DATABASE_URL);
  
}
bootstrap();
// Docimento main