function curry(f) {
  const makeCurry = (f, args) =>
    args.length === f.length ? f(...args) : x => makeCurry(f, [...args, x]);
  return makeCurry(f, []);
}

module.exports.curry = curry;
