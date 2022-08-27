//Sort array of 0's,1's and 2's Given an array of size N containing only 0s, 1s, and 2s; sort the array in ascending order
//Example 1:Input:N = 5arr[]= {0 2 1 2 0} Output:0 0 1 2 2 
//Explanation: 0's 1's and 2's are segregated into ascending order
//Example 2:Input:N = 3 arr[] = {0 1 0} Output:0 0 1 
//Explanation: 0s 1s and 2s are segregated into ascending order. Time Complexity: O(N)Expected Auxiliary Space: O(1)

const sortArray = (arr) => {
  let low = 0;
  let mid = 0;
  let high = arr.length - 1;
  while (mid <= high) {
    if (arr[mid] == 0) {
      [arr[low], arr[mid]] = [arr[mid], arr[low]];
      mid++;
      low++;
    } else if (arr[mid] == 1) {
      mid++;
    } else if (arr[mid] == 2) {
      [arr[mid], arr[high]] = [arr[high], arr[mid]];
      high--;
    }
  }
  return arr;
};

console.log(sortArray([0, 0, 1, 2, 1, 0, 2]));

