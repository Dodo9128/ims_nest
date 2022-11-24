import { Test, TestingModule } from "@nestjs/testing";
import { CloudController } from "../../src/cloud/cloud.controller";
import { CloudService } from "../../src/cloud/cloud.service";

describe("CloudController", () => {
  let controller: CloudController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CloudController],
      providers: [CloudService],
    }).compile();

    controller = module.get<CloudController>(CloudController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
