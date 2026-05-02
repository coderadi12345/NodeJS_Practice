import express from 'express';
import { createHotelHandler,deleteHotelHandler,getAllHotelsHandler, getHotelByIdHandler } from '../../controller/hotel.controller';
import { validateRequestBody } from '../../validators';
import { hotelSchema } from '../../validators/hotelValidator';

const hotelRouter = express.Router();

hotelRouter.get('/',getAllHotelsHandler)
hotelRouter.get('/:id',getHotelByIdHandler); 
hotelRouter.delete('/:id',deleteHotelHandler)

hotelRouter.post('/' ,validateRequestBody(hotelSchema), createHotelHandler )

export default hotelRouter