
import { Topic } from '../../types';

export const interfacesTopic: Topic = {
  id: "typescript-interfaces",
  title: "Interfaces",
  description: "Learn how to use interfaces to define shapes of objects in TypeScript",
  content: `
# Interfaces in TypeScript

Interfaces are a powerful way to define contracts within your code and with code outside your project.
  `,
  codeExamples: [
    {
      title: "Basic Interface Usage",
      code: `// Basic interface
interface Person {
  firstName: string;
  lastName: string;
  age: number;
}

function greet(person: Person): string {
  return \`Hello, \${person.firstName} \${person.lastName}!\`;
}

const user = { firstName: "John", lastName: "Doe", age: 30 };
console.log(greet(user)); // Output: Hello, John Doe!

// Optional properties
interface PartialPerson {
  firstName: string;
  lastName: string;
  age?: number; // Optional property
}

const partialUser = { firstName: "Jane", lastName: "Doe" };
// No error even though age is missing

// Read-only properties
interface Point {
  readonly x: number;
  readonly y: number;
}

let p1: Point = { x: 10, y: 20 };
// p1.x = 5; // Error: Cannot assign to 'x' because it is a read-only property

// Function types
interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(src: string, sub: string): boolean {
  return src.search(sub) > -1;
};

// Indexable types
interface StringArray {
  [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];
console.log(myArray[0]); // Output: Bob

// Class types
interface ClockInterface {
  currentTime: Date;
  setTime(d: Date): void;
}

class Clock implements ClockInterface {
  currentTime: Date = new Date();
  setTime(d: Date) {
    this.currentTime = d;
  }
  constructor(h: number, m: number) {}
}

// Extending interfaces
interface Shape {
  color: string;
}

interface Square extends Shape {
  sideLength: number;
}

let square = {} as Square;
square.color = "blue";
square.sideLength = 10;

// Hybrid types
interface Counter {
  (start: number): string;
  interval: number;
  reset(): void;
}

function getCounter(): Counter {
  let counter = (function(start: number) { return start.toString(); }) as Counter;
  counter.interval = 123;
  counter.reset = function() {};
  return counter;
}

let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;`,
      explanation: "This example demonstrates the various ways to use interfaces in TypeScript, including basic object shapes, optional properties, readonly properties, function types, indexable types, class implementation, interface extension, and hybrid types. Interfaces are a fundamental way to define contracts for your objects and functions in TypeScript."
    }
  ],
  quiz: [
    {
      question: "What is the main purpose of interfaces in TypeScript?",
      options: [
        "To create new data types at runtime",
        "To define the structure that objects must conform to",
        "To improve runtime performance",
        "To replace classes in object-oriented programming"
      ],
      correctAnswer: 1,
      explanation: "The main purpose of interfaces in TypeScript is to define the shape or structure that objects must conform to. They provide a way to enforce contracts within your code and with external code, helping catch errors during development when objects don't match expected shapes."
    }
  ],
  flashcards: [
    {
      front: "What is the difference between an interface and a type alias in TypeScript?",
      back: "Interfaces and type aliases can both be used to define object shapes, but they have subtle differences: 1) Interfaces can be extended with the 'extends' keyword, while types can be intersected with '&'. 2) Interfaces can be declaration-merged (multiple declarations with the same name are combined), but type aliases cannot. 3) Interfaces can only describe object shapes, while type aliases can represent primitive types, unions, tuples, and other complex types more easily."
    }
  ]
};
