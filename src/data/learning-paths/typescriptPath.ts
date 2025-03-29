
import { LearningPath } from '../types';

export const typescriptPath: LearningPath = {
  languageId: "typescript",
  modules: [
    {
      id: "ts-basics",
      title: "TypeScript Fundamentals",
      description: "Learn the core concepts of TypeScript programming",
      topics: [
        {
          id: "ts-intro",
          title: "Introduction to TypeScript",
          description: "Understanding the basics of TypeScript programming",
          content: `
# Introduction to TypeScript

TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.
          `,
          codeExamples: [
            {
              title: "Hello World in TypeScript",
              code: `function greet(name: string): string {
    return \`Hello, \${name}!\`;
}

console.log(greet("TypeScript"));`,
              explanation: "This is a simple TypeScript program that defines a function with a typed parameter and return value, and then calls it."
            }
          ],
          quiz: [
            {
              question: "What is the relationship between TypeScript and JavaScript?",
              options: ["They are completely different languages", "TypeScript is a superset of JavaScript", "JavaScript is a superset of TypeScript", "They are the same language"],
              correctAnswer: 1,
              explanation: "TypeScript is a superset of JavaScript, which means all valid JavaScript code is also valid TypeScript code, but TypeScript adds additional features such as static typing."
            }
          ],
          flashcards: [
            {
              front: "What is TypeScript?",
              back: "TypeScript is a strongly typed programming language that builds on JavaScript, adding static types through optional type annotations. It's designed for the development of large applications and transpiles to JavaScript."
            },
            {
              front: "What are the benefits of using TypeScript?",
              back: "TypeScript offers several benefits including: static typing for early error detection, better IDE support with intelligent code completion, clearer interfaces between components, easier refactoring, and more readable code."
            },
            {
              front: "What is the file extension for TypeScript files?",
              back: "TypeScript files typically use the .ts extension, while TypeScript files containing React code often use the .tsx extension."
            },
            {
              front: "What is a TypeScript interface?",
              back: "An interface in TypeScript defines a contract for an object's shape. It specifies what properties and methods an object must have, but doesn't provide implementation. Interfaces are a powerful way to define custom types."
            },
            {
              front: "What is type inference in TypeScript?",
              back: "Type inference is the automatic detection of the data type of an expression in TypeScript. This means you don't always have to explicitly define types, as TypeScript can often determine them based on how values are created and used."
            }
          ]
        },
        {
          id: "ts-types",
          title: "Types and Interfaces",
          description: "Working with TypeScript's type system",
          content: `
# Types and Interfaces in TypeScript

TypeScript's type system allows you to define the shape of JavaScript objects through types and interfaces.
          `,
          codeExamples: [
            {
              title: "Basic Types",
              code: `// Basic types
let isDone: boolean = false;
let decimal: number = 6;
let color: string = "blue";
let list: number[] = [1, 2, 3];
let tuple: [string, number] = ["hello", 10];

// Enum
enum Color {Red, Green, Blue}
let c: Color = Color.Green;

// Any
let notSure: any = 4;
notSure = "maybe a string";
notSure = false;

// Void
function warnUser(): void {
    console.log("This is a warning message");
}

// Null and Undefined
let u: undefined = undefined;
let n: null = null;`,
              explanation: "This example demonstrates the basic types in TypeScript, including primitives, arrays, tuples, enums, any, void, null, and undefined."
            }
          ],
          quiz: [
            {
              question: "What is the difference between an interface and a type alias in TypeScript?",
              options: ["They are exactly the same", "Interfaces can be extended, but type aliases cannot", "Type aliases can represent primitives, but interfaces cannot", "Interfaces are faster than type aliases"],
              correctAnswer: 2,
              explanation: "While interfaces and type aliases are similar, type aliases can represent primitive types, unions, tuples, and other types that interfaces cannot."
            }
          ],
          flashcards: [
            {
              front: "What is a union type in TypeScript?",
              back: "A union type in TypeScript is a type formed from two or more other types, representing values that may be any one of those types. It's written as type1 | type2 | type3."
            }
          ]
        }
      ]
    }
  ]
};
