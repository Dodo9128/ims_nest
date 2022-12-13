import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus } from "@nestjs/common";
import { CloudService } from "./cloud.service";
import { CreateCloudDto } from "./dto/createCloud.dto";
import { UpdateCloudDto } from "./dto/updateCloud.dto";
import { ApiExcludeController, ApiTags } from "@nestjs/swagger";
import { IResultReturn } from "../libs/utils/functionReturn";
import { Response } from "express";
import { CreateCloud, UpdateCloud, FindAllClouds, FindOneCloud, RemoveCloud } from "./cloud.decorator";

@ApiExcludeController()
@Controller("cloud")
@ApiTags("Cloud")
export class CloudController {
  constructor(private readonly cloudService: CloudService) {}

  @CreateCloud()
  async create(@Body() createCloudDto: CreateCloudDto, @Res() res: Response) {
    const result: IResultReturn = await this.cloudService.create(createCloudDto);
    return res.status(HttpStatus.OK).json(result);
  }

  @FindAllClouds()
  async findAll(@Res() res: Response) {
    const result: IResultReturn = await this.cloudService.findAll();
    return res.status(HttpStatus.OK).json(result);
  }

  @FindOneCloud()
  async findOne(@Param("idOrName") idOrName: string, @Res() res: Response) {
    const result: IResultReturn = await this.cloudService.findOne(idOrName);
    return res.status(HttpStatus.OK).json(result);
  }

  @UpdateCloud()
  async update(@Param("id") id: string, @Body() updateCloudDto: UpdateCloudDto, @Res() res: Response) {
    const result: IResultReturn = await this.cloudService.update(id, updateCloudDto);
    return res.status(HttpStatus.OK).json(result);
  }

  @RemoveCloud()
  async remove(@Param("id") id: string, @Res() res: Response) {
    const result: IResultReturn = await this.cloudService.remove(id);
    return res.status(HttpStatus.OK).json(result);
  }
}
