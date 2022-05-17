function solve(commands) {
    let result = [];

    for (let i = 0; i < commands.length; i++) {
        let number = i + 1;
        switch (commands[i]) {
            case 'add': result.push(number); break;
            case 'remove':
                if (result.length == 0) {
                    break;
                } else {
                    result.pop();
                    break;
                }
        }
    }

    console.log(result.length == 0 ? 'Empty' : result.join('\n'));
}

solve(['add',
    'add',
    'remove',
    'add',
    'add']);

solve(['remove',
    'remove',
    'remove']);

solve(['add',
    'add',
    'add',
    'add']);