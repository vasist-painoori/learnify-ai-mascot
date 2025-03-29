
import { Topic } from '../../types';

export const concurrencyTopic: Topic = {
  id: "rust-concurrency",
  title: "Concurrency in Rust",
  description: "Learn about safe concurrent programming in Rust",
  content: `
# Concurrency in Rust

Rust's ownership system helps prevent many common concurrency errors at compile time.
  `,
  codeExamples: [
    {
      title: "Creating Threads",
      code: `use std::thread;
use std::time::Duration;

fn main() {
    // Spawn a new thread
    let handle = thread::spawn(|| {
        for i in 1..10 {
            println!("hi number {} from the spawned thread!", i);
            thread::sleep(Duration::from_millis(1));
        }
    });
    
    // Code in the main thread
    for i in 1..5 {
        println!("hi number {} from the main thread!", i);
        thread::sleep(Duration::from_millis(1));
    }
    
    // Wait for the spawned thread to finish
    handle.join().unwrap();
}`,
      explanation: "This example shows how to create threads in Rust and how to wait for them to complete using the join method."
    }
  ],
  quiz: [
    {
      question: "What happens if a thread panics in Rust?",
      options: ["The entire program crashes", "Only the panicking thread stops", "A new thread is spawned automatically", "The thread restarts"],
      correctAnswer: 1,
      explanation: "When a thread panics in Rust, only the panicking thread stops, not the entire program. You can catch a panic using the join method on the thread handle."
    }
  ],
  flashcards: [
    {
      front: "What is the purpose of the join method in Rust threading?",
      back: "The join method waits for a thread to finish executing. It returns a Result that contains either the final value of the thread or an error if the thread panicked."
    }
  ]
};
