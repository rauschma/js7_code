module.exports = function (func, message) {
    return function () {
        console.log(message);
        return func.apply(this, arguments);
    }
};
