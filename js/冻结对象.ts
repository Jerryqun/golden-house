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

var freezeObj = object.freeze(obj);
freezeObj.a = 2; //无法修改
freezeObj.c.d = 4; //可以修改
Object.isFrozen(freezeObj); //true
