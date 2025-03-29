
import { Topic } from '../../types';

export const controlFlowTopic: Topic = {
  id: "cpp-control-flow",
  title: "Control Flow in C++",
  description: "Learn about decision making and loops in C++",
  content: `
# Control Flow in C++

Control flow statements allow you to control the flow of your program's execution based on conditions and iterations.
  `,
  codeExamples: [
    {
      title: "Decision Making and Loops",
      code: `#include <iostream>
#include <string>
#include <vector>

int main() {
    // If statement
    int age = 20;
    if (age >= 18) {
        std::cout << "You are an adult." << std::endl;
    }
    
    // If-else statement
    int temperature = 15;
    if (temperature > 30) {
        std::cout << "It's hot outside!" << std::endl;
    } else {
        std::cout << "It's not hot outside." << std::endl;
    }
    
    // If-else if-else statement
    int score = 85;
    std::string grade;
    
    if (score >= 90) {
        grade = "A";
    } else if (score >= 80) {
        grade = "B";
    } else if (score >= 70) {
        grade = "C";
    } else if (score >= 60) {
        grade = "D";
    } else {
        grade = "F";
    }
    
    std::cout << "Score: " << score << ", Grade: " << grade << std::endl;
    
    // Nested if statements
    int num = 15;
    
    if (num > 0) {
        if (num % 2 == 0) {
            std::cout << num << " is a positive even number." << std::endl;
        } else {
            std::cout << num << " is a positive odd number." << std::endl;
        }
    } else if (num < 0) {
        std::cout << num << " is a negative number." << std::endl;
    } else {
        std::cout << "The number is zero." << std::endl;
    }
    
    // Switch statement
    int day = 3;
    std::string dayName;
    
    switch (day) {
        case 1:
            dayName = "Monday";
            break;
        case 2:
            dayName = "Tuesday";
            break;
        case 3:
            dayName = "Wednesday";
            break;
        case 4:
            dayName = "Thursday";
            break;
        case 5:
            dayName = "Friday";
            break;
        case 6:
            dayName = "Saturday";
            break;
        case 7:
            dayName = "Sunday";
            break;
        default:
            dayName = "Invalid day";
            break;
    }
    
    std::cout << "Day " << day << " is " << dayName << std::endl;
    
    // Conditional operator (ternary)
    bool isAdult = (age >= 18) ? true : false;
    std::cout << "Is adult: " << std::boolalpha << isAdult << std::endl;
    
    // For loop
    std::cout << "For loop:" << std::endl;
    for (int i = 1; i <= 5; i++) {
        std::cout << i << " ";
    }
    std::cout << std::endl;
    
    // Range-based for loop (C++11)
    std::cout << "Range-based for loop:" << std::endl;
    std::vector<int> numbers = {1, 2, 3, 4, 5};
    for (const auto& n : numbers) {
        std::cout << n << " ";
    }
    std::cout << std::endl;
    
    // While loop
    std::cout << "While loop:" << std::endl;
    int j = 1;
    while (j <= 5) {
        std::cout << j << " ";
        j++;
    }
    std::cout << std::endl;
    
    // Do-while loop
    std::cout << "Do-while loop:" << std::endl;
    int k = 1;
    do {
        std::cout << k << " ";
        k++;
    } while (k <= 5);
    std::cout << std::endl;
    
    // Break statement
    std::cout << "Break example:" << std::endl;
    for (int i = 1; i <= 10; i++) {
        if (i == 6) {
            break;  // Exit loop when i is 6
        }
        std::cout << i << " ";
    }
    std::cout << std::endl;
    
    // Continue statement
    std::cout << "Continue example:" << std::endl;
    for (int i = 1; i <= 10; i++) {
        if (i % 2 == 0) {
            continue;  // Skip even numbers
        }
        std::cout << i << " ";  // Print only odd numbers
    }
    std::cout << std::endl;
    
    // Goto statement (use with caution)
    std::cout << "Goto example:" << std::endl;
    int count = 1;
    
start:
    if (count <= 5) {
        std::cout << count << " ";
        count++;
        goto start;
    }
    std::cout << std::endl;
    
    // Nested loops
    std::cout << "Nested loops:" << std::endl;
    for (int i = 1; i <= 3; i++) {
        for (int j = 1; j <= 2; j++) {
            std::cout << "(" << i << "," << j << ") ";
        }
        std::cout << std::endl;
    }
    
    return 0;
}`,
      explanation: "This example demonstrates various control flow statements in C++, including if, if-else, if-else if-else, nested if statements, switch statements, conditional (ternary) operator, for loops, range-based for loops, while loops, do-while loops, break and continue statements, the goto statement, and nested loops."
    }
  ],
  quiz: [
    {
      question: "Which loop in C++ is guaranteed to execute at least once?",
      options: ["for loop", "while loop", "do-while loop", "range-based for loop"],
      correctAnswer: 2,
      explanation: "The do-while loop in C++ always executes its body at least once before checking the condition, unlike for and while loops which check the condition before the first iteration."
    }
  ],
  flashcards: [
    {
      front: "What is the 'fall-through' behavior in a switch statement?",
      back: "In C++, 'fall-through' refers to the behavior where if a case in a switch statement doesn't end with a break statement, execution continues to the next case without checking its condition. This can be either a bug or an intentional feature, depending on the context. In C++17 and later, you can use the [[fallthrough]] attribute to indicate that fall-through is intentional."
    }
  ]
};
