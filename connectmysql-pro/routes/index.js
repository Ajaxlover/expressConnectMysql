var express = require('express');
var router = express.Router();

 var connection = require('../db/db');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/abc', function(req, res, next) {
   connection.query('SELECT * from stu',function(error, results, fields) {
     if(error) throw error;
     res.json(results);
   })

 });

module.exports = router;
