var request = require('request');

request.post('https://api-sandbox.bill.com/api/v2/Login.json', {
    form: {
        userName: '', password: '', orgId: '',
        devKey: ''
    }
},
    function (error, response, body) {
        console.log(body);
    });

//     var http = require('http');
//     var fs = require('fs');
// const { Http2ServerRequest } = require('http2');

//     const PORT =8080;

//     fs.readFile('./index.html',function(err,html){
//         if (err) throw err;

//         http.createServer(function(request,response){
//             response.writeHeader(200,{"Content-Type":"text/html"});
//             response.write(html);
//             response.end();
//         }).listen(PORT);
//     });
var express = require("express"); 
var app = express(); 
var path = require("path"); 
app.get('/',function(req,res){ 
    console.log(__dirname);
  res.sendFile(path.join(__dirname + '/index.html')); 
  //__dirname : It will resolve to your project folder. 
});

app.get('/uploadInvoice',function(req,res){ 
  res.sendFile(path.join(__dirname + '/uploadInvoice.html')); 
  //__dirname : It will resolve to your project folder. 
});
app.use('/sendInvoice',express.json())
app.post('/sendInvoice',function(req,res){ 
    
    request.post('https://api-sandbox.bill.com/api/v2/List/Customer.json', {
                form: {
                    sessionId:"!bjq0RCackdhL1obuNfJcveyQ2pomuBCssEH3KFNUiphs0f2UuH02WtmAkio-jtvhS.01" , devKey: '01TOMZQDUMLFCGTVT449'
                }
            },
                function (error, response, body) {
                    console.log(body);
                });
    res.sendFile(path.join(__dirname + '/index.html')); 
    //__dirname : It will resolve to your project folder. 
  });


app.listen(3000); 
console.log("Server running at Port 3000"); 