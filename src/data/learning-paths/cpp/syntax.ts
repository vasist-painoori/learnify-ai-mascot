
import { Topic } from '../../types';

export const syntaxTopic: Topic = {
  id: "cpp-syntax",
  title: "C++ Syntax",
  description: "Learn the basic syntax and structure of C++ code",
  content: `
# C++ Syntax

C++ has a C-like syntax with additional features for object-oriented programming.
  `,
  codeExamples: [
    {
      title: "Basic Syntax Elements",
      code: `#include <iostream>  // Include directive for input/output

// This is a single-line comment

/*
This is a
multi-line comment
*/

// Namespace declaration
namespace MyNamespace {
    int value = 10;
}

// Function declaration
int add(int a, int b);

// Main function - entry point of the program
int main() {
    // Variable declaration and initialization
    int number = 10;
    float pi = 3.14f;
    char letter = 'A';
    bool isTrue = true;
    
    // Output to console
    std::cout << "Number: " << number << std::endl;
    std::cout << "Value from namespace: " << MyNamespace::value << std::endl;
    
    // Using namespace
    using namespace std;
    cout << "Using namespace std" << endl;
    
    // Calling a function
    int sum = add(5, 3);
    cout << "5 + 3 = " << sum << endl;
    
    // If statement
    if (number > 5) {
        cout << "Number is greater than 5" << endl;
    } else {
        cout << "Number is 5 or less" << endl;
    }
    
    // Return statement
    return 0;  // Indicates successful execution
}

// Function definition
int add(int a, int b) {
    return a + b;
}`,
      explanation: "This example demonstrates basic C++ syntax elements including comments, include directives, namespace declarations, variable declarations, output statements, function declarations and definitions, the main function, and a simple if statement."
    }
  ],
  quiz: [
    {
      question: "What does the '#include' directive do in C++?",
      options: [
        "Defines a new function",
        "Includes code from another file",
        "Creates a new variable",
        "Starts a new namespace"
      ],
      correctAnswer: 1,
      explanation: "The #include directive in C++ tells the preprocessor to insert the contents of another file (usually a header file) into the source code before compiling. It's commonly used to include library functions and declarations."
    }
  ],
  flashcards: [
    {
      front: "What is the purpose of the 'std::' prefix in C++?",
      back: "The 'std::' prefix refers to the standard namespace in C++. It's used to access elements (like cout, cin, string, vector, etc.) from the C++ Standard Library without using the 'using namespace std;' directive, which helps prevent naming conflicts."
    }
  ]
};
