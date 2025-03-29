
import { Topic } from '../../types';

export const syntaxTopic: Topic = {
  id: "python-syntax",
  title: "Python Syntax",
  description: "Learn the basic syntax and structure of Python code",
  content: `
# Python Syntax

Python has a clean, readable syntax that uses indentation for code blocks instead of curly braces or keywords.
  `,
  codeExamples: [
    {
      title: "Basic Syntax",
      code: `# This is a comment
print("Hello, Python!")  # This is also a comment

# Variables and data types
name = "Alice"  # String
age = 25        # Integer
height = 5.7    # Float
is_student = True  # Boolean

# Printing variables
print(name)
print(age)

# Indentation for code blocks
if age >= 18:
    print("Adult")
else:
    print("Minor")

# Functions
def greet(name):
    """This is a docstring - used for documentation."""
    return f"Hello, {name}!"

message = greet("Bob")
print(message)`,
      explanation: "This example demonstrates Python's basic syntax including comments, variables, printing, indentation for code blocks, and function definitions with docstrings."
    }
  ],
  quiz: [
    {
      question: "What is used to define code blocks in Python?",
      options: ["Curly braces {}", "Keywords like 'begin' and 'end'", "Parentheses ()", "Indentation"],
      correctAnswer: 3,
      explanation: "Python uses indentation (whitespace at the beginning of lines) to define code blocks, instead of curly braces or keywords used in many other languages."
    }
  ],
  flashcards: [
    {
      front: "Why is indentation important in Python?",
      back: "Indentation in Python is not just for readability - it's a core part of the syntax that defines code blocks. Incorrect indentation will cause syntax errors or unexpected behavior."
    }
  ]
};
