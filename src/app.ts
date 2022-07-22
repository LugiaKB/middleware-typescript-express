import express, { Express, NextFunction, Request, Response } from 'express';
import bodyParser from 'body-parser';
import dvdrental from './database/sequelize';
import routes from './api/routes';
import AppError from './utils/AppError';
import { isBuffer } from 'util';

const app: Express = express();
const port: number = 3000;

app.use(bodyParser.json());
app.use("/api/v1/", routes);
app.use((err: AppError, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(err.getHttpCode()).send(err.getError());
});

app.get('/', (req: Request, res: Response) => {
    res.send('Hello');
});

app.listen(port, () => {
    console.log(`Rodando na porta ${port}`);
});

dvdrental();