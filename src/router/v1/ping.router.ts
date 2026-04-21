import express, { Request, Response } from 'express';
import {  validateRequestBody } from '../../validators';
import { pingHandler } from '../../controller/ping';
import {pingSchema } from '../../validators/pingValidator';

const pingRouter = express.Router();

pingRouter.get('/', validateRequestBody(pingSchema), pingHandler); 

pingRouter.get('/health', (req:Request, res: Response) => {
    res.status(200).send('OK');
});

export default pingRouter;