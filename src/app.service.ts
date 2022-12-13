import { HttpStatus, Injectable, Res } from "@nestjs/common";
import { IResultReturn, sendOk } from "./libs/utils/functionReturn";
import { Response } from "express";

@Injectable()
export class AppService {
  getHello(@Res() res: Response) {
    // return "IMS_CONVERTING_TO_NEST_JS";
    return res.status(HttpStatus.OK).json(sendOk("IMS_CONVERTING_TO_NEST_JS", null));
    // return sendOk("IMS_CONVERTING_TO_NEST_JS", null);
  }
}
