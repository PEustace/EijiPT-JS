var cors = require('cors');
var express = require('express');
var path = require('path');
var app = express();
var cookieParser = require('cookie-parser');
var logger = require('morgan');

app.use(cors());

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var chatRouter = require('./routes/chat')

//

//const chatRouter = await import('./routes/chat.mjs');

//
//async function ModuleImportCompatHandler() {
    
//}

//import('./routes/chat.js').then(chat => console.log(chat.main));
//ModuleImportCompatHandler() //commonjs >:(

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/chat', chatRouter);

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
  //res.render('error');
});

module.exports = app;