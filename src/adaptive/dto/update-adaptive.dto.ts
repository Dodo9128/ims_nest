import { PartialType } from "@nestjs/mapped-types";
import { CreateAdaptiveDto } from "./create-adaptive.dto";

export class UpdateAdaptiveDto extends PartialType(CreateAdaptiveDto) {}
