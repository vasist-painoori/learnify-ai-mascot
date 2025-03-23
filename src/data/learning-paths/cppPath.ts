import { LearningPath } from '../types';

export const cppPath: LearningPath = {
  languageId: "cpp",
  modules: [
    {
      id: "cpp-basics",
      title: "C++ Fundamentals",
      description: "Learn the core concepts of C++ programming",
      topics: [
        {
          id: "cpp-intro",
          title: "Introduction to C++",
          description: "Understanding the basics of C++ programming",
          content: `
# Introduction to C++

C++ is a powerful general-purpose programming language that extends the C language with features like classes, objects, and exceptions.
          `,
          codeExamples: [
            {
              title: "Hello World in C++",
              code: `#include <iostream>

int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}`,
              explanation: "This is a basic C++ program that includes the iostream library, defines a main function (the entry point), and uses the cout object to print text to the console."
            }
          ],
          quiz: [
            {
              question: "Which programming paradigm does C++ support?",
              options: ["Only procedural", "Only object-oriented", "Only functional", "Multiple paradigms including procedural, object-oriented, and generic"],
              correctAnswer: 3,
              explanation: "C++ supports multiple programming paradigms, including procedural, object-oriented, functional, and generic programming. This flexibility makes it a versatile language for different types of applications."
            }
          ],
          flashcards: [
            {
              front: "What is C++?",
              back: "C++ is a general-purpose programming language created as an extension of the C language. It adds features like classes, objects, inheritance, polymorphism, templates, and exception handling. It's used for systems programming, game development, and applications requiring performance and control."
            },
            {
              front: "What is a pointer in C++?",
              back: "A pointer in C++ is a variable that stores the memory address of another variable. Pointers provide direct memory access and are declared using the asterisk (*) symbol. They are powerful but require careful handling to avoid memory leaks and segmentation faults."
            },
            {
              front: "What is the difference between stack and heap memory in C++?",
              back: "In C++, stack memory is automatically managed and used for local variables (fast allocation but limited size). Heap memory is manually managed with new/delete operators and used for dynamic allocation (slower but larger size)."
            },
            {
              front: "What is a reference in C++?",
              back: "A reference in C++ is an alias for an existing variable. Unlike pointers, references cannot be null, must be initialized when declared, and cannot be reassigned to refer to a different variable after initialization."
            },
            {
              front: "What is the difference between 'new' and 'malloc' in C++?",
              back: "'new' is a C++ operator that allocates memory and calls constructors for objects, while 'malloc' is a C function that only allocates memory. 'new' returns the correct type, and 'malloc' returns void*. 'new' throws exceptions on failure, while 'malloc' returns NULL."
            }
          ]
        },
        {
          id: "cpp-variables",
          title: "Variables and Data Types",
          description: "Understanding variables and data types in C++",
          content: `
# Variables and Data Types in C++

C++ provides various data types and ways to store and manipulate data in memory.
          `,
          codeExamples: [
            {
              title: "Basic Data Types",
              code: `#include <iostream>
using namespace std;

int main() {
    // Integer types
    int a = 42;
    short b = 100;
    long c = 123456789L;
    
    // Floating point types
    float f = 3.14f;
    double d = 3.14159;
    
    // Character type
    char ch = 'A';
    
    // Boolean type
    bool flag = true;
    
    // Output values
    cout << "Integer: " << a << endl;
    cout << "Short: " << b << endl;
    cout << "Long: " << c << endl;
    cout << "Float: " << f << endl;
    cout << "Double: " << d << endl;
    cout << "Char: " << ch << endl;
    cout << "Bool: " << flag << endl;
    
    return 0;
}`,
              explanation: "This example demonstrates the basic data types available in C++, including integers, floating-point numbers, characters, and booleans."
            }
          ],
          quiz: [
            {
              question: "What is the size of an int in C++?",
              options: ["Always 2 bytes", "Always 4 bytes", "Always 8 bytes", "Implementation dependent"],
              correctAnswer: 3,
              explanation: "The size of an int in C++ is implementation dependent. While it's commonly 4 bytes on many modern systems, this is not guaranteed by the standard."
            }
          ],
          flashcards: [
            {
              front: "What are the fundamental data types in C++?",
              back: "The fundamental data types in C++ include:\n- char (character)\n- int (integer)\n- float (single-precision floating-point)\n- double (double-precision floating-point)\n- bool (boolean)\n- void (no type)\nEach can be modified with signed/unsigned and short/long."
            }
          ]
        }
      ]
    }
  ]
};
