import { Injectable } from "@nestjs/common";
import { CreateScaleDto } from "./dto/create-scale.dto";
import { UpdateScaleDto } from "./dto/update-scale.dto";

@Injectable()
export class ScaleService {
  create(createScaleDto: CreateScaleDto) {
    return "This action adds a new scale";
  }

  findAll() {
    return `This action returns all scale`;
  }

  findOne(id: number) {
    return `This action returns a #${id} scale`;
  }

  update(id: number, updateScaleDto: UpdateScaleDto) {
    return `This action updates a #${id} scale`;
  }

  remove(id: number) {
    return `This action removes a #${id} scale`;
  }
}
