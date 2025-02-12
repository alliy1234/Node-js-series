const express = require('express');
const fs=require('fs');
const app= express();
const userModel=require('./models/usermodel')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
// app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine','ejs')

app.get('/',function(req,res){
 
    fs.readdir('./files',function(req,files){
        res.render('index',{files:files})
    })
})
app.get('/file/:filename',function(req,res){

   fs.readFile(`./files/${req.params.filename}`,"utf-8",function(err,data){
    res.render('show',{filename:req.params.filename,data:data});
    
   });
})
app.get('/edit/file/:filename',function(req,res){
    res.render('edit',{filename:req.params.filename});
})

app.post('/postit',function(req,res){
    fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt`,req.body.details,function(err){
        if(err) console.error(err);
        else console.log('file is created');
        res.redirect('/')
    })
    console.log(req.body);
    
})
app.post('/update-name',function(req,res){
    fs.rename(`./files/${req.body.previous}`,`./files/${req.body.newname}`,
        function(err){
            if(err) console.error(err);
            else console.log('file is renamed');
            res.redirect('/')
        }
    )
    console.log(req.body);
    
})



// create user 
app.get('/create',async(req,res)=>{
 
    let userdata= await userModel.create({
        name:"aly",
        email:"aly@gmail.com",
        address:"Lahore"
    })

    res.send(userdata);

})
app.get('/update',async(req,res)=>{
 
    let userdata= await userModel.findOneAndUpdate({name:'aly'},{
        name:"Aly butt",
        email:"aly@gmail.com",
        address:"Islamabad"
    },
    {new:true});
    

    res.send(userdata);

})

'hello i am ali butt'
'dobara new text likha '

app.listen(3000,function(req,res){
 console.log('it is running');
})

