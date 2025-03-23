
import { LearningPath } from '../types';

export const csharpPath: LearningPath = {
  languageId: "csharp",
  modules: [
    {
      id: "cs-basics",
      title: "C# Fundamentals",
      description: "Learn the core concepts of C# programming",
      topics: [
        {
          id: "cs-intro",
          title: "Introduction to C#",
          description: "Understanding the basics of C# programming",
          content: `
# Introduction to C#

C# is a modern, object-oriented programming language developed by Microsoft as part of the .NET platform.
          `,
          codeExamples: [
            {
              title: "Hello World in C#",
              code: `using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Hello, World!");
    }
}`,
              explanation: "This is a simple C# program that includes the System namespace, defines a main function (the entry point), and uses the Console.WriteLine method to print text to the console."
            }
          ],
          quiz: [
            {
              question: "Which company developed C#?",
              options: ["Apple", "Google", "Microsoft", "Oracle"],
              correctAnswer: 2,
              explanation: "C# was developed by Microsoft as part of its .NET initiative and was designed by Anders Hejlsberg."
            }
          ],
          flashcards: [
            {
              front: "What is C#?",
              back: "C# (pronounced 'C sharp') is a modern, object-oriented programming language developed by Microsoft as part of its .NET platform. It was designed to be simple, powerful, type-safe, and object-oriented."
            },
            {
              front: "What is a namespace in C#?",
              back: "A namespace in C# is a container for classes and other namespaces. It helps organize code and provides a way to avoid name collisions. The 'using' directive allows you to use types from a namespace without specifying the fully qualified name."
            },
            {
              front: "What are properties in C#?",
              back: "Properties in C# are members that provide a flexible mechanism to read, write, or compute the value of a private field. They allow access to data while hiding implementation details."
            },
            {
              front: "What is the difference between value types and reference types in C#?",
              back: "Value types (struct, enum, and primitive types) directly contain their data and are stored on the stack. Reference types (class, interface, delegate, array) store a reference to their data, which is stored on the heap."
            },
            {
              front: "What are delegates in C#?",
              back: "Delegates in C# are type-safe function pointers that can reference methods with compatible signatures. They are used for implementing events and callback methods, and are the foundation for lambda expressions and LINQ."
            }
          ]
        },
        // ... Additional C# topics would be defined here
      ]
    }
  ]
};
