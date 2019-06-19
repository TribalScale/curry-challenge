// const { test } = require('jest')
const assert = require("assert");

const { curry } = require(".");

test(`curry() should take a function and return a currified version of it`, () => {
  function myFunc(num1, num2, num3) {
    return num1 + num2 + num3;
  }
  const myCurry = curry(myFunc);
  const actual = myCurry(1)(2)(3);
  const expected = 6;

  assert.equal(actual, expected);
});

test(`curry() should take a function and return a currified version of it`, () => {
  function myFunc(num1, num2) {
    return num1 + num2;
  }
  const curryAdd = curry(myFunc);
  const actual = curryAdd(1)(2);
  const expected = 3;
  assert.equal(actual, expected);
});

test(`curry() should take a function of arity 1 and return it`, () => {
  function myFunc(num1) {
    return num1;
  }
  const myCurry = curry(myFunc);
  const actual = myCurry(1);
  const expected = 1;
  assert.equal(actual, expected);
});
