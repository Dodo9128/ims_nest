import { Test, TestingModule } from "@nestjs/testing";
import { SystemController } from "../../src/system/system.controller";
import { SystemService } from "../../src/system/system.service";

describe("SystemController", () => {
  let controller: SystemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SystemController],
      providers: [SystemService],
    }).compile();

    controller = module.get<SystemController>(SystemController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
