import { Module } from "@nestjs/common";
import { NodeCategoryService } from "./nodeCategory.service";
import { NodeCategoryController } from "./nodeCategory.controller";

@Module({
  controllers: [NodeCategoryController],
  providers: [NodeCategoryService],
})
export class NodeCategoryModule {}
