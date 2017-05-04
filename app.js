/*eslint-env node*/

//------------------------------------------------------------------------------
// hello world app is based on node.js starter application for Bluemix
//------------------------------------------------------------------------------

// This application uses express as its web server
// for more info, see: http://expressjs.com
var express = require('express');

// cfenv provides access to your Cloud Foundry environment
// for more info, see: https://www.npmjs.com/package/cfenv
var cfenv = require('cfenv');

// create a new express server
var app = express();

// serve the files out of ./public as our main files
app.use(express.static(__dirname + '/public'));

// get the app environment from Cloud Foundry
var appEnv = cfenv.getAppEnv();

// start server on the specified port and binding host
app.listen(appEnv.port, '0.0.0.0', function() {

	// print a message when the server starts listening
  console.log("server starting on " + appEnv.url);
});

var fs = require('fs');
var NaturalLanguageUnderstandingV1 = require('watson-developer-cloud/natural-language-understanding/v1.js');

var nlu = new NaturalLanguageUnderstandingV1({
  username: '10c59733-c15c-47e0-91a9-d219b007c3c6',
  password: 'dh62EHpVQWjv',
  version_date: NaturalLanguageUnderstandingV1.VERSION_DATE_2017_02_27
});

var  file_data = 'Testing NLU for RAFIW team project';
nlu.analyze({
  'html': file_data, // Buffer or String
  'features': {
    'concepts': {},
    'keywords': {},
		'emotion' : {},
		'sentiment': {},
  }
}, function(err, response) {
     if (err)
       console.log('error:', err);
     else
		   console.log(file_data);
       console.log(JSON.stringify(response, null, 3));

 });
