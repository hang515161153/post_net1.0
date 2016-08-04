'use strict';
const barcode = require("../barcode/barcodeToPostcode");

class InitAction {
    constructor() {
        this.name = 'init';
        this.help = `***************welcome**************
       1 - postcodeToBarcode
       2 - barcodeToPostcode
       q - exit
************************************`.trim();
    }

    doAction(code,outputAndExit) {
        switch (code) {
            case '1':
                return "postcode";
                break;
            case '2':
                return "barcode";
                break;
            case 'q':
                process.exit();
                break;
            default :
                outputAndExit("input the num not exist!");
                return 'init';
        }
    }
}
module.exports = InitAction;

