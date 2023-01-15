const express=require('express');
const app=express();
const path=require('path');
const template=require('./path/path');
const bodyParser=require("body-parser");
const {adminRouter}=require("./router/admin");
const { shopRouter }=require("./router/shop");
app.use(bodyParser.urlencoded({extended:false}));

app.use('/admin',adminRouter);
app.use(shopRouter); 

app.use((req,res)=>{
  res.status(404).sendFile(path.join(template,'views','404.html'));
})
app.listen(5000);