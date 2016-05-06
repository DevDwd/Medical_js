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

router.get('/admin',function(req,res){
  res.render('/AdminPage',{title:'Back-end'})
})



router.get('/personnels', function(req, res){

	var db = req.db;
	var collection = db.get('users');

	collection.find({}, {}, function(e, docs){
		res.render('personnel', {
			"users" : docs
		});
	});
});

router.post("/Inscription", function(req, res){
	var db = req.db;
	var name = req.body.name;
	
	var prenom = req.body.prenom;
	var number = req.body.number;
	var profession = req.body.profession;
	var service = req.body.service;
	var password = req.body.password;
	var collection = db.get("users");
	collection.insert({
		"name" : name,
		"prenom" : prenom,
		"number" : number,
		"profession" : profession,
		"service" : service,
		"password" : password,
	}, function(err, doc){
		if(err){

			res.send("Erreur insertion dans la base de données");
		}else{
			res.redirect("msg");
		}
	});
});



router.get('/personnels',function(req,res){
  res.render('personnel',{ title: 'liste des medecins' });
})
router.get('/connection',function(req,res){
  res.render('connection',{ title: 'Connection' });
})


/* GET message  page. */
router.get('/msg', function(req, res, next) {
  res.render('message', { title: 'Message' });
});


/* Post message  page. */
router.post('/msg', function(req, res, next) {

  res.render('message', { title: 'Message' });
});


router.post('/login', function(req, res) {

	var name = req.body.name;
	var password = req.body.password;

	User.findOne({name: name, password: password}, function(err, user) {
		if (err) {
			return res.status(500).send();
		}
		if (!user) {
			return res.status(404).send();
		}

		return res.status(200).send();
	})

});






module.exports = router;

