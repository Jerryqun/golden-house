
js四舍五入（https://www.runoob.com/w3cnote/js-round-to-at-most-2-decimal.html）
var num =2.446242342;
num = Math.round((num + Number.EPSILON) * 100) / 100;  // 输出结果为 2.45

建议使用Math.round 
Math.toFixed() 在处理5时有问题