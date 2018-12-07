// callback function
const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => a / b;
const mod = (a, b) => a % b;
const def = (a, b) => `your passing ${a} and ${b}`;

function count(num1 = 1, num2 = 1, callback) {
    return (typeof (callback) === 'function') ? callback(num1, num2) : def(num1, num2);
}

console.log(count(4, 2, mul));
