import { Topic } from '../../types';

export const dataTypesTopic: Topic = {
  id: "csharp-data-types",
  title: "Data Types in C#",
  description: "Learn about the various data types available in C#",
  content: `
# Data Types in C#

C# is a strongly-typed language with a rich set of built-in data types.
  `,
  codeExamples: [
    {
      title: "C# Data Types",
      code: `using System;

namespace DataTypesExample
{
    class Program
    {
        static void Main(string[] args)
        {
            // Value Types
            
            // Integer types
            byte b = 255;                   // 8-bit unsigned, 0 to 255
            sbyte sb = -128;                // 8-bit signed, -128 to 127
            short s = -32768;               // 16-bit signed, -32,768 to 32,767
            ushort us = 65535;              // 16-bit unsigned, 0 to 65,535
            int i = -2147483648;            // 32-bit signed, -2^31 to 2^31-1
            uint ui = 4294967295;           // 32-bit unsigned, 0 to 2^32-1
            long l = -9223372036854775808;  // 64-bit signed, -2^63 to 2^63-1
            ulong ul = 18446744073709551615;// 64-bit unsigned, 0 to 2^64-1
            
            // Floating-point types
            float f = 3.14f;                // 32-bit, 7-digit precision
            double d = 3.141592653589793;   // 64-bit, 15-16 digit precision
            decimal m = 3.1415926535897932m;// 128-bit, 28-29 significant digits
            
            // Boolean type
            bool isTrue = true;             // true or false
            
            // Character type
            char c = 'A';                   // 16-bit Unicode character
            
            // Reference Types
            
            // String
            string str = "Hello, C#";
            
            // Object (base class for all types)
            object obj = 42;
            object objStr = "Object can store any type";
            
            // Array
            int[] numbers = { 1, 2, 3, 4, 5 };
            string[] words = { "Hello", "World" };
            
            // Special Types
            
            // Dynamic type (resolved at runtime)
            dynamic dyn = 100;
            dyn = "Now I'm a string";
            
            // Nullable types (value types that can be null)
            int? nullableInt = null;
            bool? nullableBool = null;
            
            // Displaying type information
            Console.WriteLine($"Type: byte, Value: {b}, Min: {byte.MinValue}, Max: {byte.MaxValue}");
            Console.WriteLine($"Type: int, Value: {i}, Min: {int.MinValue}, Max: {int.MaxValue}");
            Console.WriteLine($"Type: float, Value: {f}, Min: {float.MinValue}, Max: {float.MaxValue}");
            Console.WriteLine($"Type: double, Value: {d}, Min: {double.MinValue}, Max: {double.MaxValue}");
            Console.WriteLine($"Type: decimal, Value: {m}, Min: {decimal.MinValue}, Max: {decimal.MaxValue}");
            Console.WriteLine($"Type: bool, Value: {isTrue}");
            Console.WriteLine($"Type: char, Value: {c}");
            Console.WriteLine($"Type: string, Value: {str}");
            
            // Type checking and conversion
            Console.WriteLine($"Type of obj: {obj.GetType()}");
            
            // Boxing (value type to reference type)
            int num = 10;
            object boxed = num;  // Boxing
            
            // Unboxing (reference type back to value type)
            int unboxed = (int)boxed;  // Unboxing
            
            Console.WriteLine($"Boxed: {boxed}, Unboxed: {unboxed}");
            
            // Default values
            int defaultInt = default(int);  // 0
            bool defaultBool = default(bool);  // false
            string defaultString = default(string);  // null
            
            Console.WriteLine($"Default int: {defaultInt}");
            Console.WriteLine($"Default bool: {defaultBool}");
            Console.WriteLine($"Default string: {defaultString ?? "null"}");
            
            // Keep console window open
            Console.ReadLine();
        }
    }
}`,
      explanation: "This example demonstrates the various data types available in C#, including value types (integers, floating-point numbers, boolean, character), reference types (string, object, arrays), and special types (dynamic, nullable). It shows the range of each numeric type, boxing and unboxing operations, and default values for different types."
    }
  ],
  quiz: [
    {
      question: "Which C# data type has the highest precision for representing decimal numbers?",
      options: ["float", "double", "decimal", "int"],
      correctAnswer: 2,
      explanation: "The decimal type in C# has the highest precision for representing decimal numbers with 28-29 significant digits. It's typically used for financial calculations where precision is critical."
    }
  ],
  flashcards: [
    {
      front: "What is the difference between float, double, and decimal in C#?",
      back: "float (32-bit) and double (64-bit) are binary floating-point types that can represent a wide range of values but may have precision issues with decimal fractions. decimal (128-bit) is a decimal floating-point type with higher precision for decimal fractions, making it ideal for financial calculations, but with a smaller range than double."
    }
  ]
};
