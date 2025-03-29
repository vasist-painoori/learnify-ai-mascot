
import { Topic } from '../../types';

export const enumsTopic: Topic = {
  id: "rust-enums",
  title: "Enums in Rust",
  description: "Learn about enumerations in Rust",
  content: `
# Enums in Rust

Enums (short for enumerations) allow you to define a type by enumerating its possible variants.
  `,
  codeExamples: [
    {
      title: "Defining and Using Enums",
      code: `// Define an enum
enum IpAddrKind {
    V4,
    V6,
}

// Enum with data
enum IpAddr {
    V4(String),
    V6(String),
}

// Option enum
enum Option<T> {
    Some(T),
    None,
}

fn main() {
    // Using the IpAddrKind enum
    let four = IpAddrKind::V4;
    let six = IpAddrKind::V6;
    
    // Using the IpAddr enum with data
    let home = IpAddr::V4(String::from("127.0.0.1"));
    let loopback = IpAddr::V6(String::from("::1"));
    
    // Using the Option enum
    let some_number = Some(5);
    let some_string = Some("a string");
    let absent_number: Option<i32> = None;
}`,
      explanation: "This example shows how to define and use enums in Rust, including the built-in Option enum which is used to express that a value could be something or nothing."
    }
  ],
  quiz: [
    {
      question: "What is the purpose of the Option enum in Rust?",
      options: ["To represent errors", "To express that a value could be something or nothing", "To create a list of options", "To handle IO operations"],
      correctAnswer: 1,
      explanation: "The Option enum in Rust is used to express that a value could be something (Some) or nothing (None), which is Rust's way of avoiding null references."
    }
  ],
  flashcards: [
    {
      front: "What are the two variants of the Option enum in Rust?",
      back: "Some and None. Some contains a value, while None represents the absence of a value."
    }
  ]
};
