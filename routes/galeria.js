var express = require('express');
var router = express.Router();

router.get("/", function(req,res,next){
    res.render("galeria",{
        isgaleria: true
    });
})

module.exports = router;