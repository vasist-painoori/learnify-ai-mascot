
import { Topic } from '../../types';

export const classesTopic: Topic = {
  id: "java-classes",
  title: "Classes and Objects in Java",
  description: "Learn about object-oriented programming with classes in Java",
  content: `
# Classes and Objects in Java

Classes are blueprints for objects, which are instances of classes. Object-oriented programming is a core concept in Java.
  `,
  codeExamples: [
    {
      title: "Defining and Using Classes",
      code: `// Class definition
class Person {
    // Fields (attributes)
    private String name;
    private int age;
    
    // Constructor
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    // Default constructor
    public Person() {
        this.name = "Unknown";
        this.age = 0;
    }
    
    // Getters and setters
    public String getName() {
        return name;
    }
    
    public void setName(String name) {
        this.name = name;
    }
    
    public int getAge() {
        return age;
    }
    
    public void setAge(int age) {
        if (age >= 0) {
            this.age = age;
        }
    }
    
    // Method
    public void introduce() {
        System.out.println("Hello, my name is " + name + " and I am " + age + " years old.");
    }
}

public class ClassesExample {
    public static void main(String[] args) {
        // Creating objects
        Person person1 = new Person("Alice", 25);
        Person person2 = new Person("Bob", 30);
        Person person3 = new Person(); // Using default constructor
        
        // Using object methods
        person1.introduce();
        person2.introduce();
        
        // Using getters and setters
        person3.setName("Charlie");
        person3.setAge(22);
        System.out.println(person3.getName() + " is " + person3.getAge() + " years old.");
        
        // Changing object state
        person1.setAge(26);
        person1.introduce();
    }
}`,
      explanation: "This example demonstrates how to define a class with fields, constructors, methods, and access modifiers, and how to create and use objects of that class."
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
