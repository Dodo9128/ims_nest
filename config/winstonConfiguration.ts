// import { utilities, WinstonModule } from "nest-winston";
// import * as winstonDaily from "winston-daily-rotate-file";
// import * as winston from "winston";
//
// const env = process.env.NODE_ENV;
// const logDir = __dirname + "/../logs";
//
// const dailyOptions = (level: string) => {
//   return {
//     level,
//     datePattern: "YYYY-MM-DD",
//     dirname: logDir + `/${level}`,
//     filename: `%DATE%.${level}.log`,
//     maxFiles: 30,
//     maxSize: "20m",
//     zippedArchive: true,
//   };
// };
//
// /**
//  * Winston Log Level
//  * {
//  *   error: 0,
//  *   warn: 1,
//  *   info: 2,
//  *   http: 3,
//  *   verbose: 4,
//  *   debug: 5,
//  *   silly: 6,
//  * }
//  */
//
// export const winstonLogger = WinstonModule.createLogger({
//   transports: [
//     new winston.transports.Console({
//       level: env === "production" ? "http" : "silly",
//       // production 이면 http, 개발환경은 모든 단계 로깅
//       format:
//         env === "production"
//           ? winston.format.simple()
//           : winston.format.combine(
//               winston.format.timestamp(),
//               utilities.format.nestLike("IMS_NODE", {
//                 prettyPrint: true,
//               }),
//             ),
//     }),
//
//     // info, warn, error 로그는 파일로 관리
//     new winstonDaily(dailyOptions("info")),
//     new winstonDaily(dailyOptions("warn")),
//     new winstonDaily(dailyOptions("error")),
//   ],
// });
import { LoggerService as LS } from "@nestjs/common";

import * as winston from "winston";
import { utilities as nestWinstonModuleUtilities, WinstonModule } from "nest-winston";
import * as winstonDaily from "winston-daily-rotate-file";

const { simple, errors, combine, timestamp, printf, json, colorize } = winston.format;

const env = process.env.NODE_ENV;
// const logDir = __dirname + "/../../logs";
//
// const dailyOptions = (level: string) => {
//   return {
//     level,
//     datePattern: "YYYY-MM-DD",
//     dirname: logDir + `/${level}`,
//     filename: `%DATE%.${level}.log`,
//     maxFiles: 30,
//     maxSize: "20m",
//     zippedArchive: true,
//   };
// };

let logDir: string;
let dailyOptions;

switch (env) {
  case "test":
    logDir = __dirname + "/../../testLogs";
    dailyOptions = (level: string) => {
      return {
        level,
        datePattern: "YYYY-MM-DD",
        dirname: logDir + `/${level}`,
        filename: `%DATE%.${level}.test.log`,
        maxFiles: 30,
        maxSize: "20m",
        zippedArchive: true,
      };
    };
    break;
  default:
    logDir = __dirname + "/../../logs";

    dailyOptions = (level: string) => {
      return {
        level,
        datePattern: "YYYY-MM-DD",
        dirname: logDir + `/${level}`,
        filename: `%DATE%.${level}.log`,
        maxFiles: 30,
        maxSize: "20m",
        zippedArchive: true,
      };
    };
    break;
}

export class LoggerService implements LS {
  private logger: winston.Logger;

  constructor(service: string) {
    this.logger = winston.createLogger({
      transports: [
        new winston.transports.Console({
          level: env === "production" ? "http" : "silly",
          // production 이면 http, 개발환경은 모든 단계 로깅
          format:
            env === "production"
              ? simple()
              : combine(
                  errors({ stack: true }),
                  timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
                  printf(({ level, message, timestamp }) => {
                    return `${timestamp}:${level}:${message}`;
                    // return `${timestamp}:${message}:${level}`;
                  }),
                  // printf(info => `${info.timestamp} ${info.service} ${info.level} ${info.message}`),
                  json(),
                  colorize(),
                  nestWinstonModuleUtilities.format.nestLike(service, {
                    prettyPrint: true,
                  }),
                ),
        }),

        // info, warn, error 로그는 파일로 관리
        new winstonDaily(dailyOptions("info")),
        new winstonDaily(dailyOptions("warn")),
        new winstonDaily(dailyOptions("error")),
      ],
      defaultMeta: { host: process.env.HOSTNAME },
    });
  }

  log(message: string) {
    this.logger.log({ level: "info", message });
  }
  info(message: string) {
    this.logger.info(message);
  }

  /**
   *
   * @param {string} [message] return message
   * @param {string} [errorMsg] error message
   */
  error(message: string, errorMsg: string) {
    this.logger.error(`MESSAGE: ${message}, ERROR_MESSAGE: ${errorMsg}`);
  }
  warn(message: string) {
    this.logger.warning(message);
  }

  /**
   *
   * @param {string} [message] return message
   * @param {object | string | null} [data] return data
   */
  debug(message: string, data: null | object | string) {
    this.logger.debug(`MESSAGE: ${message}, DATA: ${data}`);
  }
  verbose(message: string) {
    this.logger.verbose(message);
  }

  httpException(serviceName: string, serviceFunc: string, errorObj: object, statusCode: number, timestamp: string) {
    this.logger.error(
      `ERROR: ${errorObj["message"]}`,
      {
        timestamp: timestamp,
        exceptionService: serviceName,
        exceptionPoint: serviceFunc,
        error: errorObj["stack"],
      },
      statusCode,
    );
  }
}
