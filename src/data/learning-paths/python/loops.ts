
import { Topic } from '../../types';

export const loopsTopic: Topic = {
  id: "python-loops",
  title: "Loops in Python",
  description: "Learn about different types of loops in Python",
  content: `
# Loops in Python

Loops allow you to execute a block of code repeatedly.
  `,
  codeExamples: [
    {
      title: "For and While Loops",
      code: `# For loop with a list
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)

# For loop with range
for i in range(5):  # 0 to 4
    print(i)

# For loop with range (start, stop)
for i in range(2, 5):  # 2 to 4
    print(i)

# For loop with range (start, stop, step)
for i in range(0, 10, 2):  # 0, 2, 4, 6, 8
    print(i)

# For loop with enumeration
for index, value in enumerate(fruits):
    print(f"Index: {index}, Value: {value}")

# For loop with dictionary
person = {"name": "Alice", "age": 25, "country": "USA"}
for key in person:
    print(f"{key}: {person[key]}")

# For loop with dictionary items
for key, value in person.items():
    print(f"{key}: {value}")

# While loop
count = 0
while count < 5:
    print(count)
    count += 1

# While loop with break
number = 0
while True:
    print(number)
    number += 1
    if number >= 5:
        break

# While loop with continue
number = 0
while number < 10:
    number += 1
    if number % 2 == 0:  # Skip even numbers
        continue
    print(number)  # Print only odd numbers

# For loop with break
for i in range(10):
    if i == 5:
        break
    print(i)

# For loop with continue
for i in range(10):
    if i % 2 == 0:  # Skip even numbers
        continue
    print(i)  # Print only odd numbers

# Nested loops
for i in range(3):
    for j in range(2):
        print(f"i = {i}, j = {j}")

# List comprehension (compact for loop)
squares = [x ** 2 for x in range(5)]
print(squares)  # [0, 1, 4, 9, 16]

# List comprehension with condition
even_squares = [x ** 2 for x in range(10) if x % 2 == 0]
print(even_squares)  # [0, 4, 16, 36, 64]`,
      explanation: "This example demonstrates the different types of loops in Python, including for loops with lists, ranges, enumeration, and dictionaries, while loops, break and continue statements, nested loops, and list comprehensions."
    }
  ],
  quiz: [
    {
      question: "What is the output of the following code? for i in range(3, 8, 2): print(i)",
      options: ["3 4 5 6 7", "3 5 7", "3 5 7 9", "3 6"],
      correctAnswer: 1,
      explanation: "range(3, 8, 2) generates numbers starting from 3, incrementing by 2, and stopping before 8. So it produces 3, 5, and 7."
    }
  ],
  flashcards: [
    {
      front: "What's the difference between break and continue in Python loops?",
      back: "break terminates the loop completely and moves to the code after the loop. continue skips the rest of the current iteration and moves to the next iteration of the loop."
    }
  ]
};
