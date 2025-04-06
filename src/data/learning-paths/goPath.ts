
import { LearningPath } from '../types';

export const goPath: LearningPath = {
  languageId: "go",
  modules: [
    {
      id: "go-basics",
      title: "Go Fundamentals",
      description: "Learn the core concepts of Go programming",
      topics: [
        {
          id: "go-intro",
          title: "Introduction to Go",
          description: "Understanding the fundamentals of Go programming language",
          content: `
# Introduction to Go

Go, also known as Golang, is a statically typed, compiled programming language designed at Google. It combines the efficiency of compiled languages with the ease of use of dynamic languages.

## Key Features
- Statically typed and compiled
- Garbage collection
- Memory safety
- Concurrent programming with goroutines and channels
- Simple syntax and fast compilation
- Built-in testing framework
          `,
          codeExamples: [
            {
              title: "Hello World",
              code: `package main

import "fmt"

func main() {
  fmt.Println("Hello, World!")
}`,
              explanation: "This is a simple Hello World program in Go. The 'package main' declares that this is the main package, and the 'import' statement brings in the fmt package for formatted I/O."
            },
            {
              title: "Variables and Types",
              code: `package main

import "fmt"

func main() {
  // Variable declaration with explicit type
  var name string = "Gopher"
  
  // Short variable declaration
  age := 5
  
  // Constants
  const version = "1.17"
  
  // Multiple variable declaration
  var (
    isActive bool = true
    score    int  = 100
  )
  
  fmt.Println("Name:", name)
  fmt.Println("Age:", age)
  fmt.Println("Version:", version)
  fmt.Println("Active:", isActive)
  fmt.Println("Score:", score)
}`,
              explanation: "This example demonstrates different ways to declare and use variables in Go, including explicit type declarations, short variable declarations, and constants."
            }
          ],
          quiz: [
            {
              question: "What command is used to run a Go program?",
              options: ["go build", "go run", "go execute", "go start"],
              correctAnswer: 1,
              explanation: "The 'go run' command compiles and runs a Go program in one step, which is useful during development."
            },
            {
              question: "Which of the following is NOT a built-in type in Go?",
              options: ["int", "float64", "string", "object"],
              correctAnswer: 3,
              explanation: "Go doesn't have an 'object' type like JavaScript. Instead, it uses structs for creating custom data types."
            }
          ],
          flashcards: [
            {
              front: "What is a goroutine in Go?",
              back: "A goroutine is a lightweight thread of execution managed by the Go runtime. Goroutines allow concurrent functions to run with minimal overhead compared to traditional threads."
            },
            {
              front: "What is the purpose of the 'go' keyword in Go?",
              back: "The 'go' keyword starts a new goroutine, which is a lightweight thread that executes a function concurrently with other goroutines."
            }
          ]
        },
        {
          id: "go-functions",
          title: "Functions and Methods",
          description: "Creating and using functions in Go",
          content: `
# Functions and Methods in Go

Functions are fundamental building blocks in Go. Methods are special functions that operate on a specific type.
          `,
          codeExamples: [
            {
              title: "Basic Functions",
              code: `package main

import "fmt"

// Function with parameters and return value
func add(a, b int) int {
  return a + b
}

// Multiple return values
func divide(a, b float64) (float64, error) {
  if b == 0.0 {
    return 0.0, fmt.Errorf("cannot divide by zero")
  }
  return a / b, nil
}

func main() {
  // Call the add function
  sum := add(5, 3)
  fmt.Println("Sum:", sum)
  
  // Call the divide function and handle multiple return values
  result, err := divide(10, 2)
  if err != nil {
    fmt.Println("Error:", err)
  } else {
    fmt.Println("10 / 2 =", result)
  }
  
  // Error case
  result, err = divide(10, 0)
  if err != nil {
    fmt.Println("Error:", err)
  }
}`,
              explanation: "This example shows how to define and use functions in Go, including functions with parameters, return values, and multiple return values."
            },
            {
              title: "Methods",
              code: `package main

import (
  "fmt"
  "math"
)

// Define a struct type
type Circle struct {
  radius float64
}

// Method with receiver
func (c Circle) Area() float64 {
  return math.Pi * c.radius * c.radius
}

// Method with pointer receiver
func (c *Circle) SetRadius(r float64) {
  c.radius = r
}

func main() {
  // Create a Circle instance
  circle := Circle{radius: 5.0}
  
  // Call the Area method
  area := circle.Area()
  fmt.Printf("Circle with radius %.2f has area %.2f\\n", circle.radius, area)
  
  // Call the SetRadius method
  circle.SetRadius(10.0)
  fmt.Printf("Circle now has radius %.2f\\n", circle.radius)
  
  // Call Area again with the new radius
  fmt.Printf("New area is %.2f\\n", circle.Area())
}`,
              explanation: "This example demonstrates how to define and use methods in Go, including methods with value receivers and pointer receivers."
            }
          ],
          quiz: [
            {
              question: "What's the difference between a function and a method in Go?",
              options: [
                "There is no difference, they are the same thing",
                "A method is a function that has a receiver argument",
                "A method can return multiple values, but a function cannot",
                "Functions are defined in main package, methods in other packages"
              ],
              correctAnswer: 1,
              explanation: "In Go, a method is a function that has a receiver argument. The receiver appears between the func keyword and the method name."
            },
            {
              question: "When should you use a pointer receiver for a method?",
              options: [
                "Always, it's more efficient",
                "When the method needs to modify the receiver",
                "When the receiver is a large struct",
                "Both B and C"
              ],
              correctAnswer: 3,
              explanation: "You should use a pointer receiver when the method needs to modify the receiver or when the receiver is a large struct to avoid copying it."
            }
          ],
          flashcards: [
            {
              front: "What is a variadic function in Go?",
              back: "A variadic function is a function that can accept a variable number of arguments of the same type. It is declared using '...' before the type of the last parameter."
            },
            {
              front: "What is a defer statement in Go?",
              back: "A defer statement delays the execution of a function until the surrounding function returns. Deferred calls are executed in Last-In-First-Out order after the surrounding function returns but before it returns to its caller."
            }
          ]
        }
      ]
    }
  ]
};
