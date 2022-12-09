import { Module } from "@nestjs/common";
import { VenueService } from "./venue.service";
import { VenueController } from "./venue.controller";
import { Venue } from "../entities/venue.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TypeOrmExModule } from "../db/typeorm-ex.module";
import { VenueRepository } from "./venue.repository";

@Module({
  imports: [TypeOrmModule.forFeature([Venue]), TypeOrmExModule.forCustomRepository([VenueRepository])],
  controllers: [VenueController],
  // 타 엔드포인트에서 사용할 수 있도록 provider에 controller 추가하고, export 시켜준다
  providers: [VenueService, VenueController],
  exports: [VenueController],
})
export class VenueModule {}
