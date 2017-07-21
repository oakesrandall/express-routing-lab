const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

var candies = [
  { id: 1, name: "Chewing Gum", color: "Red"},
  { id: 2, name: "Pez",         color: "Green"},
  { id: 3, name: "Marshmallow", color: "Pink"},
  { id: 4, name: "Candy Stick", color: "Blue"}
];



//What would need to go into candies
//in order to pass our first test?
router.get('/', function(req, res) {
  res.send(candies);
});

router.get('/:id/', function(req, res) {
  res.send(candies[req.params.id -1]);
});

router.post('/', function(req, res){
  res.send("Made a POST request to /candies");
});

// router.put


// 	// Hint: we want all candies in JSON format
// });

// Fill out the rest of the routes here
// router.get("/candies", function(req, res){
//   res.send(candies);
// });

module.exports = router;
