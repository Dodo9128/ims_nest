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

  /**
   * Id / Name 으로 Cloud를 탐색한다.
   *
   * idOrName 은 id와 name 모두 가능하며
   *
   * !isNaN(Number(idOrName)) 일때는 id,
   *
   * isNaN(Number(idOrName)) 일때는 name으로 검색한다.
   * @param {string} [idOrName] ID or Name: string
   */
  async findOneByIdOrName(idOrName: string): Promise<Cloud> | null {
    let result;

    !isNaN(Number(idOrName))
      ? (result = await this.findOneBy({ id: idOrName }))
      : (result = await this.findOneBy({ name: idOrName }));
    return result;
  }

  /**
   * ID를 매개로 클라우드를 탐색하여 body의 사항들로 수정한다
   *
   * @param {string} id
   * @param {UpdateCloudDto} [updateCloud] 업데이트 할 베뉴 정보 object
   */
  async updateCloud(id: string, updateCloud: UpdateCloudDto): Promise<Cloud> {
    const cloud = await this.findOneBy({ id: id });
    if (updateCloud.name) {
      cloud.name = updateCloud.name;
    }
    // if (updateCloud.instance) {
    //   cloud.instance = updateCloud.instance;
    // }
    // if (updateCloud.storage) {
    //   // const storageArr = JSON.parse(cloud.storage);
    //   // storageArr.push(updateCloud.storage);
    //   // cloud.storage = JSON.stringify(storageArr);
    //
    //   // cloud.storage = JSON.stringify(updateCloud.storage);
    //   cloud.storage = updateCloud.storage;
    // }
    cloud.updatedAt = new Date();
    return await this.save(cloud);
  }

  /**
   * ID를 매개로 클라우드를 탐색하여 삭제한다.
   *
   * @param {string} [id]
   */
  async removeCloud(id: string): Promise<Cloud> | null {
    const cloud = await this.findOneBy({ id: id });
    if (cloud === null) {
      return null;
    }
    return await this.remove(cloud);
  }
}
