import { Request, Response } from "express";


export const PingHandler = (req: Request,res: Response)=>{
    console.log("Pong")
    res.send("This is GET req.")

}