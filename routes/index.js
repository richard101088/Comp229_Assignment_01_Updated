var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render(
    'Home', 
  { 
    title: 'Home',
    name: 'Richard',
    surname: 'Antonio'
   
  });
});

/* GET Project page. */
router.get('/Projects', function(req, res, next) {
  res.render('Projects',{
    title: 'Projects',
    name: 'Richard'
  });
});

/* GET About Me Page. */
router.get('/ContactMe', function(req, res, next) {
  res.render('ContactMe',{
    title: 'ContactMe',
    name: 'Richard'
  });
});

/* GET About Me Page. */
router.get('/AboutMe', function(req, res, next) {
  res.render('AboutMe',{
    title: 'AboutMe',
    name: 'Richard'
  });
});

/* GET Services Page. */
router.get('/Services', function(req, res, next) {
  res.render('Services',{
    title: 'Services',
    name: 'Richard'
  });
});

module.exports = router;
