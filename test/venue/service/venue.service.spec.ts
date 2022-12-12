import { Test, TestingModule } from "@nestjs/testing";
import * as request from "supertest";
import { AppModule } from "../../../src/app.module";
import { INestApplication } from "@nestjs/common";

process.env.NODE_ENV = "test";

let app: INestApplication;

const venueIdArr = [];
const venueNameArr = [];

describe("VenueApiTest", () => {
  let module: TestingModule;

  beforeAll(async () => {
    module = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = module.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    // await request(app).delete();
    // todo! remove on db
    await app.close();
  });

  it(`should validate the app module`, () => {
    expect(app).toBeDefined();
  });

  // createVenue Test
  it("service_createVenue", async () => {
    const response = await request(app.getHttpServer()).post("/venue/insertVenue").send({
      name: "API_TEST_VENUE_1",
      description: "API_TEST_VENUE_DESCRIPTION_1",
      isLocal: false,
    });

    expect(response.statusCode).toEqual(200);
    expect(response.body.result).toEqual("ok");
    expect(response.body.message).toEqual("new venue add");
    expect(response.body.data).not.toEqual(null);
    expect(response.body.data.name).toEqual("API_TEST_VENUE_1");
    expect(response.body.data.description).toEqual("API_TEST_VENUE_DESCRIPTION_1");
    expect(response.body.data.isLocal).toEqual(false);

    venueIdArr.push(response.body.data.id);
    venueNameArr.push(response.body.data.name);
  });

  // findAll Test
  it("service_findAll", async () => {
    const response = await request(app.getHttpServer()).get("/venue/listVenue").send();

    expect(response.statusCode).toEqual(200);
    expect(response.body.result).toEqual("ok");
    expect(response.body.message).toEqual("return whole venue info");
    expect(response.body.data).not.toEqual(null);

    const beforeLength: number = response.body.data.length;

    for (let i = 2; i < 6; i++) {
      const makeFewVenue = await request(app.getHttpServer())
        .post("/venue/insertVenue")
        .send({
          name: `API_TEST_VENUE_${i}`,
          description: `API_TEST_VENUE_DESCRIPTION_${i}`,
          isLocal: false,
        });
    }

    const response2 = await request(app.getHttpServer()).get("/venue/listVenue").send();

    const afterLength: number = response2.body.data.length;

    expect(response2.statusCode).toEqual(200);
    expect(response2.body.result).toEqual("ok");
    expect(response2.body.message).toEqual("return whole venue info");
    expect(response2.body.data).not.toEqual(null);
    expect(afterLength - beforeLength).toEqual(4);

    response2.body.data.map(x => {
      if (x.id !== 1) {
        venueIdArr.push(x.id);
        venueNameArr.push(x.name);
      }
    });
  });

  // findOne Test
  it(`service_findOne`, async () => {
    for (let i = 0; i < venueIdArr.length; i++) {
      const response = await request(app.getHttpServer()).get(`/venue/getVenue/${venueIdArr[i]}`).send();

      expect(response.statusCode).toEqual(200);
      expect(response.body.result).toEqual("ok");
      expect(response.body.message).toEqual("venue info");
      expect(response.body.data.id).toEqual(Number(`${venueIdArr[i]}`));
      expect(response.body.data.name).toEqual(`API_TEST_VENUE_${venueIdArr[i]}`);
      expect(response.body.data.description).toEqual(`API_TEST_VENUE_DESCRIPTION_${venueIdArr[i]}`);
    }

    for (let i = 0; i < venueNameArr.length; i++) {
      const response = await request(app.getHttpServer()).get(`/venue/getVenue/${venueNameArr[i]}`).send();
      expect(response.body.data.name).toEqual(`${venueNameArr[i]}`);
    }

    const responseFail = await request(app.getHttpServer()).get(`/venue/getVenue/aksjcnkjnsdfkjawe`).send();

    expect(responseFail.statusCode).toEqual(200);
    expect(responseFail.body.result).toEqual("fail");
    expect(responseFail.body.message).toEqual("there is no venue info");
    expect(responseFail.body.data).toEqual(null);
  });

  // updateVenue Test
  it(`service_updateVenue`, async () => {
    const lastVenueId: number = venueIdArr[venueIdArr.length - 1] + 1;
    const firstVenueId: number = venueIdArr[0];
    const venueId: number = Math.floor(Math.random() * (lastVenueId - firstVenueId) + firstVenueId);

    const response = await request(app.getHttpServer()).patch(`/venue/updateVenue/${venueId}`).send({
      name: "UPDATE_VENUE_NAME_FOR_TEST",
      description: "UPDATE_VENUE_DESCRIPTION_FOR_TEST",
    });

    expect(response.statusCode).toEqual(200);
    expect(response.body.result).toEqual("ok");
    expect(response.body.message).toEqual(`venue update success, ID: ${venueId}`);

    const checkUpdate = await request(app.getHttpServer()).get(`/venue/getVenue/${venueId}`).send();

    expect(checkUpdate.statusCode).toEqual(200);
    expect(checkUpdate.body.result).toEqual("ok");
    expect(checkUpdate.body.message).toEqual("venue info");
    expect(checkUpdate.body.data.id).toEqual(venueId);
    expect(checkUpdate.body.data.name).toEqual("UPDATE_VENUE_NAME_FOR_TEST");
    expect(checkUpdate.body.data.description).toEqual("UPDATE_VENUE_DESCRIPTION_FOR_TEST");

    const responseFail = await request(app.getHttpServer()).patch(`/venue/updateVenue/aasdasdasd`).send({
      name: "FAILFAIL",
      description: "FAILFAIL",
    });

    expect(responseFail.statusCode).toEqual(200);
    expect(responseFail.body.result).toEqual("fail");
    expect(responseFail.body.message).toEqual("venue update fail, ID: aasdasdasd");
    expect(responseFail.body.data).toEqual(null);
  });

  // deleteVenue Test
  it(`service_deleteVenue`, async () => {
    for (let i = 0; i < venueIdArr.length; i++) {
      const response = await request(app.getHttpServer()).delete(`/venue/deleteVenue/${venueIdArr[i]}`).send();

      expect(response.statusCode).toEqual(200);
      expect(response.body.result).toEqual("ok");
      expect(response.body.message).toEqual(`venue delete success, ID: ${venueIdArr[i]}`);
    }

    const responseFail = await request(app.getHttpServer()).delete(`/venue/deleteVenue/asdvsdvasdc`).send();

    expect(responseFail.statusCode).toEqual(200);
    expect(responseFail.body.result).toEqual("fail");
    expect(responseFail.body.message).toEqual("venue delete fail, ID: asdvsdvasdc");
    expect(responseFail.body.data).toEqual(null);
  });
});
