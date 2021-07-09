// **ETGAR: place the emitter code in a different file and use export
const EventEmitter = require('events');
const large_n_emitter = new EventEmitter();
const print_r_emitter = new EventEmitter();

large_n_emitter.on('result', (_) => {
    console.log(`LARGE NUMBER OCCURED! --- ${_}`);
});

print_r_emitter.on('result', (_) => {
    console.log(`RESULT PRINTER UPDATE --- ${_}`);
});

module.exports.large_n_emitter = large_n_emitter;
module.exports.print_r_emitter = print_r_emitter; 