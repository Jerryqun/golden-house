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

/**把多个空格替换成一个 */
const repspace = (str) => str.replace(/\s+/g, " ");

/**字符串转数组 */
"123abc".split("");
const s = [..."123abc"];
const [...chars] = "123abc";

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

/**
 * js bug
 *
 */

parseInt(0.0000006); // 6

/**
 * js 获取用户选中的文本
 */

const getSelectedText = () => window.getSelection()?.toString();

/**
 * 字符串反转
 */

const reverseStr = (str) => str.split("").reverse().join("");

/**
 * 不会改变原来的值
 * padStart(16,'0') 不足16位在前面补齐0 到16位
 * padEnd(16,'0')  不足16位在后面补齐0 到16位
 */
"1".padEnd(16, 0); //1000000000000000
"1".padStart(16, 0); //0000000000000001

/**
 * 拷贝
 * ...相当于new了一个新对象 不会对原来对象产生影响
 */
const person = { name: "cq" };
const cq = person;
cq.name = "yl";
console.log(person); //'yl'
const dd = { ...person };
dd.name = "dd";
console.log(person); // 'cq'

/**
 * 一元加号会尝试讲boolean类型转换为数字
 */

+true; //1
+false; //0
+"1"; // 1 typeof +'1'  = 'number'

/**
 * genterator 函数
 * 在遇到yield关键字时会暂停其执行
 * next方法可以携带一个参数， 该参数会被当做上一个yield表达式的返回值
 */

/**
 * 字符串代码执行
 */

const str = "console.log(520)";
const fn = Function(str);
fn(); // 520

const safeEval = (code: string) => {
  try {
    return Function(code)();
  } catch (error) {
    console.log("safeEval error info", error);
  }
};

/**
 * 给一个数组增加属性
 */

const a = [1, 3, 4, 4];
a.count = 1;
console.log(a); //[1, 3, 4, 4,count:1];

/**
 * 缩写
 */
let x = (y = 2);
// 相当于  y = 2 ;let x = y
//  y = 2相当于给window上挂了一个全局属性 y

/** 结构对象 */

const a = { name: "1112" };
const b = { ...a };
console.log("b", b); //  { name: "1112" };
a.age = 12;
console.log("b", b); //  { name: "1112" };

const c = a;
console.log(c); //  { name: "1112", age: 12 };

/**
 * 暂时性死区
 */

let name = "cq";
function getName() {
  console.log(name);
  let name = "yl";
}
getName(); // ReferenceError

/**
 * parseInt
 *  遇到不是number类型的值时会立即中断 并且返回已解析的值
 */

const num = parseInt("7*6", 10); // 7
