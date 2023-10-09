var express = require('express');
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
var router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {
  res.render('index', { orders: [] });
});

router.post('/', jsonParser, async function(req, res, next) {

});

module.exports = router;
