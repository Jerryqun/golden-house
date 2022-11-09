/**
 *  使用|| 运算符 我们可以返回第一个真值 如果所有的值都是假值  则返回最后一个值
 */

const one = false || {} || null; // {}
const two = null || false || ""; // ''
const three = [] || 0 || true; // []
