import { HttpException, Injectable, Logger } from "@nestjs/common";
import { CreateVenueDto } from "./dto/createVenue.dto";
import { UpdateVenueDto } from "./dto/updateVenue.dto";
import { IResultReturn, sendOk, sendFail, objectToStringForDebug } from "../libs/utils/functionReturn";
import { VenueRepository } from "./venue.repository";
import { LoggerService } from "../../config/winstonConfiguration";
import { makeErrorInfoObjForHttpException } from "../libs/utils/globalErrorHandler";
// import { Venue } from "../entities/venue.entity";
// import { Repository } from "typeorm";
// import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class VenueService {
  // private static readonly logger = new Logger(VenueService.name);
  private static readonly logger = new LoggerService(VenueService.name);

  constructor(
    // @Inject('VENUE_REPOSITORY')
    // @InjectRepository(Venue)
    // public readonly venueRepository: Repository<Venue>,

    // @InjectRepository(Venue)
    private venueRepository: VenueRepository,
  ) {}

  async create(venueData: CreateVenueDto): Promise<IResultReturn> {
    try {
      const currentVenueList = await this.venueRepository.findWholeVenue();
      const totalVenueLength = currentVenueList.length;

      venueData.id = String(totalVenueLength + 1);
      venueData.systems = "[]";

      const createAndSaveNewVenue = await this.venueRepository.createAndSaveVenue(venueData);
      if (createAndSaveNewVenue) {
        // VenueService.logger.debug("SUCCESS : venueService.createVenue", objectToStringForDebug(createAndSaveNewVenue));
        return sendOk(`new venue add`, createAndSaveNewVenue);
      }
      // VenueService.logger.debug("FAIL : venueService.createVenue", objectToStringForDebug(createAndSaveNewVenue));
      return sendFail(`new venue add fail`, null);
    } catch (e) {
      // VenueService.logger.error("ERROR : venueService.createVenue", e.message);
      // return sendFail(`${e.message}`, null);
      // throw new Error(JSON.stringify(sendFail(`${e.message}`, null)));
      const errorInfo = makeErrorInfoObjForHttpException(VenueService.name, "createVenue", e);
      throw new HttpException(errorInfo, 200);
    }
  }

  async findAll(): Promise<IResultReturn> {
    try {
      const findAllVenue = await this.venueRepository.findWholeVenue();
      if (findAllVenue) {
        // VenueService.logger.debug("SUCCESS : venueService.findAll", objectToStringForDebug(findAllVenue));
        return sendOk(`return whole venue info`, findAllVenue);
      }
      // VenueService.logger.debug("FAIL : venueService.findAll", objectToStringForDebug(findAllVenue));
      return sendFail(`return whole venue info fail`, null);
    } catch (e) {
      // VenueService.logger.error("ERROR : venueService.findAll", e.message);
      // return sendFail(`${e.message}`, null);
      const errorInfo = makeErrorInfoObjForHttpException(VenueService.name, "findAll", e);
      throw new HttpException(errorInfo, 200);
    }
  }

  async findOne(idOrName: string): Promise<IResultReturn> {
    try {
      const findOneVenue = await this.venueRepository.findOneByIdOrName(idOrName);
      if (findOneVenue) {
        // VenueService.logger.debug("SUCCESS : venueService.findOne", objectToStringForDebug(findOneVenue));
        return sendOk(`venue info`, findOneVenue);
      }
      // VenueService.logger.debug("FAIL : venueService.findOne", objectToStringForDebug(findOneVenue));
      return sendFail(`there is no venue info`, null);
    } catch (e) {
      // VenueService.logger.error("ERROR : venueService.findOne", e.message);
      // return sendFail(`${e.message}`, null);
      const errorInfo = makeErrorInfoObjForHttpException(VenueService.name, "findOne", e);
      throw new HttpException(errorInfo, 200);
    }
  }

  async update(id: string, updateVenueDto: UpdateVenueDto): Promise<IResultReturn> {
    try {
      if (!isNaN(Number(id))) {
        const updateVenue = await this.venueRepository.updateVenue(id, updateVenueDto);
        if (updateVenue !== null && updateVenue !== undefined) {
          // VenueService.logger.debug("SUCCESS : venueService.updateVenue", objectToStringForDebug(updateVenue));
          return sendOk(`venue update success, ID: ${updateVenue.id}`, updateVenue);
        }
        // VenueService.logger.debug("FAIL : venueService.updateVenue", objectToStringForDebug(updateVenue));
        return sendFail(`venue update fail, ID: ${id}`, null);
      }
      return sendFail(`venue update fail, ID: ${id}`, null);
    } catch (e) {
      // VenueService.logger.error("ERROR : venueService.updateVenue", e.message);
      // return sendFail(`${e.message}`, null);
      const errorInfo = makeErrorInfoObjForHttpException(VenueService.name, "updateVenue", e);
      throw new HttpException(errorInfo, 200);
    }
  }

  async remove(id: string): Promise<IResultReturn> {
    try {
      const deleteVenue = await this.venueRepository.removeVenue(id);
      if (deleteVenue !== null) {
        // VenueService.logger.debug("SUCCESS : venueService.deleteVenue", objectToStringForDebug(deleteVenue));
        return sendOk(`venue delete success, ID: ${id}`, deleteVenue);
      }
      // VenueService.logger.debug("FAIL : venueService.deleteVenue", objectToStringForDebug(deleteVenue));
      return sendFail(`venue delete fail, ID: ${id}`, null);
    } catch (e) {
      // VenueService.logger.error("ERROR : venueService.deleteVenue", e.message);
      // return sendFail(`${e.message}`, null);
      const errorInfo = makeErrorInfoObjForHttpException(VenueService.name, "deleteVenue", e);
      throw new HttpException(errorInfo, 200);
    }
  }
}
