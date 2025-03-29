
import { LearningPath } from '../types';

export const rustPath: LearningPath = {
  languageId: "rust",
  modules: [
    {
      id: "rust-basics",
      title: "Rust Fundamentals",
      description: "Learn the core concepts of Rust programming",
      topics: [
        {
          id: "rust-intro",
          title: "Introduction to Rust",
          description: "Understanding the basics of Rust programming",
          content: `
# Introduction to Rust

Rust is a systems programming language that runs blazingly fast, prevents segfaults, and guarantees thread safety.
          `,
          codeExamples: [
            {
              title: "Hello World in Rust",
              code: `fn main() {
    println!("Hello, World!");
}`,
              explanation: "This is a simple Rust program that defines a main function (the entry point) and uses the println! macro to print text to the console."
            }
          ],
          quiz: [
            {
              question: "Which of the following is a key feature of Rust?",
              options: ["Garbage collection", "Memory safety without garbage collection", "Dynamic typing", "Interpreted execution"],
              correctAnswer: 1,
              explanation: "Rust provides memory safety guarantees without needing a garbage collector through its ownership system with borrowing and lifetimes."
            }
          ],
          flashcards: [
            {
              front: "What is Rust?",
              back: "Rust is a systems programming language that focuses on safety, speed, and concurrency. It ensures memory safety without using garbage collection, instead relying on a system of ownership with borrow checking."
            },
            {
              front: "What is the ownership system in Rust?",
              back: "Rust's ownership system is a set of rules that the compiler checks at compile time. It manages memory by tracking what part of the code owns a given piece of data, ensuring that only one part owns it at a time, and cleaning up when ownership ends."
            },
            {
              front: "What are macros in Rust?",
              back: "Macros in Rust are a way of writing code that writes other code (metaprogramming). They allow for code reuse on a syntactic level and are denoted with an exclamation mark (e.g., println!())."
            },
            {
              front: "What is a trait in Rust?",
              back: "A trait in Rust is similar to an interface in other languages. It defines functionality that a type must provide, allowing for code reuse across different types."
            },
            {
              front: "What is the Result type in Rust?",
              back: "The Result type in Rust is an enum used for returning and propagating errors. It has two variants: Ok(T) for success and Err(E) for errors, and is commonly used for operations that can fail."
            }
          ]
        },
        {
          id: "rust-ownership",
          title: "Ownership and Borrowing",
          description: "Understanding Rust's unique approach to memory management",
          content: `
# Ownership and Borrowing in Rust

Rust uses a system of ownership with a set of rules that the compiler checks at compile time to manage memory efficiently without a garbage collector.
          `,
          codeExamples: [
            {
              title: "Ownership Basics",
              code: `fn main() {
    // Variable binding creates ownership
    let s1 = String::from("hello");
    
    // Ownership moves to s2, s1 is no longer valid
    let s2 = s1;
    
    // This would cause an error:
    // println!("{}", s1);
    
    // This works fine
    println!("{}", s2);
}`,
              explanation: "This example demonstrates how ownership moves in Rust. When s1 is assigned to s2, ownership of the String's data moves to s2, and s1 becomes invalid."
            }
          ],
          quiz: [
            {
              question: "What happens when a variable goes out of scope in Rust?",
              options: ["Nothing, the garbage collector will clean it up", "The drop function is called automatically", "It causes a memory leak", "It becomes a global variable"],
              correctAnswer: 1,
              explanation: "When a variable goes out of scope in Rust, the drop function is automatically called. This is where Rust cleans up resources like memory."
            }
          ],
          flashcards: [
            {
              front: "What is ownership in Rust?",
              back: "Ownership is a set of rules in Rust that govern how memory is managed. Each value has an owner, there can only be one owner at a time, and when the owner goes out of scope, the value is dropped."
            }
          ]
        }
      ]
    }
  ]
};
