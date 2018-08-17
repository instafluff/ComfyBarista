var express = require('express');
var fs = require('fs');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: "ComfyBarista!", username: process.env.TWITCHUSER, oauth: process.env.OAUTH });
});

module.exports = router;
