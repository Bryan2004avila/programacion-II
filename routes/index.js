var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Programacion' , 
    name: 'Bryan',
    apellido: 'Avila',
    CI: '30542889' ,
  });
});

module.exports = router;
