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
            description: "Working with arrays and mastering array manipulation methods",
            content: `
# Arrays in JavaScript

Arrays are ordered collections of values. In JavaScript, arrays can contain different types of values and are dynamic in size.

## Creating Arrays
\`\`\`javascript
// Array literal notation
let fruits = ["apple", "banana", "orange"];

// Array constructor
let numbers = new Array(1, 2, 3, 4, 5);

// Empty array
let empty = [];
\`\`\`

## Array Properties and Methods
JavaScript arrays have many built-in methods for manipulation and traversal:

- \`push()\`: Add items to the end
- \`pop()\`: Remove the last item
- \`shift()\`: Remove the first item
- \`unshift()\`: Add items to the beginning
- \`slice()\`: Extract a section
- \`splice()\`: Add/remove items
- \`forEach()\`: Loop through array
- \`map()\`: Create a new array with results
- \`filter()\`: Create a new array with filtered items
- \`reduce()\`: Reduce to a single value
            `,
            codeExamples: [
              {
                title: "Array Manipulation",
                code: `// Creating an array
let colors = ["red", "green", "blue"];
console.log(colors.length); // 3

// Adding elements
colors.push("yellow");
console.log(colors); // ["red", "green", "blue", "yellow"]

// Removing elements
let lastColor = colors.pop();
console.log(lastColor); // "yellow"
console.log(colors); // ["red", "green", "blue"]

// Access by index
console.log(colors[0]); // "red"
colors[1] = "purple";
console.log(colors); // ["red", "purple", "blue"]`,
                explanation: "This example shows basic array operations including creation, adding/removing elements, and accessing/modifying elements by index."
              },
              {
                title: "Array Methods",
                code: `const numbers = [1, 2, 3, 4, 5];

// forEach - execute a function on each element
numbers.forEach(number => {
  console.log(number * 2);
});

// map - create a new array with transformed values
const doubled = numbers.map(number => number * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// filter - create a new array with filtered elements
const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers); // [2, 4]

// reduce - accumulate values
const sum = numbers.reduce((total, number) => total + number, 0);
console.log(sum); // 15`,
                explanation: "This example demonstrates higher-order array methods like forEach, map, filter, and reduce, which are powerful tools for array manipulation and transformation."
              }
            ],
            quiz: [
              {
                question: "Which method adds one or more elements to the end of an array?",
                options: ["unshift()", "concat()", "push()", "append()"],
                correctAnswer: 2,
                explanation: "The push() method adds one or more elements to the end of an array and returns the new length of the array."
              },
              {
                question: "What will be the output of: [1, 2, 3].map(x => x * 2)?",
                options: ["[1, 2, 3]", "[2, 4, 6]", "[1, 4, 9]", "6"],
                correctAnswer: 1,
                explanation: "The map() method creates a new array with the results of calling a function on every element in the array. In this case, each element is multiplied by 2."
              }
            ],
            flashcards: [
              {
                front: "What is an array in JavaScript?",
                back: "An array is an ordered collection of values. Each value is called an element, and each element has a numeric position, known as its index."
              },
              {
                front: "What's the difference between map() and forEach()?",
                back: "map() creates a new array with the results of calling a function on every element, while forEach() simply executes a function on each element without returning anything."
              },
              {
                front: "How do you check if a value is an array?",
                back: "You can use Array.isArray(value), which returns true if the value is an array, otherwise false."
              },
              {
                front: "What does the filter() method do?",
                back: "The filter() method creates a new array with all elements that pass the test implemented by the provided function."
              },
              {
                front: "What is array destructuring?",
                back: "Array destructuring is a JavaScript syntax that allows you to unpack values from arrays, or properties from objects, into distinct variables."
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
              },
              {
                front: "What is a dictionary in Python?",
                back: "A dictionary is an unordered collection of key-value pairs. It's mutable, iterable, and doesn't allow duplicate keys. Dictionaries are defined with curly braces {} and colons : separating keys and values."
              },
              {
                front: "What are Python's numeric data types?",
                back: "Python has three numeric data types: int (integers), float (floating-point numbers), and complex (complex numbers with real and imaginary parts, like 1+2j)."
              }
            ]
          },
          {
            id: "py-control-flow",
            title: "Control Flow",
            description: "Understanding control flow in Python with conditionals and loops",
            content: `
# Control Flow in Python

Control flow allows you to execute certain pieces of code based on conditions or to repeat code multiple times.

## Conditional Statements
In Python, conditional statements are created using if, elif, and else:

\`\`\`python
# If statement
x = 10
if x > 5:
    print("x is greater than 5")

# If-else statement
y = 3
if y > 5:
    print("y is greater than 5")
else:
    print("y is not greater than 5")

# If-elif-else statement
z = 5
if z > 5:
    print("z is greater than 5")
elif z < 5:
    print("z is less than 5")
else:
    print("z is equal to 5")
\`\`\`

## Loops
Python provides two main types of loops:

### For Loops
Used for iterating over a sequence (list, tuple, string, etc.):

\`\`\`python
# Looping through a list
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)

# Using range function
for i in range(5):  # 0 to 4
    print(i)
\`\`\`

### While Loops
Execute a set of statements as long as a condition is true:

\`\`\`python
# Simple while loop
count = 0
while count < 5:
    print(count)
    count += 1
\`\`\`
            `,
            codeExamples: [
              {
                title: "Conditional Statements",
                code: `# Simple if-else
age = 20
if age >= 18:
    print("You are an adult")
else:
    print("You are a minor")

# Multiple conditions
score = 85
if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
elif score >= 60:
    grade = "D"
else:
    grade = "F"
print(f"Your grade is {grade}")

# Nested if statements
num = 15
if num > 0:
    if num % 2 == 0:
        print("Positive even number")
    else:
        print("Positive odd number")
else:
    print("Non-positive number")`,
                explanation: "This example demonstrates various forms of conditional statements in Python, including simple if-else, multiple conditions with elif, and nested if statements."
              },
              {
                title: "Loops",
                code: `# For loop with a list
colors = ["red", "green", "blue"]
for color in colors:
    print(f"Color: {color}")

# For loop with range
for i in range(1, 6):  # 1 to 5
    print(f"Number: {i}")

# While loop
counter = 5
while counter > 0:
    print(f"Countdown: {counter}")
    counter -= 1
print("Blast off!")

# Break and continue
for i in range(10):
    if i == 3:
        continue  # Skip 3
    if i == 7:
        break  # Stop at 7
    print(i)`,
                explanation: "This example shows how to work with for loops using lists and the range function, while loops, and control flow statements like break (exit the loop) and continue (skip to the next iteration)."
              }
            ],
            quiz: [
              {
                question: "What will be the output of this code?\n\nfor i in range(3, 7):\n    print(i)",
                options: ["3 4 5 6 7", "3 4 5 6", "4 5 6 7", "3 4 5"],
                correctAnswer: 1,
                explanation: "In Python, range(3, 7) generates numbers from 3 to 6 (inclusive of the start but exclusive of the end). So it prints 3, 4, 5, and 6."
              },
              {
                question: "Which statement is used to exit a loop prematurely?",
                options: ["exit", "break", "continue", "return"],
                correctAnswer: 1,
                explanation: "The 'break' statement is used to exit a loop prematurely. When encountered, it immediately terminates the loop and control passes to the statement following the loop."
              }
            ],
            flashcards: [
              {
                front: "What is the difference between 'break' and 'continue' in Python?",
                back: "'break' terminates the loop entirely and moves to the code after the loop. 'continue' skips the current iteration and moves to the next iteration of the loop."
              },
              {
                front: "What does the 'range()' function do?",
                back: "The range() function generates a sequence of numbers. It can take up to three arguments: start (default 0), stop (required), and step (default 1). It creates a sequence from start up to, but not including, stop, with the given step size."
              },
              {
                front: "How do you iterate through a list with its index in Python?",
                back: "You can use the enumerate() function, which adds a counter to an iterable: for index, value in enumerate(my_list): print(index, value)"
              },
              {
                front: "What is a ternary conditional operator in Python?",
                back: "A ternary conditional operator is a one-line shorthand for an if-else statement: value_if_true if condition else value_if_false"
              },
              {
                front: "What is the difference between 'elif' and 'else if'?",
                back: "In Python, 'elif' is the correct keyword for else-if conditions. 'else if' (as two separate words) is not valid Python syntax. 'elif' is more concise and is the standard way to chain conditions."
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
              },
              {
                front: "What is the JVM?",
                back: "JVM (Java Virtual Machine) is an abstract machine that provides a runtime environment in which Java bytecode can be executed. It enables Java's platform independence."
              },
              {
                front: "What is the difference between JDK and JRE?",
                back: "JDK (Java Development Kit) is for developers and includes development tools like compiler and debugger. JRE (Java Runtime Environment) is for users who want to run Java programs and includes the JVM and libraries."
              },
              {
                front: "What are access modifiers in Java?",
                back: "Access modifiers in Java control the visibility of classes, methods, and variables. They include public (accessible from anywhere), protected (accessible in the same package and subclasses), default/package-private (accessible only in the same package), and private (accessible only within the class)."
              },
              {
                front: "What is the difference between '==' and .equals() in Java?",
                back: "'==' compares object references (checks if both references point to the same object in memory), while .equals() compares the actual content/values of objects. For strings and other objects, use .equals() to compare content."
              }
            ]
          },
          {
            id: "java-variables",
            title: "Variables and Data Types",
            description: "Understanding variables, primitive types, and reference types in Java",
            content: `
# Variables and Data Types in Java

Java is a strongly-typed language, which means all variables must be declared with a specific data type.

## Primitive Data Types
Java has eight primitive data types:

1. **byte**: 8-bit signed integer (-128 to 127)
2. **short**: 16-bit signed integer (-32,768 to 32,767)
3. **int**: 32-bit signed integer (-2^31 to 2^31-1)
4. **long**: 64-bit signed integer (-2^63 to 2^63-1)
5. **float**: 32-bit floating point
6. **double**: 64-bit floating point
7. **boolean**: true or false
8. **char**: 16-bit Unicode character

## Reference Types
Reference types include:

1. **Classes**: User-defined types
2. **Interfaces**: Abstract types
3. **Arrays**: Collections of elements
4. **Strings**: Sequences of characters (technically a class)

## Variable Declaration and Initialization

```java
// Declaration
int age;
String name;

// Initialization
age = 25;
name = "John";

// Declaration and initialization together
double salary = 50000.0;
boolean isEmployed = true;
```
            `,
            codeExamples: [
              {
                title: "Primitive Types",
                code: `public class PrimitiveTypes {
    public static void main(String[] args) {
        // Integer types
        byte smallNumber = 127;
        short mediumNumber = 32767;
        int regularNumber = 2147483647;
        long largeNumber = 9223372036854775807L; // Note the 'L' suffix
        
        // Floating-point types
        float decimalNumber = 3.14f; // Note the 'f' suffix
        double preciseDecimal = 3.141592653589793;
        
        // Other primitives
        char singleCharacter = 'A';
        boolean isTrue = true;
        
        // Printing all values
        System.out.println("byte: " + smallNumber);
        System.out.println("short: " + mediumNumber);
        System.out.println("int: " + regularNumber);
        System.out.println("long: " + largeNumber);
        System.out.println("float: " + decimalNumber);
        System.out.println("double: " + preciseDecimal);
        System.out.println("char: " + singleCharacter);
        System.out.println("boolean: " + isTrue);
        
        // Type conversion (casting)
        int intValue = (int) largeNumber; // May lose precision
        System.out.println("int from long: " + intValue);
    }
}`,
                explanation: "This example demonstrates all the primitive data types in Java, their ranges, and how to declare and initialize them. It also shows type casting, which is converting one data type to another."
              },
              {
                title: "Reference Types",
                code: `public class ReferenceTypes {
    public static void main(String[] args) {
        // String (the most common reference type)
        String greeting = "Hello, World!";
        System.out.println(greeting);
        
        // Array (a collection of elements)
        int[] numbers = {1, 2, 3, 4, 5};
        System.out.println("First number: " + numbers[0]);
        
        // Object from a class
        Person person = new Person("Alice", 30);
        System.out.println(person.getName() + " is " + person.getAge() + " years old");
    }
}

class Person {
    private String name;
    private int age;
    
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    public String getName() {
        return name;
    }
    
    public int getAge() {
        return age;
    }
}`,
                explanation: "This example shows reference types in Java, including Strings, arrays, and custom objects. Unlike primitive types, reference types store references (memory addresses) to objects rather than the actual values."
              }
            ],
            quiz: [
              {
                question: "Which of the following is NOT a primitive data type in Java?",
                options: ["int", "double", "String", "boolean"],
                correctAnswer: 2,
                explanation: "String is not a primitive data type in Java. It's a class, making it a reference type. The primitive types are byte, short, int, long, float, double, char, and boolean."
              },
              {
                question: "What will happen if you try to assign 128 to a byte variable?",
                options: ["It will work fine", "Compilation error", "Runtime error", "It will wrap around to -128"],
                correctAnswer: 1,
                explanation: "A byte in Java can only hold values from -128 to 127. Trying to assign 128 directly to a byte variable will cause a compilation error because 128 is outside this range."
              }
            ],
            flashcards: [
              {
                front: "What is the difference between primitive and reference types in Java?",
                back: "Primitive types store actual values and are stored on the stack. Reference types store references (memory addresses) that point to objects on the heap. Primitive types include byte, short, int, long, float, double, char, and boolean. Reference types include classes, interfaces, arrays, and strings."
              },
              {
                front: "What is the default value of an uninitialized int variable as a class field?",
                back: "The default value is 0. Java automatically initializes class fields with default values if not explicitly initialized (0 for numeric types, false for boolean, null for reference types). However, local variables must be initialized before use."
              },
              {
                front: "What is the difference between float and double in Java?",
                back: "Both are floating-point data types, but float is a 32-bit single-precision type and double is a 64-bit double-precision type. Double has more precision and a larger range than float. Float literals require an 'f' suffix (e.g., 3.14f), while double is the default for decimal values."
              },
              {
                front: "What is type casting in Java?",
                back: "Type casting is converting one data type to another. Widening casts (smaller to larger type) happen automatically. Narrowing casts (larger to smaller type) must be done explicitly and may lose information. Example: double d = 5.0; int i = (int) d;"
              },
              {
                front: "How are strings stored in Java?",
                back: "Strings in Java are objects of the String class and are stored in a special memory area called the String Pool. Strings are immutable, meaning their values cannot be changed after creation. When you modify a string, a new string object is created."
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
                explanation: "This is a simple C# program that includes the iostream library, defines a main function (the entry point), and uses the cout object to print text to the console."
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
              },
              {
                front: "What is a namespace in C#?",
                back: "A namespace in C# is a container for classes and other namespaces. It helps organize code and provides a way to avoid name collisions. The 'using' directive allows you to use types from a namespace without specifying the fully qualified name."
              },
              {
                front: "What are properties in C#?",
                back: "Properties in C# are members that provide a flexible mechanism to read, write, or compute the value of a private field. They allow access to data while hiding implementation details."
              },
              {
                front: "What is the difference between value types and reference types in C#?",
                back: "Value types (struct, enum, and primitive types) directly contain their data and are stored on the stack. Reference types (class, interface, delegate, array) store a reference to their data, which is stored on the heap."
              },
              {
                front: "What are delegates in C#?",
                back: "Delegates in C# are type-safe function pointers that can reference methods with compatible signatures. They are used for implementing events and callback methods, and are the foundation for lambda expressions and LINQ."
              }
            ]
          },
          {
            id: "cs-data-types",
            title: "Data Types and Variables",
            description: "Understanding data types and variable declaration in C#",
            content: `
# Data Types and Variables in C#

C# is a strongly-typed language. Every variable and constant has a type, as does every expression that evaluates to a value.

## Value Types
C# provides a standard set of built-in numeric types:

* **Integer Types**: byte, sbyte, short, ushort, int, uint, long, ulong
* **Floating-Point Types**: float, double
* **Decimal Type**: decimal (higher precision than float or double)
* **Boolean Type**: bool (true or false)
* **Character Type**: char (a single Unicode character)

## Reference Types
* **String**: A sequence of characters (string)
* **Object**: The base class for all types (object)
* **Dynamic**: A type that bypasses compile-time type checking (dynamic)
* **Class Types**: User-defined types

## Variable Declaration

```csharp
// Declaring variables
int age;
string name;
bool isActive;

// Initializing variables
age = 25;
name = "John";
isActive = true;

// Declaration and initialization in one line
double salary = 50000.50;
char grade = 'A';
```
            `,
            codeExamples: [
              {
                title: "Working with Data Types",
                code: `using System;

class Program
{
    static void Main()
    {
        // Integer types
        byte smallNumber = 255;                 // 0 to 255
        int standardInteger = 2147483647;       // -2^31 to 2^31-1
        long largeInteger = 9223372036854775807L; // -2^63 to 2^63-1
        
        // Floating-point types
        float singlePrecision = 3.14f;          // Note the 'f' suffix
        double doublePrecision = 3.14159265359; // More precise
        decimal moneyValue = 1234.56m;          // Note the 'm' suffix
        
        // Boolean type
        bool isCorrect = true;
        
        // Character type
        char letter = 'A';
        
        // String type (reference type)
        string greeting = "Hello, C#!";
        
        // Displaying values
        Console.WriteLine($"byte: {smallNumber}");
        Console.WriteLine($"int: {standardInteger}");
        Console.WriteLine($"long: {largeInteger}");
        Console.WriteLine($"float: {singlePrecision}");
        Console.WriteLine($"double: {doublePrecision}");
        Console.WriteLine($"decimal: {moneyValue}");
        Console.WriteLine($"bool: {isCorrect}");
        Console.WriteLine($"char: {letter}");
        Console.WriteLine($"string: {greeting}");
        
        // Type conversion
        int intFromFloat = (int)singlePrecision;
        Console.WriteLine($"int from float: {intFromFloat}"); // Truncates to 3
        
        // Parse from string
        string numberAsString = "42";
        int parsedInt = int.Parse(numberAsString);
        Console.WriteLine($"Parsed int: {parsedInt}");
    }
}`,
                explanation: "This example demonstrates various data types in C#, including integer types, floating-point types, boolean, character, and string. It also shows type conversion through casting and parsing from strings."
              },
              {
                title: "Value vs Reference Types",
                code: `using System;

class Program
{
    static void Main()
    {
        // Value types
        int x = 10;
        int y = x; // y gets a copy of x's value
        y = 20;    // Changing y doesn't affect x
        
        Console.WriteLine($"x = {x}, y = {y}"); // x = 10, y = 20
        
        // Reference types
        int[] array1 = { 1, 2, 3 };
        int[] array2 = array1; // array2 references the same array as array1
        
        // Changing array2 affects array1 because they reference the same object
        array2[0] = 99;
        
        Console.WriteLine($"array1[0] = {array1[0]}, array2[0] = {array2[0]}"); // Both are 99
        
        // String behavior (immutable reference type)
        string str1 = "Hello";
        string str2 = str1;
        
        // This doesn't change str1 because strings are immutable
        // Instead, str2 gets a new string object
        str2 = "World";
        
        Console.WriteLine($"str1 = {str1}, str2 = {str2}"); // str1 = Hello, str2 = World
        
        // Using ref to pass value types by reference
        int a = 5;
        ModifyValue(ref a);
        Console.WriteLine($"After ModifyValue: a = {a}"); // a = 10
    }
    
    static void ModifyValue(ref int number)
    {
        number = number * 2; // Changes the original value
    }
}`,
                explanation: "This example demonstrates the difference between value types and reference types in C#. Value types contain the data directly and each variable has its own copy. Reference types store a reference to the data, so multiple variables can refer to the same object. The example also shows how to use the 'ref' keyword to pass value types by reference."
              }
            ],
            quiz: [
              {
                question: "Which of the following is a value type in C#?",
                options: ["string", "array", "class", "struct"],
                correctAnswer: 3,
                explanation: "A struct is a value type in C#, meaning it's stored directly on the stack. Strings, arrays, and classes are all reference types, which store a reference to data on the heap."
              },
              {
                question: "What is the correct suffix for decimal literals in C#?",
                options: ["d", "f", "m", "No suffix needed"],
                correctAnswer: 2,
                explanation: "The correct suffix for decimal literals in C# is 'm'. For example: decimal money = 125.50m; Float literals use 'f' (3.14f) and double literals don't require a suffix."
              }
            ],
            flashcards: [
              {
                front: "What is the difference between value types and reference types in C#?",
                back: "Value types (such as int, float, bool, struct) directly contain their data and are stored on the stack. Each variable has its own copy of the data. Reference types (such as string, array, class) store a reference to data on the heap, so multiple variables can reference the same object."
              },
              {
                front: "What is the 'var' keyword in C#?",
                back: "The 'var' keyword enables implicit typing, allowing the compiler to determine the variable's type from its initialization expression. The variable is still strongly typed, just inferred. Example: var name = \"John\"; (inferred as string)"
              },
              {
                front: "What is type conversion in C#?",
                back: "Type conversion is changing a value from one data type to another. Implicit conversions happen automatically when there's no data loss. Explicit conversions (casting) require a cast operator and may lose data. C# also offers methods like Convert.ToInt32() and int.Parse() for string conversions."
              },
              {
                front: "What is the 'nullable' type in C#?",
                back: "A nullable type can represent the normal range of values for its underlying type, plus an additional null value. This is useful when dealing with databases or other scenarios where values might be missing. Example: int? nullableInt = null;"
              },
              {
                front: "How are strings stored in C#?",
                back: "Strings in C# are immutable reference types. When you create a string, it's stored in a special area of memory called the heap. Once created, a string's value cannot be changed. Any operation that appears to modify a string actually creates a new string object."
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
              },
              {
                front: "What is a pointer in C++?",
                back: "A pointer in C++ is a variable that stores the memory address of another variable. Pointers provide direct memory access and are declared using the asterisk (*) symbol. They are powerful but require careful handling to avoid memory leaks and segmentation faults."
              },
              {
                front: "What is the difference between stack and heap memory in C++?",
                back: "In C++, stack memory is automatically managed and used for local variables (fast allocation but limited size). Heap memory is manually managed with new/delete operators and used for dynamic allocation (slower but larger size)."
              },
              {
                front: "What is a reference in C++?",
                back: "A reference in C++ is an alias for an existing variable. Unlike pointers, references cannot be null, must be initialized when declared, and cannot be reassigned to refer to a different variable after initialization."
              },
              {
                front: "What is the difference between 'new' and 'malloc' in C++?",
                back: "'new' is a C++ operator that allocates memory and calls constructors for objects, while 'malloc' is a C function that only allocates memory. 'new' returns the correct type, and 'malloc' returns void*. 'new' throws exceptions on failure, while 'malloc' returns NULL."
              }
            ]
          },
          {
            id: "cpp-variables",
            title: "Variables and Data Types",
            description: "Understanding variables and data types in C++",
            content: `
# Variables and Data Types in C++

C++ offers a rich set of built-in data types and allows programmers to create their own data types through structures, classes, and enumerations.

## Fundamental Data Types

C++ has several fundamental data types:

1. **Integer Types**:
   - \`int\`: The most common integer type
   - \`short\`: A shorter integer
   - \`long\`: A longer integer
   - \`long long\`: An even longer integer (C++11)

2. **Floating-Point Types**:
   - \`float\`: Single-precision floating point
   - \`double\`: Double-precision floating point
   - \`long double\`: Extended-precision floating point

3. **Character Types**:
   - \`char\`: Basic character type
   - \`wchar_t\`: Wide character type
   - \`char16_t\`, \`char32_t\`: Unicode character types (C++11)

4. **Boolean Type**:
   - \`bool\`: Can hold true or false

5. **Void Type**:
   - \`void\`: Represents the absence of type

## Type Modifiers

Types can be modified with:
- \`signed\` / \`unsigned\`: For integer types
- \`const\`: For making variables unchangeable

## Variable Declaration and Initialization

```cpp
// Declaration
int age;
double price;

// Initialization
age = 25;
price = 19.99;

// Declaration and initialization
char grade = 'A';
bool isActive = true;

// C++11 uniform initialization
int count{10};
float pi{3.14f};
```
            `,
            codeExamples: [
              {
                title: "Basic Data Types",
                code: `#include <iostream>
using namespace std;

int main() {
    // Integer types
    int regularInt = 42;
    short smallInt = 32767;
    long bigInt = 2147483647L;
    long long veryBigInt = 9223372036854775807LL;
    
    // Unsigned integer (non-negative only)
    unsigned int positiveOnly = 4294967295U;
    
    // Floating-point types
    float simpleFloat = 3.14f;       // Note the 'f' suffix
    double preciseDouble = 3.141592653589793;
    
    // Character types
    char singleChar = 'A';
    wchar_t wideChar = L'Ω';         // Note the L prefix
    
    // Boolean type
    bool isTrue = true;
    bool isFalse = false;
    
    // Output values
    cout << "int: " << regularInt << endl;
    cout << "short: " << smallInt << endl;
    cout << "long: " << bigInt << endl;
    cout << "long long: " << veryBigInt << endl;
    cout << "unsigned int: " << positiveOnly << endl;
    cout << "float: " << simpleFloat << endl;
    cout << "double: " << preciseDouble << endl;
    cout << "char: " << singleChar << endl;
    cout << "bool (true): " << isTrue << endl;
    cout << "bool (false): " << isFalse << endl;
    
    // Type sizes
    cout << "Size of int: " << sizeof(int) << " bytes" << endl;
    cout << "Size of double: " << sizeof(double) << " bytes" << endl;
    
    return 0;
}`,
                explanation: "This example demonstrates the basic data types in C++, including integers, floating-point numbers, characters, and booleans. It also shows how to declare and initialize variables of different types and how to check their memory sizes using the sizeof operator."
              },
              {
                title: "Type Conversions and Constants",
                code: `#include <iostream>
using namespace std;

int main() {
    // Implicit type conversion
    int intValue = 42;
    double doubleValue = intValue;    // int to double (safe)
    cout << "Double from int: " << doubleValue << endl;
    
    // Explicit type conversion (casting)
    double pi = 3.14159;
    int roundedPi = static_cast<int>(pi);   // Truncates to 3
    cout << "Int from double: " << roundedPi << endl;
    
    // Constants
    const double gravity = 9.81;      // Cannot be changed
    // gravity = 10.0;                // Error: assignment of read-only variable
    
    // Auto keyword (type inference, C++11)
    auto autoInt = 42;                // Deduced as int
    auto autoDouble = 3.14;           // Deduced as double
    auto autoChar = 'X';              // Deduced as char
    
    cout << "Auto int: " << autoInt << endl;
    cout << "Auto double: " << autoDouble << endl;
    cout << "Auto char: " << autoChar << endl;
    
    // Type aliases
    typedef unsigned long ulong;      // Traditional way
    using uint = unsigned int;        // Modern way (C++11)
    
    ulong bigNumber = 1234567890UL;
    uint positiveNum = 42U;
    
    cout << "ulong: " << bigNumber << endl;
    cout << "uint: " << positiveNum << endl;
    
    return 0;
}`,
                explanation: "This example shows how to perform type conversions in C++, both implicit (automatic) and explicit (using static_cast). It also demonstrates constants (using the const keyword), type inference (using auto), and type aliases (using typedef and using)."
              }
            ],
            quiz: [
              {
                question: "What is the output of the following code?\n\nint x = 5;\ndouble y = 2.0;\nint z = x / y;\nstd::cout << z;",
                options: ["2.5", "2", "3", "Compilation error"],
                correctAnswer: 3,
                explanation: "This will cause a compilation error. In C++, you cannot directly assign a double (result of x / y) to an int without an explicit cast. The operation x / y produces a double, and the compiler catches the type mismatch."
              },
              {
                question: "Which of the following correctly declares a constant integer in C++?",
                options: ["int constant x = 10;", "constant int x = 10;", "const int x = 10;", "int x = const 10;"],
                correctAnswer: 2,
                explanation: "The correct way to declare a constant integer in C++ is 'const int x = 10;'. The const keyword precedes the type and indicates that the variable's value cannot be changed after initialization."
              }
            ],
            flashcards: [
              {
                front: "What is the difference between float and double in C++?",
                back: "Both are floating-point data types, but they differ in precision and memory usage. float typically uses 4 bytes (32 bits) with about 7 decimal digits of precision, while double uses 8 bytes (64 bits) with about 15 decimal digits of precision. Double is more precise but uses more memory."
              },
              {
                front: "What is the 'auto' keyword in C++?",
                back: "The 'auto' keyword, introduced in C++11, enables type inference. It allows the compiler to automatically deduce the type of a variable from its initializer. For example, 'auto x = 5;' will make x an int. This makes code more concise and adaptable to type changes."
              },
              {
                front: "What is a reference in C++?",
                back: "A reference in C++ is an alias for an existing variable. Once initialized, a reference cannot be changed to refer to another variable. References are declared using the & symbol: 'int& ref = original;'. They're commonly used for function parameters to avoid copying large objects."
              },
              {
                front: "What is the difference between 'const int* p', 'int* const p', and 'const int* const p'?",
                back: "'const int* p' means p points to a constant integer (the integer cannot be modified through p). 'int* const p' means p is a constant pointer (p cannot be changed to point elsewhere). 'const int* const p' means p is a constant pointer to a constant integer (neither can be changed)."
              },
              {
                front: "What does 'nullptr' represent in C++?",
                back: "'nullptr' is a keyword introduced in C++11 to represent a null pointer. It's a type-safe alternative to NULL or 0 when representing a null pointer. Unlike NULL (which is typically defined as 0), nullptr has its own type (std::nullptr_t) which prevents it from being implicitly converted to integer types."
              }
            ]
          }
        ]
      }
    ]
  }
];
