import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';
const express = require('express')
const router = express.Router();




router.post('/', 

(req: Request, res: Response) => {
    return res.status(200).send('Account Successfully created')
}
)



























module.exports = router;