const pipe = (...functions) => args => functions.reduce((arg, fn) => fn(arg), args);

module.exports = pipe