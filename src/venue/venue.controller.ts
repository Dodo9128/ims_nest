import { Controller, Body, Param, Res, HttpStatus, UseFilters } from "@nestjs/common";
import { VenueService } from "./venue.service";
import { CreateVenueDto } from "./dto/createVenue.dto";
import { UpdateVenueDto } from "./dto/updateVenue.dto";
import { ApiTags } from "@nestjs/swagger";
import { IResultReturn } from "../libs/utils/functionReturn";
import { Response } from "express";
import { CreateVenue, RemoveVenue, FindAllVenues, FindOneVenue, UpdateVenue } from "./venue.decorator";

@Controller("venue")
@ApiTags("Venue")
export class VenueController {
  constructor(private readonly venueService: VenueService) {}

  @CreateVenue()
  async create(@Body() createVenueDto: CreateVenueDto, @Res() res: Response) {
    const result: IResultReturn = await this.venueService.create(createVenueDto);

    return res.status(HttpStatus.OK).json(result);
  }

  @FindAllVenues()
  async findAll(@Res() res: Response) {
    const result: IResultReturn = await this.venueService.findAll();

    return res.status(HttpStatus.OK).json(result);
  }

  @FindOneVenue()
  async findOne(@Param("idOrName") idOrName: string, @Res() res: Response) {
    const result: IResultReturn = await this.venueService.findOne(idOrName);

    return res.status(HttpStatus.OK).json(result);
  }

  @UpdateVenue()
  async update(@Param("id") id: string, @Body() updateVenueDto: UpdateVenueDto, @Res() res: Response) {
    const result: IResultReturn = await this.venueService.update(id, updateVenueDto);

    return res.status(HttpStatus.OK).json(result);
  }

  @RemoveVenue()
  async remove(@Param("id") id: string, @Res() res: Response) {
    const result: IResultReturn = await this.venueService.remove(id);

    return res.status(HttpStatus.OK).json(result);
  }
}
