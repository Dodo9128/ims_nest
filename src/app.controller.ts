import { Controller, Get, HttpStatus, Redirect, Res } from "@nestjs/common";
// import { AppService } from "./app.service";
import { IResultReturn, sendOk } from "./libs/utils/functionReturn";
import { Response } from "express";

@Controller()
export class AppController {
  // constructor(private readonly appService: AppService) {}
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  @Get()
  getHello(@Res() res: Response): Response {
    return res.status(HttpStatus.OK).json(sendOk("IMS_CONVERTING_TO_NEST_JS", null));
  }
}
