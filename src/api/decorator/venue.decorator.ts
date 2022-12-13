import { applyDecorators, Delete, Get, Patch, Post } from "@nestjs/common";
import { ApiBody, ApiOkResponse, ApiOperation, ApiResponse, ApiTags, getSchemaPath } from "@nestjs/swagger";
import { UpdateVenueDto } from "../../venue/dto/updateVenue.dto";
import { CreateVenueDto } from "../../venue/dto/createVenue.dto";
import {
  createVenueFailResult,
  createVenueSuccessResult,
  deleteVenueFailResult,
  deleteVenueSuccessResult,
  findAllVenueFailResult,
  findAllVenueSuccessResult,
  findOneVenueFailResult,
  findOneVenueSuccessResult,
  updateVenueFailResult,
  updateVenueSuccessResult,
} from "../../venue/dto/venueResultProperties.swagger";

export const CreateVenue = () =>
  applyDecorators(
    Post("insertVenue"),
    ApiBody({ type: CreateVenueDto }),
    ApiOperation({ summary: "베뉴 생성", description: "베뉴를 생성한다" }),
    ApiOkResponse({
      description: "베뉴 생성 요청 성공",
      schema: {
        type: "object",
        properties: createVenueSuccessResult,
      },
    }),
    ApiResponse({
      description: "베뉴 생성 요청 실패",
      status: 401,
      schema: {
        type: "object",
        properties: createVenueFailResult,
      },
    }),
  );

export const FindAllVenues = () =>
  applyDecorators(
    Get("listVenue"),
    ApiOperation({ summary: "모든 베뉴 목록 반환", description: "현재 DB에 있는 모든 베뉴 목록을 반환한다" }),
    ApiOkResponse({
      description: "모든 베뉴 목록 반환 성공",
      schema: {
        type: "object",
        properties: findAllVenueSuccessResult,
      },
    }),
    ApiResponse({
      description: "모든 베뉴 목록 반환 실패",
      status: 401,
      schema: {
        type: "object",
        properties: findAllVenueFailResult,
      },
    }),
  );

export const FindOneVenue = () =>
  applyDecorators(
    Get("getVenue/:idOrName"),
    ApiOperation({
      summary: "ID or Name으로 베뉴 탐색",
      description: "ID 혹은 Name을 입력해 해당하는 정보를 가진 베뉴를 반환한다.",
    }),
    ApiOkResponse({
      description: "탐색한 베뉴 정보 반환 성공",
      schema: {
        type: "object",
        properties: findOneVenueSuccessResult,
      },
    }),
    ApiResponse({
      description: "해당 ID / NAME 을 가진 베뉴 정보가 없음",
      status: 401,
      schema: {
        type: "object",
        properties: findOneVenueFailResult,
      },
    }),
  );

export const UpdateVenue = () =>
  applyDecorators(
    Patch("updateVenue/:id"),
    ApiOperation({
      summary: "베뉴 정보 업데이트",
      description: "ID를 입력해 해당 아이디의 베뉴 정보를 업데이트한다",
    }),
    ApiBody({ type: UpdateVenueDto }),
    ApiOkResponse({
      description: "베뉴 정보 업데이트 성공",
      schema: {
        type: "object",
        properties: updateVenueSuccessResult,
      },
    }),
    ApiResponse({
      description: "베뉴 정보 업데이트 실패",
      status: 401,
      schema: {
        type: "object",
        properties: updateVenueFailResult,
      },
    }),
  );

export const RemoveVenue = () =>
  applyDecorators(
    Delete("deleteVenue/:id"),
    // ApiTags("Venue"),
    ApiOperation({
      summary: "베뉴 삭제",
      description: "ID를 입력해 해당 아이디의 베뉴 정보를 삭제한다",
    }),
    ApiOkResponse({
      description: "베뉴 정보 삭제 성공",
      schema: {
        type: "object",
        properties: deleteVenueSuccessResult,
      },
    }),
    ApiResponse({
      description: "베뉴 정보 삭제 실패",
      status: 401,
      schema: {
        type: "object",
        properties: deleteVenueFailResult,
      },
    }),
  );

export const UpLoadIMSExcel = () => applyDecorators(Post("uploadIMSExcel"));
