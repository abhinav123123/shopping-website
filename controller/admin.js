const Productclass=require('../models/product');
//addproducts
exports.adminAddproducts=(req,res,next)=>{
    // res.sendFile(path.join(template,'views','admin.html'));
    res.render('admin/edit-product',{PageTitle:"Add Products",
    path:'admin/add-products',
    editing:false});
 }
 //adminproducts
exports.adminProduct_list=(req,res,next)=>{
Productclass.fetchAll((shopData)=>{
    res.render('admin/admin-product-list',{PageTitle:'AdminProductList',
    prods:shopData,
    path:'admin/products-list',
})
});   
}
//editproducts
exports.adminEditproducts=(req,res,next)=>{
    const queryParams=req.query.edit;
    if(!queryParams){
        return res.redirect('/');  
    }
    const Editid=req.params.ProductID;
    Productclass.shopid(Editid,(shopData)=>{
        if(!shopData){
            return res.redirect('/');
        }
        res.render('admin/edit-product',{PageTitle:"EditProducts",
        path:'/admin/add-products',
        editing:queryParams,
        shopData:shopData
    })
    })
 }
//post
exports.adminPostproducts=(req,res,next)=>{
    const title=req.body.title;
    const imageURL=req.body.imageURL;
    const price=req.body.price;
    const discription=req.body.discription;
   const product1=new Productclass(null,
    title,
    imageURL,
    price,
    discription
    );
   product1.save();
    res.redirect('/admin/products-list');
}
//postEditProducts
exports.adminposteditProducts=(req,res,next)=>{
    const editPID=req.body.productID;
    const title=req.body.title;
    const imageURL=req.body.imageURL;
    const price=req.body.price;
    const discription=req.body.discription;
    const editproduct=new Productclass(editPID,
        title,
        imageURL,
        price,
        discription
        );
    editproduct.save();
    res.redirect('/admin/products-list');
}

//deleteproducts
exports.adminDeleteproducts=(req,res,next)=>{
    const Deleteid=req.body.deleteID;
    console.log(Deleteid); 
    Productclass.deleteProductbyID(Deleteid);
    res.redirect('/admin/products-list');
}