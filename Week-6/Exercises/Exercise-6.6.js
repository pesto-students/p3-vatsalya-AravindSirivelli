//Problem 6.6 : 3 sum - Given an array S of n integers, find three integers in S such that the sum is closest to agiven number, target.
//Return the sum of the three integers.
//Assume that there will only be one solution Example: given array S = {-1 2 1 -4}, and target = 1. 
//The sum that is closest to thetarget is 2. (-1 + 2 + 1 = 2)

function closestThreeSum(arr, target) {
    arr.sort((a, b) => (a - b));
    var ans = arr[0] + arr[1] + arr[arr.length - 1];
    for (var i = 0; i < arr.length; i++) {
        var start = i + 1;
        var end = arr.length - 1;
        while (start < end) {
            var sum = arr[i] + arr[start] + arr[end];
            if (sum > target) end--;
            else start++;
            if (Math.abs(sum - target) < Math.abs(ans - target)) {
                ans = sum;
            }

        }
    }
    return ans;
}

// closestThreeSum([-1,2,1,-4],1)  //2 passed