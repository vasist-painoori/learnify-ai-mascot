
import { Topic } from '../../types';

export const classesTopic: Topic = {
  id: "csharp-classes",
  title: "C# Classes",
  description: "Learn about classes and object-oriented programming in C#",
  content: `
# C# Classes

Classes are the fundamental building blocks of C# object-oriented programming. They represent real-world entities and their behaviors.

## Class Definition
\`\`\`csharp
class Person
{
    // Fields
    private string name;
    private int age;
    
    // Properties
    public string Name
    {
        get { return name; }
        set { name = value; }
    }
    
    public int Age
    {
        get { return age; }
        set { age = value; }
    }
    
    // Constructor
    public Person(string name, int age)
    {
        this.name = name;
        this.age = age;
    }
    
    // Methods
    public void Introduce()
    {
        Console.WriteLine($"Hello, my name is {name} and I am {age} years old.");
    }
}
\`\`\`

## Auto-Implemented Properties
\`\`\`csharp
class Student
{
    // Auto-implemented properties
    public string Name { get; set; }
    public int ID { get; set; }
    
    // Read-only property (can only be set in constructor)
    public DateTime EnrollmentDate { get; }
    
    public Student(string name, int id)
    {
        Name = name;
        ID = id;
        EnrollmentDate = DateTime.Now;
    }
}
\`\`\`

## Static Members
\`\`\`csharp
class MathHelper
{
    // Static field
    public static double PI = 3.14159;
    
    // Static method
    public static double CalculateCircleArea(double radius)
    {
        return PI * radius * radius;
    }
}
\`\`\`

## Constructors and Destructors
\`\`\`csharp
class Database
{
    private string connectionString;
    
    // Default constructor
    public Database()
    {
        connectionString = "default_connection";
        Console.WriteLine("Database initialized with default connection");
    }
    
    // Parameterized constructor
    public Database(string connection)
    {
        connectionString = connection;
        Console.WriteLine($"Database initialized with {connection}");
    }
    
    // Destructor/Finalizer
    ~Database()
    {
        Console.WriteLine("Database object is being destroyed");
        // Clean up resources
    }
}
\`\`\`
  `,
  codeExamples: [
    {
      title: "Creating and Using Classes",
      code: `// Class definition
public class Employee
{
    // Fields
    private string name;
    private int id;
    private double salary;
    
    // Properties
    public string Name 
    { 
        get { return name; } 
        set { name = value; } 
    }
    
    public int ID 
    { 
        get { return id; } 
        private set { id = value; } // Can only be set within the class
    }
    
    public double Salary
    {
        get { return salary; }
        set 
        { 
            if (value >= 0) // Validation
                salary = value;
        }
    }
    
    // Constructor
    public Employee(string name, int id)
    {
        this.name = name;
        this.id = id;
        this.salary = 0;
    }
    
    // Method
    public void GiveRaise(double amount)
    {
        salary += amount;
        Console.WriteLine($"{name} received a raise of ${amount}. New salary: ${salary}");
    }
    
    // Override ToString method
    public override string ToString()
    {
        return $"Employee(ID: {id}, Name: {name}, Salary: ${salary})";
    }
}

// Using the class
class Program
{
    static void Main()
    {
        // Create an instance
        Employee employee1 = new Employee("John Doe", 101);
        
        // Set property
        employee1.Salary = 50000;
        
        // Call method
        employee1.GiveRaise(5000);
        
        // Use property
        Console.WriteLine($"Employee name: {employee1.Name}");
        
        // Use overridden ToString
        Console.WriteLine(employee1);
    }
}`,
      explanation: "This example demonstrates creating a C# class with fields, properties, constructors, and methods. It shows how to instantiate the class and work with its members."
    },
    {
      title: "Advanced Class Features",
      code: `// Static class
public static class Calculator
{
    // Static property
    public static double Pi { get; } = 3.14159;
    
    // Static methods
    public static double Add(double a, double b) => a + b;
    public static double Subtract(double a, double b) => a - b;
    public static double Multiply(double a, double b) => a * b;
    public static double Divide(double a, double b)
    {
        if (b == 0)
            throw new DivideByZeroException();
        return a / b;
    }
    
    public static double CircleArea(double radius) => Pi * radius * radius;
}

// Class with constructor overloading
public class Product
{
    public string Name { get; set; }
    public decimal Price { get; set; }
    public string Category { get; set; }
    
    // Constructor with all parameters
    public Product(string name, decimal price, string category)
    {
        Name = name;
        Price = price;
        Category = category;
    }
    
    // Constructor with fewer parameters (calls the main constructor)
    public Product(string name, decimal price) 
        : this(name, price, "Uncategorized")
    {
    }
    
    // Default constructor (calls the main constructor)
    public Product() 
        : this("New Product", 0, "Uncategorized")
    {
    }
}

// Main program
class Program
{
    static void Main()
    {
        // Using static class
        double result = Calculator.Add(5, 3);
        Console.WriteLine($"5 + 3 = {result}");
        
        double area = Calculator.CircleArea(2);
        Console.WriteLine($"Circle area with radius 2: {area}");
        
        // Using constructor overloading
        Product p1 = new Product("Laptop", 999.99m, "Electronics");
        Product p2 = new Product("Book", 19.99m); // Uses second constructor
        Product p3 = new Product(); // Uses default constructor
        
        Console.WriteLine($"{p1.Name}: ${p1.Price} ({p1.Category})");
        Console.WriteLine($"{p2.Name}: ${p2.Price} ({p2.Category})"); // Category will be "Uncategorized"
        Console.WriteLine($"{p3.Name}: ${p3.Price} ({p3.Category})"); // Will use all default values
    }
}`
      ,
      explanation: "This example shows advanced class features in C# including static classes, constructor overloading, and method expressions."
    }
  ],
  quiz: [
    {
      question: "What is the purpose of a constructor in a C# class?",
      options: [
        "To destroy an object when it's no longer needed",
        "To initialize an object when it's created",
        "To define properties of a class",
        "To override methods from the base class"
      ],
      correctAnswer: 1,
      explanation: "Constructors are special methods that execute when an object of a class is created. They're primarily used to initialize the state of an object by setting initial values for fields and properties."
    },
    {
      question: "Which of the following is true about static members in C# classes?",
      options: [
        "They can access instance members without creating an object",
        "They belong to the class rather than any specific instance",
        "They can only be private or protected",
        "They are automatically serialized when the class is serialized"
      ],
      correctAnswer: 1,
      explanation: "Static members (fields, properties, methods) belong to the class itself rather than to any specific instance of the class. They are shared across all instances of the class."
    }
  ],
  flashcards: [
    {
      front: "What is the difference between a field and a property in C#?",
      back: "A field is a variable that is declared directly in a class, while a property is a member that provides a flexible mechanism to read, write, or compute the value of a private field. Properties can have get and set accessors, allowing control over accessing and modifying values."
    },
    {
      front: "What is method overloading in C#?",
      back: "Method overloading allows multiple methods to have the same name but different parameters (different number or type of parameters). It enables multiple ways to call methods based on different input types or amounts."
    }
  ]
};
