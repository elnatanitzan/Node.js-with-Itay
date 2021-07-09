const calc = require('./calc');

const sum = calc.add(3, 4);

const logger = require('./logger');

logger.log('***** the program start up \n');
console.log(`the sum of numbers is: ${sum}\n`);
logger.log('***** the program shut down');