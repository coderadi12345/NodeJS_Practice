import { hotelCreateDTO } from "../dto/hotel.dto";
import { createHotel, getAllHotels,getHotelById, softDeleteHotel } from "../repositories/hotel.repositories";

export async function hotelService(hotelData:hotelCreateDTO){

    const hotel = await createHotel(hotelData)

    return hotel 
}
export async function getHotelServiceById(id : number){
    const hotel = await getHotelById(id)
    return hotel 
}

export async function getAllHotelService () {
    const hotel = await getAllHotels()
    return hotel
}

export async function deleteHotelService(id: number) {
    const response = await softDeleteHotel(id)
    return response
}
