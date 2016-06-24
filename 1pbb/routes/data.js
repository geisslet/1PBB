//esversion:6;

var express = require('express');
var promise = require('promise');
var router = express.Router();

/*var loggly = require('loggly');

var client = loggly.createClient({
    token: 'opbb',
    subdomain: 'articleHandler'
});*/

var csv = require('csv');
var csvWrite = require('csv-stringify');
var fs = require('fs');
//

var articles = [];
var variations = [];
var bills = [];
var billYears = [];
var customers = [];
var offers = [];
var offersYears = [];


var reader = function _readFile (fileName, res) {

    try{

        process.stdout.write('read File: ' +__dirname+ fileName + '\n');  

        fs.readFile(__dirname+fileName, (err, data) => {
        
            if (err) res.send(err);//throw err;

            csv.parse(data, {columns: true, delimiter: ';'}, (err, csvdata)=>{
                if (err) res.send(err);//throw err;

                products = csvdata;
                res.send(csvdata);

            });
        });

    } catch (err) {
        console.error(err);
        res.send(err);
    }

};

var writer = function _writeFile(fileName, contentObj, res){

    try{

        process.stdout.write('write File entered: ' +__dirname+ fileName + '\n');  
        process.stdout.write('');


        csvWrite(contentObj, (err, csvdata)=>{

            process.stdout.write('write File csvWrite: ' +__dirname+ fileName + '\n');  
            
            if (err) res.send(err);//throw err;

            console.log(csvdata);

            fs.writeFile(__dirname+fileName, csvdata, (err) => {

                process.stdout.write('write File write: ' +__dirname+ fileName + '\n');  
                if (err) res.send(err);//throw err;
                

                res.send("saving ok.");
            });
        });
       


    } catch (err) {
        console.error(err);
        res.send(err);
    }

};

// products file ----------------------------------------------------
var prodFile = '/../data/products.csv';
router.get('/products', function(req, res) {
    process.stdout.write('get.products: ' + req + '\n');
    reader(prodFile, res);
});
router.post('/products', function (req, res) {
    process.stdout.write('post.products: ' + JSON.stringify(req.body) + '\n'); 

    //process.stdout.write(JSON.stringify(req));

    writer(prodFile, req.body, res);
});

// customers file ----------------------------------------------------
var customersFile = '/../data/customers.csv';
router.get('/customers', function (req, res) {
  process.stdout.write('get.customers: ' + req +'\n');
  reader(customersFile, res);
});
router.post('/customers', function (req, res) {
    process.stdout.write('post.customers: ' + JSON.stringify(req) + '\n');   
    writer(producrssFile, req, res);
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





router.put('/user', function (req, res) {
    res.send('Got a PUT request at /user');
});


router.delete('/user', function (req, res) {
    res.send('Got a DELETE request at /user');
});

module.exports = router;

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