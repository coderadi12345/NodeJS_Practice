import { NextFunction, Request, Response } from "express";
import fs from 'fs/promises'
export const PingHandler = async(req: Request,res: Response , next: NextFunction)=>{
    try {
        await fs.readFile('Sample')
        res.status(200).json({
            message: "Pong"
        })
       
    }
     catch (error) {
        next(error)
    }
}