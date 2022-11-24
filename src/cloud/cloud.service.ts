import { Injectable, Logger } from "@nestjs/common";
import { CreateCloudDto } from "./dto/createCloud.dto";
import { UpdateCloudDto } from "./dto/updateCloud.dto";
import { IResultReturn, sendOk, sendFail } from "../libs/utils/functionReturn";
import { CloudRepository } from "./cloud.repository";

@Injectable()
export class CloudService {
  private static readonly logger = new Logger(CloudService.name);

  constructor(private cloudRepository: CloudRepository) {}

  async createCloud(cloudData: CreateCloudDto): Promise<IResultReturn> {
    try {
      const currentCloudList = await this.cloudRepository.findWholeCloud();
      const totalCloudLength = currentCloudList.length;

      cloudData.id = String(totalCloudLength + 1);
      // cloudData.storage = "[]";

      const createAndSaveNewCloud = await this.cloudRepository.createAndSaveCloud(cloudData);
      if (createAndSaveNewCloud) {
        CloudService.logger.debug("SUCCESS : cloudService.createCLoud", createAndSaveNewCloud);
        return sendOk(`new cloud add`, createAndSaveNewCloud);
      }
      return sendFail(`new cloud add fail`, null);
    } catch (e) {
      CloudService.logger.debug("ERROR : cloudService.createCloud", e.message);
      return sendFail(`${e.message}`, null);
    }
    // return "This action adds a new cloud";
  }

  findAll() {
    return `This action returns all cloud`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cloud`;
  }

  update(id: number, updateCloudDto: UpdateCloudDto) {
    return `This action updates a #${id} cloud`;
  }

  remove(id: number) {
    return `This action removes a #${id} cloud`;
  }
}
