import { Test, TestingModule } from "@nestjs/testing";
import { RuleController } from "../../src/rule/rule.controller";
import { RuleService } from "../../src/rule/rule.service";

describe("RuleController", () => {
  let controller: RuleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RuleController],
      providers: [RuleService],
    }).compile();

    controller = module.get<RuleController>(RuleController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
