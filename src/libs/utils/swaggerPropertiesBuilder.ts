export class SwaggerProperties {
  constructor(result, message, data) {
    this.result = result;
    this.message = message;
    this.data = data;
  }
  private readonly result: object;
  private readonly message: object;
  private readonly data: object | null;

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

  makeOkObj(message, data) {
    this.result = {
      type: "string",
      description: "result OK",
      example: "ok",
    };
    this.message = {
      type: "string",
      description: "message",
      example: message,
    };
    this.data = {
      type: "Object",
      description: "data",
      example: data,
    };
    return this;
  }

  makeFailObj(message) {
    this.result = {
      type: "string",
      description: "result Fail",
      example: "fail",
    };
    this.message = {
      type: "string",
      description: "message",
      example: message,
    };
    this.data = {
      type: "null",
      description: "data",
      example: null,
    };
    return this;
  }

  build() {
    return new SwaggerProperties(this.result, this.message, this.data);
  }
}
