import { Request, Response, NextFunction} from "express"
import { logger } from "../lib/logger.js"

export function errorMiddleware(err:any, req: Request, res: Response, _next: NextFunction) {
    logger.error({path: req.path, methos: req.method, error: err.message, stack: err.stack},
    "Unhandled error");

    res.status(err.statusCode || 500).json({
        message: err.message || "Internal Server Error"
    });
}