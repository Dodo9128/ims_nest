import { INestApplication } from "@nestjs/common";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";

/**
 * Swagger 세팅
 *
 * @param {INestApplication} app
 */
export function setupSwagger(app: INestApplication): void {
  const options = new DocumentBuilder()
    .setTitle("IMS API DOCS")
    .setDescription("IMS API DOCS")
    .setVersion("1.0.0")
    .setTermsOfService("https://4dreplay.com")
    .setContact("", "", "pfsupport@4dreplay.com")
    .setLicense("Apache 2.0", "http://www.apache.org/licenses/LICENSE-2.0.html")
    .setBasePath("/")
    // .setSchemePath(["http", "https"])
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup("swagger", app, document);
}
