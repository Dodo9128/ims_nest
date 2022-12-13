import { Controller, HttpStatus, Res } from "@nestjs/common";
import { sendOk } from "./libs/utils/functionReturn";
import { Response } from "express";
import { ApiTags } from "@nestjs/swagger";
import { RootEndpoint } from "./api/decorator/app.decorator";

@Controller()
@ApiTags("Get Hello To IMS")
export class AppController {
  // constructor(private readonly appService: AppService) {}
  // constructor() {}

  @RootEndpoint()
  getHello(@Res() res: Response): Response {
    return res.status(HttpStatus.OK).json(sendOk("IMS_CONVERTING_TO_NEST_JS", null));
  }
}
