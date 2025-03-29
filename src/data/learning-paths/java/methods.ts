
import { Topic } from '../../types';

export const methodsTopic: Topic = {
  id: "java-methods",
  title: "Methods in Java",
  description: "Learn how to define and use methods in Java",
  content: `
# Methods in Java

Methods are blocks of code that perform a specific task and can be called from other parts of the program.
  `,
  codeExamples: [
    {
      title: "Method Definition and Calling",
      code: `public class MethodsExample {
    // Method with no parameters and no return value
    public static void sayHello() {
        System.out.println("Hello!");
    }
    
    // Method with parameters and return value
    public static int add(int a, int b) {
        return a + b;
    }
    
    // Method with variable arguments (varargs)
    public static int sum(int... numbers) {
        int sum = 0;
        for (int num : numbers) {
            sum += num;
        }
        return sum;
    }
    
    // Method overloading
    public static double multiply(double a, double b) {
        return a * b;
    }
    
    public static double multiply(double a, double b, double c) {
        return a * b * c;
    }
    
    // Main method
    public static void main(String[] args) {
        // Calling method with no parameters
        sayHello();
        
        // Calling method with parameters
        int result = add(5, 3);
        System.out.println("5 + 3 = " + result);
        
        // Calling method with variable arguments
        int total = sum(1, 2, 3, 4, 5);
        System.out.println("Sum: " + total);
        
        // Calling overloaded methods
        double product1 = multiply(2.5, 3.0);
        double product2 = multiply(2.0, 3.0, 4.0);
        System.out.println("2.5 * 3.0 = " + product1);
        System.out.println("2.0 * 3.0 * 4.0 = " + product2);
    }
}`,
      explanation: "This example demonstrates how to define and call methods in Java, including methods with parameters, return values, variable arguments (varargs), and method overloading."
    }
  ],
  quiz: [
    {
      question: "What is method overloading in Java?",
      options: [
        "Defining multiple methods with the same name but different parameters",
        "Defining a method inside another method",
        "Overriding a method from a parent class",
        "Assigning too many tasks to a single method"
      ],
      correctAnswer: 0,
      explanation: "Method overloading in Java is the ability to define multiple methods with the same name but different parameters (different number, type, or order of parameters)."
    }
  ],
  flashcards: [
    {
      front: "What are the components of a method signature in Java?",
      back: "A method signature in Java consists of the method name and the parameter list (number, type, and order of parameters). It does not include the return type."
    }
  ]
};
