import { Body, Controller, HttpStatus, Param, Res, UploadedFile, UseInterceptors } from "@nestjs/common";
import { VenueService } from "./venue.service";
import { CreateVenueDto } from "./dto/createVenue.dto";
import { UpdateVenueDto } from "./dto/updateVenue.dto";
import { ApiExcludeController, ApiTags } from "@nestjs/swagger";
import { IResultReturn } from "../libs/utils/functionReturn";
import { Response } from "express";
import { FileInterceptor } from "@nestjs/platform-express";
import * as XLSX from "xlsx";
import {
  CreateVenue,
  FindAllVenues,
  FindOneVenue,
  RemoveVenue,
  UpdateVenue,
  UpLoadIMSExcel,
} from "../api/decorator/venue.decorator";

@ApiExcludeController()
@Controller("venue")
@ApiTags("Venue")
export class VenueController {
  constructor(private readonly venueService: VenueService) {}

  /**
   * venue endpoint는 Swagger 노출 X(외부에서 사용하지 않도록)
   */
  @CreateVenue()
  async createVenue(@Body() createVenueDto: CreateVenueDto, @Res() res: Response) {
    const result: IResultReturn = await this.insertVenue(createVenueDto);
    return res.status(HttpStatus.OK).json(result);
  }

  @FindAllVenues()
  async findAll(@Res() res: Response) {
    const result: IResultReturn = await this.findAllVenue();
    return res.status(HttpStatus.OK).json(result);
  }

  @FindOneVenue()
  async findOne(@Param("idOrName") idOrName: string, @Res() res: Response) {
    const result: IResultReturn = await this.findOneVenue(idOrName);
    return res.status(HttpStatus.OK).json(result);
  }

  @UpdateVenue()
  async update(@Param("id") id: string, @Body() updateVenueDto: UpdateVenueDto, @Res() res: Response) {
    const result: IResultReturn = await this.updateVenue(id, updateVenueDto);
    return res.status(HttpStatus.OK).json(result);
  }

  @RemoveVenue()
  async remove(@Param("id") id: string, @Res() res: Response) {
    const result: IResultReturn = await this.removeVenue(id);
    return res.status(HttpStatus.OK).json(result);
  }

  /**
   * Venue Create Request
   * @param {CreateVenueDto} [createVenueDto] 베뉴 생성 object
   */
  public insertVenue: (createVenueDto: CreateVenueDto) => Promise<IResultReturn> = async (
    createVenueDto: CreateVenueDto,
  ) => {
    return await this.venueService.create(createVenueDto);
  };

  /**
   * Venue FindAll Request
   */
  public findAllVenue: () => Promise<IResultReturn> = async () => {
    return await this.venueService.findAll();
  };

  /**
   * Venue FindOne Request
   * @param {string} [idOrName] Venue ID/Name
   */
  public findOneVenue: (idOrName: string) => Promise<IResultReturn> = async (idOrName: string) => {
    return await this.venueService.findOne(idOrName);
  };

  /**
   * Venue Update Request
   * @param {string} [id] Venue ID
   * @param {UpdateVenueDto} [updateVenueDto] Venue Update DataObject
   */
  public updateVenue: (id: string, updateVenueDto: UpdateVenueDto) => Promise<IResultReturn> = async (
    id: string,
    updateVenueDto: UpdateVenueDto,
  ) => {
    return await this.venueService.update(id, updateVenueDto);
  };

  /**
   * Venue Delete Request
   * @param {string} [id] Venue ID
   */
  public removeVenue: (id: string) => Promise<IResultReturn> = async (id: string) => {
    return await this.venueService.remove(id);
  };

  // @CreateVenue()
  // async create(@Body() createVenueDto: CreateVenueDto, @Res() res: Response) {
  //   const result: IResultReturn = await this.venueService.create(createVenueDto);
  //
  //   return res.status(HttpStatus.OK).json(result);
  // }

  // @FindAllVenues()
  // async findAll(@Res() res: Response) {
  //   const result: IResultReturn = await this.venueService.findAll();
  //
  //   return res.status(HttpStatus.OK).json(result);
  // }

  // @FindOneVenue()
  // async findOne(@Param("idOrName") idOrName: string, @Res() res: Response) {
  //   const result: IResultReturn = await this.venueService.findOne(idOrName);
  //
  //   return res.status(HttpStatus.OK).json(result);
  // }
  //
  // @UpdateVenue()
  // async update(@Param("id") id: string, @Body() updateVenueDto: UpdateVenueDto, @Res() res: Response) {
  //   const result: IResultReturn = await this.venueService.update(id, updateVenueDto);
  //
  //   return res.status(HttpStatus.OK).json(result);
  // }
  //
  // @RemoveVenue()
  // async remove(@Param("id") id: string, @Res() res: Response) {
  //   const result: IResultReturn = await this.venueService.remove(id);
  //
  //   return res.status(HttpStatus.OK).json(result);
  // }

  /**
   * Excel File Upload/Download Request
   * @param {ExcelFile} [file] IMS에 업로드할 엑셀 파일_xlsx 포맷
   */
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
