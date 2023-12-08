var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const expressSession=require('express-session');
const flash=require('connect-flash');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const passport = require('passport');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));


app.use(flash());
app.use(expressSession({
  secret: 'secret',
  resave: false,
  saveUninitialized: false,
})
);

app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(usersRouter.serializeUser());
passport.deserializeUser(usersRouter.deserializeUser());

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465, 
  secure: true, 
  auth: {
      user: 'rupakkapoor07@gmail.com',
      pass: 'cxcg xvyb yhnb xplm',
     
  },
});
app.post('/send-email', async (req, res) => {
  const { name, email, phone, message } = req.body;

  try {
      const info = await transporter.sendMail({
          to: 'rupakkapoor07@gmail.com',
          from: email,
          subject: 'Form Submission',
          html: `
              <p>Name: ${name}</p>
              <p>Email: ${email}</p>
              <p>Phone No.: ${phone}</p>
              <p>Message: ${message}</p>
          `,
      });

      console.log('Message sent: %s', info.messageId);
      res.render('confirm');
  } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).send('Error sending email');
  }
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

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
