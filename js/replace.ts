/**
 * 参考： https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace#%E8%AF%AD%E6%B3%95
 *
 * str.replace(regexp|substr, newSubStr|function)
 *
 * function:  一个用来创建新子字符串的函数，该函数的返回值将替换掉第一个参数匹配到的结果
 * function(target,index){
 *  return ...
 * }
 */

https: "a124".replace("a", function (c) {
  return 0;
}); // '0124'

/**
 * HTML标签转义（< -> &lt;）
 * @param sHtml
 * @returns
 */
function html2Escape(sHtml) {
  return sHtml.replace(/[<>&"]/g, function (c) {
    console.log("c", c);
    return { "<": "&lt;", ">": "&gt;", "&": "&amp;", '"': "&quot;" }[c];
  });
}

/**
 *  HTML标签反转义（&lt; -> <）
 * @param str
 * @returns
 */
function escape2Html(str) {
  var arrEntities = { lt: "<", gt: ">", nbsp: " ", amp: "&", quot: '"' };
  return str.replace(/&(lt|gt|nbsp|amp|quot);/gi, function (all, t) {
    return arrEntities[t];
  });
}
