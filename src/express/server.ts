import express, { Request, Response, NextFunction } from "express";
// import compression from "compression";
// import helmet from "helmet";
import cors from "cors";
import "jwt-utils";
import * as path from 'path';
import * as MySQLConnector from "../services/dbConnect";

MySQLConnector.init();

const PORT = 8081;
const APP = express();

const corsOptions = {
  origin: [`http://localhost:${PORT}`],
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
APP.use(cors(corsOptions));

APP.get("/", function (req: Request, res: Response, next: NextFunction) {
  console.log("Express + TS server");
  res.send({"title": "Express + TS server"});
  next();
});


APP.listen(PORT, () => {
  console.log(`Server started at http://localhost/${PORT}`);  
});