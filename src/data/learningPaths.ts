
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
              }
            ],
            quiz: [
              {
                question: "What will be the output of the following code?\n\nx = 5\ny = '5'\nprint(x + int(y))",
                options: ["10", "55", "5 + 5", "Error"],
                correctAnswer: 0,
                explanation: "The code first converts the string '5' to an integer using int(y), which results in 5. Then it adds this to x (which is 5), resulting in 10."
              }
            ],
            flashcards: [
              {
                front: "What is a variable in Python?",
                back: "A variable in Python is a named location in memory that stores a value. Variables are created when they are first assigned a value and do not need to be declared with any particular type."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    languageId: "java",
    modules: [
      {
        id: "java-basics",
        title: "Java Fundamentals",
        description: "Learn the core concepts of Java programming",
        topics: [
          {
            id: "java-intro",
            title: "Introduction to Java",
            description: "Understanding the basics of Java programming",
            content: `
# Introduction to Java

Java is a class-based, object-oriented programming language designed to have as few implementation dependencies as possible.
            `,
            codeExamples: [
              {
                title: "Hello World in Java",
                code: `public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`,
                explanation: "This is the traditional first program in Java. The public class HelloWorld contains the main method, which is the entry point of any Java application."
              }
            ],
            quiz: [
              {
                question: "Which of the following is NOT a feature of Java?",
                options: ["Platform Independence", "Automatic Memory Management", "Multiple Inheritance of Classes", "Object-Oriented"],
                correctAnswer: 2,
                explanation: "Java does not support multiple inheritance of classes to avoid the 'diamond problem'. However, it does support multiple inheritance of interfaces."
              }
            ],
            flashcards: [
              {
                front: "What is Java?",
                back: "Java is a high-level, class-based, object-oriented programming language designed to have as few implementation dependencies as possible. It follows the 'write once, run anywhere' principle."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    languageId: "csharp",
    modules: [
      {
        id: "cs-basics",
        title: "C# Fundamentals",
        description: "Learn the core concepts of C# programming",
        topics: [
          {
            id: "cs-intro",
            title: "Introduction to C#",
            description: "Understanding the basics of C# programming",
            content: `
# Introduction to C#

C# is a modern, object-oriented programming language developed by Microsoft as part of the .NET platform.
            `,
            codeExamples: [
              {
                title: "Hello World in C#",
                code: `using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Hello, World!");
    }
}`,
                explanation: "This is a simple C# program that includes the System namespace, defines a main function (the entry point), and uses the Console.WriteLine method to print text to the console."
              }
            ],
            quiz: [
              {
                question: "Which company developed C#?",
                options: ["Apple", "Google", "Microsoft", "Oracle"],
                correctAnswer: 2,
                explanation: "C# was developed by Microsoft as part of its .NET initiative and was designed by Anders Hejlsberg."
              }
            ],
            flashcards: [
              {
                front: "What is C#?",
                back: "C# (pronounced 'C sharp') is a modern, object-oriented programming language developed by Microsoft as part of its .NET platform. It was designed to be simple, powerful, type-safe, and object-oriented."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    languageId: "cpp",
    modules: [
      {
        id: "cpp-basics",
        title: "C++ Fundamentals",
        description: "Learn the core concepts of C++ programming",
        topics: [
          {
            id: "cpp-intro",
            title: "Introduction to C++",
            description: "Understanding the basics of C++ programming",
            content: `
# Introduction to C++

C++ is a powerful general-purpose programming language that extends the C language with features like classes, objects, and exceptions.
            `,
            codeExamples: [
              {
                title: "Hello World in C++",
                code: `#include <iostream>

int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}`,
                explanation: "This is a basic C++ program that includes the iostream library, defines a main function (the entry point), and uses the cout object to print text to the console."
              }
            ],
            quiz: [
              {
                question: "Which programming paradigm does C++ support?",
                options: ["Only procedural", "Only object-oriented", "Only functional", "Multiple paradigms including procedural, object-oriented, and generic"],
                correctAnswer: 3,
                explanation: "C++ supports multiple programming paradigms, including procedural, object-oriented, functional, and generic programming. This flexibility makes it a versatile language for different types of applications."
              }
            ],
            flashcards: [
              {
                front: "What is C++?",
                back: "C++ is a general-purpose programming language created as an extension of the C language. It adds features like classes, objects, inheritance, polymorphism, templates, and exception handling. It's used for systems programming, game development, and applications requiring performance and control."
              }
            ]
          }
        ]
      }
    ]
  }
];
