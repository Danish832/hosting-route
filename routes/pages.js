const router = require('express').Router() ;

router.get("/",(req,res)=>{
    res.json({Home:"You are on Home page"});
})

router.get("/about",(req,res)=>{
    res.json({About:"You are on about page"});
})

router.get("/special",(req,res)=>{
    res.json({Special:"You are on Special page"});
})

router.get("/madeeha",(req,res)=>{
    res.json({Message:"Hi madeeha How are you doing?"});
})


module.exports = router ; 