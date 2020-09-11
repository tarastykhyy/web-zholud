var express = require('express');
var router = express.Router();

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'server.zholud@gmail.com',
    pass: 'Sravpes2019'
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
    //to: 'davemitchael@gmail.com',
    to: 'office.zholud@gmail.com',
    subject: 'Order',
    text: `${req.body.name} \n ${req.body.text} \n ${req.body.email}`
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      mailOptions.from = 'lamis@ukr.net';
      res.status(500).send(error);
     /* reserveTransporter.sendMail(mailOptions, function (error, info) {
        if(error) {
          res.status(500).send(error);
        } else {
          res.status(200).send('Sent from reserve email server');
        }
      })*/
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Sent from main email server');
    }
  });
});


module.exports = router;
