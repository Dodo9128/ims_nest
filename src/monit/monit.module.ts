import { Module } from "@nestjs/common";
import { MonitService } from "./monit.service";
import { MonitController } from "./monit.controller";

@Module({
  controllers: [MonitController],
  providers: [MonitService],
})
export class MonitModule {}
