var express = require('express');
var router = express.Router();

//S3
// Load the SDK for JavaScript
var AWS = require('aws-sdk');

// Create S3 service object
s3 = new AWS.S3({apiVersion: '2006-03-01'});

//
var params = { 
 Bucket: 'drifteast.com',
 Delimiter: '/',
 Prefix: 'images/'
}

/* GET all images. */
router.get('/', function(req, res, next) {
	if (err) {
            console.log(err, err.stack); // an error occurred
        }
    else {
			var allKeys = []
		   s3.listObjectsV2(params, function(err, data) {
		   if (err) console.log(err, err.stack); // an error occurred
		   else {
		   	var contents = data.Contents;
	            contents.forEach(function (content) {
	                allKeys.push(content.Key);
	            });
		   }     
		   res.send(allKeys);           // successful response
		});
	}
});

module.exports = router;