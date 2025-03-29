
import { LearningPath } from '../types';

export const pythonPath: LearningPath = {
  languageId: "python",
  modules: [
    {
      id: "py-basics",
      title: "Python Fundamentals",
      description: "Learn the core concepts of Python programming",
      topics: [
        {
          id: "py-variables",
          title: "Variables and Data Types",
          description: "Understanding how to store and manipulate data in Python",
          content: `
# Variables and Data Types in Python

In Python, variables are created when you assign a value to them. Python is dynamically typed, meaning you don't need to declare the type of a variable.
          `,
          codeExamples: [
            {
              title: "Working with Variables",
              code: `# Basic variable assignment
name = "Alice"
age = 30
is_student = True
height = 5.8

# Multiple assignment
x, y, z = 1, 2, 3

# Output variables
print("Name:", name)  # Name: Alice
print("Age:", age)    # Age: 30

# Type checking
print(type(name))     # <class 'str'>
print(type(age))      # <class 'int'>
print(type(height))   # <class 'float'>
print(type(is_student))  # <class 'bool'>

# Type conversion
str_age = str(age)    # Convert integer to string
int_value = int("42") # Convert string to integer
float_value = float("3.14")  # Convert string to float

print(type(str_age))  # <class 'str'>
print(int_value + 8)  # 50`,
              explanation: "This example demonstrates basic variable assignment, multiple assignment, checking types with the type() function, and type conversion in Python."
            },
            {
              title: "Data Structures",
              code: `# Lists - ordered, mutable
fruits = ["apple", "banana", "cherry"]
fruits.append("orange")
print(fruits)  # ['apple', 'banana', 'cherry', 'orange']
print(fruits[1])  # banana

# Tuples - ordered, immutable
coordinates = (10, 20)
# coordinates[0] = 5  # This would cause an error
print(coordinates[0])  # 10

# Dictionaries - key-value pairs
person = {
    "name": "John",
    "age": 30,
    "city": "New York"
}
person["email"] = "john@example.com"  # Add new key-value pair
print(person["name"])  # John
print(person.get("phone", "Not available"))  # Not available

# Sets - unordered, unique elements
numbers = {1, 2, 3, 2, 4}
print(numbers)  # {1, 2, 3, 4} (duplicates removed)
numbers.add(5)
print(numbers)  # {1, 2, 3, 4, 5}`,
              explanation: "This example shows how to work with Python's main data structures: lists, tuples, dictionaries, and sets."
            }
          ],
          quiz: [
            {
              question: "What will be the output of the following code?\n\nx = 5\ny = '5'\nprint(x + int(y))",
              options: ["10", "55", "5 + 5", "Error"],
              correctAnswer: 0,
              explanation: "The code first converts the string '5' to an integer using int(y), which results in 5. Then it adds this to x (which is 5), resulting in 10."
            },
            {
              question: "Which of the following is NOT a mutable data type in Python?",
              options: ["list", "dictionary", "set", "tuple"],
              correctAnswer: 3,
              explanation: "Tuples are immutable in Python, meaning once created, their elements cannot be changed. Lists, dictionaries, and sets are all mutable data types."
            }
          ],
          flashcards: [
            {
              front: "What is a variable in Python?",
              back: "A variable in Python is a named location in memory that stores a value. Variables are created when they are first assigned a value and do not need to be declared with any particular type."
            },
            {
              front: "What's the difference between a list and a tuple in Python?",
              back: "Both lists and tuples are ordered collections of items, but lists are mutable (can be changed after creation) while tuples are immutable (cannot be changed after creation). Lists use square brackets [] and tuples use parentheses ()."
            },
            {
              front: "What is type conversion in Python?",
              back: "Type conversion (or type casting) is the process of converting data from one type to another. Python provides built-in functions for this, such as int(), float(), str(), list(), tuple(), set(), and dict()."
            },
            {
              front: "What is a dictionary in Python?",
              back: "A dictionary is an unordered collection of key-value pairs. It's mutable, iterable, and doesn't allow duplicate keys. Dictionaries are defined with curly braces {} and colons : separating keys and values."
            },
            {
              front: "What are Python's numeric data types?",
              back: "Python has three numeric data types: int (integers), float (floating-point numbers), and complex (complex numbers with real and imaginary parts, like 1+2j)."
            }
          ]
        },
        {
          id: "py-control-flow",
          title: "Control Flow",
          description: "Working with conditional statements and loops in Python",
          content: `
# Control Flow in Python

Control flow statements determine the order in which code is executed based on certain conditions.
          `,
          codeExamples: [
            {
              title: "Conditional Statements",
              code: `# If statement
x = 10
if x > 5:
    print("x is greater than 5")

# If-else statement
y = 3
if y > 5:
    print("y is greater than 5")
else:
    print("y is not greater than 5")

# If-elif-else statement
z = 5
if z > 10:
    print("z is greater than 10")
elif z == 5:
    print("z is equal to 5")
else:
    print("z is less than 5")

# Ternary operator
age = 20
status = "adult" if age >= 18 else "minor"
print(status)  # adult`,
              explanation: "This example demonstrates different types of conditional statements in Python, including if, if-else, if-elif-else, and the ternary operator."
            }
          ],
          quiz: [
            {
              question: "What is the output of the following code?\n\nfor i in range(5):\n    if i == 3:\n        break\n    print(i)",
              options: ["0 1 2", "0 1 2 3", "0 1 2 3 4", "0 1 2 4"],
              correctAnswer: 0,
              explanation: "The loop iterates from 0 to 4. When i becomes 3, the break statement is executed, which terminates the loop. Therefore, only 0, 1, and 2 are printed."
            }
          ],
          flashcards: [
            {
              front: "What is the difference between break and continue in Python loops?",
              back: "break terminates the entire loop, while continue skips the current iteration and moves to the next one."
            }
          ]
        },
        {
          id: "py-functions",
          title: "Functions",
          description: "Creating and using functions in Python",
          content: `
# Functions in Python

Functions are blocks of code designed to perform a specific task. They help make code more modular and reusable.
          `,
          codeExamples: [
            {
              title: "Defining and Calling Functions",
              code: `# Basic function
def greet():
    print("Hello, World!")

# Function with parameters
def greet_person(name):
    print(f"Hello, {name}!")

# Function with return value
def add(a, b):
    return a + b

# Function with default parameters
def greet_with_message(name, message="Welcome"):
    print(f"{message}, {name}!")

# Function with variable number of arguments
def sum_all(*numbers):
    return sum(numbers)

# Calling functions
greet()  # Hello, World!
greet_person("Alice")  # Hello, Alice!
result = add(5, 3)
print(result)  # 8
greet_with_message("Bob")  # Welcome, Bob!
greet_with_message("Charlie", "Good morning")  # Good morning, Charlie!
total = sum_all(1, 2, 3, 4, 5)
print(total)  # 15`,
              explanation: "This example shows how to define and call functions in Python, including functions with parameters, return values, default parameters, and variable arguments."
            }
          ],
          quiz: [
            {
              question: "What is a lambda function in Python?",
              options: ["A named function defined with the 'lambda' keyword", "An anonymous function defined with the 'lambda' keyword", "A function that can only take one argument", "A function that automatically sorts a list"],
              correctAnswer: 1,
              explanation: "A lambda function in Python is an anonymous function (a function without a name) that can be defined in a single line using the 'lambda' keyword."
            }
          ],
          flashcards: [
            {
              front: "What is a function in Python?",
              back: "A function in Python is a block of reusable code designed to perform a specific task. It is defined using the 'def' keyword, followed by the function name and parameters."
            }
          ]
        },
        {
          id: "py-modules",
          title: "Modules and Packages",
          description: "Organizing and reusing code with modules and packages",
          content: `
# Modules and Packages in Python

Modules and packages help organize and modularize Python code, making it more maintainable and reusable.
          `,
          codeExamples: [
            {
              title: "Importing Modules",
              code: `# Importing the entire module
import math
print(math.pi)  # 3.141592653589793
print(math.sqrt(16))  # 4.0

# Importing specific functions or variables
from math import pi, sqrt
print(pi)  # 3.141592653589793
print(sqrt(16))  # 4.0

# Importing with an alias
import math as m
print(m.pi)  # 3.141592653589793

# Importing all functions and variables (not recommended)
from math import *
print(pi)  # 3.141592653589793
print(sqrt(16))  # 4.0`,
              explanation: "This example demonstrates different ways to import modules in Python, including importing the entire module, specific functions, using aliases, and importing all functions (though this is generally not recommended)."
            }
          ],
          quiz: [
            {
              question: "What is the purpose of the __init__.py file in a Python package?",
              options: ["To initialize variables when the package is imported", "To mark a directory as a Python package", "To document the package's functionality", "To list the modules contained in the package"],
              correctAnswer: 1,
              explanation: "The __init__.py file is used to mark a directory as a Python package. In earlier versions of Python (< 3.3), this file was required for a directory to be recognized as a package."
            }
          ],
          flashcards: [
            {
              front: "What is a module in Python?",
              back: "A module is a file containing Python definitions and statements. The file name is the module name with the suffix .py added."
            }
          ]
        },
        {
          id: "py-exceptions",
          title: "Exception Handling",
          description: "Handling errors and exceptions in Python",
          content: `
# Exception Handling in Python

Exception handling allows you to manage errors that might occur during program execution, preventing your program from crashing.
          `,
          codeExamples: [
            {
              title: "Basic Exception Handling",
              code: `# Try-except block
try:
    # Code that might raise an exception
    result = 10 / 0
except ZeroDivisionError:
    # Code to handle the exception
    print("Error: Division by zero")

# Try-except-else block
try:
    num = int("42")
except ValueError:
    print("Error: Invalid number")
else:
    print(f"Converted number: {num}")  # This will execute if no exception occurs

# Try-except-finally block
try:
    file = open("example.txt", "r")
    content = file.read()
except FileNotFoundError:
    print("Error: File not found")
finally:
    # This will execute whether an exception occurs or not
    print("Execution completed")

# Handling multiple exceptions
try:
    value = int(input("Enter a number: "))
    result = 10 / value
except ValueError:
    print("Error: Invalid input. Please enter a number.")
except ZeroDivisionError:
    print("Error: Cannot divide by zero.")
except Exception as e:
    # Catch-all for any other exceptions
    print(f"An error occurred: {e}")`,
              explanation: "This example demonstrates different aspects of exception handling in Python, including basic try-except blocks, try-except-else, try-except-finally, and handling multiple exceptions."
            }
          ],
          quiz: [
            {
              question: "What happens if an exception occurs in a try block and there is no matching except clause?",
              options: ["The program continues execution", "The program ignores the exception", "The exception is propagated to the calling function", "The program crashes with an error message"],
              correctAnswer: 2,
              explanation: "If an exception occurs in a try block and there is no matching except clause, the exception is propagated up the call stack to be handled by a calling function. If it's not handled anywhere, the program crashes with an error message."
            }
          ],
          flashcards: [
            {
              front: "What is an exception in Python?",
              back: "An exception is an event that occurs during the execution of a program that disrupts the normal flow of instructions. In Python, exceptions are objects representing errors."
            }
          ]
        }
      ]
    }
  ]
};
