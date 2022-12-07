import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';
const express = require('express')
const router = express.Router()
import {userController} from '../controllers/userController'



router.get('/', 
userController.getInfo,
(req:Request, res:Response) => {
    return res.status(200).send(res.locals.userInfo)
}

)






router.post('/', 
userController.createUser, 
(req: Request, res: Response) => {
    return res.status(200).send(res.locals.newUser)
}
)






export default router;