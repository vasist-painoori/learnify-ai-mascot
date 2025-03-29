
import { Topic } from '../../types';

export const dataTypesTopic: Topic = {
  id: "java-data-types",
  title: "Data Types in Java",
  description: "Understand primitive and reference data types in Java",
  content: `
# Data Types in Java

Java has two categories of data types: primitive types and reference types.
  `,
  codeExamples: [
    {
      title: "Primitive Data Types",
      code: `public class DataTypesExample {
    public static void main(String[] args) {
        // Integer types
        byte b = 127;                // 8-bit, -128 to 127
        short s = 32767;             // 16-bit, -32,768 to 32,767
        int i = 2147483647;          // 32-bit, -2^31 to 2^31-1
        long l = 9223372036854775807L; // 64-bit, -2^63 to 2^63-1
        
        // Floating-point types
        float f = 3.14f;             // 32-bit floating point
        double d = 3.14159265359;    // 64-bit floating point
        
        // Character type
        char c = 'A';                // 16-bit Unicode character
        
        // Boolean type
        boolean bool = true;         // true or false
        
        System.out.println("byte: " + b);
        System.out.println("short: " + s);
        System.out.println("int: " + i);
        System.out.println("long: " + l);
        System.out.println("float: " + f);
        System.out.println("double: " + d);
        System.out.println("char: " + c);
        System.out.println("boolean: " + bool);
        
        // Reference types
        String str = "Hello Java";
        int[] numbers = {1, 2, 3, 4, 5};
        
        System.out.println("String: " + str);
        System.out.println("Array first element: " + numbers[0]);
    }
}`,
      explanation: "This example shows all the primitive data types in Java, their sizes, and ranges, as well as examples of reference types like String and arrays."
    }
  ],
  quiz: [
    {
      question: "Which of the following is NOT a primitive data type in Java?",
      options: ["int", "float", "String", "boolean"],
      correctAnswer: 2,
      explanation: "String is a reference type (class) in Java, not a primitive type. The primitive types include boolean, char, byte, short, int, long, float, and double."
    }
  ],
  flashcards: [
    {
      front: "What is type casting in Java?",
      back: "Type casting is the process of converting a variable from one data type to another. Widening conversion (implicit) happens automatically when converting to a larger data type, while narrowing conversion (explicit) requires a cast operator and may result in data loss."
    }
  ]
};
