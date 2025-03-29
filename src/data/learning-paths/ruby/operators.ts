
import { Topic } from '../../types';

export const operatorsTopic: Topic = {
  id: "ruby-operators",
  title: "Operators",
  description: "Learn about the different operators in Ruby",
  content: `
# Operators in Ruby

Ruby supports a wide range of operators including arithmetic, comparison, and logical operators.
  `,
  codeExamples: [
    {
      title: "Arithmetic Operators",
      code: `
a = 10
b = 5

puts a + b  # 15
puts a - b  # 5
puts a * b  # 50
puts a / b  # 2
puts a % b  # 0
      `,
      explanation: "This example demonstrates the basic arithmetic operators in Ruby."
    }
  ],
  quiz: [
    {
      question: "What does the % operator do in Ruby?",
      options: ["Division", "Multiplication", "Modulus", "Exponentiation"],
      correctAnswer: 2,
      explanation: "The % operator in Ruby returns the remainder of a division."
    }
  ],
  flashcards: [
    {
      front: "What are the main types of operators in Ruby?",
      back: "The main types of operators in Ruby are arithmetic, comparison, and logical operators."
    }
  ]
};
