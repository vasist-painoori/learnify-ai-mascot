import { Topic } from '../../types';

export const classesTopic: Topic = {
  id: "csharp-classes",
  title: "Classes and Objects in C#",
  description: "Learn about object-oriented programming with classes in C#",
  content: `
# Classes and Objects in C#

Classes are the foundation of object-oriented programming in C#. They serve as blueprints for creating objects.
  `,
  codeExamples: [
    {
      title: "Class Definition and Object Creation",
      code: `using System;

namespace ClassesExample
{
    // Class definition
    class Person
    {
        // Fields
        private string name;
        private int age;
        private string email;
        
        // Properties
        public string Name
        {
            get { return name; }
            set { name = value; }
        }
        
        // Auto-implemented property
        public string Email { get; set; }
        
        // Property with validation
        public int Age
        {
            get { return age; }
            set 
            { 
                if (value >= 0)
                    age = value;
                else
                    throw new ArgumentException("Age cannot be negative");
            }
        }
        
        // Read-only property
        public bool IsAdult
        {
            get { return age >= 18; }
        }
        
        // Constructor
        public Person(string name, int age)
        {
            this.name = name;
            this.age = age;
        }
        
        // Default constructor
        public Person()
        {
            name = "Unknown";
            age = 0;
            email = "unknown@example.com";
        }
        
        // Method
        public void Introduce()
        {
            Console.WriteLine($"Hello, my name is {name} and I am {age} years old.");
        }
        
        // Static field
        public static int Count = 0;
        
        // Static constructor
        static Person()
        {
            Console.WriteLine("Person class is initialized");
        }
        
        // Static method
        public static void DisplayCount()
        {
            Console.WriteLine($"Number of Person instances: {Count}");
        }
        
        // Method with parameters
        public void CelebrateBirthday()
        {
            age++;
            Console.WriteLine($"{name} is now {age} years old");
        }
        
        // Overriding ToString method from Object class
        public override string ToString()
        {
            return $"Person: {name}, {age} years old, email: {email}";
        }
    }
    
    // Another class example with composition
    class Address
    {
        public string Street { get; set; }
        public string City { get; set; }
        public string ZipCode { get; set; }
        
        public Address(string street, string city, string zipCode)
        {
            Street = street;
            City = city;
            ZipCode = zipCode;
        }
        
        public override string ToString()
        {
            return $"{Street}, {City} {ZipCode}";
        }
    }
    
    // Employee class with inheritance
    class Employee : Person
    {
        public string Company { get; set; }
        public double Salary { get; set; }
        public Address WorkAddress { get; set; }
        
        public Employee(string name, int age, string company, double salary)
            : base(name, age)  // Call base class constructor
        {
            Company = company;
            Salary = salary;
        }
        
        // Method overriding
        public new void Introduce()
        {
            Console.WriteLine($"Hello, my name is {Name} and I work at {Company}.");
        }
        
        // Method with base call
        public void DisplayInfo()
        {
            base.Introduce();  // Call base class method
            Console.WriteLine($"I work at {Company} with a salary of ${Salary}");
        }
    }
    
    class Program
    {
        static void Main(string[] args)
        {
            // Creating objects
            Person person1 = new Person("Alice", 25);
            Person person2 = new Person("Bob", 30, "bob@example.com");
            Person person3 = new Person();  // Default constructor
            
            // Incrementing static counter
            Person.Count += 3;
            
            // Using object methods
            person1.Introduce();
            person2.Introduce();
            
            // Using properties
            Console.WriteLine($"{person1.Name} is {person1.Age} years old");
            Console.WriteLine($"Is {person2.Name} an adult? {person2.IsAdult}");
            
            // Setting properties
            person3.Name = "Charlie";
            person3.Age = 22;
            person3.Email = "charlie@example.com";
            
            // Using methods
            person3.CelebrateBirthday();
            
            // Using static method
            Person.DisplayCount();
            
            // Using ToString
            Console.WriteLine(person2.ToString());
            
            // Creating Employee object
            Employee employee = new Employee("David", 35, "ABC Corp", 75000);
            employee.Email = "david@abccorp.com";
            
            // Creating Address object
            Address address = new Address("123 Main St", "Anytown", "12345");
            employee.WorkAddress = address;
            
            // Using methods
            employee.Introduce();  // Calls Employee's Introduce method
            employee.DisplayInfo();  // Calls base method and adds more info
            
            // Accessing properties
            Console.WriteLine($"{employee.Name} works at {employee.Company}");
            Console.WriteLine($"Work address: {employee.WorkAddress}");
            
            // Keep console window open
            Console.ReadLine();
        }
    }
}`,
      explanation: "This example demonstrates various aspects of classes and objects in C#, including class definition, fields, constructors, methods, and access modifiers, and how to create and use objects of that class."
    }
  ],
  quiz: [
    {
      question: "What is encapsulation in Java?",
      options: [
        "The ability of a class to inherit from multiple classes",
        "The process of wrapping code and data together into a single unit",
        "The ability to override methods in child classes",
        "The process of converting an object to a string"
      ],
      correctAnswer: 1,
      explanation: "Encapsulation in Java is the mechanism of wrapping the data (variables) and code acting on the data (methods) together as a single unit. It is implemented by declaring the variables as private and providing public getter and setter methods."
    }
  ],
  flashcards: [
    {
      front: "What is the difference between a class and an object in Java?",
      back: "A class is a blueprint or template for creating objects, defining object properties and behaviors. An object is an instance of a class, representing a specific entity with actual values for its properties."
    }
  ]
};
