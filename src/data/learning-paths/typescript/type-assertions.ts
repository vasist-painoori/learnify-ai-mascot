
import { Topic } from '../../types';

export const typeAssertionsTopic: Topic = {
  id: "typescript-type-assertions",
  title: "Type Assertions",
  description: "Learn how to use type assertions to specify a more specific type",
  content: `
# Type Assertions in TypeScript

Type assertions allow you to tell the TypeScript compiler, "Trust me, I know what I'm doing," when you understand the type of a value better than TypeScript can determine.
  `,
  codeExamples: [
    {
      title: "Using Type Assertions",
      code: `// Basic type assertion with 'as'
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;
console.log(strLength);  // Output: 16

// The angle bracket syntax (less common, doesn't work in JSX)
let someValue2: any = "this is a string";
let strLength2: number = (<string>someValue2).length;
console.log(strLength2);  // Output: 16

// Type assertions with objects
interface Person {
  name: string;
  age: number;
}

let user: any = {
  name: "John",
  age: 30
};

// Treating 'user' as Person
let person = user as Person;
console.log(person.name);  // John

// Type assertions with DOM manipulation
// let button = document.querySelector(".submit-button") as HTMLButtonElement;
// button.disabled = true;  // OK because we asserted it's a button

// Type assertions with JSON parsing
const jsonString = '{"name": "John", "age": 30}';
const user2 = JSON.parse(jsonString) as Person;
console.log(user2.name);  // John

// Type assertions with unions
function padLeft(padding: number | string, input: string): string {
  if (typeof padding === "number") {
    return " ".repeat(padding) + input;
  }
  return padding + input;
}

// Type assertions with nullable values
function getLength(str: string | null): number {
  // We know it's not null here
  return (str as string).length;
  
  // Safer approach:
  // return str ? str.length : 0;
}

// Type assertions with unknown
let value: unknown = "Hello, TypeScript!";
let length: number = (value as string).length;

// Double assertion (sometimes needed for very specific cases)
let x: unknown = "hello";
let y = (x as unknown) as number;  // Not recommended, will cause runtime issues

// Type assertions vs. type declarations
let assertion = "hello" as string;  // Less restrictive
let declaration: string = "hello";  // More restrictive

// Type assertions with classes
class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class Dog extends Animal {
  breed: string;
  constructor(name: string, breed: string) {
    super(name);
    this.breed = breed;
  }
  
  bark(): void {
    console.log("Woof!");
  }
}

// Upcasting (always safe)
let dog = new Dog("Rex", "German Shepherd");
let animal: Animal = dog;

// Downcasting (potentially unsafe, needs assertion)
let animal2: Animal = new Dog("Spot", "Beagle");
(animal2 as Dog).bark();  // OK with assertion

// Using 'instanceof' for safer downcasting
if (animal2 instanceof Dog) {
  animal2.bark();  // Safe because we checked the type
}

// Non-null assertion operator (!)
function processValue(value: string | null | undefined): string {
  // Tell TypeScript this is definitely not null or undefined
  return value!.trim();
}

// const assertion
const colors = ["red", "green", "blue"] as const;
// colors.push("yellow");  // Error: Property 'push' does not exist on readonly array

// Type assertion while creating object
const point = {
  x: 10,
  y: 20
} as const;
// point.x = 5;  // Error: Cannot assign to 'x' because it is a read-only property

// Assertion functions (TypeScript 3.7+)
function assertIsString(val: any): asserts val is string {
  if (typeof val !== "string") {
    throw new Error("Not a string!");
  }
}

function processString(value: unknown) {
  assertIsString(value);
  // After the assertion, TypeScript knows value is a string
  console.log(value.toUpperCase());
}`,
      explanation: "This example demonstrates various uses of type assertions in TypeScript. Type assertions are a way to tell the TypeScript compiler that you know more about the type of a value than it does. They don't perform any special checking or restructuring of the data; they're purely a way to let the compiler know about the type. The example shows different syntaxes for type assertions, assertions with objects, DOM elements, JSON parsing, union types, nullable values, unknown types, classes, and more advanced features like const assertions and assertion functions."
    }
  ],
  quiz: [
    {
      question: "What happens when you use a type assertion in TypeScript?",
      options: [
        "The compiler automatically converts the value to the asserted type",
        "The compiler validates that the value matches the asserted type at runtime",
        "The compiler performs type checking that would otherwise not be allowed",
        "The compiler trusts your assertion without verification"
      ],
      correctAnswer: 3,
      explanation: "When you use a type assertion in TypeScript, the compiler trusts your assertion without verification. Type assertions don't change the runtime behavior or perform any runtime checking or conversion of the data. They're purely a compile-time mechanism to tell the TypeScript compiler that you know what the type is, even if the compiler can't determine it automatically. This is why assertions can lead to runtime errors if used incorrectly."
    }
  ],
  flashcards: [
    {
      front: "What is the difference between the 'as' syntax and angle bracket syntax (<>) for type assertions in TypeScript?",
      back: "The 'as' syntax (value as Type) and angle bracket syntax (<Type>value) are functionally equivalent in most contexts, but they have one important difference: the angle bracket syntax cannot be used in JSX files because it conflicts with JSX syntax. The 'as' syntax is more universally applicable and is the recommended approach, especially in React projects or any project that might use JSX."
    }
  ]
};
