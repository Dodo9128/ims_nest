import { CustomRepository } from "../db/typeorm-ex.decorator";
import { Cloud } from "../entities/cloud.entity";
import { CreateCloudDto } from "./dto/createCloud.dto";
import { UpdateCloudDto } from "./dto/updateCloud.dto";
import { Repository } from "typeorm";

@CustomRepository(Cloud)
export class CloudRepository extends Repository<Cloud> {
  /**
   *  모든 클라우드 정보 목록을 반환한다
   */
  async findWholeCloud(): Promise<Cloud[]> {
    return await this.find();
  }

  /**
   * 클라우드 정보를 생성한다.
   * @param {CreateCloudDto} [cloud] 클라우드
   */
  async createAndSaveCloud(cloud: CreateCloudDto): Promise<Cloud> {
    // return await this.save(cloud);
    return await this.save(cloud);
  }
}
