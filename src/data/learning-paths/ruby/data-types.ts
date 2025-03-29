
import { Topic } from '../../types';

export const dataTypesTopic: Topic = {
  id: "ruby-data-types",
  title: "Data Types",
  description: "Explore the different data types available in Ruby",
  content: `
# Data Types in Ruby

Ruby supports various data types including numbers, strings, arrays, and hashes.
  `,
  codeExamples: [
    {
      title: "Data Types",
      code: `
number = 42
string = "Hello"
array = [1, 2, 3]
hash = { "name" => "Alice", "age" => 30 }

puts number.class  # Integer
puts string.class  # String
puts array.class   # Array
puts hash.class    # Hash
      `,
      explanation: "This example demonstrates the basic data types in Ruby and how to check their classes."
    }
  ],
  quiz: [
    {
      question: "What is the class of an array in Ruby?",
      options: ["List", "Array", "Collection", "Sequence"],
      correctAnswer: 1,
      explanation: "In Ruby, the class of an array is Array."
    }
  ],
  flashcards: [
    {
      front: "What are the main data types in Ruby?",
      back: "The main data types in Ruby are numbers (Integer, Float), strings (String), arrays (Array), and hashes (Hash)."
    }
  ]
};
