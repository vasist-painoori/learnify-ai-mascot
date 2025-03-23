export interface Module {
  id: string;
  title: string;
  description: string;
  topics: Topic[];
}

export interface Topic {
  id: string;
  title: string;
  description: string;
  content: string;
  codeExamples: CodeExample[];
  quiz: Quiz[];
  flashcards: Flashcard[];
}

export interface CodeExample {
  title: string;
  code: string;
  explanation: string;
}

export interface Quiz {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface Flashcard {
  front: string;
  back: string;
}

export interface LearningPath {
  languageId: string;
  modules: Module[];
}

export const learningPaths: LearningPath[] = [
  {
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
            id: "js-arrays",
            title: "Arrays and Array Methods",
            description: "Working with arrays and using array methods in JavaScript",
            content: `
# Arrays in JavaScript

Arrays are ordered lists of values. Each value is called an element, and each element has a numerical position in the array, known as its index. In JavaScript, arrays can hold values of any data type.
            `,
            codeExamples: [
              {
                title: "Creating and Accessing Arrays",
                code: `// Creating an array
const colors = ["red", "green", "blue"];

// Accessing elements by index
console.log(colors[0]); // "red"
console.log(colors[1]); // "green"
console.log(colors[2]); // "blue"

// Array length
console.log(colors.length); // 3

// Adding elements
colors.push("yellow"); // Adds to the end
colors.unshift("purple"); // Adds to the beginning

// Removing elements
colors.pop(); // Removes from the end
colors.shift(); // Removes from the beginning`,
                explanation: "This example shows how to create arrays, access elements by index, determine array length, and add/remove elements from the beginning and end of an array."
              },
              {
                title: "Array Methods",
                code: `const numbers = [1, 2, 3, 4, 5];

// Map: Creates a new array with the results of calling a provided function on every element
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// Filter: Creates a new array with all elements that pass the test implemented by the provided function
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // [2, 4]

// Reduce: Applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value
const sum = numbers.reduce((accumulator, num) => accumulator + num, 0);
console.log(sum); // 15

// ForEach: Executes a provided function once for each array element
numbers.forEach(num => console.log(num)); // Prints each number

// Slice: Returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included)
const subArray = numbers.slice(1, 4);
console.log(subArray); // [2, 3, 4]

// Splice: Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
numbers.splice(2, 1, 6); // Removes 1 element at index 2, and inserts 6
console.log(numbers); // [1, 2, 6, 4, 5]`,
                explanation: "This example demonstrates various array methods, including map, filter, reduce, forEach, slice, and splice. These methods provide powerful ways to manipulate and transform arrays."
              }
            ],
            quiz: [
              {
                question: "What is the output of the following code?\n\nconst arr = [1, 2, 3];\narr.push(4);\nconsole.log(arr.length);",
                options: ["2", "3", "4", "undefined"],
                correctAnswer: 2,
                explanation: "The 'push' method adds an element to the end of the array, increasing its length by 1. Therefore, the length of the array becomes 4."
              },
              {
                question: "Which array method is used to create a new array with the results of calling a provided function on every element in the original array?",
                options: ["filter", "map", "reduce", "forEach"],
                correctAnswer: 1,
                explanation: "The 'map' method is used to create a new array by applying a function to each element in the original array."
              }
            ],
            flashcards: [
              {
                front: "What is an array in JavaScript?",
                back: "An array is an ordered list of values, known as elements. Each element has a numerical position known as its index. Arrays can hold values of any data type."
              },
              {
                front: "How do you add an element to the end of an array?",
                back: "Use the 'push()' method to add an element to the end of an array. Example: arr.push(element);"
              },
              {
                front: "How do you remove the last element from an array?",
                back: "Use the 'pop()' method to remove the last element from an array. Example: arr.pop();"
              },
              {
                front: "What does the 'slice()' method do?",
                back: "The 'slice()' method returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included). Example: arr.slice(1, 4);"
              },
              {
                front: "What does the 'splice()' method do?",
                back: "The 'splice()' method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. Example: arr.splice(2, 1, 'newElement');"
              }
            ]
          },
          {
            id: "js-objects",
            title: "Objects and Object-Oriented Programming",
            description: "Understanding objects and OOP in JavaScript",
            content: `
# Objects in JavaScript

Objects are collections of key-value pairs and are a fundamental data structure in JavaScript.

## Creating Objects
There are multiple ways to create objects:
- Object literals
- Constructor functions
- ES6 Classes
- Object.create()

## Properties and Methods
Objects can contain:
- Properties (data)
- Methods (functions)

## Object-Oriented Programming
JavaScript supports OOP through:
- Encapsulation
- Inheritance (prototypal)
- Polymorphism
            `,
            codeExamples: [
              {
                title: "Working with Objects",
                code: `// Object literal notation
const person = {
  name: "John",
  age: 30,
  isEmployed: true,
  greet: function() {
    return \`Hello, my name is \${this.name}\`;
  }
};

// Accessing properties
console.log(person.name); // "John"
console.log(person["age"]); // 30

// Adding new properties
person.email = "john@example.com";

// Calling methods
console.log(person.greet()); // "Hello, my name is John"`,
                explanation: "This example shows how to create objects using object literal notation, access properties, add new properties, and call methods."
              },
              {
                title: "Classes and Inheritance",
                code: `// ES6 Class
class Animal {
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    return \`\${this.name} makes a noise.\`;
  }
}

// Inheritance
class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
  
  speak() {
    return \`\${this.name} barks!\`;
  }
}

const rex = new Dog("Rex", "German Shepherd");
console.log(rex.speak()); // "Rex barks!"
console.log(rex.breed); // "German Shepherd"`,
                explanation: "This example demonstrates ES6 classes in JavaScript, including constructors, methods, and inheritance using the extends keyword."
              }
            ],
            quiz: [
              {
                question: "Which of the following correctly creates an object in JavaScript?",
                options: ["let obj = Object();", "let obj = {};", "let obj = new Array();", "let obj = object();"],
                correctAnswer: 1,
                explanation: "The object literal notation {} is the simplest way to create an object in JavaScript."
              },
              {
                question: "What is the output of the following code?\nclass Parent { constructor() { this.name = 'Parent'; } }\nclass Child extends Parent { constructor() { super(); } }\nconst obj = new Child();\nconsole.log(obj.name);",
                options: ["undefined", "Parent", "Child", "Error"],
                correctAnswer: 1,
                explanation: "The Child class extends Parent and calls super() in its constructor, which executes the Parent constructor setting name to 'Parent'."
              }
            ],
            flashcards: [
              {
                front: "What is an object in JavaScript?",
                back: "An object is a collection of related data and/or functionality, which usually consists of variables (properties) and functions (methods) that operate on those variables."
              },
              {
                front: "What is the 'this' keyword in JavaScript objects?",
                back: "The 'this' keyword refers to the object that a method belongs to. In a method, 'this' refers to the owner object, allowing access to other properties and methods within the same object."
              },
              {
                front: "What is prototype inheritance in JavaScript?",
                back: "Prototype inheritance is JavaScript's mechanism for sharing properties and methods between objects. Each object has a prototype object, which acts as a template object from which it inherits properties and methods."
              },
              {
                front: "What is the difference between object literal and constructor function?",
                back: "Object literals create a single object with defined properties, while constructor functions are templates for creating multiple similar objects with the same structure and methods."
              },
              {
                front: "What are getters and setters in JavaScript objects?",
                back: "Getters and setters are special methods that provide access to object properties. A getter retrieves a property value, and a setter changes a property value, allowing for validation or computation when accessing or modifying properties."
              }
            ]
          },
          {
            id: "js-dom",
            title: "DOM Manipulation",
            description: "Working with the Document Object Model in browsers",
            content: `
# DOM Manipulation

The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content.

## DOM Tree
- The DOM represents an HTML document as a tree of nodes
- Elements, attributes, and text are all nodes

## Selecting Elements
- getElementById()
- querySelector()
- querySelectorAll()
- getElementsByClassName()
- getElementsByTagName()

## Modifying Elements
- Changing content (textContent, innerHTML)
- Modifying attributes
- Changing styles
- Adding/removing classes

## Creating and Removing Elements
- createElement()
- appendChild()
- removeChild()
- insertBefore()
            `,
            codeExamples: [
              {
                title: "Selecting and Modifying Elements",
                code: `// Selecting elements
const heading = document.getElementById('main-heading');
const paragraphs = document.querySelectorAll('p');
const buttons = document.getElementsByClassName('btn');

// Modifying content
heading.textContent = 'New Heading';
heading.innerHTML = '<span>New</span> Heading';

// Changing attributes
const link = document.querySelector('a');
link.setAttribute('href', 'https://example.com');
link.id = 'main-link';

// Modifying styles
heading.style.color = 'blue';
heading.style.fontSize = '24px';

// Working with classes
heading.classList.add('highlight');
heading.classList.remove('old-class');
heading.classList.toggle('active');`,
                explanation: "This example shows how to select elements using various DOM methods, modify their content, change attributes, alter styles, and manipulate CSS classes."
              },
              {
                title: "Creating and Removing Elements",
                code: `// Creating elements
const newParagraph = document.createElement('p');
newParagraph.textContent = 'This is a new paragraph.';

// Adding the element to the DOM
const container = document.querySelector('.container');
container.appendChild(newParagraph);

// Creating multiple elements and adding them
const fruits = ['Apple', 'Banana', 'Cherry'];
const list = document.createElement('ul');

fruits.forEach(fruit => {
  const item = document.createElement('li');
  item.textContent = fruit;
  list.appendChild(item);
});

container.appendChild(list);

// Removing elements
const oldElement = document.querySelector('.outdated');
if (oldElement) {
  oldElement.parentNode.removeChild(oldElement);
  // Or using newer methods:
  // oldElement.remove();
}

// Replacing elements
const oldParagraph = document.querySelector('.old-paragraph');
const newElement = document.createElement('div');
newElement.textContent = 'I replaced the old paragraph!';

if (oldParagraph && oldParagraph.parentNode) {
  oldParagraph.parentNode.replaceChild(newElement, oldParagraph);
}`,
                explanation: "This example demonstrates how to create new DOM elements, add them to the document, remove existing elements, and replace elements."
              }
            ],
            quiz: [
              {
                question: "Which method returns a single element that matches a specified CSS selector?",
                options: ["document.querySelectorAll()", "document.getElementById()", "document.querySelector()", "document.getElementsByClassName()"],
                correctAnswer: 2,
                explanation: "document.querySelector() returns the first element that matches the specified CSS selector. If no matches are found, it returns null."
              },
              {
                question: "What is the difference between textContent and innerHTML?",
                options: [
                  "There is no difference, they do the same thing", 
                  "textContent sets only text, while innerHTML can include HTML markup",
                  "innerHTML is faster than textContent",
                  "textContent works with forms, while innerHTML doesn't"
                ],
                correctAnswer: 1,
                explanation: "textContent gets/sets the text content of an element without parsing HTML, while innerHTML gets/sets the HTML content, parsing and rendering any HTML tags."
              }
            ],
            flashcards: [
              {
                front: "What is the DOM?",
                back: "The Document Object Model (DOM) is a programming interface that represents web documents as a tree structure where each node is an object representing a part of the document, allowing programs to manipulate structure, style, and content."
              },
              {
                front: "What is the difference between element.querySelector() and document.querySelector()?",
                back: "document.querySelector() searches the entire document, while element.querySelector() only searches within the descendants of that specific element. Both return the first matching element."
              },
              {
                front: "How do you create a new element and add it to the DOM?",
                back: "1. Create the element: const el = document.createElement('div') \n2. Add content/attributes: el.textContent = 'Hello' \n3. Append to the DOM: parentElement.appendChild(el)"
              },
              {
                front: "What is event delegation?",
                back: "Event delegation is a technique where you attach an event listener to a parent element instead of individual child elements. It leverages event bubbling to handle events for multiple children with a single listener."
              },
              {
                front: "How do you prevent the default behavior of an event?",
                back: "Use the preventDefault() method on the event object: event.preventDefault(). For example, this can stop a form from submitting or a link from navigating when clicked."
              }
            ]
          },
          {
            id: "js-async",
            title: "Asynchronous JavaScript",
            description: "Working with promises, async/await, and handling asynchronous operations",
            content: `
# Asynchronous JavaScript

JavaScript is single-threaded, but asynchronous programming allows operations to continue while waiting for others to complete.

## Callback Functions
- Traditional way to handle asynchronous operations
- Can lead to "callback hell" with deeply nested callbacks

## Promises
- Object representing the eventual completion of an operation
- States: pending, fulfilled, rejected
- Methods: then(), catch(), finally()

## Async/Await
- Syntactic sugar over promises
- Makes async code look more like synchronous code
- Uses try/catch for error handling

## Fetch API
- Modern interface for making HTTP requests
- Returns promises
- Replaces older XMLHttpRequest
            `,
            codeExamples: [
              {
                title: "Promises and Fetch",
                code: `// Basic Promise
const myPromise = new Promise((resolve, reject) => {
  // Asynchronous operation
  const success = true;
  
  if (success) {
    resolve('Operation completed successfully!');
  } else {
    reject('Operation failed!');
  }
});

// Using the Promise
myPromise
  .then(result => {
    console.log(result);  // 'Operation completed successfully!'
  })
  .catch(error => {
    console.error(error);
  })
  .finally(() => {
    console.log('Promise completed, regardless of outcome');
  });

// Fetch API with Promises
fetch('https://api.example.com/data')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Fetch error:', error);
  });`,
                explanation: "This example demonstrates creating and using Promises in JavaScript, including handling success and failure. It also shows how to use the Fetch API to make HTTP requests, which returns promises."
              },
              {
                title: "Async/Await",
                code: `// Basic async function
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;  // Rethrow to allow caller to handle
  }
}

// Using async function
async function displayData() {
  try {
    const data = await fetchData();
    console.log('Data:', data);
  } catch (error) {
    console.error('Failed to display data:', error);
  }
}

// Call the function
displayData();

// Parallel async operations
async function fetchMultipleResources() {
  try {
    // Start both requests in parallel
    const userPromise = fetch('https://api.example.com/users');
    const postsPromise = fetch('https://api.example.com/posts');
    
    // Wait for both to complete
    const [userResponse, postsResponse] = await Promise.all([userPromise, postsPromise]);
    
    // Process responses
    const users = await userResponse.json();
    const posts = await postsResponse.json();
    
    return { users, posts };
  } catch (error) {
    console.error('Error fetching resources:', error);
    throw error;
  }
}`,
                explanation: "This example shows how to use async/await syntax, which makes asynchronous code look more synchronous and easier to understand. It demonstrates error handling with try/catch and shows how to perform parallel asynchronous operations with Promise.all()."
              }
            ],
            quiz: [
              {
                question: "What is a Promise in JavaScript?",
                options: [
                  "A function that may complete in the future",
                  "An object representing an eventual completion or failure of an asynchronous operation",
                  "A special type of callback function",
                  "A method to create synchronous code"
                ],
                correctAnswer: 1,
                explanation: "A Promise is an object representing the eventual completion (or failure) of an asynchronous operation and its resulting value."
              },
              {
                question: "What does 'await' keyword do in an async function?",
                options: [
                  "Terminates the function immediately",
                  "Pauses the function execution until the promise settles and returns its result",
                  "Creates a new promise",
                  "Catches errors in promises"
                ],
                correctAnswer: 1,
                explanation: "The 'await' keyword pauses the execution of an async function until a promise is settled (fulfilled or rejected) and returns the promise's result."
              }
            ],
            flashcards: [
              {
                front: "What is asynchronous programming?",
                back: "Asynchronous programming is a programming paradigm that allows operations to continue executing while waiting for other operations to complete. In JavaScript, this prevents blocking the main thread during time-consuming operations like API calls or file operations."
              },
              {
                front: "What are the three states of a Promise?",
                back: "1. Pending: Initial state, neither fulfilled nor rejected\n2. Fulfilled: Operation completed successfully\n3. Rejected: Operation failed"
              },
              {
                front: "What is the difference between .then() and .catch()?",
                back: ".then() is called when a promise is fulfilled and handles the successful result. .catch() is called when a promise is rejected and handles errors that occurred during the promise execution."
              },
              {
                front: "What is Promise chaining?",
                back: "Promise chaining is the practice of linking multiple .then() operations together, where each returns a promise, allowing sequential asynchronous operations. Each .then() receives the result of the previous promise."
              },
              {
                front: "What is the main advantage of using async/await over plain promises?",
                back: "Async/await makes asynchronous code look and behave more like synchronous code, which is often easier to read, understand, and debug. It allows using try/catch blocks for error handling instead of .catch() methods."
              }
            ]
          },
          {
            id: "js-modules",
            title: "JavaScript Modules",
            description: "Working with ES6 modules and modular code organization",
            content: `
# JavaScript Modules

Modules are a way to organize code into reusable, encapsulated pieces. ES6 introduced a standardized module system for JavaScript.

## Module Basics
- Each module has its own scope
- Variables, functions, and classes in a module are private by default
- Use 'export' to make items available outside the module
- Use 'import' to access items from other modules

## Export Types
- Named exports
- Default exports
- Re-exporting from other modules

## Module Benefits
- Code organization
- Encapsulation
- Dependency management
- Reusability
            `,
            codeExamples: [
              {
                title: "Exporting and Importing",
                code: `// math.js - Module with named exports
export const PI = 3.14159;

export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

// user.js - Module with default export
export default class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  
  getInfo() {
    return \`\${this.name} (\${this.email})\`;
  }
}

// utils.js - Mixed exports
export function formatDate(date) {
  return date.toLocaleDateString();
}

const VERSION = '1.0.0';
export default VERSION;

// main.js - Importing from modules
import { PI, add } from './math.js';
import User from './user.js';
import VERSION, { formatDate } from './utils.js';

console.log(PI);  // 3.14159
console.log(add(2, 3));  // 5

const user = new User('John', 'john@example.com');
console.log(user.getInfo());  // "John (john@example.com)"

console.log(VERSION);  // "1.0.0"
console.log(formatDate(new Date()));  // Current date in local format`,
                explanation: "This example demonstrates how to create modules with named exports, default exports, and a mix of both. It also shows how to import specific items or default exports from other modules."
              },
              {
                title: "Advanced Module Patterns",
                code: `// helpers.js - Multiple functions
export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function pluralize(word, count) {
  return count === 1 ? word : \`\${word}s\`;
}

// api.js - Module with internal state
let apiKey = null;

export function setApiKey(key) {
  apiKey = key;
}

export function fetchData(endpoint) {
  if (!apiKey) {
    throw new Error('API key not set! Call setApiKey first.');
  }
  
  // Actual implementation would use fetch with apiKey
  return fetch(\`https://api.example.com/\${endpoint}?key=\${apiKey}\`);
}

// index.js - Re-exporting from multiple modules
export { capitalize, pluralize } from './helpers.js';
export * from './api.js';

// app
