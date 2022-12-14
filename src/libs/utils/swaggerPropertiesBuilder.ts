export interface ISwaggerProperties {
  type: string;
  description: string;
  example: string | object | null;
}

export type TSwaggerPropertiesContainer = {
  result: ISwaggerProperties;
  message: ISwaggerProperties;
  data: ISwaggerProperties;
};

export class SwaggerProperties {
  private readonly result: ISwaggerProperties;
  private readonly message: ISwaggerProperties;
  private readonly data: ISwaggerProperties;

  constructor(result, message, data) {
    this.result = result;
    this.message = message;
    this.data = data;
  }

  public return(): TSwaggerPropertiesContainer {
    return {
      result: this.result,
      message: this.message,
      data: this.data,
    };
  }
}

export class SwaggerPropertiesBuilder {
  private readonly result: ISwaggerProperties = {
    type: "string",
    description: "",
    example: "",
  };
  private readonly message: ISwaggerProperties = {
    type: "string",
    description: "message",
    example: null,
  };
  private readonly data: ISwaggerProperties = {
    type: "Object",
    description: "data",
    example: null,
  };

  public makeOkObj(message, data): this {
    this.result.description = "result OK";
    this.result.example = "ok";
    this.message.example = message;
    this.data.example = data;

    return this;
  }

  public makeFailObj(message): this {
    this.result.description = "result Fail";
    this.result.example = "fail";
    this.message.example = message;
    this.data.type = "null";
    this.data.example = null;

    return this;
  }

  public build(): SwaggerProperties {
    return new SwaggerProperties(this.result, this.message, this.data);
  }
}
