
import { Topic } from '../../types';

export const controlFlowTopic: Topic = {
  id: "java-control-flow",
  title: "Control Flow in Java",
  description: "Learn about decision making and loops in Java",
  content: `
# Control Flow in Java

Control flow statements allow you to control the flow of your program based on conditions and iterations.
  `,
  codeExamples: [
    {
      title: "If-Else Statements",
      code: `public class ControlFlowExample {
    public static void main(String[] args) {
        // If-else statement
        int age = 20;
        
        if (age < 18) {
            System.out.println("Minor");
        } else if (age >= 18 && age < 65) {
            System.out.println("Adult");
        } else {
            System.out.println("Senior");
        }
        
        // Switch statement
        int day = 3;
        String dayName;
        
        switch (day) {
            case 1:
                dayName = "Monday";
                break;
            case 2:
                dayName = "Tuesday";
                break;
            case 3:
                dayName = "Wednesday";
                break;
            case 4:
                dayName = "Thursday";
                break;
            case 5:
                dayName = "Friday";
                break;
            case 6:
                dayName = "Saturday";
                break;
            case 7:
                dayName = "Sunday";
                break;
            default:
                dayName = "Invalid day";
                break;
        }
        System.out.println("Day: " + dayName);
        
        // For loop
        System.out.println("For loop:");
        for (int i = 1; i <= 5; i++) {
            System.out.print(i + " ");
        }
        System.out.println();
        
        // While loop
        System.out.println("While loop:");
        int j = 1;
        while (j <= 5) {
            System.out.print(j + " ");
            j++;
        }
        System.out.println();
        
        // Do-while loop
        System.out.println("Do-while loop:");
        int k = 1;
        do {
            System.out.print(k + " ");
            k++;
        } while (k <= 5);
        System.out.println();
        
        // Enhanced for loop (for-each)
        System.out.println("Enhanced for loop:");
        int[] numbers = {1, 2, 3, 4, 5};
        for (int num : numbers) {
            System.out.print(num + " ");
        }
    }
}`,
      explanation: "This example demonstrates various control flow statements in Java including if-else, switch, for loop, while loop, do-while loop, and enhanced for loop."
    }
  ],
  quiz: [
    {
      question: "Which loop in Java is guaranteed to execute at least once?",
      options: ["for loop", "while loop", "do-while loop", "for-each loop"],
      correctAnswer: 2,
      explanation: "The do-while loop in Java always executes its body at least once before checking its condition, unlike for and while loops which check the condition before the first iteration."
    }
  ],
  flashcards: [
    {
      front: "What's the difference between break and continue in Java loops?",
      back: "break terminates the loop completely, while continue skips the current iteration and proceeds to the next iteration of the loop."
    }
  ]
};
