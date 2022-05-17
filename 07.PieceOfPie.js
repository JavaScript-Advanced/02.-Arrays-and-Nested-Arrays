function solve(array, start, end) {
    let startIdx = array.indexOf(start);
    let endIdx = array.indexOf(end);
    let result = array.slice(startIdx, endIdx + 1);

    return result;
}

console.log(solve(['Pumpkin Pie',
    'Key Lime Pie',
    'Cherry Pie',
    'Lemon Meringue Pie',
    'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie'
));