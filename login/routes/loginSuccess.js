var express = require('express');
var handleError = require('./handleError');
var mysql = require('mysql');
var assert = require('assert');
var router = express.Router();


router.post('/',function(req,res){

    var user = {
        username : req.body.username,
        password : String(req.body.password),
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
//查询数据,回调函数第二个参数是个数组
    var selectSQL = 'SELECT * FROM user';
    connect.query(selectSQL,function(error,results){
        var isSuccess = handleError('查询',error);
        if(!isSuccess) return;
        if (results.length == 0){
            res.send('登录失败');
        }else{
            if (user['username'] == results[0]['username']){
                if(user['password'] == results[0]['password']){
                    res.send('登录成功');
                }
            }else{
                res.send('登录失败');
            }
        }
    });
//关闭连接
    connect.end(function(error){
        handleError('关闭',error);
    });

});

module.exports = router;