import { Topic } from '../../types';

export const inheritanceTopic: Topic = {
  id: "csharp-inheritance",
  title: "Inheritance in C#",
  description: "Understand inheritance and polymorphism in C#",
  content: `
# Inheritance in C#

Inheritance is one of the fundamental concepts in object-oriented programming that allows a class to inherit properties and behaviors from another class.
  `,
  codeExamples: [
    {
      title: "Class Inheritance",
      code: `using System;

namespace InheritanceExample
{
    // Base class
    class Animal
    {
        // Protected field
        protected string name;
        
        // Public property
        public string Species { get; set; }
        
        // Constructor
        public Animal(string name, string species)
        {
            this.name = name;
            this.Species = species;
            Console.WriteLine("Animal constructor called");
        }
        
        // Virtual method (can be overridden)
        public virtual void MakeSound()
        {
            Console.WriteLine("Animal makes a sound");
        }
        
        // Non-virtual method
        public void Sleep()
        {
            Console.WriteLine($"{name} is sleeping");
        }
        
        // Virtual property
        public virtual string Info
        {
            get { return $"{name} is a {Species}"; }
        }
    }
    
    // Derived class
    class Dog : Animal
    {
        // Additional field
        private string breed;
        
        // Constructor that calls base constructor
        public Dog(string name, string breed)
            : base(name, "Dog")  // Call base constructor
        {
            this.breed = breed;
            Console.WriteLine("Dog constructor called");
        }
        
        // Property specific to Dog
        public string Breed
        {
            get { return breed; }
            set { breed = value; }
        }
        
        // Override virtual method
        public override void MakeSound()
        {
            Console.WriteLine($"{name} barks: Woof woof!");
        }
        
        // Additional method
        public void Fetch()
        {
            Console.WriteLine($"{name} is fetching");
        }
        
        // Override virtual property
        public override string Info
        {
            get { return $"{base.Info} of breed {breed}"; }
        }
    }
    
    // Another derived class
    class Cat : Animal
    {
        public bool IsIndoor { get; set; }
        
        // Constructor
        public Cat(string name, bool isIndoor)
            : base(name, "Cat")
        {
            IsIndoor = isIndoor;
            Console.WriteLine("Cat constructor called");
        }
        
        // Override virtual method
        public override void MakeSound()
        {
            Console.WriteLine($"{name} meows: Meow meow!");
        }
        
        // Additional method
        public void Purr()
        {
            Console.WriteLine($"{name} is purring");
        }
    }
    
    // Abstract class
    abstract class Shape
    {
        // Abstract property (must be implemented by derived classes)
        public abstract double Area { get; }
        
        // Abstract method (must be implemented by derived classes)
        public abstract double Perimeter();
        
        // Non-abstract method
        public void DisplayInfo()
        {
            Console.WriteLine($"Area: {Area}, Perimeter: {Perimeter()}");
        }
    }
    
    // Concrete derived class
    class Circle : Shape
    {
        private double radius;
        
        public Circle(double radius)
        {
            this.radius = radius;
        }
        
        // Implement abstract property
        public override double Area
        {
            get { return Math.PI * radius * radius; }
        }
        
        // Implement abstract method
        public override double Perimeter()
        {
            return 2 * Math.PI * radius;
        }
    }
    
    // Another concrete derived class
    class Rectangle : Shape
    {
        private double length;
        private double width;
        
        public Rectangle(double length, double width)
        {
            this.length = length;
            this.width = width;
        }
        
        // Implement abstract property
        public override double Area
        {
            get { return length * width; }
        }
        
        // Implement abstract method
        public override double Perimeter()
        {
            return 2 * (length + width);
        }
    }
    
    // Sealed class (cannot be inherited from)
    sealed class FinalClass
    {
        public void Display()
        {
            Console.WriteLine("This is a sealed class");
        }
    }
    
    class Program
    {
        static void Main(string[] args)
        {
            // Creating objects
            Dog dog = new Dog("Max", "Golden Retriever");
            Cat cat = new Cat("Whiskers", true);
            
            // Using methods from base class
            dog.Sleep();
            cat.Sleep();
            
            // Using overridden methods
            dog.MakeSound();
            cat.MakeSound();
            
            // Using specific methods
            dog.Fetch();
            cat.Purr();
            
            // Using properties
            Console.WriteLine($"Dog breed: {dog.Breed}");
            Console.WriteLine($"Is the cat indoor? {cat.IsIndoor}");
            
            // Using overridden properties
            Console.WriteLine(dog.Info);
            
            // Polymorphism with base class reference
            Animal animal1 = new Dog("Buddy", "Labrador");
            Animal animal2 = new Cat("Felix", false);
            
            // The overridden method is called based on the actual object type
            animal1.MakeSound();  // Calls Dog's MakeSound()
            animal2.MakeSound();  // Calls Cat's MakeSound()
            
            // Type checking and casting
            if (animal1 is Dog)
            {
                Dog dogReference = (Dog)animal1;  // Explicit casting
                dogReference.Fetch();
            }
            
            // Using 'as' operator for safe casting
            Dog anotherDog = animal1 as Dog;
            if (anotherDog != null)
            {
                anotherDog.Fetch();
            }
            
            // Using pattern matching (C# 7.0+)
            if (animal2 is Cat catReference)
            {
                catReference.Purr();
            }
            
            // Working with abstract classes
            Circle circle = new Circle(5);
            Rectangle rectangle = new Rectangle(4, 6);
            
            circle.DisplayInfo();
            rectangle.DisplayInfo();
            
            // Using sealed class
            FinalClass finalObj = new FinalClass();
            finalObj.Display();
            
            // Keep console window open
            Console.ReadLine();
        }
    }
}`,
      explanation: "This example demonstrates inheritance in C#, including creating base and derived classes, calling base class constructors, method overriding, polymorphism, abstract classes and methods, and sealed classes. It also shows type checking, casting, and pattern matching when working with inherited types."
    }
  ],
  quiz: [
    {
      question: "What does the 'virtual' keyword do in C#?",
      options: [
        "It prevents a class from being inherited",
        "It creates a method that doesn't exist yet",
        "It allows a method to be overridden in a derived class",
        "It creates a method that runs asynchronously"
      ],
      correctAnswer: 2,
      explanation: "The 'virtual' keyword in C# is used to modify a method, property, indexer, or event declaration and allow it to be overridden in derived classes. Without the 'virtual' keyword, methods cannot be overridden in derived classes (they can only be hidden with the 'new' keyword)."
    }
  ],
  flashcards: [
    {
      front: "What is the difference between an abstract class and an interface in C#?",
      back: "An abstract class can contain implementation details and can have fields, while an interface can only contain method, property, event, and indexer declarations without implementations. A class can inherit from only one abstract class but can implement multiple interfaces. Abstract classes are used to share code among related classes, while interfaces define capabilities that can be implemented by unrelated classes."
    }
  ]
};
