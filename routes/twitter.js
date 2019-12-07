var express = require('express');
var Twitter = require('twitter')
var router = express.Router();

// Load .env variable
require('dotenv').config()

const client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret: process.env.TWITTER_ACCESS_SECRET
});

/* GET twitter api */
router.get('/api/favolites/list', function(request, response, next) {
  const params = { screen_name: 'ne_peer' }
  client.get('favorites/list', params, function (error, tweets, res) {
    if (!error) {
      response.status(200).send(tweets)
    } else {
      response.status(500).send(error)
    }
  });
});

router.get('/api/call', (request, response) => {
  const endpoint = request.query.endpoint
  const param = JSON.parse(request.query.param)
  console.log('====='.repeat(20))
  console.log('endpoint = ' + endpoint)
  console.log('param = ' + request.query.param)
  client.get(endpoint, param, (err, content, res) => {
    if (!err) {
      console.log(content)
      response.status(200).send(content)
    } else {
      console.log(err)
      response.status(500).send(err)
    }
  })
})

module.exports = router;
