"use strict";
exports.__esModule = true;
var express = require('express');
var router = express.Router();
var userController_1 = require("../controllers/userController");
var applicationController_1 = require("../controllers/applicationController");
router.post('/login', userController_1.userController.isLoggedIn, userController_1.userController.getInfo, function (req, res) {
    return res.status(200).send(res.locals.userInfo);
});
router.post('/:id/addApplication', applicationController_1.applicationController.addApplication, function (req, res) {
    return res.status(200).send('successfully added');
});
router.post('/', userController_1.userController.createUser, function (req, res) {
    return res.status(200).send(res.locals.newUser);
});
router.get('/:id/getApplications', applicationController_1.applicationController.getApplications, function (req, res) {
    return res.status(200).json(res.locals.applications);
});
router.patch('/:id/:appId/updateApplication', applicationController_1.applicationController.updateApplication, function (req, res) {
    return res.status(200).send('successfully patched');
});
router["delete"]('/:id/:appId/deleteApplication', applicationController_1.applicationController.deleteApplication, function (req, res) {
    return res.status(200).send('successfully deleted');
});
exports["default"] = router;
