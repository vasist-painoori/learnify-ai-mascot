
import { Topic } from '../../types';

export const debuggingTopic: Topic = {
  id: "ruby-debugging",
  title: "Debugging",
  description: "Learn how to debug Ruby code",
  content: `
# Debugging in Ruby

Debugging is the process of finding and fixing errors in your code.
  `,
  codeExamples: [
    {
      title: "Using the Debugger",
      code: `
# require 'debug'
# a = 5
# b = 10
# debugger
# puts a + b
      `,
      explanation: "This example shows how to use the debugger in Ruby."
    }
  ],
  quiz: [
    {
      question: "What is debugging?",
      options: ["Defining classes", "Finding and fixing errors", "Creating objects", "Defining variables"],
      correctAnswer: 1,
      explanation: "Debugging is the process of finding and fixing errors in your code."
    }
  ],
  flashcards: [
    {
      front: "What is debugging in Ruby?",
      back: "Debugging is the process of finding and fixing errors in your code."
    }
  ]
};
