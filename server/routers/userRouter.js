"use strict";
exports.__esModule = true;
var express = require('express');
var userRouter = express.Router();
var userController_1 = require("../controllers/userController");
// userRouter.get('/', userController.getUsers, (req: Request, res: Response) =>
//   res.status(200).send(res.locals.users)
// );
// userRouter('/', (req: Request, res: Response) => {
//     return res.status(200).send("hi");
//   }
// )
userRouter.post('/login', 
// userController.verifyUser,
function (req, res) {
    return res.status(200).json(res.locals.user);
});
userRouter.post('/signup', userController_1["default"].createUser, 
// userController.sendUser,
function (req, res) {
    return res.status(200).send('hi');
});
exports["default"] = userRouter;
