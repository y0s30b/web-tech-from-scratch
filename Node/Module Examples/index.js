const {positive, zero, negative} = require('./var');
const checkSign = require('./func');

function sayHello(name) {
    return `Hello, ${name}.`;
}

console.log(sayHello("Wasabi"));
console.log();

console.log(checkSign(6));
console.log(checkSign(-3));
console.log(checkSign(0));
console.log(checkSign(-0));