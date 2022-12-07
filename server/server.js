"use strict";
exports.__esModule = true;
var path = require('path');
var express = require('express');
var userRoute_1 = require("./routes/userRoute");
var app = express();
var PORT = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
if (process.env.NODE_ENV) {
    app.use('/', express.static(path.join(__dirname, '../dist')));
}
app.use('/api/user', userRoute_1["default"]);
//start app on port
app.listen(PORT, function () {
    console.log("Server listening on port: ".concat(PORT, "..."));
});
module.exports = app;
