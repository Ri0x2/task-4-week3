// Template Literals

// Allows for easier string formatting and embedding expressions in strings using backticks (``) and ${} syntax.

// example

const name = 'Rio';
const Hello = `hello ${name}`;



// Arrow Functions

// shorter syntax for functions also have (this) that capture the value of the surrounding context

// example


const multiplyByTwo = num => num * 2;



// Let and cosnt 
// let: Declares block-scoped variables A variable declared with let is only available within the block it’s defined in
// const: Declares block-scoped constants The value assigned to a const variable cannot be changed and it is also block-scoped

// example
 
let myVar = 10;
const X = 20;


// Generators
// Functions that can be paused and resumed using the yield keyword we are using it to handle asynchronous code and iterators

// example

function* generateNumbers() {
    yield 1;
    yield 2;
    yield 3;
}



// classes

// new way to define classes and inheritance

// example

class Animal {
    constructor(name) {
        this.name = name;
    }

    makeSound() {
        console.log(`${this.name} makes a sound.`);
    }
}


// Promises

// more manageable way to handle asynchronous operations compared to callbacks

// example

function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { name: 'Rio' };
            resolve(data);
        }, 1000);
    });
}

// Map and Set 

// map : collection of key and value pairs where the keys can be of any type
// set : collection of unique values

// example

const myMap = new Map();
myMap.set('name', 'Rio');
myMap.set('age', 20);

const mySet = new Set();


// Spread and Rest Operators

// Spread Operator: Expands an array or object into individual elementnt 
// rest operator: Collects multiple elements into an array

// example

const numbers = [1, 2, 3, 4, 5];
const sum = (a, b, c, d, e) => a + b + c + d + e;
console.log(sum(...numbers)); 

const person = { name: 'Rio', age: 20 };






