var express = require('express');
var router = express.Router();

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'server.zholud@gmail.com',
    pass: 'Sravpes2019'
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
      console.log(error);
      res.status(500).send('Cannot send email!');
    } else {
      console.log('Email sent: ' + info.response);
      res.sendStatus(200);
    }
  });
});


module.exports = router;
