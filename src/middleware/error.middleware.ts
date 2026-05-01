import { NextFunction, Request, Response } from "express";
import { AppError } from "../utils/errors/app.error";
import { StatusCodes } from "http-status-codes";
export const appErrorHandler = (err: AppError, req: Request, res: Response, next: NextFunction) => {

    console.error('AppError:', err);
    console.error('Stack:', err.stack);

    res.status(StatusCodes.BAD_REQUEST).json({
        success: false,
        message: err.message
    });
}

export const genericErrorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error('GenericError:', err);
    console.error('Stack:', err.stack);

    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: "Internal Server Error"
    });
}
