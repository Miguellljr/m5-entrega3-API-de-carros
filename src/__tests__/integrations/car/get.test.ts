import { Car } from "@prisma/client";
import { prisma } from "../../../database/database";
import { carMock } from "../../mocks/car.mocks";
import { request } from "../../utils";

describe("Integration Tests: Get Cars route", () => {
  const baseUrl = "/cars";
  const carTb = prisma.car;

  let car: Car;

  beforeAll(async () => {
    await carTb.deleteMany();

    car = await carTb.create({ data: carMock });
  });

  afterAll(async () => {
    await carTb.deleteMany();
  });

  test("should be able to get all cars successfully", async () => {
    const res = await request.get(baseUrl);

    const expectValue = [
      {
        id: expect.any(Number),
        name: carMock.name,
        description: carMock.description,
        brand: carMock.brand,
        year: carMock.year,
        km: carMock.km,
      },
    ];

    expect(res.body).toHaveLength(1);
    expect(res.body).toStrictEqual(expectValue);

    expect(res.status).toBe(200);
  });
});
