import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';
const express = require('express')
const router = express.Router()
import {userController} from '../controllers/userController'
import {applicationController} from '../controllers/applicationController';



router.post('/login', 
userController.getInfo,
(req:Request, res:Response) => {
    return res.status(200).send(res.locals.userInfo)
});

router.post('/:id/addApplication',applicationController.addApplication, (req:Request, res:Response) => {
    return res.status(200).send('success')
});

router.post('/', 
userController.createUser, 
(req: Request, res: Response) => {
    return res.status(200).send(res.locals.newUser)
});

router.get('/:id/getApplications', applicationController.getApplications, (req:Request, res:Response) => {
    return res.status(200).json(res.locals.applications)
});

router.patch('/:id/:appId/getApplications', applicationController.updateApplication, (req:Request, res:Response) => {
    return res.status(200).send('success')
});




export default router;