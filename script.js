const express = require('express')
const app = express()
const fs = require("fs");


// kse be route pa jna sa pehla wo use ko call kra ga or ya as a  middleware ka kr 
// rh ha 


// data jb front end sa ata ha wo readable form ma ni hota ya cheeza usko redable form ma bnati ha 
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use(function(req,res,next){
  console.log("middleware chala yaha");
  next();
})

app.get('/',function(req,res){
  res.send('hi home');
})
app.get('/profile',function(req,res){
  res.send('welcome to profile');
})

app.listen(3000)

// const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })


// file bnye ha
// fs.writeFile('hello.txt','hwllo how are you',function(err){
//     if(err) console.error(err);
//     else console.log('file is created');
// })

// already file bni ha us ka text ma kuch add kra
// fs.appendFile('hello.txt','Aly Butt',function(err){
//     if(err) console.error(err);
//     else console.log('file is created');
// })

// rename krnma file ko
// fs.rename('hello.txt','hey.txt',function(err){
//     if(err) console.error(err);
//     else console.log('file is created');
// })

// copy krna file ko
// fs.copyFile('hello.txt','./copy/copy.txt',function(err){
//     if(err) console.error(err);
//     else console.log('file is created');
// })

// remove file krna
// fs.unlink('hello.txt',function(err){
//     if(err) console.error(err);
//     else console.log('file is removed');
// })

// remove folder
// fs.rm('./copy/',{recursive:true},function(err){
//     if(err) console.error(err);
//     else console.log('file is removed');
// })

// create folder
// fs.mkdir('copy',function(err){
//     if(err) console.error(err);
//     else console.log('folder is created');
// })

// fs.writeFile('./copy/copy.txt','hi dear ',function(err){
//     if(err) console.error(err);
//     else console.log('file is  created');
// })


// fs.readFile("./copy/copy.txt", function (err, data) {
//     if (err) {
//       console.error("Error reading file:", err);
//       return;
//     }
//     console.log(data.toString()); 
//   });
