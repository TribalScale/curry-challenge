module.exports.curry = curry

function curry (fn) {
  let arity = fn.length
  let args = []
  return function curryAux (value) {
    args.push(value)
    return --arity ? curryAux : fn(...args)
  }
}
