
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
        },
        {
          id: "cpp-control-flow",
          title: "Control Flow",
          description: "Working with conditionals and loops in C++",
          content: `
# Control Flow in C++

Control flow statements determine the order in which code is executed based on certain conditions.
          `,
          codeExamples: [
            {
              title: "Conditional Statements",
              code: `#include <iostream>
using namespace std;

int main() {
    int x = 10;
    
    // If statement
    if (x > 5) {
        cout << "x is greater than 5" << endl;
    }
    
    // If-else statement
    int y = 3;
    if (y > 5) {
        cout << "y is greater than 5" << endl;
    } else {
        cout << "y is not greater than 5" << endl;
    }
    
    // If-else if-else statement
    int z = 5;
    if (z > 10) {
        cout << "z is greater than 10" << endl;
    } else if (z == 5) {
        cout << "z is equal to 5" << endl;
    } else {
        cout << "z is less than 5" << endl;
    }
    
    // Switch statement
    int day = 3;
    switch (day) {
        case 1:
            cout << "Monday" << endl;
            break;
        case 2:
            cout << "Tuesday" << endl;
            break;
        case 3:
            cout << "Wednesday" << endl;
            break;
        case 4:
            cout << "Thursday" << endl;
            break;
        case 5:
            cout << "Friday" << endl;
            break;
        default:
            cout << "Weekend" << endl;
    }
    
    return 0;
}`,
              explanation: "This example demonstrates conditional statements in C++, including if, if-else, if-else if-else, and switch statements."
            }
          ],
          quiz: [
            {
              question: "What is the purpose of the break statement in a switch block?",
              options: ["To exit the entire program", "To skip the current iteration of a loop", "To exit the switch block after executing a case", "To indicate the end of the switch block"],
              correctAnswer: 2,
              explanation: "The break statement is used to exit the switch block after a case has been executed. Without it, execution would 'fall through' to the next case."
            }
          ],
          flashcards: [
            {
              front: "What is the difference between a while loop and a do-while loop in C++?",
              back: "A while loop tests the condition before executing the loop body, so it might not execute at all if the condition is initially false. A do-while loop executes the loop body first and then tests the condition, so it always executes at least once."
            }
          ]
        },
        {
          id: "cpp-functions",
          title: "Functions",
          description: "Creating and using functions in C++",
          content: `
# Functions in C++

Functions are blocks of code designed to perform a specific task. They help organize code and make it reusable.
          `,
          codeExamples: [
            {
              title: "Function Declaration and Definition",
              code: `#include <iostream>
using namespace std;

// Function declaration (prototype)
int add(int a, int b);
void printMessage(string message);
double calculateArea(double radius, double pi = 3.14159);

int main() {
    // Function calls
    int sum = add(5, 3);
    cout << "Sum: " << sum << endl;
    
    printMessage("Hello, C++!");
    
    double area = calculateArea(2.5);
    cout << "Area: " << area << endl;
    
    return 0;
}

// Function definitions
int add(int a, int b) {
    return a + b;
}

void printMessage(string message) {
    cout << message << endl;
}

double calculateArea(double radius, double pi) {
    return pi * radius * radius;
}`,
              explanation: "This example demonstrates function declaration (prototypes), definition, and calling in C++. It also shows functions with different return types, parameters, and default parameter values."
            }
          ],
          quiz: [
            {
              question: "What is function overloading in C++?",
              options: ["Defining multiple functions with the same name but different parameters", "Defining functions inside other functions", "Using default parameter values", "Inheriting functions from a base class"],
              correctAnswer: 0,
              explanation: "Function overloading in C++ allows you to define multiple functions with the same name but different parameters (either different number or types of parameters). The compiler determines which function to call based on the arguments provided."
            }
          ],
          flashcards: [
            {
              front: "What is a function prototype in C++?",
              back: "A function prototype or declaration in C++ provides information to the compiler about a function's name, return type, and parameters without providing the function's body. It allows you to use the function before its actual definition."
            }
          ]
        },
        {
          id: "cpp-classes",
          title: "Classes and Objects",
          description: "Understanding object-oriented programming in C++",
          content: `
# Classes and Objects in C++

Classes are the foundation of object-oriented programming in C++. They allow you to create custom data types with properties and methods.
          `,
          codeExamples: [
            {
              title: "Defining and Using Classes",
              code: `#include <iostream>
#include <string>
using namespace std;

// Class definition
class Person {
private:
    // Private member variables
    string name;
    int age;
    
public:
    // Constructor
    Person(string n, int a) {
        name = n;
        age = a;
    }
    
    // Member functions
    void introduce() {
        cout << "Hi, I'm " << name << " and I'm " << age << " years old." << endl;
    }
    
    // Getters and setters
    string getName() {
        return name;
    }
    
    void setName(string n) {
        name = n;
    }
    
    int getAge() {
        return age;
    }
    
    void setAge(int a) {
        if (a > 0) {
            age = a;
        }
    }
};

int main() {
    // Creating objects
    Person person1("Alice", 30);
    Person person2("Bob", 25);
    
    // Calling member functions
    person1.introduce();
    person2.introduce();
    
    // Using getters and setters
    cout << "Name: " << person1.getName() << endl;
    
    person2.setAge(26);
    cout << "Updated age: " << person2.getAge() << endl;
    
    return 0;
}`,
              explanation: "This example demonstrates how to define a class in C++ with private member variables, a constructor, member functions, and getter/setter methods. It also shows how to create objects from the class and use their methods."
            }
          ],
          quiz: [
            {
              question: "What is encapsulation in C++?",
              options: ["The process of creating objects from classes", "The ability of a class to inherit from another class", "The bundling of data with the methods that operate on that data", "The ability to have multiple methods with the same name"],
              correctAnswer: 2,
              explanation: "Encapsulation is one of the fundamental principles of object-oriented programming. It refers to the bundling of data (attributes) with the methods (functions) that operate on that data, and restricting access to the internal state of the object."
            }
          ],
          flashcards: [
            {
              front: "What is the difference between a class and an object in C++?",
              back: "A class is a blueprint or template for creating objects. It defines the properties (data members) and behaviors (member functions) that objects of that class will have. An object is an instance of a class, which represents a specific entity with actual values for its properties."
            }
          ]
        }
      ]
    }
  ]
};
