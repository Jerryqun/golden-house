/**
 * ArrayObject.slice(start,end)   start-开始截取的下标  end-结束截取的下标(截取出来后不包含end)
 * 返回新数组 不改变原数据
 * ArrayObject.slice(Array)   删除Array中的值
 */
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1, 3);

console.log(citrus); //["Orange", "Lemon"]

var citrus = fruits.slice(["Orange"]);

console.log(citrus); //["Lemon"]

[1, 2, 3].slice(); //   [1, 2, 3]

/**
 * splice
 * 通过删除或替换现有元素或者原地添加新的元素来修改数组，并以数组形式返回被修改的内容。此方法会改变原数组。
 */

const months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb");
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, "May");
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]
