
import { LearningPath } from '../types';

export const javascriptPath: LearningPath = {
  languageId: "javascript",
  modules: [
    {
      id: "js-basics",
      title: "JavaScript Fundamentals",
      description: "Learn the core concepts of JavaScript programming",
      topics: [
        {
          id: "js-variables",
          title: "Variables and Data Types",
          description: "Understanding how to store and manipulate data in JavaScript",
          content: `
# Variables and Data Types in JavaScript

JavaScript has three ways to declare variables:
- \`var\`: Traditional variable declaration (function scoped)
- \`let\`: Block-scoped variable that can be reassigned
- \`const\`: Block-scoped variable that cannot be reassigned

JavaScript has the following primitive data types:
- Strings: Text values like \`"Hello World"\`
- Numbers: Numeric values like \`42\` or \`3.14\`
- Booleans: \`true\` or \`false\`
- Undefined: A variable that has been declared but not assigned
- Null: Represents the intentional absence of any value
- Symbol: Unique and immutable primitive values
- BigInt: For representing integers larger than 2^53-1

And complex data types:
- Objects: Collections of related data
- Arrays: Ordered lists of values
          `,
          codeExamples: [
            {
              title: "Declaring Variables",
              code: `// Using let for variables that can change
let age = 25;
age = 26; // This is allowed

// Using const for variables that shouldn't change
const name = "John";
// name = "Jane"; // This would cause an error

// Different data types
const greeting = "Hello"; // String
const count = 42; // Number
const isActive = true; // Boolean
const user = { name: "John", age: 25 }; // Object
const colors = ["red", "green", "blue"]; // Array`,
              explanation: "This example shows how to declare variables in JavaScript using let and const, and demonstrates different data types."
            },
            {
              title: "Working with Variables",
              code: `// String operations
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName; // "John Doe"
let template = \`Hello, \${firstName}!\`; // "Hello, John!"

// Number operations
let x = 10;
let y = 5;
let sum = x + y; // 15
let product = x * y; // 50

// Boolean operations
let isLoggedIn = true;
let hasPermission = false;
let canAccess = isLoggedIn && hasPermission; // false (AND)
let canView = isLoggedIn || hasPermission; // true (OR)`,
              explanation: "This example demonstrates various operations with different data types, including string concatenation, template literals, arithmetic operations, and boolean logic."
            }
          ],
          quiz: [
            {
              question: "Which keyword is used to declare a constant variable in JavaScript?",
              options: ["var", "let", "const", "function"],
              correctAnswer: 2,
              explanation: "The 'const' keyword is used to declare variables that cannot be reassigned."
            },
            {
              question: "What will be the output of: console.log(typeof [1, 2, 3]);",
              options: ["array", "object", "number", "undefined"],
              correctAnswer: 1,
              explanation: "In JavaScript, arrays are a type of object, so typeof [1, 2, 3] returns 'object'."
            }
          ],
          flashcards: [
            {
              front: "What is a variable in JavaScript?",
              back: "A variable is a named storage location that can hold data values. In JavaScript, variables are declared using let, const, or var."
            },
            {
              front: "What is the difference between let and const?",
              back: "Both let and const are block-scoped. The difference is that let allows reassignment of values, while const does not allow reassignment after initialization."
            },
            {
              front: "What is a primitive data type?",
              back: "A primitive data type is a basic data type that is not an object and has no methods. In JavaScript, primitives are: string, number, boolean, null, undefined, symbol, and bigint."
            },
            {
              front: "What is function hoisting?",
              back: "Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope. Function declarations are hoisted completely, which means you can call them before they appear in your code."
            },
            {
              front: "What is the difference between == and ===?",
              back: "== is the equality operator that compares values after converting them to a common type. === is the strict equality operator that compares both values and types without conversion."
            }
          ]
        },
        {
          id: "js-functions",
          title: "Functions",
          description: "Creating and using functions in JavaScript",
          content: `
# Functions in JavaScript

Functions are blocks of code designed to perform specific tasks. They are defined once and can be executed (called) multiple times. Functions help organize code, make it reusable, and more maintainable.
          `,
          codeExamples: [
            {
              title: "Function Declaration vs. Expression",
              code: `// Function Declaration
function square(number) {
  return number * number;
}

// Function Expression
const cube = function(number) {
  return number * number * number;
};

// Arrow Function
const double = (number) => number * 2;

console.log(square(4)); // 16
console.log(cube(3)); // 27
console.log(double(5)); // 10`,
              explanation: "This example shows different ways to define functions in JavaScript, including function declarations, function expressions, and arrow functions."
            },
            {
              title: "Functions with Parameters",
              code: `// Basic parameters
function greet(name) {
  return \`Hello, \${name}!\`;
}

// Multiple parameters
function add(a, b) {
  return a + b;
}

// Default parameters (ES6+)
function welcome(name = "Guest") {
  return \`Welcome, \${name}!\`;
}

// Rest parameters (ES6+)
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(greet("Alice")); // "Hello, Alice!"
console.log(add(5, 3)); // 8
console.log(welcome()); // "Welcome, Guest!"
console.log(sum(1, 2, 3, 4)); // 10`,
              explanation: "This example demonstrates functions with different parameter options, including basic parameters, multiple parameters, default parameters, and rest parameters."
            }
          ],
          quiz: [
            {
              question: "What is the output of the following code?\n\nfunction test() {\n  return 1;\n  return 2;\n}\nconsole.log(test());",
              options: ["1", "2", "undefined", "Error"],
              correctAnswer: 0,
              explanation: "Once a return statement is executed, the function terminates and returns the specified value. The second return statement is never reached."
            },
            {
              question: "Which of the following correctly defines an arrow function that doubles a number?",
              options: [
                "const double = (num) => return num * 2;",
                "const double = (num) => num * 2;",
                "const double = function(num) => { num * 2 };",
                "const double = num => { return num * 2 }"
              ],
              correctAnswer: 1,
              explanation: "The correct syntax for a concise arrow function with an implicit return is 'const double = (num) => num * 2;'. No return keyword is needed when the function body is a single expression."
            }
          ],
          flashcards: [
            {
              front: "What is a function in JavaScript?",
              back: "A function is a reusable block of code designed to perform a particular task. It is executed when it is called or invoked."
            },
            {
              front: "What's the difference between function declarations and function expressions?",
              back: "Function declarations are hoisted (can be used before they're defined), while function expressions are not. Function declarations use the 'function' keyword followed by a name, while function expressions assign an anonymous function to a variable."
            },
            {
              front: "What are arrow functions?",
              back: "Arrow functions are a concise way to write functions in ES6+. They use the => syntax and don't have their own 'this' binding. They're often used for short, one-line functions and callback functions."
            },
            {
              front: "What is a callback function?",
              back: "A callback function is a function passed as an argument to another function, which is then invoked inside the outer function. Callbacks are commonly used for asynchronous operations."
            },
            {
              front: "What is the 'this' keyword in JavaScript?",
              back: "The 'this' keyword refers to the object that is executing the current function. Its value depends on how the function is called and can be different in different contexts."
            }
          ]
        },
        // ... Additional JavaScript topics would be defined here
      ]
    }
  ]
};
