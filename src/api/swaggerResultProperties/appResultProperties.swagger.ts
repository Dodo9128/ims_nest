import { SwaggerPropertiesBuilder } from "../../libs/utils/swaggerPropertiesBuilder";
import { IResultReturn } from "../../libs/utils/functionReturn";

const getHelloToImsBuilder = new SwaggerPropertiesBuilder()
  .makeResult("ok")
  .makeMessage("IMS_CONVERTING_TO_NEST_JS")
  .makeData(null)
  .build();

export const getHelloToImsReturn = getHelloToImsBuilder.return();
