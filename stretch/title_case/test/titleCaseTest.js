const titleCase = require('../titleCase');
const expect = require('chai').expect;

describe('#titleCase()', function(){
  context('first example', function() {
    it('titleCase("this is an example") should return "This Is An Example"', function() {
      const result = titleCase("this is an example");
      expect(result).to.equal("This Is An Example");
    });
  });
  context('signle word', function() {
    it('titleCase("test") should return "Test"', function() {
      const result = titleCase("test");
      expect(result).to.equal("Test");
    });
  });
  context('lower case words', function() {
    it('titleCase("i r coll") should return "I R Cool"', function() {
      const result = titleCase("i r cool");
      expect(result).to.equal("I R Cool");
    });
  });
  context('upper case words', function() {
    it('titleCase("WHAT HAPPENS HERE") should return "What Happens Here"', function() {
      const result = titleCase("WHAT HAPPENS HERE");
      expect(result).to.equal("What Happens Here");
    });
  });
  context('empty', function() {
    it('titleCase("") should return ""', function() {
      const result = titleCase("");
      expect(result).to.be.empty;
    });
  });
  context('capital single letter', function() {
    it('titleCase("A") should return "A"', function() {
      const result = titleCase("A");
      expect(result).to.equal("A");
    });
  });
});
