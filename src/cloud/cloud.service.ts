import { Injectable, Logger } from "@nestjs/common";
import { CreateCloudDto } from "./dto/createCloud.dto";
import { UpdateCloudDto } from "./dto/updateCloud.dto";
import { IResultReturn, sendOk, sendFail, objectToStringForDebug } from "../libs/utils/functionReturn";
import { CloudRepository } from "./cloud.repository";

@Injectable()
export class CloudService {
  private static readonly logger = new Logger(CloudService.name);

  constructor(private cloudRepository: CloudRepository) {}

  async create(cloudData: CreateCloudDto): Promise<IResultReturn> {
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

  async findAll(): Promise<IResultReturn> {
    try {
      const findAllClouds = await this.cloudRepository.findWholeCloud();
      if (findAllClouds) {
        CloudService.logger.debug("SUCCESS : cloudService.findAllClouds", objectToStringForDebug(findAllClouds));
        return sendOk(`return whole cloud info`, findAllClouds);
      }
      CloudService.logger.debug("FAIL : cloudService.findAllClouds", objectToStringForDebug(findAllClouds));
      return sendFail(`return whole cloud info fail`, null);
    } catch (e) {
      CloudService.logger.debug("ERROR : cloudService.findAllClouds", e.message);
      return sendFail(`${e.message}`, null);
    }
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} cloud`;
  // }
  async findOne(idOrName: string): Promise<IResultReturn> {
    try {
      const findOneCloud = await this.cloudRepository.findOneByIdOrName(idOrName.toString());
      if (findOneCloud) {
        CloudService.logger.debug("SUCCESS : cloudService.findOneCloud", objectToStringForDebug(findOneCloud));
        return sendOk(`cloud info`, findOneCloud);
      }
      CloudService.logger.debug("FAIL : cloudService.findOneCloud", objectToStringForDebug(findOneCloud));
      return sendFail(`there is no cloud info`, null);
    } catch (e) {
      CloudService.logger.debug("ERROR : cloudService.findOneCloud", e.message);
      return sendFail(`${e.message}`, null);
    }
  }

  async update(id: string, updateCloudDto: UpdateCloudDto) {
    // return `This action updates a #${id} cloud`;
    try {
      if (!isNaN(Number(id))) {
        const updateCloud = await this.cloudRepository.updateCloud(id, updateCloudDto);
        if (updateCloud !== null && updateCloud !== undefined) {
          CloudService.logger.debug("SUCCESS : cloudService.updateCloud", objectToStringForDebug(updateCloud));
          return sendOk(`cloud update success, ID: ${updateCloud.id}`, updateCloud);
        }
        CloudService.logger.debug("FAIL : cloudService.updateCloud", objectToStringForDebug(updateCloud));
        return sendFail(`cloud update fail, ID: ${id}`, null);
      }
    } catch (e) {
      CloudService.logger.debug("ERROR : cloudService.updateCloud", e.message);
      return sendFail(`${e.message}`, null);
    }
  }

  remove(id: string) {
    return `This action removes a #${id} cloud`;
  }
}
