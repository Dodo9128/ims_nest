import { Controller, Get, Post, Body, Patch, Param, Delete } from "@nestjs/common";
import { NodeCategoryService } from "./nodeCategory.service";
import { CreateNodeCategoryDto } from "./dto/create-node_category.dto";
import { UpdateNodeCategoryDto } from "./dto/update-node_category.dto";
import { ApiExcludeController } from "@nestjs/swagger";

@ApiExcludeController()
@Controller("node-category")
export class NodeCategoryController {
  constructor(private readonly nodeCategoryService: NodeCategoryService) {}

  @Post()
  create(@Body() createNodeCategoryDto: CreateNodeCategoryDto) {
    return this.nodeCategoryService.create(createNodeCategoryDto);
  }

  @Get()
  findAll() {
    return this.nodeCategoryService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.nodeCategoryService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateNodeCategoryDto: UpdateNodeCategoryDto) {
    return this.nodeCategoryService.update(+id, updateNodeCategoryDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.nodeCategoryService.remove(+id);
  }
}
