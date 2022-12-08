import { Test, TestingModule } from "@nestjs/testing";
import { StorageController } from "../../src/storage/storage.controller";
import { StorageService } from "../../src/storage/storage.service";

describe("StorageController", () => {
  let controller: StorageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StorageController],
      providers: [StorageService],
    }).compile();

    controller = module.get<StorageController>(StorageController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
