//Problem 6.5: Pair With Given Difference Given an one-dimensional unsorted array A containing N integers.
//You are also given an integer B, find if there exists a pair of elements in the array whose difference is B.
//Return1 if any such pair exists else return 0. Problem Constraints 1 <= N <= 105 -103 <= A[i]<= 103 -105 <= B <= 105
//Input Format First argument is an integer array A of size N. Second argument is aninteger B.
//Output Format Return 1 if any such pair exists else return 0.
//Example Input Input 1: A = [5, 10, 3, 2, 50, 80] B = 78 Input 2: A = [-10, 20] B = 30
//Example Output Output 1: 1 Output 2: 1Example Explanation Explanation 1: Pair (80, 2) gives a difference of 78. 
//Explanation 2:Pair (20, -10) gives a difference of 30 i.e 20 - (-10) => 20 + 10 => 30


function findDifference(arr, diff) {
    arr.sort(function (a, b) { return b - a; });
    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < arr.length; j++) {
            if (diff == arr[i] - arr[j]) {
                return 1;
            }
        }
    }
    return 0;
}


//findDifference([5, 10, 3, 2, 50, 80],78);   -> output 1
//findDifference([5, 10, 3, 2, 50, 80],70);   -> output 1
//findDifference([5, 10, 3, 2, 50, 80],100);  -> output 0
//findDifference([5, 10, 300, 2, 5, 8],90);   -> output 0