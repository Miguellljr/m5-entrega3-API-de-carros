import { z } from "zod";
import { baseSchema } from "./base.schema";

const carSchema = baseSchema.extend({
  name: z.string().min(1),
  description: z.string(),
  brand: z.string().min(1),
  year: z.number(),
  km: z.number(),
});

const carCreateSchema = carSchema.omit({ id: true });

const carUpdateSchema = carCreateSchema.partial()

const carReturnSchema = carSchema

export {carCreateSchema, carReturnSchema, carSchema, carUpdateSchema}
