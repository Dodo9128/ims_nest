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
  providers: [VenueService],
})
export class VenueModule {}
