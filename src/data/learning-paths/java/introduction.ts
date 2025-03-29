
import { Topic } from '../../types';

export const introductionTopic: Topic = {
  id: "java-introduction",
  title: "Introduction to Java",
  description: "Get started with Java programming",
  content: `
# Introduction to Java

Java is a popular, object-oriented programming language known for its "write once, run anywhere" philosophy.
  `,
  codeExamples: [
    {
      title: "Hello, World!",
      code: `public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`,
      explanation: "This classic Hello World program demonstrates the basic structure of a Java program with a class, main method, and output statement."
    }
  ],
  quiz: [
    {
      question: "What is Java's main advantage?",
      options: ["It's the newest language", "Platform independence", "No garbage collection", "Dynamic typing"],
      correctAnswer: 1,
      explanation: "Java's 'write once, run anywhere' philosophy through its bytecode and JVM system makes it platform independent."
    }
  ],
  flashcards: [
    {
      front: "What does JVM stand for?",
      back: "Java Virtual Machine - the runtime environment that executes Java bytecode on different platforms."
    }
  ]
};
