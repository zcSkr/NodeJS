var fs = require('fs');
fs.open('./1.txt','r',function(err,fd){
    console.log(err,fd);
});