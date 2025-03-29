
import { Topic } from '../../types';

export const controlStructuresTopic: Topic = {
  id: "ruby-control-structures",
  title: "Control Structures",
  description: "Understand how to use control structures in Ruby",
  content: `
# Control Structures in Ruby

Ruby provides control structures such as if, else, elsif, and case for controlling the flow of execution.
  `,
  codeExamples: [
    {
      title: "If-Else Statement",
      code: `
age = 20

if age >= 18
  puts "You are an adult"
else
  puts "You are not an adult"
end
      `,
      explanation: "This example demonstrates the use of an if-else statement in Ruby."
    }
  ],
  quiz: [
    {
      question: "Which keyword is used for 'else if' in Ruby?",
      options: ["elseif", "else if", "elsif", "elif"],
      correctAnswer: 2,
      explanation: "In Ruby, the keyword used for 'else if' is elsif."
    }
  ],
  flashcards: [
    {
      front: "What are the main control structures in Ruby?",
      back: "The main control structures in Ruby are if, else, elsif, and case."
    }
  ]
};
