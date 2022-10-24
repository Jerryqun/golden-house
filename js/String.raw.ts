/**
 * String.raw 是用来获取一个模板字符串的原始字符串的，比如说，占位符（例如 ${foo}）会被处理为它所代表的其他字符串，而转义字符（例如 \n）不会。
 * 在正则中很实用
 */

const mobilePhoneReg = /^1[345789]\d{9}$/;

mobilePhoneReg.test(13546565643); // true

const reg = new RegExp("^1[345789]\d{9}$");
reg.test(13546565643); //false

const regObj = new RegExp(String.raw(`1[345789]\d{9}$`));
regObj.test(13546565643); // true
