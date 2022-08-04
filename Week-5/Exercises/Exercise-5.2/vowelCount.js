
//Implementation 1
// KEY as vowel and VALUE as vowel's Occurance
function vowelCount(str) {
    var myMap = new Map();
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let i = 0; i < str.length; i++) {
        var currentChar = str[i].toLowerCase();
        if (vowels.includes(currentChar)) {
            if (myMap.has(currentChar))
                myMap.set(currentChar, myMap.get(currentChar) + 1);
            else
                myMap.set(currentChar, 1);
        }
    }
    return myMap;
}

var result = vowelCount("education");



//Implementation 2
// KEY as number and VALUE as count of vowels 

function vowelCount(str) {
    var myMap = new Map();
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var count = 0;
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i].toLowerCase())) count++;
    }
    myMap.set(1, count);
    return myMap;
}

var result = vowelCount("education");


