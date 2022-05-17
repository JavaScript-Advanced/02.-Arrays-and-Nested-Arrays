function solve(array, rotations) {
    for (let i = 0; i < rotations; i++) {
        let move = array.pop();
        array.unshift(move);
    }

    console.log(array.join(' '));
}

solve(['Banana',
    'Orange',
    'Coconut',
    'Apple'],
    15);