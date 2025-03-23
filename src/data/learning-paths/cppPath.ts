
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
        // ... Additional C++ topics would be defined here
      ]
    }
  ]
};
