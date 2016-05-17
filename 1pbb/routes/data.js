var express = require('express');
var router = express.Router();

/*var loggly = require('loggly');

var client = loggly.createClient({
    token: 'opbb',
    subdomain: 'articleHandler'
});*/

var csv = require('csv');
var fs = require('fs');
//

var articles = [];
var variations = [];
var bills = [];
var billYears = [];
var customers = [];
var offers = [];
var offersYears = [];

var parser = csv.parse({columns: true, delimiter: ';'}, function(err, data){
  console.log(data);
  content.push(data);
});


router.get('/products', function(req, res) {
  process.stdout.write('get.products: ' + req);  

  console.log('console.test wa');

  //client.log('get.article: ' + JSON.stringify(req)); 

  fs.readFile(__dirname+'/../data/products.csv', (err, data) => {
    if (err) throw err;
    //console.log(data);

    csv.parse(data, {columns: true, delimiter: ';'}, (err, data)=>{
      //content = data;
        res.send(data);

    });
  });
});

router.get('/customers', function (req, res) {

  fs.readFile(__dirname+'/../data/customers.csv', (err, data) => {
    if (err) throw err;
    //console.log(data);

    csv.parse(data, {columns: true, delimiter: ';'}, (err, data)=>{
      //content = data;
        res.send(data);

    });
  });
});

router.get('/variations', function (req, res) {

  fs.readFile(__dirname+'/../data/variations.csv', (err, data) => {
    if (err) throw err;
    //console.log(data);

    csv.parse(data, {columns: true, delimiter: ';'}, (err, data)=>{
      //content = data;
        res.send(data);

    });
  });
});

router.get('/orders:year', function (req, res) {

  fs.readFile(__dirname+'/../data/orders_'+year+'.csv', (err, data) => {
    if (err) throw err;
    //console.log(data);

    csv.parse(data, {columns: true, delimiter: ';'}, (err, data)=>{
      //content = data;
        res.send(data);

    });
  });
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

/*

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
*/

module.exports = router;