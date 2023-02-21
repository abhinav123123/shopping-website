const express=require('express');
const app=express();
const path=require('path');
const template=require('./path/path');
const bodyParser=require('body-parser');
const {adminRouter}=require("./router/admin");
const { shopRouter }=require("./router/shop");
const {error404}=require('./controller/error');

// set templating engine
app.set('view engine','ejs');
app.set('views','views');
app.use(express.urlencoded({extended:true}));//also express.urlencoded work
app.use(express.static(path.join(template,'public')));
app.use('/admin',adminRouter);
app.use(shopRouter); 

app.use(error404);
app.listen(5000);
