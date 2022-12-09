import { Test, TestingModule } from "@nestjs/testing";
import { WebVenueController } from "./controller/webVenue.controller";

describe("WebController", () => {
  let controller: WebVenueController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WebVenueController],
    }).compile();

    controller = module.get<WebVenueController>(WebVenueController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
