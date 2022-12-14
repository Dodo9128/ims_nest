import { Test, TestingModule } from "@nestjs/testing";
import { AudioController } from "../../src/audio/audio.controller";
import { AudioService } from "../../src/audio/audio.service";

describe("AudioController", () => {
  let controller: AudioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AudioController],
      providers: [AudioService],
    }).compile();

    controller = module.get<AudioController>(AudioController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
