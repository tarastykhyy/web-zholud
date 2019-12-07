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
    pass: 'T30a06r1989as'
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
      reserveTransporter.sendMail(mailOptions, function (error, info) {
        if(error) {
          res.status(500).send('Cannot send email!');
        } else {
          res.sendStatus(200);
        }
      })
    } else {
      console.log('Email sent: ' + info.response);
      res.sendStatus(200);
    }
  });
});


module.exports = router;
