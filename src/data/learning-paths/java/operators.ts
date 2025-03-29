
import { Topic } from '../../types';

export const operatorsTopic: Topic = {
  id: "java-operators",
  title: "Operators in Java",
  description: "Learn about the different types of operators in Java",
  content: `
# Operators in Java

Java provides a rich set of operators for performing operations on variables and values.
  `,
  codeExamples: [
    {
      title: "Java Operators",
      code: `public class OperatorsExample {
    public static void main(String[] args) {
        // Arithmetic operators
        int a = 10, b = 5;
        System.out.println("a + b = " + (a + b));  // Addition
        System.out.println("a - b = " + (a - b));  // Subtraction
        System.out.println("a * b = " + (a * b));  // Multiplication
        System.out.println("a / b = " + (a / b));  // Division
        System.out.println("a % b = " + (a % b));  // Modulus
        
        // Unary operators
        System.out.println("++a = " + (++a));      // Pre-increment
        System.out.println("--b = " + (--b));      // Pre-decrement
        
        // Relational operators
        System.out.println("a == b : " + (a == b));  // Equal to
        System.out.println("a != b : " + (a != b));  // Not equal to
        System.out.println("a > b : " + (a > b));    // Greater than
        System.out.println("a < b : " + (a < b));    // Less than
        
        // Logical operators
        boolean x = true, y = false;
        System.out.println("x && y : " + (x && y));  // Logical AND
        System.out.println("x || y : " + (x || y));  // Logical OR
        System.out.println("!x : " + (!x));          // Logical NOT
        
        // Assignment operators
        int c = 15;
        c += 5;  // c = c + 5
        System.out.println("c += 5 : " + c);
        
        // Bitwise operators
        int d = 5;  // 101 in binary
        int e = 3;  // 011 in binary
        System.out.println("d & e : " + (d & e));    // Bitwise AND
        System.out.println("d | e : " + (d | e));    // Bitwise OR
        System.out.println("d ^ e : " + (d ^ e));    // Bitwise XOR
    }
}`,
      explanation: "This example demonstrates the various operators available in Java including arithmetic, unary, relational, logical, assignment, and bitwise operators."
    }
  ],
  quiz: [
    {
      question: "What is the output of 10 % 3 in Java?",
      options: ["3", "1", "0", "3.33"],
      correctAnswer: 1,
      explanation: "The % operator in Java represents the modulus operation, which returns the remainder of a division. 10 divided by 3 is 3 with a remainder of 1, so 10 % 3 equals 1."
    }
  ],
  flashcards: [
    {
      front: "What's the difference between = and == in Java?",
      back: "= is the assignment operator used to assign values to variables, while == is the equality operator used to compare values."
    }
  ]
};
