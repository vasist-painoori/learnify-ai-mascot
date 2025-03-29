
import { Topic } from '../../types';

export const introductionTopic: Topic = {
  id: "typescript-introduction",
  title: "Introduction to TypeScript",
  description: "Get started with TypeScript programming language",
  content: `
# Introduction to TypeScript

TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.
  `,
  codeExamples: [
    {
      title: "Hello, TypeScript!",
      code: `// Basic TypeScript example
function greet(name: string): string {
  return \`Hello, \${name}!\`;
}

console.log(greet("TypeScript")); // Output: Hello, TypeScript!

// This would cause a compile-time error:
// console.log(greet(42));`,
      explanation: "This simple example demonstrates TypeScript's type annotations. The function 'greet' takes a parameter 'name' of type string and returns a string. TypeScript will raise an error if you try to call the function with a different type, like a number."
    }
  ],
  quiz: [
    {
      question: "Which company developed TypeScript?",
      options: ["Google", "Facebook", "Microsoft", "Apple"],
      correctAnswer: 2,
      explanation: "TypeScript was developed and is maintained by Microsoft. It was first released in 2012 and has grown in popularity as a superset of JavaScript that adds static typing."
    }
  ],
  flashcards: [
    {
      front: "What is TypeScript?",
      back: "TypeScript is a superset of JavaScript that adds static type definitions. It helps catch errors during development through a type system and compiles to plain JavaScript that runs in any JavaScript engine."
    }
  ]
};
