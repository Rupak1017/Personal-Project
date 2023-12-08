var express = require('express');
var router = express.Router();
const userModel=require('./users');
const postModel=require('./posts');
const passport=require('passport');
const localStrategy=require('passport-local');
passport.use(new localStrategy(userModel.authenticate()));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('signup');
});






router.get('/login', function(req, res, next) {
  res.render('login',{error:req.flash('error')});
});



router.get('/home', isLoggedIn ,async function(req, res, next) {
  const user= await userModel.findOne({
    username:req.session.passport.user
  })
  
  res.render('index',{user});
});

router.post('/register', function(req,res,){
  let userData = new userModel({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
    fullname: req.body.fullname,
  })
  userModel.register(userData, req.body.password)
  .then(function(){
    passport.authenticate('local') (req,res,function(){
res.redirect('/home');
    })

  })
});

router.post('/login', passport.authenticate('local',{
  successRedirect: '/home',
  failureRedirect: "/login",
  failureFlash: true
}), function (req,res){})

router.get('/logout', function(req, res,next) {
  req.logout(function(err) {
    if (err) { return next(err); }
    res.redirect('/login');
  });
  });

  function isLoggedIn(req,res,next){
    if(req.isAuthenticated()){
      return next();
    }
    res.redirect('/login');

  }










module.exports = router;
