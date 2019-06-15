const { test } = require('jest')
const assert = require('assert')

const {curry} = require(".")


test(`curry() should take a function and return a currified version of it`, assert => {
    function myFunc (num1, num2, num3) {
      return num1 + num2 + num3
    }
    const myCurry = curry(myFunc)
    const actual = myCurry(1)(2)(3)
    const expected = 6
    assert.equal(actual, expected)
    assert.end()
  })