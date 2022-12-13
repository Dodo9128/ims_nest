import { Body, Controller, HttpStatus, Param, Res } from "@nestjs/common";
import { VenueController } from "../../venue/venue.controller";
import { CreateVenue, FindAllVenues, FindOneVenue, RemoveVenue, UpdateVenue } from "../decorator/venue.decorator";
import { ApiTags } from "@nestjs/swagger";
import { CreateVenueDto } from "../../venue/dto/createVenue.dto";
import { IResultReturn } from "../../libs/utils/functionReturn";
import { Response } from "express";
import { UpdateVenueDto } from "../../venue/dto/updateVenue.dto";

@Controller("web/venue")
@ApiTags("91. FRONT-END[venue] >>> IMS")
export class WebVenueController {
  constructor(private readonly venueController: VenueController) {}

  @CreateVenue()
  async create(@Body() createVenueDto: CreateVenueDto, @Res() res: Response) {
    const result: IResultReturn = await this.venueController.insertVenue(createVenueDto);
    return res.status(HttpStatus.OK).json(result);
  }

  @FindAllVenues()
  async findAll(@Res() res: Response) {
    const result: IResultReturn = await this.venueController.findAllVenue();
    return res.status(HttpStatus.OK).json(result);
  }

  @FindOneVenue()
  async findOne(@Param("idOrName") idOrName: string, @Res() res: Response) {
    const result: IResultReturn = await this.venueController.findOneVenue(idOrName);
    return res.status(HttpStatus.OK).json(result);
  }

  @UpdateVenue()
  async update(@Param("id") id: string, @Body() updateVenueDto: UpdateVenueDto, @Res() res: Response) {
    const result: IResultReturn = await this.venueController.updateVenue(id, updateVenueDto);
    return res.status(HttpStatus.OK).json(result);
  }

  @RemoveVenue()
  async remove(@Param("id") id: string, @Res() res: Response) {
    const result: IResultReturn = await this.venueController.removeVenue(id);
    return res.status(HttpStatus.OK).json(result);
  }
}
