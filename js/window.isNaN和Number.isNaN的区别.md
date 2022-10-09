Number.isNaN判断传入值是否为NaN 内部不会做任何转换

Number.isNaN(Number('avc'))  // true 
Number.isNaN('avc')  // false 

window.isNaN 判断传入值是否是数字 内部会进行Number转换  转换不是NaN会返回false  转换是NaN返回true
window.isNaN('abc') // true
window.isNaN(1) // false
window.isNaN('1212')  // false

