 const express=require("express");
 const {shopData, shopIndex, shopCart, shopCheckout, shopOrder, shopDetails, postshopCart, shopcartDelete}=require('../controller/shop')
 const shopRouter=express.Router();
 
 shopRouter.get('/',shopData);
 shopRouter.get('/Index',shopIndex);
 shopRouter.get('/product-detail/:productID',shopDetails);
 shopRouter.get('/Cart',shopCart);
 shopRouter.post('/Cart',postshopCart);
 shopRouter.get('/Check-out',shopCheckout);
 shopRouter.get('/Order',shopOrder);
 shopRouter.post('/cart-delete-item',shopcartDelete);
 
  module.exports={shopRouter}