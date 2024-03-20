import { prisma } from "../../../database/database";
import { carMock } from "../../mocks/car.mocks";
import { request } from "../../utils";

describe("Integration Tests: Create Car route", () => {
  const baseUrl = "/cars";
  const carTb = prisma.car;

  beforeEach(async () => {
    await carTb.deleteMany();
  });

  afterAll(async () => {
    await carTb.deleteMany();
  });

  test("should be able to create car sucessfully", async () => {
    const res = await request.post(baseUrl).send(carMock);

    const expectValue = {
      id: expect.any(Number),
      name: carMock.name,
      description: carMock.description,
      brand: carMock.brand,
      year: carMock.year,
      km: carMock.km,
    };

    expect(res.body).toStrictEqual(expectValue);
    expect(res.status).toBe(201);
  });

  test("should throw error when try to create a car with invalid body", async () => {
    const res = await request.post(baseUrl).send({});

    const expectValue = {
      "message": {
        "name": [
          "Required"
        ],
        "description": [
          "Required"
        ],
        "brand": [
          "Required"
        ],
        "year": [
          "Required"
        ],
        "km": [
          "Required"
        ]
      }
    };

    expect(res.body).toStrictEqual(expectValue);
    expect(res.status).toBe(400);
  });
});
