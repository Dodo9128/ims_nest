import { Injectable } from "@nestjs/common";
import { DatabaseModule } from "./db/database.module";

@Injectable()
export class AppService {
  getHello(): string {
    return "Hello World!";
  }
}
