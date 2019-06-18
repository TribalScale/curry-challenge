function curry (func) {
    const numArgs = func.length
    const args = []
    return curried = (arg) => {
        args.push(arg)
        return (args.length === numArgs) ?  func(...args) : curried
    }
}

module.exports.curry = curry