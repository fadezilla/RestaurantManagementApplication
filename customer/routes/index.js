var express = require('express');
var db = require("../models");
var OrderService = require("../services/OrderService")
var orderService = new OrderService(db);
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', jsonParser, async function(req, res, next) {
  const {FirstName, LastName, DishName } = req.body;
  if(!FirstName || !LastName || !DishName ) {
    res.status(400).json({ error: 'Please provide all the required fields.'});
    return;
  }
  try {
    await orderService.create(FirstName, LastName, DishName);
    res.status(201).send('Success!');
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error ocurred while creating the order.'})
  }
});

module.exports = router;
