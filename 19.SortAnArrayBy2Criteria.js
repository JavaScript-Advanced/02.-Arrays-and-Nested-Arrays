function solve(array){
         array.sort((a, b) => a.localeCompare(b));
         array.sort((a, b) => a.length - b.length);

    console.log(array.join('\n'));

    //return array.sort((a, b) => a.length - b.length || a.localeCompare(b)).join('\n');
}

solve(['test', 
'Deny', 
'omen', 
'Default']);

solve(['Isacc', 
'Theodor', 
'Jack', 
'Harrison', 
'George']);