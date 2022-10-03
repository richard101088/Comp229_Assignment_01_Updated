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

/* GET home page. */
router.get('/Projects', function(req, res, next) {
  res.render('Projects',{
    title: 'Projects',
    name: 'Richard'
  });
});

/* GET About Page. */
router.get('/AboutMe', function(req, res, next) {
  res.render('AboutMe',{
    title: 'AboutMe',
    name: 'Richard'
  });


});

module.exports = router;
