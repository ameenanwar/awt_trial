const express=require('express');
const router=express.Router();
const path=require('path');

router.get('/',(req,res)=>{
    res.render('home-zm');
})

let quotes=[];
let users=[{userid:"",password:""}];

router.get('/sign-in',(req,res)=>
{
    res.render('sign-in');
})
router.get('/sign-up',(req,res)=>
{
    res.render('sign-up');
});
router.post('/submit-quote',(req,res)=>
{
    const {quoteText,author}=req.body;
    quotes.push({
        text:quoteText,
        author:author
    })
    console.log("Raw request:", {
    method: req.method,
    url: req.url,
    headers: req.headers,
    body: req.body // Only exists after middleware processes it
  }
   
    )
     res.redirect('/quote');


    
})
router.get('/quote',(req,res)=>
{
    res.render('quote', { 
    latestQuote: quotes[quotes.length - 1], // Most recent quote
    allQuotes: quotes                      // Optional: Pass all quotes
  });
});
router.post('/new-users',(req,res)=>{
    
    const{unameemail,pwd}= req.body;
    for(let i=0;i<users.length;i++)
    {
        if(unameemail==users[i].userid)
        {
            res.send(`username/email    ${unameemail} already in user`);
            res.redirect('/sign-up');
        }
    }

    users.push({
        userid:unameemail,
        password:pwd

    })
    res.redirect('/home')
    console.log(users);

})

router.post('/user-in',(req,res)=>{
    const{uname,pwd}= req.body;
    for(let i=0;i<users.length;i++)
    {
        if(uname==users[i].userid && users[i].password==pwd)
        {
            var found=1;
            break;

        }
        else if(uname==users[i].userid ){
            if(users[i].password==pwd)
            {
                var found=1;
                
            }
            else{
                res.send(`the password for the user id ${uname} is incorrect`);
                return res.redirect('/sign-in');
            }

        }
    }
    if(found==1)
    {   console.log(`user-id: ${uname} has signed-in`);
        res.redirect('/home');
    }
    else
    {
        res.send(`the user: ${uname} has not been found or the password is incorrect`)
    }



})
module.exports=router;
