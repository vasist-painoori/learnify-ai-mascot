
import { Topic } from '../../types';

export const conditionalsTopic: Topic = {
  id: "python-conditionals",
  title: "Conditionals in Python",
  description: "Learn about conditional statements in Python",
  content: `
# Conditionals in Python

Conditional statements allow you to execute different code blocks based on whether a condition is true or false.
  `,
  codeExamples: [
    {
      title: "If-Else Statements",
      code: `# Basic if statement
age = 20

if age >= 18:
    print("You are an adult.")

# If-else statement
temperature = 15

if temperature > 30:
    print("It's hot outside!")
else:
    print("It's not hot outside.")

# If-elif-else statement
score = 85

if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
elif score >= 60:
    grade = "D"
else:
    grade = "F"

print(f"Score: {score}, Grade: {grade}")

# Nested if statements
num = 15

if num > 0:
    if num % 2 == 0:
        print(f"{num} is a positive even number.")
    else:
        print(f"{num} is a positive odd number.")
elif num < 0:
    print(f"{num} is a negative number.")
else:
    print("The number is zero.")

# Conditional expressions (ternary operator)
age = 20
status = "adult" if age >= 18 else "minor"
print(f"Status: {status}")

# Logical operators in conditions
username = "admin"
password = "password123"

if username == "admin" and password == "password123":
    print("Login successful")
else:
    print("Login failed")

# Truthy and falsy values
value = ""  # Empty string is falsy

if value:
    print("Value is truthy")
else:
    print("Value is falsy")`,
      explanation: "This example demonstrates the different types of conditional statements in Python, including if, if-else, if-elif-else, nested if statements, and conditional expressions (ternary operator). It also shows how to use logical operators in conditions and truthy/falsy value checking."
    }
  ],
  quiz: [
    {
      question: "What will the following code output? x = 5; print('Positive' if x > 0 else 'Non-positive')",
      options: ["Positive", "Non-positive", "Error", "Nothing"],
      correctAnswer: 0,
      explanation: "This code uses a conditional expression (ternary operator) to check if x is greater than 0. Since x is 5, which is greater than 0, it will output 'Positive'."
    }
  ],
  flashcards: [
    {
      front: "What are truthy and falsy values in Python?",
      back: "In Python, values are considered 'truthy' if they evaluate to True in a boolean context, and 'falsy' if they evaluate to False. Falsy values include: False, None, 0, empty strings, empty lists/tuples/dictionaries, and any other empty container. All other values are truthy."
    }
  ]
};
