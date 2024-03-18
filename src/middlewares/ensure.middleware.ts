import { Response, Request, NextFunction } from "express";
import { prisma } from "../database/database";
import { AppError } from "../errors";
import { AnyZodObject } from "zod";

class EnsureMiddleware {
  public ValidBody =
    (schema: AnyZodObject) =>
    (req: Request, _: Response, next: NextFunction): void => {
      req.body = schema.parse(req.body);
      return next();
    };

  public paramsCarIdExists = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    const { id } = req.params;

    const foundCar = await prisma.car.findFirst({ where: { id: Number(id) } });

    if (!foundCar) {
      throw new AppError("Car not found", 404);
    }

    res.locals = { ...res.locals, foundCar };
    return next();
  };
}

export const ensure = new EnsureMiddleware();