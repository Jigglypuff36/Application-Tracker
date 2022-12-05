const path = require('path');
const express = require('express');
import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


if (process.env.NODE_ENV) {
  app.use('/', express.static(path.join(__dirname, '../dist')));
}

app.use('/api', (req: Request, res: Response) => {
  return res.status(200).send('hi');
})


//start app on port
app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}...`);
  });

module.exports = app;