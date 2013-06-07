function sortStrings(strs) {
    strs.sort(function (a,b) {
        if (typeof a !== 'string') {
            a = String(a);
        }
        if (typeof b !== 'string') {
            b = String(b);
        }
        return a.toLowerCase().localeCompare(b.toLowerCase());
    });
    return strs;
}
exports.sortStrings = sortStrings;