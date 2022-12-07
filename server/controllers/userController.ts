const model = require('../models/model');
import { RequestHandler, Request, Response, NextFunction } from 'express';

type userController = {
    // getUser: RequestHandler,
    // verifyUser: RequestHandler,
    // jobApplication: RequestHandler,
    createUser: RequestHandler,
    // sendUser: RequestHandler
}

const userController = {
    // getUser: async (req: Request, res: Response, next: NextFunction) => {
    //     const text = `select * from user_info`
    //     try{
    //         const login = await model.query(text)
    //         console.log(login);
    //         res.locals.userInfo = login;
    //         return next();
    //     }
    //     catch (err) {
    //         return next({
    //             log: `Error in userController.getUser: ${err}`,
    //             status: 500,
    //             message: 'Error occured while retrieving user info',
    //           });
    //     }
    // },

    // verifyUser: async (req: Request, res: Response, next: NextFunction) => {
    //     const { username, password } = req.body
    //     const text = `select name from user_info where username=${username}, password=${password}`
    //     try{
    //         const name = await model.query(text)
    //         console.log(name);
    //         res.locals.name = name;
    //         return next();
    //     }
    //     catch (err) {
    //         return next({
    //             log: `Error in userController.verifyUser: ${err}`,
    //             status: 500,
    //             message: 'Error occured while verifying user login',
    //           });
    //     }
    // },

    createUser: async (req: Request, res: Response, next: NextFunction) => {
        const { username, password, name, email } = req.body
        console.log(req.body);
        const text = `insert into user_info values (default, '${username}', '${email}', '${password}', default, '${name}')`
        try{
            const createUser = await model.query(text);
            console.log(createUser);
            // res.locals.userInfo = login;
            return next();
        }
        catch (err) {
            return next({
                log: `Error in userController.createUser: ${err}`,
                status: 500,
                message: 'Error occured while creating new user',
              });
        }
    }

    // sendUser: async (req: Request, res: Response, next: NextFunction) => {
    //     const { username } = req.body
    //     const text = `select * from user_info where username=${username}`
    //     try{
    //         const sendUserInfo = await model.query(text)
    //         console.log(sendUserInfo);
    //         res.locals.userInfo = sendUserInfo;
    //         return next();
    //     }
    //     catch (err) {
    //         return next({
    //             log: `Error in userController.sendUser: ${err}`,
    //             status: 500,
    //             message: 'Error occured while sending user info',
    //           });
    //     }
    // },
};


export default userController;