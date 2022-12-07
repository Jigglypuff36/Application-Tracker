"use strict";
exports.__esModule = true;
var express = require('express');
var router = express.Router();
var signupController_1 = require("../controllers/signupController");
router.post('/', signupController_1.signupController.createUser, function (req, res) {
    return res.status(200).send(res.locals.newUser);
});
exports["default"] = router;
