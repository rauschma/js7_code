module.exports = function (value) {
    return typeof value === 'function' || (typeof value === 'object' && value !== null);
};