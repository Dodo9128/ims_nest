import { Test, TestingModule } from "@nestjs/testing";
import { AdaptiveController } from "../../src/adaptive/adaptive.controller";
import { AdaptiveService } from "../../src/adaptive/adaptive.service";

describe("AdaptiveController", () => {
  let controller: AdaptiveController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdaptiveController],
      providers: [AdaptiveService],
    }).compile();

    controller = module.get<AdaptiveController>(AdaptiveController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
