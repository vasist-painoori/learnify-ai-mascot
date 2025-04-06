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
        {
          id: "js-objects",
          title: "Objects and Arrays",
          description: "Working with complex data structures in JavaScript",
          content: `
# Objects and Arrays in JavaScript

Objects and arrays are fundamental data structures in JavaScript that allow you to organize and manipulate collections of data.
          `,
          codeExamples: [
            {
              title: "Working with Objects",
              code: `// Creating objects
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  isEmployed: true,
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

// Accessing object properties
console.log(person.firstName); // "John"
console.log(person["lastName"]); // "Doe"
console.log(person.fullName()); // "John Doe"

// Adding or modifying properties
person.email = "john@example.com";
person.age = 31;

// Object methods
const keys = Object.keys(person); // ["firstName", "lastName", "age", "isEmployed", "fullName", "email"]
const values = Object.values(person); // ["John", "Doe", 31, true, [Function], "john@example.com"]
const entries = Object.entries(person); // [["firstName", "John"], ["lastName", "Doe"], ...]`,
              explanation: "This example demonstrates how to create objects, access and modify their properties, and use built-in object methods."
            },
            {
              title: "Working with Arrays",
              code: `// Creating arrays
const fruits = ["apple", "banana", "cherry"];
const numbers = [1, 2, 3, 4, 5];
const mixed = [1, "hello", true, { name: "John" }, [10, 20]];

// Accessing array elements
console.log(fruits[0]); // "apple"
console.log(numbers[2]); // 3
console.log(mixed[3].name); // "John"

// Array methods
fruits.push("orange"); // Add to the end: ["apple", "banana", "cherry", "orange"]
fruits.pop(); // Remove from the end: ["apple", "banana", "cherry"]
fruits.unshift("pear"); // Add to the beginning: ["pear", "apple", "banana", "cherry"]
fruits.shift(); // Remove from the beginning: ["apple", "banana", "cherry"]

// Array iteration
fruits.forEach(fruit => {
  console.log(fruit);
});

// Array mapping
const upperFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(upperFruits); // ["APPLE", "BANANA", "CHERRY"]

// Array filtering
const longFruits = fruits.filter(fruit => fruit.length > 5);
console.log(longFruits); // ["banana", "cherry"]

// Array reducing
const sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum); // 15`,
              explanation: "This example shows how to work with arrays, including creating arrays, accessing elements, and using common array methods like push, pop, forEach, map, filter, and reduce."
            }
          ],
          quiz: [
            {
              question: "Which method is used to add a new element to the end of an array?",
              options: ["push()", "pop()", "shift()", "unshift()"],
              correctAnswer: 0,
              explanation: "The push() method adds one or more elements to the end of an array and returns the new length of the array."
            },
            {
              question: "How do you access the value of the property 'name' in the object { person: { name: 'John', age: 30 } }?",
              options: ["person.name", "person[name]", "person.person.name", "person.person[name]"],
              correctAnswer: 2,
              explanation: "To access the 'name' property in the nested object, you would use dot notation: person.person.name."
            }
          ],
          flashcards: [
            {
              front: "What is an object in JavaScript?",
              back: "An object is a collection of related data and functionality, stored as key-value pairs. The values can be primitive data types, functions (methods), or even other objects."
            },
            {
              front: "What is the difference between an array and an object in JavaScript?",
              back: "Arrays are ordered collections of values accessible by a numeric index, while objects are unordered collections of key-value pairs accessible by keys (strings or symbols). Arrays are a special type of object optimized for sequential data."
            }
          ]
        },
        {
          id: "js-dom",
          title: "DOM Manipulation",
          description: "Interacting with HTML elements using JavaScript",
          content: `
# DOM Manipulation in JavaScript

The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content.
          `,
          codeExamples: [
            {
              title: "Selecting Elements",
              code: `// Get an element by ID
const header = document.getElementById('header');

// Get elements by class name
const paragraphs = document.getElementsByClassName('paragraph');

// Get elements by tag name
const divs = document.getElementsByTagName('div');

// Query selector (returns the first matching element)
const firstButton = document.querySelector('button');

// Query selector all (returns all matching elements)
const allButtons = document.querySelectorAll('button');`,
              explanation: "This example shows different ways to select elements from the DOM using JavaScript."
            },
            {
              title: "Modifying Elements",
              code: `// Changing text content
document.getElementById('title').textContent = 'New Title';

// Changing HTML content
document.getElementById('container').innerHTML = '<p>New content</p>';

// Changing attributes
document.getElementById('image').src = 'new-image.jpg';
document.getElementById('link').setAttribute('href', 'https://example.com');

// Changing styles
const element = document.getElementById('box');
element.style.backgroundColor = 'blue';
element.style.color = 'white';
element.style.padding = '20px';

// Adding and removing classes
element.classList.add('highlight');
element.classList.remove('hidden');
element.classList.toggle('active');
const hasClass = element.classList.contains('highlight'); // true`,
              explanation: "This example demonstrates how to modify DOM elements, including changing text content, HTML content, attributes, styles, and CSS classes."
            }
          ],
          quiz: [
            {
              question: "What method would you use to create a new HTML element?",
              options: ["document.createElement()", "document.newElement()", "document.addElement()", "element.appendChild()"],
              correctAnswer: 0,
              explanation: "The document.createElement() method creates a new HTML element specified by the tag name."
            },
            {
              question: "What is the difference between textContent and innerHTML?",
              options: ["They are the same", "textContent sets or gets the text content, while innerHTML sets or gets the HTML content", "innerHTML is deprecated", "textContent only works with div elements"],
              correctAnswer: 1,
              explanation: "textContent sets or gets the text content of an element, treating HTML tags as plain text. innerHTML sets or gets the HTML content of an element, parsing HTML tags as actual elements."
            }
          ],
          flashcards: [
            {
              front: "What is the DOM?",
              back: "The Document Object Model (DOM) is a programming interface for web documents. It represents the HTML document as a tree of nodes that can be manipulated with JavaScript."
            },
            {
              front: "What is event bubbling in the DOM?",
              back: "Event bubbling is a mechanism where an event triggered on a nested element 'bubbles up' through its ancestors in the DOM tree. This means if you click on a button inside a div, the click event will first trigger on the button, then on the div, and continue up the DOM tree."
            }
          ]
        },
        {
          id: "js-async",
          title: "Asynchronous JavaScript",
          description: "Handling asynchronous operations with promises and async/await",
          content: `
# Asynchronous JavaScript

JavaScript is single-threaded, but it can perform non-blocking operations through callbacks, promises, and async/await.
          `,
          codeExamples: [
            {
              title: "Promises",
              code: `// Creating a promise
const fetchData = () => {
  return new Promise((resolve, reject) => {
    // Simulating an API call
    setTimeout(() => {
      const data = { id: 1, name: 'Product' };
      // If successful
      resolve(data);
      // If error occurs
      // reject(new Error('Failed to fetch data'));
    }, 2000);
  });
};

// Using a promise
fetchData()
  .then(data => {
    console.log('Data received:', data);
    return data.id;
  })
  .then(id => {
    console.log('ID:', id);
  })
  .catch(error => {
    console.error('Error:', error);
  })
  .finally(() => {
    console.log('Operation completed');
  });`,
              explanation: "This example demonstrates how to create and use promises for handling asynchronous operations in JavaScript."
            },
            {
              title: "Async/Await",
              code: `// Using async/await with promises
async function fetchUserData() {
  try {
    // Await pauses execution until the promise resolves
    const user = await fetchData();
    console.log('User:', user);
    
    // You can use multiple await statements
    const posts = await fetchUserPosts(user.id);
    console.log('Posts:', posts);
    
    return { user, posts };
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

// Helper function to simulate fetching user posts
function fetchUserPosts(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(['Post 1', 'Post 2', 'Post 3']);
    }, 1000);
  });
}

// Calling the async function
fetchUserData()
  .then(data => {
    console.log('All data:', data);
  })
  .catch(error => {
    console.error('Error in main function:', error);
  });`,
              explanation: "This example shows how to use async/await syntax to work with promises in a more synchronous-looking way, making asynchronous code easier to read and maintain."
            }
          ],
          quiz: [
            {
              question: "What is the purpose of the async/await syntax?",
              options: ["To make synchronous operations faster", "To make asynchronous code look and behave more like synchronous code", "To replace promises entirely", "To execute multiple operations in parallel"],
              correctAnswer: 1,
              explanation: "The async/await syntax provides a more readable and maintainable way to work with promises, making asynchronous code look and behave more like synchronous code."
            },
            {
              question: "What will be the output of this code?\n\nasync function test() {\n  return 'hello';\n}\n\nconsole.log(test());",
              options: ["'hello'", "Promise { 'hello' }", "undefined", "Error"],
              correctAnswer: 1,
              explanation: "An async function always returns a promise, regardless of what's returned inside it. In this case, 'hello' is wrapped in a resolved promise, so console.log(test()) outputs Promise { 'hello' }."
            }
          ],
          flashcards: [
            {
              front: "What is a Promise in JavaScript?",
              back: "A Promise is an object representing the eventual completion or failure of an asynchronous operation. It allows you to attach callbacks to handle the success or failure of that operation, rather than using nested callbacks."
            },
            {
              front: "What is the difference between synchronous and asynchronous code?",
              back: "Synchronous code executes sequentially, with each operation completing before the next one starts. Asynchronous code allows operations to be performed without blocking the execution flow, enabling other code to run while waiting for an operation to complete."
            }
          ]
        },
        {
          id: "js-es6-features",
          title: "ES6+ Features",
          description: "Modern JavaScript features introduced in ES6 and beyond",
          content: `
# ES6+ Features in JavaScript

ES6 (ECMAScript 2015) introduced many new features to JavaScript, and subsequent versions have continued to add more. These features make JavaScript more powerful and easier to use.
          `,
          codeExamples: [
            {
              title: "Destructuring",
              code: `// Object destructuring
const person = {
  name: 'Alice',
  age: 30,
  location: 'New York',
  job: 'Developer'
};

// Extract specific properties
const { name, age } = person;
console.log(name); // 'Alice'
console.log(age); // 30

// Destructuring with new variable names
const { name: fullName, job: profession } = person;
console.log(fullName); // 'Alice'
console.log(profession); // 'Developer'

// Default values
const { salary = 'Not specified' } = person;
console.log(salary); // 'Not specified'

// Array destructuring
const colors = ['red', 'green', 'blue'];

// Extract values by position
const [firstColor, secondColor] = colors;
console.log(firstColor); // 'red'
console.log(secondColor); // 'green'

// Skip elements
const [first, , third] = colors;
console.log(first); // 'red'
console.log(third); // 'blue'

// Swap variables
let a = 1;
let b = 2;
[a, b] = [b, a];
console.log(a); // 2
console.log(b); // 1`,
              explanation: "This example demonstrates destructuring assignment, which allows you to extract values from arrays and properties from objects into distinct variables."
            },
            {
              title: "Spread and Rest Operators",
              code: `// Spread operator with arrays
const numbers = [1, 2, 3];
const moreNumbers = [...numbers, 4, 5]; // [1, 2, 3, 4, 5]

// Combine arrays
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combined = [...array1, ...array2]; // [1, 2, 3, 4, 5, 6]

// Clone an array
const original = [1, 2, 3];
const copy = [...original];
copy.push(4); // copy: [1, 2, 3, 4], original: [1, 2, 3]

// Spread operator with objects
const baseObject = { a: 1, b: 2 };
const extendedObject = { ...baseObject, c: 3 }; // { a: 1, b: 2, c: 3 }

// Override properties
const overrideObject = { ...baseObject, a: 10 }; // { a: 10, b: 2 }

// Rest parameter in functions
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4)); // 10

// Rest in destructuring
const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(first); // 1
console.log(second); // 2
console.log(rest); // [3, 4, 5]`,
              explanation: "This example shows how to use the spread operator (...) to expand arrays and objects, and the rest operator to collect multiple elements into an array."
            }
          ],
          quiz: [
            {
              question: "What is the output of the following code?\n\nconst { a, b = 10 } = { a: 5 };",
              options: ["a: 5, b: undefined", "a: 5, b: 10", "a: 5, b: null", "Error"],
              correctAnswer: 1,
              explanation: "When destructuring objects, you can provide default values for properties that don't exist in the source object. In this case, 'a' is 5 from the source object, and 'b' gets its default value of 10."
            },
            {
              question: "Which ES6+ feature is being used in this code: const newObj = { ...obj1, ...obj2 };",
              options: ["Object destructuring", "Array destructuring", "Spread operator", "Rest parameter"],
              correctAnswer: 2,
              explanation: "This code uses the spread operator (...) to combine properties from obj1 and obj2 into a new object newObj."
            }
          ],
          flashcards: [
            {
              front: "What is destructuring in JavaScript?",
              back: "Destructuring is an ES6 feature that allows you to extract values from arrays or properties from objects and assign them to variables in a concise way."
            },
            {
              front: "What is the difference between the spread operator and the rest parameter?",
              back: "The spread operator (...) expands an array or object into individual elements, while the rest parameter collects multiple elements into an array. They use the same syntax (...) but in different contexts."
            }
          ]
        },
        {
          id: "js-modules",
          title: "Modules",
          description: "Organizing code with JavaScript modules",
          content: `
# JavaScript Modules

Modules allow you to organize code into separate files, making it more maintainable and reusable. ES6 introduced a standardized module system.
          `,
          codeExamples: [
            {
              title: "Exporting and Importing",
              code: `// math.js - exporting
// Named exports
export const PI = 3.14159;

export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

// Default export (only one per module)
export default function multiply(a, b) {
  return a * b;
}

// utils.js - another module
export function formatNumber(num) {
  return num.toFixed(2);
}

// main.js - importing
// Import default export
import multiply from './math.js';

// Import named exports
import { PI, add, subtract } from './math.js';

// Import with aliases
import { formatNumber as format } from './utils.js';

// Import all exports from a module
import * as mathUtils from './math.js';

// Using the imports
console.log(PI); // 3.14159
console.log(add(5, 3)); // 8
console.log(subtract(10, 4)); // 6
console.log(multiply(2, 3)); // 6
console.log(format(123.456)); // "123.46"
console.log(mathUtils.PI); // 3.14159
console.log(mathUtils.add(1, 1)); // 2`,
              explanation: "This example shows how to export functions and variables from a module and import them in another file using various import syntax options."
            },
            {
              title: "Dynamic Imports",
              code: `// Static import (loaded at the start)
import { add } from './math.js';

// Dynamic import (loaded on demand)
// Returns a promise
async function loadMathModule() {
  try {
    // The import() function returns a promise
    const mathModule = await import('./math.js');
    
    // Now we can use the module
    console.log(mathModule.PI); // 3.14159
    console.log(mathModule.add(5, 10)); // 15
    
    // Default export is available as .default
    console.log(mathModule.default(2, 3)); // 6
    
    return mathModule;
  } catch (error) {
    console.error('Error loading module:', error);
  }
}

// Using the dynamic import
document.getElementById('load-button').addEventListener('click', () => {
  loadMathModule().then(module => {
    console.log('Module loaded!');
  });
});`,
              explanation: "This example demonstrates both static imports (loaded when the script is initialized) and dynamic imports (loaded on demand), which are useful for code splitting and improving performance by loading modules only when they're needed."
            }
          ],
          quiz: [
            {
              question: "What is the main advantage of using modules in JavaScript?",
              options: ["Faster code execution", "Better code organization and maintainability", "Reduced file size", "Automatic error checking"],
              correctAnswer: 1,
              explanation: "The main advantage of using modules in JavaScript is better code organization and maintainability. Modules help organize code into separate files with explicit dependencies, promoting reusability and reducing global scope pollution."
            },
            {
              question: "How many default exports can a module have?",
              options: ["None", "One", "Two", "Unlimited"],
              correctAnswer: 1,
              explanation: "A module can have only one default export. It can have multiple named exports, but only one default export using the 'export default' syntax."
            }
          ],
          flashcards: [
            {
              front: "What is the difference between named exports and default exports in JavaScript modules?",
              back: "Named exports allow multiple exports from a module, each with a specific name that must be used when importing. Default exports allow a single default export per module, which can be imported with any name. A module can have both named exports and a default export."
            },
            {
              front: "What is the benefit of dynamic imports in JavaScript?",
              back: "Dynamic imports (using import()) allow loading modules on demand rather than up front. This enables code splitting, lazy loading, and conditional loading based on runtime conditions, which can improve application performance and reduce initial load time."
            }
          ]
        },
        {
          id: "js-events",
          title: "Events",
          description: "Handling events in JavaScript",
          content: `
# Events in JavaScript

Events are actions or occurrences that happen in the browser, such as a user clicking a button, pressing a key, or a page finishing loading. JavaScript can respond to these events.
          `,
          codeExamples: [
            {
              title: "Event Listeners",
              code: `// Adding event listeners
const button = document.getElementById('myButton');

// Using addEventListener
button.addEventListener('click', function() {
  console.log('Button was clicked!');
});

// Using arrow function
button.addEventListener('click', () => {
  console.log('Button clicked with arrow function');
});

// Named function
function handleMouseOver() {
  console.log('Mouse is over the button');
}

button.addEventListener('mouseover', handleMouseOver);

// Removing event listeners
button.removeEventListener('mouseover', handleMouseOver);

// One-time event listener
button.addEventListener('focus', function onFocus() {
  console.log('Button focused - this will only happen once');
  button.removeEventListener('focus', onFocus);
}, { once: true });

// Event options
button.addEventListener('click', function(event) {
  console.log('Button clicked with options');
}, {
  capture: true, // Event is handled in capture phase
  once: true,    // Listener is automatically removed after one call
  passive: true  // Listener will never call preventDefault()
});`,
              explanation: "This example demonstrates how to add, use, and remove event listeners in JavaScript, including different ways to define handler functions and using event listener options."
            },
            {
              title: "Event Object and Propagation",
              code: `// Working with the event object
document.getElementById('myInput').addEventListener('keyup', function(event) {
  console.log('Key pressed:', event.key);
  console.log('Key code:', event.keyCode);
  console.log('Shift key was pressed:', event.shiftKey);
  console.log('Target element:', event.target);
  
  // Prevent default behavior
  if (event.key === 'Enter') {
    event.preventDefault();
    console.log('Enter key action prevented');
  }
});

// Event propagation
document.getElementById('parent').addEventListener('click', function(event) {
  console.log('Parent clicked');
});

document.getElementById('child').addEventListener('click', function(event) {
  console.log('Child clicked');
  
  // Stop the event from bubbling to parent elements
  event.stopPropagation();
});

// Capture phase
document.getElementById('parent').addEventListener('click', function(event) {
  console.log('Parent capture phase');
}, true);

document.getElementById('child').addEventListener('click', function(event) {
  console.log('Child capture phase');
}, true);

// Event delegation
document.getElementById('list').addEventListener('click', function(event) {
  if (event.target.tagName === 'LI') {
    console.log('List item clicked:', event.target.textContent);
  }
});`,
              explanation: "This example shows how to work with the event object to get information about an event, control event propagation with stopPropagation(), and use event delegation to handle events for multiple elements with a single listener."
            }
          ],
          quiz: [
            {
              question: "What is event bubbling in JavaScript?",
              options: ["When an event handler creates multiple events", "When an event is triggered on a parent element first, then propagates to child elements", "When an event is triggered on a child element first, then propagates to parent elements", "When an event is triggered multiple times"],
              correctAnswer: 2,
              explanation: "Event bubbling is the process where an event triggered on a child element 'bubbles up' through the DOM tree to parent elements. The event starts at the target element and then moves up to ancestors, triggering any matching event handlers along the way."
            },
            {
              question: "What method is used to prevent an event's default behavior?",
              options: ["event.stop()", "event.preventDefault()", "event.stopDefault()", "event.cancel()"],
              correctAnswer: 1,
              explanation: "The preventDefault() method is used to stop an event from performing its default action. For example, it can prevent a form from submitting or a link from navigating to a new page."
            }
          ],
          flashcards: [
            {
              front: "What is event delegation in JavaScript?",
              back: "Event delegation is a technique where you attach a single event listener to a parent element instead of multiple listeners on child elements. It relies on event bubbling to detect events on child elements, improving performance and working with dynamically added elements."
            },
            {
              front: "What is the difference between event.stopPropagation() and event.preventDefault()?",
              back: "event.stopPropagation() prevents an event from bubbling up to parent elements, but doesn't affect the default behavior of the current element. event.preventDefault() stops the default action associated with the event (like form submission or link navigation), but doesn't affect event propagation."
            }
          ]
        },
        {
          id: "js-error-handling",
          title: "Error Handling",
          description: "Managing errors in JavaScript",
          content: `
# Error Handling in JavaScript

Error handling allows you to gracefully handle and recover from unexpected situations in your code, improving the user experience and making your applications more robust.
          `,
          codeExamples: [
            {
              title: "Try-Catch-Finally",
              code: `// Basic try-catch
try {
  // Code that might throw an error
  const result = someUndefinedFunction();
  console.log(result);
} catch (error) {
  // Code to handle the error
  console.error('An error occurred:', error.message);
}

// try-catch-finally
try {
  console.log('Trying to execute some code...');
  // Deliberately throw an error
  throw new Error('Something went wrong');
} catch (error) {
  console.error('Caught an error:', error.message);
} finally {
  // This code always runs, whether an error occurred or not
  console.log('This always executes');
}

// Handling specific error types
try {
  const json = '{ "name": "John", "age": 30 }';
  const user = JSON.parse(json);
  
  if (!user.email) {
    throw new SyntaxError('Incomplete data: no email');
  }
  
  console.log(user.email);
} catch (error) {
  if (error instanceof SyntaxError) {
    console.error('JSON Syntax Error:', error.message);
  } else if (error instanceof ReferenceError) {
    console.error('Reference Error:', error.message);
  } else {
    console.error('Unknown Error:', error.message);
  }
}`,
              explanation: "This example demonstrates the use of try-catch-finally blocks for error handling in JavaScript, including catching specific types of errors and using the finally block for cleanup operations."
            },
            {
              title: "Custom Error Types",
              code: `// Creating a custom error class
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationError';
    this.date = new Date();
  }
}

// Creating another custom error
class PropertyRequiredError extends ValidationError {
  constructor(property) {
    super('No property: ' + property);
    this.name = 'PropertyRequiredError';
    this.property = property;
  }
}

// Using custom errors
function validateUser(user) {
  if (!user) {
    throw new ValidationError('No user provided');
  }
  
  if (!user.name) {
    throw new PropertyRequiredError('name');
  }
  
  if (!user.email) {
    throw new PropertyRequiredError('email');
  }
}

try {
  const user = { name: 'John' }; // Missing email
  validateUser(user);
} catch (error) {
  if (error instanceof PropertyRequiredError) {
    console.log(`Please provide the ${error.property} property`);
  } else if (error instanceof ValidationError) {
    console.log('Invalid data:', error.message);
  } else {
    console.error('Unknown error:', error);
    throw error; // Re-throw if it's an unknown error
  }
}`,
              explanation: "This example shows how to create and use custom error types by extending the built-in Error class, allowing for more specific error handling and additional properties on error objects."
            }
          ],
          quiz: [
            {
              question: "What happens when an exception is thrown in a try block and there is no catch block to handle it?",
              options: ["The exception is silently ignored", "The code continues execution from the next line after the error", "The program terminates with an unhandled exception", "The exception is automatically logged to the console"],
              correctAnswer: 2,
              explanation: "If an exception is thrown in a try block and there is no catch block to handle it, the exception becomes an unhandled exception, which typically causes the program to terminate execution and the error is displayed in the console."
            },
            {
              question: "Which of these is NOT a standard built-in error type in JavaScript?",
              options: ["TypeError", "SyntaxError", "RangeError", "ValidationError"],
              correctAnswer: 3,
              explanation: "ValidationError is not a standard built-in error type in JavaScript. The standard error types include Error, TypeError, SyntaxError, ReferenceError, RangeError, URIError, and EvalError."
            }
          ],
          flashcards: [
            {
              front: "What is the purpose of the try-catch statement in JavaScript?",
              back: "The try-catch statement is used to handle exceptions (runtime errors) in JavaScript. The code in the try block is executed, and if an exception occurs, the catch block is executed with the error object, allowing the program to gracefully recover from errors."
            },
            {
              front: "What is the difference between throwing a string and throwing an Error object?",
              back: "When you throw an Error object (throw new Error('message')), it includes a stack trace and additional properties like name and message, making debugging easier. When you throw a string (throw 'message'), you only get the string itself without the additional debugging information."
            }
          ]
        },
        {
          id: "js-storage",
          title: "Web Storage",
          description: "Storing data in the browser",
          content: `
# Web Storage in JavaScript

Web Storage provides mechanisms for storing data in a web browser, allowing web applications to store data locally on the user's device.
          `,
          codeExamples: [
            {
              title: "Local Storage",
              code: `// Storing data in localStorage
localStorage.setItem('username', 'John');
localStorage.setItem('isLoggedIn', 'true');
localStorage.setItem('preferences', JSON.stringify({ theme: 'dark', fontSize: 14 }));

// Retrieving data
const username = localStorage.getItem('username');
console.log('Username:', username); // 'John'

const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
console.log('Is logged in:', isLoggedIn); // true

const preferences = JSON.parse(localStorage.getItem('preferences'));
console.log('Theme:', preferences.theme); // 'dark'
console.log('Font size:', preferences.fontSize); // 14

// Removing a specific item
localStorage.removeItem('isLoggedIn');

// Checking if an item exists
if (localStorage.getItem('username')) {
  console.log('Username is stored');
}

// Getting the number of stored items
console.log('Number of items in localStorage:', localStorage.length);

// Clearing all items
// localStorage.clear();`,
              explanation: "This example demonstrates how to use localStorage to store, retrieve, and manage data that persists even after the browser is closed and reopened. Note that localStorage only supports storing strings, so objects need to be serialized with JSON.stringify() and deserialized with JSON.parse()."
            },
            {
              title: "Session Storage",
              code: `// Storing data in sessionStorage
sessionStorage.setItem('currentPage', 'home');
sessionStorage.setItem('searchResults', JSON.stringify([
  { id: 1, title: 'Result 1' },
  { id: 2, title: 'Result 2' }
]));

// Retrieving data
const currentPage = sessionStorage.getItem('currentPage');
console.log('Current page:', currentPage); // 'home'

const results = JSON.parse(sessionStorage.getItem('searchResults'));
console.log('Search results:', results); // Array of objects

// Removing a specific item
sessionStorage.removeItem('currentPage');

// Checking if an item exists
if (sessionStorage.getItem('searchResults')) {
  console.log('Search results are stored');
}

// Getting the number of stored items
console.log('Number of items in sessionStorage:', sessionStorage.length);

// Clearing all items
// sessionStorage.clear();

// Storage event (triggered when storage changes in another window)
window.addEventListener('storage', function(event) {
  console.log('Storage changed!');
  console.log('Key:', event.key);
  console.log('Old value:', event.oldValue);
  console.log('New value:', event.newValue);
  console.log('Storage area:', event.storageArea === localStorage ? 'localStorage' : 'sessionStorage');
});`,
              explanation: "This example shows how to use sessionStorage, which works similarly to localStorage but the data is cleared when the browser session ends (i.e., when the tab or browser is closed). It also demonstrates the storage event, which is triggered when storage changes in another window/tab."
            }
          ],
          quiz: [
            {
              question: "What is the main difference between localStorage and sessionStorage?",
              options: ["localStorage can store more data than sessionStorage", "localStorage persists even when the browser is closed, while sessionStorage is cleared when the session ends", "localStorage is encrypted, while sessionStorage is not", "localStorage works in all browsers, while sessionStorage only works in modern browsers"],
              correctAnswer: 1,
              explanation: "The main difference is in their persistence. Data in localStorage persists until explicitly deleted, even when the browser is closed and reopened. Data in sessionStorage is cleared when the page session ends (i.e., when the tab or browser is closed)."
            },
            {
              question: "What happens when you try to store an object directly in localStorage without using JSON.stringify()?",
              options: ["The object is stored correctly", "An error is thrown", "The object is converted to '[object Object]'", "The object is automatically serialized"],
              correctAnswer: 2,
              explanation: "When you try to store an object directly in localStorage without using JSON.stringify(), the object's toString() method is called, which typically returns '[object Object]'. This means the actual data structure is lost."
            }
          ],
          flashcards: [
            {
              front: "What are the storage limits for localStorage and sessionStorage?",
              back: "Storage limits vary by browser, but typically both localStorage and sessionStorage have a limit of around 5-10 MB per domain. Some browsers may prompt the user when a site tries to use more than a certain amount."
            },
            {
              front: "Are localStorage and sessionStorage secure for sensitive data?",
              back: "No, both localStorage and sessionStorage are not secure for sensitive data like passwords or personal information. The data is stored unencrypted and can be accessed by any JavaScript code running on the same domain, making it vulnerable to XSS attacks."
            }
          ]
        },
        {
          id: "js-fetch",
          title: "Fetch API",
          description: "Making network requests with JavaScript",
          content: `
# Fetch API in JavaScript

The Fetch API provides an interface for making HTTP requests to servers, allowing you to retrieve data from and send data to servers asynchronously.
          `,
          codeExamples: [
            {
              title: "Basic Fetch Requests",
              code: `// Basic GET request
fetch('https://api.example.com/data')
  .then(response => {
    // Check if the request was successful
    if (!response.ok) {
      throw new Error('Network response was not ok: ' + response.status);
    }
    // Parse the JSON response
    return response.json();
  })
  .then(data => {
    // Work with the data
    console.log('Data received:', data);
  })
  .catch(error => {
    console.error('Fetch error:', error);
  });

// Fetch with options
fetch('https://api.example.com/data', {
  method: 'GET', // GET, POST, PUT, DELETE, etc.
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer token123'
  },
  // Other options like mode, cache, credentials, etc.
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

// POST request with JSON data
const user = {
  name: 'John Doe',
  email: 'john@example.com'
};

fetch('https://api.example.com/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(user) // Convert JavaScript object to JSON string
})
  .then(response => response.json())
  .then(data => console.log('User created:', data))
  .catch(error => console.error('Error:', error));`,
              explanation: "This example demonstrates basic usage of the Fetch API for making HTTP requests, including GET and POST requests with headers and body data."
            },
            {
              title: "Advanced Fetch Usage",
              code: `// Using async/await with fetch
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    
    if (!response.ok) {
      throw new Error('Network response was not ok: ' + response.status);
    }
    
    const data = await response.json();
    console.log('Data:', data);
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error; // Re-throw to allow calling code to handle it
  }
}

// Using the async function
fetchData()
  .then(data => {
    // Do something with the data
  })
  .catch(error => {
    // Handle any errors
  });

// Aborting a fetch request
const controller = new AbortController();
const signal = controller.signal;

fetch('https://api.example.com/large-data', { signal })
  .then(response => response.json())
  .then(data => console.log('Large data:', data))
  .catch(error => {
    if (error.name === 'AbortError') {
      console.log('Fetch was aborted');
    } else {
      console.error('Fetch error:', error);
    }
  });

// Abort the request after 5 seconds
setTimeout(() => {
  controller.abort();
  console.log('Fetch aborted due to timeout');
}, 5000);

// Handling different response types
async function fetchImage() {
  const response = await fetch('https://example.com/image.jpg');
  
  // Get the response as a blob (binary data)
  const imageBlob = await response.blob();
  
  // Create a URL for the blob
  const imageURL = URL.createObjectURL(imageBlob);
  
  // Use the URL in an image element
  const imgElement = document.createElement('img');
  imgElement.src = imageURL;
  document.body.appendChild(imgElement);
}

fetchImage();`,
              explanation: "This example shows more advanced usage of the Fetch API, including using async/await for cleaner code, aborting requests with AbortController, and handling different response types like blobs for images."
            }
          ],
          quiz: [
            {
              question: "What does the fetch() function return?",
              options: ["The requested data", "A Response object", "A Promise that resolves to a Response object", "undefined"],
              correctAnswer: 2,
              explanation: "The fetch() function returns a Promise that resolves to a Response object representing the response to the request. You typically need to call methods like .json() or .text() on the Response to access the actual data."
            },
            {
              question: "How do you handle a failed HTTP request with fetch?",
              options: ["The catch block will automatically handle it", "Check the 'ok' property of the Response object", "Use try/catch with async/await", "Both B and C are correct"],
              correctAnswer: 3,
              explanation: "The fetch() API doesn't reject promises on HTTP error statuses (like 404 or 500), so you need to check the 'ok' property of the Response object to check if the request was successful. When using async/await, you can also use try/catch to handle network errors."
            }
          ],
          flashcards: [
            {
              front: "What is the difference between fetch() and XMLHttpRequest?",
              back: "fetch() is a modern API that uses Promises, making it easier to work with asynchronous code. XMLHttpRequest is an older API that uses callbacks and has a more complex syntax. fetch() also has better support for features like request aborting and CORS."
            },
            {
              front: "How do you send form data with fetch?",
              back: "To send form data with fetch, you can use a FormData object or serialize the data as JSON. Example: fetch('/submit', { method: 'POST', body: new FormData(formElement) }) or fetch('/submit', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(formData) })."
            }
          ]
        }
      ]
    }
  ]
};
