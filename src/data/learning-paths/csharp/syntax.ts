import { Topic } from '../../types';

export const syntaxTopic: Topic = {
  id: "csharp-syntax",
  title: "Basic Syntax in C#",
  description: "Learn the fundamental syntax rules of C#",
  content: `
# C# Syntax

C# has a C-style syntax that is similar to languages like Java and C++, but with unique features.
  `,
  codeExamples: [
    {
      title: "Basic C# Syntax",
      code: `using System;  // Import namespace

// Namespace declaration
namespace SyntaxExample
{
    // Class declaration
    class Program
    {
        // Main method - entry point of the program
        static void Main(string[] args)
        {
            // Single-line comment
            
            /*
                Multi-line
                comment
            */
            
            // Variables and data types
            int number = 10;
            string message = "Hello, C#";
            
            // Output to console
            Console.WriteLine(message);
            Console.WriteLine("The number is: " + number);
            
            // String interpolation (C# 6.0+)
            Console.WriteLine($"The number is: {number}");
            
            // Conditional statement
            if (number > 5)
            {
                Console.WriteLine("Number is greater than 5");
            }
            else
            {
                Console.WriteLine("Number is 5 or less");
            }
            
            // Keep console window open
            Console.ReadLine();
        }
    }
}`,
      explanation: "This example demonstrates basic C# syntax including namespace and class declarations, the Main method, comments, variables, output statements, string interpolation, and conditional statements."
    }
  ],
  quiz: [
    {
      question: "Which statement about C# syntax is correct?",
      options: [
        "C# statements don't need to end with semicolons",
        "C# is case-insensitive, so 'string' and 'String' are the same",
        "C# uses curly braces {} to define code blocks",
        "C# doesn't support single-line comments"
      ],
      correctAnswer: 2,
      explanation: "C# uses curly braces {} to define code blocks or scopes, such as class definitions, method bodies, and conditional statements."
    }
  ],
  flashcards: [
    {
      front: "What is the entry point of a C# program?",
      back: "The entry point of a C# program is the Main method, which must be static and can return void or int. Its signature is usually: static void Main(string[] args) or static int Main(string[] args)."
    }
  ]
};
