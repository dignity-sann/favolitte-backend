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

module.exports = router;
