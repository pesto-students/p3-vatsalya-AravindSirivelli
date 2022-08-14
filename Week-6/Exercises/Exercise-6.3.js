//Sort array of 0's,1's and 2's Given an array of size N containing only 0s, 1s, and 2s; sort the array in ascending order
//Example 1:Input:N = 5arr[]= {0 2 1 2 0} Output:0 0 1 2 2 
//Explanation: 0's 1's and 2's are segregated into ascending order
//Example 2:Input:N = 3 arr[] = {0 1 0} Output:0 0 1 
//Explanation: 0s 1s and 2s are segregated into ascending order. Time Complexity: O(N)Expected Auxiliary Space: O(1)

//Method 1
function simpleSortArray(arr) {
    arr.sort((a, b) => (a - b));
    return arr;
}

sortArray([0, 2, 1, 2, 0]);

//Method 2
function sortArrayUsingFilters(arr) {
    var zeros = arr.filter((ele) => ele === 0);
    var ones = arr.filter((ele) => ele === 1);
    var twos = arr.filter((ele) => ele === 2);
    arr = [...zeros, ...ones, ...twos];
    return arr;
}
sortArrayUsingFilters([0, 2, 1, 2, 0]);


//Method 3
function sortArrayCustom(arr) {
    debugger
    for (var i = 0; i < arr.length - 1; i++) {
        var temp = 0;
        if (arr[i] > arr[i + 1]) {
            temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
        }
    }
    for (var j = arr.length - 1; j >= 0; j--) {
        var temp = 0;
        if (arr[j] < arr[j - 1]) {
            temp = arr[j];
            arr[j] = arr[j - 1];
            arr[j - 1] = temp;
        }
    }
    return arr;
}
sortArrayCustom([0, 2, 1, 2, 0]);