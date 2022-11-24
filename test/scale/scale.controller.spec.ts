import { Test, TestingModule } from "@nestjs/testing";
import { ScaleController } from "../../src/scale/scale.controller";
import { ScaleService } from "../../src/scale/scale.service";

describe("ScaleController", () => {
  let controller: ScaleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ScaleController],
      providers: [ScaleService],
    }).compile();

    controller = module.get<ScaleController>(ScaleController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
