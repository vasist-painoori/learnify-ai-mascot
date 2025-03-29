
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
        },
        {
          id: "rust-structs-enums",
          title: "Structs and Enums",
          description: "Working with custom data types in Rust",
          content: `
# Structs and Enums in Rust

Structs and enums allow you to create custom data types in Rust.
          `,
          codeExamples: [
            {
              title: "Defining and Using Structs",
              code: `struct Person {
    name: String,
    age: u32,
    active: bool,
}

fn main() {
    // Instantiate a struct
    let user = Person {
        name: String::from("John Doe"),
        age: 30,
        active: true,
    };
    
    // Access fields using dot notation
    println!("Name: {}", user.name);
    println!("Age: {}", user.age);
    println!("Active: {}", user.active);
    
    // Update syntax
    let user2 = Person {
        name: String::from("Jane Doe"),
        ..user
    };
    
    println!("User2 name: {}", user2.name);
    println!("User2 age: {}", user2.age); // Same as user.age (30)
}`,
              explanation: "This example shows how to define a struct, instantiate it, access its fields, and use the update syntax to create a new instance based on an existing one."
            }
          ],
          quiz: [
            {
              question: "What is the difference between a struct and an enum in Rust?",
              options: [
                "Structs can only contain data, while enums can contain both data and behavior",
                "Structs define a type with multiple named fields, while enums define a type with multiple possible variants",
                "Structs are value types, while enums are reference types",
                "Structs are mutable by default, while enums are immutable"
              ],
              correctAnswer: 1,
              explanation: "In Rust, structs define a type with multiple named fields (like name, age), while enums define a type with multiple possible variants (like Result can be Ok or Err). Both can have methods defined on them."
            }
          ],
          flashcards: [
            {
              front: "What is a tuple struct in Rust?",
              back: "A tuple struct is a hybrid between a tuple and a struct. It has a name for the type but its fields don't have names, they're accessed by their position. Example: `struct Point(i32, i32);`"
            }
          ]
        },
        {
          id: "rust-collections",
          title: "Collections",
          description: "Working with collections like vectors, strings, and hash maps",
          content: `
# Collections in Rust

Rust provides several collection types that store multiple values.
          `,
          codeExamples: [
            {
              title: "Vectors",
              code: `fn main() {
    // Creating a new, empty vector
    let mut v: Vec<i32> = Vec::new();
    
    // Adding elements
    v.push(1);
    v.push(2);
    v.push(3);
    
    // Creating with initial values using vec! macro
    let v2 = vec![1, 2, 3, 4, 5];
    
    // Accessing elements
    let third: &i32 = &v[2];
    println!("The third element is {}", third);
    
    // Using get method (returns Option<&T>)
    match v.get(2) {
        Some(third) => println!("The third element is {}", third),
        None => println!("There is no third element"),
    }
    
    // Iterating over a vector
    for i in &v {
        println!("{}", i);
    }
    
    // Mutating elements while iterating
    for i in &mut v {
        *i += 10;
    }
    
    // Using different types in a vector with enums
    enum SpreadsheetCell {
        Int(i32),
        Float(f64),
        Text(String),
    }
    
    let row = vec![
        SpreadsheetCell::Int(3),
        SpreadsheetCell::Text(String::from("blue")),
        SpreadsheetCell::Float(10.12),
    ];
}`,
              explanation: "This example demonstrates how to create and use vectors in Rust, including creating empty vectors, adding elements, accessing elements, iterating over vectors, and mutating elements."
            }
          ],
          quiz: [
            {
              question: "Which of the following is NOT a collection type in Rust's standard library?",
              options: ["Vec<T>", "HashMap<K, V>", "Array<T>", "String"],
              correctAnswer: 2,
              explanation: "Rust's standard library includes Vec<T> (vector), HashMap<K, V> (hash map), and String (UTF-8 encoded text), but not Array<T>. Rust has built-in arrays with fixed length ([T; N]), but not a generic Array collection type."
            }
          ],
          flashcards: [
            {
              front: "What is the difference between a String and a &str in Rust?",
              back: "String is an owned, growable, mutable UTF-8 encoded string type, while &str is a borrowed, fixed-size string slice (view into a string). String is heap-allocated and can be modified, while &str is immutable and often used as a function parameter."
            }
          ]
        },
        {
          id: "rust-error-handling",
          title: "Error Handling",
          description: "Managing errors in Rust programs",
          content: `
# Error Handling in Rust

Rust has a robust error handling system based on the Result and Option types.
          `,
          codeExamples: [
            {
              title: "Using Result for Error Handling",
              code: `use std::fs::File;
use std::io::{self, Read};

fn read_file_contents(path: &str) -> Result<String, io::Error> {
    let mut file = File::open(path)?;
    let mut contents = String::new();
    file.read_to_string(&mut contents)?;
    Ok(contents)
}

fn main() {
    // Using match for error handling
    match read_file_contents("hello.txt") {
        Ok(contents) => println!("File contents: {}", contents),
        Err(e) => println!("Error reading file: {}", e),
    }
    
    // Using unwrap (panics on error)
    // let contents = read_file_contents("hello.txt").unwrap();
    
    // Using expect (panics with custom message)
    // let contents = read_file_contents("hello.txt").expect("Failed to read hello.txt");
    
    // Using if let for simple matching
    if let Ok(contents) = read_file_contents("hello.txt") {
        println!("File contents: {}", contents);
    }
    
    // Propagating errors
    fn process_file() -> Result<(), io::Error> {
        let contents = read_file_contents("hello.txt")?;
        println!("File contents: {}", contents);
        Ok(())
    }
    
    if let Err(e) = process_file() {
        println!("Error: {}", e);
    }
}`,
              explanation: "This example demonstrates various error handling techniques in Rust, including using the Result type, pattern matching with match and if let, unwrap and expect for simplified handling, and the ? operator for error propagation."
            }
          ],
          quiz: [
            {
              question: "What does the ? operator do in Rust?",
              options: [
                "It combines two Options or Results",
                "It converts any type to a Result",
                "It propagates errors by returning early if the Result is an Err, otherwise unwraps the Ok value",
                "It provides a default value if a Result is an Err"
              ],
              correctAnswer: 2,
              explanation: "The ? operator in Rust is shorthand for error propagation. If the Result is Ok, it unwraps the value. If it's Err, it returns early from the function with that error. It can only be used in functions that return a Result or Option."
            }
          ],
          flashcards: [
            {
              front: "What is the difference between unwrap() and expect() in Rust?",
              back: "Both unwrap() and expect() extract the value from a Result or Option, and panic if there's an error or None. The difference is that expect() allows you to specify a custom error message for the panic, while unwrap() uses a generic message."
            }
          ]
        },
        {
          id: "rust-traits",
          title: "Traits",
          description: "Using traits to define shared behavior in Rust",
          content: `
# Traits in Rust

Traits define shared behavior that types can implement, similar to interfaces in other languages.
          `,
          codeExamples: [
            {
              title: "Defining and Implementing Traits",
              code: `// Define a trait
trait Summary {
    // Required method (must be implemented)
    fn summarize(&self) -> String;
    
    // Default implementation (optional to override)
    fn default_summary(&self) -> String {
        String::from("(Read more...)")
    }
}

struct NewsArticle {
    headline: String,
    author: String,
    content: String,
}

struct Tweet {
    username: String,
    content: String,
    reply: bool,
    retweet: bool,
}

// Implement the Summary trait for NewsArticle
impl Summary for NewsArticle {
    fn summarize(&self) -> String {
        format!("{}, by {}", self.headline, self.author)
    }
}

// Implement the Summary trait for Tweet
impl Summary for Tweet {
    fn summarize(&self) -> String {
        format!("{}: {}", self.username, self.content)
    }
    
    // Override the default implementation
    fn default_summary(&self) -> String {
        format!("New tweet from {}", self.username)
    }
}

// Trait bounds
fn notify<T: Summary>(item: &T) {
    println!("Breaking news! {}", item.summarize());
}

// Alternative syntax with where clause
fn notify_where<T>(item: &T)
where
    T: Summary,
{
    println!("Breaking news! {}", item.summarize());
}

fn main() {
    let article = NewsArticle {
        headline: String::from("Rust 1.50 Released"),
        author: String::from("The Rust Team"),
        content: String::from("Lots of new features..."),
    };
    
    let tweet = Tweet {
        username: String::from("horse_ebooks"),
        content: String::from("of course, as you probably know, people"),
        reply: false,
        retweet: false,
    };
    
    println!("Article summary: {}", article.summarize());
    println!("Tweet summary: {}", tweet.summarize());
    
    println!("Article default: {}", article.default_summary());
    println!("Tweet default: {}", tweet.default_summary());
    
    notify(&article);
    notify(&tweet);
}`,
              explanation: "This example shows how to define traits in Rust, implement them for different types, provide default implementations, use trait bounds to restrict generic types, and use the where clause for more complex trait bounds."
            }
          ],
          quiz: [
            {
              question: "What is a trait in Rust?",
              options: [
                "A type of variable that can hold multiple types",
                "A way to define inheritance between structs",
                "A collection of methods that types can implement to share behavior",
                "A built-in class that provides utility functions"
              ],
              correctAnswer: 2,
              explanation: "In Rust, a trait is a collection of methods that define behavior. Types can implement traits to indicate that they provide certain functionality. Traits are similar to interfaces in other languages but can include default method implementations."
            }
          ],
          flashcards: [
            {
              front: "What are trait bounds in Rust?",
              back: "Trait bounds are constraints on generic type parameters that specify which traits a type must implement. For example, `fn process<T: Display + Clone>(value: T)` requires that the type T implements both the Display and Clone traits."
            }
          ]
        },
        {
          id: "rust-concurrency",
          title: "Concurrency",
          description: "Writing safe concurrent code in Rust",
          content: `
# Concurrency in Rust

Rust's ownership system helps prevent common concurrency bugs like data races.
          `,
          codeExamples: [
            {
              title: "Using Threads",
              code: `use std::thread;
use std::time::Duration;
use std::sync::{Arc, Mutex};

fn main() {
    // Basic thread creation
    let handle = thread::spawn(|| {
        for i in 1..10 {
            println!("hi number {} from the spawned thread!", i);
            thread::sleep(Duration::from_millis(1));
        }
    });
    
    for i in 1..5 {
        println!("hi number {} from the main thread!", i);
        thread::sleep(Duration::from_millis(1));
    }
    
    // Wait for the spawned thread to finish
    handle.join().unwrap();
    
    // Transferring data to a thread
    let v = vec![1, 2, 3];
    let handle = thread::spawn(move || {
        println!("Here's a vector: {:?}", v);
    });
    
    handle.join().unwrap();
    
    // Sharing state between threads
    let counter = Arc::new(Mutex::new(0));
    let mut handles = vec![];
    
    for _ in 0..10 {
        let counter = Arc::clone(&counter);
        let handle = thread::spawn(move || {
            let mut num = counter.lock().unwrap();
            *num += 1;
        });
        handles.push(handle);
    }
    
    for handle in handles {
        handle.join().unwrap();
    }
    
    println!("Result: {}", *counter.lock().unwrap());
}`,
              explanation: "This example demonstrates basic concurrency in Rust, including spawning threads, waiting for threads to complete, transferring ownership of data to threads, and safely sharing mutable data between threads using Arc (Atomic Reference Counting) and Mutex (Mutual Exclusion)."
            }
          ],
          quiz: [
            {
              question: "Why does Rust prevent data races at compile time?",
              options: [
                "It uses a global lock for all shared resources",
                "It doesn't allow concurrent code",
                "It enforces that data is either immutably shared by multiple threads or mutably owned by a single thread",
                "It automatically detects and resolves conflicts"
              ],
              correctAnswer: 2,
              explanation: "Rust prevents data races at compile time through its ownership and type system. It enforces that data is either shared immutably by multiple threads (many readers), or owned mutably by a single thread (single writer). This is known as 'Sharing XOR Mutation'."
            }
          ],
          flashcards: [
            {
              front: "What is the difference between Arc<T> and Rc<T> in Rust?",
              back: "Arc<T> (Atomic Reference Count) and Rc<T> (Reference Count) both provide shared ownership of a value. The difference is that Arc<T> uses atomic operations and is safe to use across multiple threads, while Rc<T> has less overhead but is only safe to use within a single thread."
            }
          ]
        },
        {
          id: "rust-lifetimes",
          title: "Lifetimes",
          description: "Understanding and working with lifetimes in Rust",
          content: `
# Lifetimes in Rust

Lifetimes are Rust's way of ensuring that all references are valid as long as they're used.
          `,
          codeExamples: [
            {
              title: "Lifetime Annotations",
              code: `// Function that takes two string slices and returns the longer one
fn longest<'a>(x: &'a str, y: &'a str) -> &'a str {
    if x.len() > y.len() {
        x
    } else {
        y
    }
}

fn main() {
    let string1 = String::from("long string is long");
    
    {
        let string2 = String::from("xyz");
        let result = longest(string1.as_str(), string2.as_str());
        println!("The longest string is {}", result);
    }
    
    // This would not compile:
    // let string2 = String::from("xyz");
    // let result;
    // {
    //     let string2 = String::from("abc");
    //     result = longest(string1.as_str(), string2.as_str());
    // }
    // println!("The longest string is {}", result);
    
    // Lifetime in structs
    struct ImportantExcerpt<'a> {
        part: &'a str,
    }
    
    let novel = String::from("Call me Ishmael. Some years ago...");
    let first_sentence = novel.split('.').next().unwrap();
    let excerpt = ImportantExcerpt {
        part: first_sentence,
    };
    
    println!("Excerpt: {}", excerpt.part);
    
    // Lifetime elision rules
    // 1. Each parameter that is a reference gets its own lifetime parameter
    // 2. If there is exactly one input lifetime parameter, that lifetime is assigned to all output lifetime parameters
    // 3. If there are multiple input lifetime parameters, but one of them is &self or &mut self, the lifetime of self is assigned to all output lifetime parameters
    
    // These functions have the same signature after lifetime elision
    fn first_word(s: &str) -> &str {
        let bytes = s.as_bytes();
        
        for (i, &item) in bytes.iter().enumerate() {
            if item == b' ' {
                return &s[0..i];
            }
        }
        
        &s[..]
    }
    
    fn first_word_with_lifetime<'a>(s: &'a str) -> &'a str {
        // Same implementation as above
        let bytes = s.as_bytes();
        
        for (i, &item) in bytes.iter().enumerate() {
            if item == b' ' {
                return &s[0..i];
            }
        }
        
        &s[..]
    }
    
    let my_string = String::from("hello world");
    let word = first_word(&my_string);
    println!("First word: {}", word);
}`,
              explanation: "This example demonstrates lifetimes in Rust, including explicit lifetime annotations in functions and structs, the relationship between lifetimes and scope, and the lifetime elision rules that allow Rust to infer lifetimes in common cases."
            }
          ],
          quiz: [
            {
              question: "What does the 'static lifetime mean in Rust?",
              options: [
                "The reference can only be used in static methods",
                "The reference can be used anywhere in the program",
                "The reference lives for the entire duration of the program",
                "The reference is to a static variable"
              ],
              correctAnswer: 2,
              explanation: "The 'static lifetime in Rust indicates that the reference can live for the entire duration of the program. All string literals have the 'static lifetime by default, because they're stored in the program's binary."
            }
          ],
          flashcards: [
            {
              front: "What are the lifetime elision rules in Rust?",
              back: "Rust has three lifetime elision rules:\n1. Each parameter that is a reference gets its own lifetime parameter\n2. If there is exactly one input lifetime parameter, that lifetime is assigned to all output lifetime parameters\n3. If there are multiple input lifetime parameters, but one of them is &self or &mut self, the lifetime of self is assigned to all output lifetime parameters"
            }
          ]
        },
        {
          id: "rust-macros",
          title: "Macros",
          description: "Creating and using macros in Rust",
          content: `
# Macros in Rust

Macros are a powerful way to write code that writes other code (metaprogramming).
          `,
          codeExamples: [
            {
              title: "Declarative Macros",
              code: `// Simplified version of the vec! macro
#[macro_export]
macro_rules! my_vec {
    // Empty vector
    () => {
        Vec::new()
    };
    // Vector with elements
    ($($x:expr),+ $(,)?) => {
        {
            let mut temp_vec = Vec::new();
            $(
                temp_vec.push($x);
            )+
            temp_vec
        }
    };
}

fn main() {
    // Using our macro
    let v1: Vec<i32> = my_vec![];
    let v2 = my_vec![1, 2, 3, 4, 5];
    
    println!("v1: {:?}", v1);
    println!("v2: {:?}", v2);
    
    // Common macros in standard library
    
    // println! - prints to stdout
    println!("Hello, {}!", "world");
    
    // format! - creates formatted strings
    let s = format!("Hello, {}!", "world");
    println!("{}", s);
    
    // assert! - checks that a condition is true
    let a = 5;
    let b = 5;
    assert!(a == b);
    
    // assert_eq! - checks that two values are equal
    assert_eq!(a, b);
    
    // dbg! - prints the expression and its value
    let x = dbg!(a + b);
    
    // panic! - causes the current thread to panic
    // panic!("This is an error!");
    
    // include_str! - includes a file as a string
    // let readme = include_str!("../README.md");
    
    // Using the vec! macro from the standard library
    let numbers = vec![1, 2, 3, 4, 5];
    println!("numbers: {:?}", numbers);
}`,
              explanation: "This example demonstrates declarative macros in Rust, including creating a simplified version of the vec! macro and using common macros from the standard library like println!, format!, assert!, assert_eq!, dbg!, and panic!."
            }
          ],
          quiz: [
            {
              question: "What is the main advantage of macros over functions in Rust?",
              options: [
                "Macros are always faster than functions",
                "Macros can take a variable number of arguments",
                "Macros can generate code at compile time and operate on tokens",
                "Macros are more type-safe than functions"
              ],
              correctAnswer: 2,
              explanation: "The main advantage of macros over functions in Rust is that macros can generate code at compile time and operate on the tokens directly. This allows macros to implement features that functions cannot, like taking a variable number of arguments, generating code based on the inputs, and creating domain-specific languages."
            }
          ],
          flashcards: [
            {
              front: "What are the two main types of macros in Rust?",
              back: "The two main types of macros in Rust are:\n1. Declarative macros (macro_rules!) - Pattern-matching macros defined with macro_rules!\n2. Procedural macros - Function-like macros that operate on the input token stream directly. There are three kinds: #[derive], attribute-like, and function-like procedural macros."
            }
          ]
        },
        {
          id: "rust-crates-modules",
          title: "Crates and Modules",
          description: "Organizing code in Rust projects",
          content: `
# Crates and Modules in Rust

Crates and modules help you organize code, manage scope, and control privacy.
          `,
          codeExamples: [
            {
              title: "Modules and Visibility",
              code: `// File: lib.rs
mod front_of_house {
    pub mod hosting {
        pub fn add_to_waitlist() {
            println!("Adding to waitlist");
        }
        
        fn seat_at_table() {
            println!("Seating at table");
        }
    }
    
    mod serving {
        fn take_order() {
            println!("Taking order");
        }
        
        fn serve_order() {
            println!("Serving order");
        }
        
        fn take_payment() {
            println!("Taking payment");
        }
    }
}

// Using a module from another module
pub fn eat_at_restaurant() {
    // Absolute path
    crate::front_of_house::hosting::add_to_waitlist();
    
    // Relative path
    front_of_house::hosting::add_to_waitlist();
}

// Re-exporting
pub use crate::front_of_house::hosting;

// Using the 'use' keyword
use crate::front_of_house::hosting::add_to_waitlist;

pub fn order_food() {
    add_to_waitlist();
}

// Nested paths
use std::{self, io::{self, Write}};

// Glob operator
use std::collections::*;

// File: main.rs
// Using an external crate
// Cargo.toml: [dependencies] rand = "0.8.5"
use rand::Rng;

fn main() {
    // Using a function from an external crate
    let secret_number = rand::thread_rng().gen_range(1..101);
    println!("Secret number: {}", secret_number);
    
    // Using a function from our library crate
    my_crate::eat_at_restaurant();
    
    // Using a re-exported module
    my_crate::hosting::add_to_waitlist();
}`,
              explanation: "This example demonstrates Rust's module system, including defining modules, controlling visibility with pub, using absolute and relative paths, re-exporting items, using the use keyword, and organizing code with nested paths and the glob operator."
            }
          ],
          quiz: [
            {
              question: "What is the difference between a library crate and a binary crate in Rust?",
              options: [
                "Library crates can only contain functions, while binary crates can contain structs and enums",
                "Library crates are compiled into .dll or .so files, while binary crates compile into executables",
                "Library crates are meant to be shared with others, while binary crates are only for personal use",
                "Library crates can only use the standard library, while binary crates can use external dependencies"
              ],
              correctAnswer: 1,
              explanation: "In Rust, a library crate is intended to provide functionality to other crates and doesn't have a main function. It compiles into a library file (.rlib, .dll, .so). A binary crate is an executable application with a main function, which compiles into an executable file."
            }
          ],
          flashcards: [
            {
              front: "What is the difference between `use crate::module` and `use super::module` in Rust?",
              back: "`use crate::module` uses an absolute path starting from the root of the current crate, while `use super::module` uses a relative path starting from the parent module of the current module. `super` is similar to `..` in file paths."
            }
          ]
        }
      ]
    }
  ]
};
