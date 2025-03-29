import { Topic } from '../../types';

export const operatorsTopic: Topic = {
  id: "csharp-operators",
  title: "Operators in C#",
  description: "Learn about the different types of operators in C#",
  content: `
# Operators in C#

C# provides a rich set of operators for performing operations on variables and values.
  `,
  codeExamples: [
    {
      title: "C# Operators",
      code: `using System;

namespace OperatorsExample
{
    class Program
    {
        static void Main(string[] args)
        {
            // Arithmetic operators
            int a = 10, b = 3;
            Console.WriteLine($"a + b = {a + b}");   // Addition: 13
            Console.WriteLine($"a - b = {a - b}");   // Subtraction: 7
            Console.WriteLine($"a * b = {a * b}");   // Multiplication: 30
            Console.WriteLine($"a / b = {a / b}");   // Division: 3 (integer division)
            Console.WriteLine($"a % b = {a % b}");   // Modulus: 1
            
            double c = 10.0, d = 3.0;
            Console.WriteLine($"c / d = {c / d}");   // Division: 3.33333333333333 (floating-point division)
            
            // Increment and decrement operators
            int i = 5;
            Console.WriteLine($"i = {i}");         // 5
            Console.WriteLine($"++i = {++i}");     // Pre-increment: 6
            Console.WriteLine($"i++ = {i++}");     // Post-increment: 6 (i becomes 7 after this line)
            Console.WriteLine($"i = {i}");         // 7
            Console.WriteLine($"--i = {--i}");     // Pre-decrement: 6
            Console.WriteLine($"i-- = {i--}");     // Post-decrement: 6 (i becomes 5 after this line)
            Console.WriteLine($"i = {i}");         // 5
            
            // Assignment operators
            int x = 10;
            x += 5;  // x = x + 5
            Console.WriteLine($"x += 5: {x}");     // 15
            
            x -= 3;  // x = x - 3
            Console.WriteLine($"x -= 3: {x}");     // 12
            
            x *= 2;  // x = x * 2
            Console.WriteLine($"x *= 2: {x}");     // 24
            
            x /= 4;  // x = x / 4
            Console.WriteLine($"x /= 4: {x}");     // 6
            
            x %= 4;  // x = x % 4
            Console.WriteLine($"x %= 4: {x}");     // 2
            
            // Comparison operators
            int m = 5, n = 10;
            Console.WriteLine($"m == n: {m == n}");  // Equal to: False
            Console.WriteLine($"m != n: {m != n}");  // Not equal to: True
            Console.WriteLine($"m > n: {m > n}");    // Greater than: False
            Console.WriteLine($"m < n: {m < n}");    // Less than: True
            Console.WriteLine($"m >= n: {m >= n}");  // Greater than or equal to: False
            Console.WriteLine($"m <= n: {m <= n}");  // Less than or equal to: True
            
            // Logical operators
            bool p = true, q = false;
            Console.WriteLine($"p && q: {p && q}");  // Logical AND: False
            Console.WriteLine($"p || q: {p || q}");  // Logical OR: True
            Console.WriteLine($"!p: {!p}");          // Logical NOT: False
            
            // Bitwise operators
            int r = 5;  // 101 in binary
            int s = 3;  // 011 in binary
            
            Console.WriteLine($"r & s: {r & s}");    // Bitwise AND: 1 (001)
            Console.WriteLine($"r | s: {r | s}");    // Bitwise OR: 7 (111)
            Console.WriteLine($"r ^ s: {r ^ s}");    // Bitwise XOR: 6 (110)
            Console.WriteLine($"~r: {~r}");          // Bitwise NOT: -6 (invert all bits)
            
            // Shift operators
            Console.WriteLine($"r << 1: {r << 1}");  // Left shift: 10 (1010)
            Console.WriteLine($"r >> 1: {r >> 1}");  // Right shift: 2 (10)
            
            // Conditional operator (ternary)
            int age = 20;
            string status = (age >= 18) ? "Adult" : "Minor";
            Console.WriteLine($"Status: {status}");  // Adult
            
            // Null-coalescing operator (??)
            string name = null;
            string displayName = name ?? "Unknown";
            Console.WriteLine($"Display name: {displayName}");  // Unknown
            
            // Null-conditional operator (?.)
            string text = null;
            int? length = text?.Length;  // null, no NullReferenceException
            Console.WriteLine($"Length: {length?.ToString() ?? "null"}");  // null
            
            // Keep console window open
            Console.ReadLine();
        }
    }
}`,
      explanation: "This example demonstrates the various operators available in C#, including arithmetic operators, increment/decrement operators, assignment operators, comparison operators, logical operators, bitwise operators, shift operators, the conditional (ternary) operator, and null-related operators such as null-coalescing (??) and null-conditional (?.) operators."
    }
  ],
  quiz: [
    {
      question: "What does the ?? operator do in C#?",
      options: [
        "Performs a logical OR operation",
        "Returns the left operand if it's not null, otherwise returns the right operand",
        "Checks if both operands are null",
        "Performs a null check and throws an exception if null"
      ],
      correctAnswer: 1,
      explanation: "The ?? operator is the null-coalescing operator in C#. It returns the value of the left-hand operand if it's not null; otherwise, it returns the value of the right-hand operand. It's a concise way to provide a default value for nullable types."
    }
  ],
  flashcards: [
    {
      front: "What's the difference between == and Equals() in C#?",
      back: "For reference types, == compares references (if they point to the same object in memory), while Equals() compares the content of the objects. For value types, both == and Equals() compare values by default. However, classes can override Equals() to define custom equality comparison logic."
    }
  ]
};
