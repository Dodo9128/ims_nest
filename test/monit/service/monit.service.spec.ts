import { Test, TestingModule } from "@nestjs/testing";
import { MonitService } from "../../../src/monit/monit.service";

describe("MonitService", () => {
  let service: MonitService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MonitService],
    }).compile();

    service = module.get<MonitService>(MonitService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
