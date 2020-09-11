var express = require('express');
var router = express.Router();
const SimpleNodeLogger = require('simple-node-logger'),
    opts = {
      logFilePath:'./logs/log.log',
      timestampFormat:'YYYY-MM-DD HH:mm:ss.SSS'
    },
    log = SimpleNodeLogger.createSimpleLogger( opts );

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'server.zholud@gmail.com',
    pass: 'cahvzhouxhpupfxi'
  }
});

var reserveTransporter = nodemailer.createTransport({
  host: 'smtp.ukr.net',
  port: 465,
  secure: true,
  auth: {
    user: 'lamis@ukr.net',
    pass: 'xLcPZI17Ldi3UPbf'
  }
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ZHOLUD' });
});

router.post('/sendEmail', function (req, res, next) {
  var mailOptions = {
    from: 'server.zholud@gmail.com',
    to: 'office.zholud@gmail.com',
    subject: 'Order',
    text: `${req.body.name} \n ${req.body.text} \n ${req.body.email}`
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      mailOptions.from = 'lamis@ukr.net';

      log.error(`Main transporter: ${JSON.stringify(error)}`);

      reserveTransporter.sendMail(mailOptions, function (error, info) {
        if(error) {
          log.error(`Reserve transporter: ${JSON.stringify(error)}`);

          res.status(500).send(error);
        } else {
          res.status(200).send('Sent from reserve email server');
        }
      })
    } else {
      res.status(200).send('Sent from main email server');
    }
  });
});


module.exports = router;
