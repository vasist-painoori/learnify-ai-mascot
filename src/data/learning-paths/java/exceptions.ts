
import { Topic } from '../../types';

export const exceptionsTopic: Topic = {
  id: "java-exceptions",
  title: "Exception Handling in Java",
  description: "Learn how to handle exceptions and errors in Java",
  content: `
# Exception Handling in Java

Exception handling allows you to handle runtime errors gracefully and make your program more robust.
  `,
  codeExamples: [
    {
      title: "Try-Catch Blocks",
      code: `import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class ExceptionHandlingExample {
    public static void main(String[] args) {
        // Basic try-catch
        try {
            int[] numbers = {1, 2, 3};
            System.out.println(numbers[5]); // This will throw an exception
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Array index error: " + e.getMessage());
        }
        
        // Multiple catch blocks
        try {
            int result = 10 / 0; // This will throw an exception
            System.out.println(result);
        } catch (ArithmeticException e) {
            System.out.println("Arithmetic error: " + e.getMessage());
        } catch (Exception e) {
            System.out.println("General error: " + e.getMessage());
        }
        
        // Try-catch-finally
        try {
            System.out.println("Try block executed");
            // Some code that might throw an exception
        } catch (Exception e) {
            System.out.println("Exception caught: " + e.getMessage());
        } finally {
            System.out.println("Finally block always executes");
        }
        
        // Try-with-resources (Java 7+)
        try {
            readFile("example.txt");
        } catch (FileNotFoundException e) {
            System.out.println("File not found: " + e.getMessage());
        }
        
        // Throwing exceptions
        try {
            validateAge(-5);
        } catch (IllegalArgumentException e) {
            System.out.println("Validation error: " + e.getMessage());
        }
    }
    
    // Method that declares an exception
    public static void readFile(String filename) throws FileNotFoundException {
        File file = new File(filename);
        Scanner scanner = new Scanner(file);
        while (scanner.hasNextLine()) {
            System.out.println(scanner.nextLine());
        }
        scanner.close();
    }
    
    // Method that throws an exception
    public static void validateAge(int age) {
        if (age < 0) {
            throw new IllegalArgumentException("Age cannot be negative");
        }
        System.out.println("Age is valid: " + age);
    }
}`,
      explanation: "This example demonstrates various exception handling techniques in Java, including try-catch blocks, multiple catch blocks, try-catch-finally, try-with-resources, throwing exceptions, and declaring methods that throw exceptions."
    }
  ],
  quiz: [
    {
      question: "What is the purpose of the 'finally' block in Java exception handling?",
      options: [
        "It executes only if an exception is caught",
        "It executes only if no exception is thrown",
        "It executes regardless of whether an exception is thrown or caught",
        "It executes instead of the catch block"
      ],
      correctAnswer: 2,
      explanation: "The 'finally' block in Java exception handling always executes, regardless of whether an exception is thrown or caught. It's typically used for cleanup code like closing resources."
    }
  ],
  flashcards: [
    {
      front: "What's the difference between checked and unchecked exceptions in Java?",
      back: "Checked exceptions are checked at compile-time and must be either caught or declared in the method signature using 'throws'. Examples include IOException and SQLException. Unchecked exceptions (RuntimeException and its subclasses) are not checked at compile-time and don't need to be explicitly caught or declared."
    }
  ]
};
