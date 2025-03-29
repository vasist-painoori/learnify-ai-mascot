import { Topic } from '../../types';

export const introductionTopic: Topic = {
  id: "csharp-introduction",
  title: "Introduction to C#",
  description: "Get started with C# programming language",
  content: `
# Introduction to C#

C# (pronounced "C-sharp") is a modern, object-oriented programming language developed by Microsoft.
  `,
  codeExamples: [
    {
      title: "Hello, World!",
      code: `using System;

namespace HelloWorld
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello, World!");
            
            // Keep console window open
            Console.ReadLine();
        }
    }
}`,
      explanation: "This is a basic C# program that prints 'Hello, World!' to the console. The program includes the System namespace, defines a Program class with a Main method (the entry point), and uses Console.WriteLine to display text."
    }
  ],
  quiz: [
    {
      question: "When was C# first released?",
      options: ["1995", "2000", "2002", "2010"],
      correctAnswer: 2,
      explanation: "C# was first released in 2002 as part of Microsoft's .NET initiative."
    }
  ],
  flashcards: [
    {
      front: "What type of programming language is C#?",
      back: "C# is a statically-typed, object-oriented programming language that runs on the .NET platform."
    }
  ]
};
