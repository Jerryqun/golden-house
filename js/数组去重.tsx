/**
 * 数组去重
 */

const unique = (arr) => {
  const container = {};
  return arr.filter((d) =>
    container.hasOwnProperty(d) ? false : (container[d] = true)
  );
};

const unique = (arr) => {
  return arr.filter((d) => (arr.includes(d) ? false : true));
};

const unique = (arr) => [...new Set(arr)];
