// //Creating web server using HTTP Module as Node.js


// var http = require('http');

// http.createServer(function(req,res){

//     res.writeHead(200,{'Content-Type': 'text/html'});
//     res.write("Hell from server");
//     res.end();

// }).listen(3000);


//Creating web server using HTTP Module as Node.js

// var http = require('http');
// var fs = require('fs');
var aes256 = require('aes256');
 
var key = 'my passphrase';
var plaintext = 'Eid Mubarak';
 
var encrypted = aes256.encrypt(key, plaintext);
//console.log(encrypted)
var decrypted = aes256.decrypt(key, encrypted);
//console.log(decrypted)

const fs = require('fs');
fs.writeFile("C:\Users\Shazzad\Desktop\Node\enc.txt", encrypted, function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
}); 


var express = require("express");
var app = express();
app.use(express.urlencoded({ extended: true }))
var bodyParser = require("body-parser");
app.use(bodyParser.json());

app.post("/data", function(req,res,next) {
    p = req.body.name;
    var decrypted = aes256.decrypt(key, p);
    console.log(p);
    res.send({  name: 'Shazzad',
                job: 'programmer',
                age: 24,
                method : 'post',
                data: decrypted})
});
app.listen(3000,function(){
    console.log("this app has started on port: 3000");
});



