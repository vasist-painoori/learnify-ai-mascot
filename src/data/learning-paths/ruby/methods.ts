
import { Topic } from '../../types';

export const methodsTopic: Topic = {
  id: "ruby-methods",
  title: "Methods",
  description: "Understand how to define and use methods in Ruby",
  content: `
# Methods in Ruby

Methods are blocks of code that can be called by name. They are defined using the def keyword.
  `,
  codeExamples: [
    {
      title: "Defining a Method",
      code: `
def greet(name)
  puts "Hello, \#{name}!"
end

greet("Alice")  # Hello, Alice!
      `,
      explanation: "This example demonstrates how to define and call a method in Ruby."
    }
  ],
  quiz: [
    {
      question: "Which keyword is used to define a method in Ruby?",
      options: ["method", "def", "function", "define"],
      correctAnswer: 1,
      explanation: "In Ruby, the def keyword is used to define a method."
    }
  ],
  flashcards: [
    {
      front: "How do you define a method in Ruby?",
      back: "Methods in Ruby are defined using the def keyword, followed by the method name and parameters."
    }
  ]
};
