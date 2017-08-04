const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const candyRouter = require('./candyRouter.js');

app.use(bodyParser.json());

app.use('/candies', candyRouter);

app.listen(port, function() {
    console.log('Server started on port: ', port);
});