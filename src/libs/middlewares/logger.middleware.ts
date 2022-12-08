// core
import { Injectable, NestMiddleware } from "@nestjs/common";

// logger
import { LoggerService } from "../../../config/winstonConfiguration";

// lib
import { Request, Response, NextFunction } from "express";
import { currentTimeMaker } from "../utils/functionReturn";

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  constructor() {}
  use(req: Request, res: Response, next: NextFunction) {
    const loggerService = new LoggerService(req.url);
    const tempUrl = req.method + " " + req.url.split("?")[0];
    const _headers = req.headers ? req.headers : {};
    const _query = req.query ? req.query : {};
    const _body = req.body ? req.body : {};
    const _url = tempUrl ? tempUrl : {};
    const _timestamp = currentTimeMaker();

    loggerService.info(
      JSON.stringify({
        url: _url,
        headers: _headers,
        query: _query,
        body: _body,
        timestamp: _timestamp,
      }),
    );

    next();
  }
}
