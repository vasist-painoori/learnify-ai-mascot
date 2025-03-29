import { Topic } from '../../types';

export const controlFlowTopic: Topic = {
  id: "csharp-control-flow",
  title: "Control Flow in C#",
  description: "Learn about decision making and loops in C#",
  content: `
# Control Flow in C#

Control flow statements allow you to control the flow of your program's execution based on conditions and iterations.
  `,
  codeExamples: [
    {
      title: "Decision Making and Loops",
      code: `using System;

namespace ControlFlowExample
{
    class Program
    {
        static void Main(string[] args)
        {
            // If statement
            int age = 20;
            
            if (age >= 18)
            {
                Console.WriteLine("You are an adult.");
            }
            
            // If-else statement
            int temperature = 15;
            
            if (temperature > 30)
            {
                Console.WriteLine("It's hot outside!");
            }
            else
            {
                Console.WriteLine("It's not hot outside.");
            }
            
            // If-else if-else statement
            int score = 85;
            string grade;
            
            if (score >= 90)
            {
                grade = "A";
            }
            else if (score >= 80)
            {
                grade = "B";
            }
            else if (score >= 70)
            {
                grade = "C";
            }
            else if (score >= 60)
            {
                grade = "D";
            }
            else
            {
                grade = "F";
            }
            
            Console.WriteLine($"Score: {score}, Grade: {grade}");
            
            // Nested if statements
            int num = 15;
            
            if (num > 0)
            {
                if (num % 2 == 0)
                {
                    Console.WriteLine($"{num} is a positive even number.");
                }
                else
                {
                    Console.WriteLine($"{num} is a positive odd number.");
                }
            }
            else if (num < 0)
            {
                Console.WriteLine($"{num} is a negative number.");
            }
            else
            {
                Console.WriteLine("The number is zero.");
            }
            
            // Switch statement
            int day = 3;
            string dayName;
            
            switch (day)
            {
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
            
            Console.WriteLine($"Day {day} is {dayName}");
            
            // Switch expression (C# 8.0+)
            /*
            dayName = day switch
            {
                1 => "Monday",
                2 => "Tuesday",
                3 => "Wednesday",
                4 => "Thursday",
                5 => "Friday",
                6 => "Saturday",
                7 => "Sunday",
                _ => "Invalid day"
            };
            */
            
            // For loop
            Console.WriteLine("For loop:");
            for (int i = 1; i <= 5; i++)
            {
                Console.Write($"{i} ");
            }
            Console.WriteLine();
            
            // While loop
            Console.WriteLine("While loop:");
            int j = 1;
            while (j <= 5)
            {
                Console.Write($"{j} ");
                j++;
            }
            Console.WriteLine();
            
            // Do-while loop
            Console.WriteLine("Do-while loop:");
            int k = 1;
            do
            {
                Console.Write($"{k} ");
                k++;
            } while (k <= 5);
            Console.WriteLine();
            
            // Foreach loop
            Console.WriteLine("Foreach loop:");
            int[] numbers = { 1, 2, 3, 4, 5 };
            foreach (int number in numbers)
            {
                Console.Write($"{number} ");
            }
            Console.WriteLine();
            
            // Break statement
            Console.WriteLine("Break example:");
            for (int i = 1; i <= 10; i++)
            {
                if (i == 6)
                {
                    break;  // Exit loop when i is 6
                }
                Console.Write($"{i} ");
            }
            Console.WriteLine();
            
            // Continue statement
            Console.WriteLine("Continue example:");
            for (int i = 1; i <= 10; i++)
            {
                if (i % 2 == 0)
                {
                    continue;  // Skip even numbers
                }
                Console.Write($"{i} ");  // Print only odd numbers
            }
            Console.WriteLine();
            
            // Keep console window open
            Console.ReadLine();
        }
    }
}`,
      explanation: "This example demonstrates various control flow statements in C# including if, if-else, if-else if-else, nested if statements, switch statements, for loops, while loops, do-while loops, foreach loops, and the break and continue statements for controlling loop execution."
    }
  ],
  quiz: [
    {
      question: "Which loop in C# is guaranteed to execute at least once?",
      options: ["for loop", "while loop", "do-while loop", "foreach loop"],
      correctAnswer: 2,
      explanation: "The do-while loop in C# always executes its body at least once before checking the condition, unlike for and while loops which check the condition before the first iteration."
    }
  ],
  flashcards: [
    {
      front: "What's the difference between break and continue in C# loops?",
      back: "break terminates the loop completely and continues execution after the loop. continue skips the current iteration and proceeds to the next iteration of the loop (after reevaluating the loop condition)."
    }
  ]
};
