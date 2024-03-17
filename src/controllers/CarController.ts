import { Request, Response } from "express";
import { CarService } from "../services";

export class CarController {
  private carService = new CarService();

  public create = async (req: Request, res: Response): Promise<Response> => {
    const newCar = await this.carService.create(req.body);
    return res.status(201).json(newCar);
  };

  public read = async (_: Request, res: Response): Promise<Response> => {
    const allCars = await this.carService.read();
    return res.status(200).json(allCars);
  };

  public retrieve = async (req: Request, res: Response): Promise<Response> => {
    const { foundCar } = res.locals;

    const car = await this.carService.retrieve(foundCar);
    return res.status(200).json(car);
  };

  public update = async (req: Request, res: Response): Promise<Response> => {
    const { foundCar } = res.locals;

    const updateCar = await this.carService.update(foundCar.id, req.body);
    return res.status(200).json(updateCar);
  };

  public delete = async (_: Request, res: Response): Promise<Response> => {
    const { foundCar } = res.locals;

    await this.carService.delete(foundCar.id);
    return res.status(204).json();
  };
}
