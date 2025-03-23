
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
            },
            {
              front: "What is the difference between JDK and JRE?",
              back: "JDK (Java Development Kit) is for developers and includes development tools like compiler and debugger. JRE (Java Runtime Environment) is for users who want to run Java programs and includes the JVM and libraries."
            },
            {
              front: "What are access modifiers in Java?",
              back: "Access modifiers in Java control the visibility of classes, methods, and variables. They include public (accessible from anywhere), protected (accessible in the same package and subclasses), default/package-private (accessible only in the same package), and private (accessible only within the class)."
            },
            {
              front: "What is the difference between '==' and .equals() in Java?",
              back: "'==' compares object references (checks if both references point to the same object in memory), while .equals() compares the actual content/values of objects. For strings and other objects, use .equals() to compare content."
            }
          ]
        },
        // ... Additional Java topics would be defined here
      ]
    }
  ]
};
