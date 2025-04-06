
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
  fmt.Printf("Circle with radius %.2f has area %.2f\n", circle.radius, area)
  
  // Call the SetRadius method
  circle.SetRadius(10.0)
  fmt.Printf("Circle now has radius %.2f\n", circle.radius)
  
  // Call Area again with the new radius
  fmt.Printf("New area is %.2f\n", circle.Area())
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
        },
        {
          id: "go-structs-interfaces",
          title: "Structs and Interfaces",
          description: "Working with custom data types and abstractions in Go",
          content: `
# Structs and Interfaces in Go

Structs are composite data types that group together fields of different types. Interfaces define behavior through method signatures.
          `,
          codeExamples: [
            {
              title: "Structs",
              code: `package main

import "fmt"

// Define a struct type
type Person struct {
  FirstName string
  LastName  string
  Age       int
}

// Create a constructor function
func NewPerson(firstName, lastName string, age int) Person {
  return Person{
    FirstName: firstName,
    LastName:  lastName,
    Age:       age,
  }
}

func main() {
  // Create a struct instance
  p1 := Person{
    FirstName: "John",
    LastName:  "Doe",
    Age:       30,
  }
  
  // Create using positional syntax (not recommended for larger structs)
  p2 := Person{"Jane", "Smith", 25}
  
  // Create using the constructor function
  p3 := NewPerson("Bob", "Johnson", 35)
  
  // Access struct fields
  fmt.Println(p1.FirstName, p1.LastName, p1.Age)
  
  // Update a field
  p1.Age = 31
  fmt.Println("Updated age:", p1.Age)
  
  // Struct embedding
  type Employee struct {
    Person
    Company string
    Salary  float64
  }
  
  emp := Employee{
    Person:  p1,
    Company: "Acme Inc.",
    Salary:  75000,
  }
  
  // Access embedded struct fields
  fmt.Println(emp.FirstName, "works at", emp.Company)
}`,
              explanation: "This example demonstrates how to define and use structs in Go, including field access, instantiation, and struct embedding."
            },
            {
              title: "Interfaces",
              code: `package main

import (
  "fmt"
  "math"
)

// Define an interface
type Shape interface {
  Area() float64
  Perimeter() float64
}

// Define types that implement the interface
type Rectangle struct {
  Width, Height float64
}

func (r Rectangle) Area() float64 {
  return r.Width * r.Height
}

func (r Rectangle) Perimeter() float64 {
  return 2*r.Width + 2*r.Height
}

type Circle struct {
  Radius float64
}

func (c Circle) Area() float64 {
  return math.Pi * c.Radius * c.Radius
}

func (c Circle) Perimeter() float64 {
  return 2 * math.Pi * c.Radius
}

// Function that takes an interface parameter
func PrintShapeInfo(s Shape) {
  fmt.Printf("Area: %.2f, Perimeter: %.2f\n", s.Area(), s.Perimeter())
}

func main() {
  r := Rectangle{Width: 3, Height: 4}
  c := Circle{Radius: 5}
  
  // Call methods directly
  fmt.Println("Rectangle area:", r.Area())
  fmt.Println("Circle area:", c.Area())
  
  // Use the interface
  PrintShapeInfo(r)
  PrintShapeInfo(c)
  
  // Interface type assertions
  var s Shape = c
  circle, ok := s.(Circle)
  if ok {
    fmt.Println("This shape is a circle with radius", circle.Radius)
  }
  
  // Type switches
  switch v := s.(type) {
  case Circle:
    fmt.Printf("Circle with radius %.2f\n", v.Radius)
  case Rectangle:
    fmt.Printf("Rectangle with dimensions %.2f x %.2f\n", v.Width, v.Height)
  default:
    fmt.Println("Unknown shape")
  }
}`,
              explanation: "This example shows how to define and use interfaces in Go. It demonstrates interface implementation, polymorphism, type assertions, and type switches."
            }
          ],
          quiz: [
            {
              question: "Which statement about interfaces in Go is true?",
              options: [
                "Interfaces must be explicitly implemented with the 'implements' keyword",
                "Interfaces are implemented implicitly when a type has the required methods",
                "A type can only implement one interface",
                "Interfaces must define both methods and fields"
              ],
              correctAnswer: 1,
              explanation: "In Go, interfaces are implemented implicitly. If a type has all the methods declared by an interface, it automatically implements that interface without needing to explicitly state it."
            },
            {
              question: "What is the zero value of a struct type in Go?",
              options: [
                "nil",
                "A panic occurs if used without initialization",
                "A struct with all fields set to their zero values",
                "A struct with all fields set to null"
              ],
              correctAnswer: 2,
              explanation: "The zero value of a struct in Go is a struct with all fields set to their respective zero values (e.g., 0 for numeric types, empty string for strings, nil for pointers, etc.)."
            }
          ],
          flashcards: [
            {
              front: "What is struct embedding in Go?",
              back: "Struct embedding is a feature that allows one struct to include all the fields and methods of another struct as if they were its own, enabling composition over inheritance."
            },
            {
              front: "What is an empty interface (interface{}) in Go?",
              back: "An empty interface is an interface with no methods. It can hold values of any type, similar to 'Object' in other languages. It's often used when the actual type of a value is not known at compile time."
            }
          ]
        },
        {
          id: "go-concurrency",
          title: "Concurrency with Goroutines and Channels",
          description: "Understanding Go's concurrent programming model",
          content: `
# Concurrency in Go with Goroutines and Channels

Go has built-in concurrency features: goroutines (lightweight threads) and channels (communication between goroutines).
          `,
          codeExamples: [
            {
              title: "Goroutines",
              code: `package main

import (
  "fmt"
  "time"
)

func sayHello(message string, delay time.Duration) {
  for i := 0; i < 5; i++ {
    time.Sleep(delay)
    fmt.Println(message, i)
  }
}

func main() {
  // Start a goroutine
  go sayHello("Hello from goroutine", 100*time.Millisecond)
  
  // Run in main goroutine
  sayHello("Hello from main", 200*time.Millisecond)
  
  // Anonymous function as goroutine
  go func() {
    fmt.Println("Anonymous function executed in a goroutine")
  }()
  
  // Wait a bit to let goroutines finish
  time.Sleep(time.Second)
  
  fmt.Println("Main function finished")
}`,
              explanation: "This example shows how to create and use goroutines in Go, including both named functions and anonymous functions running concurrently."
            },
            {
              title: "Channels",
              code: `package main

import (
  "fmt"
  "time"
)

func producer(ch chan int) {
  for i := 0; i < 5; i++ {
    fmt.Println("Sending:", i)
    ch <- i // Send value to channel
    time.Sleep(100 * time.Millisecond)
  }
  
  close(ch) // Close the channel when done
}

func main() {
  // Create a channel
  ch := make(chan int)
  
  // Start producer in a goroutine
  go producer(ch)
  
  // Read from channel until it's closed
  for value := range ch {
    fmt.Println("Received:", value)
  }
  
  // Buffered channels
  bufferedCh := make(chan int, 3)
  
  // Can send multiple values without blocking
  bufferedCh <- 1
  bufferedCh <- 2
  bufferedCh <- 3
  
  // Would block if buffer is full
  // bufferedCh <- 4
  
  fmt.Println(<-bufferedCh) // 1
  fmt.Println(<-bufferedCh) // 2
  fmt.Println(<-bufferedCh) // 3
  
  // Select statement
  ch1 := make(chan string)
  ch2 := make(chan string)
  
  go func() {
    time.Sleep(100 * time.Millisecond)
    ch1 <- "Message from channel 1"
  }()
  
  go func() {
    time.Sleep(50 * time.Millisecond)
    ch2 <- "Message from channel 2"
  }()
  
  // Select waits for either channel to be ready
  for i := 0; i < 2; i++ {
    select {
    case msg1 := <-ch1:
      fmt.Println(msg1)
    case msg2 := <-ch2:
      fmt.Println(msg2)
    case <-time.After(200 * time.Millisecond):
      fmt.Println("Timeout")
    }
  }
}`,
              explanation: "This example demonstrates channels in Go, including sending and receiving values, closing channels, using buffered channels, and the select statement for handling multiple channels."
            }
          ],
          quiz: [
            {
              question: "What is the main purpose of channels in Go?",
              options: [
                "To replace traditional multithreading",
                "To communicate between goroutines",
                "To store large amounts of data efficiently",
                "To optimize CPU usage"
              ],
              correctAnswer: 1,
              explanation: "The main purpose of channels in Go is to provide a way for goroutines to communicate with each other and synchronize their execution."
            },
            {
              question: "What happens when you try to send a value to a closed channel?",
              options: [
                "The program ignores it",
                "The channel reopens automatically",
                "The program panics",
                "The value is discarded silently"
              ],
              correctAnswer: 2,
              explanation: "Sending a value to a closed channel causes a panic in Go. It's important to ensure that no sends occur after a channel is closed."
            }
          ],
          flashcards: [
            {
              front: "What is the difference between buffered and unbuffered channels in Go?",
              back: "Unbuffered channels require both sender and receiver to be ready at the same time (synchronous). Buffered channels can hold a specified number of values before blocking the sender, allowing for asynchronous communication up to the buffer size."
            },
            {
              front: "What is the 'select' statement used for in Go?",
              back: "The select statement is used to wait on multiple channel operations simultaneously. It blocks until one of its cases can proceed and then executes that case. If multiple cases are ready, one is chosen at random."
            }
          ]
        },
        {
          id: "go-error-handling",
          title: "Error Handling",
          description: "Managing errors and exceptions in Go",
          content: `
# Error Handling in Go

Go handles errors explicitly without exceptions or try/catch blocks. Errors are represented as values that can be checked and handled.
          `,
          codeExamples: [
            {
              title: "Basic Error Handling",
              code: `package main

import (
  "errors"
  "fmt"
  "os"
)

// Function that returns an error
func divide(a, b float64) (float64, error) {
  if b == 0.0 {
    return 0.0, errors.New("division by zero")
  }
  return a / b, nil
}

// Multiple error checks
func openFile(filename string) error {
  file, err := os.Open(filename)
  if err != nil {
    return fmt.Errorf("failed to open file: %w", err)
  }
  defer file.Close()
  
  // Do something with the file...
  
  return nil
}

func main() {
  // Check and handle error
  result, err := divide(10, 0)
  if err != nil {
    fmt.Println("Error:", err)
  } else {
    fmt.Println("Result:", result)
  }
  
  // Multiple error handling
  if err := openFile("nonexistent.txt"); err != nil {
    fmt.Println("File error:", err)
  }
  
  // Creating errors
  err1 := errors.New("simple error")
  err2 := fmt.Errorf("formatted error: %s", "details")
  
  fmt.Println(err1)
  fmt.Println(err2)
}`,
              explanation: "This example demonstrates Go's approach to error handling, including creating, returning, and checking errors."
            },
            {
              title: "Custom Error Types",
              code: `package main

import (
  "fmt"
)

// Custom error type
type QueryError struct {
  Query string
  Err   error
}

// Implement the Error interface
func (e *QueryError) Error() string {
  return fmt.Sprintf("query error for '%s': %v", e.Query, e.Err)
}

// Implement Unwrap method for error chains
func (e *QueryError) Unwrap() error {
  return e.Err
}

// Function that returns the custom error
func executeQuery(query string) error {
  if query == "" {
    return &QueryError{
      Query: query,
      Err:   fmt.Errorf("empty query"),
    }
  }
  
  // Simulate another error
  if query == "invalid" {
    return &QueryError{
      Query: query,
      Err:   fmt.Errorf("invalid syntax"),
    }
  }
  
  return nil
}

func main() {
  // Test the custom error
  err := executeQuery("")
  if err != nil {
    fmt.Println("Error:", err)
    
    // Type assertion to access custom error fields
    if qErr, ok := err.(*QueryError); ok {
      fmt.Println("Query was:", qErr.Query)
    }
  }
  
  // Error wrapping (Go 1.13+)
  err = executeQuery("invalid")
  
  // Using errors.Is() and errors.As() (Go 1.13+)
  // These would normally be imported from the "errors" package
  fmt.Println("Original error:", err)
}`,
              explanation: "This example shows how to create and use custom error types in Go by implementing the error interface, along with error wrapping and unwrapping."
            }
          ],
          quiz: [
            {
              question: "Why doesn't Go use exceptions for error handling?",
              options: [
                "To simplify the language implementation",
                "To force programmers to consider error cases explicitly",
                "Because exceptions are too slow",
                "Because Go already has panic/recover which is better than exceptions"
              ],
              correctAnswer: 1,
              explanation: "Go's approach to error handling encourages explicit error checking, making code flow more obvious and forcing programmers to consider error cases. The designers of Go believed that exception-based error handling often leads to overlooked error cases."
            },
            {
              question: "What is the zero value of an error in Go?",
              options: [
                "nil",
                "false",
                "\"\"",
                "0"
              ],
              correctAnswer: 0,
              explanation: "The zero value of an error in Go is nil. This is why error checks commonly use 'if err != nil' to determine if an error occurred."
            }
          ],
          flashcards: [
            {
              front: "What is the difference between errors and panics in Go?",
              back: "Errors are values returned by functions to indicate that something went wrong but is recoverable. Panics are for unexpected conditions that make it impossible for a function to continue execution, often resulting in program termination unless recovered."
            },
            {
              front: "How do you check if an error contains a specific error value in Go 1.13+?",
              back: "Use the errors.Is(err, targetErr) function to check if an error or any error it wraps matches a specific error value. For example: if errors.Is(err, os.ErrNotExist) { // handle not found case }"
            }
          ]
        },
        {
          id: "go-slices-maps",
          title: "Slices and Maps",
          description: "Working with Go's key collection types",
          content: `
# Slices and Maps in Go

Slices and maps are essential collection types in Go for storing and manipulating groups of values.
          `,
          codeExamples: [
            {
              title: "Slices",
              code: `package main

import (
  "fmt"
)

func main() {
  // Creating slices
  var s1 []int                  // nil slice with zero length and capacity
  s2 := []int{}                 // empty slice (non-nil) with zero length and capacity
  s3 := []int{1, 2, 3, 4, 5}    // slice with values
  s4 := make([]int, 5)          // slice with length 5, capacity 5, all elements 0
  s5 := make([]int, 3, 10)      // slice with length 3, capacity 10
  
  fmt.Println("s1:", s1, "len:", len(s1), "cap:", cap(s1), "nil?", s1 == nil)
  fmt.Println("s2:", s2, "len:", len(s2), "cap:", cap(s2), "nil?", s2 == nil)
  fmt.Println("s3:", s3, "len:", len(s3), "cap:", cap(s3))
  fmt.Println("s4:", s4, "len:", len(s4), "cap:", cap(s4))
  fmt.Println("s5:", s5, "len:", len(s5), "cap:", cap(s5))
  
  // Slicing operations
  fmt.Println("s3[1:3] =", s3[1:3]) // elements 1 through 2
  fmt.Println("s3[:2] =", s3[:2])   // first 2 elements
  fmt.Println("s3[2:] =", s3[2:])   // elements from index 2 to end
  
  // Appending to slices
  s6 := []int{1, 2}
  s6 = append(s6, 3)                // append one element
  s6 = append(s6, 4, 5, 6)          // append multiple elements
  s6 = append(s6, s3...)            // append another slice
  fmt.Println("After append:", s6)
  
  // Copying slices
  src := []int{1, 2, 3, 4, 5}
  dst := make([]int, 3)             // destination slice with length 3
  copied := copy(dst, src)          // copy from src to dst
  fmt.Println("Copied:", copied, "elements, dst:", dst)
  
  // 2D slices
  matrix := [][]int{
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9},
  }
  fmt.Println("Matrix:", matrix)
  fmt.Println("Matrix[1][2] =", matrix[1][2]) // 6
}`,
              explanation: "This example demonstrates how to create and use slices in Go, including slice creation, slicing operations, appending elements, and copying slices."
            },
            {
              title: "Maps",
              code: `package main

import (
  "fmt"
)

func main() {
  // Creating maps
  var m1 map[string]int               // nil map
  m2 := map[string]int{}              // empty map (non-nil)
  m3 := map[string]int{               // map with initial values
    "apple":  5,
    "banana": 8,
    "orange": 7,
  }
  m4 := make(map[string]int)          // empty map with make
  m5 := make(map[string]int, 10)      // map with initial capacity
  
  fmt.Println("m1:", m1, "nil?", m1 == nil)
  fmt.Println("m2:", m2, "nil?", m2 == nil)
  fmt.Println("m3:", m3)
  
  // Adding/updating values
  m4["apple"] = 5
  m4["banana"] = 8
  fmt.Println("m4:", m4)
  
  // Getting values
  value := m3["apple"]
  fmt.Println("m3[\"apple\"] =", value)
  
  // Checking if key exists
  value, exists := m3["grape"]
  if exists {
    fmt.Println("grape exists with value", value)
  } else {
    fmt.Println("grape doesn't exist in the map")
  }
  
  // Deleting values
  delete(m3, "orange")
  fmt.Println("After delete:", m3)
  
  // Map length
  fmt.Println("Map length:", len(m3))
  
  // Iterating through maps
  for key, value := range m3 {
    fmt.Println(key, "=", value)
  }
  
  // Maps with complex types
  type Person struct {
    Name string
    Age  int
  }
  
  people := map[string]Person{
    "john": {"John Smith", 30},
    "jane": {"Jane Doe", 25},
  }
  
  fmt.Println("John's age:", people["john"].Age)
  
  // Maps as sets
  set := map[string]bool{
    "apple":  true,
    "banana": true,
  }
  
  // Check if element is in set
  _, inSet := set["apple"]
  fmt.Println("Is apple in set?", inSet)
}`,
              explanation: "This example shows how to work with maps in Go, including creation, adding/updating/deleting elements, checking for existence, and iterating through maps."
            }
          ],
          quiz: [
            {
              question: "What is the main difference between arrays and slices in Go?",
              options: [
                "Arrays are faster than slices",
                "Slices can only contain primitive types",
                "Arrays have fixed size, slices are dynamically sized",
                "Slices can be multidimensional, arrays cannot"
              ],
              correctAnswer: 2,
              explanation: "The main difference is that arrays have a fixed size that is part of their type (e.g., [5]int), while slices are dynamically sized and can grow as needed using append()."
            },
            {
              question: "What happens when you try to access a key that doesn't exist in a map?",
              options: [
                "The program panics",
                "An error is returned",
                "nil is returned",
                "The zero value of the value type is returned"
              ],
              correctAnswer: 3,
              explanation: "When you access a key that doesn't exist in a map, Go returns the zero value of the map's value type (0 for int, \"\" for string, etc.) without any error or panic."
            }
          ],
          flashcards: [
            {
              front: "What happens to the underlying array when you append to a slice in Go?",
              back: "When appending to a slice, if the slice's capacity is sufficient, the underlying array is modified. If not, Go allocates a new, larger array, copies the existing elements, and returns a slice that points to the new array."
            },
            {
              front: "Are maps in Go thread-safe?",
              back: "No, maps in Go are not thread-safe. Concurrent reads are safe, but concurrent writes or concurrent reads and writes require external synchronization, such as using a mutex from the sync package."
            }
          ]
        },
        {
          id: "go-packages",
          title: "Packages and Imports",
          description: "Organizing code with Go packages",
          content: `
# Packages and Imports in Go

Go organizes code into packages, which are collections of Go files in the same directory that are compiled together.
          `,
          codeExamples: [
            {
              title: "Creating and Using Packages",
              code: `// File: math/calculator.go
package math

// Exported function (starts with uppercase)
func Add(a, b int) int {
  return a + b
}

// Private function (starts with lowercase)
func multiply(a, b int) int {
  return a * b
}

// Exported variable
var Pi = 3.14159

// Private variable
var internalValue = 42

// File: math/advanced.go (same package)
package math

// Square is exported
func Square(n int) int {
  return multiply(n, n) // Can access private function
}

// File: main.go
package main

import (
  "fmt"
  "example.com/myapp/math" // Import custom package
  m "example.com/myapp/math" // Import with alias
  . "fmt" // Import all exported names directly (not recommended)
)

func main() {
  // Using imported package
  result := math.Add(5, 3)
  fmt.Println("5 + 3 =", result)
  
  // Using package with alias
  squared := m.Square(4)
  fmt.Println("4² =", squared)
  
  // Using Pi constant
  fmt.Println("Pi =", math.Pi)
  
  // This would cause a compile error:
  // math.multiply(2, 3) // Can't access private function
  
  // Using imported name directly (from . "fmt")
  Println("This works because of dot import")
}`,
              explanation: "This example demonstrates how to create and use packages in Go, including exporting/unexporting names, package imports, and import aliases."
            },
            {
              title: "Go Module Basics",
              code: `// Initialize a new module
// $ go mod init example.com/myapp

// go.mod file content
module example.com/myapp

go 1.17

require (
  github.com/example/library v1.2.3
  golang.org/x/text v0.3.7
)

// Download dependencies
// $ go get github.com/example/library
// $ go get golang.org/x/text

// File: main.go
package main

import (
  "fmt"
  "github.com/example/library"
  "golang.org/x/text/cases"
  "golang.org/x/text/language"
)

func main() {
  // Using third-party libraries
  result := library.Function()
  
  // Using standard library
  caser := cases.Title(language.English)
  titled := caser.String("hello world")
  fmt.Println(titled) // "Hello World"
}

// Update dependencies
// $ go get -u

// Tidy dependencies
// $ go mod tidy

// Create vendor directory
// $ go mod vendor`,
              explanation: "This example shows how to work with Go modules, including initializing a module, adding dependencies, and managing them."
            }
          ],
          quiz: [
            {
              question: "How do you make a function or variable accessible outside its package?",
              options: [
                "Use the 'export' keyword",
                "Use the 'public' keyword",
                "Start the name with an uppercase letter",
                "Add a special comment // @export"
              ],
              correctAnswer: 2,
              explanation: "In Go, a function, type, variable, or constant is exported (accessible outside its package) if its name starts with an uppercase letter. Names beginning with lowercase letters are unexported (package-private)."
            },
            {
              question: "What is the purpose of 'go mod tidy' command?",
              options: [
                "It formats Go code according to Go standards",
                "It removes unused imports from all files",
                "It adds missing and removes unused dependencies from go.mod",
                "It organizes files in the project directory"
              ],
              correctAnswer: 2,
              explanation: "'go mod tidy' ensures that the go.mod file matches the dependencies used in the code. It adds any missing modules required to build the packages and dependencies in the module, and it removes unused modules."
            }
          ],
          flashcards: [
            {
              front: "What is an init() function in Go?",
              back: "An init() function is a special function that requires no arguments and returns no values. It's called automatically when a package is initialized, before the main function is executed. A package can have multiple init() functions, and they are executed in the order they are defined."
            },
            {
              front: "What is the difference between go.mod and go.sum files?",
              back: "The go.mod file defines the module's path, Go version, and its dependencies. The go.sum file contains the expected cryptographic checksums of the content of specific module versions, ensuring that dependencies are not modified unexpectedly."
            }
          ]
        },
        {
          id: "go-testing",
          title: "Testing and Benchmarking",
          description: "Writing and running tests in Go",
          content: `
# Testing and Benchmarking in Go

Go has a built-in testing framework in the standard library, making it easy to write and run tests.
          `,
          codeExamples: [
            {
              title: "Basic Testing",
              code: `// File: calculator.go
package calculator

// Function to test
func Add(a, b int) int {
  return a + b
}

// File: calculator_test.go
package calculator

import (
  "testing"
)

// Test function
func TestAdd(t *testing.T) {
  result := Add(2, 3)
  expected := 5
  
  if result != expected {
    t.Errorf("Add(2, 3) = %d; want %d", result, expected)
  }
}

// Table-driven test
func TestAddTable(t *testing.T) {
  tests := []struct {
    name     string
    a, b     int
    expected int
  }{
    {"positive numbers", 2, 3, 5},
    {"negative numbers", -2, -3, -5},
    {"mixed numbers", -2, 3, 1},
  }
  
  for _, test := range tests {
    t.Run(test.name, func(t *testing.T) {
      result := Add(test.a, test.b)
      if result != test.expected {
        t.Errorf("Add(%d, %d) = %d; want %d",
          test.a, test.b, result, test.expected)
      }
    })
  }
}

// To run tests:
// $ go test
// $ go test -v  // Verbose output
// $ go test ./... // Test all packages`,
              explanation: "This example shows how to write basic tests in Go using the testing package, including simple tests and table-driven tests."
            },
            {
              title: "Advanced Testing Features",
              code: `// File: advanced_test.go
package calculator

import (
  "testing"
  "time"
)

// Setup and Teardown
func TestWithSetupAndTeardown(t *testing.T) {
  // Setup
  t.Log("Setting up test")
  // ... setup code
  
  // Ensure teardown runs
  defer func() {
    t.Log("Tearing down test")
    // ... teardown code
  }()
  
  // Test logic
  t.Log("Running test")
  // ... test code
}

// Test with timeout
func TestWithTimeout(t *testing.T) {
  timeout := 100 * time.Millisecond
  
  t.Run("timeout test", func(t *testing.T) {
    // Set timeout for this test
    timer := time.AfterFunc(timeout, func() {
      t.Fatal("Test took too long")
    })
    defer timer.Stop()
    
    // Test logic
    time.Sleep(50 * time.Millisecond) // Should complete before timeout
  })
}

// Skipping tests
func TestSkippable(t *testing.T) {
  // Skip test on certain conditions
  if testing.Short() {
    t.Skip("Skipping in short mode")
  }
  
  // Long test code here
}

// Benchmarking
func BenchmarkAdd(b *testing.B) {
  // Run the Add function b.N times
  for i := 0; i < b.N; i++ {
    Add(2, 3)
  }
}

// To run benchmarks:
// $ go test -bench=.
// $ go test -bench=. -benchmem  // Include memory stats`,
              explanation: "This example demonstrates more advanced testing features in Go, including setup/teardown, timeouts, skipping tests, and benchmarking."
            }
          ],
          quiz: [
            {
              question: "How should test functions be named in Go?",
              options: [
                "test_FunctionName",
                "TestFunctionName",
                "functionNameTest",
                "test.FunctionName"
              ],
              correctAnswer: 1,
              explanation: "Test functions in Go must start with the word 'Test' followed by a name that starts with a capital letter. The function must also take *testing.T as its only parameter."
            },
            {
              question: "What command runs benchmarks in Go?",
              options: [
                "go benchmark",
                "go test -bench",
                "go run -benchmark",
                "go bench"
              ],
              correctAnswer: 1,
              explanation: "To run benchmarks in Go, you use the 'go test -bench' command. For example, 'go test -bench=.' runs all benchmarks in the current package."
            }
          ],
          flashcards: [
            {
              front: "What is a test helper function in Go?",
              back: "A test helper function is a function that performs common setup or assertion tasks used by multiple tests. In Go 1.9+, you can mark a test helper function with t.Helper(), which ensures that failures are reported at the calling line rather than inside the helper."
            },
            {
              front: "What is code coverage in Go testing?",
              back: "Code coverage measures how much of your code is executed during tests. Go has built-in code coverage tools: run tests with 'go test -cover' to see coverage percentage, or 'go test -coverprofile=cover.out' followed by 'go tool cover -html=cover.out' to generate a visual HTML report."
            }
          ]
        },
        {
          id: "go-file-io",
          title: "File I/O and Serialization",
          description: "Working with files and data formats in Go",
          content: `
# File I/O and Serialization in Go

Go provides robust libraries for working with files and various data formats.
          `,
          codeExamples: [
            {
              title: "Reading and Writing Files",
              code: `package main

import (
  "bufio"
  "fmt"
  "io"
  "io/ioutil"
  "os"
)

func main() {
  // Reading an entire file
  content, err := ioutil.ReadFile("input.txt")
  if err != nil {
    fmt.Println("Error reading file:", err)
    return
  }
  fmt.Println("File content:", string(content))
  
  // Writing to a file
  err = ioutil.WriteFile("output.txt", []byte("Hello, World!"), 0644)
  if err != nil {
    fmt.Println("Error writing file:", err)
    return
  }
  
  // Working with file handles
  file, err := os.Open("input.txt")
  if err != nil {
    fmt.Println("Error opening file:", err)
    return
  }
  defer file.Close() // Ensure file is closed when function exits
  
  // Reading with a buffer
  buffer := make([]byte, 10)
  for {
    n, err := file.Read(buffer)
    if err == io.EOF {
      break // End of file
    }
    if err != nil {
      fmt.Println("Error reading:", err)
      return
    }
    fmt.Printf("Read %d bytes: %s\n", n, buffer[:n])
  }
  
  // Reading line by line
  file, _ = os.Open("input.txt") // Reopen the file
  defer file.Close()
  
  scanner := bufio.NewScanner(file)
  lineNum := 1
  for scanner.Scan() {
    fmt.Printf("Line %d: %s\n", lineNum, scanner.Text())
    lineNum++
  }
  
  if err := scanner.Err(); err != nil {
    fmt.Println("Scanner error:", err)
  }
  
  // Creating and writing to a file
  outputFile, err := os.Create("output2.txt")
  if err != nil {
    fmt.Println("Error creating file:", err)
    return
  }
  defer outputFile.Close()
  
  // Write strings
  outputFile.WriteString("Hello, World!\n")
  outputFile.WriteString("This is a new line.\n")
  
  // Using a buffered writer
  writer := bufio.NewWriter(outputFile)
  writer.WriteString("This is buffered.\n")
  writer.Flush() // Don't forget to flush the buffer
}`,
              explanation: "This example demonstrates basic file operations in Go, including reading and writing entire files, working with file handles, and using buffered I/O."
            },
            {
              title: "JSON and CSV Handling",
              code: `package main

import (
  "encoding/csv"
  "encoding/json"
  "fmt"
  "os"
)

// Struct for JSON serialization
type Person struct {
  Name    string   \`json:"name"\`
  Age     int      \`json:"age"\`
  Email   string   \`json:"email,omitempty"\`
  Hobbies []string \`json:"hobbies,omitempty"\`
}

func main() {
  // JSON serialization (struct to JSON)
  person := Person{
    Name:    "John Doe",
    Age:     30,
    Email:   "john@example.com",
    Hobbies: []string{"reading", "cycling"},
  }
  
  // Marshal to JSON
  jsonData, err := json.Marshal(person)
  if err != nil {
    fmt.Println("Error marshaling JSON:", err)
    return
  }
  fmt.Println("JSON:", string(jsonData))
  
  // Pretty printing JSON
  prettyJSON, _ := json.MarshalIndent(person, "", "  ")
  fmt.Println("Pretty JSON:\n", string(prettyJSON))
  
  // JSON deserialization (JSON to struct)
  var decodedPerson Person
  err = json.Unmarshal(jsonData, &decodedPerson)
  if err != nil {
    fmt.Println("Error unmarshaling JSON:", err)
    return
  }
  fmt.Printf("Decoded: %+v\n", decodedPerson)
  
  // Working with CSV
  // Writing CSV
  csvFile, err := os.Create("data.csv")
  if err != nil {
    fmt.Println("Error creating CSV file:", err)
    return
  }
  defer csvFile.Close()
  
  writer := csv.NewWriter(csvFile)
  defer writer.Flush()
  
  // Write header and data
  records := [][]string{
    {"Name", "Age", "City"},
    {"John", "30", "New York"},
    {"Jane", "25", "San Francisco"},
    {"Bob", "35", "Chicago"},
  }
  
  for _, record := range records {
    err := writer.Write(record)
    if err != nil {
      fmt.Println("Error writing CSV record:", err)
      return
    }
  }
  
  // Reading CSV
  csvFile, err = os.Open("data.csv")
  if err != nil {
    fmt.Println("Error opening CSV file:", err)
    return
  }
  defer csvFile.Close()
  
  reader := csv.NewReader(csvFile)
  
  // Read all records
  records, err = reader.ReadAll()
  if err != nil {
    fmt.Println("Error reading CSV:", err)
    return
  }
  
  // Print records
  for i, record := range records {
    fmt.Printf("Record %d: %v\n", i, record)
  }
}`,
              explanation: "This example shows how to work with JSON and CSV data in Go, including serializing and deserializing JSON with structs, and reading and writing CSV files."
            }
          ],
          quiz: [
            {
              question: "What is the purpose of the defer keyword when working with files?",
              options: [
                "It delays reading the file until needed",
                "It ensures the file handle is closed when the function exits",
                "It defers file operations until system resources are available",
                "It prevents other processes from accessing the file"
              ],
              correctAnswer: 1,
              explanation: "The defer keyword ensures that the specified function call (like file.Close()) is executed when the surrounding function returns, regardless of how it returns. This is particularly useful for resource cleanup like closing files."
            },
            {
              question: "What does the json tag `json:\"name,omitempty\"` do in a struct field definition?",
              options: [
                "It makes the field required in JSON",
                "It renames the field to 'name' in JSON and omits it if the value is empty",
                "It validates that the field is not empty",
                "It specifies that only empty values are allowed"
              ],
              correctAnswer: 1,
              explanation: "The json tag with 'omitempty' option means that the field will be omitted from the JSON output if its value is empty (zero value for its type, such as \"\", 0, false, nil, empty array or map)."
            }
          ],
          flashcards: [
            {
              front: "What's the difference between os.Open() and os.Create() in Go?",
              back: "os.Open() opens an existing file for reading. It returns an error if the file doesn't exist. os.Create() creates a new file or truncates an existing file for writing. It creates the file if it doesn't exist."
            },
            {
              front: "What is the purpose of the ioutil package in Go?",
              back: "The ioutil package (now mostly moved to os and io packages in Go 1.16+) provides utility functions for I/O operations, such as ReadFile and WriteFile for simple file operations without needing to explicitly handle opening and closing files."
            }
          ]
        },
        {
          id: "go-web-development",
          title: "Web Development",
          description: "Building web applications with Go",
          content: `
# Web Development in Go

Go's standard library includes powerful packages for web development, making it easy to build HTTP servers and REST APIs.
          `,
          codeExamples: [
            {
              title: "HTTP Server",
              code: `package main

import (
  "fmt"
  "log"
  "net/http"
)

// Basic handler function
func helloHandler(w http.ResponseWriter, r *http.Request) {
  fmt.Fprintf(w, "Hello, World!")
}

// Handler with request info
func infoHandler(w http.ResponseWriter, r *http.Request) {
  fmt.Fprintln(w, "URL Path:", r.URL.Path)
  fmt.Fprintln(w, "Method:", r.Method)
  fmt.Fprintln(w, "Headers:")
  
  for name, headers := range r.Header {
    for _, h := range headers {
      fmt.Fprintf(w, "%v: %v\\n", name, h)
    }
  }
  
  // Get query parameters
  queryParams := r.URL.Query()
  fmt.Fprintln(w, "Query Parameters:")
  for key, values := range queryParams {
    for _, value := range values {
      fmt.Fprintf(w, "%v: %v\\n", key, value)
    }
  }
}

// Handler using http.HandlerFunc
func greetHandler(w http.ResponseWriter, r *http.Request) {
  name := r.URL.Query().Get("name")
  if name == "" {
    name = "Guest"
  }
  fmt.Fprintf(w, "Hello, %s!", name)
}

func main() {
  // Register handlers
  http.HandleFunc("/", helloHandler)
  http.HandleFunc("/info", infoHandler)
  http.HandleFunc("/greet", greetHandler)
  
  // Start the server
  fmt.Println("Starting server on :8080")
  err := http.ListenAndServe(":8080", nil)
  if err != nil {
    log.Fatal("ListenAndServe: ", err)
  }
}

// To test:
// curl http://localhost:8080/
// curl http://localhost:8080/info
// curl http://localhost:8080/greet?name=John`,
              explanation: "This example demonstrates how to create a basic HTTP server in Go using the net/http package, including different handler types and URL handling."
            },
            {
              title: "RESTful API",
              code: `package main

import (
  "encoding/json"
  "fmt"
  "log"
  "net/http"
  "strconv"
  "strings"
)

// Book represents a book in our bookstore
type Book struct {
  ID     int    \`json:"id"\`
  Title  string \`json:"title"\`
  Author string \`json:"author"\`
  Price  float64 \`json:"price"\`
}

var books = []Book{
  {ID: 1, Title: "The Go Programming Language", Author: "Alan Donovan & Brian Kernighan", Price: 36.99},
  {ID: 2, Title: "Go in Action", Author: "William Kennedy", Price: 29.99},
  {ID: 3, Title: "Concurrency in Go", Author: "Katherine Cox-Buday", Price: 32.99},
}

// GET /api/books - Get all books
// GET /api/books/1 - Get book with ID 1
// POST /api/books - Create a new book
// PUT /api/books/1 - Update book with ID 1
// DELETE /api/books/1 - Delete book with ID 1
func booksHandler(w http.ResponseWriter, r *http.Request) {
  w.Header().Set("Content-Type", "application/json")
  
  // Extract the ID from URL if present
  pathParts := strings.Split(r.URL.Path, "/")
  var id int
  var err error
  
  if len(pathParts) > 3 {
    id, err = strconv.Atoi(pathParts[3])
    if err != nil {
      http.Error(w, "Invalid ID", http.StatusBadRequest)
      return
    }
  }
  
  switch r.Method {
  case http.MethodGet:
    if id > 0 {
      // Get a specific book
      for _, book := range books {
        if book.ID == id {
          json.NewEncoder(w).Encode(book)
          return
        }
      }
      http.Error(w, "Book not found", http.StatusNotFound)
    } else {
      // Get all books
      json.NewEncoder(w).Encode(books)
    }
    
  case http.MethodPost:
    // Create a new book
    var book Book
    err := json.NewDecoder(r.Body).Decode(&book)
    if err != nil {
      http.Error(w, "Invalid request body", http.StatusBadRequest)
      return
    }
    
    // Generate a new ID
    maxID := 0
    for _, b := range books {
      if b.ID > maxID {
        maxID = b.ID
      }
    }
    book.ID = maxID + 1
    
    // Add the new book
    books = append(books, book)
    
    w.WriteHeader(http.StatusCreated)
    json.NewEncoder(w).Encode(book)
    
  case http.MethodPut:
    if id <= 0 {
      http.Error(w, "ID is required for updates", http.StatusBadRequest)
      return
    }
    
    // Update an existing book
    var updatedBook Book
    err := json.NewDecoder(r.Body).Decode(&updatedBook)
    if err != nil {
      http.Error(w, "Invalid request body", http.StatusBadRequest)
      return
    }
    
    for i, book := range books {
      if book.ID == id {
        // Preserve the ID
        updatedBook.ID = id
        books[i] = updatedBook
        json.NewEncoder(w).Encode(updatedBook)
        return
      }
    }
    
    http.Error(w, "Book not found", http.StatusNotFound)
    
  case http.MethodDelete:
    if id <= 0 {
      http.Error(w, "ID is required for deletion", http.StatusBadRequest)
      return
    }
    
    // Delete a book
    for i, book := range books {
      if book.ID == id {
        books = append(books[:i], books[i+1:]...)
        w.WriteHeader(http.StatusNoContent)
        return
      }
    }
    
    http.Error(w, "Book not found", http.StatusNotFound)
    
  default:
    http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
  }
}

func main() {
  // Register API handlers
  http.HandleFunc("/api/books", booksHandler)
  http.HandleFunc("/api/books/", booksHandler)
  
  // Start the server
  fmt.Println("Starting API server on :8080")
  log.Fatal(http.ListenAndServe(":8080", nil))
}`,
              explanation: "This example shows how to build a simple RESTful API in Go with CRUD (Create, Read, Update, Delete) operations on a books resource. It handles different HTTP methods and URL patterns."
            }
          ],
          quiz: [
            {
              question: "Which package provides HTTP client and server implementations in Go?",
              options: [
                "http",
                "net/http",
                "web",
                "golang.org/http"
              ],
              correctAnswer: 1,
              explanation: "The net/http package in Go's standard library provides HTTP client and server implementations, including functions to handle requests, responses, and cookies."
            },
            {
              question: "What is the purpose of w.Header().Set() in an HTTP handler?",
              options: [
                "To set a cookie",
                "To set an HTTP response status code",
                "To set an HTTP response header",
                "To set a request parameter"
              ],
              correctAnswer: 2,
              explanation: "The w.Header().Set() method is used to set HTTP response headers before sending the response. Common uses include setting Content-Type, Content-Length, or custom headers."
            }
          ],
          flashcards: [
            {
              front: "What is middleware in the context of Go web development?",
              back: "Middleware in Go web development refers to functions that process HTTP requests and/or responses before they reach the final handler. They are commonly used for logging, authentication, CORS handling, and other cross-cutting concerns."
            },
            {
              front: "How do you handle cookies in Go's net/http package?",
              back: "To set a cookie: cookie := http.Cookie{Name: \"name\", Value: \"value\", Path: \"/\"} http.SetCookie(w, &cookie). To read a cookie: cookie, err := r.Cookie(\"name\"). All cookies: cookies := r.Cookies()."
            }
          ]
        },
        {
          id: "go-tools",
          title: "Go Tools and Tooling",
          description: "Using the Go toolchain and ecosystem",
          content: `
# Go Tools and Tooling

Go comes with a comprehensive set of command-line tools that help with building, testing, and maintaining Go code.
          `,
          codeExamples: [
            {
              title: "Go Commands and Workflow",
              code: `// Building and running
$ go build                  # Build the current package
$ go build main.go          # Build a specific file
$ go build -o myapp main.go # Build with custom output name
$ go run main.go            # Build and run in one step

// Testing
$ go test                   # Test the current package
$ go test ./...             # Test all packages in current directory and subdirectories
$ go test -v                # Verbose test output
$ go test -cover            # Show test coverage
$ go test -bench=.          # Run benchmarks

// Dependency management
$ go mod init example.com/myapp    # Initialize a new module
$ go get github.com/pkg/errors     # Add a dependency
$ go get -u                        # Update all dependencies
$ go mod tidy                      # Clean up unused dependencies
$ go mod vendor                    # Create vendor directory

// Code quality and formatting
$ go fmt                    # Format Go code
$ go vet                    # Report likely mistakes in packages
$ go install golang.org/x/lint/golint@latest # Install golint
$ golint ./...              # Lint code

// Documentation
$ go doc fmt.Println        # Show documentation for a function
$ godoc -http=:6060         # Start local documentation server

// Cross compilation
$ GOOS=linux GOARCH=amd64 go build  # Build for Linux
$ GOOS=windows GOARCH=amd64 go build # Build for Windows
$ GOOS=darwin GOARCH=amd64 go build # Build for macOS

// Installing third-party tools
$ go install github.com/jteeuwen/go-bindata/...@latest

// List available commands
$ go help`,
              explanation: "This example lists common Go command-line tools and their usage for various development tasks including building, testing, formatting, and documentation."
            },
            {
              title: "Go Project Structure",
              code: `// Typical Go project structure
myapp/                      # Root directory
├── go.mod                  # Module definition
├── go.sum                  # Module checksums
├── main.go                 # Application entry point
├── README.md               # Documentation
├── Makefile                # Build automation (optional)
├── .gitignore              # Git ignore file
├── api/                    # API definitions
│   └── api.go
├── cmd/                    # Command-line applications
│   └── myapp/
│       └── main.go         # Main application entry point
├── internal/               # Private application code
│   ├── auth/               # Authentication package
│   │   ├── auth.go
│   │   └── auth_test.go
│   └── config/             # Configuration package
│       └── config.go
├── pkg/                    # Public library code
│   ├── models/             # Data models
│   │   └── user.go
│   └── utils/              # Utility functions
│       └── helpers.go
├── web/                    # Web assets
│   ├── templates/
│   └── static/
└── vendor/                 # Vendored dependencies (optional)

// Example Makefile for Go project
build:
	go build -o bin/myapp cmd/myapp/main.go

test:
	go test -v ./...

lint:
	go fmt ./...
	go vet ./...

clean:
	rm -rf bin/

.PHONY: build test lint clean`,
              explanation: "This example shows a recommended project structure for a Go application, including directory organization and a simple Makefile for common tasks."
            }
          ],
          quiz: [
            {
              question: "What is the purpose of 'go fmt'?",
              options: [
                "To build and format Go code",
                "To automatically format Go code according to Go's standard style",
                "To check code for potential bugs",
                "To generate formatted documentation"
              ],
              correctAnswer: 1,
              explanation: "The 'go fmt' command automatically formats Go code according to Go's standard style guide, ensuring consistent code formatting across projects and teams."
            },
            {
              question: "What environment variables can be set to build Go code for different platforms?",
              options: [
                "GO_OS and GO_ARCH",
                "GOOS and GOARCH",
                "PLATFORM and ARCHITECTURE",
                "GO_PLATFORM and GO_ARCH"
              ],
              correctAnswer: 1,
              explanation: "The GOOS and GOARCH environment variables control the target operating system and architecture for Go builds, allowing for easy cross-compilation. For example, GOOS=windows GOARCH=amd64 go build compiles for Windows on x86-64."
            }
          ],
          flashcards: [
            {
              front: "What is the difference between go build and go install?",
              back: "go build compiles packages but the resulting executable is placed in the current directory. go install compiles and installs packages to the bin directory in the GOPATH, making the executable available system-wide."
            },
            {
              front: "What is the purpose of the 'internal' directory in a Go project?",
              back: "The 'internal' directory contains package code that is private to the application or library. Go prevents importing packages from an 'internal' directory except from within the same parent module, ensuring they cannot be imported by external code."
            }
          ]
        }
      ]
    }
  ]
};
