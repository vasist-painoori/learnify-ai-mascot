
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
        }
      ]
    }
  ]
};
