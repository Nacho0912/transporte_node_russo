var express = require('express');
var router = express.Router();

router.get("/", function(req,res,next){
    res.render("novedades",{
        isnovedades:true
    });
})

module.exports = router;