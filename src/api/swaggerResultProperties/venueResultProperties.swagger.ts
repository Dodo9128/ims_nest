import { SwaggerPropertiesBuilder } from "../../libs/utils/swaggerPropertiesBuilder";

const createVenueSuccessBuilder = new SwaggerPropertiesBuilder()
  .makeResult("ok")
  .makeMessage("new venue add")
  .makeData({
    id: 1,
    name: "TEST_VENUE_1",
    description: "TEST_VENUE_DESCRIPTION",
    isLocal: false,
    updatedAt: "2022-11-23T09:33:17.554Z",
    registeredAt: "2022-11-23T09:33:17.554Z",
  })
  .build();

const createVenueFailBuilder = new SwaggerPropertiesBuilder()
  .makeResult("fail")
  .makeMessage("new venue add fail")
  .makeData(null)
  .build();

const findAllVenueSuccessBuilder = new SwaggerPropertiesBuilder()
  .makeResult("ok")
  .makeMessage("return whole venue info")
  .makeData([
    {
      id: 1,
      name: "test1",
      description: "testmaking",
      isLocal: false,
      updatedAt: "2022-11-23T09:33:17.554Z",
      registeredAt: "2022-11-23T09:33:17.554Z",
    },
    {
      id: 2,
      name: "test2",
      description: "testmaking2",
      isLocal: false,
      updatedAt: "2022-11-23T09:33:17.554Z",
      registeredAt: "2022-11-23T09:33:17.554Z",
    },
  ])
  .build();

const findAllVenueFailBuilder = new SwaggerPropertiesBuilder()
  .makeResult("fail")
  .makeMessage("return whole venue info fail")
  .makeData(null)
  .build();

const findOneVenueSuccessBuilder = new SwaggerPropertiesBuilder()
  .makeResult("ok")
  .makeMessage("venue info")
  .makeData({
    id: 1,
    name: "TEST_VENUE_1",
    description: "TEST_VENUE_DESCRIPTION",
    isLocal: false,
    updatedAt: "2022-11-23T09:33:17.554Z",
    registeredAt: "2022-11-23T09:33:17.554Z",
  })
  .build();

const findOneVenueFailBuilder = new SwaggerPropertiesBuilder()
  .makeResult("fail")
  .makeMessage("there is no venue info")
  .makeData(null)
  .build();

const updateVenueSuccessBuilder = new SwaggerPropertiesBuilder()
  .makeResult("ok")
  .makeMessage("venue update success, ID: 1")
  .makeData({
    id: 1,
    name: "TEST_VENUE_1",
    isLocal: false,
    description: "TEST_VENUE_DESCRIPTION",
    updatedAt: "2022-11-23T09:33:17.554Z",
    registeredAt: "2022-11-23T09:33:17.554Z",
  })
  .build();

const updateVenueFailBuilder = new SwaggerPropertiesBuilder()
  .makeResult("fail")
  .makeMessage("venue update fail, ID: 1")
  .makeData(null)
  .build();

const deleteVenueSuccessBuilder = new SwaggerPropertiesBuilder()
  .makeResult("ok")
  .makeMessage("venue delete success, ID: 1")
  .makeData({
    id: 1,
    name: "TEST_VENUE_1",
    description: "TEST_VENUE_DESCRIPTION",
    isLocal: false,
    updatedAt: "2022-11-23T09:33:17.554Z",
    registeredAt: "2022-11-23T09:33:17.554Z",
  })
  .build();

const deleteVenueFailBuilder = new SwaggerPropertiesBuilder()
  .makeResult("fail")
  .makeMessage("venue delete fail, ID: 1")
  .makeData(null)
  .build();

export const createVenueSuccessResult = createVenueSuccessBuilder.return();

export const createVenueFailResult = createVenueFailBuilder.return();

export const findAllVenueSuccessResult = findAllVenueSuccessBuilder.return();

export const findAllVenueFailResult = findAllVenueFailBuilder.return();

export const findOneVenueSuccessResult = findOneVenueSuccessBuilder.return();

export const findOneVenueFailResult = findOneVenueFailBuilder.return();

export const updateVenueSuccessResult = updateVenueSuccessBuilder.return();

export const updateVenueFailResult = updateVenueFailBuilder.return();

export const deleteVenueSuccessResult = deleteVenueSuccessBuilder.return();

export const deleteVenueFailResult = deleteVenueFailBuilder.return();

// export const createVenueSuccessResult = {
//   result: {
//     type: "string",
//     description: "result",
//     example: "ok",
//   },
//   message: {
//     type: "string",
//     description: "message",
//     example: "new venue add",
//   },
//   data: {
//     type: "object",
//     description: "data",
//     example: {
//       id: 1,
//       name: "TEST_VENUE_1",
//       description: "TEST_VENUE_DESCRIPTION",
//       updatedAt: "2022-11-23T09:33:17.554Z",
//       registeredAt: "2022-11-23T09:33:17.554Z",
//       systems: "[]",
//     },
//   },
// };

// export const createVenueFailResult = {
//   result: {
//     type: "string",
//     description: "result",
//     example: "fail",
//   },
//   message: {
//     type: "string",
//     description: "message",
//     example: "new venue add fail",
//   },
//   data: {
//     type: null,
//     description: "data",
//     example: null,
//   },
// };
//
// export const findAllVenueSuccessResult = {
//   result: {
//     type: "string",
//     description: "result",
//     example: "ok",
//   },
//   message: {
//     type: "string",
//     description: "message",
//     example: "return whole venue info",
//   },
//   data: {
//     type: "array",
//     description: "data",
//     example: [
//       {
//         id: 1,
//         name: "test1",
//         description: "testmaking",
//         updatedAt: "2022-11-23T09:33:17.554Z",
//         registeredAt: "2022-11-23T09:33:17.554Z",
//         systems: "[]",
//       },
//       {
//         id: 2,
//         name: "test2",
//         description: "testmaking2",
//         updatedAt: "2022-11-23T09:33:17.554Z",
//         registeredAt: "2022-11-23T09:33:17.554Z",
//         systems: "[1]",
//       },
//     ],
//   },
// };
//
// export const findAllVenueFailResult = {
//   result: {
//     type: "string",
//     description: "result",
//     example: "fail",
//   },
//   message: {
//     type: "string",
//     description: "message",
//     example: "return whole venue info fail",
//   },
//   data: {
//     type: null,
//     description: "data",
//     example: null,
//   },
// };
//
// export const findOneVenueSuccessResult = {
//   result: {
//     type: "string",
//     description: "result",
//     example: "ok",
//   },
//   message: {
//     type: "string",
//     description: "message",
//     example: "venue info",
//   },
//   data: {
//     type: "object",
//     description: "data",
//     example: {
//       id: 1,
//       name: "TEST_VENUE_1",
//       description: "TEST_VENUE_DESCRIPTION",
//       updatedAt: "2022-11-23T09:33:17.554Z",
//       registeredAt: "2022-11-23T09:33:17.554Z",
//       systems: "[]",
//     },
//   },
// };
//
// export const findOneVenueFailResult = {
//   result: {
//     type: "string",
//     description: "result",
//     example: "fail",
//   },
//   message: {
//     type: "string",
//     description: "message",
//     example: "there is no venue info",
//   },
//   data: {
//     type: null,
//     description: "data",
//     example: null,
//   },
// };
//
// export const updateVenueSuccessResult = {
//   result: {
//     type: "string",
//     description: "result",
//     example: "ok",
//   },
//   message: {
//     type: "string",
//     description: "message",
//     example: "venue update success, ID: 1",
//   },
//   data: {
//     type: "object",
//     description: "data",
//     example: {
//       id: 1,
//       name: "TEST_VENUE_1",
//       description: "TEST_VENUE_DESCRIPTION",
//       updatedAt: "2022-11-23T09:33:17.554Z",
//       registeredAt: "2022-11-23T09:33:17.554Z",
//       systems: "[]",
//     },
//   },
// };
//
// export const updateVenueFailResult = {
//   result: {
//     type: "string",
//     description: "result",
//     example: "fail",
//   },
//   message: {
//     type: "string",
//     description: "message",
//     example: "venue update fail, ID: 1",
//   },
//   data: {
//     type: null,
//     description: "data",
//     example: null,
//   },
// };
//
// export const deleteVenueSuccessResult = {
//   result: {
//     type: "string",
//     description: "result",
//     example: "ok",
//   },
//   message: {
//     type: "string",
//     description: "message",
//     example: "venue delete success, ID: 1",
//   },
//   data: {
//     type: "object",
//     description: "data",
//     example: {
//       id: 1,
//       name: "TEST_VENUE_1",
//       description: "TEST_VENUE_DESCRIPTION",
//       updatedAt: "2022-11-23T09:33:17.554Z",
//       registeredAt: "2022-11-23T09:33:17.554Z",
//       systems: "[]",
//     },
//   },
// };
//
// export const deleteVenueFailResult = {
//   result: {
//     type: "string",
//     description: "result",
//     example: "fail",
//   },
//   message: {
//     type: "string",
//     description: "message",
//     example: "venue delete fail, ID: 1",
//   },
//   data: {
//     type: null,
//     description: "data",
//     example: null,
//   },
// };
