import { HttpException, Injectable } from "@nestjs/common";
import { CreateVenueDto } from "./dto/createVenue.dto";
import { UpdateVenueDto } from "./dto/updateVenue.dto";
import { IResultReturn, sendOk, sendFail } from "../libs/utils/functionReturn";
import { VenueRepository } from "./venue.repository";
import { LoggerService } from "../../config/winstonConfiguration";
import { makeErrorInfoObjForHttpException } from "../libs/utils/globalErrorHandler";

@Injectable()
export class VenueService {
  private static readonly logger = new LoggerService(VenueService.name);

  constructor(private venueRepository: VenueRepository) {}

  async create(venueData: CreateVenueDto): Promise<IResultReturn> {
    try {
      const createAndSaveNewVenue = await this.venueRepository.createAndSaveVenue(venueData);
      if (createAndSaveNewVenue) {
        return sendOk(`new venue add`, createAndSaveNewVenue);
      }
      // create 실패 시 repository에서 throw Error 하기 때문에 타지 않는 로직
      return sendFail(`new venue add fail`, null);
    } catch (e) {
      const errorInfo = makeErrorInfoObjForHttpException(VenueService.name, "createVenue", e);
      throw new HttpException(errorInfo, 200);
    }
  }

  async findAll(): Promise<IResultReturn> {
    try {
      const findAllVenue = await this.venueRepository.findWholeVenue();
      if (findAllVenue) {
        return sendOk(`return whole venue info`, findAllVenue);
      }
      // 결과값이 없어도 [] 반환하기 때문에 타지 않을 로직
      // fail 난다면 db와의 커넥션을 의심해야 함, 그 전에 다른 throw Error로 exception 처리될 것
      return sendFail(`return whole venue info fail`, null);
    } catch (e) {
      const errorInfo = makeErrorInfoObjForHttpException(VenueService.name, "findAll", e);
      throw new HttpException(errorInfo, 200);
    }
  }

  async findOne(idOrName: string): Promise<IResultReturn> {
    try {
      const findOneVenue = await this.venueRepository.findOneByIdOrName(idOrName);
      if (findOneVenue) {
        return sendOk(`venue info`, findOneVenue);
      }
      return sendFail(`there is no venue info`, null);
    } catch (e) {
      const errorInfo = makeErrorInfoObjForHttpException(VenueService.name, "findOne", e);
      throw new HttpException(errorInfo, 200);
    }
  }

  async update(id: string, updateVenueDto: UpdateVenueDto): Promise<IResultReturn> {
    try {
      if (!isNaN(Number(id))) {
        const updateVenue = await this.venueRepository.updateVenue(id, updateVenueDto);
        if (updateVenue !== null && updateVenue !== undefined) {
          return sendOk(`venue update success, ID: ${updateVenue.id}`, updateVenue);
        }
        return sendFail(`venue update fail, ID: ${id}`, null);
      }
      return sendFail(`venue update fail, ID: ${id}`, null);
    } catch (e) {
      const errorInfo = makeErrorInfoObjForHttpException(VenueService.name, "updateVenue", e);
      throw new HttpException(errorInfo, 200);
    }
  }

  async remove(id: string): Promise<IResultReturn> {
    try {
      const deleteVenue = await this.venueRepository.removeVenue(id);
      if (deleteVenue !== null) {
        return sendOk(`venue delete success, ID: ${id}`, deleteVenue);
      }
      return sendFail(`venue delete fail, ID: ${id}`, null);
    } catch (e) {
      const errorInfo = makeErrorInfoObjForHttpException(VenueService.name, "deleteVenue", e);
      throw new HttpException(errorInfo, 200);
    }
  }
}
