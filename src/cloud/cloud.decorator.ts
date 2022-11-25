import { applyDecorators, Delete, Get, Patch, Post } from "@nestjs/common";
import { ApiBody, ApiOkResponse, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CreateCloudDto } from "./dto/createCloud.dto";
import { UpdateCloudDto } from "./dto/updateCloud.dto";

export const CreateCloud = () =>
  applyDecorators(
    Post("insertCloud"),
    ApiBody({ type: CreateCloudDto }),
    ApiOperation({ summary: "클라우드 정보 생성", description: "클라우드 정보를 생성한다" }),
    ApiOkResponse({
      description: "클라우드 생성 요청 성공",
      schema: {
        example: CreateCloudDto,
      },
    }),
    ApiResponse({
      description: "클라우드 정보 생성 요청 실패",
      status: 401,
      schema: {
        example: "example",
      },
    }),
  );

export const FindAllClouds = () =>
  applyDecorators(
    Get("listCloud"),
    ApiOperation({
      summary: "모든 클라우드 정보 목록 반환",
      description: "현재 DB에 있는 모든 클라우드 정보 목록을 반환한다",
    }),
    ApiOkResponse({
      description: "모든 클라우드 정보 목록 반환 성공",
      schema: {
        example: "listCloudInfo",
      },
    }),
  );

export const FindOneCloud = () =>
  applyDecorators(
    Get("getCloud/:id"),
    ApiOperation({
      summary: "ID or Name으로 클라우드 정보 탐색",
      description: "ID 혹은 Name을 입력해 해당하는 클라우드 정보를 반환한다",
    }),
    ApiOkResponse({
      description: "탐색한 클라우드 정보 반환 성공",
      schema: {
        example: "findOneCloudSuccess",
      },
    }),
    ApiResponse({
      description: "해당 ID / NAME 을 가진 클라우드 정보가 없음",
      status: 401,
      schema: {
        example: "findOneCloudFail",
      },
    }),
  );

export const UpdateCloud = () =>
  applyDecorators(
    Patch("updateCloud/:id"),
    // ApiTags("Cloud"),
    ApiOperation({
      summary: "클라우드 정보 업데이트",
      description: "ID를 입력해 해당 아이디의 클라우드 정보를 업데이트한다",
    }),
    ApiBody({ type: UpdateCloudDto }),
    ApiOkResponse({
      description: "클라우드 정보 업데이트 성공",
      schema: {
        example: "UpdateCloudSuccess",
      },
    }),
    ApiResponse({
      description: "해당 ID / NAME 을 가진 클라우드 정보가 없음",
      status: 401,
      schema: {
        example: "UpdateCloudFail",
      },
    }),
  );

export const RemoveCloud = () =>
  applyDecorators(
    Delete("deleteCloud/:id"),
    // ApiTags("Cloud"),
    ApiOperation({
      summary: "클라우드 삭제",
      description: "ID를 입력해 해당 아이디의 클라우드 정보를 삭제한다",
    }),
    ApiOkResponse({
      description: "클라우드 정보 삭제 성공",
      schema: {
        example: "DeleteCloudSuccess",
      },
    }),
    ApiResponse({
      description: "해당 ID / NAME 을 가진 클라우드 정보가 없음",
      status: 401,
      schema: {
        example: "DeleteCloudFail",
      },
    }),
  );
