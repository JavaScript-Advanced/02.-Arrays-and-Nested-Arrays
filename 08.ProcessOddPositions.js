function solve(array){
    let result =[];

    for (let i = 1; i < array.length; i+=2) {
        result.push(array[i]*2);
    }

    return result.reverse();
}

console.log(solve([10, 15, 20, 25]));