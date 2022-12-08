import { Injectable } from "@nestjs/common";
import { CreateAdaptiveDto } from "./dto/create-adaptive.dto";
import { UpdateAdaptiveDto } from "./dto/update-adaptive.dto";

@Injectable()
export class AdaptiveService {
  create(createAdaptiveDto: CreateAdaptiveDto) {
    return "This action adds a new adaptive";
  }

  findAll() {
    return `This action returns all adaptive`;
  }

  findOne(id: number) {
    return `This action returns a #${id} adaptive`;
  }

  update(id: number, updateAdaptiveDto: UpdateAdaptiveDto) {
    return `This action updates a #${id} adaptive`;
  }

  remove(id: number) {
    return `This action removes a #${id} adaptive`;
  }
}
