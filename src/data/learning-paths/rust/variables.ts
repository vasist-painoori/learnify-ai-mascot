
import { Topic } from '../../types';

export const variablesTopic: Topic = {
  id: "rust-variables",
  title: "Variables in Rust",
  description: "Learn about variables, mutability, and shadowing in Rust",
  content: `
# Variables in Rust

By default, variables in Rust are immutable. To make them mutable, you use the 'mut' keyword.
  `,
  codeExamples: [
    {
      title: "Variable Declaration and Mutability",
      code: `fn main() {
    // Immutable variable
    let x = 5;
    // x = 6; // This would cause an error
    
    // Mutable variable
    let mut y = 5;
    y = 6; // This is valid
    
    // Shadowing
    let z = 5;
    let z = z + 1; // This creates a new variable z
    
    println!("x: {}, y: {}, z: {}", x, y, z);
}`,
      explanation: "This example demonstrates immutable variables, mutable variables, and shadowing in Rust."
    }
  ],
  quiz: [
    {
      question: "How do you make a variable mutable in Rust?",
      options: ["var x = 5;", "let x = 5;", "let mut x = 5;", "mutable x = 5;"],
      correctAnswer: 2,
      explanation: "You use the 'mut' keyword with 'let' to make a variable mutable in Rust."
    }
  ],
  flashcards: [
    {
      front: "What is shadowing in Rust?",
      back: "Shadowing is declaring a new variable with the same name as a previous variable, effectively creating a new variable."
    }
  ]
};
