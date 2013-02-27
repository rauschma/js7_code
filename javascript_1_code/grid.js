var NO_COLOR = '.';
var COLOR_X = 'X';
var COLOR_O = 'O';
var COLORS = [ COLOR_X, COLOR_O ];
var ROW_LEN = 3;
var MAX_RUN = 3;
var MIN_RUN = 2;

function invertColor(color) {
    switch(color) {
        case COLOR_X:
            return COLOR_O;
        case COLOR_O:
            return COLOR_X;
        default:
            throw new Error('Illegal color: '+color);
    }
}

var EMPYT_CELL_STR = '';
(function () {
    for(var i=ROW_LEN*ROW_LEN; i > 0; i--) {
        EMPYT_CELL_STR += NO_COLOR;
    }
}());

function create(cellStr) {
    cellStr = cellStr || EMPYT_CELL_STR;
    cellStr = cellStr.replace(/\|/g, '');
    var g = new Array(ROW_LEN * ROW_LEN);
    for(var y=0; y<ROW_LEN; y++) {
        for(var x=0; x<ROW_LEN; x++) {
            setCell(g, x, y, cellStr.charAt((y*ROW_LEN)+x));
        }
    }
    return g;
}
function getCell(g, x, y) {
    forceGrid(g);
    return g[(y*ROW_LEN)+x];
}

function setCell(g, x, y, value) {
    forceGrid(g);
    g[(y*ROW_LEN)+x] = value;
}

function print(g) {
    forceGrid(g);
    var result = '';
    for(var y=0; y<ROW_LEN; y++) {
        for(var x=0; x<ROW_LEN; x++) {
            result += getCell(g, x, y);
        }
        result += '\n';
    }
    return result;
}

function forceGrid(g) {
    if (!(Array.isArray(g) && g.length === (ROW_LEN * ROW_LEN))) {
        throw new Error('Not a grid: '+g);
    }
}

exports.ROW_LEN = ROW_LEN;
exports.MAX_RUN = MAX_RUN;
exports.MIN_RUN = MIN_RUN;

exports.COLOR_NONE = NO_COLOR;
exports.COLOR_X = COLOR_X;
exports.COLOR_O = COLOR_O;
exports.COLORS = COLORS;
exports.invertColor = invertColor;

exports.create = create;
exports.getCell = getCell;
exports.setCell = setCell;
exports.print = print;