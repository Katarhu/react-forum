import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {

  const PORT = process.env.PORT || 8080;

  const app = await NestFactory.create(AppModule);

  app.enableCors();

  await app.listen(PORT, () => console.log(`Server started at port: ${PORT}`));

}
bootstrap();
