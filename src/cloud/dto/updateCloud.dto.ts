import { PartialType } from "@nestjs/mapped-types";
import { CreateCloudDto } from "./createCloud.dto";

export class UpdateCloudDto extends PartialType(CreateCloudDto) {}
