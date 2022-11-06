for (var i = 0; i < 5; i++) {
  (function (j) {
    setTimeout(function () {
      console.log(j);
    }, j * 1000);
  })(i);
}

// 打印
0
1
2
3
4

1、运用 setTimeout 的第三个参数。由于每次传入的参数是从 for 循环里面取到的值，所以会依次输出 0~4。

2、运用闭包

const fu = (i) => {
    let j = i;
    return () => {
       console.log('j', j)
    }
  
}
for (var i = 0; i < 5; i++) {
    fu(i)()
}

// 打印
0
1
2
3
4


