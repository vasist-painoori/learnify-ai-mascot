
import { Topic } from '../../types';

export const dataTypesTopic: Topic = {
  id: "rust-data-types",
  title: "Data Types in Rust",
  description: "Learn about the various data types available in Rust",
  content: `
# Data Types in Rust

Rust is a statically typed language, which means that it must know the types of all variables at compile time.
  `,
  codeExamples: [
    {
      title: "Scalar Types",
      code: `fn main() {
    // Integer
    let a: i32 = 5;
    
    // Floating point
    let b: f64 = 2.0;
    
    // Boolean
    let c: bool = true;
    
    // Character
    let d: char = 'z';
    
    println!("a: {}, b: {}, c: {}, d: {}", a, b, c, d);
}`,
      explanation: "This example shows the scalar types in Rust: integers, floating-point numbers, booleans, and characters."
    }
  ],
  quiz: [
    {
      question: "Which of the following is NOT a scalar type in Rust?",
      options: ["Integer", "Float", "Boolean", "Array"],
      correctAnswer: 3,
      explanation: "Array is a compound type, not a scalar type in Rust."
    }
  ],
  flashcards: [
    {
      front: "What are the two types of data types in Rust?",
      back: "Scalar types (integers, floats, booleans, and characters) and compound types (tuples and arrays)."
    }
  ]
};
