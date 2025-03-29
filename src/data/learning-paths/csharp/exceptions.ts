import { Topic } from '../../types';

export const exceptionsTopic: Topic = {
  id: "csharp-exceptions",
  title: "Exception Handling in C#",
  description: "Learn how to handle exceptions and errors in C#",
  content: `
# Exception Handling in C#

Exception handling allows you to deal with runtime errors gracefully and maintain control of your program's flow.
  `,
  codeExamples: [
    {
      title: "Try-Catch Blocks",
      code: `using System;
using System.IO;

namespace ExceptionsExample
{
    class Program
    {
        static void Main(string[] args)
        {
            // Basic try-catch
            try
            {
                int a = 10;
                int b = 0;
                int result = a / b;  // This will throw DivideByZeroException
                Console.WriteLine($"Result: {result}");  // This line won't execute
            }
            catch (Exception ex)
            {
                Console.WriteLine($"An error occurred: {ex.Message}");
            }
            
            // Multiple catch blocks
            try
            {
                int[] numbers = { 1, 2, 3 };
                Console.WriteLine(numbers[5]);  // This will throw IndexOutOfRangeException
            }
            catch (IndexOutOfRangeException ex)
            {
                Console.WriteLine($"Array index error: {ex.Message}");
            }
            catch (Exception ex)
            {
                Console.WriteLine($"General error: {ex.Message}");
            }
            
            // Try-catch-finally
            try
            {
                Console.WriteLine("Try block executed");
                // Some code that might throw an exception
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Exception caught: {ex.Message}");
            }
            finally
            {
                Console.WriteLine("Finally block always executes");
            }
            
            // Exception filters (C# 6.0+)
            try
            {
                string input = "abc";
                int number = int.Parse(input);  // This will throw FormatException
            }
            catch (FormatException ex) when (ex.Message.Contains("input string"))
            {
                Console.WriteLine("Input string was not in the correct format");
            }
            catch (FormatException ex)
            {
                Console.WriteLine($"Other format error: {ex.Message}");
            }
            
            // Resource management with try-finally
            FileStream file = null;
            try
            {
                file = File.Open("nonexistent.txt", FileMode.Open);  // This will throw FileNotFoundException
                // Read from the file
            }
            catch (FileNotFoundException)
            {
                Console.WriteLine("The file was not found");
            }
            finally
            {
                // Close the file if it was opened
                if (file != null)
                {
                    file.Close();
                }
            }
            
            // Using statement for automatic resource disposal
            try
            {
                using (FileStream stream = File.Open("nonexistent.txt", FileMode.Open))
                {
                    // Read from the file
                }  // stream.Dispose() is called automatically here
            }
            catch (FileNotFoundException)
            {
                Console.WriteLine("The file was not found");
            }
            
            // Using declaration (C# 8.0+)
            /*
            try
            {
                using FileStream stream = File.Open("nonexistent.txt", FileMode.Open);
                // Read from the file
                // stream.Dispose() is called at the end of the enclosing scope
            }
            catch (FileNotFoundException)
            {
                Console.WriteLine("The file was not found");
            }
            */
            
            // Throwing exceptions
            try
            {
                ValidateAge(-5);  // This will throw an ArgumentException
            }
            catch (ArgumentException ex)
            {
                Console.WriteLine($"Validation error: {ex.Message}");
            }
            
            // Re-throwing exceptions
            try
            {
                try
                {
                    throw new InvalidOperationException("Original error");
                }
                catch (Exception ex)
                {
                    Console.WriteLine("Caught in inner catch block");
                    throw;  // Re-throw the same exception (preserves stack trace)
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Caught in outer catch block: {ex.Message}");
                Console.WriteLine($"Stack trace: {ex.StackTrace}");
            }
            
            // Custom exceptions
            try
            {
                ProcessData("invalid data");
            }
            catch (CustomException ex)
            {
                Console.WriteLine($"Custom error: {ex.Message}");
                Console.WriteLine($"Error code: {ex.ErrorCode}");
            }
            
            // Keep console window open
            Console.ReadLine();
        }
        
        // Method that throws an exception
        static void ValidateAge(int age)
        {
            if (age < 0)
            {
                throw new ArgumentException("Age cannot be negative");
            }
            
            Console.WriteLine($"Age is valid: {age}");
        }
        
        // Method that throws a custom exception
        static void ProcessData(string data)
        {
            if (data == "invalid data")
            {
                throw new CustomException("Invalid data format", 1001);
            }
            
            Console.WriteLine($"Processing data: {data}");
        }
    }
    
    // Custom exception class
    class CustomException : Exception
    {
        public int ErrorCode { get; }
        
        public CustomException(string message, int errorCode)
            : base(message)
        {
            ErrorCode = errorCode;
        }
    }
}`,
      explanation: "This example demonstrates various aspects of exception handling in C#, including try-catch blocks, multiple catch blocks, finally blocks, exception filters, resource management with try-finally and using statements, throwing exceptions, re-throwing exceptions, and creating and throwing custom exceptions."
    }
  ],
  quiz: [
    {
      question: "What does the 'finally' block in C# do?",
      options: [
        "It only executes if an exception is thrown",
        "It only executes if no exception is thrown",
        "It executes regardless of whether an exception is thrown or caught",
        "It defines the final catch block in a try-catch statement"
      ],
      correctAnswer: 2,
      explanation: "The finally block in C# always executes whether an exception is thrown or not, and whether an exception is caught or not. It's typically used for cleanup code like closing files or database connections."
    }
  ],
  flashcards: [
    {
      front: "What's the purpose of the 'using' statement in C#?",
      back: "The using statement in C# provides a convenient syntax for working with IDisposable objects. It ensures that Dispose() is called even if an exception occurs, equivalent to a try-finally block where Dispose() is called in the finally block. This guarantees proper resource cleanup for objects that hold expensive or limited resources, like file handles, database connections, or network connections."
    }
  ]
};
