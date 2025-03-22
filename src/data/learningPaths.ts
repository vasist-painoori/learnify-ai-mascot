
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

There are several ways to define functions in JavaScript:

1. **Function Declarations**:
   \`\`\`javascript
   function greet(name) {
     return "Hello, " + name + "!";
   }
   \`\`\`

2. **Function Expressions**:
   \`\`\`javascript
   const greet = function(name) {
     return "Hello, " + name + "!";
   };
   \`\`\`

3. **Arrow Functions (ES6+)**:
   \`\`\`javascript
   const greet = (name) => {
     return "Hello, " + name + "!";
   };
   // Or simplified for single expressions:
   const greet = name => "Hello, " + name + "!";
   \`\`\`

Functions can take parameters (inputs) and return values, making them versatile for various tasks in your programs.
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
              }
            ]
          }
        ]
      },
      {
        id: "js-intermediate",
        title: "Intermediate JavaScript",
        description: "Advance your JavaScript skills with more complex concepts",
        topics: [
          {
            id: "js-objects",
            title: "Objects and Object-Oriented Programming",
            description: "Working with objects and implementing OOP concepts in JavaScript",
            content: `
# Objects in JavaScript

Objects are collections of related data and functionality, stored as key-value pairs. They are one of the fundamental data structures in JavaScript and are used to represent real-world entities.

## Creating Objects

There are multiple ways to create objects:

1. **Object Literals**:
   \`\`\`javascript
   const person = {
     name: "John",
     age: 30,
     greet: function() {
       return "Hello, my name is " + this.name;
     }
   };
   \`\`\`

2. **Constructor Functions**:
   \`\`\`javascript
   function Person(name, age) {
     this.name = name;
     this.age = age;
     this.greet = function() {
       return "Hello, my name is " + this.name;
     };
   }
   const john = new Person("John", 30);
   \`\`\`

3. **ES6 Classes**:
   \`\`\`javascript
   class Person {
     constructor(name, age) {
       this.name = name;
       this.age = age;
     }
     
     greet() {
       return "Hello, my name is " + this.name;
     }
   }
   const john = new Person("John", 30);
   \`\`\`

## Object-Oriented Programming (OOP) in JavaScript

JavaScript supports object-oriented programming with concepts like:

- **Encapsulation**: Bundling data and methods that work on that data
- **Inheritance**: Creating new classes based on existing ones
- **Polymorphism**: Objects of different types responding to the same method name
            `,
            codeExamples: [
              {
                title: "Creating and Using Objects",
                code: `// Object literal
const car = {
  make: "Toyota",
  model: "Corolla",
  year: 2020,
  isRunning: false,
  start: function() {
    this.isRunning = true;
    return \`The \${this.make} \${this.model} is now running.\`;
  },
  stop: function() {
    this.isRunning = false;
    return \`The \${this.make} \${this.model} is now stopped.\`;
  }
};

// Accessing object properties
console.log(car.make); // "Toyota"
console.log(car["model"]); // "Corolla"

// Using object methods
console.log(car.start()); // "The Toyota Corolla is now running."
console.log(car.isRunning); // true
console.log(car.stop()); // "The Toyota Corolla is now stopped."`,
                explanation: "This example demonstrates creating an object using the object literal syntax, accessing its properties using dot notation and bracket notation, and calling its methods."
              },
              {
                title: "Classes and Inheritance",
                code: `// Parent class
class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.isRunning = false;
  }
  
  start() {
    this.isRunning = true;
    return \`The \${this.make} \${this.model} is now running.\`;
  }
  
  stop() {
    this.isRunning = false;
    return \`The \${this.make} \${this.model} is now stopped.\`;
  }
  
  getInfo() {
    return \`\${this.year} \${this.make} \${this.model}\`;
  }
}

// Child class
class Car extends Vehicle {
  constructor(make, model, year, doors) {
    super(make, model, year);
    this.doors = doors;
  }
  
  getInfo() {
    return \`\${super.getInfo()}, \${this.doors} doors\`;
  }
}

// Create instances
const myVehicle = new Vehicle("Generic", "Vehicle", 2022);
const myCar = new Car("Toyota", "Corolla", 2020, 4);

console.log(myVehicle.getInfo()); // "2022 Generic Vehicle"
console.log(myCar.getInfo()); // "2020 Toyota Corolla, 4 doors"
console.log(myCar.start()); // "The Toyota Corolla is now running."`,
                explanation: "This example shows how to use ES6 classes to implement object-oriented programming in JavaScript, including inheritance and method overriding."
              }
            ],
            quiz: [
              {
                question: "What will be the output of the following code?\n\nconst obj = {name: 'John'};\nconst copy = obj;\ncopy.name = 'Jane';\nconsole.log(obj.name);",
                options: ["John", "Jane", "undefined", "null"],
                correctAnswer: 1,
                explanation: "Objects are passed by reference in JavaScript. When you assign obj to copy, both variables reference the same object. Changing a property through one variable affects the object accessible through both variables."
              },
              {
                question: "Which of the following is NOT a valid way to create an object in JavaScript?",
                options: [
                  "const obj = new Object();",
                  "const obj = {};",
                  "const obj = Object.create(null);",
                  "const obj = Object.make();"
                ],
                correctAnswer: 3,
                explanation: "Object.make() is not a valid JavaScript method. The other three options are all valid ways to create objects."
              }
            ],
            flashcards: [
              {
                front: "What is an object in JavaScript?",
                back: "An object is a collection of related data and/or functionality, stored as key-value pairs. Each key is a property name, and each value can be any valid JavaScript data type, including functions (which become methods)."
              },
              {
                front: "What is the 'this' keyword in JavaScript?",
                back: "The 'this' keyword refers to the object that is executing the current function. Its value depends on how the function is called. In methods, 'this' refers to the owner object. In regular functions, 'this' typically refers to the global object (or undefined in strict mode)."
              },
              {
                front: "What is inheritance in JavaScript?",
                back: "Inheritance is an OOP concept where a new class (child) can be based on an existing class (parent), inheriting its properties and methods. In JavaScript, this can be achieved using prototypes or, more commonly now, using the 'extends' keyword with ES6 classes."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    languageId: "python",
    modules: [
      {
        id: "py-basics",
        title: "Python Fundamentals",
        description: "Learn the core concepts of Python programming",
        topics: [
          {
            id: "py-variables",
            title: "Variables and Data Types",
            description: "Understanding how to store and manipulate data in Python",
            content: `
# Variables and Data Types in Python

In Python, variables are created when you assign a value to them. Python is dynamically typed, meaning you don't need to declare the type of a variable.

## Basic Data Types

Python has several basic data types:

1. **Numeric Types**:
   - **int**: Integer numbers, e.g., \`42\`
   - **float**: Floating-point numbers, e.g., \`3.14\`
   - **complex**: Complex numbers, e.g., \`1+2j\`

2. **Sequence Types**:
   - **str**: Strings, e.g., \`"Hello World"\`
   - **list**: Ordered, mutable collections, e.g., \`[1, 2, 3]\`
   - **tuple**: Ordered, immutable collections, e.g., \`(1, 2, 3)\`

3. **Mapping Type**:
   - **dict**: Key-value pairs, e.g., \`{"name": "John", "age": 30}\`

4. **Set Types**:
   - **set**: Unordered collection of unique elements, e.g., \`{1, 2, 3}\`
   - **frozenset**: Immutable version of set

5. **Boolean Type**:
   - **bool**: \`True\` or \`False\`

6. **None Type**:
   - **NoneType**: The \`None\` object, representing absence of a value

## Variable Naming Rules

- Must start with a letter or underscore
- Can contain letters, numbers, and underscores
- Case-sensitive (\`name\` and \`Name\` are different variables)
- Cannot use Python keywords (e.g., \`if\`, \`for\`, \`while\`)
            `,
            codeExamples: [
              {
                title: "Working with Variables",
                code: `# Basic variable assignment
name = "Alice"
age = 30
is_student = True
height = 5.8

# Multiple assignment
x, y, z = 1, 2, 3

# Output variables
print("Name:", name)  # Name: Alice
print("Age:", age)    # Age: 30

# Type checking
print(type(name))     # <class 'str'>
print(type(age))      # <class 'int'>
print(type(height))   # <class 'float'>
print(type(is_student))  # <class 'bool'>

# Type conversion
str_age = str(age)    # Convert integer to string
int_value = int("42") # Convert string to integer
float_value = float("3.14")  # Convert string to float

print(type(str_age))  # <class 'str'>
print(int_value + 8)  # 50`,
                explanation: "This example demonstrates basic variable assignment, multiple assignment, checking types with the type() function, and type conversion in Python."
              },
              {
                title: "Data Structures",
                code: `# Lists - ordered, mutable
fruits = ["apple", "banana", "cherry"]
fruits.append("orange")
print(fruits)  # ['apple', 'banana', 'cherry', 'orange']
print(fruits[1])  # banana

# Tuples - ordered, immutable
coordinates = (10, 20)
# coordinates[0] = 5  # This would cause an error
print(coordinates[0])  # 10

# Dictionaries - key-value pairs
person = {
    "name": "John",
    "age": 30,
    "city": "New York"
}
person["email"] = "john@example.com"  # Add new key-value pair
print(person["name"])  # John
print(person.get("phone", "Not available"))  # Not available

# Sets - unordered, unique elements
numbers = {1, 2, 3, 2, 4}
print(numbers)  # {1, 2, 3, 4} (duplicates removed)
numbers.add(5)
print(numbers)  # {1, 2, 3, 4, 5}`,
                explanation: "This example shows how to work with Python's main data structures: lists, tuples, dictionaries, and sets."
              }
            ],
            quiz: [
              {
                question: "What will be the output of the following code?\n\nx = 5\ny = '5'\nprint(x + int(y))",
                options: ["10", "55", "5 + 5", "Error"],
                correctAnswer: 0,
                explanation: "The code first converts the string '5' to an integer using int(y), which results in 5. Then it adds this to x (which is 5), resulting in 10."
              },
              {
                question: "Which of the following is NOT a mutable data type in Python?",
                options: ["list", "dictionary", "set", "tuple"],
                correctAnswer: 3,
                explanation: "Tuples are immutable in Python, meaning once created, their elements cannot be changed. Lists, dictionaries, and sets are all mutable data types."
              }
            ],
            flashcards: [
              {
                front: "What is a variable in Python?",
                back: "A variable in Python is a named location in memory that stores a value. Variables are created when they are first assigned a value and do not need to be declared with any particular type."
              },
              {
                front: "What's the difference between a list and a tuple in Python?",
                back: "Both lists and tuples are ordered collections of items, but lists are mutable (can be changed after creation) while tuples are immutable (cannot be changed after creation). Lists use square brackets [] and tuples use parentheses ()."
              },
              {
                front: "What is type conversion in Python?",
                back: "Type conversion (or type casting) is the process of converting data from one type to another. Python provides built-in functions for this, such as int(), float(), str(), list(), tuple(), set(), and dict()."
              }
            ]
          }
        ]
      }
    ]
  }
];
