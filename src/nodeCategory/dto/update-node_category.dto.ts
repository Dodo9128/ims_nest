import { PartialType } from "@nestjs/mapped-types";
import { CreateNodeCategoryDto } from "./create-node_category.dto";

export class UpdateNodeCategoryDto extends PartialType(CreateNodeCategoryDto) {}
