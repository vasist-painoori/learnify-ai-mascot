
import { Topic } from '../../types';

export const dataTypesTopic: Topic = {
  id: "js-data-types",
  title: "JavaScript Data Types",
  description: "Learn about the different data types in JavaScript",
  content: `
# JavaScript Data Types

JavaScript has several built-in data types:

## Primitive Data Types
- **String**: Represents textual data: "Hello", 'World', \`Template literal\`
- **Number**: Represents numeric values: 123, 3.14, -10
- **Boolean**: Represents logical values: true or false
- **Undefined**: Represents a variable that has been declared but not assigned a value
- **Null**: Represents the intentional absence of any object value
- **Symbol** (ES6): Represents a unique identifier
- **BigInt** (ES2020): Represents integers larger than the Number type can handle

## Reference Data Types
- **Object**: Represents a collection of related data
- **Array**: Special type of object for storing ordered collections
- **Function**: A callable object
- **Date**: Represents dates and times
- **RegExp**: For pattern matching within strings
- **Map, Set, WeakMap, WeakSet** (ES6): Collections with various properties and behaviors
  `,
  codeExamples: [
    {
      title: "Working with Data Types",
      code: `// Primitive types
let name = "John";               // String
let age = 30;                    // Number
let isStudent = true;            // Boolean
let job = undefined;             // Undefined
let salary = null;               // Null
let id = Symbol('id');           // Symbol
let bigNumber = 9007199254740991n; // BigInt

// Reference types
let person = {                   // Object
  firstName: "Jane",
  lastName: "Doe"
};

let colors = ["red", "green", "blue"]; // Array

// Checking types
console.log(typeof name);        // "string"
console.log(typeof age);         // "number"
console.log(typeof isStudent);   // "boolean"
console.log(typeof job);         // "undefined"
console.log(typeof salary);      // "object" (this is a known quirk)
console.log(typeof id);          // "symbol"
console.log(typeof bigNumber);   // "bigint"
console.log(typeof person);      // "object"
console.log(typeof colors);      // "object"
console.log(Array.isArray(colors)); // true`,
      explanation: "This example demonstrates the various data types in JavaScript and how to check the type of a variable using the typeof operator."
    }
  ],
  quiz: [
    {
      question: "What will typeof null return in JavaScript?",
      options: ["null", "undefined", "object", "None of the above"],
      correctAnswer: 2,
      explanation: "typeof null returns 'object', which is considered a bug in JavaScript. Historically, this was never fixed for backward compatibility reasons."
    },
    {
      question: "Which of these is a primitive data type in JavaScript?",
      options: ["Array", "Object", "Function", "Symbol"],
      correctAnswer: 3,
      explanation: "Symbol is a primitive data type introduced in ES6. Arrays, Objects, and Functions are reference types."
    }
  ],
  flashcards: [
    {
      front: "What are the seven primitive data types in JavaScript?",
      back: "String, Number, Boolean, Undefined, Null, Symbol, and BigInt"
    },
    {
      front: "What is the difference between null and undefined?",
      back: "undefined means a variable has been declared but not assigned a value. null is an assignment value that represents the intentional absence of any object value."
    }
  ]
};
