var express = require('express');
var path = require("path");
var app = express();

const fs = require('fs');
var myArg = process.argv.slice(2);

app.use(express.static(path.join(__dirname, 'public')));

app.get("/sol-nonlinear-eq/*",(req,res,next)=>{
  res.sendFile(__dirname+"/public/sol-nonlinear-eq/index.html");
//  next();
});

app.get("/myRead",(req,res,next)=>{
  res.sendFile(__dirname+"/public/myRead/index.html");
});
app.all("*",(req,res,next)=>{
  console.log("404 Page not Found");
  res.json({err:"page not found"});
});


const log = (port)=> {
  const d = new Date();
  fs.appendFile('start-log', `Date= ${d.toDateString()} , port=${port}\n`, function (err) {
    if (err) throw err;
  });
};

switch (myArg[0]){
  case '80':
    app.listen(80,log(80));
    break;
  default:
    app.listen(4000,log(4000));
}
