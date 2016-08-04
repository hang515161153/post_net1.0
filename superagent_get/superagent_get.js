const req = require("superagent");
req
    //.get("../barcode/barcodeToPostcode")
    .get("www.baidu.com")
    //.query({code:"12345"})
    .end(function (err,res) {
        if(res.status===200) {
            console.log("aaaa");
        }
        console.log(res.status);
    });
