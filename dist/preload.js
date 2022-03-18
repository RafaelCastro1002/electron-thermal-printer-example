"use strict";
exports.__esModule = true;
var index_1 = require("./index");
function printData() {
    var data = [
        {
            type: "text",
            value: "This is a sample print job",
            style: "\n            font-size: 16px; \n            color: #3CAF50;\n        "
        },
        {
            type: "barCode",
            value: "HB4587896",
            height: 12,
            width: 1,
            displayValue: true,
            fontsize: 8
        },
        {
            type: "qrCode",
            value: "https://github.com/Hubertformin/electron-pos-printer",
            height: 55,
            width: 55,
            style: "margin: 10 20px 20 20px"
        },
    ];
    index_1.ipcRenderer.send("print", JSON.stringify(data));
}
global.printData = printData;
//# sourceMappingURL=preload.js.map