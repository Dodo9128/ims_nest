import { PartialType } from "@nestjs/mapped-types";
import { CreateMonitDto } from "./create-monit.dto";

export class UpdateMonitDto extends PartialType(CreateMonitDto) {}
