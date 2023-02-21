//error
exports.error404=(req,res)=>{
    // res.status(404).sendFile(path.join(template,'views','404.html'));
    res.status(404).render('404',{PageTitle:'Page Not Found',path: '/404'});
}