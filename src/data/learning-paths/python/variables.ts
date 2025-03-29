
import { Topic } from '../../types';

export const variablesTopic: Topic = {
  id: "python-variables",
  title: "Variables in Python",
  description: "Learn how to create and use variables in Python",
  content: `
# Variables in Python

Variables in Python are dynamically typed, meaning you don't need to declare their type before using them.
  `,
  codeExamples: [
    {
      title: "Variable Declaration and Assignment",
      code: `# Basic variable assignment
name = "John"
age = 30
height = 1.75
is_student = False

# Print variables
print(name)
print(age)
print(height)
print(is_student)

# Multiple assignment
a, b, c = 1, 2, 3
print(a, b, c)

# Swapping variables
x = 5
y = 10
x, y = y, x
print(f"x = {x}, y = {y}")  # Output: x = 10, y = 5

# Variable reassignment
count = 1
print(count)
count = "one"  # Python allows changing types
print(count)

# Constants (by convention, use uppercase)
PI = 3.14159
GRAVITY = 9.8
print(PI, GRAVITY)`,
      explanation: "This example shows how to declare, assign, and use variables in Python. Unlike statically typed languages, Python variables can change types during execution."
    }
  ],
  quiz: [
    {
      question: "Which statement is true about variables in Python?",
      options: [
        "Variables must be declared with their type before use",
        "Variables cannot change their type once assigned",
        "Variables are dynamically typed and can change types",
        "Variables must start with a capital letter"
      ],
      correctAnswer: 2,
      explanation: "Python variables are dynamically typed, meaning they can change types during execution. You don't need to declare their type before using them."
    }
  ],
  flashcards: [
    {
      front: "What naming rules apply to Python variables?",
      back: "Python variable names must start with a letter or underscore, can contain letters, numbers, and underscores, are case-sensitive, and cannot be Python reserved words (keywords)."
    }
  ]
};
