
import { Topic } from '../../types';

export const operatorsTopic: Topic = {
  id: "cpp-operators",
  title: "Operators in C++",
  description: "Learn about the different types of operators in C++",
  content: `
# Operators in C++

C++ provides a wide range of operators for performing operations on variables and values.
  `,
  codeExamples: [
    {
      title: "C++ Operators",
      code: `#include <iostream>

int main() {
    // Arithmetic operators
    int a = 10, b = 3;
    std::cout << "Arithmetic operators:" << std::endl;
    std::cout << "a + b = " << (a + b) << std::endl;   // Addition: 13
    std::cout << "a - b = " << (a - b) << std::endl;   // Subtraction: 7
    std::cout << "a * b = " << (a * b) << std::endl;   // Multiplication: 30
    std::cout << "a / b = " << (a / b) << std::endl;   // Division: 3 (integer division)
    std::cout << "a % b = " << (a % b) << std::endl;   // Modulus: 1
    
    double c = 10.0, d = 3.0;
    std::cout << "c / d = " << (c / d) << std::endl;   // Division: 3.33333 (floating-point)
    
    // Unary operators
    int e = 5;
    std::cout << "\\nUnary operators:" << std::endl;
    std::cout << "+e = " << (+e) << std::endl;         // Unary plus: 5
    std::cout << "-e = " << (-e) << std::endl;         // Unary minus: -5
    
    // Increment and decrement operators
    int i = 5;
    std::cout << "\\nIncrement and decrement:" << std::endl;
    std::cout << "i = " << i << std::endl;             // 5
    std::cout << "++i = " << (++i) << std::endl;       // Pre-increment: 6
    std::cout << "i = " << i << std::endl;             // 6
    std::cout << "i++ = " << (i++) << std::endl;       // Post-increment: 6 (i becomes 7)
    std::cout << "i = " << i << std::endl;             // 7
    std::cout << "--i = " << (--i) << std::endl;       // Pre-decrement: 6
    std::cout << "i = " << i << std::endl;             // 6
    std::cout << "i-- = " << (i--) << std::endl;       // Post-decrement: 6 (i becomes 5)
    std::cout << "i = " << i << std::endl;             // 5
    
    // Assignment operators
    int x = 10;
    std::cout << "\\nAssignment operators:" << std::endl;
    std::cout << "x = " << x << std::endl;
    
    x += 5;  // x = x + 5
    std::cout << "x += 5: " << x << std::endl;         // 15
    
    x -= 3;  // x = x - 3
    std::cout << "x -= 3: " << x << std::endl;         // 12
    
    x *= 2;  // x = x * 2
    std::cout << "x *= 2: " << x << std::endl;         // 24
    
    x /= 4;  // x = x / 4
    std::cout << "x /= 4: " << x << std::endl;         // 6
    
    x %= 4;  // x = x % 4
    std::cout << "x %= 4: " << x << std::endl;         // 2
    
    // Comparison operators
    int m = 5, n = 10;
    std::cout << "\\nComparison operators:" << std::endl;
    std::cout << "m == n: " << (m == n) << std::endl;  // Equal to: 0 (false)
    std::cout << "m != n: " << (m != n) << std::endl;  // Not equal to: 1 (true)
    std::cout << "m > n: " << (m > n) << std::endl;    // Greater than: 0 (false)
    std::cout << "m < n: " << (m < n) << std::endl;    // Less than: 1 (true)
    std::cout << "m >= n: " << (m >= n) << std::endl;  // Greater than or equal to: 0 (false)
    std::cout << "m <= n: " << (m <= n) << std::endl;  // Less than or equal to: 1 (true)
    
    // Logical operators
    bool p = true, q = false;
    std::cout << "\\nLogical operators:" << std::endl;
    std::cout << std::boolalpha;  // Display booleans as true/false
    std::cout << "p && q: " << (p && q) << std::endl;  // Logical AND: false
    std::cout << "p || q: " << (p || q) << std::endl;  // Logical OR: true
    std::cout << "!p: " << (!p) << std::endl;          // Logical NOT: false
    
    // Bitwise operators
    int r = 5;  // 0101 in binary
    int s = 3;  // 0011 in binary
    std::cout << "\\nBitwise operators:" << std::endl;
    std::cout << "r & s: " << (r & s) << std::endl;    // Bitwise AND: 1 (0001)
    std::cout << "r | s: " << (r | s) << std::endl;    // Bitwise OR: 7 (0111)
    std::cout << "r ^ s: " << (r ^ s) << std::endl;    // Bitwise XOR: 6 (0110)
    std::cout << "~r: " << (~r) << std::endl;          // Bitwise NOT: -6
    
    // Shift operators
    std::cout << "r << 1: " << (r << 1) << std::endl;  // Left shift: 10 (1010)
    std::cout << "r >> 1: " << (r >> 1) << std::endl;  // Right shift: 2 (0010)
    
    // Conditional (ternary) operator
    int age = 20;
    std::string status = (age >= 18) ? "Adult" : "Minor";
    std::cout << "\\nConditional operator:" << std::endl;
    std::cout << "Status: " << status << std::endl;    // Adult
    
    // sizeof operator
    std::cout << "\\nsizeof operator:" << std::endl;
    std::cout << "sizeof(int): " << sizeof(int) << " bytes" << std::endl;
    std::cout << "sizeof(r): " << sizeof(r) << " bytes" << std::endl;
    
    // Comma operator
    int result = (x = 5, x + 3);
    std::cout << "\\nComma operator:" << std::endl;
    std::cout << "result: " << result << std::endl;    // 8
    
    // Pointer operators
    int value = 42;
    int* ptr = &value;  // & is the address-of operator
    std::cout << "\\nPointer operators:" << std::endl;
    std::cout << "value: " << value << std::endl;          // 42
    std::cout << "&value: " << &value << std::endl;        // Address of value
    std::cout << "ptr: " << ptr << std::endl;              // Same address
    std::cout << "*ptr: " << *ptr << std::endl;            // 42 (* is the dereference operator)
    
    // Member access operators
    struct Point {
        int x;
        int y;
    };
    
    Point point = {10, 20};
    Point* pointPtr = &point;
    
    std::cout << "\\nMember access operators:" << std::endl;
    std::cout << "point.x: " << point.x << std::endl;          // 10 (. is the direct member access)
    std::cout << "pointPtr->y: " << pointPtr->y << std::endl;  // 20 (-> is indirect member access)
    
    return 0;
}`,
      explanation: "This example demonstrates the various operators available in C++, including arithmetic operators, unary operators, increment/decrement operators, assignment operators, comparison operators, logical operators, bitwise operators, shift operators, the conditional operator, the sizeof operator, the comma operator, pointer operators, and member access operators."
    }
  ],
  quiz: [
    {
      question: "What is the difference between the prefix (++i) and postfix (i++) increment operators in C++?",
      options: [
        "There is no difference",
        "Prefix returns the value after incrementing, postfix returns the original value before incrementing",
        "Prefix works with integers, postfix works with floating point numbers",
        "Prefix can only be used in for loops, postfix can be used anywhere"
      ],
      correctAnswer: 1,
      explanation: "With prefix increment (++i), the value is incremented first, and then the new value is used in the expression. With postfix increment (i++), the original value is used in the expression, and then the value is incremented. This can lead to different behaviors when used in complex expressions."
    }
  ],
  flashcards: [
    {
      front: "What are the main differences between the assignment operator (=) and the equality operator (==) in C++?",
      back: "The assignment operator (=) assigns the value on the right side to the variable on the left side. The equality operator (==) compares the values on both sides and returns a boolean result (true if equal, false if not). A common error is using = when == is intended in conditional statements, which can lead to unexpected behavior because assignment expressions also have a value."
    }
  ]
};
