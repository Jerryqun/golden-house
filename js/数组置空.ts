const arr = [1, 3, 4, 5];
const arr1 = arr;
arr.length = 0;
console.log("arr", arr, "arr1", arr1); // arr [] arr1 []

let arr = [1, 3, 4, 5];
const arr1 = arr;
arr = [];
console.log("arr", arr, "arr1", arr1); // arr [] arr1 (4) [1, 3, 4, 5]
