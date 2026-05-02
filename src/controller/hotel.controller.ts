import { NextFunction, Request, Response } from "express";
import { deleteHotelService, getAllHotelService, getHotelServiceById, hotelService, updateHotelService } from "../services/hotel.service";
import { StatusCodes } from "http-status-codes";

export async function createHotelHandler(req: Request , res: Response, next: NextFunction){

  const hotelResponse = await hotelService(req.body)

    res.status(StatusCodes.CREATED).json({
        message: 'Hotel Created Successfully',
        data: hotelResponse,
        success: true
    })
}

export async function getHotelByIdHandler(req: Request , res: Response , next: NextFunction){
    const hotelResponse = await getHotelServiceById(Number(req.params.id))

    res.status(StatusCodes.OK).json({
        message: "Hotel found Successfully",
        data: hotelResponse,
        success: true

    })
}

export async function getAllHotelsHandler(req: Request,res: Response,next: NextFunction){
    try {
         const hotelResponse = await getAllHotelService()
        res.status(StatusCodes.MULTI_STATUS).json({
            message: "All Hotels Found",
            data: hotelResponse,
            success: true
        })
    } catch (error) {
        next(error)
    }
}

export async function deleteHotelHandler(req:Request,res:Response,next: NextFunction) {

    const hotelResponse = await deleteHotelService(Number(req.params.id))

    res.status(StatusCodes.OK).json({
        message: "Hotels Deleted Successfully",
        data: hotelResponse,
        success:true
    })
   
}

export async function updateHotelHandler(req:Request,res:Response){
    const hotelResponse = await updateHotelService(
        Number(req.params.id),
        req.body
    );

    return res.status(StatusCodes.OK).json({
        message: "Hotel updated successfully",
        data: hotelResponse,
        success: true
    });
}