
import { Topic } from '../../types';

export const functionsTopic: Topic = {
  id: "js-functions",
  title: "JavaScript Functions",
  description: "Learn about creating and using functions in JavaScript",
  content: `
# JavaScript Functions

Functions are blocks of code designed to perform a particular task, executed when "called" or "invoked".

## Function Declaration
The most common way to define a function:

\`\`\`javascript
function functionName(parameters) {
  // code to be executed
  return value; // optional
}
\`\`\`

## Function Expression
Defining a function as part of an expression:

\`\`\`javascript
const functionName = function(parameters) {
  // code to be executed
  return value; // optional
};
\`\`\`

## Arrow Functions (ES6)
A shorter syntax for writing functions:

\`\`\`javascript
const functionName = (parameters) => {
  // code to be executed
  return value; // optional
};

// For simple functions with a single return statement
const functionName = (parameters) => expression;
\`\`\`

## IIFE (Immediately Invoked Function Expression)
Functions that run as soon as they are defined:

\`\`\`javascript
(function() {
  // code to be executed immediately
})();
\`\`\`

## Function Parameters
Functions can take parameters (inputs):

\`\`\`javascript
function greet(name) {
  return "Hello " + name;
}
\`\`\`

### Default Parameters (ES6)
\`\`\`javascript
function greet(name = "Guest") {
  return "Hello " + name;
}
\`\`\`

### Rest Parameters (ES6)
\`\`\`javascript
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
\`\`\`

## Scope and Closures
Functions have access to variables defined in their scope and any parent scopes.

A closure is a function that remembers its outer variables and can access them.
  `,
  codeExamples: [
    {
      title: "Function Basics",
      code: `// Function declaration
function greet(name) {
  return "Hello, " + name + "!";
}

// Function call
console.log(greet("John")); // "Hello, John!"

// Function expression
const square = function(number) {
  return number * number;
};

console.log(square(5)); // 25

// Arrow function
const cube = (number) => {
  return number * number * number;
};

console.log(cube(3)); // 27

// Simplified arrow function
const double = number => number * 2;

console.log(double(4)); // 8

// IIFE (Immediately Invoked Function Expression)
(function() {
  console.log("This runs immediately!");
})();`,
      explanation: "This example shows different ways to define and call functions in JavaScript, including function declarations, function expressions, arrow functions, and IIFEs."
    },
    {
      title: "Parameters and Scope",
      code: `// Default parameters
function greet(name = "Guest") {
  return "Hello, " + name + "!";
}

console.log(greet());         // "Hello, Guest!"
console.log(greet("Alice"));  // "Hello, Alice!"

// Rest parameters
function sum(...numbers) {
  let total = 0;
  for (let number of numbers) {
    total += number;
  }
  return total;
}

console.log(sum(1, 2, 3, 4)); // 10

// Closures
function createCounter() {
  let count = 0;
  
  return function() {
    count++;
    return count;
  };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3`,
      explanation: "This example demonstrates function parameters, including default and rest parameters, as well as closures - functions that remember their lexical environment."
    }
  ],
  quiz: [
    {
      question: "What's the difference between function declarations and function expressions?",
      options: [
        "There is no difference",
        "Function declarations are hoisted, function expressions are not",
        "Function expressions can be anonymous, function declarations cannot",
        "Function declarations can only be defined in the global scope"
      ],
      correctAnswer: 1,
      explanation: "Function declarations are hoisted (can be called before they are defined), while function expressions are not hoisted and must be defined before they are called."
    },
    {
      question: "What will the following code output?\nconst arrowFunc = () => { return this };\nfunction regularFunc() { return this; }\nconsole.log(typeof arrowFunc() === typeof regularFunc());",
      options: ["true", "false", "Error", "undefined"],
      correctAnswer: 1,
      explanation: "Arrow functions don't have their own 'this' context, they inherit it from the surrounding scope. Regular functions have their own 'this' which depends on how they're called."
    }
  ],
  flashcards: [
    {
      front: "What is a closure in JavaScript?",
      back: "A closure is a function that has access to its own scope, the scope of the outer function, and the global scope. It 'remembers' the environment in which it was created."
    },
    {
      front: "What is the benefit of using default parameters?",
      back: "Default parameters allow functions to have optional parameters with predefined values, making functions more flexible and reducing the need for additional code to check for undefined values."
    }
  ]
};
