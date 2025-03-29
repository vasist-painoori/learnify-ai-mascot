
import { Topic } from '../../types';

export const borrowingTopic: Topic = {
  id: "rust-borrowing",
  title: "Borrowing in Rust",
  description: "Learn about borrowing references in Rust",
  content: `
# Borrowing in Rust

Instead of transferring ownership, Rust allows you to borrow references to values.
  `,
  codeExamples: [
    {
      title: "References and Borrowing",
      code: `fn main() {
    let s1 = String::from("hello");
    
    // Pass a reference to s1
    let len = calculate_length(&s1);
    
    // s1 is still valid here
    println!("The length of '{}' is {}.", s1, len);
    
    // Mutable references
    let mut s2 = String::from("hello");
    
    // Pass a mutable reference to s2
    change(&mut s2);
    
    println!("s2 is now: {}", s2);
}

fn calculate_length(s: &String) -> usize {
    s.len()
} // s goes out of scope, but it doesn't have ownership so nothing happens

fn change(s: &mut String) {
    s.push_str(", world");
}`,
      explanation: "This example shows how to use immutable and mutable references in Rust for borrowing values without taking ownership."
    }
  ],
  quiz: [
    {
      question: "How many mutable references can you have to a value at one time in Rust?",
      options: ["Unlimited", "One", "Two", "Zero"],
      correctAnswer: 1,
      explanation: "In Rust, you can have only one mutable reference to a particular piece of data in a particular scope."
    }
  ],
  flashcards: [
    {
      front: "What are the two types of references in Rust?",
      back: "Immutable references (&) and mutable references (&mut)."
    }
  ]
};
