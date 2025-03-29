
import { Topic } from '../../types';

export const basicTypesTopic: Topic = {
  id: "typescript-basic-types",
  title: "Basic Types",
  description: "Learn about the fundamental types in TypeScript",
  content: `
# Basic Types in TypeScript

TypeScript includes a set of built-in types that help you describe the shape of your data.
  `,
  codeExamples: [
    {
      title: "Basic Types",
      code: `// Boolean
let isDone: boolean = false;

// Number (all numbers in TypeScript are floating point)
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

// String
let color: string = "blue";
let fullName: string = \`Bob Bobbington\`;
let age: number = 37;
let sentence: string = \`Hello, my name is \${fullName}.
I'll be \${age + 1} years old next month.\`;

// Array
let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3]; // Generic array type

// Tuple
let x: [string, number];
x = ["hello", 10]; // OK
// x = [10, "hello"]; // Error - wrong types in wrong positions

// Enum
enum Color {Red, Green, Blue}
let c: Color = Color.Green;
console.log(c); // 1

// Any
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean

// Void
function warnUser(): void {
  console.log("This is a warning message");
}

// Null and Undefined
let u: undefined = undefined;
let n: null = null;

// Never - represents the type of values that never occur
function error(message: string): never {
  throw new Error(message);
}

// Object
let obj: object = { key: "value" };

// Type assertions
let someValue: any = "this is a string";
let strLength1: number = (<string>someValue).length;
let strLength2: number = (someValue as string).length;`,
      explanation: "This example showcases the various basic types available in TypeScript, including boolean, number, string, array, tuple, enum, any, void, null, undefined, never, and object types. It also demonstrates type assertions, which are a way to tell the compiler 'trust me, I know what I'm doing' when you have more information about a type than TypeScript does."
    }
  ],
  quiz: [
    {
      question: "What is the output of: enum Direction {North, East, South, West}; let dir = Direction.South; console.log(dir);",
      options: ["'South'", "2", "TypeError", "undefined"],
      correctAnswer: 1,
      explanation: "By default, enums in TypeScript assign numeric values starting from 0. In this case, Direction.North is 0, Direction.East is 1, Direction.South is 2, and Direction.West is 3. Therefore, console.log(dir) will output 2."
    }
  ],
  flashcards: [
    {
      front: "What is the difference between 'any' and 'unknown' types in TypeScript?",
      back: "Both 'any' and 'unknown' can hold values of any type, but they differ in how you can interact with them. With 'any', you can perform any operation without type checking. With 'unknown', you must perform some type checking before performing operations, making it safer than 'any' when you need to represent values of uncertain types."
    }
  ]
};
