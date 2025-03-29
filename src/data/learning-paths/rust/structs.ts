
import { Topic } from '../../types';

export const structsTopic: Topic = {
  id: "rust-structs",
  title: "Structs in Rust",
  description: "Learn how to define and use structs in Rust",
  content: `
# Structs in Rust

Structs are a way of creating custom data types in Rust.
  `,
  codeExamples: [
    {
      title: "Defining and Using Structs",
      code: `// Define a struct
struct Rectangle {
    width: u32,
    height: u32,
}

impl Rectangle {
    // Method to calculate area
    fn area(&self) -> u32 {
        self.width * self.height
    }
}

fn main() {
    // Create an instance of Rectangle
    let rect = Rectangle {
        width: 30,
        height: 50,
    };
    
    println!(
        "The area of the rectangle is {} square pixels.",
        rect.area()
    );
}`,
      explanation: "This example demonstrates how to define a struct, implement methods on it, and use it in a Rust program."
    }
  ],
  quiz: [
    {
      question: "How do you implement methods for a struct in Rust?",
      options: ["Using the class keyword", "Using the impl keyword", "Using the fn keyword", "Using the struct keyword"],
      correctAnswer: 1,
      explanation: "In Rust, you use the impl keyword to implement methods for a struct."
    }
  ],
  flashcards: [
    {
      front: "What is a method in Rust?",
      back: "A method is a function defined within the context of a struct, enum, or trait. The first parameter is always self, which represents the instance of the struct the method is being called on."
    }
  ]
};
