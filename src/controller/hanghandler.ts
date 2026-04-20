import { Request, Response } from "express";

export function hangHandler (req: Request,res: Response){

    res.send('Hang tight')

}