Promise.myResolve = function (value) {
  if (value && typeof value === 'object' && (value instanceof Promise)) {
    return value
  }
  return new Promise(resolve => resolve(value))
}

Promise.myReject = function (value) {
  return new Promise((_, reject) => reject(value))
}

Promise.myAll = function (value) {
  if (!value) throw 'TypeError: undefined is not iterable (cannot read property Symbol(Symbol.iterator))'
  return new Promise((re, rj) => {
    let count = 0;
    let result = []
    for (let i = 0; i < value; i++) {
      re(value[i]).then(res => {
        count += 1
        result[i] = res
        if (count === value.length) {
          return result
        }
      }).catch(error => rj(error))
    }
  })
}
