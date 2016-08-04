/* global describe, it, expect, require */
const obj = require("../barcode/postcodeToBarcode");
describe("checkPostcodeLegal",function(){
    it("check postcodes digits of true",function () {
        let postcode = "12345";
        let result = obj.checkPostcodeLegal(postcode);
        let expected = true;
        expect(result).toEqual(expected);
    });
    it("check postcodes digits of false",function () {
        let postcode = "123456";
        let result = obj.checkPostcodeLegal(postcode);
        let expected = false;
        expect(result).toEqual(expected);
    });
});
describe("calculatePosSum",function(){
    it("calculate  postcodes sum",function () {
        let postcode = "12345";
        let result = obj.calculatePosSum(postcode);
        let expected = 15;
        expect(result).toEqual(expected);
    });
});
describe("calculateCheckDigit",function(){
    it("calculate checkDigit of postcode",function () {
        let postSum = 15;
        let result = obj.calculateCheckDigit(postSum);
        let expected = 5;
        expect(result).toEqual(expected);
    });
});
describe("connectPostcode",function(){
    it("connect checkDigit and postcode",function () {
        let postcode = "12345";
        let checkDigit = 5;
        let result = obj.connectPostcode(postcode,checkDigit);
        let expected = "123455";
        expect(result).toEqual(expected);
    });
});
describe("putBarcode",function(){
    it("put a barcode of postcode",function () {
        let newPostcode = "123455";
        let numBarcodeList = ['||:::',':::||','::|:|','::||:',':|::|',':|:|:',':||::','|:::|','|::|:','|:|::'];
        let result = obj.putBarcode(newPostcode,numBarcodeList);
        let expected = [':::||','::|:|','::||:',':|::|',':|:|:',':|:|:'];
        expect(result).toEqual(expected);
    });
});
describe("completeBarcode",function(){
    it("put the whole barcode ",function () {
        let barcode = [':::||','::|:|','::||:',':|::|',':|:|:',':|:|:'];
        let result = obj.completeBarcode(barcode);
        let expected = "|:::||::|:|::||::|::|:|:|::|:|:|";
        expect(result).toEqual(expected);
    });
});
describe("postcodeToBarcode",function(){
    it("check postcodes  of true",function () {
        let postcode = "12345";
        let result = obj.postcodeToBarcode(postcode);
        let expected = "|:::||::|:|::||::|::|:|:|::|:|:|";
        expect(result).toEqual(expected);
    });
    it("check postcodes digits false",function () {
        let postcode = "123453";
        let result = obj.postcodeToBarcode(postcode);

        expect(result).toBeUndefined();
    });
});

