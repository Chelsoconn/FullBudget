import express from "express";
export const app = express();
import { errorMiddleware } from './middleware/error.middleware.js' 

app.use(express.json())

app.get("/health", (_req, res) => {
    res.json({status: "ok"})
})

app.get("/crash", () => {
  throw new Error('Test Failure')
})

app.use(errorMiddleware)
