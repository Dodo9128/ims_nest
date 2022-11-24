import { Controller, Get, Post, Body, Patch, Param, Delete } from "@nestjs/common";
import { InstanceService } from "./instance.service";
import { CreateInstanceDto } from "./dto/create-instance.dto";
import { UpdateInstanceDto } from "./dto/update-instance.dto";

@Controller("instance")
export class InstanceController {
  constructor(private readonly instanceService: InstanceService) {}

  @Post()
  create(@Body() createInstanceDto: CreateInstanceDto) {
    return this.instanceService.create(createInstanceDto);
  }

  @Get()
  findAll() {
    return this.instanceService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.instanceService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateInstanceDto: UpdateInstanceDto) {
    return this.instanceService.update(+id, updateInstanceDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.instanceService.remove(+id);
  }
}
