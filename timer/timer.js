const util = require('util');

//立即执行一次回调函数,如果被清除则不去执行回调函数
//多个setImmediate调用时 会按照创建的顺序一次执行
var timer = setImmediate(function(){
    console.log(1);
});
clearImmediate(timer);
var timer = setImmediate(function(){
    console.log(2);
});

var i = 0;
//每过一段时间(由参数2决定)执行回调函数,和js用法一样
// var timer = setInterval(function(){
//     // console.log(i++);
//     //
//     // if (i == 6){
//     //     clearInterval(timer);
//     //     console.log('setInterval结束');
//     // }
//
// }, 1000);


//倒计时结束时候执行回调函数,和js用法一样
// var timer = setTimeout(function(){
//     clearTimeout(timer);
//     console.log('setTimeout结束');
// }, 2000);



