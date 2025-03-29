
import { Topic } from '../../types';

export const variablesTopic: Topic = {
  id: "java-variables",
  title: "Variables in Java",
  description: "Learn about variables, data types, and variable scope in Java",
  content: `
# Variables in Java

Variables are containers for storing data values in Java. Java is a statically-typed language, so variables must be declared with a specific type.
  `,
  codeExamples: [
    {
      title: "Variable Declaration and Usage",
      code: `public class VariablesExample {
    public static void main(String[] args) {
        // Variable declaration and initialization
        int age = 25;
        double salary = 50000.50;
        char grade = 'A';
        boolean isEmployed = true;
        String name = "John Doe";
        
        // Using variables
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("Salary: $" + salary);
        System.out.println("Grade: " + grade);
        System.out.println("Employed: " + isEmployed);
        
        // Variable reassignment
        age = 26;
        System.out.println("New age: " + age);
        
        // Constants in Java
        final double PI = 3.14159;
        // PI = 3.14; // This would cause an error
    }
}`,
      explanation: "This example demonstrates how to declare and use variables of different types in Java, as well as how to create constants using the 'final' keyword."
    }
  ],
  quiz: [
    {
      question: "How do you declare a constant in Java?",
      options: ["const int MAX = 100;", "final int MAX = 100;", "static int MAX = 100;", "constant int MAX = 100;"],
      correctAnswer: 1,
      explanation: "In Java, constants are declared using the 'final' keyword, not 'const' as in some other languages."
    }
  ],
  flashcards: [
    {
      front: "What is the difference between primitive and reference types in Java?",
      back: "Primitive types (int, boolean, etc.) store actual values and are stored on the stack, while reference types (objects) store references to objects in heap memory."
    }
  ]
};
