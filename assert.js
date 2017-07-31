const assert = require('assert');
//1.
// console.assert(1 === 2,'不等于');

//2.
//测试参数1 == 参数2 是否深度相等 正确不报错 错误则AssertionError: 参数1 deepEqual 参数2
// assert.deepEqual({ a: { b: 1 } }, { a: { b: 2 } });

//3.
//测试参数1 === 参数2 是否深度全等 正确不报错 错误则AssertionError: 参数1  deepStrictEqual 参数2
// assert.deepStrictEqual({ a: 1 }, { a: '1' });

//4.
//参数1 回调函数,立即执行 抛出错误类型
//参数2 error 错误参数
//如果抛出错误且错误类型与 error 参数指定的相同，则抛出 AssertionError。
// 如果错误类型不相同，或 error 参数是 undefined，则错误会被抛回给调用者。
// 参数3 如果抛出了 AssertionError 且有给 message 参数传值，
// 则 message 的值会被附加到 AssertionError 的信息里
// assert.doesNotThrow(
//     function () {
//         throw new TypeError('错误');
//     },
//     TypeError,
//     // SyntaxError,
//     'aaa'
// );

//5.
//测试参数1 == 参数2 正确不报错,错误则抛出AssertionError信息,如果有参数3message则显示message,
//如果没有参数3 则显示 "参数1==参数2"
// assert.equal(1, 2,'aaa');

//6.7.
//抛出AssertionError信息
//如果参数3 message不存在或为undefined 则抛出 参数1 + 参数4 + 参数2的信息
//如果参数3 存在则 抛出message
//参数4 operator 默认 "!="
// assert.fail(1, 2, undefined, '>');
// assert.fail(1, 2, '错误信息', '>');
assert.fail('错误信息');

//8.
//参数1 value 如果为真则抛出value 用于测试回调函数的 error 参数。
// assert.ifError(1);
// assert.ifError('dasdas');

//9.
//测试参数1 == 参数2 是否不深度相等 错误不报错 正确则AssertionError: 参数1 nortDeepEqual 参数2
// assert.notDeepEqual({ a: { b: 1 } }, { a: { b: 2 } });

// 10.
//测试参数1 === 参数2 是否不深度全等 错误不报错 正确则AssertionError: 参数1  notDeepStrictEqual 参数2
// assert.notDeepStrictEqual({ a: 1 }, { a: 1 });


// 11.
//测试参数1 != 参数2 正确不报错, 错误抛出AssertionError信息,如果有参数3message则显示message,
//如果没有参数3 则显示 "参数1!=参数2"
// assert.notEqual(2,2,'错误');

// 12.
//测试参数1 !== 参数2 测试是否不全等(类型和值都不相等) 错误不报错,正确抛出AssertionError信息,如果有参数3message则显示message,
//如果没有参数3 则显示 "参数1!==参数2"
// assert.notStrictEqual(2, 2,'错误');

// 13.
// 测试 value 是否为真值 如果 value 不为真值，则抛出 AssertionError，其中 message 属性的值等于传入的 message 参数的值。
// 如果 message 参数为 undefined，则抛出错误信息"参数1 == true"
// assert.ok(0);


// 14.
// 测试参数1 === 参数2 测试是否全等 错误不报错,正确抛出AssertionError信息,如果有参数3message则显示message,
//如果没有参数3 则显示 "参数1===参数2"
// assert.strictEqual(1, 2);

// 15.
//参数1 回调函数,立即执行 期望抛出错误,如果不抛出错误参数3message 会作为 AssertionError 的错误信息。
//参数2 error 错误参数 error 可以是构造函数、正则表达式、或自定义的验证函数。
// assert.throws(
//     function () {
//         throw new Error('错误信息');
//     },
//     Error,
//     // /错误/,
//     // '不是期望的错误',
//     'message'
//
// );


