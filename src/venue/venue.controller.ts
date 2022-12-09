import { Controller, Body, Param, Res, HttpStatus, UseFilters, UseInterceptors, UploadedFile } from "@nestjs/common";
import { VenueService } from "./venue.service";
import { CreateVenueDto } from "./dto/createVenue.dto";
import { UpdateVenueDto } from "./dto/updateVenue.dto";
import { ApiExcludeController, ApiTags } from "@nestjs/swagger";
import { IResultReturn } from "../libs/utils/functionReturn";
import { Response } from "express";
import { CreateVenue, RemoveVenue, FindAllVenues, FindOneVenue, UpdateVenue, UpLoadIMSExcel } from "./venue.decorator";
import { FileInterceptor } from "@nestjs/platform-express";
import * as XLSX from "xlsx";

@ApiExcludeController()
@Controller("venue")
@ApiTags("Venue")
export class VenueController {
  constructor(private readonly venueService: VenueService) {}

  // @CreateVenue()
  // async create(@Body() createVenueDto: CreateVenueDto, @Res() res: Response) {
  //   const result: IResultReturn = await this.venueService.create(createVenueDto);
  //
  //   return res.status(HttpStatus.OK).json(result);
  // }

  /**
   * venue endpoint는 Swagger 노출 X(외부에서 사용하지 않도록)
   * web/venue 밑으로 venueController 사용할 수 있도록 설정 중
   */

  /**
   * Venue Create Request
   * @param {CreateVenueDto} [createVenueDto] 베뉴 생성 object
   */
  public create: (createVenueDto: CreateVenueDto) => Promise<IResultReturn> = async (
    createVenueDto: CreateVenueDto,
  ) => {
    return await this.venueService.create(createVenueDto);
  };

  @CreateVenue()
  async createVenue(@Body() createVenueDto: CreateVenueDto, @Res() res: Response) {
    return res.status(HttpStatus.OK).json(await this.create(createVenueDto));
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

  // Excel file upload 테스트
  @UpLoadIMSExcel()
  @UseInterceptors(FileInterceptor("file"))
  async uploadExcel(@UploadedFile() file, @Res() res: Response) {
    const workbook = XLSX.read(file.buffer, { type: "buffer" });
    // console.log("WORKBOOK", workbook);
    const sheetName = workbook.SheetNames[0];
    const sheetName2 = workbook.SheetNames[1];

    const sheet1 = workbook.Sheets[sheetName];
    const sheet2 = workbook.Sheets[sheetName2];

    const rows1 = XLSX.utils.sheet_to_json(sheet1);

    const rows2 = XLSX.utils.sheet_to_json(sheet2);

    for (const row of rows1) {
      const values = Object.keys(row).map(key => row[key]);
      console.log(values);
    }
    for (const row of rows2) {
      const values = Object.keys(row).map(key => row[key]);
      console.log(values);
    }
    // return res.status(HttpStatus.OK).json(workbook);
    const wbout = XLSX.write(workbook, { bookType: "xlsx", type: "base64" });
    return res.end(Buffer.from(wbout, "base64"));
  }
}
