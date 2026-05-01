import { NextFunction, Request, Response } from "express";
import logger from "../config/logger";
import { ZodSchema } from "zod";
import { StatusCodes } from "http-status-codes";

export const validateRequestBody = (schema: ZodSchema) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            logger.info("Validating request body");
            await schema.parseAsync(req.body);
            logger.info("Request body is valid");
            next();

        } catch (error) { 

    res.status(StatusCodes.FORBIDDEN).json({
        message: "Invalid request body",
        success: false,
        error: error,
    });
}
    }
}

export const validateQueryParams = (schema: ZodSchema) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {

            await schema.parseAsync(req.query);
            console.log("Query params are valid");
            next();
            
        } catch (error) {

            res.status(StatusCodes.FORBIDDEN).json({
                message: "Invalid query params",
                success: false,
                error: error
            });
            
        }
    }
}
