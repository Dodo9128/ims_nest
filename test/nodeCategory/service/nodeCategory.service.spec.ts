import { Test, TestingModule } from "@nestjs/testing";
import { NodeCategoryService } from "../../../src/nodeCategory/nodeCategory.service";

describe("NodeCategoryService", () => {
  let service: NodeCategoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NodeCategoryService],
    }).compile();

    service = module.get<NodeCategoryService>(NodeCategoryService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
