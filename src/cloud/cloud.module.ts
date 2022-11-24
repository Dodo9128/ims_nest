import { Module } from "@nestjs/common";
import { CloudService } from "./cloud.service";
import { CloudController } from "./cloud.controller";
import { Cloud } from "../entities/cloud.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TypeOrmExModule } from "../db/typeorm-ex.module";
import { CloudRepository } from "./cloud.repository";

@Module({
  imports: [TypeOrmModule.forFeature([Cloud]), TypeOrmExModule.forCustomRepository([CloudRepository])],
  controllers: [CloudController],
  providers: [CloudService],
})
export class CloudModule {}
