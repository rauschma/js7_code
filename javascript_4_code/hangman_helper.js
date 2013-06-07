function computeResult(word, usedChars) {
    var result = '';
    var haveHoles = false;
    word.split('').forEach(function (ch) {
        if (usedChars.indexOf(ch.toLocaleLowerCase()) >= 0) {
            result += ch;
        } else {
            result += '_';
            haveHoles = true;
        }
    });
    return haveHoles ? result : null;
}

exports.computeResult = computeResult;