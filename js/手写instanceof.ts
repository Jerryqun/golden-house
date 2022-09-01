/**
 * a instanceof Object
 * instanceof 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上。
 */


// 判断a的prototype是否在c的原型链上。
class a {}
const c = new a()
c instanceof a  // true

/**
 * 手写instanceof
 */

function myinstanceof (target, constructor) {
  if(!target.__proto__) return false
  if(constructor.prototype === target.__proto__) {
    return true
  } else {
    return myinstanceof(target.__proto__, constructor)
  }
}