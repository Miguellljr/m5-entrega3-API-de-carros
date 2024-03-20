import { CarService } from "../../services";
import { prisma } from "../../database/database";
import { idCarMock, updateCarServiceMock } from "../mocks/car.mocks";

describe("Unit Test: Update Car service", () => {
  const { bodyData, expectedValue } = updateCarServiceMock;
  const carTb = prisma.car;

  const updateCarService = new CarService().update;

  beforeEach(async () => {
    await carTb.deleteMany();
  });

  afterAll(async () => {
    await carTb.deleteMany();
  });

  test("should be able to update a car", async () => {
    const recieved = await updateCarService(idCarMock.id, bodyData);

    expect(recieved.id).toBe(expectedValue.id);
    expect(recieved.name).toBe(expectedValue.name);
    expect(recieved.description).toBe(expectedValue.description);
    expect(recieved.brand).toBe(expectedValue.brand);
    expect(recieved.year).toBe(expectedValue.year);
    expect(recieved.km).toBe(expectedValue.km);
  });
});
