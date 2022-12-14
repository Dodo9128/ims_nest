import { Test, TestingModule } from "@nestjs/testing";
import { InstanceController } from "../../src/instance/instance.controller";
import { InstanceService } from "../../src/instance/instance.service";

describe("InstanceController", () => {
  let controller: InstanceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InstanceController],
      providers: [InstanceService],
    }).compile();

    controller = module.get<InstanceController>(InstanceController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
