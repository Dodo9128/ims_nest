import { HttpException, Injectable } from "@nestjs/common";
import { CreateCloudDto } from "./dto/createCloud.dto";
import { UpdateCloudDto } from "./dto/updateCloud.dto";
import { IResultReturn, sendOk, sendFail } from "../libs/utils/functionReturn";
import { CloudRepository } from "./cloud.repository";
import { LoggerService } from "../../config/winstonConfiguration";
import { makeErrorInfoObjForHttpException } from "../libs/utils/globalErrorHandler";

@Injectable()
export class CloudService {
  private static readonly logger = new LoggerService(CloudService.name);

  constructor(private cloudRepository: CloudRepository) {}

  async create(cloudData: CreateCloudDto): Promise<IResultReturn> {
    try {
      const currentCloudList = await this.cloudRepository.findWholeCloud();
      const totalCloudLength = currentCloudList.length;

      if (totalCloudLength > 0) {
        cloudData.id = String(totalCloudLength + 1);
      } else {
        cloudData.id = String(1);
      }

      const createAndSaveNewCloud = await this.cloudRepository.createAndSaveCloud(cloudData);
      if (createAndSaveNewCloud) {
        return sendOk(`new cloud add`, createAndSaveNewCloud);
      }
      return sendFail(`new cloud add fail`, null);
    } catch (e) {
      const errorInfo = makeErrorInfoObjForHttpException(CloudService.name, "createCloud", e);
      throw new HttpException(errorInfo, 200);
    }
  }

  async findAll(): Promise<IResultReturn> {
    try {
      const findAllClouds = await this.cloudRepository.findWholeCloud();
      if (findAllClouds) {
        return sendOk(`return whole cloud info`, findAllClouds);
      }
      return sendFail(`return whole cloud info fail`, null);
    } catch (e) {
      const errorInfo = makeErrorInfoObjForHttpException(CloudService.name, "findAll", e);
      throw new HttpException(errorInfo, 200);
    }
  }

  async findOne(idOrName: string): Promise<IResultReturn> {
    try {
      const findOneCloud = await this.cloudRepository.findOneByIdOrName(idOrName);
      if (findOneCloud) {
        return sendOk(`cloud info`, findOneCloud);
      }
      return sendFail(`there is no cloud info`, null);
    } catch (e) {
      const errorInfo = makeErrorInfoObjForHttpException(CloudService.name, "findOne", e);
      throw new HttpException(errorInfo, 200);
    }
  }

  async update(id: string, updateCloudDto: UpdateCloudDto) {
    try {
      if (!isNaN(Number(id))) {
        const updateCloud = await this.cloudRepository.updateCloud(id, updateCloudDto);
        if (updateCloud !== null && updateCloud !== undefined) {
          return sendOk(`cloud update success, ID: ${updateCloud.id}`, updateCloud);
        }
        return sendFail(`cloud update fail, ID: ${id}`, null);
      }
      return sendFail(`cloud update fail, ID: ${id}`, null);
    } catch (e) {
      const errorInfo = makeErrorInfoObjForHttpException(CloudService.name, "updateCloud", e);
      throw new HttpException(errorInfo, 200);
    }
  }

  async remove(id: string): Promise<IResultReturn> {
    try {
      const removeCloud = await this.cloudRepository.removeCloud(id);
      if (removeCloud !== null) {
        return sendOk(`cloud remove success, ID: ${id}`, removeCloud);
      }
      return sendFail(`cloud remove fail, ID: ${id}`, null);
    } catch (e) {
      const errorInfo = makeErrorInfoObjForHttpException(CloudService.name, "deleteCloud", e);
      throw new HttpException(errorInfo, 200);
    }
  }
}
