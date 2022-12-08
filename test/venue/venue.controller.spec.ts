import { Test, TestingModule } from "@nestjs/testing";
import { VenueController } from "../../src/venue/venue.controller";
import { VenueService } from "../../src/venue/venue.service";

describe("VenueController", () => {
  let controller: VenueController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VenueController],
      providers: [VenueService],
    }).compile();

    controller = module.get<VenueController>(VenueController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
