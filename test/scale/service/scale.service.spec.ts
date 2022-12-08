import { Test, TestingModule } from "@nestjs/testing";
import { ScaleService } from "../../../src/scale/scale.service";

describe("ScaleService", () => {
  let service: ScaleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ScaleService],
    }).compile();

    service = module.get<ScaleService>(ScaleService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
