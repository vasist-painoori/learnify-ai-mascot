
import { Topic } from '../../types';

export const regularExpressionsTopic: Topic = {
  id: "ruby-regular-expressions",
  title: "Regular Expressions",
  description: "Understand how to use regular expressions in Ruby",
  content: `
# Regular Expressions in Ruby

Regular expressions are patterns used to match character combinations in strings.
  `,
  codeExamples: [
    {
      title: "Matching a Pattern",
      code: `
string = "Hello, World!"
if string =~ /Hello/
  puts "String contains 'Hello'"
end
      `,
      explanation: "This example demonstrates how to use regular expressions in Ruby."
    }
  ],
  quiz: [
    {
      question: "What are regular expressions used for?",
      options: ["To define classes", "To match character combinations in strings", "To create objects", "To define variables"],
      correctAnswer: 1,
      explanation: "Regular expressions are patterns used to match character combinations in strings."
    }
  ],
  flashcards: [
    {
      front: "What are regular expressions in Ruby?",
      back: "Regular expressions are patterns used to match character combinations in strings."
    }
  ]
};
