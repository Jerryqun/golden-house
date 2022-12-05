/**
 *1、运用 setTimeout 的第三个参数。 第三个参数会作为会掉函数的入参。
 */

for (var i = 0; i < 5; i++) {
  setTimeout(
    (j) => {
      console.log(j);
    },
    1000,
    i
  );
}

/**
 * 2、运用闭包
 */

const fu = (i) => {
  let j = i;
  return () => {
    console.log("j", j);
  };
};
for (var i = 0; i < 5; i++) {
  fu(i)();
}

// 打印
0;
1;
2;
3;
4;

for (var i = 0; i < 5; i++) {
  (function (j) {
    setTimeout(function () {
      console.log(j);
    }, j * 1000);
  })(i);
}

// 打印
0;
1;
2;
3;
4;
