import { SwaggerPropertiesBuilder } from "../../libs/utils/swaggerPropertiesBuilder";

const getHelloToImsBuilder = new SwaggerPropertiesBuilder().makeOkObj("IMS_CONVERTING_TO_NEST_JS", null).build();

export const getHelloToImsReturn = getHelloToImsBuilder.return();
