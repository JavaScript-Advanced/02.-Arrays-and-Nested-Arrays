function solve(matrix) {
    let max = 0;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            let curr = matrix[i][j];

            if (curr > max) {
                max = curr;
            }
        }
    }

    return max;
}

function demo(matrix){
    return matrix
        .map(row => Math.max(...row))
        .reduce((a, x) => Math.max(a, x), Number.MIN_SAFE_INTEGER);
}

console.log(demo([[3, 5, 7, 12],
                  [-1, 4, 33, 2],
                  [8, 3, 0, 4]]));

console.log(solve([[20, 50, 10],
                   [8, 33, 145]]));
                   