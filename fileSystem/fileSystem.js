var fs = require('fs');
//1.打开文件
//参数1 路径
//参数2 选项
/*
 'r' - 以读取模式打开文件。如果文件不存在则发生异常。
 'r+' - 以读写模式打开文件。如果文件不存在则发生异常。
 'rs+' - 以同步读写模式打开文件。命令操作系统绕过本地文件系统缓存
 'w' - 以写入模式打开文件。文件会被创建（如果文件不存在）或截断（如果文件存在）。
 'wx' - 类似 'w'，但如果 path 存在，则失败。
 'w+' - 以读写模式打开文件。文件会被创建（如果文件不存在）或截断（如果文件存在）。
 'wx+' - 类似 'w+'，但如果 path 存在，则失败。
 'a' - 以追加模式打开文件。如果文件不存在，则会被创建。
 'ax' - 类似于 'a'，但如果 path 存在，则失败。
 'a+' - 以读取和追加模式打开文件。如果文件不存在，则会被创建。
 'ax+' - 类似于 'a+'，但如果 path 存在，则失败。
 * */
//参数3 回调 两个参数文件描述符fd ，和一个异常err
fs.open('./1.txt','r',function(err,fd){
    if(err) return console.error(err);
    // console.log(err,fd);
    console.log('打开成功');
});


// 2.修改文件时间戳
// 参数2:atime  访问时间 ，表示文件最后被访问的时间和日期。 距离1970年1月1日00:00的时间的秒数
// 每一次应用程序或服务使用系统调用，读取一个文件时，文件的访问时间都会更新。
// 参数3:mtime  修改时间 ，表示文件被修改的时间和日期。距离1970年1月1日00:00的时间的秒数
// 文件的内容发生改变时，文件的修改日期将随之更新
// 参数4: 回调函数 只有一个异常参数
fs.utimes('./1.txt', 60, 120, function (err) {
    if (err) return console.log(err);
    console.log('修改时间戳成功');
});
//获取文件信息
fs.stat('./1.txt',function(err,states){
    console.log(states);
});


// 3.监视文件的变化
//参数1 路径
//参数2 选项 可省略
// options 对象可能包含一个名为 persistent 的布尔值，表明当文件正在被监视时，进程是否应该继续运行。
// options 对象可以指定一个 interval 属性，表示目标应该每隔多少毫秒被轮询。
// 默认值为 { persistent: true, interval: 5007 }。
//参数3 回调 函数有两个参数current文件现有对象,previous文件之前对象
fs.watchFile('./1.txt', listener);
function listener(curr,prev){
    console.log('the current mtime is: ' + curr.mtime);
    console.log('the previous mtime was: ' + prev.mtime);
}
//4.停止监视文件的变化
//参数2  不指定则所有的监听器都会被移除
fs.unwatchFile('./1.txt', listener);



// 5.创建硬链接(新的文件链接已存在的文件,文件内容也和已存在文件一致)
// 参数1: 已存在的文件路径
// 参数2: 新的文件路径
// 参数3: 回调函数 只有一个异常参数
fs.link('./1.txt', './2.txt', function(err){
    if (err) return console.log(err);
    console.log("链接成功");
});







