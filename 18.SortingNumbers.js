function solve(array){
    let result =[];
    let loop = Math.ceil(array.length/2);
    array.sort((a,b)=>a-b);

    for (let i = 0; i < loop; i++) {
        result.push(array.shift());
        result.push(array.pop());
    }

    return result;
}

console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]))