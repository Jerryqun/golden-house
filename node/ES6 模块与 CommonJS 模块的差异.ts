//es6.ruanyifeng.com/#docs/module-loader#ES6-%E6%A8%A1%E5%9D%97%E4%B8%8E-CommonJS-%E6%A8%A1%E5%9D%97%E7%9A%84%E5%B7%AE%E5%BC%82

/**
 * 1、CommonJS 导出的是值的拷贝,ES模块导出的是值的引用
 */

// CommonJS
// lib.js
https: var counter = 3;
function incCounter() {
  counter++;
}
module.exports = {
  counter: counter,
  incCounter: incCounter,
};

// main.js
var mod = require("./lib");

console.log(mod.counter); // 3
mod.incCounter();
console.log(mod.counter); // 3

// ES Module
// m1.js
export var foo = "bar";
setTimeout(() => (foo = "baz"), 500);

// m2.js
import { foo } from "./m1.js";
console.log(foo); //bar
setTimeout(() => console.log(foo), 500); //baz

// 由于 ES6 输入的模块变量，只是一个“符号连接”，所以这个变量是只读的，对它进行重新赋值会报错。
// lib.js
export let obj = {};

// main.js
import { obj } from "./lib";

obj.prop = 123; // OK
obj = {}; // TypeError

//2、CommonJS 是运行时加载，ES模块是编译时加载（ CommonJS 加载的是一个对象（即module.exports属性），该对象只有在脚本运行完才会生成，而 ES6 模块不是对象，它的对外接口只是一种静态定义，在代码静态解析阶段就会生成）
//3、CommonJS 的require是同步加载，ES模块的import是异步加载
