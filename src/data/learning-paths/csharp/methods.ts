import { Topic } from '../../types';

export const methodsTopic: Topic = {
  id: "csharp-methods",
  title: "Methods in C#",
  description: "Learn how to define and use methods in C#",
  content: `
# Methods in C#

Methods are blocks of code that perform a specific task and can be called from other parts of the program.
  `,
  codeExamples: [
    {
      title: "Method Definition and Calling",
      code: `using System;

namespace MethodsExample
{
    class Program
    {
        // Main method - entry point of the program
        static void Main(string[] args)
        {
            // Calling method with no parameters
            SayHello();
            
            // Calling method with parameters
            int result = Add(5, 3);
            Console.WriteLine($"5 + 3 = {result}");
            
            // Calling method with named arguments
            GreetPerson(name: "Alice", age: 30);
            GreetPerson(age: 25, name: "Bob");  // Arguments can be in any order with names
            
            // Calling method with output parameters
            int sum, difference;
            Calculate(10, 5, out sum, out difference);
            Console.WriteLine($"Sum: {sum}, Difference: {difference}");
            
            // Using var with out parameters (C# 7.0+)
            Calculate(20, 7, out var newSum, out var newDifference);
            Console.WriteLine($"New Sum: {newSum}, New Difference: {newDifference}");
            
            // Calling method with ref parameter
            int number = 10;
            Console.WriteLine($"Before: {number}");
            
            DoubleValue(ref number);
            Console.WriteLine($"After: {number}");
            
            // Calling method with optional parameters
            DisplayInfo("Charlie");
            DisplayInfo("David", 35);
            DisplayInfo("Eve", 28, "Developer");
            
            // Calling method with variable number of arguments
            int total = Sum(1, 2, 3, 4, 5);
            Console.WriteLine($"Sum: {total}");
            
            // Local function (C# 7.0+)
            int Triple(int x) => x * 3;
            
            int tripled = Triple(5);
            Console.WriteLine($"Tripled: {tripled}");
            
            // Expression-bodied method call
            int squared = Square(5);
            Console.WriteLine($"Squared: {squared}");
            
            // Method with tuple return type (C# 7.0+)
            var stats = GetStatistics(new[] { 1, 2, 3, 4, 5 });
            Console.WriteLine($"Min: {stats.min}, Max: {stats.max}, Average: {stats.average}");
            
            // Keep console window open
            Console.ReadLine();
        }
        
        // Method with no parameters and no return value
        static void SayHello()
        {
            Console.WriteLine("Hello!");
        }
        
        // Method with parameters and return value
        static int Add(int a, int b)
        {
            return a + b;
        }
        
        // Method with named parameters
        static void GreetPerson(string name, int age)
        {
            Console.WriteLine($"Hello, {name}! You are {age} years old.");
        }
        
        // Method with output parameters
        static void Calculate(int a, int b, out int sum, out int difference)
        {
            sum = a + b;
            difference = a - b;
        }
        
        // Method with ref parameter
        static void DoubleValue(ref int x)
        {
            x = x * 2;
        }
        
        // Method with optional parameters
        static void DisplayInfo(string name, int age = 20, string occupation = "Student")
        {
            Console.WriteLine($"Name: {name}, Age: {age}, Occupation: {occupation}");
        }
        
        // Method with variable number of arguments (params)
        static int Sum(params int[] numbers)
        {
            int total = 0;
            foreach (int num in numbers)
            {
                total += num;
            }
            return total;
        }
        
        // Expression-bodied method (C# 6.0+)
        static int Square(int x) => x * x;
        
        // Method with tuple return type (C# 7.0+)
        static (int min, int max, double average) GetStatistics(int[] numbers)
        {
            int min = int.MaxValue;
            int max = int.MinValue;
            int sum = 0;
            
            foreach (int num in numbers)
            {
                min = Math.Min(min, num);
                max = Math.Max(max, num);
                sum += num;
            }
            
            double average = (double)sum / numbers.Length;
            return (min, max, average);
        }
    }
}`,
      explanation: "This example demonstrates various aspects of methods in C#, including method definition, parameters, return values, named arguments, output parameters, reference parameters, optional parameters, variable arguments (params), local functions, expression-bodied methods, and tuple return types."
    }
  ],
  quiz: [
    {
      question: "What is the difference between ref and out parameters in C#?",
      options: [
        "There is no difference",
        "ref parameters must be initialized before being passed to the method, out parameters do not",
        "ref parameters can be read but not modified, out parameters can be modified",
        "ref parameters are for value types, out parameters are for reference types"
      ],
      correctAnswer: 1,
      explanation: "Both ref and out parameters allow methods to modify the passed variables, but ref parameters must be initialized before being passed to the method, while out parameters don't need to be initialized. Also, out parameters must be assigned a value inside the method."
    }
  ],
  flashcards: [
    {
      front: "What is method overloading in C#?",
      back: "Method overloading is defining multiple methods in the same class with the same name but different parameters (different number, type, or order of parameters). The compiler determines which method to call based on the arguments provided at the call site."
    }
  ]
};
