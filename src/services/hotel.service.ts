import { date } from "zod";
import { hotelCreateDTO } from "../dto/hotel.dto";
import { createHotel, getAllHotels,getHotelById, softDeleteHotel, updateHotel } from "../repositories/hotel.repositories";

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
export async function updateHotelService(id:number,data:any){

    const hotel  = await updateHotel(id,data)
    return hotel
}