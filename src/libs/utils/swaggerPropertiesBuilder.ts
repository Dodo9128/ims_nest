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
    switch (result) {
      case "ok":
        this.result = {
          type: "string",
          description: "result OK",
          example: "ok",
        };
        break;
      case "fail":
        this.result = {
          type: "string",
          description: "result Fail",
          example: "fail",
        };
        break;
    }
    return this;
  }

  makeMessage(message) {
    this.message = {
      type: "string",
      description: "message",
      example: message,
    };
    return this;
  }

  makeData(data) {
    switch (data) {
      case null:
        this.data = {
          type: "null",
          description: "data",
          example: null,
        };
        break;
      default:
        this.data = {
          type: "Object",
          description: "data",
          example: data,
        };
        break;
    }
    return this;
  }

  build() {
    return new SwaggerProperties(this.result, this.message, this.data);
  }
}
