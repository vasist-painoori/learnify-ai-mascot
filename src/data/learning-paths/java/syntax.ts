
import { Topic } from '../../types';

export const syntaxTopic: Topic = {
  id: "java-syntax",
  title: "Java Syntax",
  description: "Learn the basic syntax rules of Java",
  content: `
# Java Syntax

Java has a C/C++-inspired syntax with strict rules and conventions.
  `,
  codeExamples: [
    {
      title: "Basic Syntax Elements",
      code: `// This is a single-line comment

/*
This is a 
multi-line comment
*/

public class SyntaxExample {
    public static void main(String[] args) {
        // Variables and statements
        int number = 10;
        String message = "Hello Java";
        
        // Output
        System.out.println(message + " " + number);
        
        // Conditional statement
        if (number > 5) {
            System.out.println("Number is greater than 5");
        }
    }
}`,
      explanation: "This example shows the basic syntax elements in Java including comments, class definition, method declaration, variables, and control structures."
    }
  ],
  quiz: [
    {
      question: "Which statement about Java syntax is true?",
      options: ["Java is case-insensitive", "Semicolons are optional", "All code must be inside a class", "Whitespace is significant like in Python"],
      correctAnswer: 2,
      explanation: "In Java, all code must be written inside classes, making it a truly object-oriented language."
    }
  ],
  flashcards: [
    {
      front: "What is the entry point of a Java application?",
      back: "The main method with the signature: public static void main(String[] args)"
    }
  ]
};
