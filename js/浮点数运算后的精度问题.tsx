
/**
 * 加法 =====================
0.1 + 0.2 = 0.30000000000000004
0.7 + 0.1 = 0.7999999999999999
0.2 + 0.4 = 0.6000000000000001
 */

/**
 * 减法 =====================
1.5 - 1.2 = 0.30000000000000004
0.3 - 0.2 = 0.09999999999999998
 */

/**
 * 乘法 =====================
19.9 * 100 = 1989.9999999999998
0.8 * 3 = 2.4000000000000004
35.41 * 100 = 3540.9999999999995
 */

/**
 * 除法 =====================
0.3 / 0.1 = 2.9999999999999996
0.69 / 10 = 0.06899999999999999
 */

/**
 * 浮点型问题原理 https://juejin.cn/post/6844903572979597319
 * 使用bignumber.js解决 （mathjs相对要大）
 * https://www.npmjs.com/package/bignumber.js
 */


// 加法解决(plus)
import BigNumber from 'bignumber.js';
const x = new BigNumber(0.1);
const y = new BigNumber(0.2);
const sum = x.plus(y);
console.log('sum: ', sub.toString())

// 减法解决(minus)
import BigNumber from 'bignumber.js';
const x = new BigNumber(1.5);
const y = new BigNumber(1.2);
const reduce = x.minus(y);
console.log('reduce: ', reduce.toString())

// 乘法解决(multipliedBy)
import BigNumber from 'bignumber.js';
const x = new BigNumber(19.9);
const y = new BigNumber(100);
const multipliedBy = x.multipliedBy(y);
console.log('multipliedBy: ', multipliedBy.toString()); // 1990


// 除法解决(dividedBy)
import BigNumber from 'bignumber.js';
const x = new BigNumber(0.3);
const y = new BigNumber(0.1);
const dividedBy = x.dividedBy(y);
console.log('mod: ', dividedBy.toString());  // 3

