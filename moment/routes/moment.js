var express = require('express');
var router = express.Router();

router.get('/',function(req,res){
    //response渲染页面,views/page
    res.render('moment',{moment:'片刻'});
});

module.exports = router;