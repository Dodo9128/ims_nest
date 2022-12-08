import { PartialType } from "@nestjs/mapped-types";
import { CreateScaleDto } from "./create-scale.dto";

export class UpdateScaleDto extends PartialType(CreateScaleDto) {}
