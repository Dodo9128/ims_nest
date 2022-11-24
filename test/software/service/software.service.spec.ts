import { Test, TestingModule } from "@nestjs/testing";
import { SoftwareService } from "../../../src/software/software.service";

describe("SoftwareService", () => {
  let service: SoftwareService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SoftwareService],
    }).compile();

    service = module.get<SoftwareService>(SoftwareService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
