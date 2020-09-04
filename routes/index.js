var express = require('express');
var router = express.Router();

const todoController = require('../controllers/todos')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/todos');
});

router.get('/todos', todoController.index);
router.post('/todos', todoController.create);

module.exports = router;
