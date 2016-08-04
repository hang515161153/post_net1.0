'use strict';
//const barcode = require("../barcode/barcodeToPostcode");
const req = require("superagent");
class BarcodeAction {
    constructor() {
        this.name = 'barcode';
        this.help = `please input your barcode(input q exit there):`
    }
    doAction(code, outputAndExit) {
        if (code === 'q') {
            return 'init';
        }
        else {
            req.get("localhost:3000/barcode")
                .query({code: code})
                .end(function (err, response) {
                    if (response.status === 200) {
                        let postcode = JSON.parse(response.text);
                        if (postcode.success === false) {
                            outputAndExit("***This barcode not right! Please try again!***");
                        } else {
                            outputAndExit("This is your postcode:" + postcode.value);
                        }
                    }

                });

            return 'barcode';
        }

    }
}
module.exports = BarcodeAction;
