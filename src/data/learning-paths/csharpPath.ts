import { LearningPath } from '../types';

export const csharpPath: LearningPath = {
  languageId: "csharp",
  modules: [
    {
      id: "cs-basics",
      title: "C# Fundamentals",
      description: "Learn the core concepts of C# programming",
      topics: [
        {
          id: "cs-intro",
          title: "Introduction to C#",
          description: "Understanding the basics of C# programming",
          content: `
# Introduction to C#

C# is a modern, object-oriented programming language developed by Microsoft as part of the .NET platform.
          `,
          codeExamples: [
            {
              title: "Hello World in C#",
              code: `using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Hello, World!");
    }
}`,
              explanation: "This is a simple C# program that includes the System namespace, defines a main function (the entry point), and uses the Console.WriteLine method to print text to the console."
            }
          ],
          quiz: [
            {
              question: "Which company developed C#?",
              options: ["Apple", "Google", "Microsoft", "Oracle"],
              correctAnswer: 2,
              explanation: "C# was developed by Microsoft as part of its .NET initiative and was designed by Anders Hejlsberg."
            }
          ],
          flashcards: [
            {
              front: "What is C#?",
              back: "C# (pronounced 'C sharp') is a modern, object-oriented programming language developed by Microsoft as part of its .NET platform. It was designed to be simple, powerful, type-safe, and object-oriented."
            },
            {
              front: "What is a namespace in C#?",
              back: "A namespace in C# is a container for classes and other namespaces. It helps organize code and provides a way to avoid name collisions. The 'using' directive allows you to use types from a namespace without specifying the fully qualified name."
            },
            {
              front: "What are properties in C#?",
              back: "Properties in C# are members that provide a flexible mechanism to read, write, or compute the value of a private field. They allow access to data while hiding implementation details."
            },
            {
              front: "What is the difference between value types and reference types in C#?",
              back: "Value types (struct, enum, and primitive types) directly contain their data and are stored on the stack. Reference types (class, interface, delegate, array) store a reference to their data, which is stored on the heap."
            },
            {
              front: "What are delegates in C#?",
              back: "Delegates in C# are type-safe function pointers that can reference methods with compatible signatures. They are used for implementing events and callback methods, and are the foundation for lambda expressions and LINQ."
            }
          ]
        },
        {
          id: "cs-variables",
          title: "Variables and Data Types",
          description: "Working with different types of data in C#",
          content: `
# Variables and Data Types in C#

C# is a strongly-typed language with a rich set of built-in data types.
          `,
          codeExamples: [
            {
              title: "Basic Data Types",
              code: `using System;

class Program
{
    static void Main()
    {
        // Integer types
        int num = 42;
        long bigNum = 9223372036854775807L;
        short smallNum = 32767;
        byte b = 255;
        
        // Floating-point types
        float f = 3.14f;
        double d = 3.14159265359;
        decimal m = 3.14159265359m;  // Precise decimal calculations
        
        // Character and string
        char c = 'A';
        string s = "Hello, C#!";
        
        // Boolean
        bool isTrue = true;
        
        // Output values
        Console.WriteLine($"Integer: {num}");
        Console.WriteLine($"Long: {bigNum}");
        Console.WriteLine($"Float: {f}");
        Console.WriteLine($"Double: {d}");
        Console.WriteLine($"Char: {c}");
        Console.WriteLine($"String: {s}");
        Console.WriteLine($"Boolean: {isTrue}");
    }
}`,
              explanation: "This example demonstrates the basic data types in C#, including integer types, floating-point types, character and string types, and boolean type."
            }
          ],
          quiz: [
            {
              question: "Which data type in C# provides the most precision for decimal values?",
              options: ["float", "double", "decimal", "int"],
              correctAnswer: 2,
              explanation: "The decimal type in C# provides the most precision for decimal values and is especially suited for financial and monetary calculations."
            }
          ],
          flashcards: [
            {
              front: "What is the difference between float and double in C#?",
              back: "Both float and double are floating-point types, but double has greater precision and range. Float is a 32-bit type with precision of 7 digits, while double is a 64-bit type with precision of 15-16 digits."
            }
          ]
        },
        {
          id: "cs-control-flow",
          title: "Control Flow",
          description: "Working with conditionals and loops in C#",
          content: `
# Control Flow in C#

Control flow statements determine the order in which code is executed based on conditions.
          `,
          codeExamples: [
            {
              title: "Conditional Statements",
              code: `using System;

class Program
{
    static void Main()
    {
        int x = 10;
        
        // If statement
        if (x > 5)
        {
            Console.WriteLine("x is greater than 5");
        }
        
        // If-else statement
        int y = 3;
        if (y > 5)
        {
            Console.WriteLine("y is greater than 5");
        }
        else
        {
            Console.WriteLine("y is not greater than 5");
        }
        
        // If-else if-else statement
        int z = 5;
        if (z > 10)
        {
            Console.WriteLine("z is greater than 10");
        }
        else if (z == 5)
        {
            Console.WriteLine("z is equal to 5");
        }
        else
        {
            Console.WriteLine("z is less than 5");
        }
        
        // Switch statement
        int day = 3;
        switch (day)
        {
            case 1:
                Console.WriteLine("Monday");
                break;
            case 2:
                Console.WriteLine("Tuesday");
                break;
            case 3:
                Console.WriteLine("Wednesday");
                break;
            case 4:
                Console.WriteLine("Thursday");
                break;
            case 5:
                Console.WriteLine("Friday");
                break;
            default:
                Console.WriteLine("Weekend");
                break;
        }
    }
}`,
              explanation: "This example demonstrates conditional statements in C#, including if, if-else, if-else if-else, and switch statements."
            }
          ],
          quiz: [
            {
              question: "What happens if you omit the break statement in a switch case?",
              options: ["The program will not compile", "The case will be skipped", "The execution will fall through to the next case", "A runtime error will occur"],
              correctAnswer: 2,
              explanation: "If you omit the break statement in a switch case, the execution will 'fall through' to the next case, executing all the statements until a break is encountered or the switch block ends."
            }
          ],
          flashcards: [
            {
              front: "What is the ternary operator in C#?",
              back: "The ternary operator is a shorthand way of writing an if-else statement. It has the form: condition ? expression_if_true : expression_if_false."
            }
          ]
        },
        {
          id: "cs-methods",
          title: "Methods",
          description: "Creating and using methods in C#",
          content: `
# Methods in C#

Methods are blocks of code that perform specific tasks and can be reused throughout your program.
          `,
          codeExamples: [
            {
              title: "Defining and Calling Methods",
              code: `using System;

class Program
{
    static void Main()
    {
        // Calling methods
        SayHello();
        
        string name = "Alice";
        SayHelloTo(name);
        
        int sum = Add(5, 3);
        Console.WriteLine($"Sum: {sum}");
        
        // Using optional parameters
        GreetPerson("Bob");
        GreetPerson("Charlie", "Good morning");
        
        // Using named parameters
        PrintDetails(name: "David", age: 30);
        PrintDetails(age: 25, name: "Eve");  // Order doesn't matter with named parameters
    }
    
    // Method with no parameters and no return value
    static void SayHello()
    {
        Console.WriteLine("Hello, World!");
    }
    
    // Method with a parameter
    static void SayHelloTo(string name)
    {
        Console.WriteLine($"Hello, {name}!");
    }
    
    // Method with parameters and a return value
    static int Add(int a, int b)
    {
        return a + b;
    }
    
    // Method with an optional parameter
    static void GreetPerson(string name, string greeting = "Hello")
    {
        Console.WriteLine($"{greeting}, {name}!");
    }
    
    // Method with multiple parameters
    static void PrintDetails(string name, int age)
    {
        Console.WriteLine($"Name: {name}, Age: {age}");
    }
}`,
              explanation: "This example demonstrates how to define and call methods in C#, including methods with no parameters, methods with parameters, methods with return values, methods with optional parameters, and using named parameters."
            }
          ],
          quiz: [
            {
              question: "What is method overloading in C#?",
              options: ["Defining a method with the same name in a derived class", "Defining multiple methods with the same name but different parameters", "Using optional parameters in a method", "Implementing an interface method"],
              correctAnswer: 1,
              explanation: "Method overloading in C# is defining multiple methods with the same name but different parameters (different number or types of parameters) within the same class."
            }
          ],
          flashcards: [
            {
              front: "What are expression-bodied methods in C#?",
              back: "Expression-bodied methods are a concise syntax for methods that have a single expression as their body. Instead of using curly braces and a return statement, you use the => operator: type MethodName(parameters) => expression;"
            }
          ]
        },
        {
          id: "cs-oop",
          title: "Object-Oriented Programming",
          description: "Understanding classes, objects, inheritance, and polymorphism in C#",
          content: `
# Object-Oriented Programming in C#

C# is a fully object-oriented programming language with support for classes, objects, inheritance, and polymorphism.
          `,
          codeExamples: [
            {
              title: "Classes and Objects",
              code: `using System;

// Base class
class Animal
{
    // Fields
    protected string name;
    
    // Constructor
    public Animal(string name)
    {
        this.name = name;
    }
    
    // Methods
    public virtual void MakeSound()
    {
        Console.WriteLine("Some generic animal sound");
    }
    
    public void Eat()
    {
        Console.WriteLine($"{name} is eating");
    }
}

// Derived class
class Dog : Animal
{
    // Additional field
    private string breed;
    
    // Constructor
    public Dog(string name, string breed) : base(name)
    {
        this.breed = breed;
    }
    
    // Override method
    public override void MakeSound()
    {
        Console.WriteLine("Woof!");
    }
    
    // Additional method
    public void Fetch()
    {
        Console.WriteLine($"{name} is fetching the ball");
    }
    
    // Property
    public string Breed
    {
        get { return breed; }
        set { breed = value; }
    }
}

class Program
{
    static void Main()
    {
        // Create objects
        Animal genericAnimal = new Animal("Generic Animal");
        Dog myDog = new Dog("Buddy", "Golden Retriever");
        
        // Call methods
        genericAnimal.MakeSound();  // "Some generic animal sound"
        myDog.MakeSound();  // "Woof!"
        
        genericAnimal.Eat();  // "Generic Animal is eating"
        myDog.Eat();  // "Buddy is eating"
        
        // Call derived class specific method
        myDog.Fetch();  // "Buddy is fetching the ball"
        
        // Use property
        Console.WriteLine($"Dog breed: {myDog.Breed}");
        myDog.Breed = "Labrador";
        Console.WriteLine($"Updated breed: {myDog.Breed}");
        
        // Polymorphism
        Animal polymorphicDog = new Dog("Rex", "German Shepherd");
        polymorphicDog.MakeSound();  // "Woof!" (calls the overridden method)
    }
}`,
              explanation: "This example demonstrates key object-oriented programming concepts in C#, including class definition, object creation, inheritance, method overriding, properties, and polymorphism."
            }
          ],
          quiz: [
            {
              question: "What does the 'virtual' keyword do in C#?",
              options: ["Makes a method private", "Marks a method as abstract", "Allows a method to be overridden in derived classes", "Creates a static method"],
              correctAnswer: 2,
              explanation: "The 'virtual' keyword in C# allows a method to be overridden in derived classes using the 'override' keyword. It indicates that the method can be redefined in derived classes."
            }
          ],
          flashcards: [
            {
              front: "What is polymorphism in C#?",
              back: "Polymorphism in C# is the ability to present the same interface for different underlying forms (data types). It allows objects of different classes to be treated as objects of a common superclass, enabling method calls to behave differently based on the actual object type."
            }
          ]
        },
        {
          id: "cs-collections",
          title: "Collections",
          description: "Working with collections of objects in C#",
          content: `
# Collections in C#

C# provides several collection types that allow you to work with groups of related objects.
          `,
          codeExamples: [
            {
              title: "Lists and Dictionaries",
              code: `using System;
using System.Collections.Generic;

class Program
{
    static void Main()
    {
        // List collection
        List<string> names = new List<string>();
        names.Add("Alice");
        names.Add("Bob");
        names.Add("Charlie");
        
        Console.WriteLine("List count: " + names.Count);  // 3
        
        // Access by index
        Console.WriteLine("First name: " + names[0]);  // Alice
        
        // Iterate through a list
        Console.WriteLine("All names:");
        foreach (string name in names)
        {
            Console.WriteLine(name);
        }
        
        // Check if list contains an item
        bool containsBob = names.Contains("Bob");  // true
        
        // Remove an item
        names.Remove("Bob");
        
        // Insert at specific position
        names.Insert(1, "David");
        
        // Dictionary collection
        Dictionary<string, int> ages = new Dictionary<string, int>();
        ages.Add("Alice", 25);
        ages.Add("Bob", 30);
        ages["Charlie"] = 35;  // Another way to add or update
        
        // Access by key
        Console.WriteLine("Bob's age: " + ages["Bob"]);  // 30
        
        // Check if key exists
        if (ages.ContainsKey("David"))
        {
            Console.WriteLine("David's age: " + ages["David"]);
        }
        else
        {
            Console.WriteLine("David's age not found");
        }
        
        // Iterate through a dictionary
        Console.WriteLine("All ages:");
        foreach (KeyValuePair<string, int> pair in ages)
        {
            Console.WriteLine($"{pair.Key}: {pair.Value}");
        }
        
        // Remove an entry
        ages.Remove("Bob");
    }
}`,
              explanation: "This example demonstrates how to use some of the most common collection types in C#, including List<T> for storing sequences of elements and Dictionary<TKey, TValue> for storing key-value pairs."
            }
          ],
          quiz: [
            {
              question: "Which collection type in C# stores elements in key-value pairs?",
              options: ["List<T>", "Array", "Dictionary<TKey, TValue>", "HashSet<T>"],
              correctAnswer: 2,
              explanation: "Dictionary<TKey, TValue> is a collection that stores elements as key-value pairs, allowing fast lookups by key."
            }
          ],
          flashcards: [
            {
              front: "What is the difference between an array and a List<T> in C#?",
              back: "Arrays have a fixed size that is set when they are created, while List<T> can dynamically grow or shrink in size. List<T> also provides more built-in methods for manipulating the collection."
            }
          ]
        },
        {
          id: "cs-linq",
          title: "LINQ",
          description: "Querying collections with Language Integrated Query (LINQ)",
          content: `
# LINQ (Language Integrated Query) in C#

LINQ provides a unified way to query different types of data sources, including collections, databases, and XML.
          `,
          codeExamples: [
            {
              title: "LINQ Queries",
              code: `using System;
using System.Collections.Generic;
using System.Linq;

class Program
{
    static void Main()
    {
        // Sample data
        List<int> numbers = new List<int> { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };
        
        // LINQ query syntax
        var evenNumbers = from num in numbers
                          where num % 2 == 0
                          select num;
        
        Console.WriteLine("Even numbers (query syntax):");
        foreach (var num in evenNumbers)
        {
            Console.Write(num + " "); // 2 4 6 8 10
        }
        Console.WriteLine();
        
        // LINQ method syntax
        var oddNumbers = numbers.Where(n => n % 2 != 0);
        
        Console.WriteLine("Odd numbers (method syntax):");
        foreach (var num in oddNumbers)
        {
            Console.Write(num + " "); // 1 3 5 7 9
        }
        Console.WriteLine();
        
        // More LINQ operations
        int sum = numbers.Sum(); // 55
        int max = numbers.Max(); // 10
        int min = numbers.Min(); // 1
        double avg = numbers.Average(); // 5.5
        
        Console.WriteLine($"Sum: {sum}, Max: {max}, Min: {min}, Average: {avg}");
        
        // Ordering
        var descending = numbers.OrderByDescending(n => n);
        Console.WriteLine("Descending order:");
        foreach (var num in descending)
        {
            Console.Write(num + " "); // 10 9 8 7 6 5 4 3 2 1
        }
        Console.WriteLine();
        
        // First, Last, FirstOrDefault
        int first = numbers.First(); // 1
        int last = numbers.Last(); // 10
        int firstEven = numbers.First(n => n % 2 == 0); // 2
        
        // Complex objects with LINQ
        List<Person> people = new List<Person>
        {
            new Person { Name = "Alice", Age = 25 },
            new Person { Name = "Bob", Age = 30 },
            new Person { Name = "Charlie", Age = 20 },
            new Person { Name = "David", Age = 35 }
        };
        
        var adults = from person in people
                      where person.Age >= 18
                      orderby person.Name
                      select new { person.Name, IsAdult = true };
        
        Console.WriteLine("Adults:");
        foreach (var adult in adults)
        {
            Console.WriteLine($"{adult.Name} is an adult: {adult.IsAdult}");
        }
    }
}

class Person
{
    public string Name { get; set; }
    public int Age { get; set; }
}`,
              explanation: "This example demonstrates how to use LINQ to query collections in C#, including both query syntax and method syntax, as well as various LINQ operations like filtering, ordering, and projecting."
            }
          ],
          quiz: [
            {
              question: "Which LINQ method returns the first element of a sequence that satisfies a specified condition, or throws an exception if no such element is found?",
              options: ["First()", "FirstOrDefault()", "Single()", "Find()"],
              correctAnswer: 0,
              explanation: "The First() method returns the first element of a sequence that satisfies a specified condition, or throws an InvalidOperationException if no such element is found. FirstOrDefault() would return the default value for the type instead of throwing an exception."
            }
          ],
          flashcards: [
            {
              front: "What is the difference between LINQ query syntax and method syntax?",
              back: "LINQ query syntax uses SQL-like keywords (from, where, select) and is easier to read for complex queries. Method syntax uses method chaining (Where(), Select()) and offers better IntelliSense support. Both are equivalent in functionality and can be mixed."
            }
          ]
        },
        {
          id: "cs-exceptions",
          title: "Exception Handling",
          description: "Managing errors with exception handling in C#",
          content: `
# Exception Handling in C#

Exception handling allows you to deal with runtime errors gracefully, making your program more robust.
          `,
          codeExamples: [
            {
              title: "Try-Catch-Finally",
              code: `using System;
using System.IO;

class Program
{
    static void Main()
    {
        // Basic try-catch
        try
        {
            int a = 10;
            int b = 0;
            int result = a / b; // This will cause a DivideByZeroException
            Console.WriteLine($"Result: {result}"); // This line won't execute
        }
        catch (DivideByZeroException ex)
        {
            Console.WriteLine($"Error: {ex.Message}"); // "Error: Division by zero"
        }
        
        Console.WriteLine("Program continues after exception");
        
        // Multiple catch blocks
        try
        {
            string text = File.ReadAllText("nonexistent.txt"); // This will cause a FileNotFoundException
            int number = int.Parse(text); // This won't execute
        }
        catch (FileNotFoundException ex)
        {
            Console.WriteLine($"File error: {ex.Message}");
        }
        catch (FormatException ex)
        {
            Console.WriteLine($"Format error: {ex.Message}");
        }
        catch (Exception ex) // Catch-all for any other exceptions
        {
            Console.WriteLine($"General error: {ex.Message}");
        }
        
        // Try-catch-finally
        try
        {
            Console.WriteLine("Opening resource");
            // Code that might throw an exception
            throw new Exception("Something went wrong");
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Caught exception: {ex.Message}");
        }
        finally
        {
            // This will always execute, whether an exception occurred or not
            Console.WriteLine("Closing resource");
        }
        
        // Using statement (automatically handles resource disposal)
        try
        {
            using (StreamReader reader = new StreamReader("example.txt"))
            {
                string line = reader.ReadLine();
                Console.WriteLine(line);
            } // The StreamReader is automatically disposed here
        }
        catch (FileNotFoundException ex)
        {
            Console.WriteLine($"File not found: {ex.Message}");
        }
    }
}`,
              explanation: "This example demonstrates exception handling in C#, including basic try-catch blocks, multiple catch blocks for different exception types, the finally block, and using the 'using' statement for automatic resource disposal."
            }
          ],
          quiz: [
            {
              question: "When is the 'finally' block executed in a try-catch-finally statement?",
              options: ["Only when an exception occurs", "Only when no exception occurs", "Always, whether an exception occurs or not", "Only when a specific type of exception occurs"],
              correctAnswer: 2,
              explanation: "The 'finally' block in a try-catch-finally statement is always executed, whether an exception occurs or not. It's typically used for cleanup operations, like closing files or releasing resources, that should happen regardless of whether an error occurred."
            }
          ],
          flashcards: [
            {
              front: "What happens if an exception is not caught in C#?",
              back: "If an exception is not caught, it propagates up the call stack to the calling method. If no method in the call stack catches the exception, the program terminates with an unhandled exception error, and the CLR displays an error message."
            }
          ]
        },
        {
          id: "cs-async",
          title: "Asynchronous Programming",
          description: "Writing non-blocking code with async/await in C#",
          content: `
# Asynchronous Programming in C#

Asynchronous programming allows you to write non-blocking code that can perform long-running operations without freezing the application.
          `,
          codeExamples: [
            {
              title: "Async and Await",
              code: `using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;

class Program
{
    static async Task Main()
    {
        Console.WriteLine($"Starting main thread: {Thread.CurrentThread.ManagedThreadId}");
        
        // Call async method
        await DoWorkAsync();
        
        // Multiple async operations
        Task<string> task1 = FetchDataAsync("https://api.example.com/data1");
        Task<string> task2 = FetchDataAsync("https://api.example.com/data2");
        
        // Wait for both tasks to complete
        string[] results = await Task.WhenAll(task1, task2);
        
        Console.WriteLine($"Data 1: {results[0]}");
        Console.WriteLine($"Data 2: {results[1]}");
        
        // Exception handling in async methods
        try
        {
            await ThrowExceptionAsync();
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Caught exception: {ex.Message}");
        }
        
        Console.WriteLine("Main method complete");
    }
    
    static async Task DoWorkAsync()
    {
        Console.WriteLine($"Starting DoWorkAsync on thread: {Thread.CurrentThread.ManagedThreadId}");
        
        // Simulate asynchronous work
        await Task.Delay(1000); // Non-blocking delay
        
        Console.WriteLine($"Finished delay on thread: {Thread.CurrentThread.ManagedThreadId}");
        
        // More work after the delay
        for (int i = 0; i < 5; i++)
        {
            Console.WriteLine($"Working... {i}");
            await Task.Delay(200);
        }
        
        Console.WriteLine("DoWorkAsync complete");
    }
    
    static async Task<string> FetchDataAsync(string url)
    {
        using (HttpClient client = new HttpClient())
        {
            Console.WriteLine($"Fetching data from {url}");
            // This is non-blocking - the thread is freed up while waiting
            string data = await client.GetStringAsync(url);
            return data;
        }
    }
    
    static async Task ThrowExceptionAsync()
    {
        await Task.Delay(500);
        throw new InvalidOperationException("This is an async exception");
    }
}`,
              explanation: "This example demonstrates asynchronous programming in C# using async and await keywords, including running asynchronous tasks, combining tasks, and handling exceptions in asynchronous methods."
            }
          ],
          quiz: [
            {
              question: "What does the 'await' keyword do in C#?",
              options: ["Blocks the thread until the operation completes", "Creates a new thread for the operation", "Pauses the method execution until the awaited task completes, without blocking the thread", "Makes the operation run faster"],
              correctAnswer: 2,
              explanation: "The 'await' keyword pauses the execution of the method until the awaited task completes, but importantly, it does this without blocking the thread. This allows the thread to be used for other work while waiting, improving application responsiveness and resource usage."
            }
          ],
          flashcards: [
            {
              front: "What is the difference between asynchronous and parallel processing in C#?",
              back: "Asynchronous programming is about non-blocking operations that free up the current thread while waiting for I/O or other operations to complete. Parallel processing is about utilizing multiple processor cores to execute code simultaneously. Async is primarily for I/O-bound operations, while parallelism is for CPU-bound operations."
            }
          ]
        },
        {
          id: "cs-delegates",
          title: "Delegates and Events",
          description: "Working with delegates, events, and lambda expressions in C#",
          content: `
# Delegates and Events in C#

Delegates provide a way to pass methods as arguments to other methods, and events provide a way for a class to notify other classes when something of interest happens.
          `,
          codeExamples: [
            {
              title: "Delegates and Lambda Expressions",
              code: `using System;
using System.Collections.Generic;

class Program
{
    // Define delegate types
    delegate void SimpleDelegate();
    delegate int MathOperation(int a, int b);
    
    static void Main()
    {
        // Create delegate instance with named method
        SimpleDelegate greet = SayHello;
        greet(); // Calls SayHello
        
        // Add more methods to the delegate (multicast delegate)
        greet += SayGoodbye;
        greet(); // Calls SayHello then SayGoodbye
        
        // Remove a method
        greet -= SayHello;
        greet(); // Calls only SayGoodbye
        
        // Create delegate instance with anonymous method
        MathOperation add = delegate(int a, int b) {
            return a + b;
        };
        
        Console.WriteLine($"5 + 3 = {add(5, 3)}"); // 8
        
        // Create delegate instance with lambda expression
        MathOperation multiply = (a, b) => a * b;
        
        Console.WriteLine($"5 * 3 = {multiply(5, 3)}"); // 15
        
        // Using built-in delegate types (Func, Action, Predicate)
        Func<int, int, int> subtract = (a, b) => a - b;
        Console.WriteLine($"5 - 3 = {subtract(5, 3)}"); // 2
        
        Action<string> display = message => Console.WriteLine($"Message: {message}");
        display("Hello, delegates!"); // Message: Hello, delegates!
        
        Predicate<int> isEven = num => num % 2 == 0;
        Console.WriteLine($"Is 4 even? {isEven(4)}"); // true
        
        // Using delegates with LINQ
        List<int> numbers = new List<int> { 1, 2, 3, 4, 5, 6 };
        
        List<int> evenNumbers = numbers.FindAll(isEven);
        Console.WriteLine("Even numbers:");
        foreach (int num in evenNumbers)
        {
            Console.Write(num + " "); // 2 4 6
        }
        Console.WriteLine();
    }
    
    static void SayHello()
    {
        Console.WriteLine("Hello!");
    }
    
    static void SayGoodbye()
    {
        Console.WriteLine("Goodbye!");
    }
}`,
              explanation: "This example demonstrates delegates in C#, including defining delegate types, creating delegate instances with named methods, anonymous methods, and lambda expressions, and using built-in delegate types like Func, Action, and Predicate."
            },
            {
              title: "Events",
              code: `using System;

// Publisher class
class Publisher
{
    // Define delegate for the event
    public delegate void MessageHandler(string message);
    
    // Define event based on the delegate
    public event MessageHandler MessageReceived;
    
    // Method to raise the event
    public void PublishMessage(string message)
    {
        Console.WriteLine($"Publishing message: {message}");
        
        // Check if there are any subscribers before raising the event
        MessageReceived?.Invoke(message);
    }
}

// Subscriber class
class Subscriber
{
    private string name;
    
    public Subscriber(string name)
    {
        this.name = name;
    }
    
    // Event handler method
    public void OnMessageReceived(string message)
    {
        Console.WriteLine($"{name} received: {message}");
    }
}

class Program
{
    static void Main()
    {
        // Create publisher and subscribers
        Publisher publisher = new Publisher();
        Subscriber subscriber1 = new Subscriber("Subscriber 1");
        Subscriber subscriber2 = new Subscriber("Subscriber 2");
        
        // Subscribe to the event
        publisher.MessageReceived += subscriber1.OnMessageReceived;
        publisher.MessageReceived += subscriber2.OnMessageReceived;
        
        // Publish a message (both subscribers will receive it)
        publisher.PublishMessage("Hello, subscribers!");
        
        // Unsubscribe one subscriber
        publisher.MessageReceived -= subscriber1.OnMessageReceived;
        
        // Publish another message (only subscriber2 will receive it)
        publisher.PublishMessage("Another message");
        
        // Using EventHandler (standard event pattern)
        Button button = new Button("OK");
        button.Click += OnButtonClicked;
        button.SimulateClick(); // Simulates a button click
        
        // Using EventHandler with anonymous method
        button.Click += (sender, e) => {
            Console.WriteLine($"Button {((Button)sender).Text} clicked anonymously");
        };
        button.SimulateClick();
    }
    
    static void OnButtonClicked(object sender, EventArgs e)
    {
        Button button = (Button)sender;
        Console.WriteLine($"Button {button.Text} was clicked");
    }
}

// Example class using standard event pattern
class Button
{
    public string Text { get; set; }
    
    public event EventHandler Click;
    
    public Button(string text)
    {
        Text = text;
    }
    
    public void SimulateClick()
    {
        Console.WriteLine($"Button {Text} is being clicked");
        
        // Raise the event
        OnClick(EventArgs.Empty);
    }
    
    protected virtual void OnClick(EventArgs e)
    {
        Click?.Invoke(this, e);
    }
}`,
              explanation: "This example demonstrates events in C#, including defining and raising events, subscribing and unsubscribing to events, and using the standard event pattern with EventHandler."
            }
          ],
          quiz: [
            {
              question: "What is the purpose of the '?' operator in 'event?.Invoke()'?",
              options: ["It checks if event is null before invoking it", "It converts the event to a nullable type", "It makes the event asynchronous", "It checks if the event has any subscribers"],
              correctAnswer: 0,
              explanation: "The '?' operator (null-conditional operator) checks if the event is null before invoking it. If the event is null (meaning there are no subscribers), the invoke call is skipped. This prevents a NullReferenceException when raising an event with no subscribers."
            }
          ],
          flashcards: [
            {
              front: "What is a delegate in C#?",
              back: "A delegate in C# is a type that represents references to methods with a particular parameter list and return type. Delegates allow methods to be passed as parameters, stored in variables, and invoked dynamically. They are the foundation for events, callbacks, and lambda expressions."
            }
          ]
        },
        {
          id: "cs-files",
          title: "File I/O",
          description: "Working with files and directories in C#",
          content: `
# File I/O in C#

C# provides robust classes for working with files and directories through the System.IO namespace.
          `,
          codeExamples: [
            {
              title: "File Operations",
              code: `using System;
using System.IO;
using System.Text;

class Program
{
    static void Main()
    {
        // File paths
        string filePath = "example.txt";
        string newFilePath = "new_example.txt";
        
        // Write text to a file (creates the file if it doesn't exist)
        using (StreamWriter writer = new StreamWriter(filePath))
        {
            writer.WriteLine("Hello, C# File I/O!");
            writer.WriteLine("This is line 2.");
            writer.WriteLine("This is line 3.");
        }
        
        Console.WriteLine($"File created: {filePath}");
        
        // Read the entire file as text
        string content = File.ReadAllText(filePath);
        Console.WriteLine("\nFile content (ReadAllText):");
        Console.WriteLine(content);
        
        // Read the file line by line
        Console.WriteLine("\nFile content (ReadAllLines):");
        string[] lines = File.ReadAllLines(filePath);
        foreach (string line in lines)
        {
            Console.WriteLine(line);
        }
        
        // Read file using StreamReader
        Console.WriteLine("\nFile content (StreamReader):");
        using (StreamReader reader = new StreamReader(filePath))
        {
            string line;
            while ((line = reader.ReadLine()) != null)
            {
                Console.WriteLine(line);
            }
        }
        
        // Append text to a file
        using (StreamWriter writer = new StreamWriter(filePath, append: true))
        {
            writer.WriteLine("This line is appended.");
        }
        
        // Check if file exists
        if (File.Exists(filePath))
        {
            Console.WriteLine($"\nThe file {filePath} exists.");
            
            // Get file information
            FileInfo fileInfo = new FileInfo(filePath);
            Console.WriteLine($"File size: {fileInfo.Length} bytes");
            Console.WriteLine($"Creation time: {fileInfo.CreationTime}");
            Console.WriteLine($"Last access time: {fileInfo.LastAccessTime}");
            
            // Copy file
            File.Copy(filePath, newFilePath, overwrite: true);
            Console.WriteLine($"File copied to {newFilePath}");
            
            // Delete file (comment out if you want to keep the file)
            // File.Delete(filePath);
            // Console.WriteLine($"File {filePath} deleted");
        }
    }
}`,
              explanation: "This example demonstrates common file operations in C#, including writing to a file, reading from a file using different methods, appending to a file, checking if a file exists, getting file information, and copying a file."
            }
          ],
          quiz: [
            {
              question: "What is the purpose of the 'using' statement when working with files in C#?",
              options: ["It imports the System.IO namespace", "It ensures that resources are properly disposed of even if an exception occurs", "It makes the code run faster", "It restricts file access to the current application"],
              correctAnswer: 1,
              explanation: "The 'using' statement in C# ensures that resources like file handles are properly disposed of when they are no longer needed, even if an exception occurs. This is important for files because they are limited system resources that should be released as soon as possible."
            }
          ],
          flashcards: [
            {
              front: "What is the difference between File.ReadAllText() and File.ReadAllLines() in C#?",
              back: "File.ReadAllText() reads the entire file and returns its contents as a single string, while File.ReadAllLines() reads the file and returns an array of strings, where each element is a separate line from the file."
            }
          ]
        }
      ]
    }
  ]
};
