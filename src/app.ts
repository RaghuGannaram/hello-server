import express, { type Request, type Response } from "express";
import cors from "cors";
import helmet from "helmet";
import cookieParser from "cookie-parser";
// import { v4 as uuidv4 } from "uuid";

import morganMiddleware from "@src/middlewares/morgan.middleware";
import customErrorHandler from "@src/middlewares/custom-error-handler.middleware";
import defaultMiddleware from "@src/middlewares/default.middleware";
import api_v1 from "@src/api/v1";
import { getServiceName, getAPIGatewayURL } from "@src/utils/env-info";
import logger from "./configs/logger.config";

const app: express.Application = express();

// const serverId = uuidv4();

const serviceName = getServiceName();
const apiGatewayURL = getAPIGatewayURL();
const corsOptions = {
    origin: apiGatewayURL,
    credentials: true,
};

app.use(cors(corsOptions));
app.use(helmet());
app.use(morganMiddleware);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/health-check", (_req: Request, res: Response) => {
    logger.info(`${serviceName}: Helath check`);
    res.status(200).json({ message: `${serviceName}: OK` });
});

app.use("/hello", (_req: Request, res: Response) => {
    logger.info(`${serviceName} : Hello World! 🖐️`);
    res.status(200).json({ message: ` ${serviceName} : Hello World! 🖐️` });
});

app.use("/api/v1", api_v1);

app.use(defaultMiddleware);
app.use(customErrorHandler);

export default app;
