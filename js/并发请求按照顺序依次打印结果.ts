const res1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(1);
  }, 1000);
});

const res2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(2);
  }, 2000);
});

const res3 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(3);
  }, 3000);
});

async function name() {
  const result1 = await res1;
  const result2 = await res2;
  const result3 = await res3;
  console.log("result1", result1);
  console.log("result2", result2);
  console.log("result3", result3);
}
