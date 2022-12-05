[1, 2, 3, 4].reduce((a, b) => {
  console.log(a, b);
});

// 1 2 undefined 3 undefined 4 a为上一轮的返回值  第一次默认为数组第一项
