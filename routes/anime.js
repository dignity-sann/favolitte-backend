var express = require('express');
var axios = require('axios');
var router = express.Router();

/* GET home page. */
router.get('/', function(request, response, next) {
  const url = 'http://api.moemoe.tokyo/anime/v1/master/cours'
  axios.get(url)
    .then(function (res) {
      response.send(res.data)
    })
    .catch(function (error) {
      throw new Error(error) 
    })
});

module.exports = router;
