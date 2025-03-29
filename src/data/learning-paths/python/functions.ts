
import { Topic } from '../../types';

export const functionsTopic: Topic = {
  id: "python-functions",
  title: "Functions in Python",
  description: "Learn how to define and use functions in Python",
  content: `
# Functions in Python

Functions are reusable blocks of code that perform a specific task. They help organize code, make it reusable, and improve readability.
  `,
  codeExamples: [
    {
      title: "Defining and Using Functions",
      code: `# Basic function
def greet():
    print("Hello, World!")

greet()  # Call the function

# Function with parameters
def greet_person(name):
    print(f"Hello, {name}!")

greet_person("Alice")

# Function with default parameter
def greet_with_title(name, title="Mr."):
    print(f"Hello, {title} {name}!")

greet_with_title("Smith")
greet_with_title("Johnson", "Ms.")

# Function with return value
def add(a, b):
    return a + b

result = add(5, 3)
print(f"5 + 3 = {result}")

# Function with multiple return values
def min_max(numbers):
    return min(numbers), max(numbers)

minimum, maximum = min_max([5, 3, 8, 1, 9])
print(f"Min: {minimum}, Max: {maximum}")

# Arbitrary number of arguments (*args)
def sum_all(*args):
    total = 0
    for num in args:
        total += num
    return total

print(sum_all(1, 2, 3, 4, 5))

# Keyword arguments
def describe_person(name, age, country="Unknown"):
    print(f"{name} is {age} years old and from {country}.")

describe_person(name="Bob", age=30)
describe_person(age=25, name="Alice", country="USA")

# Arbitrary keyword arguments (**kwargs)
def person_details(**kwargs):
    for key, value in kwargs.items():
        print(f"{key}: {value}")

person_details(name="Charlie", age=35, job="Developer", country="Canada")

# Lambda function (anonymous function)
multiply = lambda x, y: x * y
print(multiply(4, 5))

# Function as argument
def apply_operation(a, b, operation):
    return operation(a, b)

result = apply_operation(10, 5, lambda x, y: x + y)
print(f"Result: {result}")

# Recursive function
def factorial(n):
    if n == 0 or n == 1:
        return 1
    else:
        return n * factorial(n - 1)

print(f"Factorial of 5: {factorial(5)}")

# Docstrings for documentation
def square(n):
    """
    Returns the square of a number.
    
    Args:
        n: The input number.
        
    Returns:
        The square of the input number.
    """
    return n ** 2

print(square(4))
print(square.__doc__)  # Print the docstring`,
      explanation: "This example covers a wide range of function concepts in Python, including basic functions, parameters, default parameters, return values, *args, keyword arguments, **kwargs, lambda functions, functions as arguments, recursive functions, and docstrings."
    }
  ],
  quiz: [
    {
      question: "What does *args allow in a Python function?",
      options: [
        "Passing keyword arguments",
        "Passing a variable number of positional arguments",
        "Returning multiple values",
        "Defining default values for parameters"
      ],
      correctAnswer: 1,
      explanation: "*args allows a function to accept a variable number of positional arguments, which are then available as a tuple inside the function."
    }
  ],
  flashcards: [
    {
      front: "What is the difference between *args and **kwargs in Python functions?",
      back: "*args allows a function to accept a variable number of positional arguments, collecting them into a tuple. **kwargs allows a function to accept a variable number of keyword arguments, collecting them into a dictionary."
    }
  ]
};
