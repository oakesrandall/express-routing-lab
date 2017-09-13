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

router.get('/', function(req, res) {
  console.log('hit get route on /');
  res.send(candies);
});

router.get('/:id', function(req, res) {
  console.log('hit get route on /:id ' + req.params.id);
  res.send(candies[req.params.id -1]);
});

router.post('/', function(req, res){
    console.log('hit post route on /');
    var newCandy = {'_id': candies.length += 1, 'name': req.body.name, 'color': req.body.color};
    res.send(newCandy);  
});

router.put('/:id', function(req,res) {
    var current = candies[req.params.id-1];
    current.name = req.body.name;
    current.color = req.body.color;
    res.send("changed candy");
});


router.delete('/:id',function(req,res){
    candies[req.params.id-1] = null;
    console.log(candies[req.params.id-1]);
    res.send("deleted candy");
});

module.exports = router;
