import { applyDecorators, Get } from "@nestjs/common";
import { ApiOkResponse, ApiOperation } from "@nestjs/swagger";
// import { getHelloToIms } from "../swaggerResultProperties/appResultProperties.swagger";
import { SwaggerPropertiesBuilder } from "../../libs/utils/swaggerPropertiesBuilder";

const swaggerResult = new SwaggerPropertiesBuilder()
  .makeResult("ok")
  .makeMessage("IMS_CONVERTING_TO_NEST_JS")
  .makeData(null)
  .build();

// console.log(test.return());

export const RootEndpoint = () =>
  applyDecorators(
    Get(""),
    ApiOperation({ summary: "Root Endpoint Result", description: "커넥션 확인을 위한 루트 엔드포인트" }),
    ApiOkResponse({
      description: "베뉴 생성 요청 성공",
      schema: {
        type: "object",
        properties: swaggerResult.return(),
        // properties: new SwaggerPropertiesBuilder("ok", "IMS_CONVERTING_TO_NEST_JS", null),
      },
    }),
  );
// console.log(new SwaggerPropertiesBuilder("ok", "IMS_CONVERTING_TO_NEST_JS", null));
// console.log(SwaggerPropertiesBuilder.returnResult());

// console.log(new SwaggerPropertiesBuilder().makeResult("ok").makeMessage("IMS_CONVERTING_TO_NEST_JS").makeData(null).build());
// const test = new SwaggerPropertiesBuilder()
//   .makeResult("ok")
//   .makeMessage("IMS_CONVERTING_TO_NEST_JS")
//   .makeData(null)
//   .build();
//
// console.log(test.return());
