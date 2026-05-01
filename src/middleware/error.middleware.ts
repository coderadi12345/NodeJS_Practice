import { NextFunction, Request, Response } from "express";
import { AppError } from "../utils/errors/app.error";
export const appErrorHandler = (err: AppError, req: Request, res: Response, next: NextFunction) => {

    console.error('AppError:', err);
    console.error('Stack:', err.stack);

    res.status(err.statusCode).json({
        success: false,
        message: err.message
    });
}

export const genericErrorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error('GenericError:', err);
    console.error('Stack:', err.stack);

    res.status(500).json({
        success: false,
        message: "Internal Server Error"
    });
}