let createError = require('http-errors');
let express = require('express');
let favicon = require('serve-favicon')
let path = require('path');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser')
let logger = require('morgan');
let indexRouter = require('./routes/index');
let contactRouter = require('./routes/contact');
let app = express();

// Error Tracking
const Sentry = require("@sentry/node") ;
Sentry.init({ dsn:"https://29038e9a86384a1e8a0d6a5c64753b35@sentry.io/1291180" });
// The request handler must be the first middleware on the app
app.use(Sentry.Handlers.requestHandler());

// The error handler must be before any other error middleware
app.use(Sentry.Handlers.errorHandler());

// Optional fallthrough error handler
app.use(function onError(err, req, res, next) {
	// The error id is attached to `res.sentry` to be returned
	// and optionally displayed to the user for support.
	res.statusCode = 500;
	res.end(res.sentry + "\n");
});
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'Biscui.png')))

// routes definition
app.use('/', indexRouter);
app.use('/contact', contactRouter);
app.get("*", function mainHandler(req, res, next) {
	res.render("index");
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
