import { Injectable } from "@nestjs/common";
import { CreateNodeCategoryDto } from "./dto/create-node_category.dto";
import { UpdateNodeCategoryDto } from "./dto/update-node_category.dto";

@Injectable()
export class NodeCategoryService {
  create(createNodeCategoryDto: CreateNodeCategoryDto) {
    return "This action adds a new nodeCategory";
  }

  findAll() {
    return `This action returns all nodeCategory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} nodeCategory`;
  }

  update(id: number, updateNodeCategoryDto: UpdateNodeCategoryDto) {
    return `This action updates a #${id} nodeCategory`;
  }

  remove(id: number) {
    return `This action removes a #${id} nodeCategory`;
  }
}
