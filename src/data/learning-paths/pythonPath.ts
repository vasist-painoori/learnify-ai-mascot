
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
        // ... Additional Python topics would be defined here
      ]
    }
  ]
};
