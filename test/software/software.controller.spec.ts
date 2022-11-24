import { Test, TestingModule } from "@nestjs/testing";
import { SoftwareController } from "../../src/software/software.controller";
import { SoftwareService } from "../../src/software/software.service";

describe("SoftwareController", () => {
  let controller: SoftwareController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SoftwareController],
      providers: [SoftwareService],
    }).compile();

    controller = module.get<SoftwareController>(SoftwareController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
