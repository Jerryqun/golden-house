/**
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
有效字符串需满足：
左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
每个右括号都有一个对应的相同类型的左括号。
 */

// 思路 遇到左括号就往栈里面增加一个元素，遇到右括号就和栈顶元素进行比对，如果匹配就将栈弹出栈顶元素，但是如果不匹配就直接return false
function isValid(s) {
  let stack = [];
  const left = Array.from("([{");
  const right = Array.from(")]}");
  for (let i = 0; i < s.length; i++) {
    if (left.includes(s[i])) {
      stack.push(s[i]);
    } else if (right.includes(s[i])) {
      if (["{}", "[]", "()"].includes(`${stack[stack.length - 1]}${s[i]}`)) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length == 0;
}
