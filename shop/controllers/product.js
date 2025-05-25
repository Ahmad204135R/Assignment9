const getProduct= (req,res)=>{
    res.render('products/addproduct.ejs',{title:"Add Product"});
   };
const postProduct= (req,res)=>{
    res.render('products/viewproduct.ejs',
        {   title:"View Product", 
            n:req.body.name,
            p: req.body.price,
            t: req.body.type
        });
   };
exports.getProduct=getProduct;
exports.postProduct=postProduct;
