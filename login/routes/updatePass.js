var express = require('express');
var handleError = require('./handleError');
var mysql = require('mysql');
var router = express.Router();

router.post('/',function(req,res){
    var user = {
        password : req.body.password,
        newPassword : req.body.newPassword,
        againPassword : req.body.againPassword
    };

    var options = {
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: ''
    };
//创建连接
    var connect = mysql.createConnection(options);
//建立连接
    connect.connect(function(error){
        handleError('连接',error);
    });
//使用数据库
    var useDBSQL = 'use user';
    connect.query(useDBSQL,function(error){
        handleError('使用数据库',error);
    });
//修改数据
    if(user['newPassword'] == user['againPassword']){
        var updateSQL = 'UPDATE user SET password=' + user['newPassword'] + ' WHERE password=' + user['password'];
        connect.query(updateSQL,function(error){
            var isSuccess = handleError('查询',error);
            if(!isSuccess) return;
            res.send('修改成功');
        });
    }else{
        res.send('修改失败');
    }

//关闭连接
    connect.end(function(error){
        handleError('关闭',error);
    });

});

module.exports = router;