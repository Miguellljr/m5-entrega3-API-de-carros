import { Car } from "@prisma/client";
import { prisma } from "../../../database/database";
import { carMock } from "../../mocks/car.mocks";
import { request } from "../../utils";

describe("Integration Tests: Retrieve Car route", () => {
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
  
  });
});
