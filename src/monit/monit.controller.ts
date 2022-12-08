import { Controller, Get, Post, Body, Patch, Param, Delete } from "@nestjs/common";
import { MonitService } from "./monit.service";
import { CreateMonitDto } from "./dto/create-monit.dto";
import { UpdateMonitDto } from "./dto/update-monit.dto";

@Controller("monit")
export class MonitController {
  constructor(private readonly monitService: MonitService) {}

  @Post()
  create(@Body() createMonitDto: CreateMonitDto) {
    return this.monitService.create(createMonitDto);
  }

  @Get()
  findAll() {
    return this.monitService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.monitService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateMonitDto: UpdateMonitDto) {
    return this.monitService.update(+id, updateMonitDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.monitService.remove(+id);
  }
}
