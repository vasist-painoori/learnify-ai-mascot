
import { Topic } from '../../types';

export const genericsTopic: Topic = {
  id: "typescript-generics",
  title: "Generics",
  description: "Learn how to create reusable components with generics in TypeScript",
  content: `
# Generics in TypeScript

Generics allow you to create reusable components that work with a variety of types rather than a single one.
  `,
  codeExamples: [
    {
      title: "Generic Functions and Classes",
      code: `// Simple generic function
function identity<T>(arg: T): T {
  return arg;
}

let output1 = identity<string>("myString");  // explicitly set T to string
let output2 = identity(42);  // type argument inferred as number

// Multiple type parameters
function pair<T, U>(first: T, second: U): [T, U] {
  return [first, second];
}

const p1 = pair<string, number>("hello", 42);
const p2 = pair(true, "world");  // inferred as [boolean, string]

// Generic interface
interface GenericIdentityFn<T> {
  (arg: T): T;
}

let myIdentity: GenericIdentityFn<number> = identity;
console.log(myIdentity(123));  // Output: 123

// Generic classes
class GenericBox<T> {
  private content: T;

  constructor(value: T) {
    this.content = value;
  }

  getContent(): T {
    return this.content;
  }
}

let stringBox = new GenericBox<string>("Hello, TypeScript!");
let numberBox = new GenericBox(42);  // Type inferred

console.log(stringBox.getContent());  // Output: Hello, TypeScript!
console.log(numberBox.getContent());  // Output: 42

// Generic constraints
interface Lengthwise {
  length: number;
}

// T must have a .length property
function logLength<T extends Lengthwise>(arg: T): T {
  console.log("Length: " + arg.length);
  return arg;
}

logLength("Hello");  // String has .length
logLength([1, 2, 3]);  // Array has .length
// logLength(123);  // Error: number doesn't have .length

// Using type parameters in generic constraints
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

let x = { a: 1, b: 2, c: 3, d: 4 };

console.log(getProperty(x, "a"));  // OK
// console.log(getProperty(x, "z"));  // Error: "z" is not assignable to "a" | "b" | "c" | "d"

// Generic with default type
interface GenericConfig<T = string> {
  data: T;
  process(input: T): void;
}

class StringProcessor implements GenericConfig {
  data: string = "";
  
  process(input: string): void {
    this.data = input.toUpperCase();
  }
}

class NumberProcessor implements GenericConfig<number> {
  data: number = 0;
  
  process(input: number): void {
    this.data = input * 2;
  }
}

// Generic with multiple constraints
interface Named {
  name: string;
}

interface Aged {
  age: number;
}

function createPerson<T extends Named & Aged>(options: T): T {
  console.log(\`Created person named \${options.name} aged \${options.age}\`);
  return options;
}

createPerson({ name: "John", age: 30, occupation: "Developer" });

// Generic Factory
function create<T>(c: { new(): T }): T {
  return new c();
}

class BankAccount {
  balance: number = 0;
  deposit(amount: number): void {
    this.balance += amount;
  }
}

const account = create(BankAccount);
account.deposit(100);
console.log(account.balance);  // Output: 100

// Generic conditional types (TypeScript 2.8+)
type NonNullable<T> = T extends null | undefined ? never : T;

type T1 = NonNullable<string | null>;  // string
type T2 = NonNullable<null>;  // never

// Mapped types with generics
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

interface Todo {
  title: string;
  description: string;
}

const todo: Readonly<Todo> = {
  title: "Learn TypeScript",
  description: "Study generic types"
};

// todo.title = "New Title";  // Error: Cannot assign to 'title' because it is a read-only property`,
      explanation: "This example demonstrates various aspects of generics in TypeScript, including generic functions, generic interfaces, generic classes, generic constraints, using type parameters in constraints, default type parameters, multiple constraints, generic factories, conditional types, and mapped types with generics. Generics provide a way to create reusable components that work with different types while maintaining type safety."
    }
  ],
  quiz: [
    {
      question: "What is the primary purpose of generics in TypeScript?",
      options: [
        "To improve runtime performance",
        "To create reusable components that work with multiple types while maintaining type safety",
        "To merge multiple classes into one",
        "To remove type checking entirely for maximum flexibility"
      ],
      correctAnswer: 1,
      explanation: "The primary purpose of generics in TypeScript is to create reusable components (functions, classes, interfaces) that work with multiple types while maintaining type safety. Generics allow you to write code that works with a variety of types without sacrificing the benefits of static type checking."
    }
  ],
  flashcards: [
    {
      front: "What is the difference between 'any' and generic types in TypeScript?",
      back: "Both 'any' and generic types allow you to work with multiple types, but they differ significantly in type safety. Using 'any' essentially turns off type checking, allowing any operations but losing all type information. Generics preserve type information throughout the code, ensuring operations are valid for the specific type being used. Generics provide flexibility while maintaining type safety, while 'any' sacrifices type safety for flexibility."
    }
  ]
};
