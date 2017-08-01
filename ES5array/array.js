// 1.forEach()
//等同于for循环
var arr = [-1,0, 1, 2, 3, 4];
//第一种: 回调函数
// 参数1:数组的值
// 参数2:数组值的下标
// 参数3:数组本身
// arr.forEach(function (t, i, arr) {
//     console.log(t, i, arr);
// });
// 第二种: 打印全部(值,下标,数组)
// arr.forEach(console.log);


// 2.map()
//处理数组中的每个元素,产生一个新的数组
//回调函数中传递的参数代表数组里的值而不是下标
//回调函数返回值 ,否则映射的新数组都是undefined
// var result = arr.map(function(item){
//     return item + "$";
// });
// console.log(result);


// 3.filter()
//过滤数组,然后产生新数组
//回调函数中传递的参数代表数组里的值而不是下标
//返回值一般是布尔值true/false, 也可以是弱==true/false的值
// var result = arr.filter(function (item) {
//     return item > 3;
// });
// console.log(result);


// 4.some()
//判断数组里是否有值满足条件,只要有一个值满足返回true,否则返回false
//回调函数中传递的参数代表数组里的值而不是下标
// var result = arr.some(function (item) {
//     return item > 2;
// });
// console.log(result);

// 5.every()
//判断数组里每一个值是否满足条件,全部满足返回true,否则返回false
//回调函数中传递的参数代表数组里的值而不是下标
// var result = arr.every(function (item) {
//     return item > 2;
// });
// console.log(result);

// 6.indexOf()
//查找一个值在数组里面的下标,查到返回下标,查不到返回-1
// 参数1:需要查找的值
// 参数2:表示查找的起始下标,默认0,可以是数值也可以是字符串数值
// var brr = [1,2,3,4,5,7,9,3,2,6,8,0];
// var result = brr.indexOf(3,2);
// var result = brr.indexOf(3,'2');
// console.log(result);


// 7.lastIndexOf()
//从后往前查找一个值在数组里面的下标,查到返回下标,查不到返回-1
// 参数1:需要查找的值
// 参数2:表示查找的起始下标,默认值为数组长度-1,可以是数值也可以是字符串数值
// var result = brr.lastIndexOf(3,8);
// var result = brr.lastIndexOf(3,'8');
// console.log(result);


// 8.reduce()
//迭代递归,类似for循环处理数组
//回调函数 有4个参数
// 参数1:迭代之前的值
// 参数2:迭代当前的值
// 参数3:数组的下标,默认0
// 参数4:数组
//reduce有参数2 initialValue可选,默认值为数组第一个值
// var result = arr.reduce(function(previous, current, index, array){
//     return previous + current;
// },1);
// console.log(result);
//过程如下
// previous = initialValue = 1, current = -1   index=0
// previous = (1 + -1) =  0, current = 0       index=1
// previous = (0 + 0) =  0, current = 1        index=2
// previous = (0 + 1) =  1, current = 2        index=3
// previous = (1 + 2) =  3, current = 3        index=4
// previous = (3 + 3) =  6, current = 4        index=5
// previous = (6 + 4) =  10, current = undefined(退出)

// var matrix = [
//     [1, 2],
//     [3, 4],
//     [5, 6]
// ];
// // 二维数组扁平化
// var flatten = matrix.reduce(function (previous, current) {
//     return previous.concat(current);
// });
// console.log(flatten); // [1, 2, 3, 4, 5, 6]


// 9.reduceRight()
//从数组的末尾开始
// var result = arr.reduce(function(previous, current, index, array){
//     return previous - current;
// },1);
// console.log(result);
//过程如下
// previous = initialValue = 1, current = 4      index=5
// previous = (1 - 4) =  -3, current = 3         index=4
// previous = (-3 - 3) =  -6, current = 2        index=3
// previous = (-6 - 2) =  -8, current = 1        index=2
// previous = (-8 - 1) =  -9, current = 0        index=1
// previous = (-9 - 0) =  -9, current = -1       index=0
// previous = (-9 - -1) =  -8, current = undefined(退出)
