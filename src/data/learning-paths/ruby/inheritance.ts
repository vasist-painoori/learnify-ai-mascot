
import { Topic } from '../../types';

export const inheritanceTopic: Topic = {
  id: "ruby-inheritance",
  title: "Inheritance",
  description: "Understand how to use inheritance in Ruby",
  content: `
# Inheritance in Ruby

Inheritance allows a class to inherit properties and methods from another class.
  `,
  codeExamples: [
    {
      title: "Inheriting from a Class",
      code: `
class Animal
  def speak
    puts "Generic animal sound"
  end
end

class Dog < Animal
  def speak
    puts "Woof!"
  end
end

animal = Animal.new
animal.speak  # Generic animal sound

dog = Dog.new
dog.speak  # Woof!
      `,
      explanation: "This example demonstrates how to use inheritance in Ruby."
    }
  ],
  quiz: [
    {
      question: "What does inheritance allow a class to do?",
      options: ["Create new objects", "Inherit properties and methods", "Destroy objects", "Define methods"],
      correctAnswer: 1,
      explanation: "Inheritance allows a class to inherit properties and methods from another class."
    }
  ],
  flashcards: [
    {
      front: "What is inheritance in object-oriented programming?",
      back: "Inheritance is a mechanism where a class inherits properties and methods from another class."
    }
  ]
};
