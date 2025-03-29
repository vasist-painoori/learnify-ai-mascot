
import { Topic } from '../../types';

export const syntaxTopic: Topic = {
  id: "rust-syntax",
  title: "Rust Syntax",
  description: "Learn the basic syntax of Rust programming language",
  content: `
# Rust Syntax

Rust's syntax is similar to C++ but with distinct features that enhance memory safety and concurrency.
  `,
  codeExamples: [
    {
      title: "Basic Syntax",
      code: `// This is a comment
fn main() {
    // Variable declaration
    let x = 5;
    
    // Print to console
    println!("The value of x is: {}", x);
    
    // Block of code
    {
        let y = 10;
        println!("The value of y is: {}", y);
    }
}`,
      explanation: "This example shows basic Rust syntax including comments, variable declarations, and code blocks."
    }
  ],
  quiz: [
    {
      question: "How do you declare a variable in Rust?",
      options: ["var x = 5;", "let x = 5;", "int x = 5;", "x := 5;"],
      correctAnswer: 1,
      explanation: "In Rust, variables are declared using the 'let' keyword."
    }
  ],
  flashcards: [
    {
      front: "What is the main entry point for a Rust program?",
      back: "The main() function."
    }
  ]
};
