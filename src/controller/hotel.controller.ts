import { NextFunction, Request, Response } from "express";
import { getHotelByAll, getHotelServiceById, hotelService } from "../services/hotel.service";
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

export async function getAllHotels(req: Request,res: Response,next: NextFunction){
    try {
         const hotelResponse = await getHotelByAll()
        res.status(200).json({
            message: "All Hotels Found",
            data: hotelResponse,
            success: true
        })
    } catch (error) {
        next(error)
    }
}

//create api to get all hotels
