import { Test, TestingModule } from "@nestjs/testing";
import { VideoController } from "../../src/video/video.controller";
import { VideoService } from "../../src/video/video.service";

describe("VideoController", () => {
  let controller: VideoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VideoController],
      providers: [VideoService],
    }).compile();

    controller = module.get<VideoController>(VideoController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
