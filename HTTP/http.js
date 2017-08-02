var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');


var server = http.createServer(function(request,response){
    //解析request.url
    var urlObj = url.parse(request.url);
    // console.log(urlObj);
    var pathName = urlObj.pathname;
    //判断路径是否正确
    if(pathName === '/image/img.jpg'){
        //拼接绝对路径
        var finalPath = path.join(__dirname,pathName);
        //根据绝对路径读取文件
        fs.readFile(finalPath,'binary',function(err,data){
            if(err) return;
            //设置响应头
            response.writeHead(200, {'Content-Type': 'image/jpeg'});
            //把buffer二进制流写入到data指定的finalPath路径的文件
            response.write(data,'binary');
            //设置响应体
            response.end(data);
        });
    }else{
        response.statusCode = 404;
        response.end('404 not found');
    }
});
server.listen(3000);