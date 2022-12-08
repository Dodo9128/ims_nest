// import { Test, TestingModule } from "@nestjs/testing";
// import { getRepositoryToken } from "@nestjs/typeorm";
// import { VenueService } from "../../../src/venue/venue.service";
// import { Venue } from "../../../src/entities/venue.entity";
// import { Repository } from "typeorm";
// import { venueProviders } from "../../../src/venue/venue.providers";
// import { databaseProviders } from "../../../src/db/database.providers";
// import {
//   IResultReturn,
//   sendOk,
//   sendFail,
// } from "../../../src/libs/utils/functionReturn";
// import { VenueRepository } from "../../../src/venue/venue.repository";
//
// const mockVenueRepository = () => ({
//   save: jest.fn(),
//   find: jest.fn(),
//   findOneBy: jest.fn(),
//   findOne: jest.fn(),
//   softDelete: jest.fn(),
// });
//
// type MockRepository<T = any> = Partial<Record<keyof Repository<T>, jest.Mock>>;
//
// describe("VenueService", () => {
//   let venueService: VenueService;
//   // let venueRepository: Repository<Venue>;
//   let venueRepository: MockRepository<Venue>;
//   // let venueRepository: MockRepository<VenueRepository>;
//
//   beforeEach(async () => {
//     const module: TestingModule = await Test.createTestingModule({
//       providers: [
//         // ...databaseProviders,
//         // ...venueProviders,
//         VenueService,
//         VenueRepository,
//         // Repository<Venue>,
//         {
//           provide: getRepositoryToken(Venue),
//           useValue: mockVenueRepository(),
//         },
//       ],
//     }).compile();
//
//     venueService = module.get<VenueService>(VenueService);
//     // venueRepository = module.get<Repository<Venue>>(Repository<Venue>);
//     venueRepository = module.get<MockRepository<Venue>>(
//       getRepositoryToken(Venue),
//     );
//   });
//
//   it("should be defined", () => {
//     expect(venueService).toBeDefined();
//   });
//
//   describe("createVenue()_mock", () => {
//     const createObj = {
//       id: "1",
//       name: "test_1",
//       description: "test_1_desc",
//       systems: "[]",
//     };
//     // const createFailObj = {
//     //   id: '1',
//     //   name: 123123123,
//     //   description: 152,
//     //   systems: '[]',
//     // };
//
//     // it('should be defined', () => {
//     //   expect(venueService).toBeDefined();
//     // });
//     //
//     // it('venue findOne', () => {
//     //
//     // })
//     it("should fail on exception", async () => {
//       venueRepository.find.mockRejectedValue("ERROR");
//       venueRepository.save.mockRejectedValue("ERROR");
//       // venueRepository.find.mockResolvedValue('ERROR');
//       // venueRepository.save.mockResolvedValue('ERROR');
//       // console.log(await venueService.createVenue(createObj));
//       const result = await venueService.createVenue(createObj);
//
//       console.log("SHOULD FAIL EXCEPTION : ", result);
//
//       // const result = await venueService.save(createSuccessObj);
//
//       const stringResult = sendFail("ERROR : venueService.createVenue", null);
//
//       expect(result).toEqual(stringResult);
//     });
//
//     it("should success", async () => {
//       venueRepository.find.mockResolvedValue([]);
//       venueRepository.save.mockResolvedValue(createObj);
//       const result = await venueService.createVenue(createObj);
//
//       console.log(`resultresult`, result);
//
//       expect(venueRepository.find).toHaveBeenCalledTimes(1);
//
//       expect(venueRepository.save).toHaveBeenCalledTimes(1);
//       expect(venueRepository.save).toHaveBeenCalledWith(createObj);
//
//       const stringResult = sendOk("new venue add", createObj);
//
//       expect(result).toEqual(stringResult);
//     });
//   });
// });
