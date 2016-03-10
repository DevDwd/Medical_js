var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('PageAccueil', { title: 'Bienvenue sur notre site' });
});
router.get('/test',function(req,res,next){
  res.render('PageAccueil', { title: 'Bienvenue sur Notre site' });
});
router.get('/Inscription',function(req,res,next){
  res.render('Inscription', { title: 'Inscription' });
});
router.get('/service',function(req,res,next){
  res.render('service', { title: 'Inscription' });
});
router.get('/propos',function(req,res,next){
  res.render('propos', { title: 'Inscription' });
});
router.get('/Accueil',function(req,res){
  res.render('PageAccueil',{ title: 'Bienvenue sur Notre site' });
})
router.get('/personnels',function(req,res){
  res.render('personnel',{ title: 'liste des medecins' });
})
router.get('/connection',function(req,res){
  res.render('connection',{ title: 'Connection' });
})
module.exports = router;

