export const createCarServiceMock = {
  bodyData: {
    name: "Carro",
    description: "Descrição do carro",
    brand: "Marca do carro",
    year: 2023,
    km: 10000,
  },
  expectedValue: {
    id: expect.any(Number),
    name: "Carro",
    description: "Descrição do carro",
    brand: "Marca do carro",
    year: 2023,
    km: 10000,
  },
};
