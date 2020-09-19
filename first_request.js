var request = require('request');

request.post({
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    url: 'https://api-sandbox.bill.com/api/v2/Login.json',
    form: { userName: 'zgreathouse+hackrice@hq.bill.com', password: 'Hackr1ceX2020', orgId: '00801GKDRKCVMRWKCilw', devKey: '01TOMZQDUMLFCGTVT449' },
}, function (error, response, body) {
    console.log(body);
});