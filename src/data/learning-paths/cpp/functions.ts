
import { Topic } from '../../types';

export const functionsTopic: Topic = {
  id: "cpp-functions",
  title: "Functions in C++",
  description: "Learn how to define and use functions in C++",
  content: `
# Functions in C++

Functions are blocks of code that perform a specific task and can be called from other parts of the program.
  `,
  codeExamples: [
    {
      title: "Function Definition and Calling",
      code: `#include <iostream>
#include <string>
#include <vector>
#include <functional>  // For std::function

// Function declaration (prototype)
int add(int a, int b);

// Function with no parameters and no return value
void sayHello() {
    std::cout << "Hello!" << std::endl;
}

// Function with parameters and return value
int subtract(int a, int b) {
    return a - b;
}

// Function with default parameters
void displayInfo(std::string name, int age = 20, std::string occupation = "Student") {
    std::cout << "Name: " << name << ", Age: " << age << ", Occupation: " << occupation << std::endl;
}

// Function with reference parameters
void swap(int& a, int& b) {
    int temp = a;
    a = b;
    b = temp;
}

// Function with const parameters
double calculateAverage(const std::vector<int>& numbers) {
    double sum = 0;
    for (const auto& num : numbers) {
        sum += num;
    }
    return numbers.empty() ? 0 : sum / numbers.size();
}

// Function overloading
int multiply(int a, int b) {
    return a * b;
}

double multiply(double a, double b) {
    return a * b;
}

// Function with array parameter
int sum(int arr[], int size) {
    int total = 0;
    for (int i = 0; i < size; i++) {
        total += arr[i];
    }
    return total;
}

// Recursive function
int factorial(int n) {
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

// Inline function
inline int square(int x) {
    return x * x;
}

// Function pointer
typedef int (*MathFunc)(int, int);

// Function that takes a function pointer
int operateOnNumbers(int a, int b, MathFunc operation) {
    return operation(a, b);
}

// Lambda function (C++11)
auto multiply2 = [](int x, int y) -> int { return x * y; };

// Function template
template <typename T>
T max(T a, T b) {
    return (a > b) ? a : b;
}

// Function with variadic template (C++11)
template <typename T>
T sum(T t) {
    return t;
}

template <typename T, typename... Args>
T sum(T first, Args... args) {
    return first + sum(args...);
}

// Main function
int main() {
    // Calling a function with no parameters
    sayHello();
    
    // Calling a function with parameters
    int result = add(5, 3);
    std::cout << "5 + 3 = " << result << std::endl;
    
    // Calling a function with return value
    int difference = subtract(10, 4);
    std::cout << "10 - 4 = " << difference << std::endl;
    
    // Calling a function with default parameters
    displayInfo("Alice");
    displayInfo("Bob", 25);
    displayInfo("Charlie", 30, "Developer");
    
    // Calling a function with reference parameters
    int x = 10, y = 20;
    std::cout << "Before swap: x = " << x << ", y = " << y << std::endl;
    swap(x, y);
    std::cout << "After swap: x = " << x << ", y = " << y << std::endl;
    
    // Calling a function with vector parameter
    std::vector<int> numbers = {10, 20, 30, 40, 50};
    double avg = calculateAverage(numbers);
    std::cout << "Average: " << avg << std::endl;
    
    // Function overloading
    std::cout << "5 * 3 = " << multiply(5, 3) << std::endl;
    std::cout << "2.5 * 3.0 = " << multiply(2.5, 3.0) << std::endl;
    
    // Calling a function with array parameter
    int arr[] = {1, 2, 3, 4, 5};
    int arraySum = sum(arr, 5);
    std::cout << "Sum of array: " << arraySum << std::endl;
    
    // Recursive function
    std::cout << "Factorial of 5: " << factorial(5) << std::endl;
    
    // Inline function
    std::cout << "Square of 7: " << square(7) << std::endl;
    
    // Function pointer
    MathFunc operation = add;
    std::cout << "Operation (add): " << operation(10, 5) << std::endl;
    
    operation = subtract;
    std::cout << "Operation (subtract): " << operation(10, 5) << std::endl;
    
    // Function that takes a function pointer
    std::cout << "Operate (add): " << operateOnNumbers(10, 5, add) << std::endl;
    std::cout << "Operate (subtract): " << operateOnNumbers(10, 5, subtract) << std::endl;
    
    // Lambda function
    std::cout << "Lambda (multiply): " << multiply2(6, 7) << std::endl;
    
    // Using std::function
    std::function<int(int,int)> func = add;
    std::cout << "std::function (add): " << func(10, 5) << std::endl;
    
    // Auto and lambda
    auto greet = [](const std::string& name) {
        std::cout << "Hello, " << name << "!" << std::endl;
    };
    greet("David");
    
    // Function template
    std::cout << "Max (int): " << max(10, 20) << std::endl;
    std::cout << "Max (double): " << max(3.14, 2.71) << std::endl;
    std::cout << "Max (char): " << max('A', 'Z') << std::endl;
    
    // Variadic template function
    std::cout << "Sum: " << sum(1, 2, 3, 4, 5) << std::endl;
    
    return 0;
}

// Function definition (can be after main)
int add(int a, int b) {
    return a + b;
}`,
      explanation: "This example demonstrates various aspects of functions in C++, including function declarations and definitions, parameters, return values, default parameters, reference parameters, const parameters, function overloading, recursion, inline functions, function pointers, lambdas, function templates, and variadic templates."
    }
  ],
  quiz: [
    {
      question: "What is function overloading in C++?",
      options: [
        "Defining a function inside another function",
        "Defining multiple functions with the same name but different parameters",
        "Defining a function that calls itself",
        "Defining a function that can be inlined"
      ],
      correctAnswer: 1,
      explanation: "Function overloading in C++ allows you to define multiple functions with the same name but different parameters (different number, type, or order of parameters). The compiler determines which function to call based on the arguments provided."
    }
  ],
  flashcards: [
    {
      front: "What is the difference between call-by-value and call-by-reference in C++ functions?",
      back: "In call-by-value, a copy of the argument is passed to the function, so changes to the parameter inside the function don't affect the original argument. In call-by-reference, a reference to the original argument is passed, so changes to the parameter affect the original argument. Call-by-reference is achieved using reference parameters (Type&) or pointer parameters (Type*)."
    }
  ]
};
