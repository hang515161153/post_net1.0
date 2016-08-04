'use strict';
/* global describe, it, expect ,require*/

const BarcodeAction = require("../actions/BarcodeAction");
describe("BarcodeAction", function () {
    let barcodeAction = BarcodeAction();
    fit("barcode of action", function () {
        spyOn(console, "log");
        let cmd = "| |:|:: :|:|: |:::| :::|| ::||: :|:|: |";
        const barcodeResult = {success: true, value: '95713'};
        let result = barcodeAction.doAction(cmd);
        let expectResult = "95713";
        expect(result.value).toEqual(expectResult);
        expect(console.log).toHaveBeenCalledWith(barcodeResult.value);
    });
    it("should return false", function () {
        let cmd = "||";
        spyOn(console, 'log');
        let result = barcodeAction.doAction(cmd);
        let expectResult = false;
        expect(result.success).toEqual(expectResult);
    });
    it("should return true", function () {
        let cmd = "| |:|:: :|:|: |:::| :::|| ::||: :|:|: |";
        spyOn(console, 'log');
        let result = barcodeAction.doAction(cmd);
        let expectResult = true;
        expect(result.success).toEqual(expectResult);
    });
    it("should to end", function() {
        let cmd = "q";
        spyOn(console, 'log');
        spyOn(process, 'exit');
        let result = barcodeAction.doAction(cmd);
        let expectResult = 0;
        expect(process.exit).toHaveBeenCalledWith(expectResult);
    });
});