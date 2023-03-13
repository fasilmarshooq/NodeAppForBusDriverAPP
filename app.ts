import express, { Express, Request, response, Response } from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { SchoolService } from "./schoolService";
import { AuthService } from "./authService";
import { BusService } from "./busService";

dotenv.config();

const app: Express = express();

app.use(bodyParser.json());
// const port = process.env.PORT;
const port = 5000;

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.get("/GetSchools", (req: Request, res: Response) => {
  var schools: object = new SchoolService().Get();

  res.json(schools);
});

app.post("/Login", async (req: Request, res: Response) => {
  try {
    var result: object = await new AuthService().Login(req.body);
    res.json(result);
  } catch (e: any) {
    console.log(e);
    res.status(400).json(e.response.data);
  }
});

app.get("/GetBusList", async (req: Request, res: Response) => {
  try{
    var buses: object = await new BusService().GetBusList();
    res.json(buses);
  }catch(e: any){
    console.log(e);
    res.status(400).json(e.response.data);
  }
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
