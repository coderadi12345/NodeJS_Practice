import logger from "../config/logger";
import { Hotel } from "../db/models/hotel";
import { hotelCreateDTO } from "../dto/hotel.dto";
import { NotFoundError } from "../utils/errors/app.error";

export async function createHotel(hotelData: hotelCreateDTO) {

    const hotel = await Hotel.create({

        name: hotelData.name,
        address: hotelData.address,
        location: hotelData.location,
        rating: hotelData.rating || 0 ,
        ratingCount: hotelData.ratingCount || 0 

    })

    logger.info(`Hotel Created, ${hotel.id}`)
    return hotel
}

export async function getHotelById(id: number){
    const hotel = await Hotel.findByPk(id)

    if(!hotel){
        logger.error(`Hotel not found ${id}`)
        throw new NotFoundError(`Hotel with id ${id} not found`)

    }
    logger.info(`Hotel with ${id} found`)
    return hotel
}

export async function getallHotels(){
    const hotels = await Hotel.findAll()

    logger.info(`Fetched ${hotels.length} hotels`)
    return hotels
}
