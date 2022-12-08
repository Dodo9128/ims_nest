import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { setupSwagger } from "./libs/utils/swagger";
import { HttpExceptionFilter } from "./libs/utils/globalErrorHandler";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {});
  setupSwagger(app);
  app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(process.env.SERVER_PORT);
}
void bootstrap();
