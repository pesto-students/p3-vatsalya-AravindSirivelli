

//Alternative Method 1
function simpleSortArray(arr) {
    arr.sort((a, b) => (a - b));
    return arr;
}

sortArray([0, 2, 1, 2, 0]);

//Alternative Method 2
function sortArrayUsingFilters(arr) {
    var zeros = arr.filter((ele) => ele === 0);
    var ones = arr.filter((ele) => ele === 1);
    var twos = arr.filter((ele) => ele === 2);
    arr = [...zeros, ...ones, ...twos];
    return arr;
}
sortArrayUsingFilters([0, 2, 1, 2, 0]);

//Method 3
// function sortArrayCustom(arr) {
//     
//     for (var i = 0; i < arr.length - 1; i++) {
//         var temp = 0;
//         if (arr[i] > arr[i + 1]) {
//             temp = arr[i];
//             arr[i] = arr[i + 1];
//             arr[i + 1] = temp;
//         }
//     }
//     for (var j = arr.length - 1; j >= 0; j--) {
//         var temp = 0;
//         if (arr[j] < arr[j - 1]) {
//             temp = arr[j];
//             arr[j] = arr[j - 1];
//             arr[j - 1] = temp;
//         }
//     }
//     return arr;
// }
// sortArrayCustom([0, 2, 1, 2, 0]);