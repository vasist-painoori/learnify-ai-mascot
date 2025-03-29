
import { Topic } from '../../types';

export const ownershipTopic: Topic = {
  id: "rust-ownership",
  title: "Ownership in Rust",
  description: "Understand Rust's unique ownership system",
  content: `
# Ownership in Rust

Ownership is Rust's most unique feature and enables memory safety without a garbage collector.
  `,
  codeExamples: [
    {
      title: "Ownership Rules",
      code: `fn main() {
    // s comes into scope
    let s = String::from("hello");
    
    // s's value moves into the function and is no longer valid here
    takes_ownership(s);
    
    // This would cause a compile error
    // println!("{}", s);
    
    // x comes into scope
    let x = 5;
    
    // x is copied into the function (i32 implements Copy trait)
    makes_copy(x);
    
    // x is still valid here
    println!("{}", x);
}

fn takes_ownership(some_string: String) {
    println!("{}", some_string);
} // some_string goes out of scope and drop is called

fn makes_copy(some_integer: i32) {
    println!("{}", some_integer);
} // some_integer goes out of scope, nothing special happens`,
      explanation: "This example demonstrates the ownership rules in Rust: each value has an owner, there can only be one owner at a time, and when the owner goes out of scope, the value is dropped."
    }
  ],
  quiz: [
    {
      question: "What happens when a variable goes out of scope in Rust?",
      options: ["Nothing", "It's automatically collected by the garbage collector", "Rust calls the drop function", "It remains in memory"],
      correctAnswer: 2,
      explanation: "When a variable goes out of scope in Rust, the drop function is called and the memory is freed."
    }
  ],
  flashcards: [
    {
      front: "What are the three rules of ownership in Rust?",
      back: "1. Each value has an owner. 2. There can only be one owner at a time. 3. When the owner goes out of scope, the value is dropped."
    }
  ]
};
