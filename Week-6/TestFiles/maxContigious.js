

//O(n^2)
function maxSumContingious(arr) {
    debugger
    var maxSum = 0;
    for (var a = 0; a < arr.length; a++) {
        var i = a;
        var sum = 0; var val = 0;
        while (i <= arr.length - 1) {
            sum += arr[i];
            if (sum > val) val = sum;
            else val = arr[i];
            if (sum > maxSum) maxSum = sum;
            i++;
        }
    }
    return maxSum;
}

