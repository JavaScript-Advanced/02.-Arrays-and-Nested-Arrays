function solve(array) {
    // let result = '';

    // array.sort((a, b) => a.localeCompare(b));

    // for (let i = 0; i < array.length; i++) {
    //     result += `${i + 1}.${array[i]}` + '\n';
    // }

    // return result;

    return array
        .sort((a, b) => a.localeCompare(b))
        .map((element, index) => `${++index}.${element}`)
        .join('\n');
}

console.log(solve(["John", "Bob", "Christina", "Ema"]));