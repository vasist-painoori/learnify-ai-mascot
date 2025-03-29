
import { Topic } from '../../types';

export const variablesTopic: Topic = {
  id: "cpp-variables",
  title: "Variables in C++",
  description: "Learn about variables, data types, and variable scope in C++",
  content: `
# Variables in C++

Variables are named storage locations in memory that hold values of specific types.
  `,
  codeExamples: [
    {
      title: "Variable Declaration and Usage",
      code: `#include <iostream>
#include <string>

// Global variable (accessible throughout the program)
int globalVar = 100;

int main() {
    // Basic variable declarations and initialization
    int age = 25;                  // Integer
    double salary = 50000.50;      // Double-precision floating point
    char grade = 'A';              // Single character
    bool isEmployed = true;        // Boolean
    std::string name = "John Doe"; // String (requires <string> header)
    
    // Displaying variables
    std::cout << "Name: " << name << std::endl;
    std::cout << "Age: " << age << std::endl;
    std::cout << "Salary: $" << salary << std::endl;
    std::cout << "Grade: " << grade << std::endl;
    std::cout << "Employed: " << std::boolalpha << isEmployed << std::endl;
    
    // Multiple variables of the same type
    int x = 5, y = 10, z = 15;
    
    // Variable reassignment
    age = 26;
    std::cout << "New age: " << age << std::endl;
    
    // Constants
    const double PI = 3.14159;
    const int MAX_STUDENTS = 30;
    
    // PI = 3.14; // Error: assignment of read-only variable
    
    // Auto keyword (type inference, C++11)
    auto number = 42;      // int
    auto decimal = 3.14;   // double
    auto character = 'X';  // char
    
    std::cout << "Type-inferred variables:" << std::endl;
    std::cout << "number: " << number << std::endl;
    std::cout << "decimal: " << decimal << std::endl;
    std::cout << "character: " << character << std::endl;
    
    // Scope demonstration
    {
        // Local scope
        int localVar = 50;
        std::cout << "Inside block, localVar: " << localVar << std::endl;
        std::cout << "Inside block, globalVar: " << globalVar << std::endl;
    }
    // std::cout << localVar << std::endl; // Error: localVar out of scope
    
    // Static variable (retains value between function calls)
    for (int i = 0; i < 3; i++) {
        static int staticVar = 0;  // Initialized only once
        int normalVar = 0;         // Initialized each time
        
        staticVar++;
        normalVar++;
        
        std::cout << "Iteration " << i << ": ";
        std::cout << "staticVar = " << staticVar << ", ";
        std::cout << "normalVar = " << normalVar << std::endl;
    }
    
    // Type modifiers
    signed int negativeNumber = -10;
    unsigned int positiveOnly = 10;
    long int largeNumber = 1000000L;
    short int smallNumber = 100;
    
    std::cout << "Type modifiers:" << std::endl;
    std::cout << "negativeNumber: " << negativeNumber << std::endl;
    std::cout << "positiveOnly: " << positiveOnly << std::endl;
    std::cout << "largeNumber: " << largeNumber << std::endl;
    std::cout << "smallNumber: " << smallNumber << std::endl;
    
    // sizeof operator (returns size in bytes)
    std::cout << "Sizes in bytes:" << std::endl;
    std::cout << "int: " << sizeof(int) << std::endl;
    std::cout << "double: " << sizeof(double) << std::endl;
    std::cout << "char: " << sizeof(char) << std::endl;
    std::cout << "bool: " << sizeof(bool) << std::endl;
    
    return 0;
}`,
      explanation: "This example demonstrates variable declaration, initialization, and usage in C++. It covers different data types, variable reassignment, constants, type inference with auto, variable scope, static variables, type modifiers, and the sizeof operator."
    }
  ],
  quiz: [
    {
      question: "What does the 'auto' keyword do in C++11 and later?",
      options: [
        "Automatically allocates memory for variables",
        "Declares a variable with automatic storage duration",
        "Enables automatic garbage collection",
        "Enables type inference based on the initializer"
      ],
      correctAnswer: 3,
      explanation: "In C++11 and later, the 'auto' keyword enables type inference, which means the compiler automatically deduces the type of a variable from its initializer expression. This can make code more concise and adaptable to type changes."
    }
  ],
  flashcards: [
    {
      front: "What is the difference between a global variable and a local variable in C++?",
      back: "Global variables are declared outside of all functions and are accessible throughout the entire program. They exist for the program's lifetime. Local variables are declared within a function or block and are only accessible within that function or block. They exist only while that function or block is executing."
    }
  ]
};
