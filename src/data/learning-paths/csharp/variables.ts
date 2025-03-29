import { Topic } from '../../types';

export const variablesTopic: Topic = {
  id: "csharp-variables",
  title: "Variables in C#",
  description: "Learn about variables, data types, and type conversion in C#",
  content: `
# Variables in C#

Variables are containers for storing data values. In C#, all variables must be declared with a specific type before they can be used.
  `,
  codeExamples: [
    {
      title: "Variable Declaration and Usage",
      code: `using System;

namespace VariablesExample
{
    class Program
    {
        static void Main(string[] args)
        {
            // Variable declaration and initialization
            int age = 25;
            double salary = 50000.50;
            char grade = 'A';
            bool isEmployed = true;
            string name = "John Doe";
            
            // Output variables
            Console.WriteLine("Name: " + name);
            Console.WriteLine("Age: " + age);
            Console.WriteLine("Salary: $" + salary);
            Console.WriteLine("Grade: " + grade);
            Console.WriteLine("Employed: " + isEmployed);
            
            // String interpolation (C# 6.0+)
            Console.WriteLine($"Name: {name}, Age: {age}");
            
            // Variable reassignment
            age = 26;
            Console.WriteLine("New age: " + age);
            
            // Implicit typing with var (type is inferred)
            var message = "Hello, C#";  // inferred as string
            var number = 10;            // inferred as int
            var pi = 3.14;              // inferred as double
            
            Console.WriteLine($"message is a {message.GetType()}, value: {message}");
            Console.WriteLine($"number is an {number.GetType()}, value: {number}");
            Console.WriteLine($"pi is a {pi.GetType()}, value: {pi}");
            
            // Constants
            const double PI = 3.14159;
            const string APP_NAME = "Variables Demo";
            
            // PI = 3.14;  // Error: Cannot assign to PI because it is a constant
            
            Console.WriteLine($"PI: {PI}");
            Console.WriteLine($"Application: {APP_NAME}");
            
            // Type conversion
            
            // Implicit conversion (smaller to larger type)
            int intValue = 100;
            long longValue = intValue;  // No explicit cast needed
            
            // Explicit conversion (larger to smaller type)
            double doubleValue = 3.14;
            int intFromDouble = (int)doubleValue;  // Explicit cast, loses decimal portion
            
            Console.WriteLine($"Double value: {doubleValue}");
            Console.WriteLine($"Int from double: {intFromDouble}");
            
            // Convert class
            string numberString = "123";
            int parsedNumber = Convert.ToInt32(numberString);
            
            Console.WriteLine($"Parsed number: {parsedNumber}");
            
            // TryParse for safe conversion
            string invalidNumber = "abc";
            bool success = int.TryParse(invalidNumber, out int result);
            
            if (success)
            {
                Console.WriteLine($"Conversion successful: {result}");
            }
            else
            {
                Console.WriteLine("Conversion failed");
            }
            
            // Keep console window open
            Console.ReadLine();
        }
    }
}`,
      explanation: "This example demonstrates variable declaration, initialization, and usage in C#. It covers different data types, string interpolation, variable reassignment, implicit typing with var, constants, and type conversion techniques including implicit conversion, explicit casting, and using the Convert class and TryParse method."
    }
  ],
  quiz: [
    {
      question: "What is the difference between var and dynamic in C#?",
      options: [
        "There is no difference, they are synonyms",
        "var is resolved at compile time, dynamic at runtime",
        "var can change types at runtime, dynamic cannot",
        "var is for reference types, dynamic for value types"
      ],
      correctAnswer: 1,
      explanation: "The var keyword in C# is for implicit typing where the type is inferred at compile time and cannot change. The dynamic type bypasses compile-time type checking and resolves types at runtime, enabling more flexible programming but with fewer compile-time safety checks."
    }
  ],
  flashcards: [
    {
      front: "What are reference types and value types in C#?",
      back: "Value types (int, float, bool, struct, enum) directly contain their data and are stored on the stack. Reference types (string, class, interface, delegate, array) store a reference to their data, which is allocated on the heap. Value types are passed by copy, while reference types are passed by reference."
    }
  ]
};
