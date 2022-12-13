// export class SwaggerPropertiesBuilder {
//   // private static resultObj: { description: null|string; type: string; example: null|object };
//   // private resultObj: { description: null; type: string; example: null };
//   constructor(result, message, data) {
//     this.result = result;
//     this.message = message;
//     this.data = data;
//
//     this.makingResult();
//   }
//   private readonly result: string;
//
//   private readonly message: string;
//
//   private readonly data: object | null;
//
//   private resultObj = {
//     type: "string",
//     description: null,
//     example: null,
//   };
//   //
//   // private resultFail = {
//   //   type: "string",
//   //   description: "result Fail",
//   //   example: "fail",
//   // };
//
//   private messageObj = {
//     type: "string",
//     description: "message",
//     example: null,
//   };
//
//   private dataObj = {
//     type: "object",
//     description: "data",
//     example: null,
//   };
//
//   private makingResult = (): void => {
//     if (this.result === "ok") {
//       this.resultObj.description = "result OK";
//       this.resultObj.example = "OK";
//       this.messageObj.example = this.message;
//       this.dataObj.example = this.data;
//     } else {
//       this.resultObj.description = "result Fail";
//       this.resultObj.example = "Fail";
//       this.messageObj.example = this.message;
//       // this.dataObj.example = this.data;
//     }
//     // return {
//     //   result: this.resultObj,
//     //   message: this.messageObj,
//     //   data: this.dataObj,
//     // };
//   };
//   // public returnResult = async (): Promise<object> => {
//   //   return {
//   //     result: this.resultObj,
//   //     message: this.messageObj,
//   //     data: this.dataObj,
//   //   };
//   // };
//
//   static returnResult = async (): Promise<object> => {
//     return {
//       result: this.resultObj,
//       message: this.messageObj,
//       data: this.dataObj,
//     };
//   }
// }

export class SwaggerProperties {
  constructor(result, message, data) {
    this.result = result;
    this.message = message;
    this.data = data;
  }
  private result: object;
  private message: object;
  private data: object | null;

  return() {
    return {
      result: this.result,
      message: this.message,
      data: this.data,
    };
  }
}

export class SwaggerPropertiesBuilder {
  public result: object;
  public message: object;
  public data: object | null;

  makeResult(result) {
    if (result === "ok") {
      this.result = {
        type: "string",
        description: "result OK",
        example: "OK",
      };
    } else {
      this.result = {
        type: "string",
        description: "result Fail",
        example: "Fail",
      };
    }
    // this.result = result;
    return this;
  }

  makeMessage(message) {
    // this.message = message;
    this.message = {
      type: "string",
      description: "message",
      example: message,
    };
    return this;
  }

  makeData(data) {
    if (data === null) {
      this.data = {
        type: "object",
        description: "data",
        example: null,
      };
    } else {
      this.data = {
        type: "object",
        description: "data",
        example: data,
      };
    }
    return this;
  }

  build() {
    return new SwaggerProperties(this.result, this.message, this.data);
  }
}
