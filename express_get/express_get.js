/**
 * Created by weihang on 16-8-2.
 */
var express = require('express');
var app = express();
var postcode = require('../barcode/postcodeToBarcode');
var barcode = require('../barcode/barcodeToPostcode');
app.get('/postcode', function (request, response) {

    response.send(new postcode().postcodeToBarcode(request.query.code));
  //  response.render("code",{postcode:"login"});
});
app.get('/barcode', function (request, response) {

    response.send(new barcode().barcodeToPostcode(request.query.code));
    //  response.render("code",{postcode:"login"});
});

var server = app.listen(3000, function() {
    // console.log('Listening on port %d', server.address().port);code='+'12345'
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});
