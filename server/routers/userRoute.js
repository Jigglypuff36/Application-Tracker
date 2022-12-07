"use strict";
exports.__esModule = true;
var express = require('express');
var router = express.Router();
var userController_1 = require("../controllers/userController");
router.get('/', userController_1.userController.getInfo, function (req, res) {
    return res.status(200).send(res.locals.userInfo);
});
router.post('/', userController_1.userController.createUser, function (req, res) {
    return res.status(200).send(res.locals.newUser);
});
exports["default"] = router;
