const emitters = require('./emitter'); 

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let x,y = 0;
readline.question('Please enter 1st number:', _x => {
    x = _x;
    readline.question('Please enter 2st number:', _y => {
        y = _y;
        const result = parseInt(x) + Number(y);
        console.log(`${x} + ${y} = ${result}`)
        if (result > 100) emitters.large_n_emitter.emit('result', result);
        else emitters.print_r_emitter.emit('result', result);
        readline.close();
    });
}) ;
