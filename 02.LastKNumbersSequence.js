function solve(n, k) {
    let result = [1];

    for (let i = 0; i < n - 1; i++) {

        let numbers = result.slice().reverse();
        let currentNumber = numbers
            .slice(0, k)
            .reduce((a, x) => a + x, 0);
        result.push(currentNumber);
    }

    return result;
}

console.log(solve(6,3));