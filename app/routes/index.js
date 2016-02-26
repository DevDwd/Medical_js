var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/test',function(req,res,next){
  res.render('PageAccueil', { title: 'Bienvenue sur Notre site' });
});
router.get('/Inscription',function(req,res,next){
  res.render('Inscription', { title: 'Inscription' });
});
module.exports = router;

