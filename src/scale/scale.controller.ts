import { Controller, Get, Post, Body, Patch, Param, Delete } from "@nestjs/common";
import { ScaleService } from "./scale.service";
import { CreateScaleDto } from "./dto/create-scale.dto";
import { UpdateScaleDto } from "./dto/update-scale.dto";
import { ApiExcludeController } from "@nestjs/swagger";

@ApiExcludeController()
@Controller("scale")
export class ScaleController {
  constructor(private readonly scaleService: ScaleService) {}

  @Post()
  create(@Body() createScaleDto: CreateScaleDto) {
    return this.scaleService.create(createScaleDto);
  }

  @Get()
  findAll() {
    return this.scaleService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.scaleService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateScaleDto: UpdateScaleDto) {
    return this.scaleService.update(+id, updateScaleDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.scaleService.remove(+id);
  }
}
