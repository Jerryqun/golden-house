/**随机获取bool值 */

const getRandomBoolean = () => Math.random() >= 0.5;

/**获取是否是不是周末 */

const isWeekDay = (date) => [0, 6].includes(date.getDay());

/**方法用来判断当前字符串是否以另外一个给定的子字符串开头 第二个参数为从下标几开始 */
const str1 = "Saturday night plans";
console.log(str1.startsWith("Sat"));
// expected output: true
console.log(str1.startsWith("Sat", 3));
// expected output: false
