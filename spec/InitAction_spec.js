'use strict';
/* global describe, it, expect ,require*/

const InitAction = require("../actions/InitAction");
describe("InitAction", function () {
    let initAction = InitAction();
    it("match 1", function () {
        let cmd = "1";
        let result = initAction.doAction(cmd);
        let expectResult = "postcode";
        expect(result).toEqual(expectResult);
    });
    it("match 2", function () {
        let cmd = "2";
        let result = initAction.doAction(cmd);
        let expectResult = "barcode";
        expect(result).toEqual(expectResult);
    });
    it("match q", function () {
        let cmd = "q";
        spyOn(console, 'log');
        spyOn(process, 'exit');
        let result = initAction.doAction(cmd);
        let expectResult = 0;
        expect(process.exit).toHaveBeenCalledWith(expectResult);
    });
    it("match 3", function () {
        let cmd = "3";
        let result = initAction.doAction(cmd);
        let expectResult = "init";
        expect(result).toEqual(expectResult);
    });
});