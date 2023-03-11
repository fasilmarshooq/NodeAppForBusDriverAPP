import express, { Express, Request, response, Response } from 'express';
import dotenv from 'dotenv';
import { SchoolService } from './schoolService';

dotenv.config();

const app: Express = express();
// const port = process.env.PORT;
const port = 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.get('/GetSchools', (req: Request, res: Response) => {
    var schools : object = new SchoolService().Get();
    
    res.json(schools);
  });

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});