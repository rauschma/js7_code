var traverse = function () {
    function traverseElementWithId(id) {
        var node = document.getElementById(id);
        var result = [];
        traverse(node, 0, result);
        return result.join('\n');
    }
    function traverse(node, indent, result) {
        result.push(createIndent(indent)+node.nodeName);
        if (node.childNodes) {
            for(var i=0; i < node.childNodes.length; i++) {
                traverse(node.childNodes[i], indent+1, result);
            }
        }
    }
    function createIndent(i) {
        var result = "";
        for(; i > 0; i--) {
            result += "    ";
        }
        return result;
    }

    return {
        traverseElementWithId: traverseElementWithId
    };
}();
