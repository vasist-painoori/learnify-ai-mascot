
import { Topic } from '../../types';

export const introductionTopic: Topic = {
  id: "rust-introduction",
  title: "Introduction to Rust",
  description: "Get started with Rust and understand its basic concepts",
  content: `
# Introduction to Rust

Rust is a systems programming language that runs blazingly fast, prevents segfaults, and guarantees thread safety.
  `,
  codeExamples: [
    {
      title: "Hello, World!",
      code: `fn main() {
    println!("Hello, World!");
}`,
      explanation: "This is the classic first program in Rust. It defines a main function and uses the println! macro to output text."
    }
  ],
  quiz: [
    {
      question: "What is Rust primarily designed for?",
      options: ["Web development", "Mobile development", "Systems programming", "Game development"],
      correctAnswer: 2,
      explanation: "Rust is primarily designed for systems programming, focusing on safety, speed, and concurrency."
    }
  ],
  flashcards: [
    {
      front: "What are the three main goals of Rust?",
      back: "Safety, speed, and concurrency."
    }
  ]
};
