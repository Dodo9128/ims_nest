import { Module } from "@nestjs/common";
import { VenueService } from "./venue.service";
import { VenueController } from "./venue.controller";
import { Venue } from "../entities/venue.entity";
// import { venueProviders } from "./venue.providers";
// import { DatabaseModule } from "../db/database.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TypeOrmExModule } from "../db/typeorm-ex.module";
import { VenueRepository } from "./venue.repository";

@Module({
  // imports: [DatabaseModule, Venue],
  imports: [TypeOrmModule.forFeature([Venue]), TypeOrmExModule.forCustomRepository([VenueRepository])],
  controllers: [VenueController],
  // providers: [...venueProviders, VenueService],
  providers: [VenueService],
})
export class VenueModule {}
