import { Test, TestingModule } from "@nestjs/testing";
import { GroupController } from "../../src/group/group.controller";
import { GroupService } from "../../src/group/group.service";

describe("GroupController", () => {
  let controller: GroupController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GroupController],
      providers: [GroupService],
    }).compile();

    controller = module.get<GroupController>(GroupController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
