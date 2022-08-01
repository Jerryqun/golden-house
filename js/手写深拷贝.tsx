/**
 * @param target 
 * @param result 
 * @returns 
 */

function deepClone(target, map = new WeakMap(), result = {}) {
    // 克隆原始类型 直接返回
    if (Object.prototype.toString.call(target) !== '[object Object]') {
        return target
    }
    // 防止循环引用
    if (map.get(target)) {
        return target
    }
    map.set(target, result)
    Object.keys(target).map(key => {
        result[key] = target[key]
        if (!Object.keys(target[key]).length) {
            deepClone(result[key], map, result[key])
        }
    })
    return result
}