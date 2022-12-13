import { ExceptionFilter, Catch, ArgumentsHost, HttpException, HttpStatus } from "@nestjs/common";
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

    // global endpoint exception filter
    if (exceptionObj["statusCode"] === 404) {
      serviceName = `${exceptionObj["error"]}`;
      serviceFunc = request.url;
      errorObj = { message: exceptionObj["message"] };
    }
    // class-validator 를 위한 error format
    else if (exceptionObj["statusCode"] === 400) {
      serviceName = `Validation Error : ${exceptionObj["error"]}`;
      serviceFunc = request.url;
      // 2개 이상의 validation 체크 시 우선되는 1개의 에러만 return 하기 위함
      errorObj = { message: exceptionObj["message"][0] };
    } else {
      serviceName = exceptionObj["service"];
      serviceFunc = exceptionObj["name"];
      errorObj = exceptionObj["error"];
    }

    this.logger.httpException(serviceName, serviceFunc, errorObj, status, timestamp);

    // seperate to global endpoint exception
    if (status !== 404 && request.url !== "/favicon.ico") {
      response
        .status(status)
        // .json({
        //   statusCode: status,
        //   timestamp: new Date().toISOString(),
        //   path: request.url,
        // });
        .json(sendFail(errorObj.message, null));
    } else {
      // global endpoint exception redirect to home
      response
        .status(HttpStatus.PERMANENT_REDIRECT)
        .redirect(308, `${process.env.MY_ADDRESS}:${process.env.SERVER_PORT}`);
    }
  }
}

export function makeErrorInfoObjForHttpException(service: string, name: string, errorObj: object) {
  return {
    service: service,
    name: name,
    error: errorObj,
  };
}
