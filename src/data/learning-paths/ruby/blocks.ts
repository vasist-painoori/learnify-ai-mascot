
import { Topic } from '../../types';

export const blocksTopic: Topic = {
  id: "ruby-blocks",
  title: "Blocks",
  description: "Learn about blocks in Ruby",
  content: `
# Blocks in Ruby

Blocks are chunks of code that can be passed to methods. They are similar to anonymous functions.
  `,
  codeExamples: [
    {
      title: "Using a Block",
      code: `
[1, 2, 3].each do |number|
  puts number * 2
end
      `,
      explanation: "This example demonstrates how to use a block in Ruby."
    }
  ],
  quiz: [
    {
      question: "What are blocks in Ruby similar to?",
      options: ["Classes", "Modules", "Anonymous functions", "Variables"],
      correctAnswer: 2,
      explanation: "Blocks in Ruby are similar to anonymous functions."
    }
  ],
  flashcards: [
    {
      front: "What are blocks in Ruby?",
      back: "Blocks are chunks of code that can be passed to methods, similar to anonymous functions."
    }
  ]
};
