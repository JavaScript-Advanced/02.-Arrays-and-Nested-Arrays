function solve(matrix){
    let isEqual = true;
    let toCompare = 0;
    //let sum = matrix.map(row=>Math.sum(...row));
    let sum=0;
    
    for (let i = 0; i < matrix[0].length; i++) {
        sum+=matrix[0][i];
    }

    for (let i = 1; i < matrix.length; i++) {
        toCompare=0;
        for (let j = 0; j < matrix[i].length; j++) {
            toCompare+=matrix[i][j];
        }
        if (sum != toCompare) {
            isEqual=false;
            return isEqual;
        }
    }

    return isEqual;
}

console.log(solve([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]));