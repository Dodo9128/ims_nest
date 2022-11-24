import { Injectable } from "@nestjs/common";
import { CreateMonitDto } from "./dto/create-monit.dto";
import { UpdateMonitDto } from "./dto/update-monit.dto";

@Injectable()
export class MonitService {
  create(createMonitDto: CreateMonitDto) {
    return "This action adds a new monit";
  }

  findAll() {
    return `This action returns all monit`;
  }

  findOne(id: number) {
    return `This action returns a #${id} monit`;
  }

  update(id: number, updateMonitDto: UpdateMonitDto) {
    return `This action updates a #${id} monit`;
  }

  remove(id: number) {
    return `This action removes a #${id} monit`;
  }
}
