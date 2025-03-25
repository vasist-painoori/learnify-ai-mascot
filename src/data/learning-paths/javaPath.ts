
import { LearningPath } from '../types';

export const javaPath: LearningPath = {
  languageId: "java",
  modules: [
    {
      id: "java-basics",
      title: "Java Fundamentals",
      description: "Learn the core concepts of Java programming",
      topics: [
        {
          id: "java-intro",
          title: "Introduction to Java",
          description: "Understanding the basics of Java programming",
          content: `
# Introduction to Java

Java is a class-based, object-oriented programming language designed to have as few implementation dependencies as possible.
          `,
          codeExamples: [
            {
              title: "Hello World in Java",
              code: `public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`,
              explanation: "This is the traditional first program in Java. The public class HelloWorld contains the main method, which is the entry point of any Java application."
            }
          ],
          quiz: [
            {
              question: "Which of the following is NOT a feature of Java?",
              options: ["Platform Independence", "Automatic Memory Management", "Multiple Inheritance of Classes", "Object-Oriented"],
              correctAnswer: 2,
              explanation: "Java does not support multiple inheritance of classes to avoid the 'diamond problem'. However, it does support multiple inheritance of interfaces."
            }
          ],
          flashcards: [
            {
              front: "What is Java?",
              back: "Java is a high-level, class-based, object-oriented programming language designed to have as few implementation dependencies as possible. It follows the 'write once, run anywhere' principle."
            },
            {
              front: "What is the JVM?",
              back: "JVM (Java Virtual Machine) is an abstract machine that provides a runtime environment in which Java bytecode can be executed. It enables Java's platform independence."
            }
          ]
        },
        {
          id: "java-variables",
          title: "Variables and Data Types",
          description: "Understanding variables and data types in Java",
          content: `
# Variables and Data Types in Java

Java is a strongly-typed language with various primitive data types and object types.
          `,
          codeExamples: [
            {
              title: "Working with Variables",
              code: `public class Variables {
    public static void main(String[] args) {
        // Primitive data types
        int age = 25;
        double salary = 50000.50;
        boolean isEmployed = true;
        char grade = 'A';
        
        // Reference type
        String name = "John Doe";
        
        // Print variables
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("Salary: " + salary);
        System.out.println("Employed: " + isEmployed);
        System.out.println("Grade: " + grade);
    }
}`,
              explanation: "This example demonstrates various data types in Java, including primitive types (int, double, boolean, char) and reference types (String)."
            }
          ],
          quiz: [
            {
              question: "Which of the following is not a primitive data type in Java?",
              options: ["int", "float", "String", "boolean"],
              correctAnswer: 2,
              explanation: "String is not a primitive data type in Java. It is a class (reference type). Primitive types in Java include int, byte, short, long, float, double, boolean, and char."
            }
          ],
          flashcards: [
            {
              front: "What are the primitive data types in Java?",
              back: "Java has 8 primitive data types: byte, short, int, long, float, double, boolean, and char."
            },
            {
              front: "What is the difference between primitive types and reference types in Java?",
              back: "Primitive types store actual values in memory allocated on the stack, while reference types store addresses pointing to objects allocated on the heap."
            }
          ]
        },
        {
          id: "java-operators",
          title: "Operators",
          description: "Understanding operators in Java",
          content: `
# Operators in Java

Java provides a rich set of operators for performing operations on variables and values.
          `,
          codeExamples: [
            {
              title: "Arithmetic Operators",
              code: `public class ArithmeticOperators {
    public static void main(String[] args) {
        int a = 10;
        int b = 3;
        
        System.out.println("a + b = " + (a + b));  // Addition
        System.out.println("a - b = " + (a - b));  // Subtraction
        System.out.println("a * b = " + (a * b));  // Multiplication
        System.out.println("a / b = " + (a / b));  // Division
        System.out.println("a % b = " + (a % b));  // Modulus (remainder)
        System.out.println("a++ = " + (a++));      // Post-increment
        System.out.println("++b = " + (++b));      // Pre-increment
    }
}`,
              explanation: "This example demonstrates arithmetic operators in Java, including addition, subtraction, multiplication, division, modulus, and increment operators."
            }
          ],
          quiz: [
            {
              question: "What is the output of the following code?\nint x = 5;\nSystem.out.println(x++ + ++x);",
              options: ["10", "11", "12", "13"],
              correctAnswer: 2,
              explanation: "The expression x++ + ++x evaluates to 5 + 7 = 12. First, x++ is evaluated to 5 (and then x becomes 6), then ++x increments x to 7 and evaluates to 7."
            }
          ],
          flashcards: [
            {
              front: "What are relational operators in Java?",
              back: "Relational operators compare two values: == (equals), != (not equals), > (greater than), < (less than), >= (greater than or equal to), <= (less than or equal to)"
            },
            {
              front: "What is operator precedence in Java?",
              back: "Operator precedence determines the order in which operators are evaluated in an expression. For example, multiplication and division have higher precedence than addition and subtraction."
            }
          ]
        },
        {
          id: "java-control-flow",
          title: "Control Flow Statements",
          description: "Learn about decision making and loops in Java",
          content: `
# Control Flow Statements in Java

Control flow statements allow you to control the flow of your program's execution based on conditions and loops.
          `,
          codeExamples: [
            {
              title: "If-Else Statement",
              code: `public class IfElseExample {
    public static void main(String[] args) {
        int score = 85;
        
        if (score >= 90) {
            System.out.println("Grade: A");
        } else if (score >= 80) {
            System.out.println("Grade: B");
        } else if (score >= 70) {
            System.out.println("Grade: C");
        } else if (score >= 60) {
            System.out.println("Grade: D");
        } else {
            System.out.println("Grade: F");
        }
    }
}`,
              explanation: "This example demonstrates if-else statements in Java, which allow your program to make decisions based on conditions."
            }
          ],
          quiz: [
            {
              question: "Which loop is guaranteed to execute at least once?",
              options: ["for loop", "while loop", "do-while loop", "for-each loop"],
              correctAnswer: 2,
              explanation: "The do-while loop is guaranteed to execute at least once because the condition is checked after the loop body executes."
            }
          ],
          flashcards: [
            {
              front: "What is the switch statement in Java?",
              back: "The switch statement is a multi-way decision statement that tests a variable against multiple case values and executes code based on the match found."
            },
            {
              front: "How does a for-each loop work in Java?",
              back: "A for-each loop (enhanced for loop) simplifies iterating through arrays and collections. Syntax: for(ElementType element : collection) { // code }"
            }
          ]
        },
        {
          id: "java-arrays",
          title: "Arrays",
          description: "Working with arrays in Java",
          content: `
# Arrays in Java

Arrays are used to store multiple values of the same type in a single variable.
          `,
          codeExamples: [
            {
              title: "Array Declaration and Initialization",
              code: `public class ArrayExample {
    public static void main(String[] args) {
        // Declare and initialize an array
        int[] numbers = {10, 20, 30, 40, 50};
        
        // Access array elements
        System.out.println("First element: " + numbers[0]);
        
        // Change an array element
        numbers[2] = 35;
        
        // Array length
        System.out.println("Array length: " + numbers.length);
        
        // Iterate through an array
        for (int i = 0; i < numbers.length; i++) {
            System.out.println("Element at index " + i + ": " + numbers[i]);
        }
        
        // Enhanced for loop (for-each)
        for (int number : numbers) {
            System.out.println("Element: " + number);
        }
    }
}`,
              explanation: "This example demonstrates how to declare, initialize, access, and iterate through arrays in Java."
            }
          ],
          quiz: [
            {
              question: "What happens if you try to access an array element outside the array's bounds?",
              options: ["The element is created automatically", "You get a null value", "An ArrayIndexOutOfBoundsException is thrown", "The program ignores the statement"],
              correctAnswer: 2,
              explanation: "In Java, attempting to access an array element outside the array's bounds will throw an ArrayIndexOutOfBoundsException. Java performs bounds checking for all array accesses."
            }
          ],
          flashcards: [
            {
              front: "How are arrays initialized in Java?",
              back: "Arrays can be initialized in multiple ways:\n1. Using an array literal: int[] numbers = {1, 2, 3};\n2. Creating an empty array: int[] numbers = new int[5];\n3. Creating and initializing: int[] numbers = new int[]{1, 2, 3};"
            },
            {
              front: "What are multidimensional arrays in Java?",
              back: "Multidimensional arrays are arrays of arrays. For example, a 2D array is an array where each element is another array: int[][] grid = new int[3][4];"
            }
          ]
        },
        {
          id: "java-methods",
          title: "Methods",
          description: "Creating and using methods in Java",
          content: `
# Methods in Java

Methods are blocks of code that perform a specific task and can be reused throughout a program.
          `,
          codeExamples: [
            {
              title: "Method Declaration and Invocation",
              code: `public class MethodExample {
    public static void main(String[] args) {
        // Call a method
        sayHello();
        
        // Call a method with parameters
        int sum = add(5, 3);
        System.out.println("Sum: " + sum);
        
        // Call a method with multiple parameters
        displayInfo("John", 25);
    }
    
    // Method with no parameters and no return value
    public static void sayHello() {
        System.out.println("Hello, World!");
    }
    
    // Method with parameters and return value
    public static int add(int a, int b) {
        return a + b;
    }
    
    // Method with multiple parameters
    public static void displayInfo(String name, int age) {
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
    }
}`,
              explanation: "This example demonstrates how to declare and call methods in Java, including methods with and without parameters and return values."
            }
          ],
          quiz: [
            {
              question: "What is method overloading in Java?",
              options: ["Defining a method in both parent and child classes", "Defining multiple methods with the same name but different parameters", "Defining a method with optional parameters", "Using a method from a different class"],
              correctAnswer: 1,
              explanation: "Method overloading in Java is the ability to define multiple methods with the same name but different parameter lists. The methods must differ in the number, type, or order of parameters."
            }
          ],
          flashcards: [
            {
              front: "What is the difference between method parameters and arguments in Java?",
              back: "Parameters are variables listed in the method declaration, while arguments are the actual values passed to the method when it is called."
            },
            {
              front: "What is a void method in Java?",
              back: "A void method is a method that does not return any value. It performs an action but doesn't provide a result that can be assigned to a variable."
            }
          ]
        },
        {
          id: "java-classes-objects",
          title: "Classes and Objects",
          description: "Understanding object-oriented programming with classes and objects",
          content: `
# Classes and Objects in Java

Classes are blueprints for creating objects, which are instances of a class.
          `,
          codeExamples: [
            {
              title: "Creating a Class and Objects",
              code: `// Person class definition
class Person {
    // Fields (instance variables)
    String name;
    int age;
    
    // Constructor
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    // Method
    public void introduce() {
        System.out.println("Hi, I'm " + name + " and I'm " + age + " years old.");
    }
}

public class ClassExample {
    public static void main(String[] args) {
        // Create objects (instances) of the Person class
        Person person1 = new Person("Alice", 25);
        Person person2 = new Person("Bob", 30);
        
        // Call methods on objects
        person1.introduce();
        person2.introduce();
    }
}`,
              explanation: "This example demonstrates how to define a class with fields, constructors, and methods, and how to create and use objects of that class."
            }
          ],
          quiz: [
            {
              question: "What is the purpose of a constructor in Java?",
              options: ["To create an instance of a class", "To initialize the objects of a class", "To destroy objects when they are no longer needed", "To override methods from a parent class"],
              correctAnswer: 1,
              explanation: "The purpose of a constructor in Java is to initialize the newly created objects of a class. It is called automatically when an object is created and can set initial values for object attributes."
            }
          ],
          flashcards: [
            {
              front: "What is encapsulation in Java?",
              back: "Encapsulation is the bundling of data (fields) and methods that operate on that data within a single unit (class). It also includes restricting direct access to some of the object's components, typically by making fields private and providing public getters and setters."
            },
            {
              front: "What is the 'this' keyword in Java?",
              back: "The 'this' keyword refers to the current object instance. It is used to distinguish between instance variables and parameters with the same name, to call constructors, and to pass the current object as a parameter."
            }
          ]
        },
        {
          id: "java-inheritance",
          title: "Inheritance",
          description: "Understanding inheritance and extending classes",
          content: `
# Inheritance in Java

Inheritance is a mechanism in which one class acquires the properties and behaviors of another class.
          `,
          codeExamples: [
            {
              title: "Implementing Inheritance",
              code: `// Parent/Base class
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
}

// Child/Derived class
class Dog extends Animal {
    private String breed;
    
    public Dog(String name, String breed) {
        super(name);  // Call parent constructor
        this.breed = breed;
    }
    
    public void bark() {
        System.out.println(name + " is barking.");
    }
    
    // Override parent method
    @Override
    public void eat() {
        System.out.println(name + " the " + breed + " is eating dog food.");
    }
}

public class InheritanceExample {
    public static void main(String[] args) {
        // Create a Dog object
        Dog dog = new Dog("Rex", "German Shepherd");
        
        // Call methods from the parent class
        dog.sleep();  // Inherited from Animal
        
        // Call overridden method
        dog.eat();    // Overridden in Dog
        
        // Call method from the child class
        dog.bark();   // Defined in Dog
    }
}`,
              explanation: "This example demonstrates inheritance in Java. The Dog class extends the Animal class, inheriting its methods and properties while adding its own behavior and overriding existing methods."
            }
          ],
          quiz: [
            {
              question: "Which keyword is used to inherit a class in Java?",
              options: ["implements", "extends", "inherits", "using"],
              correctAnswer: 1,
              explanation: "In Java, the 'extends' keyword is used to inherit a class. For example: 'class Dog extends Animal' means Dog is a subclass that inherits from the Animal superclass."
            }
          ],
          flashcards: [
            {
              front: "What is the difference between 'extends' and 'implements' in Java?",
              back: "In Java, 'extends' is used for class inheritance (a class inherits from another class), while 'implements' is used to implement interfaces (a class implements one or more interfaces)."
            },
            {
              front: "What is method overriding in Java?",
              back: "Method overriding occurs when a subclass provides a specific implementation of a method that is already defined in its parent class. The method must have the same name, return type, and parameters."
            }
          ]
        },
        {
          id: "java-polymorphism",
          title: "Polymorphism",
          description: "Understanding polymorphism in Java",
          content: `
# Polymorphism in Java

Polymorphism allows objects to be treated as objects of their parent type while still using their specific implementations.
          `,
          codeExamples: [
            {
              title: "Polymorphism in Action",
              code: `// Base class
class Animal {
    public void makeSound() {
        System.out.println("Animal makes a sound");
    }
}

// Derived classes
class Dog extends Animal {
    @Override
    public void makeSound() {
        System.out.println("Dog barks");
    }
}

class Cat extends Animal {
    @Override
    public void makeSound() {
        System.out.println("Cat meows");
    }
}

public class PolymorphismExample {
    public static void main(String[] args) {
        // Create objects
        Animal animal1 = new Dog();  // Upcasting
        Animal animal2 = new Cat();  // Upcasting
        
        // Polymorphic behavior
        animal1.makeSound();  // Calls Dog's makeSound()
        animal2.makeSound();  // Calls Cat's makeSound()
        
        // Array of Animals
        Animal[] animals = new Animal[3];
        animals[0] = new Animal();
        animals[1] = new Dog();
        animals[2] = new Cat();
        
        // Loop through the array
        for (Animal animal : animals) {
            animal.makeSound();  // Calls appropriate makeSound() method
        }
    }
}`,
              explanation: "This example demonstrates polymorphism in Java. Objects of different derived classes (Dog, Cat) can be treated as objects of the same base class (Animal), but each will use its own implementation of the overridden method."
            }
          ],
          quiz: [
            {
              question: "What is the primary benefit of polymorphism in Java?",
              options: ["It allows classes to inherit from multiple parent classes", "It increases code efficiency by reducing compilation time", "It enables code that can work with objects of multiple types through a common interface", "It prevents objects from being modified after creation"],
              correctAnswer: 2,
              explanation: "The primary benefit of polymorphism is that it enables code to work with objects of multiple types through a common interface. This leads to more flexible, reusable, and maintainable code that can operate on families of related types."
            }
          ],
          flashcards: [
            {
              front: "What are the two types of polymorphism in Java?",
              back: "1. Compile-time polymorphism (static binding): Achieved through method overloading\n2. Runtime polymorphism (dynamic binding): Achieved through method overriding and inheritance"
            },
            {
              front: "What is dynamic method dispatch in Java?",
              back: "Dynamic method dispatch is a mechanism by which a call to an overridden method is resolved at runtime rather than compile time. It is how Java implements runtime polymorphism."
            }
          ]
        },
        {
          id: "java-interfaces",
          title: "Interfaces",
          description: "Using interfaces to define contracts",
          content: `
# Interfaces in Java

Interfaces define a contract for classes that implement them, specifying what methods they must provide.
          `,
          codeExamples: [
            {
              title: "Creating and Implementing Interfaces",
              code: `// Interface definition
interface Drawable {
    void draw();  // Abstract method (no body)
    
    // Default method (Java 8+)
    default void display() {
        System.out.println("Displaying object");
    }
}

// Class implementing the interface
class Circle implements Drawable {
    private double radius;
    
    public Circle(double radius) {
        this.radius = radius;
    }
    
    // Implementing the abstract method
    @Override
    public void draw() {
        System.out.println("Drawing a circle with radius " + radius);
    }
}

// Another class implementing the interface
class Rectangle implements Drawable {
    private double width;
    private double height;
    
    public Rectangle(double width, double height) {
        this.width = width;
        this.height = height;
    }
    
    // Implementing the abstract method
    @Override
    public void draw() {
        System.out.println("Drawing a rectangle with width " + width + " and height " + height);
    }
    
    // Override the default method
    @Override
    public void display() {
        System.out.println("Displaying a fancy rectangle");
    }
}

public class InterfaceExample {
    public static void main(String[] args) {
        // Create objects
        Drawable circle = new Circle(5.0);
        Drawable rectangle = new Rectangle(4.0, 6.0);
        
        // Call methods
        circle.draw();
        circle.display();  // Uses default implementation
        
        rectangle.draw();
        rectangle.display();  // Uses overridden implementation
    }
}`,
              explanation: "This example demonstrates interfaces in Java. The Drawable interface defines a contract that classes must follow. Both Circle and Rectangle implement the interface, providing their own implementation of the draw() method, and Rectangle also overrides the default display() method."
            }
          ],
          quiz: [
            {
              question: "Which of the following is true about interfaces in Java?",
              options: ["Interfaces can contain implemented methods (prior to Java 8)", "A class can implement multiple interfaces", "Interfaces can contain private fields", "Interfaces can extend multiple classes"],
              correctAnswer: 1,
              explanation: "In Java, a class can implement multiple interfaces. This is how Java provides a form of multiple inheritance for behavior. Interfaces (before Java 8) couldn't contain implemented methods, can't have private fields (only public static final constants), and interfaces can extend other interfaces but not classes."
            }
          ],
          flashcards: [
            {
              front: "What are the features of interfaces in Java?",
              back: "Java interfaces:\n- Can contain abstract methods (no implementation)\n- Can contain default methods (with implementation, Java 8+)\n- Can contain static methods (Java 8+)\n- Can contain private methods (Java 9+)\n- Can contain constants (public static final fields)\n- Cannot be instantiated\n- Can be implemented by classes\n- Support multiple inheritance"
            },
            {
              front: "What is the difference between an abstract class and an interface in Java?",
              back: "Key differences:\n- Abstract classes can have constructors, interfaces cannot\n- Abstract classes can have instance variables, interfaces typically only have constants\n- A class can extend only one abstract class but implement multiple interfaces\n- Abstract classes can have methods with implementation, interfaces traditionally only have abstract methods (though default methods were added in Java 8)"
            }
          ]
        },
        {
          id: "java-abstract-classes",
          title: "Abstract Classes",
          description: "Working with abstract classes",
          content: `
# Abstract Classes in Java

Abstract classes are classes that cannot be instantiated and are designed to be extended by other classes.
          `,
          codeExamples: [
            {
              title: "Creating and Using Abstract Classes",
              code: `// Abstract class
abstract class Shape {
    // Instance variable
    protected String color;
    
    // Constructor
    public Shape(String color) {
        this.color = color;
    }
    
    // Concrete method
    public void setColor(String color) {
        this.color = color;
    }
    
    // Abstract method (no implementation)
    public abstract double calculateArea();
    
    // Abstract method
    public abstract void display();
}

// Concrete subclass
class Circle extends Shape {
    private double radius;
    
    public Circle(String color, double radius) {
        super(color);  // Call the parent constructor
        this.radius = radius;
    }
    
    // Implement abstract methods
    @Override
    public double calculateArea() {
        return Math.PI * radius * radius;
    }
    
    @Override
    public void display() {
        System.out.println("A " + color + " circle with radius " + radius);
    }
}

// Another concrete subclass
class Rectangle extends Shape {
    private double width;
    private double height;
    
    public Rectangle(String color, double width, double height) {
        super(color);
        this.width = width;
        this.height = height;
    }
    
    // Implement abstract methods
    @Override
    public double calculateArea() {
        return width * height;
    }
    
    @Override
    public void display() {
        System.out.println("A " + color + " rectangle with width " + width + " and height " + height);
    }
}

public class AbstractClassExample {
    public static void main(String[] args) {
        // Cannot create an instance of abstract class
        // Shape shape = new Shape("Red");  // This would cause a compilation error
        
        // Create objects of concrete subclasses
        Circle circle = new Circle("Blue", 5.0);
        Rectangle rectangle = new Rectangle("Green", 4.0, 6.0);
        
        // Call methods
        circle.display();
        System.out.println("Circle area: " + circle.calculateArea());
        
        rectangle.display();
        System.out.println("Rectangle area: " + rectangle.calculateArea());
        
        // Polymorphism with abstract classes
        Shape shape1 = new Circle("Red", 3.0);  // Upcasting
        Shape shape2 = new Rectangle("Yellow", 2.0, 8.0);  // Upcasting
        
        shape1.display();
        shape2.display();
    }
}`,
              explanation: "This example demonstrates abstract classes in Java. The Shape class is abstract and provides both concrete and abstract methods. The concrete subclasses (Circle and Rectangle) extend the abstract class and implement the abstract methods. The example also shows polymorphism using abstract classes."
            }
          ],
          quiz: [
            {
              question: "When should you use an abstract class instead of an interface in Java?",
              options: ["When you want multiple inheritance", "When you need to define constants", "When you need to provide a common base implementation for related classes", "When you don't need any implementation details"],
              correctAnswer: 2,
              explanation: "You should use an abstract class when you need to provide a common base implementation for related classes. Abstract classes are appropriate when you have a partial implementation, need to declare non-public members, require constructors, or want to create a family of related classes that share common code."
            }
          ],
          flashcards: [
            {
              front: "What are the characteristics of an abstract class in Java?",
              back: "Abstract classes in Java:\n- Cannot be instantiated directly\n- May contain abstract methods (methods without implementation)\n- May contain concrete methods (with implementation)\n- Can have constructors, instance variables, and static methods\n- Can have access modifiers for methods\n- A class that extends an abstract class must implement all its abstract methods or be declared abstract itself"
            },
            {
              front: "What is the purpose of making a class abstract in Java?",
              back: "The purpose of making a class abstract is to:\n- Provide a common base class for a group of related classes\n- Define a template for subclasses to follow\n- Share code among multiple related classes\n- Enforce that certain methods must be implemented by concrete subclasses\n- Prevent instantiation of classes that are meant to be extended"
            }
          ]
        },
        {
          id: "java-packages",
          title: "Packages and Import Statements",
          description: "Organizing classes into packages",
          content: `
# Packages in Java

Packages are used to organize classes and interfaces into namespaces, preventing naming conflicts and providing access control.
          `,
          codeExamples: [
            {
              title: "Creating and Using Packages",
              code: `// File: com/example/math/Calculator.java
package com.example.math;

public class Calculator {
    public int add(int a, int b) {
        return a + b;
    }
    
    public int subtract(int a, int b) {
        return a - b;
    }
}

// File: com/example/util/DateUtils.java
package com.example.util;

import java.util.Date;

public class DateUtils {
    public static String formatDate(Date date) {
        return date.toString();
    }
}

// File: com/example/app/Main.java
package com.example.app;

// Import statements
import com.example.math.Calculator;
import com.example.util.DateUtils;
import java.util.Date;

public class Main {
    public static void main(String[] args) {
        // Using the imported Calculator class
        Calculator calc = new Calculator();
        int sum = calc.add(5, 3);
        System.out.println("Sum: " + sum);
        
        // Using the imported DateUtils class
        Date now = new Date();
        String formattedDate = DateUtils.formatDate(now);
        System.out.println("Current date: " + formattedDate);
    }
}`,
              explanation: "This example demonstrates how to organize classes into packages in Java. It shows package declarations, import statements, and how to use classes from other packages. Packages provide a way to organize code and control access to classes and members."
            }
          ],
          quiz: [
            {
              question: "What is the purpose of the 'import' statement in Java?",
              options: ["To include external JAR files in the project", "To load classes from other packages so they can be referred to by their simple names", "To create instances of classes from other packages", "To make all methods of a class accessible"],
              correctAnswer: 1,
              explanation: "The 'import' statement in Java allows classes from other packages to be referred to by their simple names instead of their fully-qualified names. For example, 'import java.util.ArrayList;' lets you use 'ArrayList' instead of 'java.util.ArrayList' in your code."
            }
          ],
          flashcards: [
            {
              front: "What is the default package in Java?",
              back: "The default package is an unnamed package that classes belong to when they don't have a package declaration. Using the default package is not recommended for production code, as classes in the default package cannot be imported by classes in named packages."
            },
            {
              front: "What is the difference between import and import static in Java?",
              back: "Regular import (import package.Class) lets you use Class without its package name.\nStatic import (import static package.Class.member) lets you use static members of Class without qualifying them with the class name. For example, with 'import static java.lang.Math.PI;' you can use 'PI' directly instead of 'Math.PI'."
            }
          ]
        },
        {
          id: "java-exception-handling",
          title: "Exception Handling",
          description: "Managing errors and exceptions in Java",
          content: `
# Exception Handling in Java

Exception handling is a mechanism to handle runtime errors and prevent program crashes.
          `,
          codeExamples: [
            {
              title: "Basic Exception Handling",
              code: `public class ExceptionExample {
    public static void main(String[] args) {
        // Basic try-catch
        try {
            int result = divide(10, 0);  // This will throw an ArithmeticException
            System.out.println("Result: " + result);  // This line won't execute
        } catch (ArithmeticException e) {
            System.out.println("Error: " + e.getMessage());
        }
        
        System.out.println("Program continues after exception");
        
        // Try-catch-finally
        try {
            int[] numbers = {1, 2, 3};
            System.out.println(numbers[5]);  // This will throw an ArrayIndexOutOfBoundsException
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Array index error: " + e.getMessage());
        } finally {
            System.out.println("This block always executes");
        }
        
        // Multiple catch blocks
        try {
            String str = null;
            System.out.println(str.length());  // This will throw a NullPointerException
        } catch (NullPointerException e) {
            System.out.println("Null pointer error: " + e.getMessage());
        } catch (Exception e) {
            System.out.println("General error: " + e.getMessage());
        }
        
        // Throwing exceptions
        try {
            validateAge(15);
        } catch (IllegalArgumentException e) {
            System.out.println("Validation error: " + e.getMessage());
        }
        
        // Try-with-resources (Java 7+)
        try (java.util.Scanner scanner = new java.util.Scanner(System.in)) {
            System.out.print("Enter a number: ");
            int number = scanner.nextInt();
            System.out.println("You entered: " + number);
        } catch (Exception e) {
            System.out.println("Input error: " + e.getMessage());
        }
    }
    
    // Method that throws an exception
    public static int divide(int a, int b) {
        return a / b;  // Throws ArithmeticException if b is 0
    }
    
    // Method that explicitly throws an exception
    public static void validateAge(int age) {
        if (age < 18) {
            throw new IllegalArgumentException("Age must be 18 or older");
        }
        System.out.println("Age validation passed");
    }
}`,
              explanation: "This example demonstrates exception handling in Java, including try-catch blocks, try-catch-finally blocks, multiple catch blocks, throwing exceptions, and try-with-resources. Exception handling helps prevent program crashes by providing a way to handle runtime errors gracefully."
            }
          ],
          quiz: [
            {
              question: "What is the purpose of the 'finally' block in Java exception handling?",
              options: ["To handle exceptions that weren't caught by catch blocks", "To define a default exception handler", "To execute code regardless of whether an exception occurred", "To throw a final exception before the method returns"],
              correctAnswer: 2,
              explanation: "The 'finally' block in Java is used to execute code regardless of whether an exception occurred or was caught. It typically contains cleanup code like closing files or database connections, which must be executed whether the try block completed normally or an exception was thrown."
            }
          ],
          flashcards: [
            {
              front: "What is the difference between checked and unchecked exceptions in Java?",
              back: "Checked exceptions: Must be either caught or declared in the method's 'throws' clause. They extend Exception but not RuntimeException. Examples: IOException, SQLException.\n\nUnchecked exceptions: Do not need to be caught or declared. They extend RuntimeException. Examples: NullPointerException, ArrayIndexOutOfBoundsException, ArithmeticException."
            },
            {
              front: "What is the try-with-resources statement in Java?",
              back: "Try-with-resources is a feature introduced in Java 7 that automatically closes resources that implement AutoCloseable or Closeable interfaces. Syntax: try (Resource res = new Resource()) { ... }. Resources are closed automatically at the end of the try block, even if an exception occurs."
            }
          ]
        },
        {
          id: "java-collections",
          title: "Collections Framework",
          description: "Working with Java collections",
          content: `
# Java Collections Framework

The Collections Framework provides a set of classes and interfaces for storing, managing, and manipulating groups of objects.
          `,
          codeExamples: [
            {
              title: "Using ArrayList",
              code: `import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class ArrayListExample {
    public static void main(String[] args) {
        // Create an ArrayList
        List<String> fruits = new ArrayList<>();
        
        // Add elements
        fruits.add("Apple");
        fruits.add("Banana");
        fruits.add("Orange");
        System.out.println("ArrayList: " + fruits);
        
        // Access elements
        String first = fruits.get(0);
        System.out.println("First fruit: " + first);
        
        // Modify elements
        fruits.set(1, "Mango");
        System.out.println("After modification: " + fruits);
        
        // Remove elements
        fruits.remove("Orange");
        System.out.println("After removal: " + fruits);
        
        // Size of ArrayList
        System.out.println("Size: " + fruits.size());
        
        // Check if element exists
        boolean containsApple = fruits.contains("Apple");
        System.out.println("Contains Apple? " + containsApple);
        
        // Iterate using enhanced for loop
        System.out.println("Fruits:");
        for (String fruit : fruits) {
            System.out.println("- " + fruit);
        }
        
        // Sort the ArrayList
        Collections.sort(fruits);
        System.out.println("Sorted fruits: " + fruits);
        
        // Clear the ArrayList
        fruits.clear();
        System.out.println("After clearing: " + fruits);
        System.out.println("Is empty? " + fruits.isEmpty());
    }
}`,
              explanation: "This example demonstrates how to use ArrayList, one of the most commonly used collection classes in Java. It shows operations like adding, accessing, modifying, and removing elements, as well as checking the size, searching for elements, iterating through the list, sorting, and clearing the list."
            }
          ],
          quiz: [
            {
              question: "Which Collection interface is appropriate when you need to preserve insertion order and allow duplicates?",
              options: ["Set", "List", "Map", "Queue"],
              correctAnswer: 1,
              explanation: "The List interface is appropriate when you need to preserve insertion order and allow duplicates. Lists maintain a specific order of elements and allow duplicate elements. Common implementations include ArrayList, LinkedList, and Vector."
            }
          ],
          flashcards: [
            {
              front: "What are the main interfaces in the Java Collections Framework?",
              back: "The main interfaces in the Java Collections Framework are:\n- Collection: The root interface\n- List: Ordered collection that allows duplicates (ArrayList, LinkedList)\n- Set: Collection that does not allow duplicates (HashSet, TreeSet)\n- Queue: Collection for holding elements before processing (LinkedList, PriorityQueue)\n- Map: Maps keys to values (HashMap, TreeMap)"
            },
            {
              front: "What is the difference between ArrayList and LinkedList in Java?",
              back: "ArrayList: Backed by a dynamic array. Fast random access and iteration, slower insertions/deletions in the middle. Good for scenarios where random access is frequent.\n\nLinkedList: Implemented as a doubly-linked list. Fast insertions/deletions, slower random access. Good for scenarios with frequent additions/removals, especially at the beginning or middle of the list."
            }
          ]
        },
        {
          id: "java-generics",
          title: "Generics",
          description: "Creating type-safe classes and methods with generics",
          content: `
# Generics in Java

Generics allow you to create classes, interfaces, and methods that operate on a type parameter, providing type safety and eliminating casts.
          `,
          codeExamples: [
            {
              title: "Using Generics",
              code: `import java.util.ArrayList;
import java.util.List;

// Generic class
class Box<T> {
    private T value;
    
    public void setValue(T value) {
        this.value = value;
    }
    
    public T getValue() {
        return value;
    }
}

// Generic method
class Utilities {
    // Generic method with type parameter T
    public static <T> void printArray(T[] array) {
        for (T element : array) {
            System.out.print(element + " ");
        }
        System.out.println();
    }
    
    // Generic method with bounded type parameter
    public static <T extends Comparable<T>> T findMax(T[] array) {
        if (array == null || array.length == 0) {
            return null;
        }
        
        T max = array[0];
        for (int i = 1; i < array.length; i++) {
            if (array[i].compareTo(max) > 0) {
                max = array[i];
            }
        }
        return max;
    }
}

public class GenericsExample {
    public static void main(String[] args) {
        // Using generic class with different types
        Box<Integer> intBox = new Box<>();
        intBox.setValue(42);
        System.out.println("Integer value: " + intBox.getValue());
        
        Box<String> stringBox = new Box<>();
        stringBox.setValue("Hello, Generics!");
        System.out.println("String value: " + stringBox.getValue());
        
        // Using generic collections
        List<String> names = new ArrayList<>();
        names.add("Alice");
        names.add("Bob");
        names.add("Charlie");
        
        // Type-safe iteration (no casting needed)
        for (String name : names) {
            System.out.println(name);
        }
        
        // Using generic method
        Integer[] intArray = {1, 5, 3, 7, 2, 8};
        String[] stringArray = {"apple", "orange", "banana"};
        
        System.out.print("Integer array: ");
        Utilities.printArray(intArray);
        
        System.out.print("String array: ");
        Utilities.printArray(stringArray);
        
        // Using bounded type parameter
        Integer maxInt = Utilities.findMax(intArray);
        String maxString = Utilities.findMax(stringArray);
        
        System.out.println("Max integer: " + maxInt);
        System.out.println("Max string: " + maxString);
    }
}`,
              explanation: "This example demonstrates generics in Java. It shows how to create generic classes that can work with any type, generic methods that can operate on arrays of any type, and bounded type parameters that restrict the types that can be used. Generics provide type safety at compile time, eliminating the need for explicit casting and preventing runtime type errors."
            }
          ],
          quiz: [
            {
              question: "What is type erasure in Java generics?",
              options: ["The process of converting generic code to type-specific code", "The removal of generic type information during compilation", "The automatic casting of objects in generic collections", "The process of validating generic type constraints"],
              correctAnswer: 1,
              explanation: "Type erasure is the process by which the Java compiler removes generic type information during compilation. After compilation, generic types are replaced with their bounds or Object if unbounded. This implementation approach allows generic code to be backward compatible with pre-generics code, but it also means that generic type information is not available at runtime."
            }
          ],
          flashcards: [
            {
              front: "What are the benefits of using generics in Java?",
              back: "Benefits of generics in Java:\n- Type safety at compile time\n- Elimination of casts\n- Prevention of runtime ClassCastException\n- Enabling implementation of generic algorithms\n- Allowing for collection classes to enforce type constraints\n- Code reusability with multiple types"
            },
            {
              front: "What are wildcard generics in Java?",
              back: "Wildcard generics use the ? symbol to represent an unknown type. There are three forms:\n1. Unbounded wildcard (<?>) - represents any type\n2. Upper bounded wildcard (<? extends Type>) - represents Type or any subtype of Type\n3. Lower bounded wildcard (<? super Type>) - represents Type or any supertype of Type\nWildcards provide flexibility when working with generic types."
            }
          ]
        },
        {
          id: "java-io",
          title: "Input and Output (I/O)",
          description: "Reading and writing data in Java",
          content: `
# Java I/O Operations

Java provides various classes for input and output operations, including reading from and writing to files, network connections, and other data streams.
          `,
          codeExamples: [
            {
              title: "File I/O Operations",
              code: `import java.io.*;
import java.nio.file.*;
import java.util.List;

public class FileIOExample {
    public static void main(String[] args) {
        // File paths
        String inputFile = "input.txt";
        String outputFile = "output.txt";
        
        // Writing to a file using FileWriter
        try (FileWriter writer = new FileWriter(outputFile)) {
            writer.write("This is line 1\\n");
            writer.write("This is line 2\\n");
            writer.write("This is line 3\\n");
            System.out.println("Successfully wrote to the file using FileWriter");
        } catch (IOException e) {
            System.out.println("An error occurred while writing to the file");
            e.printStackTrace();
        }
        
        // Reading from a file using BufferedReader
        try (BufferedReader reader = new BufferedReader(new FileReader(outputFile))) {
            String line;
            System.out.println("\\nReading from file using BufferedReader:");
            while ((line = reader.readLine()) != null) {
                System.out.println(line);
            }
        } catch (IOException e) {
            System.out.println("An error occurred while reading the file");
            e.printStackTrace();
        }
        
        // Using Java NIO (New I/O) for file operations
        try {
            // Writing to a file
            Files.write(Paths.get("nio_output.txt"), 
                        List.of("Line 1 using NIO", "Line 2 using NIO", "Line 3 using NIO"),
                        StandardOpenOption.CREATE);
            System.out.println("\\nSuccessfully wrote to the file using NIO");
            
            // Reading from a file
            List<String> lines = Files.readAllLines(Paths.get("nio_output.txt"));
            System.out.println("\\nReading from file using NIO:");
            for (String line : lines) {
                System.out.println(line);
            }
        } catch (IOException e) {
            System.out.println("An error occurred with NIO operations");
            e.printStackTrace();
        }
        
        // Working with binary data
        try {
            // Writing binary data
            try (FileOutputStream fos = new FileOutputStream("binary.dat")) {
                byte[] data = {65, 66, 67, 68, 69};  // ASCII values for A, B, C, D, E
                fos.write(data);
                System.out.println("\\nSuccessfully wrote binary data");
            }
            
            // Reading binary data
            try (FileInputStream fis = new FileInputStream("binary.dat")) {
                byte[] data = new byte[5];
                int bytesRead = fis.read(data);
                System.out.println("\\nRead " + bytesRead + " bytes of binary data:");
                for (byte b : data) {
                    System.out.print((char) b + " ");  // Convert ASCII to characters
                }
                System.out.println();
            }
        } catch (IOException e) {
            System.out.println("An error occurred with binary I/O operations");
            e.printStackTrace();
        }
    }
}`,
              explanation: "This example demonstrates various I/O operations in Java, including traditional I/O using FileWriter and BufferedReader, modern NIO (New I/O) using the Files class, and binary I/O using FileOutputStream and FileInputStream. It shows how to write to and read from text and binary files."
            }
          ],
          quiz: [
            {
              question: "Which class should you use to read text from a file efficiently in Java?",
              options: ["FileReader", "FileInputStream", "BufferedReader", "Files"],
              correctAnswer: 2,
              explanation: "You should use BufferedReader to read text from a file efficiently in Java. BufferedReader reads text from a character-input stream, buffering characters to provide efficient reading of characters, arrays, and lines. While FileReader can read files directly, it's not buffered, so it's less efficient for line-by-line reading. FileInputStream is for binary data, and Files is a utility class."
            }
          ],
          flashcards: [
            {
              front: "What's the difference between character streams and byte streams in Java I/O?",
              back: "Character streams (Reader/Writer classes) are designed for reading and writing character data. They automatically handle character encoding and are best for text files.\n\nByte streams (InputStream/OutputStream classes) are designed for reading and writing binary data. They read/write one byte at a time and are suitable for all types of files, including images, audio, video, and executable files."
            },
            {
              front: "What are the advantages of using Java NIO over traditional I/O?",
              back: "Advantages of Java NIO:\n- Non-blocking I/O operations\n- Buffer-oriented processing\n- Channel-based operations for efficient data transfer\n- Enhanced file system operations\n- Memory-mapped file support\n- Enhanced performance for large-scale operations\n- Support for asynchronous I/O"
            }
          ]
        },
        {
          id: "java-multithreading",
          title: "Multithreading",
          description: "Creating and managing multiple threads in Java",
          content: `
# Multithreading in Java

Multithreading allows a program to execute multiple threads concurrently, enabling more efficient use of system resources and better responsiveness.
          `,
          codeExamples: [
            {
              title: "Creating and Using Threads",
              code: `import java.util.concurrent.*;

public class MultithreadingExample {
    public static void main(String[] args) {
        System.out.println("Main thread starting...");
        
        // Method 1: Extending Thread class
        System.out.println("\\nMethod 1: Extending Thread class");
        MyThread thread1 = new MyThread("Thread-1");
        thread1.start();
        
        // Method 2: Implementing Runnable interface
        System.out.println("\\nMethod 2: Implementing Runnable interface");
        Thread thread2 = new Thread(new MyRunnable(), "Thread-2");
        thread2.start();
        
        // Method 3: Using lambda expression with Runnable
        System.out.println("\\nMethod 3: Using lambda expression");
        Thread thread3 = new Thread(() -> {
            try {
                System.out.println("Thread-3 is running");
                Thread.sleep(1000);
                System.out.println("Thread-3 finished");
            } catch (InterruptedException e) {
                System.out.println("Thread-3 interrupted");
            }
        });
        thread3.start();
        
        // Thread synchronization
        System.out.println("\\nThread synchronization example");
        Counter counter = new Counter();
        
        // Creating multiple threads that increment the counter
        Thread incrementThread1 = new Thread(() -> {
            for (int i = 0; i < 10000; i++) {
                counter.increment();
            }
        });
        
        Thread incrementThread2 = new Thread(() -> {
            for (int i = 0; i < 10000; i++) {
                counter.increment();
            }
        });
        
        incrementThread1.start();
        incrementThread2.start();
        
        try {
            // Wait for threads to finish
            incrementThread1.join();
            incrementThread2.join();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        
        System.out.println("Counter value: " + counter.getCount());
        
        // Using ExecutorService
        System.out.println("\\nUsing ExecutorService");
        ExecutorService executor = Executors.newFixedThreadPool(2);
        
        for (int i = 1; i <= 5; i++) {
            final int taskId = i;
            executor.execute(() -> {
                System.out.println("Task " + taskId + " executed by " + 
                                  Thread.currentThread().getName());
                try {
                    Thread.sleep(500);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            });
        }
        
        // Shutdown the executor
        executor.shutdown();
        try {
            // Wait for all tasks to finish
            if (!executor.awaitTermination(5, TimeUnit.SECONDS)) {
                executor.shutdownNow();
            }
        } catch (InterruptedException e) {
            executor.shutdownNow();
        }
        
        System.out.println("All executor tasks finished");
        
        // Wait for all threads to finish
        try {
            thread1.join();
            thread2.join();
            thread3.join();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        
        System.out.println("Main thread finished");
    }
}

// Method 1: Extending Thread class
class MyThread extends Thread {
    public MyThread(String name) {
        super(name);
    }
    
    @Override
    public void run() {
        try {
            System.out.println(getName() + " is running");
            Thread.sleep(1000);
            System.out.println(getName() + " finished");
        } catch (InterruptedException e) {
            System.out.println(getName() + " interrupted");
        }
    }
}

// Method 2: Implementing Runnable interface
class MyRunnable implements Runnable {
    @Override
    public void run() {
        try {
            System.out.println(Thread.currentThread().getName() + " is running");
            Thread.sleep(1000);
            System.out.println(Thread.currentThread().getName() + " finished");
        } catch (InterruptedException e) {
            System.out.println(Thread.currentThread().getName() + " interrupted");
        }
    }
}

// Thread synchronization example
class Counter {
    private int count = 0;
    
    // Synchronized method to ensure thread safety
    public synchronized void increment() {
        count++;
    }
    
    public int getCount() {
        return count;
    }
}`,
              explanation: "This example demonstrates multithreading in Java, including different ways to create threads (extending Thread, implementing Runnable, using lambda expressions), thread synchronization using the synchronized keyword, and using the ExecutorService for thread pool management. It also shows how to wait for threads to complete using the join method."
            }
          ],
          quiz: [
            {
              question: "What is the difference between 'start()' and 'run()' methods in the Thread class?",
              options: ["They are synonyms and can be used interchangeably", "start() creates a new thread while run() just executes the code in the current thread", "run() creates a new thread while start() just executes the code in the current thread", "start() is for synchronous execution while run() is for asynchronous execution"],
              correctAnswer: 1,
              explanation: "The start() method creates a new thread and causes the run() method to be executed in that new thread. If you call run() directly without calling start(), the code in run() will execute in the current thread, not in a new thread. This distinction is crucial for achieving true multithreading."
            }
          ],
          flashcards: [
            {
              front: "What are the thread states in Java?",
              back: "Java thread states:\n1. NEW: Thread has been created but not yet started\n2. RUNNABLE: Thread is executing or ready to execute\n3. BLOCKED: Thread is blocked waiting for a monitor lock\n4. WAITING: Thread is waiting indefinitely for another thread\n5. TIMED_WAITING: Thread is waiting for another thread for a specified period\n6. TERMINATED: Thread has completed execution"
            },
            {
              front: "What is thread synchronization in Java?",
              back: "Thread synchronization in Java is the process of ensuring that multiple threads access shared resources in a controlled manner to prevent race conditions, data corruption, and other concurrency issues. It can be achieved using:\n- synchronized methods\n- synchronized blocks\n- Lock interface implementations\n- Atomic classes\n- volatile keyword\n- Concurrent collections"
            }
          ]
        },
        {
          id: "java-lambda",
          title: "Lambda Expressions",
          description: "Using lambda expressions and functional interfaces",
          content: `
# Lambda Expressions in Java

Lambda expressions provide a concise way to represent a method interface using an expression, enabling functional programming in Java.
          `,
          codeExamples: [
            {
              title: "Using Lambda Expressions",
              code: `import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.function.*;

public class LambdaExample {
    public static void main(String[] args) {
        // Basic lambda expression
        // Syntax: (parameters) -> expression or (parameters) -> { statements; }
        
        // Example 1: Simple lambda with no parameters
        Runnable runnable = () -> System.out.println("Hello, Lambda!");
        runnable.run();
        
        // Example 2: Lambda with one parameter
        Consumer<String> consumer = (name) -> System.out.println("Hello, " + name);
        consumer.accept("Alice");
        
        // Example 3: Lambda with multiple parameters
        BiFunction<Integer, Integer, Integer> add = (a, b) -> a + b;
        System.out.println("5 + 3 = " + add.apply(5, 3));
        
        // Example 4: Lambda with block of code
        BiFunction<Integer, Integer, Integer> multiply = (a, b) -> {
            System.out.println("Multiplying " + a + " and " + b);
            return a * b;
        };
        System.out.println("5 * 3 = " + multiply.apply(5, 3));
        
        // Example 5: Using method reference
        List<String> names = Arrays.asList("Alice", "Bob", "Charlie");
        
        // Lambda way
        names.forEach(name -> System.out.println(name));
        
        // Method reference way
        System.out.println("Using method reference:");
        names.forEach(System.out::println);
        
        // Example 6: Predicate for filtering
        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
        
        System.out.println("Even numbers:");
        filter(numbers, n -> n % 2 == 0).forEach(System.out::println);
        
        System.out.println("Numbers greater than 5:");
        filter(numbers, n -> n > 5).forEach(System.out::println);
        
        // Example 7: Function for transforming
        List<String> upperCaseNames = transform(names, String::toUpperCase);
        System.out.println("Upper case names: " + upperCaseNames);
        
        List<Integer> nameLengths = transform(names, String::length);
        System.out.println("Name lengths: " + nameLengths);
        
        // Example 8: Creating custom functional interfaces
        Calculator addition = (a, b) -> a + b;
        Calculator subtraction = (a, b) -> a - b;
        
        System.out.println("10 + 5 = " + calculate(10, 5, addition));
        System.out.println("10 - 5 = " + calculate(10, 5, subtraction));
        System.out.println("10 * 5 = " + calculate(10, 5, (a, b) -> a * b));
    }
    
    // Generic method for filtering
    public static <T> List<T> filter(List<T> list, Predicate<T> predicate) {
        List<T> result = new ArrayList<>();
        for (T item : list) {
            if (predicate.test(item)) {
                result.add(item);
            }
        }
        return result;
    }
    
    // Generic method for transforming
    public static <T, R> List<R> transform(List<T> list, Function<T, R> function) {
        List<R> result = new ArrayList<>();
        for (T item : list) {
            result.add(function.apply(item));
        }
        return result;
    }
    
    // Custom functional interface
    @FunctionalInterface
    interface Calculator {
        int calculate(int a, int b);
    }
    
    // Method using the custom functional interface
    public static int calculate(int a, int b, Calculator calculator) {
        return calculator.calculate(a, b);
    }
}`,
              explanation: "This example demonstrates lambda expressions in Java, which provide a concise way to represent single-method interfaces (functional interfaces). It shows various lambda expression forms, including no parameters, one parameter, multiple parameters, and lambda expressions with blocks of code. It also illustrates method references as a shorthand for certain lambda expressions, using predefined functional interfaces like Runnable, Consumer, BiFunction, and Predicate, and creating custom functional interfaces."
            }
          ],
          quiz: [
            {
              question: "What is a functional interface in Java?",
              options: ["An interface with no methods", "An interface with multiple methods", "An interface with exactly one abstract method", "An interface that can be implemented as a lambda expression"],
              correctAnswer: 2,
              explanation: "A functional interface in Java is an interface that has exactly one abstract method. This property makes a functional interface eligible for implementation via lambda expressions or method references. Functional interfaces may also contain default and static methods, but they must have only one abstract method. The @FunctionalInterface annotation is used to indicate that an interface is intended to be a functional interface."
            }
          ],
          flashcards: [
            {
              front: "What are the benefits of using lambda expressions in Java?",
              back: "Benefits of lambda expressions:\n- More concise code (less boilerplate)\n- Enable functional programming paradigms\n- Make code more readable and maintainable\n- Enable parallel processing of collections\n- Simplify implementation of event handlers and callbacks\n- Facilitate use of the Stream API\n- Enable deferred execution and lazy evaluation"
            },
            {
              front: "What are the major functional interfaces in the java.util.function package?",
              back: "Major functional interfaces in java.util.function:\n- Predicate<T>: Takes T, returns boolean (test method)\n- Consumer<T>: Takes T, returns void (accept method)\n- Function<T,R>: Takes T, returns R (apply method)\n- Supplier<T>: Takes nothing, returns T (get method)\n- UnaryOperator<T>: Takes T, returns T (apply method)\n- BinaryOperator<T>: Takes two T, returns T (apply method)\n- BiPredicate<T,U>: Takes T and U, returns boolean (test method)\n- BiConsumer<T,U>: Takes T and U, returns void (accept method)\n- BiFunction<T,U,R>: Takes T and U, returns R (apply method)"
            }
          ]
        },
        {
          id: "java-streams",
          title: "Streams API",
          description: "Working with the Streams API for collection processing",
          content: `
# Streams API in Java

The Streams API provides a functional approach to processing collections of objects, enabling operations like filtering, mapping, and reduction.
          `,
          codeExamples: [
            {
              title: "Using the Streams API",
              code: `import java.util.*;
import java.util.stream.*;
import java.time.LocalDate;

class Person {
    private String name;
    private int age;
    private String gender;
    
    public Person(String name, int age, String gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    
    public String getName() { return name; }
    public int getAge() { return age; }
    public String getGender() { return gender; }
    
    @Override
    public String toString() {
        return "Person{name='" + name + "', age=" + age + ", gender='" + gender + "'}";
    }
}

public class StreamsExample {
    public static void main(String[] args) {
        // Create a list of people
        List<Person> people = Arrays.asList(
            new Person("Alice", 25, "Female"),
            new Person("Bob", 30, "Male"),
            new Person("Charlie", 35, "Male"),
            new Person("Diana", 28, "Female"),
            new Person("Edward", 40, "Male"),
            new Person("Fiona", 22, "Female")
        );
        
        // Example 1: Filtering elements
        System.out.println("People older than 30:");
        people.stream()
              .filter(person -> person.getAge() > 30)
              .forEach(System.out::println);
        
        // Example 2: Mapping elements
        System.out.println("\\nNames of all people:");
        List<String> names = people.stream()
                                   .map(Person::getName)
                                   .collect(Collectors.toList());
        names.forEach(System.out::println);
        
        // Example 3: Sorting elements
        System.out.println("\\nPeople sorted by age:");
        people.stream()
              .sorted(Comparator.comparingInt(Person::getAge))
              .forEach(System.out::println);
        
        // Example 4: Finding elements
        Optional<Person> youngestFemale = people.stream()
                                               .filter(p -> p.getGender().equals("Female"))
                                               .min(Comparator.comparingInt(Person::getAge));
        System.out.println("\\nYoungest female: " + youngestFemale.orElse(null));
        
        // Example 5: Aggregating data
        double averageAge = people.stream()
                                 .mapToInt(Person::getAge)
                                 .average()
                                 .orElse(0.0);
        System.out.println("\\nAverage age: " + averageAge);
        
        // Example 6: Grouping data
        Map<String, List<Person>> peopleByGender = people.stream()
                                                       .collect(Collectors.groupingBy(Person::getGender));
        System.out.println("\\nPeople grouped by gender:");
        peopleByGender.forEach((gender, personList) -> {
            System.out.println(gender + ":");
            personList.forEach(person -> System.out.println("  " + person));
        });
        
        // Example 7: Partitioning data
        Map<Boolean, List<Person>> partitionedByAge = people.stream()
                                                          .collect(Collectors.partitioningBy(p -> p.getAge() >= 30));
        System.out.println("\\nPeople partitioned by age (>= 30):");
        System.out.println("Age >= 30:");
        partitionedByAge.get(true).forEach(person -> System.out.println("  " + person));
        System.out.println("Age < 30:");
        partitionedByAge.get(false).forEach(person -> System.out.println("  " + person));
        
        // Example 8: Joining strings
        String namesCsv = people.stream()
                               .map(Person::getName)
                               .collect(Collectors.joining(", "));
        System.out.println("\\nNames CSV: " + namesCsv);
        
        // Example 9: Reducing values
        int totalAge = people.stream()
                            .map(Person::getAge)
                            .reduce(0, Integer::sum);
        System.out.println("\\nTotal age: " + totalAge);
        
        // Example 10: Parallel streams for better performance with large datasets
        System.out.println("\\nProcessing with parallel stream:");
        long start = System.currentTimeMillis();
        long count = Stream.iterate(0L, i -> i + 1)
                          .limit(10_000_000)
                          .parallel()  // Use parallel stream
                          .filter(i -> i % 2 == 0)
                          .count();
        long end = System.currentTimeMillis();
        System.out.println("Number of even numbers: " + count);
        System.out.println("Time taken: " + (end - start) + "ms");
    }
}`,
              explanation: "This example demonstrates the Streams API in Java, which provides a functional approach to processing collections of objects. It shows various stream operations including filtering, mapping, sorting, finding elements, aggregating data, grouping, partitioning, joining strings, reducing values, and using parallel streams for improved performance with large datasets. The Streams API enables clean, concise, and expressive code for collection processing."
            }
          ],
          quiz: [
            {
              question: "Which of the following is NOT a terminal operation in the Streams API?",
              options: ["collect()", "forEach()", "map()", "reduce()"],
              correctAnswer: 2,
              explanation: "map() is an intermediate operation in the Streams API, not a terminal operation. Intermediate operations (like filter(), map(), sorted()) transform a stream into another stream and can be chained. Terminal operations (like collect(), forEach(), reduce()) produce a result or side effect and end the stream processing. After a terminal operation, the stream is considered consumed and cannot be used again."
            }
          ],
          flashcards: [
            {
              front: "What is the difference between intermediate and terminal operations in the Streams API?",
              back: "Intermediate operations:\n- Transform a stream into another stream\n- Are lazy (not executed until a terminal operation is called)\n- Can be chained together\n- Examples: filter(), map(), sorted(), distinct(), limit()\n\nTerminal operations:\n- Produce a result or side effect\n- Trigger the execution of the stream pipeline\n- Consume the stream (it cannot be reused afterward)\n- Examples: collect(), forEach(), reduce(), count(), findFirst()"
            },
            {
              front: "What is a stream pipeline in Java?",
              back: "A stream pipeline in Java is a sequence of operations applied to a data source. It consists of:\n1. A source (e.g., collection, array)\n2. Zero or more intermediate operations (e.g., filter, map)\n3. A terminal operation (e.g., collect, forEach)\n\nStream pipelines are lazily evaluated, meaning intermediate operations are not executed until a terminal operation is invoked. This allows for optimization and enables processing of infinite streams."
            }
          ]
        },
        {
          id: "java-optional",
          title: "Optional Class",
          description: "Handling nullable values with the Optional class",
          content: `
# Optional Class in Java

The Optional class provides a way to express optional values instead of using null references, helping to prevent NullPointerExceptions.
          `,
          codeExamples: [
            {
              title: "Using the Optional Class",
              code: `import java.util.Optional;
import java.util.HashMap;
import java.util.Map;

// User class for demonstration
class User {
    private String name;
    private String email;
    private Address address;
    
    public User(String name, String email, Address address) {
        this.name = name;
        this.email = email;
        this.address = address;
    }
    
    public String getName() { return name; }
    public String getEmail() { return email; }
    
    // Return Optional<Address> instead of potentially null Address
    public Optional<Address> getAddress() {
        return Optional.ofNullable(address);
    }
}

class Address {
    private String street;
    private String city;
    private String zipCode;
    
    public Address(String street, String city, String zipCode) {
        this.street = street;
        this.city = city;
        this.zipCode = zipCode;
    }
    
    public String getStreet() { return street; }
    public String getCity() { return city; }
    public String getZipCode() { return zipCode; }
    
    @Override
    public String toString() {
        return street + ", " + city + ", " + zipCode;
    }
}

public class OptionalExample {
    public static void main(String[] args) {
        // Creating Optionals
        // Example 1: Creating an empty Optional
        Optional<String> empty = Optional.empty();
        System.out.println("Empty Optional: " + empty);
        
        // Example 2: Creating Optional with a non-null value
        Optional<String> name = Optional.of("John");
        System.out.println("Optional with value: " + name);
        
        // Example 3: Creating Optional with a value that may be null
        String nullableName = null;
        Optional<String> nullName = Optional.ofNullable(nullableName);
        System.out.println("Optional with nullable value: " + nullName);
        
        // Working with Optional values
        // Example 4: Check if a value is present
        if (name.isPresent()) {
            System.out.println("Name is present: " + name.get());
        }
        
        // Example 5: Execute code if a value is present
        name.ifPresent(value -> System.out.println("Name length: " + value.length()));
        
        // Example 6: Default values with orElse
        String defaultName = nullName.orElse("Default");
        System.out.println("Name or default: " + defaultName);
        
        // Example 7: Default values with orElseGet (supplier)
        String computedDefault = nullName.orElseGet(() -> "Computed " + "Default");
        System.out.println("Name or computed default: " + computedDefault);
        
        // Example 8: Throw exception if value is not present
        try {
            String value = nullName.orElseThrow(() -> new NoSuchElementException("No value present"));
        } catch (NoSuchElementException e) {
            System.out.println("Exception caught: " + e.getMessage());
        }
        
        // Example 9: Filtering values
        Optional<String> filteredName = name.filter(value -> value.length() > 3);
        System.out.println("Filtered name present: " + filteredName.isPresent());
        
        // Example 10: Transforming values with map
        Optional<Integer> nameLength = name.map(String::length);
        System.out.println("Name length: " + nameLength.orElse(0));
        
        // Example 11: Real-world example with chain of operations
        Map<Integer, User> users = new HashMap<>();
        users.put(1, new User("Alice", "alice@example.com", 
                             new Address("123 Main St", "New York", "10001")));
        users.put(2, new User("Bob", "bob@example.com", null));
        
        // Get user address safely using Optional
        int userId = 2;
        String userAddress = getUserAddress(users, userId);
        System.out.println("\\nUser " + userId + " address: " + userAddress);
        
        // Example 12: FlatMap for nested Optionals
        Optional<User> user = Optional.ofNullable(users.get(1));
        Optional<String> city = user.flatMap(u -> u.getAddress())
                                   .map(Address::getCity);
        System.out.println("User city: " + city.orElse("Unknown"));
    }
    
    // Method that safely gets a user's address, handling all potential nulls
    private static String getUserAddress(Map<Integer, User> users, int userId) {
        return Optional.ofNullable(users.get(userId))       // Optional<User>
                     .flatMap(User::getAddress)             // Optional<Address>
                     .map(Address::toString)                // Optional<String>
                     .orElse("Address not available");      // String
    }
}`,
              explanation: "This example demonstrates the Optional class in Java, which provides a way to handle potentially null values without causing NullPointerExceptions. It shows how to create Optionals, check if values are present, provide default values, transform values, and chain operations. The example also includes a real-world scenario of safely accessing nested properties that might be null, demonstrating how Optional can make code more robust and expressive."
            }
          ],
          quiz: [
            {
              question: "What is the primary purpose of the Optional class in Java?",
              options: ["To make all variables nullable", "To make code more verbose and explicit", "To provide a container object that may or may not contain a value, avoiding null references", "To replace the null keyword in Java"],
              correctAnswer: 2,
              explanation: "The primary purpose of the Optional class in Java is to provide a container object that may or may not contain a value, offering a more explicit and safer alternative to using null references. Optional helps to prevent NullPointerExceptions by forcing developers to explicitly handle the case when a value might be absent, rather than having to remember to check for null everywhere."
            }
          ],
          flashcards: [
            {
              front: "What is the difference between Optional.of() and Optional.ofNullable()?",
              back: "Optional.of(value):\n- Requires a non-null value\n- Throws NullPointerException if the value is null\n- Use when you are certain the value is not null\n\nOptional.ofNullable(value):\n- Accepts a potentially null value\n- Returns an empty Optional if the value is null\n- Use when you're not sure if the value will be null"
            },
            {
              front: "What are some best practices for using Optional in Java?",
              back: "Best practices for using Optional:\n- Use as a return type, not as a field type or parameter type\n- Don't use Optional.get() without checking isPresent() first\n- Prefer ifPresent(), orElse(), orElseGet() methods over isPresent()/get()\n- Use map() and flatMap() for transformations\n- Don't wrap collections in Optional; use empty collections instead\n- Remember that Optional itself can be null (though it shouldn't be)\n- Don't overuse - it adds overhead and is meant primarily for return values"
            }
          ]
        },
        {
          id: "java-date-time",
          title: "Date and Time API",
          description: "Working with dates, times, and durations using the modern Date-Time API",
          content: `
# Date and Time API in Java

Java 8 introduced a new Date-Time API in the java.time package, providing comprehensive classes for date, time, and duration manipulation.
          `,
          codeExamples: [
            {
              title: "Using the Date-Time API",
              code: `import java.time.*;
import java.time.format.*;
import java.time.temporal.*;
import java.util.Locale;

public class DateTimeExample {
    public static void main(String[] args) {
        // Current date and time
        LocalDate today = LocalDate.now();
        LocalTime now = LocalTime.now();
        LocalDateTime currentDateTime = LocalDateTime.now();
        ZonedDateTime currentZonedDateTime = ZonedDateTime.now();
        
        System.out.println("Today: " + today);
        System.out.println("Now: " + now);
        System.out.println("Current date and time: " + currentDateTime);
        System.out.println("Current date and time with zone: " + currentZonedDateTime);
        
        // Creating specific dates and times
        LocalDate birthday = LocalDate.of(1990, Month.JANUARY, 15);
        LocalTime meetingTime = LocalTime.of(13, 30);  // 1:30 PM
        LocalDateTime appointment = LocalDateTime.of(2023, Month.JULY, 20, 15, 0);  // July 20, 2023, 3:00 PM
        
        System.out.println("\\nBirthday: " + birthday);
        System.out.println("Meeting time: " + meetingTime);
        System.out.println("Appointment: " + appointment);
        
        // Date and time arithmetic
        LocalDate nextWeek = today.plusDays(7);
        LocalDate threeMonthsAgo = today.minusMonths(3);
        LocalTime twoHoursLater = now.plusHours(2);
        
        System.out.println("\\nNext week: " + nextWeek);
        System.out.println("Three months ago: " + threeMonthsAgo);
        System.out.println("Two hours later: " + twoHoursLater);
        
        // Period and Duration
        Period period = Period.between(birthday, today);
        System.out.println("\\nAge: " + period.getYears() + " years, " + 
                         period.getMonths() + " months, " + 
                         period.getDays() + " days");
        
        Duration duration = Duration.between(now, twoHoursLater);
        System.out.println("Duration until meeting: " + duration.toHours() + " hours, " + 
                         (duration.toMinutes() % 60) + " minutes");
        
        // Comparing dates and times
        boolean isBefore = birthday.isBefore(today);
        boolean isAfter = meetingTime.isAfter(now);
        
        System.out.println("\\nIs birthday before today? " + isBefore);
        System.out.println("Is meeting time after now? " + isAfter);
        
        // Formatting dates and times
        DateTimeFormatter dateFormatter = DateTimeFormatter.ofPattern("MMMM dd, yyyy");
        DateTimeFormatter timeFormatter = DateTimeFormatter.ofPattern("h:mm a");
        DateTimeFormatter dateTimeFormatter = DateTimeFormatter.ofPattern("EEEE, MMMM dd, yyyy 'at' h:mm a");
        
        String formattedDate = today.format(dateFormatter);
        String formattedTime = now.format(timeFormatter);
        String formattedDateTime = currentDateTime.format(dateTimeFormatter);
        
        System.out.println("\\nFormatted date: " + formattedDate);
        System.out.println("Formatted time: " + formattedTime);
        System.out.println("Formatted date and time: " + formattedDateTime);
        
        // Parsing dates and times
        LocalDate parsedDate = LocalDate.parse("2023-06-15");
        LocalTime parsedTime = LocalTime.parse("13:45:30");
        LocalDateTime parsedDateTime = LocalDateTime.parse("2023-06-15T13:45:30");
        
        System.out.println("\\nParsed date: " + parsedDate);
        System.out.println("Parsed time: " + parsedTime);
        System.out.println("Parsed date and time: " + parsedDateTime);
        
        // Parsing with custom formatter
        DateTimeFormatter customFormatter = DateTimeFormatter.ofPattern("MM-dd-yyyy");
        LocalDate customParsedDate = LocalDate.parse("06-15-2023", customFormatter);
        System.out.println("Custom parsed date: " + customParsedDate);
        
        // Working with time zones
        ZoneId newYorkZone = ZoneId.of("America/New_York");
        ZoneId tokyoZone = ZoneId.of("Asia/Tokyo");
        
        ZonedDateTime newYorkTime = ZonedDateTime.now(newYorkZone);
        ZonedDateTime tokyoTime = ZonedDateTime.now(tokyoZone);
        
        System.out.println("\\nCurrent time in New York: " + newYorkTime);
        System.out.println("Current time in Tokyo: " + tokyoTime);
        
        // Converting between time zones
        ZonedDateTime nyToTokyo = newYorkTime.withZoneSameInstant(tokyoZone);
        System.out.println("New York time in Tokyo zone: " + nyToTokyo);
        
        // Getting day of week, month, etc.
        DayOfWeek dayOfWeek = today.getDayOfWeek();
        int dayOfMonth = today.getDayOfMonth();
        Month month = today.getMonth();
        int year = today.getYear();
        
        System.out.println("\\nDay of week: " + dayOfWeek);
        System.out.println("Day of month: " + dayOfMonth);
        System.out.println("Month: " + month);
        System.out.println("Year: " + year);
        
        // Date adjusters
        LocalDate firstDayOfMonth = today.with(TemporalAdjusters.firstDayOfMonth());
        LocalDate lastDayOfMonth = today.with(TemporalAdjusters.lastDayOfMonth());
        LocalDate nextMonday = today.with(TemporalAdjusters.next(DayOfWeek.MONDAY));
        
        System.out.println("\\nFirst day of month: " + firstDayOfMonth);
        System.out.println("Last day of month: " + lastDayOfMonth);
        System.out.println("Next Monday: " + nextMonday);
    }
}`,
              explanation: "This example demonstrates the modern Date-Time API in Java, introduced in Java 8. It covers working with LocalDate, LocalTime, LocalDateTime, and ZonedDateTime for representing dates and times with or without time zones. The example shows how to perform date and time arithmetic, compare dates and times, calculate periods and durations, format and parse dates and times, work with time zones, extract components like day of week or month, and use temporal adjusters for advanced date manipulation. The Date-Time API is immutable, thread-safe, and more comprehensive than the legacy Date and Calendar classes."
            }
          ],
          quiz: [
            {
              question: "Which class should you use to represent a date without time or time zone information?",
              options: ["ZonedDateTime", "LocalDateTime", "LocalDate", "LocalTime"],
              correctAnswer: 2,
              explanation: "LocalDate is the appropriate class to represent a date without time or time zone information in Java's Date-Time API. It represents a date in the ISO-8601 calendar system (year-month-day) without time components. Use LocalDateTime for date and time without a time zone, ZonedDateTime for date and time with a time zone, and LocalTime for time without date components."
            }
          ],
          flashcards: [
            {
              front: "Why was the new Date-Time API introduced in Java 8?",
              back: "The new Date-Time API was introduced in Java 8 to address limitations of the previous Date and Calendar classes:\n\n- Legacy classes were mutable and not thread-safe\n- API design was inconsistent and difficult to use\n- Limited functionality required third-party libraries (like Joda-Time)\n- Poor timezone support\n- Error-prone date calculations\n\nThe new API (java.time) provides immutable classes, comprehensive functionality, better performance, and follows consistent design principles."
            },
            {
              front: "What is the difference between Period and Duration in Java's Date-Time API?",
              back: "Period represents a date-based amount of time in years, months, and days. It works with LocalDate and is used for date-based intervals.\nExample: Period.of(1, 2, 3) // 1 year, 2 months, 3 days\n\nDuration represents a time-based amount of time in seconds and nanoseconds. It works with time-based classes like LocalTime and LocalDateTime and is used for time-based intervals.\nExample: Duration.ofHours(2) // 2 hours\n\nUse Period for calendar calculations (like age) and Duration for exact time measurements."
            }
          ]
        },
        {
          id: "java-nio",
          title: "Java NIO (New I/O)",
          description: "Using Java's NIO for scalable I/O operations",
          content: `
# Java NIO (New I/O)

Java NIO (New I/O) is a collection of APIs that provide features for efficient I/O operations, including non-blocking I/O, buffers, channels, and selectors.
          `,
          codeExamples: [
            {
              title: "Using Java NIO",
              code: `import java.io.IOException;
import java.nio.ByteBuffer;
import java.nio.channels.*;
import java.nio.charset.StandardCharsets;
import java.nio.file.*;
import java.util.List;
import java.util.Set;
import java.util.concurrent.TimeUnit;

public class NIOExample {
    public static void main(String[] args) {
        try {
            // Working with Path and Files
            pathAndFilesExample();
            
            // Working with Buffers and Channels
            bufferAndChannelExample();
            
            // Directory operations
            directoryExample();
            
            // Watch Service for directory changes
            watchServiceExample();
            
            // Non-blocking I/O (simplified simulation)
            nonBlockingIOExample();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
    
    // Example of Path and Files operations
    private static void pathAndFilesExample() throws IOException {
        System.out.println("=== Path and Files Example ===");
        
        // Create Path instance
        Path path = Paths.get("example.txt");
        System.out.println("Path: " + path);
        System.out.println("Absolute path: " + path.toAbsolutePath());
        System.out.println("File name: " + path.getFileName());
        System.out.println("Parent: " + path.getParent());
        
        // Creating files
        if (!Files.exists(path)) {
            Files.createFile(path);
            System.out.println("File created: " + path);
        }
        
        // Writing to a file
        Files.write(path, "Hello, NIO World!\\nThis is a test file.".getBytes());
        System.out.println("Data written to file");
        
        // Reading from a file
        List<String> lines = Files.readAllLines(path, StandardCharsets.UTF_8);
        System.out.println("File contents:");
        for (String line : lines) {
            System.out.println(line);
        }
        
        // File attributes
        System.out.println("\\nFile attributes:");
        System.out.println("Size: " + Files.size(path) + " bytes");
        System.out.println("Last modified: " + Files.getLastModifiedTime(path));
        System.out.println("Is readable: " + Files.isReadable(path));
        System.out.println("Is writable: " + Files.isWritable(path));
        
        // Copy, move, and delete files
        Path copy = Paths.get("example_copy.txt");
        Files.copy(path, copy, StandardCopyOption.REPLACE_EXISTING);
        System.out.println("\\nFile copied to: " + copy);
        
        Path move = Paths.get("example_moved.txt");
        Files.move(copy, move, StandardCopyOption.REPLACE_EXISTING);
        System.out.println("File moved to: " + move);
        
        // Clean up
        Files.delete(path);
        Files.delete(move);
        System.out.println("Files cleaned up");
    }
    
    // Example of Buffer and Channel operations
    private static void bufferAndChannelExample() throws IOException {
        System.out.println("\\n=== Buffer and Channel Example ===");
        
        // Create a file
        Path path = Paths.get("channel_example.txt");
        
        // Writing with a channel
        try (FileChannel channel = FileChannel.open(path, 
                StandardOpenOption.CREATE, StandardOpenOption.WRITE)) {
            
            String text = "Hello, NIO Channels and Buffers!";
            ByteBuffer buffer = ByteBuffer.allocate(1024);
            
            buffer.put(text.getBytes());
            buffer.flip();  // Prepare for reading
            
            channel.write(buffer);
            System.out.println("Data written using channel");
        }
        
        // Reading with a channel
        try (FileChannel channel = FileChannel.open(path, StandardOpenOption.READ)) {
            ByteBuffer buffer = ByteBuffer.allocate(1024);
            
            int bytesRead = channel.read(buffer);
            
            buffer.flip();  // Prepare for reading from buffer
            
            byte[] bytes = new byte[bytesRead];
            buffer.get(bytes);
            
            String content = new String(bytes);
            System.out.println("Data read using channel: " + content);
        }
        
        // Buffer operations
        ByteBuffer buffer = ByteBuffer.allocate(10);
        System.out.println("\\nBuffer operations:");
        System.out.println("Capacity: " + buffer.capacity());
        System.out.println("Position: " + buffer.position());
        System.out.println("Limit: " + buffer.limit());
        
        // Fill the buffer
        buffer.put((byte) 1);
        buffer.put((byte) 2);
        buffer.put((byte) 3);
        System.out.println("\\nAfter putting elements:");
        System.out.println("Position: " + buffer.position());
        
        // Flip to switch from writing to reading
        buffer.flip();
        System.out.println("\\nAfter flip:");
        System.out.println("Position: " + buffer.position());
        System.out.println("Limit: " + buffer.limit());
        
        // Read from buffer
        System.out.println("\\nReading from buffer:");
        while (buffer.hasRemaining()) {
            System.out.println(buffer.get());
        }
        
        // Clean up
        Files.deleteIfExists(path);
    }
    
    // Example of directory operations
    private static void directoryExample() throws IOException {
        System.out.println("\\n=== Directory Example ===");
        
        // Create directory
        Path dirPath = Paths.get("nio_test_dir");
        if (!Files.exists(dirPath)) {
            Files.createDirectory(dirPath);
            System.out.println("Directory created: " + dirPath);
        }
        
        // Create some files in the directory
        for (int i = 1; i <= 3; i++) {
            Path filePath = dirPath.resolve("file" + i + ".txt");
            Files.write(filePath, ("Content of file " + i).getBytes());
        }
        
        // List directory contents
        System.out.println("\\nDirectory contents:");
        try (DirectoryStream<Path> stream = Files.newDirectoryStream(dirPath)) {
            for (Path entry : stream) {
                System.out.println(entry.getFileName());
            }
        }
        
        // Search for files with pattern
        System.out.println("\\nFiles matching pattern '*.txt':");
        try (DirectoryStream<Path> stream = Files.newDirectoryStream(dirPath, "*.txt")) {
            for (Path entry : stream) {
                System.out.println(entry.getFileName());
            }
        }
        
        // Walk directory tree (recursively)
        System.out.println("\\nWalking directory tree:");
        Files.walkFileTree(dirPath, new SimpleFileVisitor<Path>() {
            @Override
            public FileVisitResult visitFile(Path file, BasicFileAttributes attrs) {
                System.out.println("File: " + file);
                return FileVisitResult.CONTINUE;
            }
            
            @Override
            public FileVisitResult postVisitDirectory(Path dir, IOException exc) {
                System.out.println("Directory: " + dir);
                return FileVisitResult.CONTINUE;
            }
        });
        
        // Clean up
        System.out.println("\\nCleaning up directory...");
        try (DirectoryStream<Path> stream = Files.newDirectoryStream(dirPath)) {
            for (Path entry : stream) {
                Files.delete(entry);
            }
        }
        Files.delete(dirPath);
        System.out.println("Directory and files cleaned up");
    }
    
    // Example of WatchService for monitoring directory changes
    private static void watchServiceExample() throws IOException, InterruptedException {
        System.out.println("\\n=== Watch Service Example ===");
        
        // Create directory to watch
        Path dirPath = Paths.get("watch_dir");
        if (!Files.exists(dirPath)) {
            Files.createDirectory(dirPath);
            System.out.println("Directory created: " + dirPath);
        }
        
        // Create a WatchService
        WatchService watchService = FileSystems.getDefault().newWatchService();
        
        // Register events to watch
        dirPath.register(watchService, 
                StandardWatchEventKinds.ENTRY_CREATE,
                StandardWatchEventKinds.ENTRY_MODIFY,
                StandardWatchEventKinds.ENTRY_DELETE);
        
        System.out.println("Watch service registered for directory: " + dirPath);
        
        // Create a separate thread to generate file events
        Thread eventGenerator = new Thread(() -> {
            try {
                // Wait a bit to let the watch service start
                Thread.sleep(500);
                
                // Create a file
                Path filePath = dirPath.resolve("watched_file.txt");
                Files.write(filePath, "Initial content".getBytes());
                System.out.println("Created file: " + filePath);
                
                // Modify the file
                Thread.sleep(500);
                Files.write(filePath, "Modified content".getBytes(), StandardOpenOption.TRUNCATE_EXISTING);
                System.out.println("Modified file: " + filePath);
                
                // Delete the file
                Thread.sleep(500);
                Files.delete(filePath);
                System.out.println("Deleted file: " + filePath);
            } catch (Exception e) {
                e.printStackTrace();
            }
        });
        eventGenerator.start();
        
        // Poll for events
        System.out.println("\\nWatching for events (for 3 seconds)...");
        
        WatchKey key;
        // Poll with timeout to get events for a few seconds, then exit
        try {
            long endTime = System.currentTimeMillis() + 3000; // 3 seconds
            
            while (System.currentTimeMillis() < endTime) {
                key = watchService.poll(500, TimeUnit.MILLISECONDS);
                
                if (key == null) {
                    continue;
                }
                
                for (WatchEvent<?> event : key.pollEvents()) {
                    WatchEvent.Kind<?> kind = event.kind();
                    
                    if (kind == StandardWatchEventKinds.OVERFLOW) {
                        continue;
                    }
                    
                    WatchEvent<Path> pathEvent = (WatchEvent<Path>) event;
                    Path fileName = pathEvent.context();
                    
                    System.out.println("Event: " + kind.name() + " for file: " + fileName);
                }
                
                // Reset the key to receive further events
                boolean valid = key.reset();
                if (!valid) {
                    break;
                }
            }
        } finally {
            // Close the watch service
            watchService.close();
        }
        
        // Clean up
        Files.deleteIfExists(dirPath);
        System.out.println("Watch directory cleaned up");
    }
    
    // Simplified example of non-blocking I/O
    private static void nonBlockingIOExample() throws IOException, InterruptedException {
        System.out.println("\\n=== Non-blocking I/O Example (Simulation) ===");
        
        // Create a selector
        try (Selector selector = Selector.open()) {
            // In a real application, we would register real channels with the selector
            // For demonstration, we'll simulate channel events
            
            System.out.println("Selector created");
            System.out.println("In a real application, channels would be registered with the selector");
            System.out.println("and non-blocking I/O operations would be performed.");
            
            // Simplified explanation of non-blocking I/O concepts
            System.out.println("\\nNon-blocking I/O key concepts:");
            System.out.println("1. Selector - Multiplexes multiple SelectableChannel objects");
            System.out.println("2. SelectableChannel - Channel that can be registered with a Selector");
            System.out.println("3. SelectionKey - Represents a registration of a channel with a selector");
            System.out.println("4. Non-blocking mode - Channels operate without blocking the thread");
            
            System.out.println("\\nExample use cases:");
            System.out.println("- Network servers handling many clients");
            System.out.println("- High-performance I/O operations");
            System.out.println("- Applications requiring high scalability");
        }
    }
}`,
              explanation: "This example demonstrates Java NIO (New I/O), a collection of APIs for efficient I/O operations. It covers Path and Files for file system operations, ByteBuffer and FileChannel for buffer-oriented I/O, DirectoryStream for directory operations, WatchService for monitoring file system changes, and a simplified explanation of non-blocking I/O with Selector. The example shows the benefits of NIO over traditional I/O, including more efficient buffer management, channel-based I/O, improved file system access, and non-blocking operations for better scalability."
            }
          ],
          quiz: [
            {
              question: "What is the main advantage of using non-blocking I/O with Java NIO?",
              options: ["It uses less memory than traditional I/O", "It performs I/O operations faster on a single file", "It allows a single thread to handle multiple I/O operations concurrently", "It provides automatic encryption of data"],
              correctAnswer: 2,
              explanation: "The main advantage of non-blocking I/O in Java NIO is that it allows a single thread to handle multiple I/O operations concurrently. In traditional blocking I/O, a thread would block (wait) while performing an I/O operation. With non-blocking I/O, a thread can initiate an I/O operation and then move on to other tasks, checking back later to see if the operation has completed. This pattern, combined with Selectors, enables applications to handle thousands of concurrent connections with a small number of threads, making it ideal for high-scalability systems like network servers."
            }
          ],
          flashcards: [
            {
              front: "What are the three main components of Java NIO?",
              back: "The three main components of Java NIO are:\n\n1. Buffers: Memory blocks that store data being transferred in I/O operations. Key classes include ByteBuffer, CharBuffer, etc.\n\n2. Channels: Medium for data transportation to and from buffers. Examples include FileChannel, SocketChannel, ServerSocketChannel.\n\n3. Selectors: Allow a single thread to monitor multiple channels for I/O events like read-ready, write-ready. Used for non-blocking I/O operations."
            },
            {
              front: "What is the difference between Java IO and Java NIO?",
              back: "Differences between Java IO and Java NIO:\n\nJava IO:\n- Stream-oriented: data is read one or more bytes at a time\n- Blocking operations: threads wait for I/O completion\n- Simple to use and understand\n- Buffer management done by the IO system\n\nJava NIO:\n- Buffer-oriented: data is read into buffers for processing\n- Non-blocking operations available: threads can do other work while I/O progresses\n- More complex API but offers more control\n- Memory mapped files available for large files\n- Direct control over buffer allocation and management\n- Selectors for multiplexed I/O operations"
            }
          ]
        },
        {
          id: "java-jdbc",
          title: "JDBC (Java Database Connectivity)",
          description: "Connecting to databases using JDBC",
          content: `
# JDBC (Java Database Connectivity)

JDBC is a Java API for connecting to databases and executing SQL queries, updates, and stored procedures.
          `,
          codeExamples: [
            {
              title: "Basic JDBC Operations",
              code: `import java.sql.*;
import java.util.ArrayList;
import java.util.List;

// Simple model class for database records
class Employee {
    private int id;
    private String name;
    private String department;
    private double salary;
    
    public Employee(int id, String name, String department, double salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary;
    }
    
    // Getters and setters
    public int getId() { return id; }
    public String getName() { return name; }
    public String getDepartment() { return department; }
    public double getSalary() { return salary; }
    
    @Override
    public String toString() {
        return "Employee{id=" + id + ", name='" + name + "', department='" + 
               department + "', salary=" + salary + "}";
    }
}

public class JDBCExample {
    
    // JDBC connection parameters (configure these for your database)
    private static final String JDBC_URL = "jdbc:mysql://localhost:3306/employees_db";
    private static final String USERNAME = "root";
    private static final String PASSWORD = "password";
    
    // SQL statements
    private static final String CREATE_TABLE_SQL = 
        "CREATE TABLE IF NOT EXISTS employees (" +
        "id INT PRIMARY KEY AUTO_INCREMENT, " +
        "name VARCHAR(100) NOT NULL, " +
        "department VARCHAR(100) NOT NULL, " +
        "salary DOUBLE NOT NULL)";
    
    private static final String INSERT_SQL = 
        "INSERT INTO employees (name, department, salary) VALUES (?, ?, ?)";
    
    private static final String SELECT_ALL_SQL = 
        "SELECT * FROM employees";
    
    private static final String SELECT_BY_ID_SQL = 
        "SELECT * FROM employees WHERE id = ?";
    
    private static final String UPDATE_SQL = 
        "UPDATE employees SET name = ?, department = ?, salary = ? WHERE id = ?";
    
    private static final String DELETE_SQL = 
        "DELETE FROM employees WHERE id = ?";
    
    private static final String SELECT_BY_DEPARTMENT_SQL = 
        "SELECT * FROM employees WHERE department = ?";
    
    private static final String COUNT_EMPLOYEES_SQL = 
        "SELECT COUNT(*) FROM employees";
    
    public static void main(String[] args) {
        try {
            // Load the JDBC driver (may not be required with modern JDBC drivers)
            Class.forName("com.mysql.cj.jdbc.Driver");
            
            System.out.println("JDBC Example - Database Operations");
            
            // Create database table if it doesn't exist
            createTable();
            
            // Insert sample data
            int employee1Id = insertEmployee(new Employee(0, "John Doe", "Engineering", 75000));
            int employee2Id = insertEmployee(new Employee(0, "Jane Smith", "Marketing", 65000));
            int employee3Id = insertEmployee(new Employee(0, "Alice Johnson", "Engineering", 80000));
            
            System.out.println("Inserted employees with IDs: " + employee1Id + ", " + 
                             employee2Id + ", " + employee3Id);
            
            // Retrieve all employees
            System.out.println("\\nAll Employees:");
            List<Employee> allEmployees = getAllEmployees();
            for (Employee employee : allEmployees) {
                System.out.println(employee);
            }
            
            // Retrieve a single employee
            System.out.println("\\nEmployee with ID " + employee1Id + ":");
            Employee singleEmployee = getEmployeeById(employee1Id);
            if (singleEmployee != null) {
                System.out.println(singleEmployee);
            } else {
                System.out.println("Employee not found");
            }
            
            // Update an employee
            singleEmployee.setSalary(80000);
            updateEmployee(singleEmployee);
            System.out.println("\\nAfter update, employee with ID " + employee1Id + ":");
            System.out.println(getEmployeeById(employee1Id));
            
            // Find employees by department
            System.out.println("\\nEmployees in Engineering department:");
            List<Employee> engineeringEmployees = getEmployeesByDepartment("Engineering");
            for (Employee employee : engineeringEmployees) {
                System.out.println(employee);
            }
            
            // Count employees
            int count = countEmployees();
            System.out.println("\\nTotal number of employees: " + count);
            
            // Delete an employee
            deleteEmployee(employee2Id);
            System.out.println("\\nDeleted employee with ID " + employee2Id);
            
            // Verify deletion
            System.out.println("\\nAll Employees after deletion:");
            allEmployees = getAllEmployees();
            for (Employee employee : allEmployees) {
                System.out.println(employee);
            }
            
            // Transaction example
            System.out.println("\\nTransaction Example:");
            transactionExample();
            
            // Batch processing example
            System.out.println("\\nBatch Processing Example:");
            batchProcessingExample();
            
            // Metadata example
            System.out.println("\\nMetadata Example:");
            showDatabaseMetadata();
            
        } catch (ClassNotFoundException e) {
            System.err.println("JDBC Driver not found: " + e.getMessage());
        } catch (SQLException e) {
            System.err.println("Database error: " + e.getMessage());
            e.printStackTrace();
        }
    }
    
    // Create the employees table if it doesn't exist
    private static void createTable() throws SQLException {
        try (Connection conn = DriverManager.getConnection(JDBC_URL, USERNAME, PASSWORD);
             Statement stmt = conn.createStatement()) {
            
            stmt.executeUpdate(CREATE_TABLE_SQL);
            System.out.println("Table created or already exists");
        }
    }
    
    // Insert a new employee and return the generated ID
    private static int insertEmployee(Employee employee) throws SQLException {
        try (Connection conn = DriverManager.getConnection(JDBC_URL, USERNAME, PASSWORD);
             PreparedStatement pstmt = conn.prepareStatement(INSERT_SQL, Statement.RETURN_GENERATED_KEYS)) {
            
            pstmt.setString(1, employee.getName());
            pstmt.setString(2, employee.getDepartment());
            pstmt.setDouble(3, employee.getSalary());
            
            int affectedRows = pstmt.executeUpdate();
            
            if (affectedRows == 0) {
                throw new SQLException("Creating employee failed, no rows affected.");
            }
            
            try (ResultSet generatedKeys = pstmt.getGeneratedKeys()) {
                if (generatedKeys.next()) {
                    return generatedKeys.getInt(1);
                } else {
                    throw new SQLException("Creating employee failed, no ID obtained.");
                }
            }
        }
    }
    
    // Retrieve all employees
    private static List<Employee> getAllEmployees() throws SQLException {
        List<Employee> employees = new ArrayList<>();
        
        try (Connection conn = DriverManager.getConnection(JDBC_URL, USERNAME, PASSWORD);
             Statement stmt = conn.createStatement();
             ResultSet rs = stmt.executeQuery(SELECT_ALL_SQL)) {
            
            while (rs.next()) {
                Employee employee = new Employee(
                    rs.getInt("id"),
                    rs.getString("name"),
                    rs.getString("department"),
                    rs.getDouble("salary")
                );
                employees.add(employee);
            }
        }
        
        return employees;
    }
    
    // Retrieve a single employee by ID
    private static Employee getEmployeeById(int id) throws SQLException {
        try (Connection conn = DriverManager.getConnection(JDBC_URL, USERNAME, PASSWORD);
             PreparedStatement pstmt = conn.prepareStatement(SELECT_BY_ID_SQL)) {
            
            pstmt.setInt(1, id);
            
            try (ResultSet rs = pstmt.executeQuery()) {
                if (rs.next()) {
                    return new Employee(
                        rs.getInt("id"),
                        rs.getString("name"),
                        rs.getString("department"),
                        rs.getDouble("salary")
                    );
                } else {
                    return null;  // Employee not found
                }
            }
        }
    }
    
    // Update an existing employee
    private static void updateEmployee(Employee employee) throws SQLException {
        try (Connection conn = DriverManager.getConnection(JDBC_URL, USERNAME, PASSWORD);
             PreparedStatement pstmt = conn.prepareStatement(UPDATE_SQL)) {
            
            pstmt.setString(1, employee.getName());
            pstmt.setString(2, employee.getDepartment());
            pstmt.setDouble(3, employee.getSalary());
            pstmt.setInt(4, employee.getId());
            
            int affectedRows = pstmt.executeUpdate();
            
            if (affectedRows == 0) {
                throw new SQLException("Updating employee failed, no rows affected.");
            }
        }
    }
    
    // Delete an employee by ID
    private static void deleteEmployee(int id) throws SQLException {
        try (Connection conn = DriverManager.getConnection(JDBC_URL, USERNAME, PASSWORD);
             PreparedStatement pstmt = conn.prepareStatement(DELETE_SQL)) {
            
            pstmt.setInt(1, id);
            
            pstmt.executeUpdate();
        }
    }
    
    // Find employees by department
    private static List<Employee> getEmployeesByDepartment(String department) throws SQLException {
        List<Employee> employees = new ArrayList<>();
        
        try (Connection conn = DriverManager.getConnection(JDBC_URL, USERNAME, PASSWORD);
             PreparedStatement pstmt = conn.prepareStatement(SELECT_BY_DEPARTMENT_SQL)) {
            
            pstmt.setString(1, department);
            
            try (ResultSet rs = pstmt.executeQuery()) {
                while (rs.next()) {
                    Employee employee = new Employee(
                        rs.getInt("id"),
                        rs.getString("name"),
                        rs.getString("department"),
                        rs.getDouble("salary")
                    );
                    employees.add(employee);
                }
            }
        }
        
        return employees;
    }
    
    // Count total number of employees
    private static int countEmployees() throws SQLException {
        try (Connection conn = DriverManager.getConnection(JDBC_URL, USERNAME, PASSWORD);
             Statement stmt = conn.createStatement();
             ResultSet rs = stmt.executeQuery(COUNT_EMPLOYEES_SQL)) {
            
            if (rs.next()) {
                return rs.getInt(1);
            } else {
                return 0;
            }
        }
    }
    
    // Transaction example
    private static void transactionExample() throws SQLException {
        Connection conn = null;
        try {
            conn = DriverManager.getConnection(JDBC_URL, USERNAME, PASSWORD);
            
            // Disable auto-commit to begin transaction
            conn.setAutoCommit(false);
            
            // First operation
            try (PreparedStatement pstmt1 = conn.prepareStatement(INSERT_SQL)) {
                pstmt1.setString(1, "Bob Williams");
                pstmt1.setString(2, "Finance");
                pstmt1.setDouble(3, 85000);
                pstmt1.executeUpdate();
            }
            
            // Second operation
            try (PreparedStatement pstmt2 = conn.prepareStatement(INSERT_SQL)) {
                pstmt2.setString(1, "Charlie Brown");
                pstmt2.setString(2, "HR");
                pstmt2.setDouble(3, 60000);
                pstmt2.executeUpdate();
            }
            
            // Commit the transaction
            conn.commit();
            System.out.println("Transaction committed successfully");
            
        } catch (SQLException e) {
            // If there's an error, rollback the transaction
            if (conn != null) {
                try {
                    conn.rollback();
                    System.out.println("Transaction rolled back");
                } catch (SQLException ex) {
                    ex.printStackTrace();
                }
            }
            throw e;
        } finally {
            // Restore auto-commit mode and close connection
            if (conn != null) {
                try {
                    conn.setAutoCommit(true);
                    conn.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }
        }
    }
    
    // Batch processing example
    private static void batchProcessingExample() throws SQLException {
        try (Connection conn = DriverManager.getConnection(JDBC_URL, USERNAME, PASSWORD);
             PreparedStatement pstmt = conn.prepareStatement(INSERT_SQL)) {
            
            // Create a batch of operations
            pstmt.setString(1, "David Wilson");
            pstmt.setString(2, "Sales");
            pstmt.setDouble(3, 70000);
            pstmt.addBatch();
            
            pstmt.setString(1, "Eva Martinez");
            pstmt.setString(2, "Engineering");
            pstmt.setDouble(3, 82000);
            pstmt.addBatch();
            
            pstmt.setString(1, "Frank Taylor");
            pstmt.setString(2, "Marketing");
            pstmt.setDouble(3, 68000);
            pstmt.addBatch();
            
            // Execute the batch
            int[] results = pstmt.executeBatch();
            
            System.out.println("Batch executed, " + results.length + " operations completed");
        }
    }
    
    // Database metadata example
    private static void showDatabaseMetadata() throws SQLException {
        try (Connection conn = DriverManager.getConnection(JDBC_URL, USERNAME, PASSWORD)) {
            DatabaseMetaData metaData = conn.getMetaData();
            
            System.out.println("Database Product Name: " + metaData.getDatabaseProductName());
            System.out.println("Database Product Version: " + metaData.getDatabaseProductVersion());
            System.out.println("JDBC Driver Name: " + metaData.getDriverName());
            System.out.println("JDBC Driver Version: " + metaData.getDriverVersion());
            
            System.out.println("\\nTables in the database:");
            ResultSet tables = metaData.getTables(null, null, "%", new String[]{"TABLE"});
            while (tables.next()) {
                System.out.println("  " + tables.getString("TABLE_NAME"));
            }
            
            System.out.println("\\nColumns in the employees table:");
            ResultSet columns = metaData.getColumns(null, null, "employees", null);
            while (columns.next()) {
                System.out.println("  " + columns.getString("COLUMN_NAME") + 
                                 " - " + columns.getString("TYPE_NAME"));
            }
        }
    }
}`,
              explanation: "This example demonstrates JDBC (Java Database Connectivity) for interacting with relational databases from Java applications. It covers essential database operations including creating tables, inserting, retrieving, updating, and deleting records. The example also shows more advanced techniques like transactions for ensuring data integrity, batch processing for improved performance, and accessing database metadata. It uses PreparedStatement for SQL injection prevention, ResultSet for handling query results, and implements best practices like resource management with try-with-resources and error handling. This provides a comprehensive overview of how to use JDBC for database operations in Java applications."
            }
          ],
          quiz: [
            {
              question: "What is the main advantage of using PreparedStatement over Statement in JDBC?",
              options: ["PreparedStatement is easier to use", "PreparedStatement prevents SQL injection attacks", "PreparedStatement automatically commits transactions", "PreparedStatement supports more database vendors"],
              correctAnswer: 1,
              explanation: "The main advantage of using PreparedStatement over Statement in JDBC is that PreparedStatement helps prevent SQL injection attacks. It precompiles the SQL statement with placeholders ('?') for parameters, and when you set these parameters using methods like setString(), setInt(), etc., the values are properly escaped or encoded. This prevents malicious SQL from being executed if user input contains special characters or SQL code. Additional benefits include better performance for repeated executions (due to precompilation) and easier parameter handling."
            }
          ],
          flashcards: [
            {
              front: "What are the main components of JDBC?",
              back: "The main components of JDBC are:\n\n1. JDBC Driver: Implements the JDBC API for a specific database (e.g., MySQL, Oracle)\n2. Connection: Represents a connection to a database\n3. Statement/PreparedStatement/CallableStatement: Used to execute SQL queries\n4. ResultSet: Contains the data returned from a query\n5. DatabaseMetaData: Provides information about the database\n6. ResultSetMetaData: Provides information about the columns in a ResultSet\n7. DriverManager: Manages JDBC drivers and creates connections"
            },
            {
              front: "What are the steps to connect to a database using JDBC?",
              back: "Steps to connect to a database using JDBC:\n\n1. Load the JDBC driver (Class.forName() - optional in modern JDBC)\n2. Establish a connection with the database (DriverManager.getConnection())\n3. Create a statement object (conn.createStatement() or conn.prepareStatement())\n4. Execute SQL queries (executeQuery(), executeUpdate(), or executeBatch())\n5. Process the results (iterate through ResultSet for queries)\n6. Close the connection and related resources (close() methods)\n\nModern practice is to use try-with-resources to ensure proper resource cleanup."
            }
          ]
        },
        {
          id: "java-serialization",
          title: "Serialization",
          description: "Saving and restoring objects with serialization",
          content: `
# Serialization in Java

Serialization is the process of converting an object into a stream of bytes for storage, transmission, or cloning, while deserialization is the reverse process.
          `,
          codeExamples: [
            {
              title: "Basic Serialization and Deserialization",
              code: `import java.io.*;
import java.util.*;

// Serializable class must implement the Serializable interface
class Person implements Serializable {
    // This serial version UID helps ensure compatibility across versions
    private static final long serialVersionUID = 1L;
    
    // Instance variables
    private String name;
    private int age;
    private String email;
    
    // Non-serializable field must be marked transient
    private transient String temporaryData;
    
    // Static fields are not serialized (they belong to the class, not the object)
    private static String organization = "Example Corp";
    
    public Person(String name, int age, String email) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.temporaryData = "This will not be serialized";
    }
    
    // Custom serialization method (optional)
    private void writeObject(ObjectOutputStream out) throws IOException {
        // Perform default serialization
        out.defaultWriteObject();
        
        // Add custom serialization logic if needed
        out.writeObject("Custom data: " + new Date());
    }
    
    // Custom deserialization method (optional)
    private void readObject(ObjectInputStream in) throws IOException, ClassNotFoundException {
        // Perform default deserialization
        in.defaultReadObject();
        
        // Read the custom data we wrote
        String customData = (String) in.readObject();
        System.out.println("Read custom data during deserialization: " + customData);
        
        // Initialize transient fields
        temporaryData = "Regenerated after deserialization";
    }
    
    // Getters and setters
    public String getName() { return name; }
    public int getAge() { return age; }
    public String getEmail() { return email; }
    public String getTemporaryData() { return temporaryData; }
    public static String getOrganization() { return organization; }
    
    public void setName(String name) { this.name = name; }
    public void setAge(int age) { this.age = age; }
    public void setEmail(String email) { this.email = email; }
    
    @Override
    public String toString() {
        return "Person{name='" + name + "', age=" + age + ", email='" + email + 
               "', temporaryData='" + temporaryData + "', organization='" + organization + "'}";
    }
}

// Class with a reference to another serializable class
class Employee implements Serializable {
    private static final long serialVersionUID = 1L;
    
    private Person personInfo;
    private String department;
    private double salary;
    
    public Employee(Person personInfo, String department, double salary) {
        this.personInfo = personInfo;
        this.department = department;
        this.salary = salary;
    }
    
    @Override
    public String toString() {
        return "Employee{personInfo=" + personInfo + ", department='" + 
               department + "', salary=" + salary + "}";
    }
}

// Class that demonstrates the Externalizable interface
class ExternalizableExample implements Externalizable {
    private String name;
    private int value;
    private List<String> items;
    
    // Required public no-arg constructor for Externalizable
    public ExternalizableExample() {
        // No-arg constructor is required for Externalizable
    }
    
    public ExternalizableExample(String name, int value, List<String> items) {
        this.name = name;
        this.value = value;
        this.items = items;
    }
    
    // Required method from Externalizable interface
    @Override
    public void writeExternal(ObjectOutput out) throws IOException {
        // Custom serialization - we control exactly what gets written
        out.writeUTF(name);
        out.writeInt(value);
        out.writeInt(items.size());
        for (String item : items) {
            out.writeUTF(item);
        }
    }
    
    // Required method from Externalizable interface
    @Override
    public void readExternal(ObjectInput in) throws IOException, ClassNotFoundException {
        // Custom deserialization - must read in same order as written
        name = in.readUTF();
        value = in.readInt();
        int size = in.readInt();
        items = new ArrayList<>(size);
        for (int i = 0; i < size; i++) {
            items.add(in.readUTF());
        }
    }
    
    @Override
    public String toString() {
        return "ExternalizableExample{name='" + name + "', value=" + value + 
               ", items=" + items + "}";
    }
}

public class SerializationExample {
    public static void main(String[] args) {
        // File paths for serialization
        String personFile = "person.ser";
        String employeeFile = "employee.ser";
        String externalizableFile = "externalizable.ser";
        
        try {
            // Basic serialization example
            System.out.println("=== Basic Serialization Example ===");
            
            // Create a Person object
            Person person = new Person("Alice Smith", 30, "alice@example.com");
            System.out.println("Original person object: " + person);
            
            // Serialize the object to a file
            serializeObject(person, personFile);
            System.out.println("Person object serialized to " + personFile);
            
            // Deserialize the object from the file
            Person deserializedPerson = (Person) deserializeObject(personFile);
            System.out.println("Deserialized person object: " + deserializedPerson);
            
            // Note that transient fields are not serialized
            System.out.println("Transient field after deserialization: " + 
                             deserializedPerson.getTemporaryData());
            
            // Object graph serialization (objects with references)
            System.out.println("\\n=== Object Graph Serialization ===");
            
            // Create an Employee object that contains a Person
            Employee employee = new Employee(
                new Person("Bob Johnson", 35, "bob@example.com"),
                "Engineering",
                85000.0
            );
            System.out.println("Original employee object: " + employee);
            
            // Serialize the Employee (which includes the Person)
            serializeObject(employee, employeeFile);
            System.out.println("Employee object serialized to " + employeeFile);
            
            // Deserialize the Employee
            Employee deserializedEmployee = (Employee) deserializeObject(employeeFile);
            System.out.println("Deserialized employee object: " + deserializedEmployee);
            
            // Externalizable example
            System.out.println("\\n=== Externalizable Example ===");
            
            // Create an Externalizable object
            ExternalizableExample externalizableObj = new ExternalizableExample(
                "Example",
                42,
                Arrays.asList("Item 1", "Item 2", "Item 3")
            );
            System.out.println("Original externalizable object: " + externalizableObj);
            
            // Serialize the Externalizable object
            serializeObject(externalizableObj, externalizableFile);
            System.out.println("Externalizable object serialized to " + externalizableFile);
            
            // Deserialize the Externalizable object
            ExternalizableExample deserializedExt = 
                (ExternalizableExample) deserializeObject(externalizableFile);
            System.out.println("Deserialized externalizable object: " + deserializedExt);
            
            // Serialization formats
            System.out.println("\\n=== Serialization Formats ===");
            
            // Standard Java serialization (binary)
            ByteArrayOutputStream bos = new ByteArrayOutputStream();
            ObjectOutputStream out = new ObjectOutputStream(bos);
            out.writeObject(person);
            out.close();
            byte[] binaryData = bos.toByteArray();
            System.out.println("Binary serialization size: " + binaryData.length + " bytes");
            
            // Clean up files
            cleanupFiles(personFile, employeeFile, externalizableFile);
            
        } catch (IOException | ClassNotFoundException e) {
            e.printStackTrace();
        }
    }
    
    // Helper method to serialize an object
    private static void serializeObject(Object obj, String filePath) throws IOException {
        try (FileOutputStream fos = new FileOutputStream(filePath);
             ObjectOutputStream out = new ObjectOutputStream(fos)) {
            
            out.writeObject(obj);
        }
    }
    
    // Helper method to deserialize an object
    private static Object deserializeObject(String filePath) 
            throws IOException, ClassNotFoundException {
        
        try (FileInputStream fis = new FileInputStream(filePath);
             ObjectInputStream in = new ObjectInputStream(fis)) {
            
            return in.readObject();
        }
    }
    
    // Helper method to clean up files
    private static void cleanupFiles(String... filePaths) {
        for (String filePath : filePaths) {
            File file = new File(filePath);
            if (file.exists()) {
                boolean deleted = file.delete();
                if (deleted) {
                    System.out.println("Cleaned up file: " + filePath);
                } else {
                    System.out.println("Failed to clean up file: " + filePath);
                }
            }
        }
    }
}`,
              explanation: "This example demonstrates serialization in Java, which is the process of converting objects into a byte stream for storage, transmission, or cloning. It covers basic serialization using the Serializable interface, custom serialization with writeObject/readObject methods, handling transient fields, serializing object graphs (objects that reference other objects), and using the Externalizable interface for complete control over the serialization process. The example also shows how to serialize and deserialize objects to and from files, highlighting important aspects like serial version UIDs for backward compatibility."
            }
          ],
          quiz: [
            {
              question: "What is the purpose of the 'transient' keyword in Java serialization?",
              options: ["To make a field serializable", "To prevent a field from being serialized", "To encrypt a field during serialization", "To compress a field during serialization"],
              correctAnswer: 1,
              explanation: "The 'transient' keyword in Java serialization is used to indicate that a field should not be serialized when the object is converted to a byte stream. Transient fields are skipped during serialization, and when an object is deserialized, those fields are initialized to their default values (null for objects, 0 for numbers, false for booleans). This is useful for fields that contain sensitive information, derived data that can be recalculated, or runtime-specific data like file handles or network connections that would be invalid after deserialization."
            }
          ],
          flashcards: [
            {
              front: "What is the difference between Serializable and Externalizable interfaces in Java?",
              back: "Serializable interface:\n- Marker interface with no methods to implement\n- Java handles serialization automatically\n- Uses default serialization mechanism\n- Can customize with private writeObject() and readObject() methods\n- Offers less control but easier to implement\n\nExternalizable interface:\n- Functional interface with writeExternal() and readExternal() methods\n- Developer has complete control over serialization process\n- Must manually write and read all fields\n- Potentially more efficient for complex objects\n- Requires a public no-arg constructor\n- More work but offers maximum flexibility and control"
            },
            {
              front: "What is serialVersionUID and why is it important?",
              back: "serialVersionUID is a static final long field used during deserialization to verify that the sender and receiver of a serialized object have loaded classes for that object that are compatible with respect to serialization.\n\nImportance:\n1. Version control: Helps manage class evolution across versions\n2. Compatibility: Ensures only compatible classes are deserialized\n3. Error prevention: Prevents InvalidClassException when class definitions change\n4. Security: Adds a validation step to deserialization\n\nIf not explicitly declared, Java generates one based on class structure, which can change when the class is modified, breaking compatibility with previously serialized objects."
            }
          ]
        },
        {
          id: "java-networking",
          title: "Networking",
          description: "Working with network connections in Java",
          content: `
# Networking in Java

Java provides comprehensive support for network programming, enabling applications to communicate over networks using various protocols.
          `,
          codeExamples: [
            {
              title: "Basic Networking Examples",
              code: `import java.io.*;
import java.net.*;
import java.nio.channels.*;
import java.nio.charset.StandardCharsets;
import java.util.*;
import java.util.concurrent.*;

public class NetworkingExample {
    public static void main(String[] args) {
        try {
            // URL and URLConnection example
            urlExample();
            
            // HTTP client example (Java 11+)
            // httpClientExample();  // Uncomment if running Java 11+
            
            // Simple HTTP server (background thread)
            startSimpleHttpServer();
            
            // TCP socket example (client/server)
            startSocketServer();
            runSocketClient();
            
            // UDP socket example
            startUdpServer();
            runUdpClient();
            
            // Non-blocking I/O with channels
            // startNioServer();  // More complex example - uncomment to try
            
            // IP address and network interface information
            networkInfoExample();
            
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
    
    // Example of working with URLs
    private static void urlExample() throws IOException {
        System.out.println("=== URL and URLConnection Example ===");
        
        // Create a URL object
        URL url = new URL("https://www.example.com");
        System.out.println("URL: " + url);
        
        // Decompose the URL
        System.out.println("Protocol: " + url.getProtocol());
        System.out.println("Host: " + url.getHost());
        System.out.println("Port: " + url.getPort());
        System.out.println("Default port: " + url.getDefaultPort());
        System.out.println("Path: " + url.getPath());
        
        // Connect to the URL and fetch content
        System.out.println("\\nFetching content from " + url + "...");
        URLConnection connection = url.openConnection();
        
        // Set request properties
        connection.setRequestProperty("User-Agent", "Java Networking Example");
        connection.setConnectTimeout(5000);  // 5 seconds
        connection.setReadTimeout(5000);     // 5 seconds
        
        // Get response properties
        connection.connect();
        System.out.println("Content Type: " + connection.getContentType());
        System.out.println("Content Length: " + connection.getContentLength());
        System.out.println("Last Modified: " + new Date(connection.getLastModified()));
        
        // Read the content (first few lines)
        try (BufferedReader reader = new BufferedReader(
                new InputStreamReader(connection.getInputStream()))) {
            
            System.out.println("\\nContent preview:");
            for (int i = 0; i < 5; i++) {
                String line = reader.readLine();
                if (line == null) break;
                System.out.println(line);
            }
            System.out.println("...");
        }
    }
    
    // Example of Java 11+ HTTP Client (uncomment if running Java 11+)
    /*
    private static void httpClientExample() throws IOException, InterruptedException {
        System.out.println("\\n=== Java 11+ HTTP Client Example ===");
        
        // Create an HTTP Client
        HttpClient client = HttpClient.newBuilder()
            .version(HttpClient.Version.HTTP_2)
            .followRedirects(HttpClient.Redirect.NORMAL)
            .connectTimeout(Duration.ofSeconds(10))
            .build();
        
        // Build a request
        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create("https://postman-echo.com/get?foo=bar"))
            .header("User-Agent", "Java HTTP Client")
            .GET()
            .build();
        
        // Send the request and get the response
        HttpResponse<String> response = client.send(request, 
            HttpResponse.BodyHandlers.ofString());
        
        // Process the response
        System.out.println("Status code: " + response.statusCode());
        System.out.println("Headers: " + response.headers());
        System.out.println("Body: " + response.body());
        
        // Asynchronous request example
        System.out.println("\\nSending asynchronous request...");
        client.sendAsync(request, HttpResponse.BodyHandlers.ofString())
            .thenApply(HttpResponse::body)
            .thenAccept(System.out::println)
            .join(); // Wait for completion
    }
    */
    
    // Example of a simple HTTP server using com.sun.net.httpserver
    private static void startSimpleHttpServer() throws IOException {
        System.out.println("\\n=== Simple HTTP Server Example ===");
        
        // Create an HTTP server on port 8000
        com.sun.net.httpserver.HttpServer server = 
            com.sun.net.httpserver.HttpServer.create(new InetSocketAddress(8000), 0);
        
        // Create a context for handling requests to the /example path
        server.createContext("/example", exchange -> {
            String response = "Hello from Java HTTP Server!";
            exchange.sendResponseHeaders(200, response.length());
            try (OutputStream os = exchange.getResponseBody()) {
                os.write(response.getBytes());
            }
        });
        
        // Start the server in a background thread
        server.setExecutor(Executors.newSingleThreadExecutor());
        server.start();
        
        System.out.println("HTTP Server started on port 8000. Try visiting http://localhost:8000/example");
        
        // Make a request to our own server to demonstrate
        System.out.println("Making a request to our server...");
        try {
            URL serverUrl = new URL("http://localhost:8000/example");
            HttpURLConnection conn = (HttpURLConnection) serverUrl.openConnection();
            conn.setRequestMethod("GET");
            
            try (BufferedReader reader = new BufferedReader(
                    new InputStreamReader(conn.getInputStream()))) {
                
                String line;
                StringBuilder response = new StringBuilder();
                while ((line = reader.readLine()) != null) {
                    response.append(line);
                }
                
                System.out.println("Response from server: " + response.toString());
            }
        } catch (IOException e) {
            System.out.println("Error connecting to server: " + e.getMessage());
        }
        
        // The server will continue running in the background
    }
    
    // Example of a TCP socket server
    private static void startSocketServer() {
        System.out.println("\\n=== TCP Socket Server Example ===");
        
        // Start the server in a separate thread
        new Thread(() -> {
            try (ServerSocket serverSocket = new ServerSocket(9000)) {
                System.out.println("TCP Server started on port 9000, waiting for client...");
                
                // Accept a connection from a client
                try (Socket clientSocket = serverSocket.accept();
                     PrintWriter out = new PrintWriter(clientSocket.getOutputStream(), true);
                     BufferedReader in = new BufferedReader(
                         new InputStreamReader(clientSocket.getInputStream()))) {
                    
                    System.out.println("Client connected from " + clientSocket.getInetAddress());
                    
                    // Read data from the client
                    String inputLine = in.readLine();
                    System.out.println("Server received: " + inputLine);
                    
                    // Send a response back to the client
                    out.println("Hello from server! You sent: " + inputLine);
                }
            } catch (IOException e) {
                System.err.println("Socket server error: " + e.getMessage());
            }
        }).start();
        
        // Give the server time to start
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
    }
    
    // Example of a TCP socket client
    private static void runSocketClient() {
        System.out.println("\\n=== TCP Socket Client Example ===");
        
        try (Socket socket = new Socket("localhost", 9000);
             PrintWriter out = new PrintWriter(socket.getOutputStream(), true);
             BufferedReader in = new BufferedReader(
                 new InputStreamReader(socket.getInputStream()))) {
            
            System.out.println("Connected to server at " + socket.getInetAddress() + ":" + socket.getPort());
            
            // Send a message to the server
            out.println("Hello from client!");
            
            // Read the server's response
            String response = in.readLine();
            System.out.println("Client received: " + response);
            
        } catch (IOException e) {
            System.err.println("Socket client error: " + e.getMessage());
        }
    }
    
    // Example of a UDP socket server (Datagram)
    private static void startUdpServer() {
        System.out.println("\\n=== UDP Socket Server Example ===");
        
        // Start the server in a separate thread
        new Thread(() -> {
            try (DatagramSocket socket = new DatagramSocket(9001)) {
                System.out.println("UDP Server started on port 9001, waiting for packet...");
                
                // Prepare to receive data
                byte[] buffer = new byte[1024];
                DatagramPacket packet = new DatagramPacket(buffer, buffer.length);
                
                // Receive a packet
                socket.receive(packet);
                
                // Process the packet
                String message = new String(packet.getData(), 0, packet.getLength());
                System.out.println("Server received: " + message);
                
                // Send a response
                String response = "Hello from UDP server! You sent: " + message;
                byte[] responseData = response.getBytes();
                
                DatagramPacket responsePacket = new DatagramPacket(
                    responseData, 
                    responseData.length, 
                    packet.getAddress(), 
                    packet.getPort()
                );
                
                socket.send(responsePacket);
                
            } catch (IOException e) {
                System.err.println("UDP server error: " + e.getMessage());
            }
        }).start();
        
        // Give the server time to start
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
    }
    
    // Example of a UDP socket client
    private static void runUdpClient() {
        System.out.println("\\n=== UDP Socket Client Example ===");
        
        try (DatagramSocket socket = new DatagramSocket()) {
            // Prepare the message to send
            String message = "Hello from UDP client!";
            byte[] data = message.getBytes();
            
            // Create a packet with the destination address and port
            InetAddress serverAddress = InetAddress.getByName("localhost");
            DatagramPacket packet = new DatagramPacket(data, data.length, serverAddress, 9001);
            
            // Send the packet
            socket.send(packet);
            
            // Prepare to receive the response
            byte[] buffer = new byte[1024];
            DatagramPacket responsePacket = new DatagramPacket(buffer, buffer.length);
            
            // Set timeout for receiving
            socket.setSoTimeout(5000);  // 5 seconds
            
            // Receive the response
            socket.receive(responsePacket);
            
            // Process the response
            String response = new String(
                responsePacket.getData(), 0, responsePacket.getLength());
            System.out.println("Client received: " + response);
            
        } catch (IOException e) {
            System.err.println("UDP client error: " + e.getMessage());
        }
    }
    
    // Example of a non-blocking I/O server using NIO Channels
    private static void startNioServer() {
        System.out.println("\\n=== NIO Server Example ===");
        
        // Start the server in a separate thread
        new Thread(() -> {
            try {
                // Create a selector
                Selector selector = Selector.open();
                
                // Create a non-blocking server socket channel
                ServerSocketChannel serverChannel = ServerSocketChannel.open();
                serverChannel.configureBlocking(false);
                serverChannel.socket().bind(new InetSocketAddress(9002));
                
                // Register the channel with the selector for accept operations
                serverChannel.register(selector, SelectionKey.OP_ACCEPT);
                
                System.out.println("NIO Server started on port 9002");
                
                while (true) {
                    // Wait for events
                    selector.select();
                    
                    // Get the selected keys
                    Iterator<SelectionKey> keyIterator = selector.selectedKeys().iterator();
                    
                    while (keyIterator.hasNext()) {
                        SelectionKey key = keyIterator.next();
                        keyIterator.remove();
                        
                        if (!key.isValid()) {
                            continue;
                        }
                        
                        // Handle different events
                        if (key.isAcceptable()) {
                            // Accept a new connection
                            ServerSocketChannel server = (ServerSocketChannel) key.channel();
                            SocketChannel client = server.accept();
                            client.configureBlocking(false);
                            
                            // Register for reading
                            client.register(selector, SelectionKey.OP_READ);
                            System.out.println("Accepted connection from " + client.getRemoteAddress());
                            
                        } else if (key.isReadable()) {
                            // Read data from a client
                            SocketChannel client = (SocketChannel) key.channel();
                            ByteBuffer buffer = ByteBuffer.allocate(1024);
                            
                            int bytesRead = client.read(buffer);
                            if (bytesRead > 0) {
                                buffer.flip();
                                String message = StandardCharsets.UTF_8.decode(buffer).toString();
                                System.out.println("NIO Server received: " + message);
                                
                                // Prepare response
                                ByteBuffer response = StandardCharsets.UTF_8.encode(
                                    "Hello from NIO server! You sent: " + message);
                                
                                // Write the response (in a real server, we would register for WRITE ops)
                                client.write(response);
                            } else if (bytesRead < 0) {
                                // Client closed the connection
                                client.close();
                            }
                        }
                    }
                }
                
            } catch (IOException e) {
                System.err.println("NIO server error: " + e.getMessage());
            }
        }).start();
        
        // Give the server time to start
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
        
        // Simple client to test the NIO server
        try (SocketChannel client = SocketChannel.open()) {
            client.connect(new InetSocketAddress("localhost", 9002));
            
            // Send a message
            ByteBuffer buffer = StandardCharsets.UTF_8.encode("Hello from NIO client!");
            client.write(buffer);
            
            // Read the response
            ByteBuffer responseBuffer = ByteBuffer.allocate(1024);
            client.read(responseBuffer);
            responseBuffer.flip();
            
            String response = StandardCharsets.UTF_8.decode(responseBuffer).toString();
            System.out.println("NIO Client received: " + response);
            
        } catch (IOException e) {
            System.err.println("NIO client error: " + e.getMessage());
        }
    }
    
    // Example of getting network information
    private static void networkInfoExample() throws SocketException {
        System.out.println("\\n=== Network Information Example ===");
        
        // Get local host information
        try {
            InetAddress localhost = InetAddress.getLocalHost();
            System.out.println("Local host name: " + localhost.getHostName());
            System.out.println("Local IP address: " + localhost.getHostAddress());
        } catch (UnknownHostException e) {
            System.err.println("Could not determine local host: " + e.getMessage());
        }
        
        // Get IP addresses for a domain
        try {
            String domain = "www.google.com";
            System.out.println("\\nIP addresses for " + domain + ":");
            
            InetAddress[] addresses = InetAddress.getAllByName(domain);
            for (InetAddress address : addresses) {
                System.out.println(address.getHostAddress());
            }
        } catch (UnknownHostException e) {
            System.err.println("Could not resolve domain: " + e.getMessage());
        }
        
        // Get network interfaces
        System.out.println("\\nNetwork interfaces:");
        Enumeration<NetworkInterface> interfaces = NetworkInterface.getNetworkInterfaces();
        
        while (interfaces.hasMoreElements()) {
            NetworkInterface nif = interfaces.nextElement();
            
            if (nif.isUp() && !nif.isLoopback()) {
                System.out.println("Interface: " + nif.getDisplayName());
                
                Enumeration<InetAddress> addresses = nif.getInetAddresses();
                while (addresses.hasMoreElements()) {
                    InetAddress address = addresses.nextElement();
                    System.out.println("  Address: " + address.getHostAddress());
                }
            }
        }
    }
}`,
              explanation: "This example demonstrates networking in Java, showcasing various techniques for network communication. It covers working with URLs and URLConnections for basic HTTP requests, a simple HTTP server using com.sun.net.httpserver, TCP socket programming with ServerSocket/Socket for reliable connection-oriented communication, UDP socket programming with DatagramSocket/DatagramPacket for connectionless communication, and retrieving network interface information. The example also includes a commented-out section for the modern HTTP Client API (Java 11+) and NIO (New I/O) for non-blocking network operations. These techniques enable Java applications to communicate over networks, accessing web resources, implementing client-server architectures, and building distributed systems."
            }
          ],
          quiz: [
            {
              question: "What is the main difference between TCP and UDP in Java networking?",
              options: ["TCP is faster than UDP", "UDP provides reliable data transfer while TCP doesn't", "TCP establishes a connection before data transfer while UDP doesn't", "UDP supports larger packet sizes than TCP"],
              correctAnswer: 2,
              explanation: "The main difference between TCP and UDP is that TCP (Transmission Control Protocol) establishes a connection between client and server before transferring data, ensuring reliable, ordered, and error-checked delivery of data. In Java, TCP is implemented using Socket and ServerSocket classes. In contrast, UDP (User Datagram Protocol) is connectionless and doesn't guarantee delivery, ordering, or error-checking. It's implemented using DatagramSocket and DatagramPacket classes. TCP is preferred for applications requiring reliability (like web browsers), while UDP is better for applications where speed is more important than reliability (like video streaming or online gaming)."
            }
          ],
          flashcards: [
            {
              front: "What are the main networking classes/interfaces in Java?",
              back: "Main networking classes/interfaces in Java:\n\n1. Low-level networking:\n   - Socket/ServerSocket: TCP connection-oriented communication\n   - DatagramSocket/DatagramPacket: UDP connectionless communication\n   - InetAddress: Represents IP addresses\n   - NetworkInterface: Represents network interfaces\n\n2. High-level APIs:\n   - URL/URLConnection: Access web resources\n   - HttpURLConnection: HTTP-specific features\n   - HttpClient (Java 11+): Modern HTTP client\n\n3. Non-blocking I/O:\n   - SocketChannel/ServerSocketChannel: Non-blocking sockets\n   - Selector: Multiplexed I/O operations\n\n4. Utility:\n   - URI: Represents a Uniform Resource Identifier"
            },
            {
              front: "What are the steps to implement a basic TCP server in Java?",
              back: "Steps to implement a basic TCP server in Java:\n\n1. Create a ServerSocket bound to a specific port:\n   ServerSocket serverSocket = new ServerSocket(port);\n\n2. Accept client connections (this blocks until a client connects):\n   Socket clientSocket = serverSocket.accept();\n\n3. Get input and output streams for communication:\n   InputStream in = clientSocket.getInputStream();\n   OutputStream out = clientSocket.getOutputStream();\n\n4. Process client requests using the streams\n\n5. Close the connection when done:\n   clientSocket.close();\n\n6. For multiple clients, either use multi-threading or NIO with a Selector"
            }
          ]
        },
        {
          id: "java-annotations",
          title: "Annotations",
          description: "Using and creating annotations in Java",
          content: `
# Annotations in Java

Annotations are a form of metadata that provide data about a program that is not part of the program itself. They can be used by the compiler, development tools, or at runtime through reflection.
          `,
          codeExamples: [
            {
              title: "Using and Creating Annotations",
              code: `import java.lang.annotation.*;
import java.lang.reflect.*;
import java.util.*;

// Built-in annotations

// Indicates that a method overrides a method in a superclass
class Animal {
    public void makeSound() {
        System.out.println("Animal makes a sound");
    }
}

class Dog extends Animal {
    @Override  // Built-in annotation
    public void makeSound() {
        System.out.println("Dog barks");
    }
}

// Indicates that a method or class is deprecated
class OldClass {
    @Deprecated  // Built-in annotation
    public void oldMethod() {
        System.out.println("This method is deprecated");
    }
    
    public void newMethod() {
        System.out.println("Use this method instead");
    }
}

// Suppresses compiler warnings
class Utilities {
    @SuppressWarnings("unchecked")  // Built-in annotation
    public static void printList(List list) {
        for (Object item : list) {
            System.out.println(item);
        }
    }
}

// Custom annotations

// Define a custom annotation
@Retention(RetentionPolicy.RUNTIME)  // Annotation is available at runtime
@Target(ElementType.METHOD)          // Annotation can only be applied to methods
@interface Test {
    String description() default "No description";
    boolean enabled() default true;
}

// Define annotation for class level
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.TYPE)
@interface ClassInfo {
    String author();
    String date();
    int version() default 1;
    String[] tags() default {};
}

// Define annotation for field level
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.FIELD)
@interface FieldInfo {
    String name();
    boolean required() default false;
}

// Define a repeatable annotation
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.METHOD)
@Repeatable(ScheduledTasks.class)
@interface ScheduledTask {
    String cron();
    String description() default "";
}

// Container annotation for repeatable annotations
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.METHOD)
@interface ScheduledTasks {
    ScheduledTask[] value();
}

// Class that uses custom annotations
@ClassInfo(
    author = "John Doe",
    date = "2023-01-15",
    version = 2,
    tags = {"example", "annotations"}
)
class AnnotatedClass {
    @FieldInfo(name = "username", required = true)
    private String username;
    
    @FieldInfo(name = "email")
    private String email;
    
    @Test(description = "Test the add method", enabled = true)
    public int add(int a, int b) {
        return a + b;
    }
    
    @Test(description = "Test the subtract method", enabled = false)
    public int subtract(int a, int b) {
        return a - b;
    }
    
    @ScheduledTask(cron = "0 0 12 * * ?", description = "Noon task")
    @ScheduledTask(cron = "0 0 0 * * ?", description = "Midnight task")
    public void scheduledMethod() {
        System.out.println("Running scheduled task");
    }
}

// Annotation processor
class TestRunner {
    public static void runTests(Class<?> testClass) {
        System.out.println("Running tests for " + testClass.getName());
        
        // Get class-level annotations
        if (testClass.isAnnotationPresent(ClassInfo.class)) {
            ClassInfo classInfo = testClass.getAnnotation(ClassInfo.class);
            System.out.println("Class info:");
            System.out.println("  Author: " + classInfo.author());
            System.out.println("  Date: " + classInfo.date());
            System.out.println("  Version: " + classInfo.version());
            System.out.println("  Tags: " + Arrays.toString(classInfo.tags()));
        }
        
        // Get field-level annotations
        System.out.println("\\nFields:");
        for (Field field : testClass.getDeclaredFields()) {
            if (field.isAnnotationPresent(FieldInfo.class)) {
                FieldInfo fieldInfo = field.getAnnotation(FieldInfo.class);
                System.out.println("  " + field.getName() + ":");
                System.out.println("    Name: " + fieldInfo.name());
                System.out.println("    Required: " + fieldInfo.required());
            }
        }
        
        // Get method-level annotations and run tests
        System.out.println("\\nMethods:");
        for (Method method : testClass.getDeclaredMethods()) {
            // Process @Test annotations
            if (method.isAnnotationPresent(Test.class)) {
                Test test = method.getAnnotation(Test.class);
                System.out.println("  " + method.getName() + ":");
                System.out.println("    Description: " + test.description());
                System.out.println("    Enabled: " + test.enabled());
                
                if (test.enabled()) {
                    try {
                        // Create an instance of the class
                        Object instance = testClass.getDeclaredConstructor().newInstance();
                        
                        // Check method parameters and invoke the method
                        if (method.getParameterCount() == 2 && 
                            method.getParameterTypes()[0] == int.class &&
                            method.getParameterTypes()[1] == int.class) {
                            
                            Object result = method.invoke(instance, 5, 3);
                            System.out.println("    Result: " + result);
                        } else {
                            method.invoke(instance);
                        }
                    } catch (Exception e) {
                        System.out.println("    Error running test: " + e.getMessage());
                    }
                } else {
                    System.out.println("    Test disabled, skipping execution");
                }
            }
            
            // Process @ScheduledTask annotations (repeatable)
            ScheduledTask[] tasks = method.getAnnotationsByType(ScheduledTask.class);
            if (tasks.length > 0) {
                System.out.println("  " + method.getName() + " scheduled tasks:");
                for (ScheduledTask task : tasks) {
                    System.out.println("    Cron: " + task.cron());
                    System.out.println("    Description: " + task.description());
                }
            }
        }
    }
}

public class AnnotationExample {
    public static void main(String[] args) {
        System.out.println("=== Annotation Example ===");
        
        // Using built-in annotations
        Dog dog = new Dog();
        dog.makeSound();
        
        OldClass oldClass = new OldClass();
        oldClass.oldMethod();  // This will give a deprecation warning during compilation
        
        List<String> names = new ArrayList<>();
        names.add("Alice");
        names.add("Bob");
        Utilities.printList(names);  // Without @SuppressWarnings, this would give an unchecked warning
        
        // Using custom annotations with reflection
        System.out.println("\\n=== Custom Annotations ===");
        TestRunner.runTests(AnnotatedClass.class);
    }
}`,
              explanation: "This example demonstrates both built-in and custom annotations in Java. It covers built-in annotations like @Override, @Deprecated, and @SuppressWarnings, and shows how to create custom annotations with various retention policies and targets. The example includes class-level, method-level, and field-level annotations, as well as repeatable annotations. It also demonstrates how to process annotations at runtime using reflection to extract metadata and execute specific behaviors based on the annotations. This reflects how annotations are used in frameworks like JUnit for testing, Spring for dependency injection, or JPA for object-relational mapping."
            }
          ],
          quiz: [
            {
              question: "What is the purpose of the @Retention annotation when creating custom annotations in Java?",
              options: ["To specify where the annotation can be applied", "To specify how long the annotation information should be retained", "To indicate that an annotation can be repeated multiple times", "To specify how the annotation should be processed"],
              correctAnswer: 1,
              explanation: "The @Retention annotation specifies how long the annotation information should be retained. It takes a RetentionPolicy enumeration value as its parameter, with three possible values: SOURCE (annotations are discarded by the compiler), CLASS (annotations are stored in the class file but not available at runtime), and RUNTIME (annotations are stored in the class file and available at runtime through reflection). For example, @Retention(RetentionPolicy.RUNTIME) indicates that the annotation should be available at runtime for processing via reflection."
            }
          ],
          flashcards: [
            {
              front: "What are the different types of built-in annotations in Java?",
              back: "Built-in annotations in Java:\n\n1. @Override: Indicates a method is overriding a method in a superclass\n2. @Deprecated: Marks a method or class as deprecated (shouldn't be used)\n3. @SuppressWarnings: Instructs compiler to suppress specific warnings\n4. @FunctionalInterface: Indicates an interface is a functional interface\n5. @SafeVarargs: Suppresses unchecked warnings for varargs parameters\n6. @Repeatable: Indicates an annotation can be applied multiple times\n7. Meta-annotations (for creating annotations):\n   - @Retention: Specifies how long annotations are retained\n   - @Target: Specifies where annotations can be applied\n   - @Documented: Indicates annotations should be included in Javadoc\n   - @Inherited: Indicates annotations are inherited by subclasses"
            },
            {
              front: "How are annotations processed in Java?",
              back: "Annotations in Java can be processed in three ways:\n\n1. Compile-time processing:\n   - By the compiler itself (e.g., @Override)\n   - By annotation processors using the Java Annotation Processing API\n   - Can generate code, validate code, or produce warnings/errors\n   - Example: Lombok generates boilerplate code\n\n2. Build-time processing:\n   - By build tools examining compiled class files\n   - Can generate additional resources or documentation\n   - Example: Generating XML configuration files\n\n3. Runtime processing:\n   - Using reflection to examine annotations at runtime\n   - Requires RetentionPolicy.RUNTIME\n   - Example: Spring framework uses annotations to configure beans"
            }
          ]
        },
        {
          id: "java-regex",
          title: "Regular Expressions",
          description: "Working with regular expressions in Java",
          content: `
# Regular Expressions in Java

Regular expressions provide a powerful way to perform pattern matching and text manipulation operations in Java.
          `,
          codeExamples: [
            {
              title: "Using Regular Expressions",
              code: `import java.util.regex.*;
import java.util.*;

public class RegexExample {
    public static void main(String[] args) {
        System.out.println("=== Regular Expressions in Java ===");
        
        // Basic pattern matching
        basicPatternMatching();
        
        // Finding multiple matches
        findAllMatches();
        
        // Replacing text using regex
        regexReplacement();
        
        // Splitting strings with regex
        regexSplitting();
        
        // Capturing groups
        capturingGroups();
        
        // Boundary matchers
        boundaryMatchers();
        
        // Character classes
        characterClasses();
        
        // Quantifiers
        quantifiers();
        
        // Email validation example
        validateEmails();
        
        // Pattern flags example
        patternFlags();
        
        // Common regex patterns
        commonPatterns();
    }
    
    // Example of basic pattern matching
    private static void basicPatternMatching() {
        System.out.println("\\n--- Basic Pattern Matching ---");
        
        // Simple pattern matching
        String text = "The quick brown fox jumps over the lazy dog";
        
        // Check if the text contains a word
        boolean containsFox = Pattern.matches(".*fox.*", text);
        System.out.println("Text contains 'fox': " + containsFox);
        
        // More efficient way to check for a pattern
        Pattern pattern = Pattern.compile("fox");
        Matcher matcher = pattern.matcher(text);
        boolean found = matcher.find();
        System.out.println("Found 'fox': " + found);
        
        // Get the position of the match
        matcher.reset();  // Reset the matcher to start from the beginning
        if (matcher.find()) {
            System.out.println("'fox' found at index " + matcher.start() + 
                             " to " + matcher.end());
        }
        
        // Check if the entire text matches a pattern
        boolean fullMatch = Pattern.matches("The.*dog", text);
        System.out.println("Full text matches pattern: " + fullMatch);
    }
    
    // Example of finding all matches in a text
    private static void findAllMatches() {
        System.out.println("\\n--- Finding All Matches ---");
        
        String text = "The rain in Spain falls mainly in the plain";
        
        // Find all occurrences of words containing 'ain'
        Pattern pattern = Pattern.compile("\\w*ain\\w*");
        Matcher matcher = pattern.matcher(text);
        
        System.out.println("Words containing 'ain':");
        while (matcher.find()) {
            System.out.println("  " + matcher.group() + 
                             " (at position " + matcher.start() + ")");
        }
    }
    
    // Example of replacing text using regex
    private static void regexReplacement() {
        System.out.println("\\n--- Regex Replacement ---");
        
        String text = "The quick brown fox jumps over the lazy dog";
        
        // Replace all occurrences of a pattern
        String result = text.replaceAll("\\s+", "-");
        System.out.println("Replace spaces with hyphens: " + result);
        
        // Replace first occurrence
        result = text.replaceFirst("\\w+", "A");
        System.out.println("Replace first word: " + result);
        
        // Using Matcher.replaceAll()
        Pattern pattern = Pattern.compile("\\b[a-z]{4}\\b");  // 4-letter words
        Matcher matcher = pattern.matcher(text);
        result = matcher.replaceAll("XXXX");
        System.out.println("Replace 4-letter words: " + result);
    }
    
    // Example of splitting strings with regex
    private static void regexSplitting() {
        System.out.println("\\n--- Regex Splitting ---");
        
        String text = "apple,banana;cherry|date,elderberry";
        
        // Split by any of the delimiters: comma, semicolon, or pipe
        String[] fruits = text.split("[,;|]");
        
        System.out.println("Fruits split by delimiters:");
        for (String fruit : fruits) {
            System.out.println("  " + fruit);
        }
        
        // Split with a limit
        String numbers = "1,2,3,4,5,6";
        String[] parts = numbers.split(",", 3);
        
        System.out.println("Split with limit 3:");
        for (String part : parts) {
            System.out.println("  " + part);
        }
    }
    
    // Example of capturing groups
    private static void capturingGroups() {
        System.out.println("\\n--- Capturing Groups ---");
        
        // Parse a date in format dd/mm/yyyy
        String dateText = "Order date: 23/04/2023";
        Pattern pattern = Pattern.compile("(\\d{2})/(\\d{2})/(\\d{4})");
        Matcher matcher = pattern.matcher(dateText);
        
        if (matcher.find()) {
            String day = matcher.group(1);
            String month = matcher.group(2);
            String year = matcher.group(3);
            
            System.out.println("Date components from " + matcher.group() + ":");
            System.out.println("  Day: " + day);
            System.out.println("  Month: " + month);
            System.out.println("  Year: " + year);
        }
        
        // Named capturing groups (Java 7+)
        pattern = Pattern.compile("(?<day>\\d{2})/(?<month>\\d{2})/(?<year>\\d{4})");
        matcher = pattern.matcher(dateText);
        
        if (matcher.find()) {
            String day = matcher.group("day");
            String month = matcher.group("month");
            String year = matcher.group("year");
            
            System.out.println("\\nDate components using named groups:");
            System.out.println("  Day: " + day);
            System.out.println("  Month: " + month);
            System.out.println("  Year: " + year);
        }
        
        // Back references
        String repeatedText = "hello hello world";
        pattern = Pattern.compile("(\\w+)\\s\\1");  // Match repeated word
        matcher = pattern.matcher(repeatedText);
        
        if (matcher.find()) {
            System.out.println("\\nRepeated word found: " + matcher.group(1));
        }
    }
    
    // Example of boundary matchers
    private static void boundaryMatchers() {
        System.out.println("\\n--- Boundary Matchers ---");
        
        String text = "The quick brown fox jumps over the lazy dog";
        
        // Word boundaries
        Pattern pattern = Pattern.compile("\\bfox\\b");  // Match "fox" as a complete word
        Matcher matcher = pattern.matcher(text);
        
        if (matcher.find()) {
            System.out.println("Found 'fox' as a complete word");
        }
        
        // Start and end of line
        pattern = Pattern.compile("^The.*dog$");  // Match line starting with "The" and ending with "dog"
        matcher = pattern.matcher(text);
        
        if (matcher.matches()) {
            System.out.println("Text starts with 'The' and ends with 'dog'");
        }
    }
    
    // Example of character classes
    private static void characterClasses() {
        System.out.println("\\n--- Character Classes ---");
        
        String text = "The year 2023 has 365 days, and February has 28 days.";
        
        // Find all digits
        Pattern pattern = Pattern.compile("\\d+");
        Matcher matcher = pattern.matcher(text);
        
        System.out.println("Numbers in the text:");
        while (matcher.find()) {
            System.out.println("  " + matcher.group());
        }
        
        // Find all words
        pattern = Pattern.compile("\\b[a-zA-Z]+\\b");
        matcher = pattern.matcher(text);
        
        System.out.println("\\nWords in the text:");
        List<String> words = new ArrayList<>();
        while (matcher.find()) {
            words.add(matcher.group());
        }
        System.out.println("  " + words);
    }
    
    // Example of quantifiers
    private static void quantifiers() {
        System.out.println("\\n--- Quantifiers ---");
        
        String text = "aaa b cc dddd eeeee";
        
        // Using different quantifiers
        System.out.println("Finding sequences of characters:");
        
        // Exactly 3 characters
        printMatches(text, "\\b\\w{3}\\b", "Exactly 3 characters");
        
        // 2 to 4 characters
        printMatches(text, "\\b\\w{2,4}\\b", "2 to 4 characters");
        
        // 3 or more characters
        printMatches(text, "\\b\\w{3,}\\b", "3 or more characters");
        
        // 0 or more characters (greedy)
        printMatches("ab123xyz", "a.*z", "0 or more characters (greedy)");
        
        // 0 or more characters (reluctant/non-greedy)
        printMatches("ab123xyz", "a.*?z", "0 or more characters (reluctant)");
    }
    
    // Helper method to print matches
    private static void printMatches(String text, String regex, String description) {
        Pattern pattern = Pattern.compile(regex);
        Matcher matcher = pattern.matcher(text);
        
        System.out.println("  " + description + ":");
        List<String> matches = new ArrayList<>();
        while (matcher.find()) {
            matches.add(matcher.group());
        }
        System.out.println("    " + matches);
    }
    
    // Example of validating email addresses
    private static void validateEmails() {
        System.out.println("\\n--- Email Validation ---");
        
        // A simplified email regex pattern
        // For production use, email validation is complex and often requires more sophisticated approaches
        String emailRegex = "^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$";
        Pattern pattern = Pattern.compile(emailRegex);
        
        String[] emails = {
            "user@example.com",
            "john.doe@company.co.uk",
            "invalid-email",
            "missing@domain",
            "@no-username.com",
            "user@.invalid",
            "user@domain.toolongtttt"
        };
        
        for (String email : emails) {
            Matcher matcher = pattern.matcher(email);
            System.out.println(email + " is " + (matcher.matches() ? "valid" : "invalid"));
        }
    }
    
    // Example of pattern flags
    private static void patternFlags() {
        System.out.println("\\n--- Pattern Flags ---");
        
        String text = "Java is a programming language. JAVA is case-sensitive.\\nJava has regular expressions.";
        
        // Case-insensitive matching
        Pattern pattern = Pattern.compile("java", Pattern.CASE_INSENSITIVE);
        Matcher matcher = pattern.matcher(text);
        
        System.out.println("Case-insensitive matches of 'java':");
        while (matcher.find()) {
            System.out.println("  " + matcher.group() + " at position " + matcher.start());
        }
        
        // Multiline mode - ^ and $ match at beginning/end of each line
        pattern = Pattern.compile("^java", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE);
        matcher = pattern.matcher(text);
        
        System.out.println("\\nLines starting with 'java' (multiline mode):");
        while (matcher.find()) {
            System.out.println("  " + matcher.group() + " at position " + matcher.start());
        }
    }
    
    // Example of common regex patterns
    private static void commonPatterns() {
        System.out.println("\\n--- Common Regex Patterns ---");
        
        Map<String, String> patterns = new LinkedHashMap<>();
        patterns.put("US Phone Number", "\\(\\d{3}\\) \\d{3}-\\d{4}");
        patterns.put("US Zip Code", "\\d{5}(-\\d{4})?");
        patterns.put("ISO Date", "\\d{4}-\\d{2}-\\d{2}");
        patterns.put("Time (24-hour)", "([01]\\d|2[0-3]):([0-5]\\d)");
        patterns.put("URL", "https?://[\\w.-]+\\.[\\w]+(/[\\w./]*)?");
        patterns.put("IP Address", "\\b(?:\\d{1,3}\\.){3}\\d{1,3}\\b");
        patterns.put("Credit Card", "\\b(?:\\d{4}[- ]){3}\\d{4}\\b");
        
        String text = "Contact: (555) 123-4567\\n" +
                     "Shipping to: 12345-6789\\n" +
                     "Order date: 2023-06-15\\n" +
                     "Delivery time: 14:30\\n" +
                     "Track order at: https://example.com/track/123456\\n" +
                     "Server IP: 192.168.1.1\\n" +
                     "Payment: 4111-1111-1111-1111";
        
        System.out.println("Sample text for pattern matching:\\n" + text);
        System.out.println("\\nMatching patterns:");
        
        for (Map.Entry<String, String> entry : patterns.entrySet()) {
            String name = entry.getKey();
            String regex = entry.getValue();
            
            Pattern pattern = Pattern.compile(regex);
            Matcher matcher = pattern.matcher(text);
            
            List<String> matches = new ArrayList<>();
            while (matcher.find()) {
                matches.add(matcher.group());
            }
            
            System.out.println("  " + name + ": " + matches);
        }
    }
}`,
              explanation: "This example demonstrates regular expressions in Java, showing various regex techniques for pattern matching, text manipulation, and validation. It covers basic pattern matching, finding all matches in a text, replacing text using regex, splitting strings, capturing groups (including named groups), boundary matchers, character classes, quantifiers, and pattern flags. The example includes practical applications like email validation and matching common patterns such as phone numbers, zip codes, dates, and URLs. Regular expressions provide a powerful way to work with text in Java, enabling complex pattern matching and text processing operations with concise code."
            }
          ],
          quiz: [
            {
              question: "Which class is the main engine for regular expression pattern matching in Java?",
              options: ["Regex", "Pattern", "RegexMatcher", "StringMatcher"],
              correctAnswer: 1,
              explanation: "The Pattern class is the main engine for regular expression pattern matching in Java. You typically use it by first compiling a regular expression string into a Pattern object using Pattern.compile(regexString), and then creating a Matcher object from the Pattern using pattern.matcher(textToSearch). The Matcher provides methods like find(), matches(), and group() to work with the pattern matches within the text. This two-step approach is more efficient than single-use methods like String.matches() when the same pattern is used multiple times."
            }
          ],
          flashcards: [
            {
              front: "What are the main metacharacters in Java regular expressions?",
              back: "Key metacharacters in Java regex:\n\n1. Character classes:\n   - \\d - Any digit (0-9)\n   - \\w - Word character (a-z, A-Z, 0-9, _)\n   - \\s - Whitespace (space, tab, newline, etc.)\n   - . - Any character except newline\n\n2. Anchors:\n   - ^ - Start of line/string\n   - $ - End of line/string\n   - \\b - Word boundary\n\n3. Quantifiers:\n   - * - 0 or more (greedy)\n   - + - 1 or more (greedy)\n   - ? - 0 or 1 (greedy)\n   - {n} - Exactly n times\n   - {n,m} - Between n and m times\n\n4. Non-greedy versions: *?, +?, ??, {n,m}?"
            },
            {
              front: "What are the important methods of the Matcher class in Java?",
              back: "Important Matcher methods:\n\n- find(): Finds the next match of the pattern\n- matches(): Checks if the entire input matches the pattern\n- lookingAt(): Checks if the beginning of the input matches the pattern\n- group(): Returns the matched string\n- group(int): Returns the content of a capturing group\n- group(String): Returns the content of a named capturing group\n- start()/end(): Returns the start/end index of the match\n- reset(): Resets the matcher for reuse\n- replaceAll()/replaceFirst(): Replace matches with a replacement string\n- appendReplacement()/appendTail(): Advanced replacing operations"
            }
          ]
        },
        {
          id: "java-security",
          title: "Security",
          description: "Implementing security features in Java applications",
          content: `
# Security in Java

Java provides a comprehensive security framework for protecting applications and data, including encryption, authentication, access control, and secure coding practices.
          `,
          codeExamples: [
            {
              title: "Basic Security Techniques",
              code: `import java.io.*;
import java.nio.charset.StandardCharsets;
import java.nio.file.*;
import java.security.*;
import java.security.spec.*;
import java.util.*;
import javax.crypto.*;
import javax.crypto.spec.*;
import java.util.Base64;
import java.util.regex.Pattern;

public class SecurityExample {
    public static void main(String[] args) {
        try {
            // Secure password handling
            securePasswordExample();
            
            // Basic symmetric encryption (AES)
            symmetricEncryptionExample();
            
            // Basic asymmetric encryption (RSA)
            asymmetricEncryptionExample();
            
            // Digital signatures
            digitalSignatureExample();
            
            // Message digests (hashing)
            messageDigestExample();
            
            // Secure random number generation
            secureRandomExample();
            
            // Input validation examples
            inputValidationExample();
            
            // SecureString implementation (simulation)
            secureStringExample();
            
        } catch (Exception e) {
            System.err.println("Error in security examples: " + e.getMessage());
            e.printStackTrace();
        }
    }
    
    // Example of secure password handling
    private static void securePasswordExample() throws Exception {
        System.out.println("=== Secure Password Handling ===");
        
        // Never store plain text passwords; instead, store a salted hash
        
        // Generate a random salt
        SecureRandom random = new SecureRandom();
        byte[] salt = new byte[16];
        random.nextBytes(salt);
        
        // Hash a password
        String password = "StrongP@ssw0rd!";
        String hashedPassword = hashPassword(password, salt);
        
        System.out.println("Password: " + password);
        System.out.println("Salt (Base64): " + Base64.getEncoder().encodeToString(salt));
        System.out.println("Hashed password (Base64): " + hashedPassword);
        
        // Verify a password
        boolean passwordMatch = verifyPassword("StrongP@ssw0rd!", salt, hashedPassword);
        boolean wrongPasswordMatch = verifyPassword("WrongPassword", salt, hashedPassword);
        
        System.out.println("Correct password match: " + passwordMatch);
        System.out.println("Wrong password match: " + wrongPasswordMatch);
    }
    
    // Hash a password using PBKDF2WithHmacSHA256
    private static String hashPassword(String password, byte[] salt) throws Exception {
        // PBKDF2 (Password-Based Key Derivation Function 2) with HMAC-SHA256
        String algorithm = "PBKDF2WithHmacSHA256";
        int iterations = 65536;  // Higher is more secure but slower
        int keyLength = 256;     // 256 bits
        
        KeySpec spec = new PBEKeySpec(
            password.toCharArray(), salt, iterations, keyLength);
        
        SecretKeyFactory factory = SecretKeyFactory.getInstance(algorithm);
        byte[] hash = factory.generateSecret(spec).getEncoded();
        
        return Base64.getEncoder().encodeToString(hash);
    }
    
    // Verify a password against a hash
    private static boolean verifyPassword(String password, byte[] salt, 
                                          String storedHashBase64) throws Exception {
        String computedHash = hashPassword(password, salt);
        return computedHash.equals(storedHashBase64);
    }
    
    // Example of symmetric encryption with AES
    private static void symmetricEncryptionExample() throws Exception {
        System.out.println("\\n=== Symmetric Encryption (AES) ===");
        
        // Generate a secret key
        KeyGenerator keyGen = KeyGenerator.getInstance("AES");
        keyGen.init(256);  // 256-bit key (requires JCE unlimited strength policy)
        SecretKey secretKey = keyGen.generateKey();
        
        // Message to encrypt
        String message = "This is a secret message for AES encryption";
        System.out.println("Original message: " + message);
        
        // Encrypt
        Cipher cipher = Cipher.getInstance("AES/GCM/NoPadding");
        
        // Generate a random IV (Initialization Vector)
        byte[] iv = new byte[12];  // 96 bits for GCM
        new SecureRandom().nextBytes(iv);
        GCMParameterSpec parameterSpec = new GCMParameterSpec(128, iv);
        
        cipher.init(Cipher.ENCRYPT_MODE, secretKey, parameterSpec);
        byte[] encryptedBytes = cipher.doFinal(message.getBytes(StandardCharsets.UTF_8));
        
        // Base64 encode the encrypted bytes for display
        String encryptedText = Base64.getEncoder().encodeToString(encryptedBytes);
        System.out.println("Encrypted message: " + encryptedText);
        System.out.println("IV (Base64): " + Base64.getEncoder().encodeToString(iv));
        
        // Decrypt
        cipher.init(Cipher.DECRYPT_MODE, secretKey, parameterSpec);
        byte[] decryptedBytes = cipher.doFinal(encryptedBytes);
        String decryptedText = new String(decryptedBytes, StandardCharsets.UTF_8);
        
        System.out.println("Decrypted message: " + decryptedText);
    }
    
    // Example of asymmetric encryption with RSA
    private static void asymmetricEncryptionExample() throws Exception {
        System.out.println("\\n=== Asymmetric Encryption (RSA) ===");
        
        // Generate key pair
        KeyPairGenerator keyPairGen = KeyPairGenerator.getInstance("RSA");
        keyPairGen.initialize(2048);  // 2048 bits
        KeyPair keyPair = keyPairGen.generateKeyPair();
        
        PublicKey publicKey = keyPair.getPublic();
        PrivateKey privateKey = keyPair.getPrivate();
        
        // Message to encrypt
        String message = "This is a secret message for RSA encryption";
        System.out.println("Original message: " + message);
        
        // Encrypt with public key
        Cipher cipher = Cipher.getInstance("RSA/ECB/PKCS1Padding");
        cipher.init(Cipher.ENCRYPT_MODE, publicKey);
        byte[] encryptedBytes = cipher.doFinal(message.getBytes());
        
        // Base64 encode the encrypted bytes for display
        String encryptedText = Base64.getEncoder().encodeToString(encryptedBytes);
        System.out.println("Encrypted message: " + encryptedText);
        
        // Decrypt with private key
        cipher.init(Cipher.DECRYPT_MODE, privateKey);
        byte[] decryptedBytes = cipher.doFinal(encryptedBytes);
        String decryptedText = new String(decryptedBytes);
        
        System.out.println("Decrypted message: " + decryptedText);
        
        // Note: RSA has size limitations for direct encryption and is typically
        // used for key exchange or digital signatures rather than bulk data encryption
    }
    
    // Example of digital signatures
    private static void digitalSignatureExample() throws Exception {
        System.out.println("\\n=== Digital Signatures ===");
        
        // Generate key pair
        KeyPairGenerator keyPairGen = KeyPairGenerator.getInstance("RSA");
        keyPairGen.initialize(2048);
        KeyPair keyPair = keyPairGen.generateKeyPair();
        
        // Document to sign
        String document = "This is an important document that needs to be signed";
        System.out.println("Original document: " + document);
        
        // Create a signature
        Signature signature = Signature.getInstance("SHA256withRSA");
        
        // Sign the document using the private key
        signature.initSign(keyPair.getPrivate());
        signature.update(document.getBytes());
        byte[] digitalSignature = signature.sign();
        
        System.out.println("Signature created (Base64): " + 
                         Base64.getEncoder().encodeToString(digitalSignature));
        
        // Verify the signature using the public key
        signature.initVerify(keyPair.getPublic());
        signature.update(document.getBytes());
        boolean isVerified = signature.verify(digitalSignature);
        
        System.out.println("Signature verified: " + isVerified);
        
        // Try to verify with altered document
        String alteredDocument = document + ".";
        signature.initVerify(keyPair.getPublic());
        signature.update(alteredDocument.getBytes());
        boolean isAlteredVerified = signature.verify(digitalSignature);
        
        System.out.println("Altered document signature verified: " + isAlteredVerified);
    }
    
    // Example of message digests (hashing)
    private static void messageDigestExample() throws Exception {
        System.out.println("\\n=== Message Digests (Hashing) ===");
        
        String message = "This is a message to hash";
        System.out.println("Original message: " + message);
        
        // Available algorithms: MD5, SHA-1, SHA-256, SHA-512
        // Note: MD5 and SHA-1 are considered cryptographically broken
        
        // SHA-256 hash
        MessageDigest sha256Digest = MessageDigest.getInstance("SHA-256");
        byte[] sha256Hash = sha256Digest.digest(message.getBytes());
        System.out.println("SHA-256 hash (Hex): " + bytesToHex(sha256Hash));
        
        // SHA-512 hash
        MessageDigest sha512Digest = MessageDigest.getInstance("SHA-512");
        byte[] sha512Hash = sha512Digest.digest(message.getBytes());
        System.out.println("SHA-512 hash (Hex): " + bytesToHex(sha512Hash));
        
        // Hash a file
        Path tempFile = Files.createTempFile("hash_example", ".txt");
        Files.write(tempFile, message.getBytes());
        
        byte[] fileHash = hashFile(tempFile.toString(), "SHA-256");
        System.out.println("File SHA-256 hash (Hex): " + bytesToHex(fileHash));
        
        // Clean up
        Files.deleteIfExists(tempFile);
    }
    
    // Hash a file using the specified algorithm
    private static byte[] hashFile(String filePath, String algorithm) throws Exception {
        MessageDigest digest = MessageDigest.getInstance(algorithm);
        byte[] buffer = new byte[8192];
        int bytesRead;
        
        try (InputStream is = new FileInputStream(filePath)) {
            while ((bytesRead = is.read(buffer)) != -1) {
                digest.update(buffer, 0, bytesRead);
            }
        }
        
        return digest.digest();
    }
    
    // Convert bytes to hexadecimal string
    private static String bytesToHex(byte[] bytes) {
        StringBuilder sb = new StringBuilder();
        for (byte b : bytes) {
            sb.append(String.format("%02x", b));
        }
        return sb.toString();
    }
    
    // Example of secure random number generation
    private static void secureRandomExample() throws Exception {
        System.out.println("\\n=== Secure Random Number Generation ===");
        
        // Creating a SecureRandom instance
        SecureRandom secureRandom = SecureRandom.getInstanceStrong();
        
        // Generate random bytes
        byte[] randomBytes = new byte[16];
        secureRandom.nextBytes(randomBytes);
        System.out.println("Random bytes (Hex): " + bytesToHex(randomBytes));
        
        // Generate random integers
        int randomInt = secureRandom.nextInt();
        int randomBounded = secureRandom.nextInt(100); // 0-99
        
        System.out.println("Random integer: " + randomInt);
        System.out.println("Random integer (0-99): " + randomBounded);
        
        // Generate a random token (UUID)
        UUID uuid = new UUID(secureRandom.nextLong(), secureRandom.nextLong());
        System.out.println("Random UUID: " + uuid);
        
        // Generate a cryptographically strong password
        String strongPassword = generateStrongPassword(secureRandom, 16);
        System.out.println("Generated strong password: " + strongPassword);
    }
    
    // Generate a cryptographically strong password
    private static String generateStrongPassword(SecureRandom random, int length) {
        if (length < 8) {
            throw new IllegalArgumentException("Password length must be at least 8 characters");
        }
        
        // Character sets for password
        String uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        String lowercase = "abcdefghijklmnopqrstuvwxyz";
        String digits = "0123456789";
        String specialChars = "!@#$%^&*()_-+=<>?";
        
        String allChars = uppercase + lowercase + digits + specialChars;
        
        // Ensure at least one character from each set
        StringBuilder password = new StringBuilder(length);
        password.append(uppercase.charAt(random.nextInt(uppercase.length())));
        password.append(lowercase.charAt(random.nextInt(lowercase.length())));
        password.append(digits.charAt(random.nextInt(digits.length())));
        password.append(specialChars.charAt(random.nextInt(specialChars.length())));
        
        // Fill the rest randomly
        for (int i = 4; i < length; i++) {
            password.append(allChars.charAt(random.nextInt(allChars.length())));
        }
        
        // Shuffle the password characters
        char[] passwordArray = password.toString().toCharArray();
        for (int i = 0; i < passwordArray.length; i++) {
            int j = random.nextInt(passwordArray.length);
            char temp = passwordArray[i];
            passwordArray[i] = passwordArray[j];
            passwordArray[j] = temp;
        }
        
        return new String(passwordArray);
    }
    
    // Example of input validation
    private static void inputValidationExample() {
        System.out.println("\\n=== Input Validation ===");
        
        // Validate email address
        String email = "user@example.com";
        boolean isValidEmail = isValidEmail(email);
        System.out.println("Is valid email: " + isValidEmail);
        
        // SQL injection prevention
        String userInput = "Smith'; DROP TABLE users; --";
        System.out.println("Raw user input: " + userInput);
        
        // BAD: Vulnerable to SQL injection
        String unsafeQuery = "SELECT * FROM users WHERE lastname = '" + userInput + "'";
        System.out.println("Unsafe query: " + unsafeQuery);
        
        // GOOD: Use parameterized statements (simulated)
        System.out.println("Safe approach: Use PreparedStatement with parameters");
        System.out.println("PreparedStatement: SELECT * FROM users WHERE lastname = ?");
        System.out.println("Parameter value: " + userInput);
        
        // XSS prevention
        String userComment = "<script>alert('XSS Attack');</script>";
        System.out.println("Raw user comment: " + userComment);
        
        // Sanitize for XSS
        String sanitizedComment = sanitizeHtml(userComment);
        System.out.println("Sanitized comment: " + sanitizedComment);
    }
    
    // Validate email format
    private static boolean isValidEmail(String email) {
        String emailRegex = "^[a-zA-Z0-9_+&*-]+(?:\\.[a-zA-Z0-9_+&*-]+)*@" +
                          "(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,7}$";
        Pattern pattern = Pattern.compile(emailRegex);
        return pattern.matcher(email).matches();
    }
    
    // Simple HTML sanitizer (in a real app, use a library like OWASP Java Encoder)
    private static String sanitizeHtml(String input) {
        return input.replace("<", "&lt;")
                    .replace(">", "&gt;")
                    .replace("\"", "&quot;")
                    .replace("'", "&#x27;")
                    .replace("/", "&#x2F;");
    }
    
    // Example of SecureString implementation (simulation)
    private static void secureStringExample() {
        System.out.println("\\n=== SecureString Example ===");
        
        // Java doesn't have a built-in SecureString like C#, but we can simulate one
        
        // Create a secure password holder
        SecureCharArray securePassword = new SecureCharArray("P@ssw0rd!");
        
        // Use the password securely
        System.out.println("Password length: " + securePassword.length());
        
        // Process the password securely
        try {
            processSecurely(securePassword);
        } finally {
            // Zero out the password when done
            securePassword.dispose();
        }
        
        System.out.println("After disposal, password length: " + securePassword.length());
    }
    
    // Process a secure string
    private static void processSecurely(SecureCharArray securePassword) {
        // Example of using the secure password
        System.out.println("Processing password securely...");
        
        // Access is limited to a small scope
        char[] temp = securePassword.getChars();
        try {
            // Use the password chars temporarily
            // In a real app, minimize the time the raw chars are in memory
            System.out.println("First character: " + temp[0]);
            System.out.println("Last character: " + temp[temp.length - 1]);
        } finally {
            // Immediately zero out the temporary array
            Arrays.fill(temp, '\0');
        }
    }
    
    // Simple class to simulate a secure string
    static class SecureCharArray {
        private char[] chars;
        private boolean disposed = false;
        
        public SecureCharArray(String s) {
            chars = s.toCharArray();
        }
        
        public char[] getChars() {
            if (disposed) {
                throw new IllegalStateException("Object has been disposed");
            }
            // Return a copy to prevent the internal array from being modified
            return Arrays.copyOf(chars, chars.length);
        }
        
        public int length() {
            return disposed ? 0 : chars.length;
        }
        
        public void dispose() {
            if (!disposed) {
                // Zero out the array
                Arrays.fill(chars, '\0');
                disposed = true;
            }
        }
        
        @Override
        protected void finalize() throws Throwable {
            dispose();
            super.finalize();
        }
    }
}`,
              explanation: "This example demonstrates various security techniques in Java. It covers secure password handling using salted hashing with PBKDF2, both symmetric (AES) and asymmetric (RSA) encryption for protecting sensitive data, digital signatures for data integrity and authentication, message digests (hashing) for data verification, secure random number generation for cryptographic operations, input validation to prevent injection attacks, and a simulation of a SecureString for handling sensitive data in memory. These security practices help protect Java applications from common vulnerabilities and ensure the confidentiality, integrity, and authenticity of data."
            }
          ],
          quiz: [
            {
              question: "Which of the following is considered the most secure approach for storing passwords?",
              options: ["Storing passwords in plain text", "Encrypting passwords with a symmetric key", "Hashing passwords with MD5", "Hashing passwords with a slow algorithm and unique salt"],
              correctAnswer: 3,
              explanation: "The most secure approach for storing passwords is to hash them using a slow algorithm (like PBKDF2, bcrypt, or Argon2) with a unique salt for each password. This approach provides several security benefits: the one-way nature of hashing prevents password recovery even if the database is compromised; the unique salt prevents precomputed rainbow table attacks; and the slow algorithm makes brute-force attacks computationally expensive. Storing passwords in plain text is extremely insecure, encryption can be reversed if the key is compromised, and fast hashing algorithms like MD5 or SHA-1 are vulnerable to brute-force attacks with modern hardware."
            }
          ],
          flashcards: [
            {
              front: "What are the main cryptographic concepts in Java's security framework?",
              back: "Main cryptographic concepts in Java security:\n\n1. Message Digests (hashing): One-way functions for data integrity (MessageDigest class)\n2. Symmetric Encryption: Same key for encryption and decryption (Cipher with algorithms like AES)\n3. Asymmetric Encryption: Public/private key pairs (Cipher with algorithms like RSA)\n4. Digital Signatures: Authentication and non-repudiation (Signature class)\n5. Key Management: Generation, conversion, and storage of keys (KeyGenerator, KeyFactory, KeyStore)\n6. Secure Random Numbers: Cryptographically strong random values (SecureRandom class)\n7. MAC: Message Authentication Codes for integrity and authenticity (Mac class)\n8. Password-Based Encryption: Deriving keys from passwords (PBKDF2, PBE algorithms)"
            },
            {
              front: "What are the common security vulnerabilities in Java applications and how to prevent them?",
              back: "Common Java security vulnerabilities and preventions:\n\n1. Injection Attacks (SQL, OS command, LDAP):\n   - Prevention: Use parameterized queries, input validation, ORMs\n\n2. Cross-Site Scripting (XSS):\n   - Prevention: Output encoding, Content Security Policy, input validation\n\n3. Insecure Deserialization:\n   - Prevention: Validate serialized objects, use safer formats (JSON), implement integrity checks\n\n4. XML External Entity (XXE):\n   - Prevention: Disable DTDs, use safe parsers, validate XML\n\n5. Broken Authentication:\n   - Prevention: Strong password policies, secure session management, multi-factor authentication\n\n6. Sensitive Data Exposure:\n   - Prevention: Encryption, secure TLS, proper key management\n\n7. Security Misconfiguration:\n   - Prevention: Hardened configurations, regular updates, disable debugging\n\n8. Path Traversal:\n   - Prevention: Validate file paths, restrict file access, use safe APIs"
            }
          ]
        }
      ]
    }
  ]
};

