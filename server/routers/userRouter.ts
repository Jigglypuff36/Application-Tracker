const express = require('express');
const userRouter = express.Router();

import userController from '../controllers/userController';
import { Request, Response } from 'express';


// userRouter.get('/', userController.getUsers, (req: Request, res: Response) =>
//   res.status(200).send(res.locals.users)
// );

// userRouter('/', (req: Request, res: Response) => {
//     return res.status(200).send("hi");
//   }
// )

userRouter.post(
  '/login',
  // userController.verifyUser,
  (req: Request, res: Response) => {
    return res.status(200).json(res.locals.user);
  }
);

userRouter.post('/signup', userController.createUser,
  // userController.sendUser,
  (req: Request, res: Response) =>
  res.status(200).send('hi')
);


export default userRouter;