import { NextFunction, Request, Response } from "express";
import { ZodTypeAny } from "zod";
export const validatorZod = (schema: ZodTypeAny) =>{

    return async (req: Request,res: Response , next: NextFunction) =>{
        try {
            await schema.parseAsync(req.body)
            console.log('Request body is valid')
            next()
        } catch (error) {
            
         res.status(400).json({
                message: "Invalid request",
                error: 'error'
            })
        }
    }

}