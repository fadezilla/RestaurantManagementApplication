var express = require('express');
var db = require("../models");
var OrderService = require("../services/OrderService");
const order = require('../models/order');
var orderService = new OrderService(db);
var router = express.Router();

/* GET home page. */
router.get('/', async function (req, res, next) {
	const allOrdersCount = await orderService.getAllCount();
	const activeOrdersCount = await orderService.getAllActiveCount();
	const popularDishes = await orderService.getPopular();

	res.render('index', { active: activeOrdersCount,
		all: allOrdersCount,
		popular: popularDishes });
});

module.exports = router;

