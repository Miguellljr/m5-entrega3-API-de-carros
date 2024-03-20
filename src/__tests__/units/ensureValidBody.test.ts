import { NextFunction, Request, Response } from "express";
import { ensure } from "../../middlewares";
import {
  invalidBodyMock,
  validBodyMock,
  validSchemaMock,
} from "../mocks/ensureValidBody.mocks";

describe("Unit Test: Valid Body middleware", () => {
  const validBodyMiddleware = ensure.ValidBody(validSchemaMock);

  let req: Partial<Request> = {};
  let res: Partial<Response> = {};
  let next: NextFunction = jest.fn();

  beforeEach(() => {
    next = jest.fn();
  });

  test("should be able to validate a request body", async () => {
    req.body = validBodyMock.bodyData;

    validBodyMiddleware(req as Request, res as Response, next);

    expect(req.body).toStrictEqual(validBodyMock.expectValue);
    expect(next()).toHaveBeenCalled();
    expect(next()).toHaveBeenCalledTimes(1);
  });

  test("should throw error when validating invalid body", async () => {
    req.body = invalidBodyMock.bodyData;

    expect(() => {
      validBodyMiddleware(req as Request, res as Response, next);
    }).toThrow(invalidBodyMock.expectedValue);

    expect(next()).not.toHaveBeenCalled();
    expect(next()).toHaveBeenCalledTimes(0);
  });
});
