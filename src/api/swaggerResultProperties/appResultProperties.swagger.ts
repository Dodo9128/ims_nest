import { SwaggerPropertiesBuilder } from "../../libs/utils/swaggerPropertiesBuilder";

export const getHelloToImsReturn = new SwaggerPropertiesBuilder()
  .makeOkObj("IMS_CONVERTING_TO_NEST_JS", null)
  .build()
  .return();
