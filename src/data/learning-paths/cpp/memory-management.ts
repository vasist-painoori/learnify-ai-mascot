
import { Topic } from '../../types';

export const memoryManagementTopic: Topic = {
  id: "cpp-memory-management",
  title: "Memory Management in C++",
  description: "Learn about dynamic memory allocation and memory management in C++",
  content: `
# Memory Management in C++

C++ gives you direct control over memory allocation and deallocation, which is powerful but requires careful handling.
  `,
  codeExamples: [
    {
      title: "Dynamic Memory Allocation",
      code: `#include <iostream>
#include <string>
#include <memory>  // For smart pointers

// Class for demonstration
class Resource {
private:
    std::string name;
    int* data;
    
public:
    Resource(const std::string& name, int size) 
        : name(name), data(new int[size]) {
        std::cout << "Resource " << name << " allocated" << std::endl;
    }
    
    ~Resource() {
        delete[] data;
        std::cout << "Resource " << name << " deallocated" << std::endl;
    }
    
    std::string getName() const {
        return name;
    }
};

// Function that demonstrates memory leak if not careful
void potentialMemoryLeak() {
    int* numbers = new int[10];
    
    // Do something with numbers
    for (int i = 0; i < 10; i++) {
        numbers[i] = i * 10;
    }
    
    // Simulate an early return or exception
    if (numbers[5] == 50) {
        std::cout << "Early return without cleanup!" << std::endl;
        
        // Proper cleanup before early return
        delete[] numbers;
        return;
    }
    
    // Cleanup
    delete[] numbers;
}

// Function to demonstrate proper RAII pattern
void properRaiiFunction() {
    // Local object with destructor will be automatically cleaned up
    Resource res("LocalResource", 100);
    
    // Even if we return early or exception is thrown, destructor will be called
    std::cout << "Using " << res.getName() << std::endl;
    
    // No explicit cleanup needed
}

int main() {
    // Stack allocation (automatic memory management)
    {
        int stackArray[5] = {1, 2, 3, 4, 5};
        std::cout << "Stack array first element: " << stackArray[0] << std::endl;
    } // stackArray is automatically deallocated here
    
    // Dynamic allocation with new and delete
    int* singleInt = new int(42);
    std::cout << "Dynamically allocated int: " << *singleInt << std::endl;
    delete singleInt;  // Must manually deallocate
    
    // Dynamic array allocation
    int* intArray = new int[5];
    for (int i = 0; i < 5; i++) {
        intArray[i] = i + 1;
    }
    std::cout << "Dynamically allocated array first element: " << intArray[0] << std::endl;
    delete[] intArray;  // Must use delete[] for arrays
    
    // Memory leak demonstration (commented out)
    // int* leakedMemory = new int(100);
    // No delete here, causing a memory leak
    
    // Double free demonstration (commented out)
    // int* doubleFree = new int(200);
    // delete doubleFree;
    // delete doubleFree;  // Causes undefined behavior/crash
    
    // Use-after-free demonstration (commented out)
    // int* dangling = new int(300);
    // delete dangling;
    // *dangling = 400;  // Undefined behavior
    
    // RAII pattern
    properRaiiFunction();
    
    // Potential memory leak function
    potentialMemoryLeak();
    
    // Smart pointers (C++11 and later)
    
    // unique_ptr - exclusive ownership
    std::unique_ptr<int> uniquePtr(new int(500));
    std::cout << "unique_ptr value: " << *uniquePtr << std::endl;
    // uniquePtr will be automatically deleted when it goes out of scope
    
    // Modern way to create unique_ptr
    auto modernUniquePtr = std::make_unique<int>(600);  // C++14 and later
    std::cout << "modern unique_ptr value: " << *modernUniquePtr << std::endl;
    
    // Transferring ownership
    std::unique_ptr<int> newOwner = std::move(uniquePtr);
    // uniquePtr is now empty
    
    // shared_ptr - shared ownership
    std::shared_ptr<Resource> sharedPtr1 = 
        std::make_shared<Resource>("SharedResource", 200);
    
    {
        std::shared_ptr<Resource> sharedPtr2 = sharedPtr1;  // Reference count = 2
        std::cout << "Using " << sharedPtr2->getName() << " inside block" << std::endl;
    } // sharedPtr2 is destroyed, reference count = 1
    
    std::cout << "Using " << sharedPtr1->getName() << " after block" << std::endl;
    // Reference count will become 0 when sharedPtr1 goes out of scope
    
    // weak_ptr - non-owning reference to shared_ptr
    std::shared_ptr<Resource> sharedRes = 
        std::make_shared<Resource>("WeakResource", 300);
    std::weak_ptr<Resource> weakRes = sharedRes;
    
    // Using weak_ptr
    if (auto tempShared = weakRes.lock()) {  // Get a shared_ptr from weak_ptr
        std::cout << "Using " << tempShared->getName() << " via weak_ptr" << std::endl;
    } else {
        std::cout << "Resource no longer exists" << std::endl;
    }
    
    // Resource will be deallocated when sharedRes goes out of scope
    sharedRes.reset();  // Manually release resource
    
    // Try to use the weak_ptr again
    if (auto tempShared = weakRes.lock()) {
        std::cout << "Using resource via weak_ptr" << std::endl;
    } else {
        std::cout << "Resource no longer exists" << std::endl;
    }
    
    // Custom deleter with shared_ptr
    auto customDeleter = [](int* p) {
        std::cout << "Custom deleter called" << std::endl;
        delete p;
    };
    
    std::shared_ptr<int> customDeletePtr(new int(700), customDeleter);
    
    return 0;
}`,
      explanation: "This example demonstrates various aspects of memory management in C++, including stack allocation, dynamic allocation with new and delete, common memory issues like leaks and dangling pointers, the RAII (Resource Acquisition Is Initialization) pattern, and modern memory management with smart pointers (unique_ptr, shared_ptr, and weak_ptr)."
    }
  ],
  quiz: [
    {
      question: "What is RAII in C++?",
      options: [
        "A garbage collection algorithm",
        "A memory allocation function",
        "A design pattern where resource acquisition is tied to object initialization and cleanup to destruction",
        "A way to optimize memory usage"
      ],
      correctAnswer: 2,
      explanation: "RAII (Resource Acquisition Is Initialization) is a C++ design pattern where resource management is tied to object lifetime. Resources are acquired during object construction and released during object destruction, ensuring proper cleanup even when exceptions occur."
    }
  ],
  flashcards: [
    {
      front: "What is the difference between unique_ptr and shared_ptr in C++?",
      back: "std::unique_ptr represents exclusive ownership of a dynamically allocated resource. It cannot be copied, only moved. std::shared_ptr represents shared ownership, where multiple shared_ptrs can own the same resource, which is automatically deleted when the last shared_ptr is destroyed. unique_ptr has less overhead and is preferred when exclusive ownership is sufficient."
    }
  ]
};
