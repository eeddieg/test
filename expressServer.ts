import express, { Express, Request, Response } from "express";
import BodyParser from "body-parser";
import Cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const corsOptions = {
  origin: "http://localhost:8081",
};

const app: Express = express();

app.use(Cors(corsOptions));

// parse requests of content-type - application/json
app.use(BodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(BodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Welcome to Express test application." });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
  // console.log(`Server is running on port ${PORT}.`);
});
