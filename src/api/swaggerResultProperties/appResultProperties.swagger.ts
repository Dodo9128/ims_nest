import { TSwaggerPropertiesContainer, SwaggerPropertiesBuilder } from "../../libs/utils/swaggerPropertiesBuilder";

export const getHelloToImsReturn: TSwaggerPropertiesContainer = new SwaggerPropertiesBuilder()
  .makeOkObj("IMS_CONVERTING_TO_NEST_JS", null)
  .build()
  .return();
