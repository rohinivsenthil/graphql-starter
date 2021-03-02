import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { GqlExceptionFilter } from './filters/exceptions.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new GqlExceptionFilter());
  await app.listen(8080);
}
bootstrap();
