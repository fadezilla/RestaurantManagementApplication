var express = require('express');
var db = require("../models");
var OrderService = require("../services/OrderService")
var orderService = new OrderService(db);
var bodyParser = require('body-parser');
const order = require('../models/order');
var jsonParser = bodyParser.json()
var router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {
  const orders = await orderService.getAll();
  res.render('index', { orders });
});

router.post('/', jsonParser, async function(req, res, next) {
  const {id}  = req.params.id;
  try {
    await orderService.create(id);
    res.status(201).send('Success!');
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error ocurred while updating the order status.'})
  }
});

module.exports = router;
