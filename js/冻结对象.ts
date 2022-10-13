/**
 * Object.freeze()
 * 只能冻结一层，对于嵌套类型无法冻结
 */

var obj = {
  a: 1,
  b: 2,
  c: {
    d: 3,
  },
};

var freezeObj = Object.freeze(obj);
freezeObj.a = 2; //无法修改
freezeObj.c.d = 4; //可以修改
Object.isFrozen(freezeObj); //true

/**
 * Object.seal
 * 冻结的对象属性可以被修改但是不能被删除
 */

var obj = {
  name: "cxy",
  age: "18",
};
const iceObj = Object.seal(obj);
iceObj.name = "juejin";
delete iceObj.age;

/**
 * Object.preventExtensions
 * Object.preventExtensions是冻结对象增加属性的能力
 */

var obj = {
  name: "cxy",
  age: "18",
};
const iceObj = Object.preventExtensions(obj);
iceObj.weight = "180";
console.log(iceObj);
