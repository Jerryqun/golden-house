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
    for (let i = 0; i < value.length; i++) {
      Promise.resolve(value[i]).then(res => {
        count++;
        result[i] = res
        if (count === value.length) {
          re(result)
        }
      }).catch(error => rj(error))
    }
    
  })
}


let p1 = new Promise(r => r(2))

let p2 = new Promise(r => r(3))

Promise.myAll([p1,p2]).then(console.log)