const express=require('express');
const path=require('path');
const template=require('../path/path');
const adminRouter=express.Router();

adminRouter.get('/add-products',(req,res,next)=>{
    res.sendFile(path.join(template,'views','admin.html'));
    console.log('abhinav');
 });
adminRouter.post('/product',(req,res,next)=>{
  console.log('solved');
  res.redirect('/');
 })
 module.exports={adminRouter}
