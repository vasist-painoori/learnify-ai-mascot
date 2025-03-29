
import { Topic } from '../../types';

export const introductionTopic: Topic = {
  id: "cpp-introduction",
  title: "Introduction to C++",
  description: "Get started with C++ programming language",
  content: `
# Introduction to C++

C++ is a powerful, general-purpose programming language that extends the C language with object-oriented features.
  `,
  codeExamples: [
    {
      title: "Hello, World!",
      code: `#include <iostream>

int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}`,
      explanation: "This is the classic first program in C++. It includes the iostream library for input/output operations, defines a main function (the entry point of the program), uses cout to print 'Hello, World!' to the console, and returns 0 to indicate successful execution."
    }
  ],
  quiz: [
    {
      question: "When was C++ first created?",
      options: ["1972", "1979", "1985", "1998"],
      correctAnswer: 1,
      explanation: "C++ was developed by Bjarne Stroustrup at Bell Labs starting in 1979 as an extension of the C language. It was initially called 'C with Classes' before being renamed C++ in 1983."
    }
  ],
  flashcards: [
    {
      front: "What does C++ add to the C language?",
      back: "C++ extends C by adding object-oriented features like classes, inheritance, polymorphism, encapsulation, and exceptions, as well as features like templates, namespaces, and the Standard Template Library (STL)."
    }
  ]
};
