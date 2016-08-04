/* global describe, it, expect ,require*/
const obj = require("../barcode/barcodeToPostcode");

describe("checkBarcodeLegal", function () {
    it("check barcode legal of right", function () {
        let barcode = "| |:|:: :|:|: |:::| :::|| ::||: :|:|: |";
        let result = obj.checkBarcodeLegal(barcode);
        let expected = true;
        expect(result).toEqual(expected);
    });
    it("check barcode legal of error", function () {
        let barcode = "***";
        let result = obj.checkBarcodeLegal(barcode);
        let expected = false;
        expect(result).toEqual(expected);
    });
});
describe("delDoubleLines", function () {
    it("delete head and tail lines", function () {
        let barcode = "| |:|:: :|:|: |:::| :::|| ::||: :|:|: |";
        let result = obj.delFrame(barcode);
        let expected = "|:|:: :|:|: |:::| :::|| ::||: :|:|:";
        expect(result).toEqual(expected);
    });
});
describe("MatchBarcodeNum", function () {
    it("Match num of barcodeList", function () {
        let barcode = "|:|:: :|:|: |:::| :::|| ::||: :|:|:";
        let barcodeList = ['||:::', ':::||', '::|:|', '::||:', ':|::|', ':|:|:', ':||::', '|:::|', '|::|:', '|:|::'];
        let result = obj.MatchBarcodeNum(barcode, barcodeList);
        let expected = [9, 5, 7, 1, 3, 5];
        expect(result).toEqual(expected);
    });
});
describe("splitCheckDigit", function () {
    it("get the checkDigit of postcode", function () {
        let postcode = [9, 5, 7, 1, 3, 5];
        let result = obj.splitCheckDigit(postcode);
        let expected = 5;
        expect(result).toEqual(expected);
    });
});
describe("splitPostcode", function () {
    it("get the postcode of postcodeCheckDigit", function () {
        let postcode = [9, 5, 7, 1, 3, 5];
        let result = obj.splitPostcode(postcode);
        let expected = [9, 5, 7, 1, 3];
        expect(result).toEqual(expected);
    });
});
describe("calculatePostcodeSum", function () {
    it("calculate the post of sum", function () {
        let postcode = [9, 5, 7, 1, 3];
        let result = obj.calculatePostcodeSum(postcode);
        let expected = 25;
        expect(result).toEqual(expected);
    });
});
describe("calculateRightCheckDigit", function () {
    it("calculate the CheckDigit of right", function () {
        let postcodeSum = 25;
        let result = obj.calculateRightCheckDigit(postcodeSum);
        let expected = 5;
        expect(result).toEqual(expected);
    });
});
describe("checkPostcodeValidity", function () {
    it("match the postcode of right ", function () {
        let checkDigit = 5;
        let rightCheckDigit = 5;
        let result = obj.checkPostcodeValidity(checkDigit, rightCheckDigit);
        let expected = true;
        expect(result).toEqual(expected);
    });
    it("match the postcode of error ", function () {
        let checkDigit = 4;
        let rightCheckDigit = 5;

        let result = obj.checkPostcodeValidity(checkDigit, rightCheckDigit);
        let expected = false;
        expect(result).toEqual(expected);
    });
});
describe("checkPostcodeValidity", function () {
    it("match the postcode of right ", function () {

        let barcode = "| |:|:: :|:|: |:::| :::|| ::||: :|:|: |";
        let result = obj.barcodeToPostcode(barcode);
        let expected = "95713";
        expect(result).toEqual(expected);
    });
    it("match the postcode of error ", function () {
        let barcode = "| |:|:: :|:|: |:::| :::|| ::||: :|:|| |";
        let result = obj.barcodeToPostcode(barcode);
        let expected = undefined;
        expect(result).toEqual(expected);
    });
});
describe("completePostcode", function () {
    it("add '-' for postcode ", function () {

        let postcode = ['1', '2', '4', '5', '6'];
        let result = obj.completePostcode(postcode);
        let expected = "12456";
        expect(result).toEqual(expected);
    });
    it("add '-' for postcode ", function () {
        let postcode = ['1', '2', '4', '5', '6', '2', '3', '4', '5'];
        let result = obj.completePostcode(postcode);
        let expected = "12456-2345";
        expect(result).toEqual(expected);
    });
});
