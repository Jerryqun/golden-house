/**
 * https://www.jianshu.com/p/db7ec7b51933
 * eval 会为字符串传递的代码求值 如果是一个表达式 会进行计算
 * 使用 new Function() 运行代码比 eval() 更为好一些：函数的参数提供了清晰的接口来运行代码，而没有必要使用较为笨拙的语法来间接的调用 eval() 确保代码只能访问自己的和全局的变量。
 */

const a = eval("{ foo: 123 }"); // 123
const b = eval("({ foo: 123 })"); // {foo:123}

const sum = eval("30*10+5");
console.log("sum", sum); // 305

// 在松散模式下运行代码会在当前的作用域中创建局部变量
function f() {
  eval("var foo = 1");
  console.log(foo); // 1
}

function f() {
  "use strict";
  eval("var foo =1");
  console.log(foo); // ReferenceError: foo is not defined
}

var f = new Function("x", "y", "return x+y");
f(3, 4); // 7
