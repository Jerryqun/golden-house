/**随机获取bool值 */

const getRandomBoolean = () => Math.random() >= 0.5;

/**获取是否是不是周末 */

const isWeekDay = (date) => [0, 6].includes(date.getDay());

/**方法用来判断当前字符串是否以另外一个给定的子字符串开头 第二个参数为从下标几开始 */
const str1 = "Saturday night plans";
console.log(str1.startsWith("Sat"));
// expected output: true
console.log(str1.startsWith("Sat", 3));
// expected output: false

/**手机号中间变成* */
const telFormat = (tel) => {
  const telStr = `${tel}`;
  return `${telStr.slice(0, 3)}****${telStr.slice(7)}`;
};

/**
 * 数组的赋值是引用指针拷贝
 * 依次打印
 fn1
 i am ok
 i am ok
 fn2
 */

const mypromise = new Promise((resolve) => resolve("i am ok"));

function fn1() {
  mypromise.then((res) => console.log(res));
  console.log("fn1");
}

async function fn2() {
  console.log(await mypromise);
  console.log("fn2");
}
fn1();
fn2();

let a = { a: 1 };
let b = [a];
a = null;
console.log(b); // { a: 1 }

/**
 * 引入的模块只读
 */

// counter.js
let counter = 10;
export default counter;

//index.js

import myCounter from "./counter.js";
myCounter += 1;
console.log(myCounter); // Error
