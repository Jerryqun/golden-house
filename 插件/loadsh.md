https://lodash.com/docs/4.17.15

一、_.chunk(array, [size=1])
创建一个元素数组，该数组被分成大小长度的组。如果数组不能被平均分割，最后的块将是剩余的元素。

_.chunk(['a', 'b', 'c', 'd'], 2);
// => [['a', 'b'], ['c', 'd']]
 
_.chunk(['a', 'b', 'c', 'd'], 3);
// => [['a', 'b', 'c'], ['d']]


二、_.groupBy(collection, [iteratee=_.identity])
_.groupBy([{name:'cq',age:18},{name:'cq',age:19},{name:'cq',age:20},{name:'lzy',age:18}], 'name');
// => {
    cq: [{name: "cq", age: 18}, {name: "cq", age: 19}, {name: "cq", age: 20}]
    lzy:[ {name: "lzy", age: 18}]
}

