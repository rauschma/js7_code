exports.create = function (text, opts) {
    opts = opts || {};
    var uppercase = opts.uppercase || false;
    var prefix = opts.prefix || '';

    if (uppercase) {
        text = text.toUpperCase();
    }
    return prefix + text;
}