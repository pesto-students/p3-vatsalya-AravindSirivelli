//Parenthesis Checker
function isBalanced(str) {
    if (str.length % 2 !== 0)
        return false;
    const paranthesisMap = new Map();
    paranthesisMap.set("[", "]");
    paranthesisMap.set("{", "}");
    paranthesisMap.set("(", ")");
    var arr = [];
    for (var i = 0; i < str.length; i++) {
        if (paranthesisMap.has(str[i]))
            arr.push(str[i]);
        else {
            if (paranthesisMap.get(arr.pop()) != str[i])
                return false
        }
    }
    return arr.length === 0;
}


console.log(isBalanced("{)")) //false
console.log(isBalanced("{()}")) //true
console.log(isBalanced("{)}")) //false
console.log(isBalanced("{}")) //true