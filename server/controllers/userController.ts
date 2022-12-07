import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';
const express = require('express')
import {db} from '../models/model'

type dbResponse = {
    command: 'INSERT',
    rows: []
}


export const userController = {

    createUser:  (req: Request, res: Response, next: NextFunction) => {
        const { name, username, email, password } = req.body;
        console.log(name, username, email, password)
        const query = `INSERT INTO user_info (username, email, password, name) 
        VALUES ($1, $2, $3, $4)`;
       const params = [`${username}`, `${email}`, `${password}`, `${name}`]

        db.query(query, params, async (err:Error, resp:dbResponse) => {
            if(err){
                console.log(err)
            }else {
                res.locals.newUser = resp;
                return next()
            }
        })
    },



    getInfo: (req:Request, res: Response, next: NextFunction) => {



         

    }





}
