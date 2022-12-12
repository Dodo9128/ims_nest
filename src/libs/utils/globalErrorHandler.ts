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

    const exceptionObj = exception.getResponse();

    let serviceName;
    let serviceFunc;
    let errorObj;
    const timestamp = currentTimeMaker();

    // class-validator 를 위한 error format
    if (exceptionObj["statusCode"] === 400) {
      serviceName = `Validation Error : ${exceptionObj["error"]}`;
      serviceFunc = request.url;
      errorObj = { message: exceptionObj["message"] };
    } else {
      serviceName = exceptionObj["service"];
      serviceFunc = exceptionObj["name"];
      errorObj = exceptionObj["error"];
    }

    // if (exceptionObj) {
    //   serviceName = exceptionObj["service"];
    //   serviceFunc = exceptionObj["name"];
    //   errorObj = exceptionObj["error"];
    // }

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
