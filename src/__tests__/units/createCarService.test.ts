import { createCarServiceMock } from "../mocks/createCarService.mocks";
import { CarService } from "../../services";
import { prisma } from "../../database/database";

describe("Unit Test: Create Car service", () => {
  const { bodyData, expectedValue } = createCarServiceMock;
  const carTb = prisma.car;

  const createCarService = new CarService().create;

  beforeEach(async () => {
    await carTb.deleteMany();
  });

  afterAll(async () => {
    await carTb.deleteMany();
  });

  test("should be able to create a car", async () => {
    const recieved = await createCarService(bodyData);

    expect(recieved).toStrictEqual(expectedValue);
  });
});
