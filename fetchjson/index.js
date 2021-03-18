"use strict";
exports.__esModule = true;
var axios_1 = require("axios"); // module used for network requests
var url = 'http://jsonplaceholder.typicode.com/';
axios_1["default"].get(url).then(function (response) {
    console.log(response.data);
});
