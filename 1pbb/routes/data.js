//jshint esversion:6;

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

/*
var parser = csv.parse({columns: true, delimiter: ';'}, function(err, data){
  console.log(data);
  content.push(data);
});
*/

router.get('/products', function(req, res) {
  process.stdout.write('get.products: ' + req + '\n');  

  fs.readFile(__dirname+'/../data/products.csv', (err, data) => {
    if (err) throw err;

    csv.parse(data, {columns: true, delimiter: ';'}, (err, csvdata)=>{
        if (err) throw err;

        products = csvdata;
        res.send(products);
    });
  });
});

router.get('/customers', function (req, res) {
  process.stdout.write('get.customers: ' + req +'\n');

  fs.readFile(__dirname+'/../data/customers.csv', (err, data) => {
    if (err) throw err;

    csv.parse(data, {columns: true, delimiter: ';'}, (err, csvdata)=>{
        if (err) throw err;
        
        customers = csvdata;
        res.send(customers);
    });
  });
});

router.get('/variations', function (req, res) {
  process.stdout.write('get.variations: ' + req + '\n');

  fs.readFile(__dirname+'/../data/variations.csv', (err, data) => {
    if (err) throw err;

    csv.parse(data, {columns: true, delimiter: ';'}, (err, csvdata)=>{
        if (err) throw err;

        variations = csvdata;
        res.send(variations);
    });
  });
});

router.get('/orders:year', function (req, res) {
  process.stdout.write('get.orders: ' + req + '\n');

  fs.readFile(__dirname+'/../data/orders_'+year+'.csv', (err, data) => {
    if (err) throw err;

    csv.parse(data, {columns: true, delimiter: ';'}, (err, csvdata)=>{
        orders = csvdata;
        res.send(orders);

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