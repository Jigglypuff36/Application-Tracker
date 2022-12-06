"use strict";
exports.__esModule = true;
var path = require('path');
var express = require('express');
var oAuthRouter_1 = require("./routers/oAuthRouter");
var app = express();
var PORT = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
if (process.env.NODE_ENV) {
    app.use('/', express.static(path.join(__dirname, '../dist')));
}
// app.use('/api', (req: Request, res: Response) => {
//   return res.status(200).send('hi');
// })
app.use('/api/oAuth', oAuthRouter_1["default"]);
//redirect to page 404 when endpoint does not exist
app.use('*', function (req, res) {
    return res.status(404).send('404 Page Not Found');
});
//global error handling
app.use(function (err, req, res, next) {
    var defaultErr = {
        log: 'Express error handler caught unknown middleware error',
        status: 500,
        message: { err: 'An error occurred' }
    };
    var errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
});
//start app on port
app.listen(PORT, function () {
    console.log("Server listening on port: ".concat(PORT, "..."));
});
module.exports = app;
