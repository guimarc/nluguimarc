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
var NaturalLanguageClassifierV1 = require('watson-developer-cloud/natural-language-classifier/v1');

var natural_language_classifier = new NaturalLanguageClassifierV1({
  username: '10c59733-c15c-47e0-91a9-d219b007c3c6',
  password: 'dh62EHpVQWjv'
});

natural_language_classifier.classify({
  text: 'Is it sunny?',
  classifier_id: '<classifier-id>' },
  function(err, response) {
    if (err)
      console.log('error:', err);
    else
      console.log(JSON.stringify(response, null, 2));
});
