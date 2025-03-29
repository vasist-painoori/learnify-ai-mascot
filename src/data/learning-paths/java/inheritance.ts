
import { Topic } from '../../types';

export const inheritanceTopic: Topic = {
  id: "java-inheritance",
  title: "Inheritance in Java",
  description: "Understand inheritance and polymorphism in Java",
  content: `
# Inheritance in Java

Inheritance is a mechanism where a new class can derive properties and behaviors from an existing class.
  `,
  codeExamples: [
    {
      title: "Class Inheritance",
      code: `// Parent class
class Animal {
    protected String name;
    
    public Animal(String name) {
        this.name = name;
    }
    
    public void eat() {
        System.out.println(name + " is eating.");
    }
    
    public void sleep() {
        System.out.println(name + " is sleeping.");
    }
    
    // Method to be overridden
    public void makeSound() {
        System.out.println(name + " makes a sound.");
    }
}

// Child class
class Dog extends Animal {
    private String breed;
    
    public Dog(String name, String breed) {
        super(name); // Call parent constructor
        this.breed = breed;
    }
    
    // Additional method
    public void fetch() {
        System.out.println(name + " is fetching.");
    }
    
    // Method overriding
    @Override
    public void makeSound() {
        System.out.println(name + " barks: Woof woof!");
    }
    
    public String getBreed() {
        return breed;
    }
}

// Another child class
class Cat extends Animal {
    public Cat(String name) {
        super(name);
    }
    
    // Method overriding
    @Override
    public void makeSound() {
        System.out.println(name + " meows: Meow meow!");
    }
    
    // Additional method
    public void scratch() {
        System.out.println(name + " is scratching.");
    }
}

public class InheritanceExample {
    public static void main(String[] args) {
        // Create objects
        Dog dog = new Dog("Max", "Golden Retriever");
        Cat cat = new Cat("Whiskers");
        
        // Using parent class methods
        dog.eat();
        cat.sleep();
        
        // Using overridden methods
        dog.makeSound();
        cat.makeSound();
        
        // Using child-specific methods
        dog.fetch();
        cat.scratch();
        
        // Accessing child-specific properties
        System.out.println(dog.getName() + " is a " + dog.getBreed());
        
        // Polymorphism
        Animal animal1 = new Dog("Buddy", "Labrador");
        Animal animal2 = new Cat("Felix");
        
        animal1.makeSound(); // Calls Dog's makeSound()
        animal2.makeSound(); // Calls Cat's makeSound()
    }
}`,
      explanation: "This example demonstrates inheritance in Java, including how to create parent and child classes, override methods, call parent constructors using super(), and use polymorphism."
    }
  ],
  quiz: [
    {
      question: "What does the 'super' keyword do in Java?",
      options: [
        "It refers to the current object",
        "It refers to the parent class object",
        "It creates a new instance of the class",
        "It terminates the program"
      ],
      correctAnswer: 1,
      explanation: "The 'super' keyword in Java refers to the parent class object. It is used to call the parent class constructor and to access the parent class methods and variables."
    }
  ],
  flashcards: [
    {
      front: "What is polymorphism in Java?",
      back: "Polymorphism in Java is the ability of an object to take on many forms. Specifically, it allows a reference variable of a parent class to refer to objects of its child classes, and method calls through that reference variable will be resolved at runtime based on the actual object type."
    }
  ]
};
