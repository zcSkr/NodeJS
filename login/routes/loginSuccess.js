var express = require('express');
var router = express.Router();
router.get('/',function(req,res){
    res.render('loginSuccess',{title : 'loginSuccess'});
});

module.exports = router;