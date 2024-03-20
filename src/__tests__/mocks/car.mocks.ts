export const carMock = {
  name: "Carro",
  description: "Descrição do carro",
  brand: "Marca do carro",
  year: 2023,
  km: 10000,
};

export const idCarMock = {
  id: expect.any(Number),
  name: "Carro",
  description: "Descrição do carro",
  brand: "Marca do carro",
  year: 2023,
  km: 10000,
};

export const updateCarServiceMock = {
  bodyData: {
    name: "Carro atualizado",
    description: "Descrição do carro atualizado",
    brand: "Marca do carro atualizado",
    year: 1998,
    km: 15000,
  },
  expectedValue: {
    id: expect.any(Number),
    name: "Carro atualizado",
    description: "Descrição do carro atualizado",
    brand: "Marca do carro atualizado",
    year: 1998,
    km: 15000,
  },
};
