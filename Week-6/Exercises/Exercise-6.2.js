//Spiral Order Matrix II
//Problem Description: Given a matrix of m * n elements (m rows, n columns), return all elements of the matrix in spiral order.
//Example: Given the following matrix: [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ] You should return[1, 2, 3, 6, 9, 8, 7, 4, 5]

//--------->
//  1 2 3  |
//->4 5 6  |
//| 7 8 9  V
//|<---------
function spiralOrder (matrix) {
    let resultArr = matrix[0];
    let top = 1;
    let left = 0;
    let right = matrix[0].length - 1;
    let bottom = matrix.length - 1;
    let size = matrix.length * matrix[0].length;
    while (resultArr.length < size) {
        for (let i = top; i <= bottom; i++) {
            resultArr.push(matrix[i][right]);
        }
        right--;
        for (let j = right; j >= left; j--) {
            resultArr.push(matrix[bottom][j]);
        }
        bottom--;
        for (let k = bottom; k >= top; k--) {
            resultArr.push(matrix[k][left])
        }
        left++;
    }
    return resultArr;
}