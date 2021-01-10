var assert = chai.assert;

describe('Array', function() {
  it('should start empty', function() {
    var arr = [];
    assert.equal(arr.length, 0);
  });
  describe('addClass', function() {
    it('should add class to element', function() {
      var element = { className: '' };
      addClass(element, 'test-class');
      assert.equal(element.className, 'test-class');
    });
    it('should not add a class which already exists', function() {
      var element = { className: 'exists' };
      addClass(element, 'exists');
      var numClasses = element.className.split(' ').length;
      assert.equal(numClasses, 1);
    });
  });
});