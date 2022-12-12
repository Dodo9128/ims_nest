import { Body, Controller, HttpStatus, Res } from "@nestjs/common";
import { VenueController } from "../../venue/venue.controller";
import { CreateVenue } from "../../venue/venue.decorator";
import { ApiTags } from "@nestjs/swagger";
import { CreateVenueDto } from "../../venue/dto/createVenue.dto";
import { IResultReturn } from "../../libs/utils/functionReturn";
import { Response } from "express";

@Controller("web/venue")
@ApiTags("FRONT-END[venue] >>> IMS")
export class WebVenueController {
  constructor(private readonly venueController: VenueController) {}

  @CreateVenue()
  async create(@Body() createVenueDto: CreateVenueDto, @Res() res: Response) {
    const result: IResultReturn = await this.venueController.insertVenue(createVenueDto);

    // return VenueController.create(createVenueDto);
    return res.status(HttpStatus.OK).json(result);
  }
}
