const express=require('express');
const router=express.Router();
const path=require('path');

router.get('/',(req,res)=>{
    res.render('home-zm');
})
router.get('/register',(req,res)=>
{
    res.render("register");
}
)
router.get('/login',(req,res)=>
{
    res.render("login");
}
)
module.exports=router;
