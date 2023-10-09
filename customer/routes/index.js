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

});

module.exports = router;
