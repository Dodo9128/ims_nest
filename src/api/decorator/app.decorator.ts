import { applyDecorators, Get } from "@nestjs/common";
import { ApiOkResponse, ApiOperation } from "@nestjs/swagger";
import { getHelloToIms } from "../swaggerResultProperties/appResultProperties.swagger";

export const RootEndpoint = () =>
  applyDecorators(
    Get(""),
    ApiOperation({ summary: "Root Endpoint Result", description: "커넥션 확인을 위한 루트 엔드포인트" }),
    ApiOkResponse({
      description: "베뉴 생성 요청 성공",
      schema: {
        type: "object",
        properties: getHelloToIms,
      },
    }),
  );
