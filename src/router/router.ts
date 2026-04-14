import express, { NextFunction, Request, Response } from "express"
import { PingHandler } from "../controller/ping"
const pingRouter = express.Router()

function MiddleWare1(req:Request,res: Response,next: NextFunction){

    console.log("MiddleWare1")
    next()
}

function MiddleWare2(req:Request,res: Response,next: NextFunction){
    console.log("MiddleWare2")
    next()
}

pingRouter.get('/ping', MiddleWare1,MiddleWare2, PingHandler)

export default pingRouter