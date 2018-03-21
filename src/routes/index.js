const express = require('express')
const router = express.Router()
/* const passport = require('passport') */
/* const middleware = require('../helpers/middleware') */

/* var User = require('../models/user') */

/* GET home page. */
/* router.get('/index', middleware.isLoggedIn, function (req, res, next) {
  res.render('index', { title: 'Dashboard' })
}) */

router.get('/', function(req, res, next) {
  res.render('landing')
})
// show register form
/* router.get('/register', function (req, res) {
  res.render('register')
}) */

// handle sign up logic
/* router.post('/register', function (req, res) {
  var newUser = new User({username: req.body.username})
  User.register(newUser, req.body.password, function (err, user) {
    if (err) {
      req.flash('error', err.message)
      return res.render('register')
    }
    passport.authenticate('local')(req, res, function () {
      req.flash('success', 'You have succesfuly registered, ' + user.username)
      res.redirect('/')
    })
  })
}) */

// show login form
router.get('/login', function(req, res) {
  res.render('login')
})

// handling login logic
/* router.post(
  '/login',
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
  }),
  function(req, res) {}
) */

// logout route
/* router.get('/logout', function(req, res) {
  req.logout()
  req.flash('success', 'Logged you out!')
  res.redirect('/')
}) */
module.exports = router
