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

router.put('/:id', function(req, res) {
    console.log('hit put route on /: ' + req.params.id);
    var updateCandy = candies[req.params.id-1];
    updateCandy.name = res.body.name;
    updateCandy.color = res.body.color;
    res.send(updateCandy);
});

router.delete('/:id', function(req, res) {
    console.log('hit delete route on /:id ' + req.params.id);
    candies.splice(req.params.id-1, 1);
    res.send(req.body);
});

module.exports = router;
