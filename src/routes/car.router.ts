import { Router } from "express";
import { CarController } from "../controllers";
import { carCreateSchema, carUpdateSchema } from "../schemas";
import { ensure } from "../middlewares/ensure.middleware";

export const carRouter = Router();
const controller = new CarController();

carRouter.post("", ensure.ValidBody(carCreateSchema), controller.create);

carRouter.get("", controller.read);

carRouter.get("/:id", ensure.paramsCarIdExists, controller.retrieve);

carRouter.patch(
  "/:id",
  ensure.paramsCarIdExists,
  ensure.ValidBody(carUpdateSchema),
  controller.update
);

carRouter.delete("/:id", ensure.paramsCarIdExists, controller.delete);
