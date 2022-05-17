function solve(array){
    array.sort((a,b)=>a-b);
    let half = Math.floor(array.length/2);
    let result = array.slice(half);

    console.log(result);
}

solve([4, 7, 2, 5]);
solve([3, 19, 14, 7, 2, 19, 6]);