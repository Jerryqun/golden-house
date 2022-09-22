/**
 * 在 JavaScript 中，创建对象的方式有两种：对象字面量和使用 new 表达式。
 * https://juejin.cn/post/6968856664560648199
 * 1、创建一个空对象
 * 2、使空对象的隐式原型指向其构造函数的显示原型
 * 3、使用call改变this指向
 * 4、如果无返回值或者返回一个非对象值，则将 obj 返回作为新对象；如果返回值是一个新对象的话那么直接直接返回该对象。
 * 对象的创建方式主要有两种，一种是new操作符后跟函数调用，另一种是字面量表示法。
目前我们现在可以理解为：所有对象都是由new操作符后跟函数调用来创建的，字面量表示法只是语法糖（即本质也是new，功能不变，使用更简洁）。
 */

function myNew(Con, ...args) {
  // 创建一个新的空对象
  let obj = {};
  // 将这个空对象的__proto__指向构造函数的原型
  // obj.__proto__ = Con.prototype;
  Object.setPrototypeOf(obj, Con.prototype);
  // 将this指向空对象
  let res = Con.apply(obj, args);
  // 对构造函数返回值做判断，然后返回对应的值
  return res instanceof Object ? res : obj;
}

/**
 * Object.create创建对象
 */
let obj = Object.create(Object.prototype);
// 等价于
let obj = {};
