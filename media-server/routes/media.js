var express = require('express');
var router = express.Router();

//S3
// Load the SDK for JavaScript
var AWS = require('aws-sdk');

// Load credentials and set region from JSON file
AWS.config.loadFromPath('./config.json');

// Create S3 service object
s3 = new AWS.S3({apiVersion: '2006-03-01'});

//
var params = { 
 Bucket: 'drifteast.com',
 Delimiter: '/',
 Prefix: 'images/'
}

// Call S3 to list all images
s3.listObjectsV2(params, function(err, data) {
   if (err) console.log(err, err.stack); // an error occurred
   else     console.log(data);           // successful response
});

/* GET users listing. */
router.get('/media', function(req, res, next) {
   res.json(s3.listObjectsV2);
});

module.exports = router;