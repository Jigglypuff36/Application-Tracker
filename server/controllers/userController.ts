import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';
const express = require('express')
import {db} from '../models/model'

type dbResponse = {
    command: 'INSERT',
    rows: []
}


export const userController = {

    createUser: async (req: Request, res: Response, next: NextFunction) => {
        const { name, username, email, password } = req.body;
        console.log(name, username, email, password)
        const query = `INSERT INTO user_info (username, email, password, name) 
        VALUES ('${username}', '${email}', '${password}', '${name}')`;
        try{
            const result = await db.query(query)
            return next()
        }
        catch(err) {
            console.log(err)
        }
    
    },



    getInfo: async (req:Request, res: Response, next: NextFunction) => {
        const { username, password } = req.body;
        const query = `SELECT * FROM user_info WHERE username='${username}' AND password='${password}'`


         

    }





}
