const express=require("express");
const path=require('path');
const template=require('../path/path');
const shopRouter=express.Router();

shopRouter.get('/',(req,res,next)=>{
    res.sendFile(path.join(template,'views','shop.html'));
 });

 module.exports={shopRouter}
 