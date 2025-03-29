
import { Topic } from '../../types';

export const modulesTopic: Topic = {
  id: "ruby-modules",
  title: "Modules",
  description: "Learn about modules in Ruby",
  content: `
# Modules in Ruby

Modules are a way of grouping together methods, classes, and constants.
  `,
  codeExamples: [
    {
      title: "Defining a Module",
      code: `
module MyModule
  def self.greet(name)
    puts "Hello, \#{name}!"
  end
end

MyModule.greet("Alice")  # Hello, Alice!
      `,
      explanation: "This example demonstrates how to define and use a module in Ruby."
    }
  ],
  quiz: [
    {
      question: "What is the purpose of modules in Ruby?",
      options: ["To define classes", "To group methods, classes, and constants", "To create objects", "To define variables"],
      correctAnswer: 1,
      explanation: "Modules are used to group together methods, classes, and constants."
    }
  ],
  flashcards: [
    {
      front: "What are modules in Ruby?",
      back: "Modules are a way of grouping together methods, classes, and constants."
    }
  ]
};
