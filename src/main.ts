import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { setupSwagger } from "./libs/utils/swagger";
// import * as dotenv from "dotenv";
// import * as path from "path";
//
// const node_env = process.env.NODE_ENV || "development";
//
// let envPath = "";
// switch (node_env) {
//   case "development":
//     envPath = ".env.development";
//     break;
//   case "production":
//     envPath = ".env.production";
//     break;
//   case "local":
//     envPath = ".env.local";
//     break;
//   case "test":
//     envPath = ".env.test";
//     break;
//
//   default:
//     envPath = ".env.development";
// }
//
// console.log(`Environment Path is: ${envPath}`);
//
// dotenv.config({
//   path: path.resolve(
//     process.env.NODE_ENV === "production"
//       ? ".env.development"
//       : process.env.NODE_ENV === "else"
//       ? ".env.else"
//       : ".env.development",
//   ),
// });

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  setupSwagger(app);
  await app.listen(process.env.SERVER_PORT);
}
void bootstrap();
