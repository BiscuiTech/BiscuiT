/* eslint-disable no-multi-spaces */
require('dotenv').config()
const methodOverride = require('method-override')
/* const LocalStrategy = require('passport-local') */
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
/* const mongoose = require('mongoose')
const passport = require('passport') */
const express = require('express')
const logger = require('morgan')
/* const proxy = require('http-proxy-middleware') */
const flash = require('connect-flash')
const path = require('path')
/* const session = require('express-session') */
/* const MongoStore              = require('connect-mongo')(session) */
const app = express()
const favicon = require('serve-favicon')
/* eslint-enable no-multi-spaces */
//  models declaration
/* const User = require('./src/models/user') */

// routes declaration
/* const dashRoute = require('./src/routes/dashboard') */
const index = require('./src/routes/index')
/* let users = require('./routes/users') */

// env var
/* const DB_USER = process.env.DB_USER
const DB_PASS = process.env.DB_PASS
const DB_WEB = process.env.DB_WEB
const AUTH_SECRET = process.env.AUTH_SECRET */

// view engine setup
app.set('views', path.join(__dirname, '/src/views'))
app.set('view engine', 'pug')

app.use(favicon(path.join(__dirname, '/public', 'favicon.png')))
/* mongoose.connect(`mongodb://${DB_USER}:${DB_PASS}@${DB_WEB}`) */
app.use(cookieParser())
app.use(logger('common'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use(express.static('src/assets'))
app.use(methodOverride('_method'))
app.use(flash())

// PASSPORT CONFIGURATION
/* app.use(session({
  store: new MongoStore({mongooseConnection: mongoose.connection}),
  resave: true,
  saveUninitialized: false,
  secret: AUTH_SECRET
}))
app.use(passport.initialize())
app.use(passport.session())
passport.use(new LocalStrategy(User.authenticate()))
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())
app.use(function (req, res, next) {
  res.locals.currentUser = req.user
  res.locals.error = req.flash('error')
  res.locals.success = req.flash('success')
  next()
}) */

app.use('/', index)
/* app.use('/users', users) */
/* app.use('/dashboard', dashRoute) */

// proxy
/* app.use('/pos-api', proxy({
  target: 'https://lepointdevente.com',
  changeOrigin: true
})) */

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
