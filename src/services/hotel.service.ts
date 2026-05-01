import { hotelCreateDTO } from "../dto/hotel.dto";
import { createHotel, getallHotels, getHotelById } from "../repositories/hotel.repositories";

export async function hotelService(hotelData:hotelCreateDTO){

    const hotel = await createHotel(hotelData)

    return hotel 
}
export async function getHotelServiceById(id : number){
    const hotel = await getHotelById(id)
    return hotel 
}

export async function getHotelByAll () {
    const hotel = await getallHotels()
    return hotel
}

