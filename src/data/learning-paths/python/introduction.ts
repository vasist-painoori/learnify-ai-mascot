
import { Topic } from '../../types';

export const introductionTopic: Topic = {
  id: "python-introduction",
  title: "Introduction to Python",
  description: "Get started with Python programming",
  content: `
# Introduction to Python

Python is a high-level, interpreted programming language known for its simplicity and readability.
  `,
  codeExamples: [
    {
      title: "Hello, World!",
      code: `# A simple Python program
print("Hello, World!")

# Running in interactive mode
>>> print("Hello from Python interpreter!")
Hello from Python interpreter!`,
      explanation: "This example shows the classic Hello World program in Python. Python's syntax is clean and straightforward, requiring minimal code to accomplish tasks."
    }
  ],
  quiz: [
    {
      question: "Who created Python?",
      options: ["James Gosling", "Bjarne Stroustrup", "Guido van Rossum", "Brendan Eich"],
      correctAnswer: 2,
      explanation: "Python was created by Guido van Rossum and first released in 1991."
    }
  ],
  flashcards: [
    {
      front: "What are some key features of Python?",
      back: "Python features include dynamic typing, automatic memory management, support for multiple programming paradigms (procedural, object-oriented, functional), and a large standard library."
    }
  ]
};
