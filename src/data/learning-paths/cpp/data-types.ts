
import { Topic } from '../../types';

export const dataTypesTopic: Topic = {
  id: "cpp-data-types",
  title: "Data Types in C++",
  description: "Learn about the various data types available in C++",
  content: `
# Data Types in C++

C++ provides a rich set of built-in data types to represent different kinds of values.
  `,
  codeExamples: [
    {
      title: "C++ Data Types",
      code: `#include <iostream>
#include <string>
#include <typeinfo>
#include <limits>
#include <complex>
#include <vector>

int main() {
    // Fundamental data types
    
    // Integer types
    bool isTrue = true;               // Boolean (true or false)
    char character = 'A';             // Character (1 byte)
    int number = 42;                  // Integer (usually 4 bytes)
    short shortNumber = 100;          // Short integer (usually 2 bytes)
    long longNumber = 100000L;        // Long integer (at least 4 bytes)
    long long longLongNumber = 10000000000LL;  // Long long integer (at least 8 bytes)
    
    // Unsigned integer types (can't store negative values)
    unsigned int positiveNumber = 50;
    unsigned char byte = 255;
    
    // Floating-point types
    float floatNumber = 3.14f;        // Single precision
    double doubleNumber = 3.14159;    // Double precision
    long double longDouble = 3.14159265358979L;  // Extended precision
    
    // Display values and sizes
    std::cout << "Fundamental data types:" << std::endl;
    std::cout << "bool: " << std::boolalpha << isTrue << ", size: " << sizeof(bool) << " bytes" << std::endl;
    std::cout << "char: '" << character << "', size: " << sizeof(char) << " bytes" << std::endl;
    std::cout << "int: " << number << ", size: " << sizeof(int) << " bytes" << std::endl;
    std::cout << "short: " << shortNumber << ", size: " << sizeof(short) << " bytes" << std::endl;
    std::cout << "long: " << longNumber << ", size: " << sizeof(long) << " bytes" << std::endl;
    std::cout << "long long: " << longLongNumber << ", size: " << sizeof(long long) << " bytes" << std::endl;
    std::cout << "unsigned int: " << positiveNumber << ", size: " << sizeof(unsigned int) << " bytes" << std::endl;
    std::cout << "unsigned char: " << static_cast<int>(byte) << ", size: " << sizeof(unsigned char) << " bytes" << std::endl;
    std::cout << "float: " << floatNumber << ", size: " << sizeof(float) << " bytes" << std::endl;
    std::cout << "double: " << doubleNumber << ", size: " << sizeof(double) << " bytes" << std::endl;
    std::cout << "long double: " << longDouble << ", size: " << sizeof(long double) << " bytes" << std::endl;
    
    // Range of values
    std::cout << "\\nRange of values:" << std::endl;
    std::cout << "int: " << std::numeric_limits<int>::min() << " to " << std::numeric_limits<int>::max() << std::endl;
    std::cout << "unsigned int: 0 to " << std::numeric_limits<unsigned int>::max() << std::endl;
    std::cout << "float: " << std::numeric_limits<float>::min() << " to " << std::numeric_limits<float>::max() << std::endl;
    
    // Derived data types
    
    // Arrays
    int numbers[5] = {1, 2, 3, 4, 5};
    char name[] = "C++";
    
    std::cout << "\\nArrays:" << std::endl;
    std::cout << "First element of numbers: " << numbers[0] << std::endl;
    std::cout << "Name: " << name << std::endl;
    
    // Pointers
    int* ptr = &number;
    
    std::cout << "\\nPointers:" << std::endl;
    std::cout << "Value of number: " << number << std::endl;
    std::cout << "Address of number: " << ptr << std::endl;
    std::cout << "Value pointed to by ptr: " << *ptr << std::endl;
    
    // References
    int& ref = number;
    
    std::cout << "\\nReferences:" << std::endl;
    std::cout << "Value of number: " << number << std::endl;
    std::cout << "Value of ref: " << ref << std::endl;
    
    // Change value through reference
    ref = 100;
    std::cout << "After changing ref, number: " << number << std::endl;
    
    // User-defined data types
    
    // Enum
    enum Color {RED, GREEN, BLUE};
    Color favoriteColor = BLUE;
    
    std::cout << "\\nEnum:" << std::endl;
    std::cout << "Favorite color: " << favoriteColor << std::endl;
    
    // Enum class (C++11)
    enum class Direction {NORTH, SOUTH, EAST, WEST};
    Direction heading = Direction::NORTH;
    
    std::cout << "Direction (enum class): " << static_cast<int>(heading) << std::endl;
    
    // Struct
    struct Person {
        std::string name;
        int age;
    };
    
    Person person = {"Alice", 30};
    
    std::cout << "\\nStruct:" << std::endl;
    std::cout << "Person: " << person.name << ", " << person.age << " years old" << std::endl;
    
    // Union
    union Value {
        int intValue;
        float floatValue;
        char charValue;
    };
    
    Value value;
    value.intValue = 42;
    
    std::cout << "\\nUnion:" << std::endl;
    std::cout << "Value as int: " << value.intValue << std::endl;
    
    value.floatValue = 3.14f;
    std::cout << "Value as float: " << value.floatValue << std::endl;
    std::cout << "Value as int (after setting float): " << value.intValue << " (corrupted)" << std::endl;
    
    // Standard library types
    
    // std::string
    std::string message = "Hello, C++!";
    
    std::cout << "\\nStandard library types:" << std::endl;
    std::cout << "String: " << message << ", length: " << message.length() << std::endl;
    
    // std::vector (dynamic array)
    std::vector<int> vec = {10, 20, 30, 40, 50};
    
    std::cout << "Vector: ";
    for (const auto& element : vec) {
        std::cout << element << " ";
    }
    std::cout << std::endl;
    
    // std::complex
    std::complex<double> complexNumber(3.0, 4.0);  // Real: 3.0, Imaginary: 4.0
    
    std::cout << "Complex number: " << complexNumber << std::endl;
    std::cout << "Magnitude: " << std::abs(complexNumber) << std::endl;
    
    return 0;
}`,
      explanation: "This example demonstrates the various data types available in C++, including fundamental types (integers, floating-point numbers, boolean, character), derived types (arrays, pointers, references), user-defined types (enums, structs, unions), and standard library types (string, vector, complex). It shows how to declare and use these types, along with information about their sizes and ranges."
    }
  ],
  quiz: [
    {
      question: "What is the difference between a struct and a union in C++?",
      options: [
        "Structs are for primitive types, unions are for complex types",
        "Structs allocate memory for all members, unions share memory among members",
        "Structs are for public access, unions are for private access",
        "Structs can have methods, unions cannot"
      ],
      correctAnswer: 1,
      explanation: "In C++, structs allocate memory for all their members separately, so each member has its own storage space. Unions, on the other hand, share a single storage space among all their members. This means that when you change one member of a union, it affects the values of the other members because they occupy the same memory location."
    }
  ],
  flashcards: [
    {
      front: "What is the difference between a pointer and a reference in C++?",
      back: "Pointers can be reassigned to point to different objects, can be null, require dereferencing with * to access the value, and are declared with an asterisk (*). References cannot be reassigned after initialization, cannot be null, transparently refer to the target object without special syntax, and are declared with an ampersand (&). Pointers are often used for optional relationships and dynamic memory, while references are safer for function parameters and return values."
    }
  ]
};
