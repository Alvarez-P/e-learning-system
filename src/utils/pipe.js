/**
 * @function pipe
 * @description A pipe function takes an n sequence of operations, 
 * in which each operation takes an argument, process it, 
 * and gives the processed output as an input for the next operation in the sequence. 
 * @param  {Array} functions Functions list to execute
 * @return {Function}
 */
const pipe = (...functions) => args => functions.reduce((arg, fn) => fn(arg), args);

module.exports = pipe