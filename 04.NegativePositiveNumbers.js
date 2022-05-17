function solve(array) {
    let result = [];

    for (let number of array) {
        if (number < 0) {
            result.unshift(number);
        } else {
            result.push(number);
        }
    }

    console.log(result.join('\n'));
}

solve([3, -2, 0, -1]);