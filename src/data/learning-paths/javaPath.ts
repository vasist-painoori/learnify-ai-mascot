
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

Java is a general-purpose, class-based, object-oriented programming language designed for portability and cross-platform development.
          `,
          codeExamples: [
            {
              title: "Hello World in Java",
              code: `// HelloWorld.java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`,
              explanation: "This is the classic first program in Java. It defines a class called HelloWorld with a main method that prints 'Hello, World!' to the console."
            }
          ],
          quiz: [
            {
              question: "Which feature of Java allows code to run on different platforms?",
              options: ["Machine code compilation", "Just-In-Time compilation", "Platform independence through bytecode", "Native code generation"],
              correctAnswer: 2,
              explanation: "Java code is compiled to bytecode, which can run on any platform that has a Java Virtual Machine (JVM), enabling 'write once, run anywhere' functionality."
            }
          ],
          flashcards: [
            {
              front: "What is Java?",
              back: "Java is a general-purpose, class-based, object-oriented programming language designed to have as few implementation dependencies as possible. It follows the 'write once, run anywhere' principle, compiling to bytecode that runs on the Java Virtual Machine (JVM)."
            },
            {
              front: "What are the main features of Java?",
              back: "Java's main features include: platform independence (via the JVM), object-oriented design, strong type checking, automatic memory management (garbage collection), exception handling, and a rich standard library."
            }
          ]
        },
        {
          id: "java-variables",
          title: "Variables and Data Types",
          description: "Working with Java's data types and variables",
          content: `
# Variables and Data Types in Java

Java is a strongly-typed language with a variety of primitive and reference data types.
          `,
          codeExamples: [
            {
              title: "Basic Data Types",
              code: `public class DataTypes {
    public static void main(String[] args) {
        // Primitive data types
        byte b = 100;                  // 8-bit integer
        short s = 30000;               // 16-bit integer
        int i = 100000;                // 32-bit integer
        long l = 9223372036854775807L; // 64-bit integer (note the L suffix)
        
        float f = 3.14f;               // 32-bit floating point (note the f suffix)
        double d = 3.14159265359;      // 64-bit floating point
        
        char c = 'A';                  // 16-bit Unicode character
        boolean bool = true;           // true or false
        
        // Reference types
        String str = "Hello, Java!";   // String is a class, not a primitive
        
        // Constants
        final double PI = 3.14159265359;
        
        // Output values
        System.out.println("byte: " + b);
        System.out.println("short: " + s);
        System.out.println("int: " + i);
        System.out.println("long: " + l);
        System.out.println("float: " + f);
        System.out.println("double: " + d);
        System.out.println("char: " + c);
        System.out.println("boolean: " + bool);
        System.out.println("String: " + str);
        System.out.println("PI constant: " + PI);
    }
}`,
              explanation: "This example demonstrates the basic data types in Java, including primitive types (byte, short, int, long, float, double, char, boolean) and a reference type (String). It also shows how to declare a constant using the 'final' keyword."
            }
          ],
          quiz: [
            {
              question: "What is the default value of an uninitialized int variable in a class?",
              options: ["0", "null", "undefined", "NaN"],
              correctAnswer: 0,
              explanation: "In Java, instance variables (fields) are automatically initialized to default values if not explicitly initialized. For numeric types like int, the default value is 0. Local variables, however, must be initialized before use."
            }
          ],
          flashcards: [
            {
              front: "What is the difference between primitive and reference types in Java?",
              back: "Primitive types (like int, boolean) directly contain values and are stored on the stack. Reference types (like String, arrays, custom objects) store a reference (memory address) to the object data, which is stored on the heap."
            }
          ]
        },
        {
          id: "java-control-flow",
          title: "Control Flow",
          description: "Working with conditionals and loops in Java",
          content: `
# Control Flow in Java

Control flow statements allow you to control the execution path of your program based on conditions or loops.
          `,
          codeExamples: [
            {
              title: "Conditional Statements",
              code: `public class ControlFlow {
    public static void main(String[] args) {
        int x = 10;
        
        // If statement
        if (x > 5) {
            System.out.println("x is greater than 5");
        }
        
        // If-else statement
        int y = 3;
        if (y > 5) {
            System.out.println("y is greater than 5");
        } else {
            System.out.println("y is not greater than 5");
        }
        
        // If-else if-else statement
        int z = 5;
        if (z > 10) {
            System.out.println("z is greater than 10");
        } else if (z == 5) {
            System.out.println("z is equal to 5");
        } else {
            System.out.println("z is less than 5");
        }
        
        // Switch statement
        int day = 3;
        switch (day) {
            case 1:
                System.out.println("Monday");
                break;
            case 2:
                System.out.println("Tuesday");
                break;
            case 3:
                System.out.println("Wednesday");
                break;
            case 4:
                System.out.println("Thursday");
                break;
            case 5:
                System.out.println("Friday");
                break;
            default:
                System.out.println("Weekend");
                break;
        }
        
        // Ternary operator
        int age = 20;
        String status = (age >= 18) ? "Adult" : "Minor";
        System.out.println(status);
    }
}`,
              explanation: "This example demonstrates conditional statements in Java, including if, if-else, if-else if-else, switch, and the ternary operator. These control structures allow the program to execute different code blocks based on conditions."
            },
            {
              title: "Loops",
              code: `public class LoopsDemo {
    public static void main(String[] args) {
        // For loop
        System.out.println("For loop:");
        for (int i = 0; i < 5; i++) {
            System.out.println("i = " + i);
        }
        
        // While loop
        System.out.println("While loop:");
        int j = 0;
        while (j < 5) {
            System.out.println("j = " + j);
            j++;
        }
        
        // Do-while loop
        System.out.println("Do-while loop:");
        int k = 0;
        do {
            System.out.println("k = " + k);
            k++;
        } while (k < 5);
        
        // For-each loop (enhanced for loop)
        System.out.println("For-each loop:");
        int[] numbers = {1, 2, 3, 4, 5};
        for (int num : numbers) {
            System.out.println("num = " + num);
        }
        
        // Breaking out of loops
        System.out.println("Loop with break:");
        for (int i = 0; i < 10; i++) {
            if (i == 5) {
                break; // Exit the loop
            }
            System.out.println("i = " + i);
        }
        
        // Skipping iterations
        System.out.println("Loop with continue:");
        for (int i = 0; i < 5; i++) {
            if (i == 2) {
                continue; // Skip the rest of the loop body for this iteration
            }
            System.out.println("i = " + i);
        }
    }
}`,
              explanation: "This example demonstrates different types of loops in Java: for, while, do-while, and for-each. It also shows how to use break to exit a loop and continue to skip an iteration."
            }
          ],
          quiz: [
            {
              question: "What's the difference between a while loop and a do-while loop in Java?",
              options: [
                "They are functionally identical",
                "In a while loop, the condition is checked before the loop body; in a do-while loop, the condition is checked after",
                "A while loop can't be broken out of with a break statement",
                "A do-while loop always executes infinitely"
              ],
              correctAnswer: 1,
              explanation: "The main difference is that a while loop checks the condition before executing the loop body, so it might not execute at all if the condition is initially false. A do-while loop executes the loop body first and then checks the condition, so it always executes at least once."
            }
          ],
          flashcards: [
            {
              front: "What is a switch statement in Java?",
              back: "A switch statement is a control flow statement that evaluates an expression, matches its value to a case clause, and executes the statements associated with that case. It's an alternative to multiple if-else statements when comparing a single variable against several values."
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
              title: "Defining Methods",
              code: `public class MethodsDemo {
    // Method with no parameters and no return value
    public static void sayHello() {
        System.out.println("Hello!");
    }
    
    // Method with parameters
    public static void greet(String name) {
        System.out.println("Hello, " + name + "!");
    }
    
    // Method with return value
    public static int add(int a, int b) {
        return a + b;
    }
    
    // Method with multiple parameters
    public static double calculateAverage(double[] numbers) {
        double sum = 0;
        for (double num : numbers) {
            sum += num;
        }
        return sum / numbers.length;
    }
    
    // Method overloading - same name, different parameters
    public static int multiply(int a, int b) {
        return a * b;
    }
    
    public static double multiply(double a, double b) {
        return a * b;
    }
    
    // Varargs - variable number of arguments
    public static int sum(int... numbers) {
        int total = 0;
        for (int num : numbers) {
            total += num;
        }
        return total;
    }
    
    public static void main(String[] args) {
        // Calling methods
        sayHello();
        
        greet("Alice");
        
        int sum = add(5, 3);
        System.out.println("5 + 3 = " + sum);
        
        double[] scores = {85.5, 90.0, 78.5, 92.5};
        double average = calculateAverage(scores);
        System.out.println("Average score: " + average);
        
        int product1 = multiply(4, 5);
        double product2 = multiply(2.5, 3.0);
        System.out.println("4 * 5 = " + product1);
        System.out.println("2.5 * 3.0 = " + product2);
        
        int total = sum(1, 2, 3, 4, 5);
        System.out.println("Sum of 1-5: " + total);
    }
}`,
              explanation: "This example demonstrates how to define and call methods in Java. It shows methods with and without parameters, return values, method overloading (same name, different parameters), and varargs (variable number of arguments)."
            },
            {
              title: "Method Scope and Recursion",
              code: `public class AdvancedMethods {
    // Instance variable (field) - accessible to all methods in the class
    private int count = 0;
    
    // Instance method - needs an object instance to be called
    public void incrementCount() {
        count++;
    }
    
    // Accessor method (getter)
    public int getCount() {
        return count;
    }
    
    // Method demonstrating local variables
    public void demonstrateScope() {
        int localVar = 10;  // Local variable - only visible in this method
        System.out.println("Local variable: " + localVar);
        System.out.println("Instance variable: " + count);
        
        {
            // Block scope
            int blockVar = 20;  // Only visible in this block
            System.out.println("Block variable: " + blockVar);
        }
        // blockVar is not accessible here
    }
    
    // Recursive method - a method that calls itself
    public static int factorial(int n) {
        // Base case
        if (n <= 1) {
            return 1;
        }
        // Recursive case
        else {
            return n * factorial(n - 1);
        }
    }
    
    public static void main(String[] args) {
        // Need to create an instance to use non-static methods
        AdvancedMethods demo = new AdvancedMethods();
        
        demo.incrementCount();
        demo.incrementCount();
        System.out.println("Count: " + demo.getCount());
        
        demo.demonstrateScope();
        
        // Call recursive method
        int result = factorial(5);  // 5! = 5 * 4 * 3 * 2 * 1 = 120
        System.out.println("5! = " + result);
    }
}`,
              explanation: "This example explores more advanced concepts related to methods, including instance vs. static methods, local variables and scope, and recursion (a method that calls itself). It demonstrates how methods can access instance variables (fields) and how recursion can solve problems by breaking them down into simpler versions of the same problem."
            }
          ],
          quiz: [
            {
              question: "What is method overloading in Java?",
              options: [
                "Creating a method in a subclass with the same signature as in the parent class",
                "Creating multiple methods with the same name but different parameters",
                "Calling a method with more arguments than it expects",
                "Modifying a method's behavior at runtime"
              ],
              correctAnswer: 1,
              explanation: "Method overloading is a feature that allows a class to have multiple methods with the same name but different parameters (either different number or different types). The compiler determines which method to call based on the arguments provided."
            }
          ],
          flashcards: [
            {
              front: "What is the difference between static and instance methods in Java?",
              back: "Static methods belong to the class rather than an instance and can be called directly on the class. They cannot access instance variables or call instance methods directly. Instance methods belong to objects of the class and can access all variables and methods of the class."
            }
          ]
        },
        {
          id: "java-oop",
          title: "Object-Oriented Programming",
          description: "Understanding classes, objects, inheritance, and polymorphism in Java",
          content: `
# Object-Oriented Programming in Java

Java is a fully object-oriented programming language that supports encapsulation, inheritance, and polymorphism.
          `,
          codeExamples: [
            {
              title: "Classes and Objects",
              code: `// File: Person.java
public class Person {
    // Instance variables (fields)
    private String name;
    private int age;
    
    // Constructor
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    // Default constructor
    public Person() {
        this("Unknown", 0);
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
    
    // Instance method
    public void introduce() {
        System.out.println("Hi, my name is " + name + " and I am " + age + " years old.");
    }
    
    // toString method override
    @Override
    public String toString() {
        return "Person{name='" + name + "', age=" + age + "}";
    }
}

// File: OOPDemo.java
public class OOPDemo {
    public static void main(String[] args) {
        // Creating objects
        Person person1 = new Person("Alice", 25);
        Person person2 = new Person("Bob", 30);
        Person person3 = new Person();
        
        // Using object methods
        person1.introduce();
        person2.introduce();
        
        // Using getters and setters
        System.out.println(person1.getName() + " is " + person1.getAge() + " years old.");
        
        person3.setName("Charlie");
        person3.setAge(22);
        person3.introduce();
        
        // toString method
        System.out.println(person1);
        System.out.println(person2);
    }
}`,
              explanation: "This example demonstrates the fundamental concepts of OOP in Java, including classes, objects, constructors, fields (instance variables), methods, encapsulation with private fields and public getters/setters, and method overriding (toString)."
            },
            {
              title: "Inheritance and Polymorphism",
              code: `// Base class
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
    
    // Method to be overridden by subclasses
    public void makeSound() {
        System.out.println(name + " makes a sound.");
    }
}

// Derived class (subclass)
class Dog extends Animal {
    private String breed;
    
    public Dog(String name, String breed) {
        super(name);  // Call parent constructor
        this.breed = breed;
    }
    
    // Additional method specific to Dog
    public void fetch() {
        System.out.println(name + " is fetching the ball.");
    }
    
    // Override method from parent class
    @Override
    public void makeSound() {
        System.out.println(name + " barks.");
    }
    
    public String getBreed() {
        return breed;
    }
}

// Another derived class
class Cat extends Animal {
    public Cat(String name) {
        super(name);
    }
    
    @Override
    public void makeSound() {
        System.out.println(name + " meows.");
    }
    
    // Additional method specific to Cat
    public void scratch() {
        System.out.println(name + " is scratching the furniture.");
    }
}

// Demonstration
public class InheritanceDemo {
    public static void main(String[] args) {
        // Create objects
        Animal genericAnimal = new Animal("Generic Animal");
        Dog myDog = new Dog("Buddy", "Golden Retriever");
        Cat myCat = new Cat("Whiskers");
        
        // Call methods on the base class
        System.out.println("--- Animal ---");
        genericAnimal.eat();
        genericAnimal.sleep();
        genericAnimal.makeSound();
        
        System.out.println("--- Dog ---");
        myDog.eat();  // Inherited from Animal
        myDog.sleep();  // Inherited from Animal
        myDog.makeSound();  // Overridden method
        myDog.fetch();  // Dog-specific method
        System.out.println(myDog.name + " is a " + myDog.getBreed());
        
        System.out.println("--- Cat ---");
        myCat.eat();  // Inherited from Animal
        myCat.makeSound();  // Overridden method
        myCat.scratch();  // Cat-specific method
        
        // Polymorphism - treating objects of different classes through a common interface
        System.out.println("--- Polymorphism ---");
        Animal[] animals = {genericAnimal, myDog, myCat};
        
        for (Animal animal : animals) {
            // The appropriate makeSound() method is called based on the actual object type
            animal.makeSound();
        }
    }
}`,
              explanation: "This example demonstrates inheritance and polymorphism in Java. The Dog and Cat classes inherit from the Animal class, reusing its functionality while adding their own. Polymorphism is shown by using the common Animal type to refer to different animal objects, with the correct implementation of makeSound() called based on the actual object type."
            }
          ],
          quiz: [
            {
              question: "What is the purpose of the 'super' keyword in Java?",
              options: [
                "To access the superclass methods and constructor",
                "To create a super object with enhanced capabilities",
                "To call static methods in the current class",
                "To skip the execution of the current method"
              ],
              correctAnswer: 0,
              explanation: "The 'super' keyword in Java is used to access methods and constructors of the parent (superclass). It's commonly used in a subclass to call a superclass method or constructor that has been overridden or hidden."
            }
          ],
          flashcards: [
            {
              front: "What are the four pillars of Object-Oriented Programming in Java?",
              back: "1. Encapsulation: Bundling data and methods that operate on that data into a single unit (class) and restricting access to some of the object's components.\n2. Inheritance: Mechanism where a new class inherits properties and behavior from an existing class.\n3. Polymorphism: Ability for objects of different classes to respond uniquely to the same method call.\n4. Abstraction: Hiding complex implementation details and showing only the necessary features of an object."
            }
          ]
        },
        {
          id: "java-exceptions",
          title: "Exception Handling",
          description: "Managing errors and exceptions in Java",
          content: `
# Exception Handling in Java

Exception handling allows you to manage runtime errors gracefully, improving the robustness of your applications.
          `,
          codeExamples: [
            {
              title: "Basic Exception Handling",
              code: `public class ExceptionDemo {
    public static void main(String[] args) {
        // Try-catch block
        try {
            // Code that might throw an exception
            int result = 10 / 0;  // ArithmeticException
            System.out.println("Result: " + result);  // This line won't execute
        } catch (ArithmeticException e) {
            // Code to handle the exception
            System.out.println("Error: Cannot divide by zero");
            System.out.println("Exception message: " + e.getMessage());
        }
        
        System.out.println("Program continues execution");
        
        // Multiple catch blocks
        try {
            String str = null;
            System.out.println(str.length());  // NullPointerException
        } catch (NullPointerException e) {
            System.out.println("Error: Null reference");
        } catch (Exception e) {
            System.out.println("Error: Something else went wrong");
        }
        
        // Try-catch-finally
        try {
            int[] numbers = {1, 2, 3};
            System.out.println(numbers[3]);  // ArrayIndexOutOfBoundsException
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Error: Index out of bounds");
        } finally {
            // This block always executes, whether an exception occurred or not
            System.out.println("Finally block executed");
        }
    }
}`,
              explanation: "This example demonstrates basic exception handling in Java using try-catch blocks. It shows how to catch specific exceptions, use multiple catch blocks, and use the finally block for code that should always execute."
            },
            {
              title: "Throwing and Custom Exceptions",
              code: `// Custom exception class
class InsufficientFundsException extends Exception {
    private double amount;
    
    public InsufficientFundsException(double amount) {
        super("Insufficient funds: Needed $" + amount + " more");
        this.amount = amount;
    }
    
    public double getAmount() {
        return amount;
    }
}

// Bank account class that throws exceptions
class BankAccount {
    private String accountNumber;
    private double balance;
    
    public BankAccount(String accountNumber, double initialBalance) {
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
    }
    
    public void deposit(double amount) throws IllegalArgumentException {
        if (amount <= 0) {
            throw new IllegalArgumentException("Deposit amount must be positive");
        }
        
        balance += amount;
    }
    
    public void withdraw(double amount) throws InsufficientFundsException, IllegalArgumentException {
        if (amount <= 0) {
            throw new IllegalArgumentException("Withdrawal amount must be positive");
        }
        
        if (amount > balance) {
            throw new InsufficientFundsException(amount - balance);
        }
        
        balance -= amount;
    }
    
    public double getBalance() {
        return balance;
    }
}

// Main class to demonstrate throwing and catching exceptions
public class ThrowingExceptionsDemo {
    public static void main(String[] args) {
        BankAccount account = new BankAccount("123456", 1000.0);
        
        try {
            System.out.println("Initial balance: $" + account.getBalance());
            
            // Deposit
            account.deposit(500);
            System.out.println("After deposit: $" + account.getBalance());
            
            // Invalid deposit
            account.deposit(-100);  // This will throw an exception
        } catch (IllegalArgumentException e) {
            System.out.println("Error: " + e.getMessage());
        }
        
        try {
            // Withdraw
            account.withdraw(300);
            System.out.println("After withdrawal: $" + account.getBalance());
            
            // Withdraw too much
            account.withdraw(2000);  // This will throw an exception
        } catch (InsufficientFundsException e) {
            System.out.println("Error: " + e.getMessage());
            System.out.println("You need $" + e.getAmount() + " more");
        } catch (IllegalArgumentException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}`,
              explanation: "This example shows how to throw exceptions and create custom exception classes in Java. The BankAccount class throws exceptions in certain situations, and the main class demonstrates how to catch and handle these exceptions appropriately."
            }
          ],
          quiz: [
            {
              question: "What is the difference between checked and unchecked exceptions in Java?",
              options: [
                "Checked exceptions must be caught at compile-time, while unchecked exceptions are caught at runtime",
                "Checked exceptions extend Exception, while unchecked exceptions extend RuntimeException",
                "Checked exceptions are automatically handled by the JVM, while unchecked exceptions require explicit handling",
                "Checked exceptions are always fatal, while unchecked exceptions can be recovered from"
              ],
              correctAnswer: 1,
              explanation: "Checked exceptions extend Exception directly and must be either caught or declared in a method's throws clause. Unchecked exceptions extend RuntimeException and don't need to be explicitly caught or declared. Checked exceptions represent conditions that a reasonable application might want to catch, while unchecked exceptions typically represent programming errors."
            }
          ],
          flashcards: [
            {
              front: "What is the try-with-resources statement in Java?",
              back: "The try-with-resources statement is a try statement that declares one or more resources that will be automatically closed when the block completes. Any object that implements AutoCloseable or Closeable can be used as a resource. This helps prevent resource leaks, especially when working with I/O streams, database connections, etc."
            }
          ]
        },
        {
          id: "java-collections",
          title: "Collections Framework",
          description: "Working with Java's collection classes",
          content: `
# Collections Framework in Java

The Java Collections Framework provides a set of classes and interfaces that implement commonly reusable collection data structures.
          `,
          codeExamples: [
            {
              title: "List Collections",
              code: `import java.util.*;

public class ListDemo {
    public static void main(String[] args) {
        // ArrayList - Dynamic array implementation
        System.out.println("--- ArrayList ---");
        List<String> arrayList = new ArrayList<>();
        
        // Adding elements
        arrayList.add("Apple");
        arrayList.add("Banana");
        arrayList.add("Cherry");
        
        // Add at specific position
        arrayList.add(1, "Blueberry");
        
        // Access elements
        System.out.println("First element: " + arrayList.get(0));
        
        // Iterate through elements
        System.out.println("All elements:");
        for (String fruit : arrayList) {
            System.out.println(fruit);
        }
        
        // Remove elements
        arrayList.remove("Banana");
        arrayList.remove(0);  // Remove by index
        
        // Check if element exists
        System.out.println("Contains Cherry? " + arrayList.contains("Cherry"));
        
        // Size
        System.out.println("Size: " + arrayList.size());
        
        // LinkedList - Doubly-linked list implementation
        System.out.println("--- LinkedList ---");
        LinkedList<String> linkedList = new LinkedList<>();
        linkedList.add("Dog");
        linkedList.add("Cat");
        linkedList.add("Bird");
        
        // LinkedList has additional methods for queue/deque operations
        linkedList.addFirst("Fish");
        linkedList.addLast("Hamster");
        
        System.out.println("First: " + linkedList.getFirst());
        System.out.println("Last: " + linkedList.getLast());
        
        // Convert list to array
        String[] petsArray = linkedList.toArray(new String[0]);
        System.out.println("Array length: " + petsArray.length);
        
        // Clear list
        linkedList.clear();
        System.out.println("After clear, size: " + linkedList.size());
    }
}`,
              explanation: "This example demonstrates how to use ArrayList and LinkedList, two implementations of the List interface. ArrayList provides fast random access but slower insertions and deletions, while LinkedList offers fast insertions and deletions but slower random access."
            },
            {
              title: "Set and Map Collections",
              code: `import java.util.*;

public class SetAndMapDemo {
    public static void main(String[] args) {
        // HashSet - Unique elements, no guaranteed order
        System.out.println("--- HashSet ---");
        Set<String> hashSet = new HashSet<>();
        hashSet.add("Apple");
        hashSet.add("Banana");
        hashSet.add("Cherry");
        hashSet.add("Apple");  // Duplicate, won't be added
        
        System.out.println("Size: " + hashSet.size());  // 3, not 4
        System.out.println("Elements: " + hashSet);
        
        // TreeSet - Sorted set
        System.out.println("--- TreeSet ---");
        Set<String> treeSet = new TreeSet<>();
        treeSet.add("Zebra");
        treeSet.add("Dog");
        treeSet.add("Cat");
        treeSet.add("Ant");
        
        System.out.println("TreeSet (sorted): " + treeSet);  // Alphabetical order
        
        // LinkedHashSet - Maintains insertion order
        System.out.println("--- LinkedHashSet ---");
        Set<String> linkedHashSet = new LinkedHashSet<>();
        linkedHashSet.add("First");
        linkedHashSet.add("Second");
        linkedHashSet.add("Third");
        
        System.out.println("LinkedHashSet (insertion order): " + linkedHashSet);
        
        // HashMap - Key-value pairs, no guaranteed order
        System.out.println("--- HashMap ---");
        Map<String, Integer> hashMap = new HashMap<>();
        hashMap.put("Alice", 25);
        hashMap.put("Bob", 30);
        hashMap.put("Charlie", 35);
        
        // Accessing values
        System.out.println("Bob's age: " + hashMap.get("Bob"));
        
        // Checking if key exists
        System.out.println("Contains David? " + hashMap.containsKey("David"));
        
        // Iterating through a map
        System.out.println("All entries:");
        for (Map.Entry<String, Integer> entry : hashMap.entrySet()) {
            System.out.println(entry.getKey() + ": " + entry.getValue());
        }
        
        // Just keys
        System.out.println("All keys: " + hashMap.keySet());
        
        // Just values
        System.out.println("All values: " + hashMap.values());
        
        // TreeMap - Sorted map
        System.out.println("--- TreeMap ---");
        Map<String, String> treeMap = new TreeMap<>();
        treeMap.put("3", "Three");
        treeMap.put("1", "One");
        treeMap.put("2", "Two");
        
        System.out.println("TreeMap (sorted by keys): " + treeMap);
    }
}`,
              explanation: "This example demonstrates Set and Map collections in Java. Sets store unique elements, with different implementations (HashSet, TreeSet, LinkedHashSet) offering different ordering and performance characteristics. Maps store key-value pairs, with different implementations (HashMap, TreeMap) having different ordering and performance traits."
            }
          ],
          quiz: [
            {
              question: "Which Java collection would be most appropriate for implementing a dictionary where entries need to be sorted by key?",
              options: ["ArrayList", "HashMap", "HashSet", "TreeMap"],
              correctAnswer: 3,
              explanation: "TreeMap is the appropriate collection for implementing a dictionary that needs to be sorted by key. TreeMap is a sorted map implementation that stores key-value pairs in a sorted order based on the natural ordering of its keys or by a Comparator provided at creation time."
            }
          ],
          flashcards: [
            {
              front: "What are the main interfaces in the Java Collections Framework?",
              back: "The main interfaces in the Java Collections Framework are:\n1. Collection - the root interface\n2. List - ordered collection that allows duplicates\n3. Set - collection that doesn't allow duplicates\n4. Queue - collection designed for holding elements before processing\n5. Map - collection of key-value pairs\n\nEach has multiple implementations with different performance characteristics."
            }
          ]
        },
        {
          id: "java-io",
          title: "Input and Output",
          description: "Reading from and writing to files and streams in Java",
          content: `
# Input and Output (I/O) in Java

Java provides a rich set of classes and interfaces for handling input and output operations.
          `,
          codeExamples: [
            {
              title: "File I/O with Streams",
              code: `import java.io.*;

public class FileIODemo {
    public static void main(String[] args) {
        // Writing to a file using FileOutputStream
        try (FileOutputStream fos = new FileOutputStream("basic.txt")) {
            String text = "Hello, this is a simple text file.";
            byte[] bytes = text.getBytes();
            fos.write(bytes);
            System.out.println("Data written to basic.txt");
        } catch (IOException e) {
            System.out.println("Error writing to file: " + e.getMessage());
        }
        
        // Reading from a file using FileInputStream
        try (FileInputStream fis = new FileInputStream("basic.txt")) {
            int content;
            System.out.print("Read from file: ");
            while ((content = fis.read()) != -1) {
                // Convert to char and display
                System.out.print((char) content);
            }
            System.out.println();
        } catch (IOException e) {
            System.out.println("Error reading file: " + e.getMessage());
        }
        
        // Writing to a file using FileWriter (character streams)
        try (FileWriter writer = new FileWriter("text.txt")) {
            writer.write("This is a line of text.\n");
            writer.write("This is another line.\n");
            System.out.println("Data written to text.txt");
        } catch (IOException e) {
            System.out.println("Error writing to file: " + e.getMessage());
        }
        
        // Reading from a file using FileReader
        try (FileReader reader = new FileReader("text.txt")) {
            int character;
            System.out.print("Read from file: ");
            while ((character = reader.read()) != -1) {
                System.out.print((char) character);
            }
            System.out.println();
        } catch (IOException e) {
            System.out.println("Error reading file: " + e.getMessage());
        }
        
        // Buffered reading for efficiency
        try (BufferedReader br = new BufferedReader(new FileReader("text.txt"))) {
            String line;
            System.out.println("Reading line by line:");
            while ((line = br.readLine()) != null) {
                System.out.println(line);
            }
        } catch (IOException e) {
            System.out.println("Error reading file: " + e.getMessage());
        }
    }
}`,
              explanation: "This example demonstrates basic file input and output operations in Java. It shows how to write to and read from files using both byte streams (FileOutputStream, FileInputStream) and character streams (FileWriter, FileReader). It also demonstrates using BufferedReader for more efficient line-by-line reading."
            },
            {
              title: "Working with Objects and Files",
              code: `import java.io.*;
import java.util.ArrayList;
import java.util.List;

// Serializable class
class Person implements Serializable {
    private static final long serialVersionUID = 1L;
    
    private String name;
    private int age;
    
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    @Override
    public String toString() {
        return "Person{name='" + name + "', age=" + age + "}";
    }
}

public class ObjectIODemo {
    public static void main(String[] args) {
        // Creating objects to serialize
        List<Person> people = new ArrayList<>();
        people.add(new Person("Alice", 30));
        people.add(new Person("Bob", 25));
        people.add(new Person("Charlie", 35));
        
        // Serializing objects to a file
        try (ObjectOutputStream oos = new ObjectOutputStream(
                new FileOutputStream("people.dat"))) {
            
            oos.writeObject(people);
            System.out.println("Objects saved to file.");
            
        } catch (IOException e) {
            System.out.println("Error writing objects: " + e.getMessage());
        }
        
        // Deserializing objects from a file
        try (ObjectInputStream ois = new ObjectInputStream(
                new FileInputStream("people.dat"))) {
            
            @SuppressWarnings("unchecked")
            List<Person> loadedPeople = (List<Person>) ois.readObject();
            System.out.println("Objects loaded from file:");
            
            for (Person p : loadedPeople) {
                System.out.println(p);
            }
            
        } catch (IOException e) {
            System.out.println("Error reading objects: " + e.getMessage());
        } catch (ClassNotFoundException e) {
            System.out.println("Class not found: " + e.getMessage());
        }
    }
}`,
              explanation: "This example demonstrates object serialization and deserialization in Java. It shows how to save objects to a file and later restore them. The Person class implements Serializable, which is a marker interface that tells Java that objects of this class can be serialized (converted to a byte stream)."
            }
          ],
          quiz: [
            {
              question: "What is the purpose of the try-with-resources statement when working with I/O in Java?",
              options: [
                "It automatically closes resources when they are no longer needed",
                "It makes file operations thread-safe",
                "It speeds up file read and write operations",
                "It automatically creates files if they don't exist"
              ],
              correctAnswer: 0,
              explanation: "The try-with-resources statement in Java automatically closes resources (like file streams) when they're no longer needed, even if an exception occurs. This helps prevent resource leaks and makes code cleaner by eliminating the need for explicit finally blocks to close resources."
            }
          ],
          flashcards: [
            {
              front: "What is the difference between byte streams and character streams in Java I/O?",
              back: "Byte streams (like InputStream and OutputStream) process data byte by byte (8 bits) and are suitable for binary data such as images or executable files. Character streams (like Reader and Writer) process data character by character, handling Unicode characters properly, and are suitable for text data. Character streams often use byte streams underneath with character encoding/decoding."
            }
          ]
        },
        {
          id: "java-threading",
          title: "Multithreading",
          description: "Creating and managing threads in Java",
          content: `
# Multithreading in Java

Multithreading allows concurrent execution of two or more parts of a program for maximum utilization of CPU.
          `,
          codeExamples: [
            {
              title: "Creating Threads",
              code: `public class ThreadDemo {
    // Way 1: Extending Thread class
    static class MyThread extends Thread {
        private String name;
        
        public MyThread(String name) {
            this.name = name;
        }
        
        @Override
        public void run() {
            System.out.println(name + " thread started");
            for (int i = 1; i <= 5; i++) {
                System.out.println(name + ": " + i);
                try {
                    Thread.sleep(500);
                } catch (InterruptedException e) {
                    System.out.println(name + " interrupted");
                    return;
                }
            }
            System.out.println(name + " thread completed");
        }
    }
    
    // Way 2: Implementing Runnable interface
    static class MyRunnable implements Runnable {
        private String name;
        
        public MyRunnable(String name) {
            this.name = name;
        }
        
        @Override
        public void run() {
            System.out.println(name + " runnable started");
            for (int i = 1; i <= 5; i++) {
                System.out.println(name + ": " + i);
                try {
                    Thread.sleep(500);
                } catch (InterruptedException e) {
                    System.out.println(name + " interrupted");
                    return;
                }
            }
            System.out.println(name + " runnable completed");
        }
    }
    
    public static void main(String[] args) {
        System.out.println("Main thread started");
        
        // Create and start threads using Thread extension
        MyThread thread1 = new MyThread("Thread1");
        thread1.start();
        
        // Create and start threads using Runnable implementation
        Thread thread2 = new Thread(new MyRunnable("Runnable1"));
        thread2.start();
        
        // Create and start thread using lambda expression (Java 8+)
        Thread thread3 = new Thread(() -> {
            System.out.println("Lambda thread started");
            for (int i = 1; i <= 5; i++) {
                System.out.println("Lambda: " + i);
                try {
                    Thread.sleep(500);
                } catch (InterruptedException e) {
                    System.out.println("Lambda thread interrupted");
                    return;
                }
            }
            System.out.println("Lambda thread completed");
        });
        thread3.start();
        
        // Wait for threads to complete
        try {
            thread1.join();
            thread2.join();
            thread3.join();
        } catch (InterruptedException e) {
            System.out.println("Main thread interrupted");
        }
        
        System.out.println("Main thread completed");
    }
}`,
              explanation: "This example demonstrates different ways to create and start threads in Java: by extending the Thread class, by implementing the Runnable interface, and by using lambda expressions (in Java 8+). It shows how to run code concurrently and wait for threads to complete using the join() method."
            },
            {
              title: "Thread Synchronization",
              code: `public class SynchronizationDemo {
    static class Counter {
        private int count = 0;
        
        // Synchronized method - only one thread can execute this at a time
        public synchronized void increment() {
            count++;
        }
        
        // Synchronized method
        public synchronized int getCount() {
            return count;
        }
        
        // Method with synchronized block
        public void incrementWithBlock() {
            // Some non-synchronized code could go here
            synchronized(this) {
                count++;
            }
            // More non-synchronized code could go here
        }
    }
    
    static class Worker implements Runnable {
        private Counter counter;
        private int incrementsPerWorker;
        
        public Worker(Counter counter, int incrementsPerWorker) {
            this.counter = counter;
            this.incrementsPerWorker = incrementsPerWorker;
        }
        
        @Override
        public void run() {
            for (int i = 0; i < incrementsPerWorker; i++) {
                counter.increment();
            }
        }
    }
    
    public static void main(String[] args) throws InterruptedException {
        // Without synchronization, we would get unpredictable results
        Counter counter = new Counter();
        int numThreads = 5;
        int incrementsPerWorker = 10000;
        
        // Create and start multiple threads
        Thread[] threads = new Thread[numThreads];
        for (int i = 0; i < numThreads; i++) {
            threads[i] = new Thread(new Worker(counter, incrementsPerWorker));
            threads[i].start();
        }
        
        // Wait for all threads to finish
        for (Thread thread : threads) {
            thread.join();
        }
        
        int expectedCount = numThreads * incrementsPerWorker;
        int actualCount = counter.getCount();
        
        System.out.println("Expected count: " + expectedCount);
        System.out.println("Actual count: " + actualCount);
        System.out.println("Synchronization " + 
            (expectedCount == actualCount ? "worked correctly" : "failed"));
    }
}`,
              explanation: "This example demonstrates thread synchronization in Java. Multiple threads increment a shared counter, and synchronization ensures that the increments don't interfere with each other. Without synchronization, the final count would likely be less than expected due to race conditions."
            }
          ],
          quiz: [
            {
              question: "What is the purpose of the synchronized keyword in Java?",
              options: [
                "To make a variable thread-safe",
                "To create a new thread",
                "To prevent multiple threads from executing a block of code simultaneously",
                "To terminate all running threads"
              ],
              correctAnswer: 2,
              explanation: "The synchronized keyword in Java is used to prevent multiple threads from executing a block of code or method simultaneously. It creates a monitor lock on an object or class that ensures only one thread can access the synchronized code at a time, helping to avoid race conditions and ensure thread safety."
            }
          ],
          flashcards: [
            {
              front: "What is a race condition in multithreaded programming?",
              back: "A race condition is a situation that occurs when multiple threads access shared data and try to change it at the same time. The outcome of the execution depends on the relative timing of events, which can lead to unpredictable behavior and bugs. Synchronization mechanisms like synchronized blocks/methods, locks, and atomic variables can prevent race conditions."
            }
          ]
        },
        {
          id: "java-generics",
          title: "Generics",
          description: "Creating type-safe classes and methods with generics",
          content: `
# Generics in Java

Generics enable you to create classes, interfaces, and methods that operate on a type parameter specified by the user, ensuring type safety.
          `,
          codeExamples: [
            {
              title: "Generic Classes",
              code: `// Generic class with a type parameter T
class Box<T> {
    private T content;
    
    public Box(T content) {
        this.content = content;
    }
    
    public T getContent() {
        return content;
    }
    
    public void setContent(T content) {
        this.content = content;
    }
}

// Generic class with multiple type parameters
class Pair<K, V> {
    private K key;
    private V value;
    
    public Pair(K key, V value) {
        this.key = key;
        this.value = value;
    }
    
    public K getKey() {
        return key;
    }
    
    public V getValue() {
        return value;
    }
    
    @Override
    public String toString() {
        return "(" + key + ", " + value + ")";
    }
}

public class GenericsDemo {
    public static void main(String[] args) {
        // Using the Box class with different types
        Box<Integer> intBox = new Box<>(42);
        Box<String> stringBox = new Box<>("Hello, Generics!");
        
        System.out.println("Int box content: " + intBox.getContent());
        System.out.println("String box content: " + stringBox.getContent());
        
        // Type safety - compile-time check
        // intBox.setContent("This would cause a compile error");
        
        // Using the Pair class
        Pair<String, Integer> idPair = new Pair<>("user123", 42);
        Pair<Double, Double> point = new Pair<>(3.14, 2.71);
        
        System.out.println("ID pair: " + idPair);
        System.out.println("Point: " + point);
        
        // Diamond operator (Java 7+) - type inference
        Box<Double> doubleBox = new Box<>(3.14);
        
        // Generic arrays are not allowed directly
        // Box<String>[] boxArray = new Box<String>[10]; // Compile error
        
        // But you can create an array of raw type and cast
        @SuppressWarnings("unchecked")
        Box<String>[] boxArray = (Box<String>[]) new Box[10];
        boxArray[0] = new Box<>("First element");
    }
}`,
              explanation: "This example demonstrates how to create and use generic classes in Java. The Box<T> class can hold any type, and the Pair<K, V> class demonstrates using multiple type parameters. Generics provide compile-time type safety, eliminating the need for explicit casting when retrieving elements."
            },
            {
              title: "Generic Methods and Wildcards",
              code: `import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class GenericMethodsDemo {
    // Generic method
    public static <T> void printArray(T[] array) {
        for (T element : array) {
            System.out.print(element + " ");
        }
        System.out.println();
    }
    
    // Generic method that returns a value
    public static <T> T findFirst(T[] array) {
        if (array == null || array.length == 0) {
            return null;
        }
        return array[0];
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
    
    // Method using wildcard (? extends T)
    public static double sumOfList(List<? extends Number> list) {
        double sum = 0;
        for (Number n : list) {
            sum += n.doubleValue();
        }
        return sum;
    }
    
    // Method using wildcard (? super T)
    public static void addNumbers(List<? super Integer> list) {
        for (int i = 1; i <= 5; i++) {
            list.add(i);
        }
    }
    
    public static void main(String[] args) {
        // Using generic methods
        Integer[] intArray = {1, 2, 3, 4, 5};
        String[] stringArray = {"apple", "banana", "cherry"};
        
        System.out.println("Integer Array:");
        printArray(intArray);
        
        System.out.println("String Array:");
        printArray(stringArray);
        
        Integer firstInt = findFirst(intArray);
        String firstString = findFirst(stringArray);
        System.out.println("First integer: " + firstInt);
        System.out.println("First string: " + firstString);
        
        // Using bounded type parameter
        String[] fruits = {"apple", "banana", "cherry", "dragonfruit"};
        String maxFruit = findMax(fruits);
        System.out.println("Max fruit: " + maxFruit);  // dragonfruit
        
        // Using wildcards
        List<Integer> intList = new ArrayList<>(Arrays.asList(1, 2, 3));
        List<Double> doubleList = new ArrayList<>(Arrays.asList(1.1, 2.2, 3.3));
        
        System.out.println("Sum of intList: " + sumOfList(intList));
        System.out.println("Sum of doubleList: " + sumOfList(doubleList));
        
        // Can't add a Double to List<Integer>
        // doubleList.add(4); // This would be allowed without generics!
        
        List<Number> numberList = new ArrayList<>();
        addNumbers(numberList);
        System.out.println("After adding numbers: " + numberList);
    }
}`,
              explanation: "This example demonstrates generic methods and wildcards in Java. It shows how to create methods that work with different types, bounded type parameters that restrict the types that can be used, and wildcards that provide flexibility when working with collections of different types."
            }
          ],
          quiz: [
            {
              question: "What is the purpose of the <T extends Comparable<T>> syntax in a generic class or method declaration?",
              options: [
                "It ensures that T is a subclass of Comparable",
                "It restricts T to types that implement the Comparable interface",
                "It creates a new type T that extends Comparable",
                "It makes T comparable to other types"
              ],
              correctAnswer: 1,
              explanation: "The <T extends Comparable<T>> syntax is a bounded type parameter declaration. It restricts the type parameter T to types that implement the Comparable interface. This ensures that objects of type T can be compared to each other using the compareTo method defined in the Comparable interface."
            }
          ],
          flashcards: [
            {
              front: "What's the difference between <?>, <? extends T>, and <? super T> in Java generics?",
              back: "- <?> (unbounded wildcard): Represents any type\n- <? extends T> (upper bounded wildcard): Represents T or any subtype of T\n- <? super T> (lower bounded wildcard): Represents T or any supertype of T\n\nThese wildcards help with flexibility. Generally, use <? extends T> when you only need to get values out of a structure, and <? super T> when you need to put values into a structure (PECS: Producer Extends, Consumer Super)."
            }
          ]
        },
        {
          id: "java-lambda",
          title: "Lambda Expressions",
          description: "Using functional programming features in Java",
          content: `
# Lambda Expressions in Java

Lambda expressions, introduced in Java 8, provide a concise way to represent anonymous functions (methods without names).
          `,
          codeExamples: [
            {
              title: "Basic Lambda Expressions",
              code: `import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.function.*;

public class LambdaDemo {
    public static void main(String[] args) {
        // Lambda expression with no parameters
        Runnable noParams = () -> System.out.println("No parameters");
        noParams.run();
        
        // Lambda expression with one parameter
        // The type is inferred
        Consumer<String> oneParam = s -> System.out.println("Hello, " + s);
        oneParam.accept("World");
        
        // Lambda expression with multiple parameters
        BiFunction<Integer, Integer, Integer> add = (a, b) -> a + b;
        System.out.println("5 + 3 = " + add.apply(5, 3));
        
        // Lambda expression with explicit type declarations
        BiFunction<Double, Double, Double> multiply = (Double a, Double b) -> a * b;
        System.out.println("2.5 * 3.0 = " + multiply.apply(2.5, 3.0));
        
        // Lambda expression with multiple statements
        Function<Integer, Integer> factorial = n -> {
            int result = 1;
            for (int i = 1; i <= n; i++) {
                result *= i;
            }
            return result;
        };
        System.out.println("Factorial of 5 = " + factorial.apply(5));
        
        // Using lambda expressions with collections
        List<String> names = Arrays.asList("Alice", "Bob", "Charlie", "Dave");
        
        // Sort the list using a lambda expression
        names.sort((s1, s2) -> s1.compareTo(s2));
        System.out.println("Sorted names: " + names);
        
        // Filter items using a lambda expression
        List<String> filteredNames = new ArrayList<>();
        names.forEach(name -> {
            if (name.startsWith("A") || name.startsWith("B")) {
                filteredNames.add(name);
            }
        });
        System.out.println("Filtered names: " + filteredNames);
        
        // Method reference - alternative to lambda in some cases
        names.forEach(System.out::println);
    }
}`,
              explanation: "This example demonstrates the basic syntax and usage of lambda expressions in Java. It shows lambda expressions with no parameters, one parameter, multiple parameters, explicit type declarations, and multiple statements. It also demonstrates how lambda expressions can be used with collections for operations like sorting and filtering."
            },
            {
              title: "Functional Interfaces and Method References",
              code: `import java.util.Arrays;
import java.util.List;
import java.util.function.*;
import java.util.stream.Collectors;

// Custom functional interface
@FunctionalInterface
interface MathOperation {
    int operate(int a, int b);
    
    // Functional interfaces can have default methods
    default MathOperation andThen(MathOperation after) {
        return (a, b) -> after.operate(operate(a, b), 0);
    }
}

// Class with methods for method references
class StringUtils {
    public static String toUpperCase(String str) {
        return str.toUpperCase();
    }
    
    public boolean startsWith(String str, String prefix) {
        return str.startsWith(prefix);
    }
}

public class FunctionalDemo {
    public static void main(String[] args) {
        // Using custom functional interface
        MathOperation add = (a, b) -> a + b;
        MathOperation subtract = (a, b) -> a - b;
        MathOperation multiply = (a, b) -> a * b;
        
        System.out.println("10 + 5 = " + add.operate(10, 5));
        System.out.println("10 - 5 = " + subtract.operate(10, 5));
        System.out.println("10 * 5 = " + multiply.operate(10, 5));
        
        // Combining operations
        MathOperation addThenMultiply = add.andThen(multiply);
        System.out.println("(10 + 5) * 0 = " + addThenMultiply.operate(10, 5));
        
        // Built-in functional interfaces
        Predicate<String> startsWithA = s -> s.startsWith("A");
        Consumer<String> printer = s -> System.out.println("Consumer: " + s);
        Function<String, Integer> lengthFunc = s -> s.length();
        Supplier<Double> randomValue = () -> Math.random();
        
        System.out.println("'Apple' starts with 'A': " + startsWithA.test("Apple"));
        printer.accept("Hello, lambda!");
        System.out.println("Length of 'Hello': " + lengthFunc.apply("Hello"));
        System.out.println("Random value: " + randomValue.get());
        
        // Method references
        List<String> names = Arrays.asList("Alice", "Bob", "Charlie");
        
        // Static method reference
        List<String> upperNames = names.stream()
                                      .map(StringUtils::toUpperCase)
                                      .collect(Collectors.toList());
        System.out.println("Uppercase names: " + upperNames);
        
        // Instance method reference
        StringUtils utils = new StringUtils();
        Predicate<String> startsWithB = s -> utils.startsWith(s, "B");
        System.out.println("Names starting with 'B': " + 
                           names.stream()
                                .filter(startsWithB)
                                .collect(Collectors.toList()));
        
        // Constructor reference
        Supplier<StringBuilder> sbSupplier = StringBuilder::new;
        StringBuilder sb = sbSupplier.get();
        sb.append("Hello from StringBuilder");
        System.out.println(sb);
    }
}`,
              explanation: "This example demonstrates functional interfaces and method references in Java. It shows how to create and use custom functional interfaces, how to use built-in functional interfaces like Predicate, Consumer, Function, and Supplier, and how to use method references as an alternative to lambda expressions for calling existing methods."
            }
          ],
          quiz: [
            {
              question: "What is a functional interface in Java?",
              options: [
                "An interface with exactly one abstract method",
                "An interface that extends the Function interface",
                "An interface with only static methods",
                "An interface that uses lambda expressions"
              ],
              correctAnswer: 0,
              explanation: "A functional interface in Java is an interface that has exactly one abstract method (although it can have multiple default or static methods). Functional interfaces can be used as the assignment target for lambda expressions or method references. The @FunctionalInterface annotation can be used to ensure that an interface meets the requirements of a functional interface."
            }
          ],
          flashcards: [
            {
              front: "What are the advantages of using lambda expressions in Java?",
              back: "Advantages of lambda expressions include:\n1. Concise code - less boilerplate compared to anonymous inner classes\n2. Functional programming capabilities - treating functions as first-class citizens\n3. Improved readability for simple operations\n4. Enables parallel processing with the Streams API\n5. More efficient implementation (potentially) than anonymous inner classes"
            }
          ]
        }
      ]
    }
  ]
};
