/**
 * in 会遍历原型对象上的属性
 * hasOwnProperty 不会遍历原型对象上的属性
 */

const person = { age: 18 };
person.hasOwnProperty("age"); // true
"age" in person; // true

"toString" in a; //  true
person.hasOwnProperty("toString"); // false
