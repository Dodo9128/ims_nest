import { Test, TestingModule } from "@nestjs/testing";
import { MonitController } from "../../src/monit/monit.controller";
import { MonitService } from "../../src/monit/monit.service";

describe("MonitController", () => {
  let controller: MonitController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MonitController],
      providers: [MonitService],
    }).compile();

    controller = module.get<MonitController>(MonitController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
