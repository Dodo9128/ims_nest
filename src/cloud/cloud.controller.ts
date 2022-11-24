import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus } from "@nestjs/common";
import { CloudService } from "./cloud.service";
import { CreateCloudDto } from "./dto/createCloud.dto";
import { UpdateCloudDto } from "./dto/updateCloud.dto";
import { ApiTags } from "@nestjs/swagger";
import { IResultReturn } from "../libs/utils/functionReturn";
import { Response } from "express";
import { CreateCloud, UpdateCloud, FindAllClouds, FindOneCloud, DeleteCloud } from "./cloud.decorator";

@Controller("cloud")
@ApiTags("Cloud")
export class CloudController {
  constructor(private readonly cloudService: CloudService) {}

  @CreateCloud()
  async create(@Body() createCloudDto: CreateCloudDto, @Res() res: Response) {
    const result: IResultReturn = await this.cloudService.createCloud(createCloudDto);
    return res.status(HttpStatus.OK).json(result);
    // return this.cloudService.create(createCloudDto);
  }

  @FindAllClouds()
  findAll() {
    return this.cloudService.findAll();
  }

  @FindOneCloud()
  findOne(@Param("id") id: string) {
    return this.cloudService.findOne(+id);
  }

  @UpdateCloud()
  update(@Param("id") id: string, @Body() updateCloudDto: UpdateCloudDto) {
    return this.cloudService.update(+id, updateCloudDto);
  }

  @DeleteCloud()
  remove(@Param("id") id: string) {
    return this.cloudService.remove(+id);
  }
}
