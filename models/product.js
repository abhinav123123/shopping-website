const cartProductsection=require("./cart");
const fs = require('fs');
const path=require('path');
const template=require('../path/path');

const p=path.join(template,'data','shopData.json');

const getProductsfromFile=callback=>{
    fs.readFile(p,(err,fileContent)=>{
        if(err){
            callback([]);
        }
        else{
            callback(JSON.parse(fileContent)); 
        }
    })
}
module.exports=class singleProduct{
    constructor(id,title,imageURL,price,discription){
        this.id=id;
        this.title=title;
        this.imageURL=imageURL;
        this.price=price;
        this.discription=discription;
    }

    save(){
    //    const p=path.join(template,'data','shopData.json');
    //    fs.readFile(p,(err,fileContent)=>{
    //      let shopData=[];
    //      if(!err){
    //         shopData=JSON.parse(fileContent);
    //      }
    //      shopData.push(this);
    //      fs.writeFile(p,(JSON.stringify(shopData)),(err)=>{
    //         console.log(err);
    //      })
    //    })
     getProductsfromFile(shopData=>{
        if(this.id){
            const upDateProductIndex=shopData.findIndex(p=>p.id===this.id);
            let updatedProduct;
            updatedProduct=[...shopData];
            updatedProduct[upDateProductIndex]=this;
            fs.writeFile(p,JSON.stringify(updatedProduct),(err)=>console.log(err));
        }
      else{
          this.id=Math.floor(Math.random()*10).toString();
          shopData.push(this);
          fs.writeFile(p,JSON.stringify(shopData),(err)=>console.log(err));
      }    
     })
    }
    
   static deleteProductbyID(id){
      getProductsfromFile(shopData=>{
        const removecartProductID=shopData.find(prods=>prods.id===id);
        const saveProductfromdelete=shopData.filter(p=>p.id!==id);
        fs.writeFile(p,JSON.stringify(saveProductfromdelete),err=>{
            if(!err){
                cartProductsection.removefromCart(id,removecartProductID.price);
            }
        }
        );
      })
    }

   static fetchAll(callback){
    // const p=path.join(template,'data','shopData.json');
    // fs.readFile(p,(err,fileContent)=>{
    //     if(err) {
    //         callback([]);
    //     }
    //     else{
    //     callback(JSON.parse(fileContent));
    //     }
    // })
    getProductsfromFile(callback);
    }

    static shopid(id,callback){
        getProductsfromFile(shopData=>{  
            const shopProductid=shopData.find(p=>p.id===id);
            callback(shopProductid);
        })
    }
}