// Node.js:
// var startsWith = require('./starts_with');
// var expect = require('./lib/expect');
describe('Test suite for startsWith()', function () {
    it('should be a function', function () {
        expect(startsWith).to.be.a('function');
    });
    it('should detect an actual prefix', function () {
        expect(startsWith('abc', 'ab')).to.be.ok();
    });
    it('should not detect an prefix that is too long', function () {
        expect(startsWith('abc', 'abcd')).to.not.be.ok();
    });
    it('should not detect an non-prefix', function () {
        expect(startsWith('abc', 'xy')).to.not.be.ok();
    });
});
