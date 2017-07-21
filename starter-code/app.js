const express = require('express');
const app     = express();
const port    = process.env.PORT || 3000;
const candyRouter = require('./candyRouter.js');




// app.use(router.parseBody("candies"));


//How do we redirect the /candies path
//through our candyRouter?
//Hint: you need app.use
app.use('/candies', candyRouter);

app.listen(port);
