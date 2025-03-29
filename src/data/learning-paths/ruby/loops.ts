
import { Topic } from '../../types';

export const loopsTopic: Topic = {
  id: "ruby-loops",
  title: "Loops",
  description: "Learn about the different types of loops in Ruby",
  content: `
# Loops in Ruby

Ruby supports various types of loops including while, until, for, and each.
  `,
  codeExamples: [
    {
      title: "While Loop",
      code: `
i = 0
while i < 5
  puts i
  i += 1
end
      `,
      explanation: "This example demonstrates the use of a while loop in Ruby."
    }
  ],
  quiz: [
    {
      question: "Which loop is used to iterate over a collection in Ruby?",
      options: ["while", "until", "for", "each"],
      correctAnswer: 3,
      explanation: "The each loop is commonly used to iterate over a collection in Ruby."
    }
  ],
  flashcards: [
    {
      front: "What are the main types of loops in Ruby?",
      back: "The main types of loops in Ruby are while, until, for, and each."
    }
  ]
};
