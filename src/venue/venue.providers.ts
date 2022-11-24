import { DataSource } from "typeorm";
import { Venue } from "../entities/venue.entity";

export const venueProviders = [
  {
    provide: "VENUE_REPOSITORY",
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Venue),
    inject: ["DATA_SOURCE"],
  },
];
