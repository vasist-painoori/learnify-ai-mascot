
import { Topic } from '../../types';

export const classesTopic: Topic = {
  id: "ruby-classes",
  title: "Classes and Objects",
  description: "Learn about object-oriented programming in Ruby",
  content: `
# Classes and Objects in Ruby

Ruby is an object-oriented language. Everything in Ruby is an object.
  `,
  codeExamples: [
    {
      title: "Defining a Class",
      code: `
class Dog
  def initialize(name, breed)
    @name = name
    @breed = breed
  end

  def bark
    puts "Woof!"
  end
end

dog = Dog.new("Buddy", "Golden Retriever")
dog.bark  # Woof!
      `,
      explanation: "This example demonstrates how to define a class and create an object in Ruby."
    }
  ],
  quiz: [
    {
      question: "What is the purpose of the initialize method in a Ruby class?",
      options: ["To define the class", "To create a new object", "To initialize the object", "To destroy the object"],
      correctAnswer: 2,
      explanation: "The initialize method is used to initialize the object when it is created."
    }
  ],
  flashcards: [
    {
      front: "What is the main concept of object-oriented programming?",
      back: "The main concept of object-oriented programming is to organize code into classes and objects."
    }
  ]
};
