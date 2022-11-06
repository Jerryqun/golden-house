/**
 * forEach
 * 没有返回值
 * 不能改变item本身
 * 如果是引用类型 可以改变其属性
 * 原因：
 * item通过引用类型，指向了原来list里面的每一项。
 */

const list = [
  { name: "a", count: 1 },
  2,
  function fn() {
    console.log(3);
  },
  Symbol(),
  "sss",
  [4, 4, 4, 4],
  new Date(),
];

list.forEach((item) => {
  item = 3;
});

console.log(list); //list没有任何变化;

list.forEach((item) => {
  item.count = 3;
});

console.log(list); // 引用类型如果有count属性则直接改变 ，没有则新加一个count属性

/**
 * for 循环 和 for in 循环
 * for in 循环数组吐出的是index  循环对象吐出的是key
 * break 会跳出循环
 * continue 会跳出当前次循环（continue后面的代码不会执行）
 */
for (let i = 0; list.length; i++) {
  list[i] = 4;
}

console.log(list); // [4,4,4,4,4,4,4]

/**
 * for of
 * 返回每一项
 * 只能循环iterable 类型  objec不能循环
 * 改变item 与 forEach 一致
 */

for (let item of list) {
}

/**
 * for in 和 for of
 * 两者区别：
    1.for-in只是获取数组的索引或者对象的key；而for-of会获取数组的值
    2.for-in会遍历对象的整个原型链，性能差；而for-of只遍历当前对象，不会遍历原型链
    3.对于数组的遍历，for-in会返回数组中所有可枚举的属性(包括原型链上可枚举的属性)；for-of只返回数组的下标对应的属性值
    4.for-of适用遍历数组／字符串/map/set等有迭代器对象的集合，但是不能遍历普通对象（obj is not iterable）
 * 
 */
