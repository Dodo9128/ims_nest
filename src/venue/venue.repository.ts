import { CustomRepository } from "../db/typeorm-ex.decorator";
import { Venue } from "../entities/venue.entity";
import { Repository } from "typeorm";
import { CreateVenueDto } from "./dto/createVenue.dto";
import { UpdateVenueDto } from "./dto/updateVenue.dto";

@CustomRepository(Venue)
export class VenueRepository extends Repository<Venue> {
  /**
   *  모든 베뉴 목록을 반환한다
   */
  async findWholeVenue(): Promise<Venue[]> {
    return await this.find();
  }

  /**
   * 베뉴를 생성한다.
   * @param {CreateVenueDto} [venue] 베뉴
   */
  async createAndSaveVenue(venue: CreateVenueDto): Promise<Venue> {
    return await this.save(venue);
  }

  /**
   * Id / Name 으로 Venue를 탐색한다.
   *
   * idOrName 은 id와 name 모두 가능하며
   *
   * !isNaN(Number(idOrName)) 일때는 id,
   *
   * isNaN(Number(idOrName)) 일때는 name으로 검색한다.
   * @param {string} [idOrName] ID or Name: string
   */
  async findOneByIdOrName(idOrName: string): Promise<Venue> | null {
    let result;

    !isNaN(Number(idOrName))
      ? (result = await this.findOneBy({ id: idOrName }))
      : (result = await this.findOneBy({ name: idOrName }));
    return result;
  }

  /**
   * ID를 매개로 베뉴를 탐색하여 body의 사항들로 수정한다
   *
   * @param {string} id
   * @param {UpdateVenueDto} [updateVenue] 업데이트 할 베뉴 정보 object
   */
  async updateVenue(id: string, updateVenue: UpdateVenueDto): Promise<Venue> | null {
    const venue = await this.findOneBy({ id: id });
    if (updateVenue.systemId) {
      const systemIdArr = JSON.parse(venue.systems);
      systemIdArr.push(updateVenue.systemId);
      venue.systems = JSON.stringify(systemIdArr);
    }
    if (updateVenue.name) {
      venue.name = updateVenue.name;
    }
    if (updateVenue.description) {
      venue.description = updateVenue.description;
    }
    venue.updatedAt = new Date();
    return await this.save(venue);
  }

  /**
   * ID를 매개로 베뉴를 탐색하여 삭제한다.
   *
   * @param {string} [id]
   */
  async deleteVenue(id: string): Promise<Venue> | null {
    const venue = await this.findOneBy({ id: id });
    if (venue === null) {
      return null;
    }
    return await this.remove(venue);
  }
}
