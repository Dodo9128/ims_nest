// import { Inject, Injectable, Logger, LoggerService, NestMiddleware } from "@nestjs/common";
// import { Request, Response, NextFunction } from "express";
//
// @Injectable()
// export class LoggerMiddleware implements NestMiddleware {
//   constructor(@Inject(Logger) private readonly logger: LoggerService) {}
//
//   use(req: Request, res: Response, next: NextFunction) {
//     const { ip, method, originalUrl } = req;
//     const userAgent = req.get("user-agent");
//
//     res.on("finish", () => {
//       const { statusCode } = res;
//       this.logger.log(`${method} ${originalUrl} ${statusCode} ${ip} ${userAgent}`);
//     });
//
//     next();
//   }
// }

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
    // const loggerService = new LoggerService(req.url.slice(1).split("/")[req.url.slice(1).split("/").length - 1]);
    // const loggerService = new LoggerService(req.url.slice(1).split("/")[0]);
    const loggerService = new LoggerService(req.url);
    // const loggerService = new LoggerService("IMS_NODE");
    const tempUrl = req.method + " " + req.url.split("?")[0];
    const _headers = req.headers ? req.headers : {};
    const _query = req.query ? req.query : {};
    const _body = req.body ? req.body : {};
    const _url = tempUrl ? tempUrl : {};
    // const _timestamp = new Date().toISOString();

    // const currentTime = new Date().toISOString();
    //
    // const _timestamp = `${currentTime.substring(0, 10)} ${currentTime.substring(11, 19)}}`;
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
