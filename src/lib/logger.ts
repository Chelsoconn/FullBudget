import pino from "pino";
import { env } from "../config/env.js";

const isDev = env.NODE_ENV !== "production";

export const logger = pino(
  {
    level: env.LOG_LEVEL || "info",
    base: {
      service: "budget",
      environment: env.NODE_ENV,
    },
    //YYYY-MM-DDTHH:mm:ss.sssZ standardized date/time format 
    timestamp: pino.stdTimeFunctions.isoTime,
    redact: ["password", "token"],
  },
  isDev
    ? pino.transport({
        target: "pino-pretty",
        options: { colorize: true },
      })
    : undefined
);