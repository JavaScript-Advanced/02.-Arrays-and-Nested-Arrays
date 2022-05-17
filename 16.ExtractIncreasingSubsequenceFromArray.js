function solve(array) {
    let result = [];

    result.push(array.shift());

    for (const number of array) {
        if (number >= result[result.length - 1]) {
            result.push(number);
        }
    }

    return result;
}

console.log(solve([1, 3, 8, 4, 10, 12, 3, 2, 24]));