
import { Topic } from '../../types';

export const typeInferenceTopic: Topic = {
  id: "typescript-type-inference",
  title: "Type Inference",
  description: "Learn how TypeScript infers types automatically",
  content: `
# Type Inference in TypeScript

TypeScript can automatically determine types in many situations, reducing the need for explicit type annotations.
  `,
  codeExamples: [
    {
      title: "Type Inference Examples",
      code: `// Variable initialization
let x = 3;  // inferred as number
// x = "hello";  // Error: Type 'string' is not assignable to type 'number'

// Array initialization
let arr = [1, 2, 3];  // inferred as number[]
// arr.push("hello");  // Error: Argument of type 'string' is not assignable to parameter of type 'number'

// Object initialization
let person = {
  name: "John",
  age: 30,
  hobbies: ["reading", "cycling"]
};
// person.age = "thirty";  // Error: Type 'string' is not assignable to type 'number'

// Function return type
function add(a: number, b: number) {
  return a + b;  // Return type inferred as number
}

// Function parameter types in some contexts
[1, 2, 3].map(num => num * 2);  // 'num' is inferred as number

// Destructuring
let { name, age } = person;  // name: string, age: number

// For arrays
let [first, second] = [1, "two"];  // first: number, second: string

// Best common type
let mixed = [1, "hello", true];  // inferred as (string | number | boolean)[]

// Contextual typing
window.onmousedown = function(mouseEvent) {
  console.log(mouseEvent.button);  // OK
  // console.log(mouseEvent.kangaroo);  // Error: 'kangaroo' does not exist on MouseEvent
};

// Type inference with generics
function identity<T>(arg: T): T {
  return arg;
}

let result = identity("hello");  // result inferred as string
let result2 = identity(123);     // result2 inferred as number

// Inference in union types
function formatCommandLine(command: string[] | string) {
  let line = "";
  if (typeof command === "string") {
    line = command.trim();  // command is inferred as string in this block
  } else {
    line = command.join(" ");  // command is inferred as string[] in this block
  }
  return line;
}

// Inference with type guards
function isNumber(x: any): x is number {
  return typeof x === "number";
}

function process(value: string | number) {
  if (isNumber(value)) {
    // value is inferred as number in this block
    return value.toFixed(2);
  } else {
    // value is inferred as string in this block
    return value.toUpperCase();
  }
}

// Type inference with classes
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
}

let animals = [new Animal("Fido"), new Dog("Rex", "Labrador")];  // inferred as Animal[]

// Type inference limitations
let someValue: any = "this is a string";
let strLength = someValue.length;  // No error, but might fail at runtime if someValue changes

// Explicit type assertions for more control
let strLength2 = (someValue as string).length;  // Developer takes responsibility

// Using the 'const' keyword for literal types
const direction = "north";  // Type is "north", not just string
const mixed2 = [1, "two", true] as const;  // Type is readonly [1, "two", true]

// Type inference with object literals and functions
let greeting = {
  text: "Hello",
  show() {
    console.log(this.text);
  }
};
// Inferred as { text: string; show: () => void }`,
      explanation: "This example demonstrates various scenarios where TypeScript automatically infers types, including variable initialization, arrays, objects, function return types, parameters in callback functions, destructuring, best common type algorithm, contextual typing, generics, type narrowing with control flow analysis, and more. Type inference makes TypeScript code more concise while maintaining type safety."
    }
  ],
  quiz: [
    {
      question: "In TypeScript, what is inferred for the type of the variable in: let mixed = [1, 'two', true];",
      options: [
        "any[]",
        "(number | string | boolean)[]",
        "Object[]",
        "unknown[]"
      ],
      correctAnswer: 1,
      explanation: "TypeScript uses a 'best common type' algorithm to determine the array type. When an array contains elements of different types, TypeScript infers the type as a union of all element types. In this case, the array contains a number, a string, and a boolean, so the inferred type is (number | string | boolean)[]."
    }
  ],
  flashcards: [
    {
      front: "How does TypeScript's 'control flow based type analysis' work?",
      back: "Control flow based type analysis (also called type narrowing or type refinement) allows TypeScript to infer more specific types within conditional blocks. When you check the type of a variable (using typeof, instanceof, equality checks, custom type guards, etc.), TypeScript remembers this information and narrows the type within the conditional block. This enables you to safely perform operations that are only valid for that specific type."
    }
  ]
};
