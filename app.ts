import "express-async-errors";
import express, { json } from "express";
import helmet from "helmet";
import { carRouter } from "./src/routes";

export const app = express();

app.use(json());
app.use(helmet());

app.use("/cars", carRouter);
