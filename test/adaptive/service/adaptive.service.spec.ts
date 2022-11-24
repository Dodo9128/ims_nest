import { Test, TestingModule } from "@nestjs/testing";
import { AdaptiveService } from "../../../src/adaptive/adaptive.service";

describe("AdaptiveService", () => {
  let service: AdaptiveService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AdaptiveService],
    }).compile();

    service = module.get<AdaptiveService>(AdaptiveService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
