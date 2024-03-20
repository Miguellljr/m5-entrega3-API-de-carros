import { prisma } from "../../database/database";
import { idCarMock, updateCarServiceMock } from "../mocks/car.mocks";
import { request } from "../utils";

describe("Integrations Tests: Update Car route", () => {
  const { bodyData, expectedValue } = updateCarServiceMock;
  const baseUrl = `/cars/${idCarMock.id}`;
  const carTb = prisma.car;

  beforeEach(async () => {
    await carTb.deleteMany();
  });

  afterAll(async () => {
    await carTb.deleteMany();
  });

  test("should be able to update task successfully", async () => {
    const data = await request
      .patch(baseUrl)
      .send(bodyData)
      .expect(200)
      .then((response) => response.body);

    expect(data.id).toBe(idCarMock.id);
    expect(data.name).toBe(expectedValue.name);
    expect(data.description).toBe(expectedValue.description);
    expect(data.brand).toBe(expectedValue.brand);
    expect(data.year).toBe(expectedValue.year);
    expect(data.km).toBe(expectedValue.km);
  });

  test("should throw error when try to update a invalid task", async () => {
    await request.patch(`/cars/1`).send(bodyData).expect(404);
  });
});
