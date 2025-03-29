
import { Topic } from '../../types';

export const variablesTopic: Topic = {
  id: "js-variables",
  title: "JavaScript Variables",
  description: "Learn how to declare and use variables in JavaScript",
  content: `
# JavaScript Variables

Variables are containers for storing data values. In JavaScript, there are three ways to declare variables:

## var
- Traditionally used in JavaScript before ES6
- Function scoped or globally scoped
- Can be redeclared and updated

## let (ES6)
- Block scoped (only available within the block they are defined)
- Can be updated but not redeclared in the same scope
- Preferred for variable declarations where the value will change

## const (ES6)
- Block scoped
- Cannot be updated or redeclared
- Used for values that should remain constant
- Note: for objects and arrays, the properties/elements can still be modified
  `,
  codeExamples: [
    {
      title: "Variable Declaration",
      code: `// Using var
var name = "John";
var age = 30;
var isStudent = true;

// Using let
let city = "New York";
city = "Boston"; // This is allowed

// Using const
const PI = 3.14159;
// PI = 3.14; // This would throw an error

// Object with const
const person = {
  name: "Alice",
  age: 25
};
person.age = 26; // This is allowed (changing property)
// person = {}; // This would throw an error (reassigning)`,
      explanation: "This example shows the different ways to declare variables in JavaScript and the differences between var, let, and const."
    }
  ],
  quiz: [
    {
      question: "Which statement about 'const' is true?",
      options: [
        "const variables can be reassigned new values",
        "const variables cannot have their properties modified",
        "const variables cannot be redeclared in the same scope",
        "const variables are function-scoped"
      ],
      correctAnswer: 2,
      explanation: "const variables cannot be redeclared in the same scope or reassigned, but for objects and arrays, their properties or elements can still be modified."
    }
  ],
  flashcards: [
    {
      front: "What is the difference between 'let' and 'var'?",
      back: "'let' is block-scoped while 'var' is function-scoped or globally-scoped. Also, 'let' cannot be redeclared in the same scope."
    },
    {
      front: "Can you change the properties of an object declared with 'const'?",
      back: "Yes, you can modify the properties of an object declared with 'const', but you cannot reassign the variable to a new object."
    }
  ]
};
