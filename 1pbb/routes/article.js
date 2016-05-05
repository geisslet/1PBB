var express = require('express');
var csv = require('csv');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond  seconde with a resource');
});

router.get('/user', function (req, res) {
  res.send('Hello World!');
});

router.post('/', function (req, res) {
  res.send('Got a POST request');
});


router.put('/user', function (req, res) {
  res.send('Got a PUT request at /user');
});


router.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user');
});


csv.generate({seed: 1, columns: 2, length: 20}, function(err, data){
  csv.parse(data, function(err, data){
    csv.transform(data, function(data){
      return data.map(function(value){return value.toUpperCase();});
    }, function(err, data){
      csv.stringify(data, function(err, data){
        process.stdout.write(data);
      });
    });
  });
});


module.exports = router;