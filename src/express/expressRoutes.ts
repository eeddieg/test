import express, { Request, Response, NextFunction } from "express";

const APP = express();

export default function () {
  APP.get("/", function (req: Request, res: Response, next: NextFunction) {
    console.log("Express + TS server");
    res.send({"title": "Express + TS server"});
    next();
  });
}
