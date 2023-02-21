const express=require('express');
const {adminAddproducts,adminPostproducts,adminProduct_list, adminEditproducts, adminposteditProducts, adminDeleteproducts}=require('../controller/admin');
const adminRouter=express.Router();

adminRouter.get('/add-products',adminAddproducts);
adminRouter.get('/edit-products/:ProductID',adminEditproducts);
adminRouter.post('/edit-products',adminposteditProducts);
adminRouter.post('/product',adminPostproducts);
adminRouter.post('/delete-product',adminDeleteproducts);
adminRouter.get('/products-list',adminProduct_list);
module.exports={adminRouter}   