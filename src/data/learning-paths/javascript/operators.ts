
import { Topic } from '../../types';

export const operatorsTopic: Topic = {
  id: "js-operators",
  title: "JavaScript Operators",
  description: "Learn about the various operators in JavaScript",
  content: `
# JavaScript Operators

Operators are used to perform operations on variables and values.

## Arithmetic Operators
- \`+\` Addition
- \`-\` Subtraction
- \`*\` Multiplication
- \`/\` Division
- \`%\` Modulus (Remainder)
- \`++\` Increment
- \`--\` Decrement
- \`**\` Exponentiation (ES2016)

## Assignment Operators
- \`=\` Assignment
- \`+=\` Addition assignment
- \`-=\` Subtraction assignment
- \`*=\` Multiplication assignment
- \`/=\` Division assignment
- \`%=\` Modulus assignment

## Comparison Operators
- \`==\` Equal to (value)
- \`===\` Equal value and type
- \`!=\` Not equal to (value)
- \`!==\` Not equal value or type
- \`>\` Greater than
- \`<\` Less than
- \`>=\` Greater than or equal to
- \`<=\` Less than or equal to

## Logical Operators
- \`&&\` Logical AND
- \`||\` Logical OR
- \`!\` Logical NOT
- \`??\` Nullish coalescing (ES2020)

## Bitwise Operators
- \`&\` Bitwise AND
- \`|\` Bitwise OR
- \`^\` Bitwise XOR
- \`~\` Bitwise NOT
- \`<<\` Left shift
- \`>>\` Right shift
- \`>>>\` Unsigned right shift
  `,
  codeExamples: [
    {
      title: "Using Operators",
      code: `// Arithmetic operators
let sum = 5 + 3;          // 8
let difference = 10 - 4;  // 6
let product = 7 * 2;      // 14
let quotient = 20 / 5;    // 4
let remainder = 10 % 3;   // 1
let exponent = 2 ** 3;    // 8 (2³)

// Increment and decrement
let x = 5;
x++;                      // x is now 6
let y = 10;
y--;                      // y is now 9

// Assignment operators
let a = 10;
a += 5;                   // a is now 15 (same as a = a + 5)

// Comparison operators
console.log(5 == "5");    // true (equal value)
console.log(5 === "5");   // false (different type)
console.log(10 != 5);     // true
console.log(10 > 5);      // true

// Logical operators
console.log(true && false); // false
console.log(true || false); // true
console.log(!true);        // false

// Nullish coalescing
let name = null;
let displayName = name ?? "Anonymous"; // "Anonymous"`,
      explanation: "This example demonstrates the different types of operators in JavaScript and how they are used."
    }
  ],
  quiz: [
    {
      question: "What is the result of 5 + '5' in JavaScript?",
      options: ["10", "'55'", "Error", "undefined"],
      correctAnswer: 1,
      explanation: "In JavaScript, when you add a number and a string, the number is converted to a string and concatenated, resulting in '55'."
    },
    {
      question: "What is the difference between == and === in JavaScript?",
      options: [
        "They are the same",
        "== compares values while === compares both values and types",
        "=== compares values while == compares both values and types",
        "== is used for assignment, === is used for comparison"
      ],
      correctAnswer: 1,
      explanation: "== (loose equality) compares values after converting types if necessary, while === (strict equality) compares both values and types without conversion."
    }
  ],
  flashcards: [
    {
      front: "What does the nullish coalescing operator (??) do?",
      back: "It returns the right-hand operand when the left-hand operand is null or undefined, and otherwise returns the left-hand operand."
    },
    {
      front: "What is the result of '5' - 2 in JavaScript?",
      back: "3 (The string '5' is converted to a number for the subtraction operation)"
    }
  ]
};
