function StrMap() {
    this._data = {};
}
function escapeKey(key) {
    if (key.indexOf('__proto__') === 0) {
        return key + '$';
    } else {
        return key;
    }
}
StrMap.prototype.get = function (key) {
    key = escapeKey(key);
    if (Object.prototype.hasOwnProperty.call(this._data, key)) {
        return this._data[key];
    } else {
        return undefined;
    }
};
StrMap.prototype.put = function (key, value) {
    key = escapeKey(key);
    this._data[key] = value;
};
StrMap.prototype.hasKey = function (key) {
    key = escapeKey(key);
    return Object.prototype.hasOwnProperty.call(this._data, key);
};
module.exports = StrMap;