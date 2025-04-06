
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
            },
            {
              title: "Loops",
              code: `# For loop with range
for i in range(5):
    print(i)  # Prints 0, 1, 2, 3, 4

# For loop with list
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)

# While loop
count = 0
while count < 5:
    print(count)
    count += 1

# Break statement
for i in range(10):
    if i == 5:
        break
    print(i)  # Prints 0, 1, 2, 3, 4

# Continue statement
for i in range(5):
    if i == 2:
        continue
    print(i)  # Prints 0, 1, 3, 4`,
              explanation: "This example shows different types of loops in Python, including for loops with range and lists, while loops, and using break and continue statements."
            }
          ],
          quiz: [
            {
              question: "What is the output of the following code?\n\nfor i in range(5):\n    if i == 3:\n        break\n    print(i)",
              options: ["0 1 2", "0 1 2 3", "0 1 2 3 4", "0 1 2 4"],
              correctAnswer: 0,
              explanation: "The loop iterates from 0 to 4. When i becomes 3, the break statement is executed, which terminates the loop. Therefore, only 0, 1, and 2 are printed."
            },
            {
              question: "Which statement is used to skip the current iteration of a loop and continue with the next one?",
              options: ["break", "continue", "pass", "return"],
              correctAnswer: 1,
              explanation: "The continue statement is used to skip the current iteration and move to the next one. The loop does not terminate, unlike with the break statement."
            }
          ],
          flashcards: [
            {
              front: "What is the difference between break and continue in Python loops?",
              back: "break terminates the entire loop, while continue skips the current iteration and moves to the next one."
            },
            {
              front: "What is the range() function used for in Python?",
              back: "The range() function generates a sequence of numbers that can be used in loops. It can take 1, 2, or 3 arguments: range(stop), range(start, stop), or range(start, stop, step)."
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
            },
            {
              title: "Lambda Functions",
              code: `# Lambda function (anonymous function)
square = lambda x: x * x
print(square(5))  # 25

# Using lambda with built-in functions
numbers = [1, 2, 3, 4, 5]
squared = list(map(lambda x: x * x, numbers))
print(squared)  # [1, 4, 9, 16, 25]

# Using lambda with filter
even_numbers = list(filter(lambda x: x % 2 == 0, numbers))
print(even_numbers)  # [2, 4]

# Using lambda with sorted
students = [
    {"name": "Alice", "grade": 85},
    {"name": "Bob", "grade": 92},
    {"name": "Charlie", "grade": 78}
]
sorted_students = sorted(students, key=lambda student: student["grade"], reverse=True)
for student in sorted_students:
    print(f"{student['name']}: {student['grade']}")  # Bob: 92, Alice: 85, Charlie: 78`,
              explanation: "This example demonstrates lambda functions (anonymous functions) and how to use them with built-in functions like map, filter, and sorted."
            }
          ],
          quiz: [
            {
              question: "What is a lambda function in Python?",
              options: ["A named function defined with the 'lambda' keyword", "An anonymous function defined with the 'lambda' keyword", "A function that can only take one argument", "A function that automatically sorts a list"],
              correctAnswer: 1,
              explanation: "A lambda function in Python is an anonymous function (a function without a name) that can be defined in a single line using the 'lambda' keyword."
            },
            {
              question: "What will be the output of the following code?\n\ndef multiply(a, b=2):\n    return a * b\n\nprint(multiply(3))",
              options: ["3", "6", "2", "Error"],
              correctAnswer: 1,
              explanation: "The function multiply has a default parameter b=2. When calling multiply(3), the argument 3 is assigned to parameter a, and b uses its default value of 2. Therefore, the result is 3 * 2 = 6."
            }
          ],
          flashcards: [
            {
              front: "What is a function in Python?",
              back: "A function in Python is a block of reusable code designed to perform a specific task. It is defined using the 'def' keyword, followed by the function name and parameters."
            },
            {
              front: "What are keyword arguments in Python functions?",
              back: "Keyword arguments are arguments passed to a function with a name=value syntax. They allow you to specify which parameter each argument is assigned to, regardless of position."
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
            },
            {
              title: "Creating and Using Custom Modules",
              code: `# File: mymodule.py
def greet(name):
    return f"Hello, {name}!"

def add(a, b):
    return a + b

PI = 3.14159265359

# File: main.py
import mymodule

print(mymodule.greet("Alice"))  # Hello, Alice!
print(mymodule.add(5, 3))  # 8
print(mymodule.PI)  # 3.14159265359

# Alternatively
from mymodule import greet, add, PI

print(greet("Bob"))  # Hello, Bob!
print(add(10, 20))  # 30
print(PI)  # 3.14159265359`,
              explanation: "This example shows how to create and use custom modules in Python by creating a file (mymodule.py) with functions and variables, and then importing and using them in another file (main.py)."
            }
          ],
          quiz: [
            {
              question: "What is the purpose of the __init__.py file in a Python package?",
              options: ["To initialize variables when the package is imported", "To mark a directory as a Python package", "To document the package's functionality", "To list the modules contained in the package"],
              correctAnswer: 1,
              explanation: "The __init__.py file is used to mark a directory as a Python package. In earlier versions of Python (< 3.3), this file was required for a directory to be recognized as a package."
            },
            {
              question: "Which statement is NOT a valid way to import a module in Python?",
              options: ["import module", "from module import function", "import module as alias", "import function from module"],
              correctAnswer: 3,
              explanation: "The syntax 'import function from module' is not valid in Python. The correct way would be 'from module import function'."
            }
          ],
          flashcards: [
            {
              front: "What is a module in Python?",
              back: "A module is a file containing Python definitions and statements. The file name is the module name with the suffix .py added."
            },
            {
              front: "What is a package in Python?",
              back: "A package is a directory containing multiple modules and a special __init__.py file that indicates the directory is a Python package. Packages allow for hierarchical organization of modules."
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
            },
            {
              title: "Raising Exceptions",
              code: `# Raising exceptions explicitly
def divide(a, b):
    if b == 0:
        raise ZeroDivisionError("Cannot divide by zero")
    return a / b

try:
    result = divide(10, 0)
except ZeroDivisionError as e:
    print(f"Error: {e}")  # Error: Cannot divide by zero

# Creating custom exceptions
class CustomError(Exception):
    def __init__(self, message):
        self.message = message
        super().__init__(self.message)

# Using custom exceptions
def validate_age(age):
    if age < 0:
        raise CustomError("Age cannot be negative")
    if age < 18:
        raise CustomError("Age must be at least 18")
    return "Age is valid"

try:
    print(validate_age(-5))
except CustomError as e:
    print(f"Error: {e}")  # Error: Age cannot be negative`,
              explanation: "This example shows how to raise exceptions explicitly using the raise statement, and how to create and use custom exception classes."
            }
          ],
          quiz: [
            {
              question: "What happens if an exception occurs in a try block and there is no matching except clause?",
              options: ["The program continues execution", "The program ignores the exception", "The exception is propagated to the calling function", "The program crashes with an error message"],
              correctAnswer: 2,
              explanation: "If an exception occurs in a try block and there is no matching except clause, the exception is propagated up the call stack to be handled by a calling function. If it's not handled anywhere, the program crashes with an error message."
            },
            {
              question: "In Python, which block of code is always executed regardless of whether an exception occurs or not?",
              options: ["try block", "except block", "else block", "finally block"],
              correctAnswer: 3,
              explanation: "The finally block is always executed, regardless of whether an exception occurs or not. This makes it useful for releasing resources (like file handles) that need to be closed even if an error occurs."
            }
          ],
          flashcards: [
            {
              front: "What is an exception in Python?",
              back: "An exception is an event that occurs during the execution of a program that disrupts the normal flow of instructions. In Python, exceptions are objects representing errors."
            },
            {
              front: "What is the difference between the else and finally blocks in a try statement?",
              back: "The else block is executed only if no exception occurs in the try block, while the finally block is always executed, regardless of whether an exception occurs or not."
            }
          ]
        },
        {
          id: "py-file-io",
          title: "File I/O",
          description: "Working with files and directories in Python",
          content: `
# File I/O in Python

Python provides built-in functions and methods for working with files, making it easy to read from and write to files.
          `,
          codeExamples: [
            {
              title: "Reading and Writing Text Files",
              code: `# Writing to a file
with open("example.txt", "w") as file:
    file.write("Hello, World!\\n")
    file.write("This is a text file.\\n")
    file.write("Python makes file handling easy.\\n")

# Reading from a file
with open("example.txt", "r") as file:
    content = file.read()
    print(content)

# Reading line by line
with open("example.txt", "r") as file:
    for line in file:
        print(line.strip())  # strip() removes the newline character

# Reading all lines into a list
with open("example.txt", "r") as file:
    lines = file.readlines()
    for line in lines:
        print(line.strip())

# Appending to a file
with open("example.txt", "a") as file:
    file.write("This line is appended.\\n")`,
              explanation: "This example demonstrates different ways to read from and write to text files in Python, including writing, reading the entire file, reading line by line, reading all lines into a list, and appending to a file."
            },
            {
              title: "Working with File Paths and Directories",
              code: `import os

# Get current working directory
current_dir = os.getcwd()
print(f"Current directory: {current_dir}")

# List files in a directory
files = os.listdir(current_dir)
print("Files in the current directory:")
for file in files:
    print(file)

# Check if a file exists
file_path = "example.txt"
if os.path.exists(file_path):
    print(f"{file_path} exists")
    
    # Check if it's a file or directory
    if os.path.isfile(file_path):
        print(f"{file_path} is a file")
    elif os.path.isdir(file_path):
        print(f"{file_path} is a directory")
    
    # Get file size
    size = os.path.getsize(file_path)
    print(f"Size of {file_path}: {size} bytes")

# Create a directory
os.makedirs("new_directory", exist_ok=True)

# Rename a file
# os.rename("example.txt", "new_example.txt")

# Delete a file
# os.remove("example.txt")

# Delete a directory
# os.rmdir("new_directory")`,
              explanation: "This example shows how to work with file paths and directories using the os module, including getting the current directory, listing files, checking if a file exists, creating and deleting directories, and renaming and deleting files."
            }
          ],
          quiz: [
            {
              question: "What is the advantage of using the 'with' statement when working with files in Python?",
              options: ["It makes the code more readable", "It automatically closes the file even if an exception occurs", "It supports both reading and writing operations", "All of the above"],
              correctAnswer: 3,
              explanation: "Using the 'with' statement when working with files in Python has several advantages: it makes the code more readable, automatically closes the file even if an exception occurs, and supports both reading and writing operations."
            },
            {
              question: "Which file mode would you use if you want to write to a file and create it if it doesn't exist, but you don't want to overwrite it if it does exist?",
              options: ["w", "r", "a", "x"],
              correctAnswer: 3,
              explanation: "The 'x' mode opens a file for exclusive creation. If the file already exists, the operation will fail. This is useful when you want to write to a new file but don't want to accidentally overwrite an existing file."
            }
          ],
          flashcards: [
            {
              front: "What are the different file modes in Python's open() function?",
              back: "'r' (read), 'w' (write), 'a' (append), 'x' (exclusive creation), 'b' (binary), 't' (text), '+' (read and write). Examples: 'r' (read text), 'wb' (write binary), 'a+' (append and read)."
            },
            {
              front: "What is the difference between read() and readlines() methods in Python file handling?",
              back: "The read() method reads the entire file at once as a single string, while readlines() reads the file and returns a list of strings, where each string is a line from the file."
            }
          ]
        },
        {
          id: "py-oop",
          title: "Object-Oriented Programming",
          description: "Understanding classes, objects, inheritance, and polymorphism in Python",
          content: `
# Object-Oriented Programming in Python

Python is a multi-paradigm programming language that supports object-oriented programming (OOP) with classes and objects.
          `,
          codeExamples: [
            {
              title: "Classes and Objects",
              code: `# Define a class
class Person:
    # Class attribute (shared by all instances)
    species = "Homo sapiens"
    
    # Constructor (initialization method)
    def __init__(self, name, age):
        # Instance attributes (unique to each instance)
        self.name = name
        self.age = age
    
    # Instance method
    def greet(self):
        return f"Hello, my name is {self.name} and I am {self.age} years old."
    
    # Instance method with parameters
    def celebrate_birthday(self):
        self.age += 1
        return f"Happy Birthday! Now I am {self.age} years old."
    
    # Class method (operates on the class itself)
    @classmethod
    def get_species(cls):
        return cls.species
    
    # Static method (doesn't depend on class or instance)
    @staticmethod
    def is_adult(age):
        return age >= 18

# Create objects (instances of the Person class)
person1 = Person("Alice", 30)
person2 = Person("Bob", 25)

# Access instance attributes
print(person1.name)  # Alice
print(person2.age)   # 25

# Call instance methods
print(person1.greet())  # Hello, my name is Alice and I am 30 years old.
print(person2.celebrate_birthday())  # Happy Birthday! Now I am 26 years old.

# Access class attributes
print(Person.species)  # Homo sapiens
print(person1.species)  # Homo sapiens

# Call class and static methods
print(Person.get_species())  # Homo sapiens
print(Person.is_adult(20))   # True
print(Person.is_adult(15))   # False`,
              explanation: "This example demonstrates the basics of object-oriented programming in Python, including class definition, constructor, instance attributes, instance methods, class attributes, class methods, and static methods."
            },
            {
              title: "Inheritance and Polymorphism",
              code: `# Base class
class Animal:
    def __init__(self, name, species):
        self.name = name
        self.species = species
    
    def sound(self):
        raise NotImplementedError("Subclass must implement abstract method")
    
    def __str__(self):
        return f"{self.name} is a {self.species}"

# Derived class
class Dog(Animal):
    def __init__(self, name, breed):
        # Call the __init__ of the parent class
        super().__init__(name, "Dog")
        self.breed = breed
    
    def sound(self):
        return "Woof!"
    
    def fetch(self, item):
        return f"{self.name} is fetching the {item}"

# Another derived class
class Cat(Animal):
    def __init__(self, name, color):
        super().__init__(name, "Cat")
        self.color = color
    
    def sound(self):
        return "Meow!"
    
    def scratch(self):
        return f"{self.name} is scratching"

# Create objects
dog = Dog("Buddy", "Golden Retriever")
cat = Cat("Whiskers", "Gray")

# Call methods
print(dog)  # Buddy is a Dog
print(cat)  # Whiskers is a Cat

print(dog.sound())  # Woof!
print(cat.sound())  # Meow!

print(dog.fetch("ball"))  # Buddy is fetching the ball
print(cat.scratch())  # Whiskers is scratching

# Polymorphism
animals = [dog, cat]
for animal in animals:
    print(f"{animal.name}: {animal.sound()}")`,
              explanation: "This example demonstrates inheritance and polymorphism in Python, including base class, derived classes, method overriding, and how polymorphism allows objects of different classes to be treated as objects of a common base class."
            }
          ],
          quiz: [
            {
              question: "What is the purpose of the __init__ method in a Python class?",
              options: ["To create a new instance of the class", "To initialize the attributes of a newly created object", "To define class attributes", "To destroy an object when it's no longer needed"],
              correctAnswer: 1,
              explanation: "The __init__ method in a Python class is a special method (constructor) that is automatically called when a new object is created. Its purpose is to initialize the attributes of the newly created object."
            },
            {
              question: "In Python, which of the following is NOT a principle of object-oriented programming?",
              options: ["Encapsulation", "Inheritance", "Polymorphism", "Compilation"],
              correctAnswer: 3,
              explanation: "Compilation is not a principle of object-oriented programming. The main principles of OOP are encapsulation (bundling data and methods), inheritance (deriving properties from a parent class), polymorphism (treating objects of different types through a common interface), and abstraction (hiding implementation details)."
            }
          ],
          flashcards: [
            {
              front: "What is a class in Python?",
              back: "A class is a blueprint for creating objects. It defines a set of attributes and methods that the objects created from the class will have."
            },
            {
              front: "What is inheritance in Python?",
              back: "Inheritance is a mechanism where a class (derived class) can inherit attributes and methods from another class (base class). It promotes code reusability and establishes a hierarchy between classes."
            }
          ]
        },
        {
          id: "py-decorators",
          title: "Decorators",
          description: "Understanding and using decorators in Python",
          content: `
# Decorators in Python

Decorators provide a way to modify the behavior of functions or classes without permanently modifying the function or class itself.
          `,
          codeExamples: [
            {
              title: "Basic Decorators",
              code: `# Define a decorator function
def my_decorator(func):
    def wrapper():
        print("Something is happening before the function is called.")
        func()
        print("Something is happening after the function is called.")
    return wrapper

# Apply the decorator
@my_decorator
def say_hello():
    print("Hello!")

# Call the decorated function
say_hello()
# Output:
# Something is happening before the function is called.
# Hello!
# Something is happening after the function is called.

# This is equivalent to:
# say_hello = my_decorator(say_hello)
# say_hello()`,
              explanation: "This example shows how to define and use a basic decorator in Python. The decorator is a function that takes another function as input and extends its behavior without explicitly modifying it."
            },
            {
              title: "Decorators with Arguments",
              code: `# Decorator that takes arguments
def repeat(n):
    def decorator(func):
        def wrapper(*args, **kwargs):
            result = None
            for _ in range(n):
                result = func(*args, **kwargs)
            return result
        return wrapper
    return decorator

# Apply the decorator with an argument
@repeat(3)
def say_greeting(name):
    print(f"Hello, {name}!")
    return f"Greeted {name}"

# Call the decorated function
result = say_greeting("Alice")
# Output:
# Hello, Alice!
# Hello, Alice!
# Hello, Alice!
print(result)  # Greeted Alice

# Decorator that preserves function metadata
import functools

def debug(func):
    @functools.wraps(func)  # Preserves the original function's metadata
    def wrapper(*args, **kwargs):
        args_repr = [repr(a) for a in args]
        kwargs_repr = [f"{k}={v!r}" for k, v in kwargs.items()]
        signature = ", ".join(args_repr + kwargs_repr)
        print(f"Calling {func.__name__}({signature})")
        result = func(*args, **kwargs)
        print(f"{func.__name__} returned {result!r}")
        return result
    return wrapper

@debug
def add(a, b):
    """Add two numbers."""
    return a + b

# Call the decorated function
sum_result = add(3, 5)
# Output:
# Calling add(3, 5)
# add returned 8
print(sum_result)  # 8
print(add.__name__)  # add (preserved by @functools.wraps)
print(add.__doc__)  # Add two numbers. (preserved by @functools.wraps)`,
              explanation: "This example demonstrates more advanced decorator techniques, including decorators that take arguments and preserving function metadata using functools.wraps."
            }
          ],
          quiz: [
            {
              question: "What is a decorator in Python?",
              options: ["A function that returns a class", "A pattern for organizing modules", "A function that takes another function as input and extends its behavior", "A special type of variable"],
              correctAnswer: 2,
              explanation: "A decorator in Python is a function that takes another function as input and extends or modifies its behavior without explicitly modifying the function itself."
            },
            {
              question: "What is the purpose of the @functools.wraps decorator?",
              options: ["To improve performance of decorated functions", "To preserve the metadata of the original function", "To allow decorators to accept arguments", "To make decorators work with classes"],
              correctAnswer: 1,
              explanation: "The @functools.wraps decorator is used to preserve the metadata (like __name__, __doc__, etc.) of the original function when it's decorated. Without it, the decorated function would appear to be the wrapper function rather than the original function."
            }
          ],
          flashcards: [
            {
              front: "What is a decorator in Python?",
              back: "A decorator is a design pattern in Python that allows a user to add new functionality to an existing object without modifying its structure. Decorators are usually called before the definition of a function you want to decorate."
            },
            {
              front: "What is the syntax for applying a decorator to a function?",
              back: "The syntax for applying a decorator to a function is to place the decorator name preceded by an @ symbol on the line immediately before the function definition. For example: @decorator_name\ndef function_name():"
            }
          ]
        },
        {
          id: "py-generators",
          title: "Generators and Iterators",
          description: "Efficiently working with sequences of data in Python",
          content: `
# Generators and Iterators in Python

Generators and iterators provide a memory-efficient way to work with sequences of data, especially when the sequence is large or the computation is complex.
          `,
          codeExamples: [
            {
              title: "Iterators and Iterables",
              code: `# Lists are iterable
my_list = [1, 2, 3, 4, 5]
for item in my_list:
    print(item)

# Creating an iterator from an iterable
iterator = iter(my_list)
print(next(iterator))  # 1
print(next(iterator))  # 2
print(next(iterator))  # 3
# ... and so on

# Custom iterable class
class Countdown:
    def __init__(self, start):
        self.start = start
    
    # This method makes the class iterable
    def __iter__(self):
        # This method returns an iterator
        return CountdownIterator(self.start)

class CountdownIterator:
    def __init__(self, start):
        self.current = start
    
    # This method makes the class an iterator
    def __next__(self):
        if self.current <= 0:
            raise StopIteration
        self.current -= 1
        return self.current + 1

# Using the custom iterable
countdown = Countdown(5)
for number in countdown:
    print(number)  # 5, 4, 3, 2, 1`,
              explanation: "This example demonstrates the difference between iterables and iterators in Python, and shows how to create a custom iterable class by implementing the __iter__ and __next__ methods."
            },
            {
              title: "Generators",
              code: `# Generator function
def countdown(start):
    while start > 0:
        yield start
        start -= 1

# Using a generator
for number in countdown(5):
    print(number)  # 5, 4, 3, 2, 1

# Generator expression
squares = (x**2 for x in range(1, 6))
for square in squares:
    print(square)  # 1, 4, 9, 16, 25

# Generator function with multiple yields
def fibonacci(limit):
    a, b = 0, 1
    while a < limit:
        yield a
        a, b = b, a + b

for number in fibonacci(100):
    print(number)  # 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89

# Generator with send method
def echo_generator():
    while True:
        message = yield
        print(f"Received: {message}")

echo = echo_generator()
next(echo)  # Prime the generator
echo.send("Hello")  # Received: Hello
echo.send("World")  # Received: World`,
              explanation: "This example shows how to create and use generators in Python, including generator functions defined with the yield statement, generator expressions, and how to use the send method for two-way communication with generators."
            }
          ],
          quiz: [
            {
              question: "What is the main advantage of using generators over creating a list?",
              options: ["Generators are faster", "Generators use less memory", "Generators can handle infinite sequences", "All of the above"],
              correctAnswer: 3,
              explanation: "Generators have several advantages over lists: they use less memory because they generate values on-the-fly rather than storing them all at once, they can handle infinite sequences, and they can be more efficient for large datasets."
            },
            {
              question: "What is the output of the following code?\n\ndef gen():\n    yield 1\n    yield 2\n    yield 3\n\ng = gen()\nprint(next(g))\nprint(next(g))",
              options: ["1, 2", "1, 1", "2, 3", "Error"],
              correctAnswer: 0,
              explanation: "The generator function gen() yields the values 1, 2, and 3. When we call next(g) the first time, it yields 1. When we call next(g) the second time, it yields 2."
            }
          ],
          flashcards: [
            {
              front: "What is a generator in Python?",
              back: "A generator is a special type of iterator defined with a function that uses the yield statement. It generates values on-the-fly rather than storing them in memory, making it memory-efficient for working with large datasets."
            },
            {
              front: "What is the difference between return and yield in Python functions?",
              back: "The return statement exits a function and returns a value. The yield statement pauses the function's execution, returns a value, and remembers where it left off. When the function is called again, it continues from where it was paused."
            }
          ]
        },
        {
          id: "py-concurrency",
          title: "Concurrency and Parallelism",
          description: "Writing concurrent and parallel code in Python",
          content: `
# Concurrency and Parallelism in Python

Python provides several approaches to concurrent and parallel programming, including threading, multiprocessing, and asynchronous programming.
          `,
          codeExamples: [
            {
              title: "Threading",
              code: `import threading
import time

def worker(name, delay):
    print(f"{name} started")
    time.sleep(delay)
    print(f"{name} finished")

# Create threads
thread1 = threading.Thread(target=worker, args=("Thread 1", 2))
thread2 = threading.Thread(target=worker, args=("Thread 2", 1))

# Start threads
thread1.start()
thread2.start()

# Wait for threads to finish
thread1.join()
thread2.join()

print("All threads finished")

# Using a thread with a class
class MyThread(threading.Thread):
    def __init__(self, name, delay):
        super().__init__()
        self.name = name
        self.delay = delay
    
    def run(self):
        print(f"{self.name} started")
        time.sleep(self.delay)
        print(f"{self.name} finished")

# Create and start threads
thread3 = MyThread("Thread 3", 3)
thread4 = MyThread("Thread 4", 1)

thread3.start()
thread4.start()

thread3.join()
thread4.join()

print("All class threads finished")`,
              explanation: "This example demonstrates how to use threads in Python using the threading module, both by creating Thread objects directly and by subclassing the Thread class."
            },
            {
              title: "Multiprocessing",
              code: `import multiprocessing
import time

def worker(name, delay):
    print(f"{name} started")
    time.sleep(delay)
    print(f"{name} finished")

if __name__ == "__main__":
    # Create processes
    process1 = multiprocessing.Process(target=worker, args=("Process 1", 2))
    process2 = multiprocessing.Process(target=worker, args=("Process 2", 1))
    
    # Start processes
    process1.start()
    process2.start()
    
    # Wait for processes to finish
    process1.join()
    process2.join()
    
    print("All processes finished")
    
    # Process Pool
    def square(x):
        return x * x
    
    with multiprocessing.Pool(processes=4) as pool:
        results = pool.map(square, range(10))
        print(results)  # [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]`,
              explanation: "This example shows how to use the multiprocessing module to create and run processes, as well as how to use a process pool for parallel execution of tasks."
            }
          ],
          quiz: [
            {
              question: "What is the main difference between threading and multiprocessing in Python?",
              options: ["Threading uses multiple threads within the same process, while multiprocessing uses multiple processes", "Threading is faster than multiprocessing", "Multiprocessing is only available on Unix systems", "Threading uses less memory than multiprocessing"],
              correctAnswer: 0,
              explanation: "Threading uses multiple threads within the same process, sharing the same memory space. Multiprocessing uses multiple processes, each with its own memory space. This makes multiprocessing more suitable for CPU-bound tasks due to Python's Global Interpreter Lock (GIL)."
            },
            {
              question: "What is the Global Interpreter Lock (GIL) in Python?",
              options: ["A lock that allows only one thread to execute Python bytecode at a time", "A lock that prevents race conditions in multiprocessing", "A lock that manages access to shared memory", "A lock that ensures thread safety in asynchronous code"],
              correctAnswer: 0,
              explanation: "The Global Interpreter Lock (GIL) is a mutex that protects access to Python objects, preventing multiple threads from executing Python bytecode at the same time. This means that even with multi-threaded Python code, only one thread can execute at a time, limiting the benefit of threading for CPU-bound tasks."
            }
          ],
          flashcards: [
            {
              front: "What is concurrency in Python?",
              back: "Concurrency is the ability of a program to make progress on multiple tasks seemingly at the same time. In Python, concurrency can be achieved through threading, multiprocessing, or asynchronous programming."
            },
            {
              front: "When should you use threading vs. multiprocessing in Python?",
              back: "Use threading for I/O-bound tasks (like network operations or file I/O) where the program spends most of its time waiting. Use multiprocessing for CPU-bound tasks (like computation) to bypass the Global Interpreter Lock (GIL) and achieve true parallelism."
            }
          ]
        },
        {
          id: "py-testing",
          title: "Testing and Debugging",
          description: "Writing tests and debugging Python code",
          content: `
# Testing and Debugging in Python

Testing and debugging are crucial parts of software development that help ensure code correctness and reliability.
          `,
          codeExamples: [
            {
              title: "Unit Testing with unittest",
              code: `import unittest

# Function to test
def add(a, b):
    return a + b

# Test class
class TestAddFunction(unittest.TestCase):
    def test_add_positive_numbers(self):
        self.assertEqual(add(1, 2), 3)
    
    def test_add_negative_numbers(self):
        self.assertEqual(add(-1, -2), -3)
    
    def test_add_mixed_numbers(self):
        self.assertEqual(add(-1, 2), 1)
    
    def test_add_zeros(self):
        self.assertEqual(add(0, 0), 0)

# Run the tests
if __name__ == "__main__":
    unittest.main()

# More assertions
class TestMoreAssertions(unittest.TestCase):
    def test_assertTrue(self):
        self.assertTrue(1 < 2)
    
    def test_assertFalse(self):
        self.assertFalse(1 > 2)
    
    def test_assertIn(self):
        self.assertIn(3, [1, 2, 3, 4])
    
    def test_assertRaises(self):
        with self.assertRaises(ZeroDivisionError):
            1 / 0`,
              explanation: "This example demonstrates how to write unit tests in Python using the unittest framework, including defining test classes, test methods, and using different types of assertions."
            },
            {
              title: "Debugging Techniques",
              code: `# Using print statements
def buggy_function(a, b):
    print(f"a = {a}, b = {b}")
    result = a / b
    print(f"result = {result}")
    return result

# Try-except for debugging
def safe_division(a, b):
    try:
        result = a / b
    except ZeroDivisionError as e:
        print(f"Error: {e}")
        result = None
    return result

# Using assertions
def calculate_average(numbers):
    assert len(numbers) > 0, "Cannot calculate average of empty list"
    return sum(numbers) / len(numbers)

# Using the logging module
import logging

logging.basicConfig(
    level=logging.DEBUG,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)

def log_function(a, b):
    logging.debug(f"Function called with a={a}, b={b}")
    if b == 0:
        logging.error("Division by zero attempted")
        return None
    result = a / b
    logging.info(f"Result: {result}")
    return result

# Using the debugger
def debug_me():
    x = 5
    y = 0
    # Set a breakpoint here in your IDE or use:
    # import pdb; pdb.set_trace()
    z = x / y
    return z`,
              explanation: "This example shows different debugging techniques in Python, including using print statements, try-except blocks, assertions, the logging module, and setting breakpoints for interactive debugging."
            }
          ],
          quiz: [
            {
              question: "What is Test-Driven Development (TDD)?",
              options: ["Writing tests after implementing the code", "Writing code without testing", "Writing tests before implementing the code", "Testing code manually"],
              correctAnswer: 2,
              explanation: "Test-Driven Development (TDD) is a software development process where tests are written before implementing the code. The process typically follows the red-green-refactor cycle: write a failing test, make it pass with minimal code, and then refactor the code."
            },
            {
              question: "Which method in unittest.TestCase is used to verify that a function raises a specific exception?",
              options: ["assertRaises()", "assertException()", "expectException()", "assertError()"],
              correctAnswer: 0,
              explanation: "The assertRaises() method in unittest.TestCase is used to verify that a function raises a specific exception when called with certain arguments. It can be used as a context manager or by passing a callable and its arguments."
            }
          ],
          flashcards: [
            {
              front: "What is the purpose of unit testing?",
              back: "Unit testing is a software testing method where individual units or components of a software are tested in isolation. The purpose is to validate that each unit works as expected and to catch bugs early."
            },
            {
              front: "What is the difference between debugging and testing?",
              back: "Testing is the process of verifying that a program works as expected by checking outputs against expected results. Debugging is the process of finding and fixing bugs or defects in a program. Testing detects the presence of bugs, while debugging identifies and removes them."
            }
          ]
        }
      ]
    }
  ]
};
