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
        },
        {
          id: "cpp-inheritance",
          title: "Inheritance",
          description: "Understanding inheritance in C++ object-oriented programming",
          content: `
# Inheritance in C++

Inheritance is a key concept in OOP that allows a class to inherit properties and methods from another class.
          `,
          codeExamples: [
            {
              title: "Basic Inheritance",
              code: `#include <iostream>
using namespace std;

// Base class
class Animal {
protected:
    string name;
    
public:
    Animal(string name) : name(name) {}
    
    void eat() {
        cout << name << " is eating." << endl;
    }
    
    virtual void makeSound() {
        cout << "Animal sound" << endl;
    }
};

// Derived class
class Dog : public Animal {
private:
    string breed;
    
public:
    Dog(string name, string breed) : Animal(name), breed(breed) {}
    
    void makeSound() override {
        cout << name << " barks: Woof!" << endl;
    }
    
    void displayBreed() {
        cout << name << " is a " << breed << endl;
    }
};

int main() {
    Animal genericAnimal("Generic Animal");
    genericAnimal.eat(); // Generic Animal is eating.
    genericAnimal.makeSound(); // Animal sound
    
    Dog myDog("Buddy", "Golden Retriever");
    myDog.eat(); // Buddy is eating.
    myDog.makeSound(); // Buddy barks: Woof!
    myDog.displayBreed(); // Buddy is a Golden Retriever
    
    // Polymorphism
    Animal* animalPtr = &myDog;
    animalPtr->makeSound(); // Buddy barks: Woof!
    
    return 0;
}`,
              explanation: "This example demonstrates inheritance in C++. The Dog class inherits from the Animal class, gaining its properties and methods while also adding its own functionality and overriding some methods."
            }
          ],
          quiz: [
            {
              question: "What is the access specifier that makes members of a base class accessible to derived classes but not to other classes?",
              options: ["public", "private", "protected", "internal"],
              correctAnswer: 2,
              explanation: "The 'protected' access specifier makes members accessible within the class itself, derived classes, and friends, but not accessible to other parts of the program."
            }
          ],
          flashcards: [
            {
              front: "What are the three types of inheritance in C++?",
              back: "The three types of inheritance in C++ are: 1) Public inheritance - public members of base class become public in derived class, protected remain protected. 2) Protected inheritance - public and protected members of base class become protected in derived class. 3) Private inheritance - public and protected members of base class become private in derived class."
            }
          ]
        },
        {
          id: "cpp-templates",
          title: "Templates",
          description: "Working with generic programming in C++",
          content: `
# Templates in C++

Templates provide a way to write generic code that works with different data types without sacrificing type safety.
          `,
          codeExamples: [
            {
              title: "Function Templates",
              code: `#include <iostream>
using namespace std;

// Function template
template <typename T>
T max(T a, T b) {
    return (a > b) ? a : b;
}

int main() {
    // Using the template with different types
    cout << "Max of 3 and 7: " << max(3, 7) << endl;
    cout << "Max of 3.14 and 2.71: " << max(3.14, 2.71) << endl;
    cout << "Max of 'a' and 'z': " << max('a', 'z') << endl;
    
    return 0;
}`,
              explanation: "This example shows a function template that finds the maximum of two values. The template works with different data types as long as they support the > operator."
            },
            {
              title: "Class Templates",
              code: `#include <iostream>
using namespace std;

// Class template
template <typename T>
class Stack {
private:
    T* elements;
    int top;
    int capacity;
    
public:
    Stack(int size = 10) {
        elements = new T[size];
        capacity = size;
        top = -1;
    }
    
    ~Stack() {
        delete[] elements;
    }
    
    void push(T item) {
        if (top == capacity - 1) {
            cout << "Stack overflow!" << endl;
            return;
        }
        elements[++top] = item;
    }
    
    T pop() {
        if (top == -1) {
            cout << "Stack underflow!" << endl;
            return T();
        }
        return elements[top--];
    }
    
    bool isEmpty() {
        return top == -1;
    }
};

int main() {
    // Integer stack
    Stack<int> intStack;
    intStack.push(10);
    intStack.push(20);
    intStack.push(30);
    
    cout << "Integer stack: ";
    while (!intStack.isEmpty()) {
        cout << intStack.pop() << " ";  // 30 20 10
    }
    cout << endl;
    
    // String stack
    Stack<string> stringStack;
    stringStack.push("Hello");
    stringStack.push("World");
    stringStack.push("C++");
    
    cout << "String stack: ";
    while (!stringStack.isEmpty()) {
        cout << stringStack.pop() << " ";  // C++ World Hello
    }
    cout << endl;
    
    return 0;
}`,
              explanation: "This example demonstrates a class template for a stack data structure. The template allows creating stacks for different data types like integers, strings, or custom classes."
            }
          ],
          quiz: [
            {
              question: "What is a major advantage of using templates in C++?",
              options: ["They make the code run faster", "They allow code to work with multiple data types without duplication", "They reduce the executable size", "They automatically handle memory management"],
              correctAnswer: 1,
              explanation: "Templates enable generic programming, allowing you to write code that works with multiple data types while maintaining type safety. This reduces code duplication and increases reusability."
            }
          ],
          flashcards: [
            {
              front: "What's the difference between function overloading and function templates?",
              back: "Function overloading requires creating multiple functions with the same name but different parameter types. Each function must be defined separately. Function templates, on the other hand, allow you to write a single function that works with different types, and the compiler generates the appropriate code for each type used."
            }
          ]
        },
        {
          id: "cpp-stl",
          title: "Standard Template Library (STL)",
          description: "Using C++'s rich collection of container classes and algorithms",
          content: `
# Standard Template Library (STL) in C++

The STL is a powerful library that provides a collection of template classes and functions for common data structures and algorithms.
          `,
          codeExamples: [
            {
              title: "Containers",
              code: `#include <iostream>
#include <vector>
#include <list>
#include <map>
#include <string>
using namespace std;

int main() {
    // Vector - Dynamic array
    vector<int> numbers = {1, 2, 3, 4, 5};
    numbers.push_back(6); // Add element
    
    cout << "Vector elements: ";
    for (int num : numbers) {
        cout << num << " "; // 1 2 3 4 5 6
    }
    cout << endl;
    
    // List - Doubly linked list
    list<string> fruits = {"apple", "banana", "orange"};
    fruits.push_back("grape");
    fruits.push_front("kiwi");
    
    cout << "List elements: ";
    for (const string& fruit : fruits) {
        cout << fruit << " "; // kiwi apple banana orange grape
    }
    cout << endl;
    
    // Map - Key-value pairs
    map<string, int> ages;
    ages["Alice"] = 30;
    ages["Bob"] = 25;
    ages["Charlie"] = 35;
    
    cout << "Map elements:" << endl;
    for (const auto& pair : ages) {
        cout << pair.first << ": " << pair.second << endl;
        // Prints in sorted order by key:
        // Alice: 30
        // Bob: 25
        // Charlie: 35
    }
    
    return 0;
}`,
              explanation: "This example demonstrates three common STL containers: vector (dynamic array), list (doubly linked list), and map (associative container). Each has different performance characteristics and use cases."
            },
            {
              title: "Algorithms",
              code: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    vector<int> numbers = {5, 2, 8, 1, 9, 3, 7, 4, 6};
    
    // Sorting
    sort(numbers.begin(), numbers.end());
    
    cout << "Sorted: ";
    for (int num : numbers) {
        cout << num << " "; // 1 2 3 4 5 6 7 8 9
    }
    cout << endl;
    
    // Finding an element
    auto it = find(numbers.begin(), numbers.end(), 7);
    if (it != numbers.end()) {
        cout << "Found 7 at position: " << (it - numbers.begin()) << endl;
    }
    
    // Counting
    int count_greater_than_5 = count_if(numbers.begin(), numbers.end(), 
        [](int n) { return n > 5; });
    cout << "Elements greater than 5: " << count_greater_than_5 << endl;
    
    // Transform
    vector<int> doubled(numbers.size());
    transform(numbers.begin(), numbers.end(), doubled.begin(), 
        [](int n) { return n * 2; });
    
    cout << "Doubled: ";
    for (int num : doubled) {
        cout << num << " "; // 2 4 6 8 10 12 14 16 18
    }
    cout << endl;
    
    return 0;
}`,
              explanation: "This example shows some of the algorithms provided by the STL, such as sort, find, count_if, and transform. These algorithms work with iterators, making them usable with any container that provides the appropriate iterator type."
            }
          ],
          quiz: [
            {
              question: "Which STL container would be most appropriate for implementing a dictionary or phone book?",
              options: ["vector", "list", "map", "deque"],
              correctAnswer: 2,
              explanation: "A map is the most appropriate container for a dictionary-like structure because it stores key-value pairs and provides efficient lookups by key. It's implemented as a balanced binary search tree, typically a red-black tree."
            }
          ],
          flashcards: [
            {
              front: "What are the three main components of the STL?",
              back: "The three main components of the STL are: 1) Containers - data structures like vector, list, map; 2) Algorithms - functions like sort, find, count; and 3) Iterators - objects that connect algorithms with containers, allowing algorithms to work with different container types."
            }
          ]
        },
        {
          id: "cpp-memory",
          title: "Memory Management",
          description: "Understanding memory allocation, pointers, and smart pointers",
          content: `
# Memory Management in C++

C++ gives programmers direct control over memory allocation and deallocation, which requires careful management to avoid memory leaks and other issues.
          `,
          codeExamples: [
            {
              title: "Raw Pointers",
              code: `#include <iostream>
using namespace std;

int main() {
    // Stack allocation (automatic memory management)
    int stackVar = 5;
    cout << "Stack variable: " << stackVar << endl;
    
    // Heap allocation with new (manual memory management)
    int* heapInt = new int;
    *heapInt = 10;
    cout << "Heap int: " << *heapInt << endl;
    
    // Always delete what you new
    delete heapInt;
    
    // Dynamic array
    int* array = new int[5];
    for (int i = 0; i < 5; i++) {
        array[i] = i * 2;
    }
    
    cout << "Dynamic array: ";
    for (int i = 0; i < 5; i++) {
        cout << array[i] << " "; // 0 2 4 6 8
    }
    cout << endl;
    
    // Delete array
    delete[] array;
    
    // Bad practice - using after delete (undefined behavior)
    // cout << "After delete: " << *heapInt << endl; // Danger!
    
    return 0;
}`,
              explanation: "This example shows basic memory management in C++ using raw pointers. It demonstrates the difference between stack and heap allocation, and the importance of deleting heap-allocated memory to avoid memory leaks."
            },
            {
              title: "Smart Pointers",
              code: `#include <iostream>
#include <memory>
using namespace std;

class Resource {
public:
    Resource(const string& name) : name(name) {
        cout << "Resource acquired: " << name << endl;
    }
    
    ~Resource() {
        cout << "Resource released: " << name << endl;
    }
    
    void use() {
        cout << "Using resource: " << name << endl;
    }
    
private:
    string name;
};

int main() {
    // unique_ptr - exclusive ownership
    {
        // Resource automatically released when ptr goes out of scope
        unique_ptr<Resource> ptr = make_unique<Resource>("Database");
        ptr->use();
        
        // Transfer ownership
        unique_ptr<Resource> ptr2 = move(ptr);
        
        // ptr no longer owns the resource
        if (ptr == nullptr) {
            cout << "ptr no longer owns the resource" << endl;
        }
        
        ptr2->use();
        
    } // ptr2 destroyed here, resource automatically released
    
    cout << "--------" << endl;
    
    // shared_ptr - shared ownership
    {
        shared_ptr<Resource> ptr1 = make_shared<Resource>("Network");
        
        {
            // Both pointers share ownership of the resource
            shared_ptr<Resource> ptr2 = ptr1;
            
            cout << "Use count: " << ptr1.use_count() << endl; // 2
            
            ptr2->use();
        } // ptr2 destroyed, but resource still alive
        
        cout << "Use count after inner scope: " << ptr1.use_count() << endl; // 1
        
        ptr1->use();
        
    } // ptr1 destroyed, resource released
    
    cout << "--------" << endl;
    
    // weak_ptr - non-owning reference
    {
        shared_ptr<Resource> shared = make_shared<Resource>("Cache");
        weak_ptr<Resource> weak = shared;
        
        // Use the weak_ptr
        if (auto temp = weak.lock()) {
            temp->use();
            cout << "Resource still alive" << endl;
        }
        
        // Reset the shared_ptr
        shared.reset();
        
        // Try to use the weak_ptr again
        if (auto temp = weak.lock()) {
            temp->use();
        } else {
            cout << "Resource no longer available" << endl;
        }
    }
    
    return 0;
}`,
              explanation: "This example demonstrates smart pointers in C++, which provide automatic memory management. unique_ptr represents exclusive ownership, shared_ptr allows multiple pointers to share ownership, and weak_ptr provides a non-owning reference to a resource managed by shared_ptr."
            }
          ],
          quiz: [
            {
              question: "What is the main benefit of using smart pointers over raw pointers in C++?",
              options: ["They improve program speed", "They reduce memory usage", "They provide automatic memory management to prevent memory leaks", "They allow pointers to be used in containers"],
              correctAnswer: 2,
              explanation: "Smart pointers provide automatic memory management through RAII (Resource Acquisition Is Initialization). They automatically deallocate memory when the pointer goes out of scope, helping prevent memory leaks that can occur with raw pointers if you forget to call delete."
            }
          ],
          flashcards: [
            {
              front: "What is the difference between stack and heap memory in C++?",
              back: "Stack memory is managed automatically by the compiler and used for local variables. It has a fixed size, faster allocation, and automatic deallocation when variables go out of scope. Heap memory is managed manually by the programmer using new/delete, has a dynamic size, slower allocation, and must be explicitly deallocated to avoid memory leaks."
            }
          ]
        },
        {
          id: "cpp-exceptions",
          title: "Exception Handling",
          description: "Managing errors and exceptional situations in C++",
          content: `
# Exception Handling in C++

Exception handling provides a way to respond to exceptional circumstances (like runtime errors) in programs by transferring control to special functions called handlers.
          `,
          codeExamples: [
            {
              title: "Basic Exception Handling",
              code: `#include <iostream>
#include <stdexcept>
using namespace std;

double divide(double a, double b) {
    if (b == 0) {
        throw runtime_error("Division by zero!");
    }
    return a / b;
}

int main() {
    try {
        double result1 = divide(10, 2);
        cout << "10 / 2 = " << result1 << endl;
        
        double result2 = divide(7, 0);  // This will throw an exception
        cout << "This line won't be executed" << endl;
    }
    catch (const runtime_error& e) {
        cout << "Caught an exception: " << e.what() << endl;
    }
    
    cout << "Program continues after the exception" << endl;
    
    return 0;
}`,
              explanation: "This example demonstrates basic exception handling in C++. The divide function throws a runtime_error exception when attempting to divide by zero. The exception is caught in the main function, allowing the program to handle the error gracefully and continue execution."
            },
            {
              title: "Multiple Exception Types",
              code: `#include <iostream>
#include <stdexcept>
#include <vector>
using namespace std;

void processValue(int value) {
    if (value < 0) {
        throw invalid_argument("Value cannot be negative");
    }
    else if (value == 0) {
        throw runtime_error("Value cannot be zero");
    }
    else if (value > 100) {
        throw out_of_range("Value must be less than or equal to 100");
    }
    
    cout << "Processing value: " << value << endl;
}

int main() {
    vector<int> values = {50, -10, 0, 150};
    
    for (int value : values) {
        try {
            cout << "Trying value: " << value << endl;
            processValue(value);
        }
        catch (const invalid_argument& e) {
            cout << "Invalid argument: " << e.what() << endl;
        }
        catch (const runtime_error& e) {
            cout << "Runtime error: " << e.what() << endl;
        }
        catch (const exception& e) {
            // Catch any other standard exceptions
            cout << "Other exception: " << e.what() << endl;
        }
        catch (...) {
            // Catch any non-standard exceptions
            cout << "Unknown exception occurred" << endl;
        }
        
        cout << "---" << endl;
    }
    
    return 0;
}`,
              explanation: "This example shows how to handle different types of exceptions. The catch blocks are arranged from most specific to most general, allowing different types of exceptions to be handled in different ways. The catch(...) block catches any exception not caught by the earlier blocks."
            }
          ],
          quiz: [
            {
              question: "What happens if an exception is thrown but not caught in a C++ program?",
              options: ["The program ignores the exception", "The program continues normally", "The program terminates", "The exception is automatically handled by the compiler"],
              correctAnswer: 2,
              explanation: "If an exception is thrown but not caught, the program terminates abnormally. The std::terminate function is called, which by default calls abort() to end the program. This is why it's important to catch exceptions at an appropriate level."
            }
          ],
          flashcards: [
            {
              front: "What is RAII (Resource Acquisition Is Initialization) and how does it relate to exception safety?",
              back: "RAII is a C++ programming technique where resource acquisition (allocation) occurs during object creation, and resource release (deallocation) occurs during object destruction. It ensures resources are properly cleaned up even when exceptions occur, as destructors are called during stack unwinding when an exception propagates."
            }
          ]
        },
        {
          id: "cpp-multithreading",
          title: "Multithreading",
          description: "Writing concurrent code in C++",
          content: `
# Multithreading in C++

Multithreading allows a program to perform multiple operations concurrently, potentially improving performance on multi-core systems.
          `,
          codeExamples: [
            {
              title: "Basic Thread Creation",
              code: `#include <iostream>
#include <thread>
#include <vector>
using namespace std;

// Function to be executed in a thread
void task(int id) {
    cout << "Thread " << id << " started" << endl;
    
    // Simulate some work
    this_thread::sleep_for(chrono::milliseconds(1000));
    
    cout << "Thread " << id << " finished" << endl;
}

int main() {
    cout << "Main thread started" << endl;
    
    // Create and start multiple threads
    vector<thread> threads;
    
    for (int i = 1; i <= 3; ++i) {
        threads.emplace_back(task, i);
    }
    
    cout << "Threads created" << endl;
    
    // Wait for all threads to finish
    for (auto& t : threads) {
        t.join();
    }
    
    cout << "All threads finished" << endl;
    
    return 0;
}`,
              explanation: "This example demonstrates how to create and manage multiple threads in C++. Each thread executes the task function with a different ID. The main thread waits for all threads to complete using the join method before continuing."
            },
            {
              title: "Thread Synchronization",
              code: `#include <iostream>
#include <thread>
#include <mutex>
#include <vector>
using namespace std;

// Shared resource
int counter = 0;
mutex counter_mutex; // Mutex to protect the counter

void increment(int iterations) {
    for (int i = 0; i < iterations; ++i) {
        // Lock the mutex before accessing the shared resource
        counter_mutex.lock();
        ++counter; // Critical section
        counter_mutex.unlock();
    }
}

void RAII_increment(int iterations) {
    for (int i = 0; i < iterations; ++i) {
        // RAII approach using lock_guard
        lock_guard<mutex> lock(counter_mutex);
        ++counter; // Critical section
        // Mutex automatically unlocked when lock goes out of scope
    }
}

int main() {
    const int iterations = 10000;
    const int thread_count = 4;
    
    cout << "Initial counter: " << counter << endl;
    
    {
        // Using manual lock/unlock
        vector<thread> threads;
        counter = 0;
        
        for (int i = 0; i < thread_count; ++i) {
            threads.emplace_back(increment, iterations);
        }
        
        for (auto& t : threads) {
            t.join();
        }
        
        cout << "Expected: " << iterations * thread_count << endl;
        cout << "Counter after manual locking: " << counter << endl;
    }
    
    {
        // Using RAII lock_guard
        vector<thread> threads;
        counter = 0;
        
        for (int i = 0; i < thread_count; ++i) {
            threads.emplace_back(RAII_increment, iterations);
        }
        
        for (auto& t : threads) {
            t.join();
        }
        
        cout << "Expected: " << iterations * thread_count << endl;
        cout << "Counter after RAII locking: " << counter << endl;
    }
    
    return 0;
}`,
              explanation: "This example shows how to synchronize access to shared resources using mutexes. It demonstrates both manual locking/unlocking and the RAII approach using lock_guard. Proper synchronization ensures that the counter is incremented correctly by multiple threads."
            }
          ],
          quiz: [
            {
              question: "What is a race condition in multithreaded programming?",
              options: [
                "A contest between threads to see which one finishes first",
                "A situation where multiple threads are trying to access and modify shared data simultaneously, leading to unpredictable results",
                "A performance optimization technique for thread execution",
                "A condition where threads are racing to acquire resources"
              ],
              correctAnswer: 1,
              explanation: "A race condition occurs when multiple threads access and modify shared data simultaneously without proper synchronization. The outcome depends on the relative timing of the threads, leading to unpredictable and often incorrect results. Mutexes, locks, and other synchronization mechanisms are used to prevent race conditions."
            }
          ],
          flashcards: [
            {
              front: "What is the difference between std::mutex and std::recursive_mutex in C++?",
              back: "A std::mutex can only be locked once by a thread; attempting to lock it again will cause a deadlock. A std::recursive_mutex can be locked multiple times by the same thread (with a matching number of unlocks required), which is useful for recursive functions or complex locking scenarios."
            }
          ]
        }
      ]
    }
  ]
};
