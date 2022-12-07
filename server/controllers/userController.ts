import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';
const express = require('express')
import {db} from '../models/model';
import * as bcrypt from 'bcrypt';

type dbResponse = {
    command: 'INSERT',
    rows: []
}


export const userController = {

    createUser: async (req: Request, res: Response, next: NextFunction) => {

        
        try{        
            const { name, username, email, password } = req.body;
            // const query = `SELECT username FROM user_info WHERE username = '${username}'`
            console.log(name, username, email, password)
            // const result = await db.query(query)

            const saltRounds = 10;
            await bcrypt.genSalt(saltRounds, (error:Error|undefined, salt:any):void =>{
                bcrypt.hash(password, salt, async (errors:Error|undefined, hash:any) => {
                    console.log('Hashed password :', hash)
                    const secondQuery = `INSERT INTO user_info (username, email, password, name) 
                    VALUES ('${username}', '${email}', '${hash}', '${name}') RETURNING *;`;
                    const newUser = await db.query(secondQuery);
                    res.locals.userInfo = newUser;
                    return next();
                });
            });
           
        } catch(err) {
            return next({
                log: 'error in middleware create user',
                message: err
            })
        }
       
    },

    getInfo: async (req:Request, res: Response, next: NextFunction) => {
        const { id } = req.body;
        const query = `SELECT * FROM application WHERE application_id='${id}';`
        try {
            const result = await db.query(query)
            console.log(result)
            res.locals.userInfo = result.fields;
            return next()
        }
        catch(err) {
            return next({
                log: 'error in middleware getinfo',
                message: err
            }) 
        }
    },

    isLoggedIn: async (req:Request, res: Response, next: NextFunction) => {
        const { username, password } = req.body;
        const query = `SELECT * FROM user_info WHERE username='${username}';`
        try {
            const result = await db.query(query)

            // console.log('result :', result)
            const compare = await bcrypt.compare(password, result.rows[0].password);
            // console.log('this is compare : ', compare);
            if(!compare){
                res.locals.userInfo = false;
            }
            return next()
        }
        catch(err) {
            return next({
                log: 'error in middleware isloggedin',
                message: err
            }) 
        }
    },




}
