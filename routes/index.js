var express = require('express');
var router = express.Router();

const imageController = require('../controllers/images')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/images');
});

router.get('/images', imageController.index);
router.post('/images', imageController.create);

module.exports = router;
