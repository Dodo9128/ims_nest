import { TSwaggerPropertiesContainer, SwaggerPropertiesBuilder } from "../../libs/utils/swaggerPropertiesBuilder";

export const createVenueSuccessResult: TSwaggerPropertiesContainer = new SwaggerPropertiesBuilder()
  .makeOkObj("new venue add", {
    id: 1,
    name: "TEST_VENUE_1",
    description: "TEST_VENUE_DESCRIPTION",
    isLocal: false,
    updatedAt: "2022-11-23T09:33:17.554Z",
    registeredAt: "2022-11-23T09:33:17.554Z",
  })
  .build()
  .return();

export const createVenueFailResult: TSwaggerPropertiesContainer = new SwaggerPropertiesBuilder()
  .makeFailObj("new venue add fail")
  .build()
  .return();

export const findAllVenueSuccessResult: TSwaggerPropertiesContainer = new SwaggerPropertiesBuilder()
  .makeOkObj("return whole venue info", [
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
  .build()
  .return();

export const findAllVenueFailResult: TSwaggerPropertiesContainer = new SwaggerPropertiesBuilder()
  .makeFailObj("return whold venue info fail")
  .build()
  .return();

export const findOneVenueSuccessResult: TSwaggerPropertiesContainer = new SwaggerPropertiesBuilder()
  .makeOkObj("venue info", {
    id: 1,
    name: "TEST_VENUE_1",
    description: "TEST_VENUE_DESCRIPTION",
    isLocal: false,
    updatedAt: "2022-11-23T09:33:17.554Z",
    registeredAt: "2022-11-23T09:33:17.554Z",
  })
  .build()
  .return();

export const findOneVenueFailResult: TSwaggerPropertiesContainer = new SwaggerPropertiesBuilder()
  .makeFailObj("there is no venue info")
  .build()
  .return();

export const updateVenueSuccessResult: TSwaggerPropertiesContainer = new SwaggerPropertiesBuilder()
  .makeOkObj("venue update success, ID: 1", {
    id: 1,
    name: "TEST_VENUE_1",
    isLocal: false,
    description: "TEST_VENUE_DESCRIPTION",
    updatedAt: "2022-11-23T09:33:17.554Z",
    registeredAt: "2022-11-23T09:33:17.554Z",
  })
  .build()
  .return();

export const updateVenueFailResult: TSwaggerPropertiesContainer = new SwaggerPropertiesBuilder()
  .makeFailObj("venue update fail, ID: 1")
  .build()
  .return();

export const deleteVenueSuccessResult: TSwaggerPropertiesContainer = new SwaggerPropertiesBuilder()
  .makeOkObj("venue delete success, ID: 1", {
    id: 1,
    name: "TEST_VENUE_1",
    description: "TEST_VENUE_DESCRIPTION",
    isLocal: false,
    updatedAt: "2022-11-23T09:33:17.554Z",
    registeredAt: "2022-11-23T09:33:17.554Z",
  })
  .build()
  .return();

export const deleteVenueFailResult: TSwaggerPropertiesContainer = new SwaggerPropertiesBuilder()
  .makeFailObj("venue delete fail, ID: 1")
  .build()
  .return();
