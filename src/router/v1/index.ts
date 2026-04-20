import express, { Router } from 'express'
import pingRouter from './router'
import { hangHandler } from '../../controller/hanghandler'
import { PingHandler } from '../../controller/ping'

const v1 = express.Router()

v1.get('/', PingHandler)

v1.get('/ping', PingHandler)

v1.use('/hang',hangHandler)

export default v1
