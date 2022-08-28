
function maxSumContingious(arr) {
    var maxSum = arr[0];
    var sum = maxSum;
    for (var i = 1; i < arr.length; i++) {
        sum = Math.max(arr[i] + sum, arr[i]);
        maxSum = Math.max(sum, maxSum);
    }
    return maxSum;
}

console.log(maxSumContingious([1, 2, 3, 4, -10])); //10
console.log(maxSumContingious([-1, 2, 1, -4])); //3
console.log(maxSumContingious([-2, 1, -3, 4, -1, 2, 1, -5, 4])); //6



