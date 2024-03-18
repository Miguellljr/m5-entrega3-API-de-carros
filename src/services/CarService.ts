import { Car } from "@prisma/client";
import { prisma } from "../database/database";
import { CarCreate, CarReturn, CarUpdate } from "../interfaces";
import { carReturnSchema } from "../schemas";

export class CarService {
  public create = async (data: CarCreate): Promise<CarReturn> => {
    const newCar = await prisma.car.create({ data });

    return carReturnSchema.parse(newCar);
  };

  public read = async (): Promise<Array<CarReturn>> => {
    const allCars = await prisma.car.findMany();

    return carReturnSchema.array().parse(allCars);
  };

  public retrieve = async (foundCar: Car): Promise<CarReturn> => {
    return carReturnSchema.parse(foundCar);
  };

  public update = async (
    carId: number,
    data: CarUpdate
  ): Promise<CarReturn> => {
    const updateCar = await prisma.car.update({ where: { id: carId }, data });

    return carReturnSchema.parse(updateCar);
  };

  public delete = async (carId: number): Promise<void> => {
    const deleteCar = await prisma.car.delete({ where: { id: Number(carId) } });
  };
}
