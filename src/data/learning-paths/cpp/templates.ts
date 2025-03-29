
import { Topic } from '../../types';

export const templatesTopic: Topic = {
  id: "cpp-templates",
  title: "Templates in C++",
  description: "Learn about generic programming with templates in C++",
  content: `
# Templates in C++

Templates allow you to write generic code that works with any data type, promoting code reusability and type safety.
  `,
  codeExamples: [
    {
      title: "Function and Class Templates",
      code: `#include <iostream>
#include <string>
#include <vector>
#include <type_traits>  // For type traits

// Function template
template <typename T>
T maximum(T a, T b) {
    return (a > b) ? a : b;
}

// Function template with multiple types
template <typename T, typename U>
auto add(T a, U b) -> decltype(a + b) {  // Trailing return type (C++11)
    return a + b;
}

// Function template with non-type parameter
template <typename T, int Size>
void printArray(T (&arr)[Size]) {
    for (int i = 0; i < Size; i++) {
        std::cout << arr[i] << " ";
    }
    std::cout << std::endl;
}

// Class template
template <typename T>
class Stack {
private:
    std::vector<T> elements;
    
public:
    void push(const T& value) {
        elements.push_back(value);
    }
    
    T pop() {
        if (elements.empty()) {
            throw std::out_of_range("Stack is empty");
        }
        
        T top = elements.back();
        elements.pop_back();
        return top;
    }
    
    bool isEmpty() const {
        return elements.empty();
    }
    
    size_t size() const {
        return elements.size();
    }
};

// Class template with multiple parameters
template <typename T, typename Container = std::vector<T>>
class Queue {
private:
    Container container;
    
public:
    void enqueue(const T& value) {
        container.push_back(value);
    }
    
    T dequeue() {
        if (container.empty()) {
            throw std::out_of_range("Queue is empty");
        }
        
        T front = container.front();
        container.erase(container.begin());
        return front;
    }
    
    bool isEmpty() const {
        return container.empty();
    }
    
    size_t size() const {
        return container.size();
    }
};

// Template specialization
template <>
class Stack<bool> {
private:
    std::vector<bool> elements;
    
public:
    void push(bool value) {
        elements.push_back(value);
        std::cout << "Specialized push for bool" << std::endl;
    }
    
    bool pop() {
        if (elements.empty()) {
            throw std::out_of_range("Stack is empty");
        }
        
        bool top = elements.back();
        elements.pop_back();
        return top;
    }
    
    bool isEmpty() const {
        return elements.empty();
    }
    
    size_t size() const {
        return elements.size();
    }
};

// Template with default type
template <typename T = int>
class Container {
private:
    T value;
    
public:
    Container(const T& val) : value(val) {}
    
    T getValue() const {
        return value;
    }
};

// Variadic templates (C++11)
template <typename T>
T sum(T t) {
    return t;
}

template <typename T, typename... Args>
T sum(T first, Args... args) {
    return first + sum(args...);
}

// Template with constraints (C++20)
/*
template <typename T>
requires std::is_arithmetic_v<T>
T multiply(T a, T b) {
    return a * b;
}

// Shorter syntax with concepts (C++20)
template <std::integral T>
T factorial(T n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}
*/

// SFINAE (Substitution Failure Is Not An Error)
// Only enabled if T has a value_type member
template <typename T>
typename std::enable_if<std::is_class<T>::value, bool>::type
hasValueType(const T& container) {
    // This won't compile for non-container types
    typename T::value_type val;
    std::cout << "Container with value_type" << std::endl;
    return true;
}

// Fallback for types that don't have value_type
template <typename T>
typename std::enable_if<!std::is_class<T>::value, bool>::type
hasValueType(const T& value) {
    std::cout << "Not a container type" << std::endl;
    return false;
}

int main() {
    // Using function template
    std::cout << "Max of 10 and 20: " << maximum(10, 20) << std::endl;
    std::cout << "Max of 3.14 and 2.71: " << maximum(3.14, 2.71) << std::endl;
    std::cout << "Max of 'a' and 'z': " << maximum('a', 'z') << std::endl;
    
    // Using function template with multiple types
    std::cout << "Add int and double: " << add(5, 3.14) << std::endl;
    
    // Using function template with non-type parameter
    int intArray[] = {1, 2, 3, 4, 5};
    char charArray[] = {'a', 'b', 'c'};
    
    std::cout << "Int array: ";
    printArray(intArray);
    
    std::cout << "Char array: ";
    printArray(charArray);
    
    // Using class template
    Stack<int> intStack;
    intStack.push(10);
    intStack.push(20);
    intStack.push(30);
    
    std::cout << "Int stack size: " << intStack.size() << std::endl;
    std::cout << "Popped: " << intStack.pop() << std::endl;
    std::cout << "New size: " << intStack.size() << std::endl;
    
    Stack<std::string> stringStack;
    stringStack.push("Hello");
    stringStack.push("World");
    
    std::cout << "String stack size: " << stringStack.size() << std::endl;
    std::cout << "Popped: " << stringStack.pop() << std::endl;
    
    // Using specialized template
    Stack<bool> boolStack;
    boolStack.push(true);  // Uses specialized implementation
    
    // Using class template with multiple parameters
    Queue<int> intQueue;
    intQueue.enqueue(100);
    intQueue.enqueue(200);
    std::cout << "Int queue size: " << intQueue.size() << std::endl;
    std::cout << "Dequeued: " << intQueue.dequeue() << std::endl;
    
    // Using template with default type
    Container<> defaultContainer(42);  // Uses default type (int)
    Container<double> doubleContainer(3.14);
    
    std::cout << "Default container value: " << defaultContainer.getValue() << std::endl;
    std::cout << "Double container value: " << doubleContainer.getValue() << std::endl;
    
    // Using variadic template
    std::cout << "Sum of 1, 2, 3, 4, 5: " << sum(1, 2, 3, 4, 5) << std::endl;
    std::cout << "Sum of 1.1, 2.2, 3.3: " << sum(1.1, 2.2, 3.3) << std::endl;
    
    // Using C++20 constraints (commented out for compatibility)
    // std::cout << "Multiply: " << multiply(10, 20) << std::endl;
    // std::cout << "Factorial: " << factorial(5) << std::endl;
    
    // Using SFINAE
    std::vector<int> vec;
    hasValueType(vec);  // Container with value_type
    hasValueType(10);   // Not a container type
    
    return 0;
}`,
      explanation: "This example demonstrates various aspects of templates in C++, including function templates, class templates, template specialization, default template parameters, variadic templates, SFINAE (Substitution Failure Is Not An Error) for compile-time template selection, and comments on newer features like constraints and concepts in C++20."
    }
  ],
  quiz: [
    {
      question: "What is the main purpose of templates in C++?",
      options: [
        "To make code run faster",
        "To enable generic programming with type safety",
        "To reduce memory usage",
        "To simplify error handling"
      ],
      correctAnswer: 1,
      explanation: "The main purpose of templates in C++ is to enable generic programming with type safety. Templates allow you to write algorithms and data structures that work with any data type, without sacrificing type checking, which promotes code reuse while maintaining performance."
    }
  ],
  flashcards: [
    {
      front: "What is the difference between function overloading and function templates in C++?",
      back: "Function overloading requires you to define multiple versions of a function, each with different parameter types. Function templates allow you to define a single generic version of a function that works with many different types. Overloading happens at compile time based on the number and types of arguments. Templates generate specific function instances for each type used, also at compile time."
    }
  ]
};
