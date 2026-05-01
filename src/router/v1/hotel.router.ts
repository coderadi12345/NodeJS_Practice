import express from 'express';
import { createHotelHandler, getAllHotels, getHotelByIdHandler } from '../../controller/hotel.controller';
import { validateRequestBody } from '../../validators';
import { hotelSchema } from '../../validators/hotelValidator';

const hotelRouter = express.Router();

hotelRouter.get('/all',getAllHotels)
hotelRouter.get('/:id',getHotelByIdHandler); 

hotelRouter.post('/' ,validateRequestBody(hotelSchema), createHotelHandler )

export default hotelRouter