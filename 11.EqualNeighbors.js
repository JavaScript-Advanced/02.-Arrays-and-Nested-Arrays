function solve(matrix) {
    let result = 0;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length - 1; j++) {
            if (matrix[i][j] == matrix[i][j + 1]) {
                result++;
            }
        }
    }

    for (let i = 0; i < matrix.length-1; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] == matrix[i+1][j]) {
                result++;
            }
        }
    }

    return result;
}

console.log(solve([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']]));

console.log(solve([['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']]
));