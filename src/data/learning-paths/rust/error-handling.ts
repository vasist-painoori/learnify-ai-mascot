
import { Topic } from '../../types';

export const errorHandlingTopic: Topic = {
  id: "rust-error-handling",
  title: "Error Handling in Rust",
  description: "Learn how to handle errors in Rust",
  content: `
# Error Handling in Rust

Rust has a strong focus on reliability and has a particular approach to error handling.
  `,
  codeExamples: [
    {
      title: "Recoverable Errors with Result",
      code: `use std::fs::File;
use std::io::ErrorKind;

fn main() {
    // Opening a file using Result
    let f = File::open("hello.txt");
    
    let f = match f {
        Ok(file) => file,
        Err(error) => match error.kind() {
            ErrorKind::NotFound => match File::create("hello.txt") {
                Ok(fc) => fc,
                Err(e) => panic!("Problem creating the file: {:?}", e),
            },
            other_error => panic!("Problem opening the file: {:?}", other_error),
        },
    };
    
    // Using unwrap
    let f = File::open("hello.txt").unwrap();
    
    // Using expect
    let f = File::open("hello.txt").expect("Failed to open hello.txt");
}`,
      explanation: "This example demonstrates how to handle recoverable errors in Rust using the Result enum, as well as shortcuts like unwrap and expect."
    }
  ],
  quiz: [
    {
      question: "What are the two variants of the Result enum in Rust?",
      options: ["Yes and No", "True and False", "Ok and Err", "Some and None"],
      correctAnswer: 2,
      explanation: "The Result enum in Rust has two variants: Ok, which contains the success value, and Err, which contains the error value."
    }
  ],
  flashcards: [
    {
      front: "What is the difference between unwrap and expect in Rust?",
      back: "Both unwrap and expect will return the value inside an Ok variant or panic if the variant is Err. The difference is that expect allows you to specify an error message for the panic, while unwrap uses a generic message."
    }
  ]
};
