
import { Topic } from '../../types';

export const functionsTopic: Topic = {
  id: "typescript-functions",
  title: "Functions",
  description: "Learn how to define and use functions in TypeScript",
  content: `
# Functions in TypeScript

Functions are the fundamental building block of any TypeScript program. TypeScript adds type annotations to make functions more predictable.
  `,
  codeExamples: [
    {
      title: "Function Types and Features",
      code: `// Named function with type annotations
function add(x: number, y: number): number {
  return x + y;
}

// Anonymous function with type annotations
let myAdd = function(x: number, y: number): number {
  return x + y;
};

// Arrow function
let myAddArrow = (x: number, y: number): number => x + y;

// Optional parameters
function buildName(firstName: string, lastName?: string): string {
  if (lastName) {
    return firstName + " " + lastName;
  } else {
    return firstName;
  }
}

console.log(buildName("John")); // Works fine
console.log(buildName("John", "Doe")); // Also works fine
// console.log(buildName("John", "Doe", "Jr.")); // Error: too many parameters

// Default parameters
function greet(name: string, greeting: string = "Hello"): string {
  return greeting + ", " + name + "!";
}

console.log(greet("John")); // Output: Hello, John!
console.log(greet("Jane", "Hi")); // Output: Hi, Jane!

// Rest parameters
function sum(...numbers: number[]): number {
  return numbers.reduce((total, n) => total + n, 0);
}

console.log(sum(1, 2)); // Output: 3
console.log(sum(1, 2, 3, 4, 5)); // Output: 15

// Function overloads
function padLeft(value: string, padding: number): string;
function padLeft(value: string, padding: string): string;
function padLeft(value: string, padding: any): string {
  if (typeof padding === "number") {
    return " ".repeat(padding) + value;
  }
  if (typeof padding === "string") {
    return padding + value;
  }
  throw new Error("Expected string or number");
}

console.log(padLeft("Hello", 4)); // Output: "    Hello"
console.log(padLeft("Hello", "----")); // Output: "----Hello"

// Function type with custom type aliases
type MathOperation = (x: number, y: number) => number;

let multiply: MathOperation = (x, y) => x * y;
console.log(multiply(5, 3)); // Output: 15

// Generic functions
function identity<T>(arg: T): T {
  return arg;
}

let output1 = identity<string>("myString");
let output2 = identity(42); // Type inference: T is number

// Using functions as parameters
function applyOperation(x: number, y: number, operation: MathOperation): number {
  return operation(x, y);
}

console.log(applyOperation(10, 5, (a, b) => a - b)); // Output: 5

// Using object destructuring with function parameters
function printCoord({ x, y }: { x: number; y: number }): void {
  console.log("Coordinate: " + x + ", " + y);
}

printCoord({ x: 10, y: 20 }); // Output: Coordinate: 10, 20

// Contextual typing with arrow functions
let numbers = [1, 2, 3, 4, 5];
let doubled = numbers.map((value) => value * 2); // TypeScript infers 'value' is a number

// Using 'this' parameter
interface ClickHandler {
  message: string;
  handleClick(this: ClickHandler, event: Event): void;
}

let handler: ClickHandler = {
  message: "Clicked!",
  handleClick(this: ClickHandler, event: Event) {
    console.log(this.message);
  }
};

// Function that returns void
function logMessage(message: string): void {
  console.log(message);
}

// Function that returns never
function throwError(message: string): never {
  throw new Error(message);
}

function infiniteLoop(): never {
  while (true) {}
}`,
      explanation: "This example demonstrates the various aspects of functions in TypeScript, including function declarations, function expressions, arrow functions, optional parameters, default parameters, rest parameters, function overloads, function types, generic functions, functions as parameters, object destructuring, contextual typing, this parameters, and functions that return void or never. TypeScript enhances JavaScript's functions with strong typing to catch errors during development."
    }
  ],
  quiz: [
    {
      question: "What is the purpose of the 'never' return type in TypeScript functions?",
      options: [
        "It indicates the function never executes",
        "It indicates the function never returns a value (like 'void')",
        "It indicates the function never returns normally (throws an exception or runs forever)",
        "It indicates the function can return any type"
      ],
      correctAnswer: 2,
      explanation: "The 'never' type in TypeScript represents the type of values that never occur. A function returning 'never' means it never returns normally - it either throws an exception, enters an infinite loop, or terminates the program. This is different from 'void', which means the function returns but doesn't return a value."
    }
  ],
  flashcards: [
    {
      front: "What is the difference between 'void' and 'undefined' as function return types in TypeScript?",
      back: "A function with return type 'void' doesn't require a return statement or must not return a value (it can only return undefined or have no return statement). A function with return type 'undefined' must explicitly return undefined. 'void' indicates the function's return value should be ignored, while 'undefined' means the function actually returns the value undefined."
    }
  ]
};
