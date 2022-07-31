/**
 * 递归 如果遇到循环引用会出现死循环
 * @param target 
 * @param result 
 * @returns 
 */

function deepClone(target, result = {}) {
    if(Object.prototype.toString.call(target)!== '[object Object]') {
        return null
    }
    Object.keys(target).map(key => {
        result[key] = target[key]
        if (!Object.keys(target[key]).length) {
            deepClone(result[key], result[key])
        }
    })
    return result
}