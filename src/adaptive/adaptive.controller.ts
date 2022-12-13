import { Controller, Get, Post, Body, Patch, Param, Delete } from "@nestjs/common";
import { AdaptiveService } from "./adaptive.service";
import { CreateAdaptiveDto } from "./dto/create-adaptive.dto";
import { UpdateAdaptiveDto } from "./dto/update-adaptive.dto";
import { ApiExcludeController } from "@nestjs/swagger";

@ApiExcludeController()
@Controller("adaptive")
export class AdaptiveController {
  constructor(private readonly adaptiveService: AdaptiveService) {}

  @Post()
  create(@Body() createAdaptiveDto: CreateAdaptiveDto) {
    return this.adaptiveService.create(createAdaptiveDto);
  }

  @Get()
  findAll() {
    return this.adaptiveService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.adaptiveService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateAdaptiveDto: UpdateAdaptiveDto) {
    return this.adaptiveService.update(+id, updateAdaptiveDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.adaptiveService.remove(+id);
  }
}
