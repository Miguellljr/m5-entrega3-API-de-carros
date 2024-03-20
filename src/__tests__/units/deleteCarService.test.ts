import { CarService } from "../../services";
import { prisma } from "../../database/database";
import { idCarMock } from "../mocks/car.mocks";

describe("Unit Test: Delete Car service", () => {
  const carTb = prisma.car;

  const deleteCarService = new CarService().delete;

  beforeEach(async () => {
    await carTb.deleteMany();
  });

  afterAll(async () => {
    await carTb.deleteMany();
  });

  test("should be able to delete a car", async () => {
    await deleteCarService(idCarMock.id);
  });
});
