import { Test, TestingModule } from "@nestjs/testing";
import { NodeCategoryController } from "../../src/nodeCategory/nodeCategory.controller";
import { NodeCategoryService } from "../../src/nodeCategory/nodeCategory.service";

describe("NodeCategoryController", () => {
  let controller: NodeCategoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NodeCategoryController],
      providers: [NodeCategoryService],
    }).compile();

    controller = module.get<NodeCategoryController>(NodeCategoryController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
