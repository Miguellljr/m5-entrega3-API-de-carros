import { z } from "zod";

export const validSchemaMock = z.object({
  id: z.number(),
  name: z.string().min(1),
  description: z.string(),
  brand: z.string().min(1),
  year: z.number(),
  km: z.number(),
});

export const validBodyMock = {
  bodyData: {
    name: "Carro",
    description: "Descrição do carro",
    brand: "Marca do carro",
    year: 2023,
    km: 10000,
    chaveExtra: true,
  },
  expectValue: {
    name: "Carro",
    description: "Descrição do carro",
    brand: "Marca do carro",
    year: 2023,
    km: 10000,
  },
};

export const invalidBodyMock = {
  bodyData: {},
  expectedValue: {
    message: {
      name: ["Required"],
      description: ["Required"],
      brand: ["Required"],
      year: ["Required"],
      km: ["Required"],
    },
  },
};
