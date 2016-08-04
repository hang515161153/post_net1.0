'use strict';
let req = require("superagent");
class PostcodeAction {
    constructor() {
        this.name = `postcode`;
        this.help = `please input your postcode(input q exit there):`;
    }

    doAction(code, outputAndExit) {
        if (code === 'q') {
            return 'init';
        }
        else {
            req.get("localhost:3000/postcode")
                .query({code: code})
                .end(function (err, response) {
                    if (response.status === 200) {
                        let barcode = response.text;
                        if (barcode === '') {
                            outputAndExit("***This postcode not right!***Please try again!");
                        } else {
                            outputAndExit("This is your barcode:" + '  ' + barcode);
                        }
                    }
                });
            return 'postcode';
        }
    }

}
module.exports = PostcodeAction;
