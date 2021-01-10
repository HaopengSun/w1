// use node built-in assertion function
// const assert = require('assert');
const assert = require('chai').assert;
// const app = require('../app');
const sayHello = require('../app').sayHello;
const addNumbers = require('../app').addNumbers;

describe('App', function(){
  it('app should return hello', function(){
    const result = sayHello();
    assert.equal(result, 'hello');
  });
  it('app should return type string', function(){
    const result = sayHello();
    assert.typeOf(result, 'string');
  }); 
  it('app should be above 5', function(){
    let result = addNumbers(5, 5);
    assert.isAbove(result, 5);
  })
})
// 'npm run test' or 'npm run test -s'