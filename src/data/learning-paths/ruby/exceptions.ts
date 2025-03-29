
import { Topic } from '../../types';

export const exceptionsTopic: Topic = {
  id: "ruby-exceptions",
  title: "Exception Handling",
  description: "Understand how to handle exceptions in Ruby",
  content: `
# Exception Handling in Ruby

Exception handling is a way to deal with errors that occur during the execution of a program.
  `,
  codeExamples: [
    {
      title: "Handling Exceptions",
      code: `
begin
  result = 10 / 0
rescue ZeroDivisionError => e
  puts "Error: \#{e.message}"
end
      `,
      explanation: "This example demonstrates how to handle exceptions in Ruby."
    }
  ],
  quiz: [
    {
      question: "What is the purpose of exception handling?",
      options: ["To define classes", "To handle errors", "To create objects", "To define variables"],
      correctAnswer: 1,
      explanation: "Exception handling is used to deal with errors that occur during the execution of a program."
    }
  ],
  flashcards: [
    {
      front: "What is exception handling in Ruby?",
      back: "Exception handling is a way to deal with errors that occur during the execution of a program."
    }
  ]
};
