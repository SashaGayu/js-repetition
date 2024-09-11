// Function Declaration
function greet(name) {
    console.log('Hello - ', name);
}

// Function Expression
const greet2 = function (name) {
    console.log('2 Hello - ', name);
};

greet('Sasha');
greet2('Sasha');

// setTimeout example
setTimeout(() => {
    greet('Sasha');
}, 0);

// setInterval example
let count = 1000;
const interval = setInterval(() => {
    count -= 7;
    console.log(count + ' - 7');
    if (count < 0) {
        clearInterval(interval);
    }
}, 50);

// Arrow functions
const arrow = (name, age) => {
    console.log('Hello - ', name, age);
};

const arrow2 = name => console.log('Hello - ', name);

function pow(num, exp) {
    console.log(Math.pow(num, exp));
}

const pow2 = (num, exp) => console.log(Math.pow(num, exp));

arrow('Семён', 12);
arrow2('Баребух');
pow(2, 3);
pow2(2, 3);

// Default parameters
const sum = (a = 40, b = a / 2) => a + b;
console.log(sum(40, 2));
console.log(sum());

function sumAll(...numbers) {
    return numbers.reduce((acc, cur) => acc + cur, 0);
}

console.log(sumAll(1, 2, 3, 4, 5));

// Closures
function createPerson(name) {
    return function (lastname) {
        console.log(name + ' ' + lastname);
    };
}

const addLastName = createPerson('Sasha');
addLastName('Haiu');
