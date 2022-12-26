import express, { Express } from "express";
import cors from "cors";
import { router } from "./routes/routes";
import "dotenv/config";

const api: Express = express();

const port = process.env.PORT;

api.use(express.json(), cors(), router);

api.listen(port, () => console.log(`Servidor OK - http://localhost:${port}`));
