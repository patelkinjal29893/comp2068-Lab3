/**
 * Created by KINJAL on 1/27/2017.
 */

//dependencies of connect application
let http=require("http");
let url = require("url");
let accounting = require("accounting");

http.createServer(function (req,res) {
   let input = url.parse(req.url,true).query;
   let x = parseFloat(input.x);
   let y = parseFloat(input.y);
   let method = input.method;

   //Switch function for Different math Operation
    switch(method) {
        case "add":
            res.end("Answer is: " + x + " + " + y + " = " +(x+y));
            break;
        case "subtract":
            res.end("Answer is: " + x + " - " + y + " = " +(x-y));
            break;
        case "multiply":
            res.end("Answer is: " + x + " * " + y + " = " +(x*y));
            break;
        case "divide":
            res.end("Answer is: " + x + " / " + y + " = " +(x/y));
            break;
        default:
            res.end("May you pass incorrect value");
    }
}).listen(3000);

console.log("Lab3- Node calculator Server running in Port 3000");