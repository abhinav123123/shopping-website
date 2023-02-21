const Productclass=require('../models/product');
const Productcart=require('../models/cart');
//shop
exports.shopData=(req,res,next)=>{
    //  res.sendFile(path.join(template,'views','shop.html'));
    Productclass.fetchAll((shopData)=>{
        res.render('shop/shop',{PageTitle:'Shop',
        prods:shopData,
        path:'/',
    })
    }); 
}
//details
exports.shopDetails=(req,res,next)=>{
  const productShopID=req.params.productID;
  Productclass.shopid(productShopID,returnID=>{
    res.render('shop/product-detail',{prods:returnID,
    PageTitle:'product-detail',
  path:'/product-detail'})
  });
}
//shop/products
exports.shopIndex=(req,res,next)=>{
  Productclass.fetchAll((shopData)=>{
    res.render('shop/index',{PageTitle:'Index',
    prods:shopData,
    path:'/Index',
})
}); 
}
//shopCart
exports.shopCart=(req,res,next)=>{
  Productcart.showCart(showtocart=>{
    Productclass.fetchAll(showcartdata=>{
      const cartproduct=[];  
      for(data of showcartdata){
        const product=showtocart.products.find(prods=>prods.id===data.id);
        if(product){
         cartproduct.push({productdata:data,qty:product.qty})
        }
      }
      res.render('shop/cart',
      {PageTitle:'Cart',
       path:'/Cart',
      cartdata:cartproduct})
    })
  })    
}
//shopcartpost
exports.postshopCart=(req,res,next)=>{
const id=req.body.productID;
Productclass.shopid(id,shopData=>{
  Productcart.addcart(id,shopData.price);  
})
res.redirect('/Cart');
}
//shopcartdelete
exports.shopcartDelete=(req,res,next)=>{
  const proID=req.body.productID;
  console.log(proID);
  Productclass.shopid(proID,deleteData=>{
    Productcart.removefromCart(proID,deleteData.price);
    res.redirect('/Cart');
  })
}
//checkout
exports.shopCheckout=(req,res,next)=>{
res.render('shop/check-out',{
  PageTitle:'Check-out',
  path:'/Check-out'
})
}

//order
exports.shopOrder=(req,res,next)=>{
res.render('shop/order',{
  PageTitle:'Order',
  path:'/Order'
})
}
