// Next Greater Element 

//Problem Statement
//Given an array arr{} of size N having distinct elements, the task is to find the nextgreater element for each element of the array in order of their appearance in the array.
//Next greater element of an element in the array is the nearest element on the rightwhich is greater than the current element. 
//If there does not exist next greater of currentelement, then next greater element for current element is -1. For example, next greaterof the last element is always -1.
//Example 1:Input:N = 4, arr[] = [1 3 2 4] 
//Output:3 4 4 -1 
//Explanation:In the array, the next larger element to 1 is 3 , 3 is 4 , 2 is 4 and for 4 ? since it doesn't exist, it is -1.
//Example 2:Input:N = 5, arr[] [6 8 0 1 3] 
//Output:8 -1 1 3 -1
//Explanation:In the array, the next larger element to 6 is 8, for 8 there is no larger elements hence it is -1, for 0 it is 1 ,for 1 it is 3 and then for 3 there is no larger element on right and hence -1.

//Expected Time Complexity : O(N) Expected Auxilliary Space : O(N)Constraints: 1 ≤ N ≤ 106 1 ≤ Ai ≤ 1018

function nextGreaterArray(arr) {
    debugger
    if (!arr || arr.length <= 1)
        return arr;
    var indexArr = [];
    var resultArr = [];
    var popIndex;
    for (var i = 0; i < arr.length; i++) {
        if (indexArr.length === 0)
            indexArr.push(i);
        else {
            if (arr[indexArr.length - 1] >= arr[i]) {
                indexArr.push(i);
            }
            else {
                popIndex = indexArr.pop();
                arr[popIndex] = arr[i];
                i--;
            }
        }
    }
    for (var j = 0; j < indexArr.length; j++) {
        arr[indexArr[j]] = -1
    }
    console.log(indexArr);
    return arr;
}


// indexArr.pop();

var test_1 = nextGreaterArray([13, 7, 6, 12, 10]);
console.log(test_1);  // [ -1 , 12, 12, -1, -1];

var test_2 = nextGreaterArray([1, 2, 3, 4]);
console.log(test_2);  // [ 2, 3, 4, -1 ]

var test_3 = nextGreaterArray([1, 3, 2, 4]);
console.log(test_3);  // [ 3, 4, 4, -1 ]