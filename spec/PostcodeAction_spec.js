'use strict';
/* global describe, it, expect ,require*/

const PostcodeAction = require("../actions/PostcodeAction");
const Shell = require("../interface/shell");
describe("PostcodeAction", function () {
    let postcodeAction = PostcodeAction();
    it("postcode of action", function () {
        spyOn(console, "log");
        let cmd = "95713";
        let result = postcodeAction.doAction(cmd);
        //let expectResult = "| |:|:: :|:|: |:::| :::|| ::||: :|:|: |";
        let expectResult = 'postcode';
        expect(result).toEqual(expectResult);
        //expect(console.log).toHaveBeenCalledWith(barcodeResult.value);
    });
    it("postcode of action", function () {
        spyOn(console, "log");
        let cmd = "123";
        let result = postcodeAction.doAction(cmd);
        let expectResult = "postcode";
        expect(result).toEqual(expectResult);
        // expect(console.log).toHaveBeenCalledWith(barcodeResult.value);
    });
    it("should to end", function () {
        let cmd = "q";
        spyOn(console, 'log');
        spyOn(process, 'exit');
        //let result = postcodeAction.doAction(cmd);
        let expectResult = 0;
        expect(process.exit).toHaveBeenCalledWith(expectResult);
    });
    it("should return postcode", function () {
        let cmd = "12345";
        spyOn(console, 'log');
        let result = barcodeAction.doAction(cmd);
        let expectResult = 'postcode';
        expect(result).toEqual(expectResult);
    });
});