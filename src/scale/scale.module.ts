import { Module } from "@nestjs/common";
import { ScaleService } from "./scale.service";
import { ScaleController } from "./scale.controller";

@Module({
  controllers: [ScaleController],
  providers: [ScaleService],
})
export class ScaleModule {}
