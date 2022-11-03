// https://juejin.cn/post/7069397770766909476

Object.defineProperty(obj, prop, descriptor);

/**
 * 
 *  obj：要添加属性的对象
    prop：要定义或修改的属性的名称或 [Symbol]
    descriptor：要定义或修改的属性描述符
 */

const object1 = {};

Object.defineProperty(object1, "property1", {
  value: 42,
  writable: false,
});

object1.property1 = 77;
// throws an error in strict mode
console.log(object1.property1);
// expected output: 42
