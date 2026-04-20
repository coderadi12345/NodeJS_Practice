import express, { NextFunction, Request, Response } from "express"
import { PingHandler } from "../../controller/ping"
import { validatorZod } from "../../validators"
import { pingValidate } from "../../validators/pingValidator"

const pingRouter = express.Router()

pingRouter.get('/', validatorZod(pingValidate), PingHandler)

export default pingRouter