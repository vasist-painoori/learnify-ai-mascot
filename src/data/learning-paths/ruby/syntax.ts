
import { Topic } from '../../types';

export const syntaxTopic: Topic = {
  id: "ruby-syntax",
  title: "Basic Syntax",
  description: "Learn about Ruby's syntax, variables, and data types",
  content: `
# Ruby Syntax

Ruby's syntax is designed to be easy to read and write. It is heavily influenced by Perl and Smalltalk.
  `,
  codeExamples: [
    {
      title: "Variables",
      code: `
name = "Alice"
age = 30
puts "Name: \#{name}, Age: \#{age}"
      `,
      explanation: "This example shows how to declare variables and use string interpolation."
    }
  ],
  quiz: [
    {
      question: "How do you declare a variable in Ruby?",
      options: ["var name = 'value'", "name := 'value'", "name = 'value'", "$name = 'value'"],
      correctAnswer: 2,
      explanation: "In Ruby, you declare a variable simply by assigning a value to a name."
    }
  ],
  flashcards: [
    {
      front: "What is string interpolation in Ruby?",
      back: "String interpolation is a way to embed expressions inside strings using \#{expression}."
    }
  ]
};
