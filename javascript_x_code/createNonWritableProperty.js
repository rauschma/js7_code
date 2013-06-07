module.exports = function () {
    var obj = {};
    obj.foo = 123;
    Object.defineProperty(obj, 'bar', {
        value: 'abc',
        writable: false,  // eigentlich nicht nötig
        enumerable: true
    });
    return obj;
}
