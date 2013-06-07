var search = function () {

    function getElementsWithTagAndClass(tagName, className) {
        return document.querySelectorAll(tagName+'.'+className);
    }

    function getListItemsInside(id) {
        return document.getElementById(id).getElementsByTagName('li');
    }

    return {
        getElementsWithTagAndClass: getElementsWithTagAndClass,
        getListItemsInside: getListItemsInside
    };
}();