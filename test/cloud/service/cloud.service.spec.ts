import { Test, TestingModule } from "@nestjs/testing";
import * as request from "supertest";
import { AppModule } from "../../../src/app.module";
import { INestApplication } from "@nestjs/common";

process.env.NODE_ENV = "test";

let app: INestApplication;

const cloudIdArr = [];
const cloudNameArr = [];

describe("CloudApiTest", () => {
  // let service: CloudService;
  let module: TestingModule;

  beforeAll(async () => {
    module = await Test.createTestingModule({
      // providers: [CloudService],
      imports: [AppModule],
    }).compile();

    // service = module.get<CloudService>(CloudService);
    app = module.createNestApplication();
    // app.setGlobalPrefix("api");
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it("should be defined", () => {
    expect(app).toBeDefined();
  });

  // createCloud Test
  it("service_createCloud", async () => {
    const response = await request(app.getHttpServer()).post("/cloud/insertCloud").send({
      name: "AWS",
      instance: "EC2",
      storage: "['mediastore', 'S3']",
    });

    expect(response.statusCode).toEqual(200);
    expect(response.body.result).toEqual("ok");
    expect(response.body.message).toEqual("new cloud add");
    expect(response.body.data).not.toEqual(null);
    expect(response.body.data.name).toEqual("AWS");
    expect(response.body.data.instance).toEqual("EC2");
    expect(response.body.data.storage).toEqual("['mediastore', 'S3']");

    cloudIdArr.push(response.body.data.id);
    cloudNameArr.push(response.body.data.name);
    cloudNameArr.push("Azure", "GCP");
  });

  // findAll Test
  it("service_findAll", async () => {
    const response = await request(app.getHttpServer()).get("/cloud/listCloud").send();

    expect(response.statusCode).toEqual(200);
    expect(response.body.result).toEqual("ok");
    expect(response.body.message).toEqual("return whole cloud info");
    expect(response.body.data).not.toEqual(null);
    expect(response.body.data.length).toEqual(cloudIdArr.length);

    const beforeLength: number = response.body.data.length;

    for (let i = 1; i < cloudNameArr.length; i++) {
      const makeFewCloud = await request(app.getHttpServer())
        .post("/cloud/insertCloud")
        .send({
          name: cloudNameArr[i],
          instance: `EC2_${i}`,
          storage: `['mediastore_${i}', 'S3_${i}']`,
        });
    }

    const response2 = await request(app.getHttpServer()).get("/cloud/listCloud").send();

    const afterLength: number = response2.body.data.length;

    expect(response2.statusCode).toEqual(200);
    expect(response2.body.result).toEqual("ok");
    expect(response2.body.message).toEqual("return whole cloud info");
    expect(response2.body.data).not.toEqual(null);
    expect(afterLength - beforeLength).toEqual(2);

    response2.body.data.map(x => {
      if (x.id !== 1) {
        cloudIdArr.push(x.id);
      }
    });
  });

  it(`service_findOne`, async () => {
    for (let i = 0; i < cloudIdArr.length; i++) {
      const response = await request(app.getHttpServer()).get(`/cloud/getCloud/${cloudIdArr[i]}`).send();

      expect(response.statusCode).toEqual(200);
      expect(response.body.result).toEqual("ok");
      expect(response.body.message).toEqual("cloud info");
      expect(response.body.data.id).toEqual(Number(`${cloudIdArr[i]}`));

      switch (cloudNameArr[i]) {
        case "AWS":
          expect(response.body.data.name).toEqual(`AWS`);
          expect(response.body.data.instance).toEqual(`EC2`);
          expect(response.body.data.storage).toEqual(`['mediastore', 'S3']`);
          break;
        case "Azure":
          expect(response.body.data.name).toEqual(`Azure`);
          expect(response.body.data.instance).toEqual(`EC2_${i}`);
          expect(response.body.data.storage).toEqual(`['mediastore_${i}', 'S3_${i}']`);
          break;
        case "GCP":
          expect(response.body.data.name).toEqual(`GCP`);
          expect(response.body.data.instance).toEqual(`EC2_${i}`);
          expect(response.body.data.storage).toEqual(`['mediastore_${i}', 'S3_${i}']`);
          break;
      }
    }

    const responseFail = await request(app.getHttpServer()).get("/cloud/getCloud/ascascascascasc").send();

    expect(responseFail.statusCode).toEqual(200);
    expect(responseFail.body.result).toEqual("fail");
    expect(responseFail.body.message).toEqual("there is no cloud info");
    expect(responseFail.body.data).toEqual(null);
  });

  it(`service_updateCloud`, async () => {
    const createForUpdate = await request(app.getHttpServer()).post("/cloud/insertCloud").send({
      name: "TEST_CLOUD",
      instance: "TEST_INSTANCE",
      storage: "['TEST_1', 'TEST_2']",
    });

    expect(createForUpdate.statusCode).toEqual(200);
    expect(createForUpdate.body.result).toEqual("ok");
    expect(createForUpdate.body.message).toEqual("new cloud add");
    expect(createForUpdate.body.data).not.toEqual(null);
    expect(createForUpdate.body.data.name).toEqual("TEST_CLOUD");
    expect(createForUpdate.body.data.instance).toEqual("TEST_INSTANCE");
    expect(createForUpdate.body.data.storage).toEqual("['TEST_1', 'TEST_2']");

    const updateResponse = await request(app.getHttpServer()).patch(`/cloud/updateCloud/4`).send({
      name: "TEST_CLOUD_UPDATED",
      instance: "TEST_INSTANCE_UPDATED",
      storage: "['TEST_1_UPDATED', 'TEST_2_UPDATED']",
    });

    expect(updateResponse.statusCode).toEqual(200);
    expect(updateResponse.body.result).toEqual("ok");
    expect(updateResponse.body.message).toEqual("cloud update success, ID: 4");

    const checkUpdate1 = await request(app.getHttpServer()).get(`/cloud/getCloud/4`).send();

    expect(checkUpdate1.statusCode).toEqual(200);
    expect(checkUpdate1.body.result).toEqual("ok");
    expect(checkUpdate1.body.message).toEqual("cloud info");
    expect(checkUpdate1.body.data.name).toEqual("TEST_CLOUD_UPDATED");
    expect(checkUpdate1.body.data.instance).toEqual("TEST_INSTANCE_UPDATED");
    expect(checkUpdate1.body.data.storage).toEqual("['TEST_1_UPDATED', 'TEST_2_UPDATED']");

    const checkUpdate2 = await request(app.getHttpServer()).get(`/cloud/getCloud/TEST_CLOUD_UPDATED`).send();

    expect(checkUpdate2.statusCode).toEqual(200);
    expect(checkUpdate2.body.result).toEqual("ok");
    expect(checkUpdate2.body.message).toEqual("cloud info");
    expect(checkUpdate2.body.data.name).toEqual("TEST_CLOUD_UPDATED");
    expect(checkUpdate2.body.data.instance).toEqual("TEST_INSTANCE_UPDATED");
    expect(checkUpdate2.body.data.storage).toEqual("['TEST_1_UPDATED', 'TEST_2_UPDATED']");

    const responseFail = await request(app.getHttpServer()).patch(`/cloud/updateCloud/casxczeaaw`).send({
      name: "FAILFAIL",
      instance: "FAILFAIL",
      storage: "['FAIL', 'FAIL']",
    });

    expect(responseFail.statusCode).toEqual(200);
    expect(responseFail.body.result).toEqual("fail");
    expect(responseFail.body.message).toEqual("cloud update fail, ID: casxczeaaw");
    expect(responseFail.body.data).toEqual(null);

    const checkDoesntUpdate = await request(app.getHttpServer()).get(`/cloud/getCloud/FAILFAIL`).send();

    expect(checkDoesntUpdate.statusCode).toEqual(200);
    expect(checkDoesntUpdate.body.result).toEqual("fail");
    expect(checkDoesntUpdate.body.message).toEqual("there is no cloud info");
    expect(checkDoesntUpdate.body.data).toEqual(null);
  });

  it(`service_deleteCloud`, async () => {
    for (let i = 1; i < cloudIdArr.length + 2; i++) {
      const response = await request(app.getHttpServer()).delete(`/cloud/deleteCloud/${i}`).send();

      expect(response.statusCode).toEqual(200);
      expect(response.body.result).toEqual("ok");
      expect(response.body.message).toEqual(`cloud remove success, ID: ${i}`);
    }

    const responseFail = await request(app.getHttpServer()).delete("/cloud/deleteCloud/lkmaslkcmmlksc").send();

    expect(responseFail.statusCode).toEqual(200);
    expect(responseFail.body.result).toEqual("fail");
    expect(responseFail.body.message).toEqual("cloud remove fail, ID: lkmaslkcmmlksc");
    expect(responseFail.body.data).toEqual(null);
  });
});
