const express = require('express');
const app     = express();
const port    = process.env.PORT || 3000;
const candyRouter = require('./candyRouter.js');
const parseBody = require('body-parser');




app.use(router.parseBody("candies"));


//How do we redirect the /candies path
//through our candyRouter?
//Hint: you need app.use
app.use('/candies', candyRouter);

app.listen(port);
