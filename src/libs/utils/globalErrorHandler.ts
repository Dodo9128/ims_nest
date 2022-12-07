import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from "@nestjs/common";
import { Request, Response } from "express";
import { currentTimeMaker, sendFail } from "./functionReturn";
import { LoggerService } from "../../../config/winstonConfiguration";

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  logger = new LoggerService("globalException");
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();

    // console.log(exception.getResponse());

    const exceptionObj = exception.getResponse();

    let serviceName;
    let serviceFunc;
    let errorObj;

    if (exceptionObj) {
      serviceName = exceptionObj["service"];
      serviceFunc = exceptionObj["name"];
      errorObj = exceptionObj["error"];
    }
    //
    // const offset = new Date().getTimezoneOffset() * 60000;
    //
    // const currentTime = new Date(new Date().getTime() - offset).toISOString();
    //
    // const timestamp = `${currentTime.substring(0, 10)} ${currentTime.substring(11, 19)}}`;

    const timestamp = currentTimeMaker();
    // this.logger.httpexception(exception.message, status);
    this.logger.httpException(serviceName, serviceFunc, errorObj, status, timestamp);

    response
      .status(status)
      // .json({
      //   statusCode: status,
      //   timestamp: new Date().toISOString(),
      //   path: request.url,
      // });
      .json(sendFail(errorObj.message, null));
  }
}

export function makeErrorInfoObjForHttpException(service: string, name: string, errorObj: object) {
  return {
    service: service,
    name: name,
    error: errorObj,
  };
}
