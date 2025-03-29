
import { Topic } from '../../types';

export const operatorsTopic: Topic = {
  id: "python-operators",
  title: "Operators in Python",
  description: "Learn about the different operators available in Python",
  content: `
# Operators in Python

Python provides a wide range of operators for performing operations on variables and values.
  `,
  codeExamples: [
    {
      title: "Python Operators",
      code: `# Arithmetic operators
a, b = 10, 3
print(f"a + b = {a + b}")    # Addition
print(f"a - b = {a - b}")    # Subtraction
print(f"a * b = {a * b}")    # Multiplication
print(f"a / b = {a / b}")    # Division (returns float)
print(f"a // b = {a // b}")  # Floor division
print(f"a % b = {a % b}")    # Modulus
print(f"a ** b = {a ** b}")  # Exponentiation

# Comparison operators
print(f"a == b: {a == b}")   # Equal
print(f"a != b: {a != b}")   # Not equal
print(f"a > b: {a > b}")     # Greater than
print(f"a < b: {a < b}")     # Less than
print(f"a >= b: {a >= b}")   # Greater than or equal
print(f"a <= b: {a <= b}")   # Less than or equal

# Logical operators
x, y = True, False
print(f"x and y: {x and y}")  # Logical AND
print(f"x or y: {x or y}")    # Logical OR
print(f"not x: {not x}")      # Logical NOT

# Assignment operators
c = 5
c += 3   # c = c + 3
print(f"c += 3: {c}")
c -= 2   # c = c - 2
print(f"c -= 2: {c}")
c *= 2   # c = c * 2
print(f"c *= 2: {c}")
c /= 3   # c = c / 3
print(f"c /= 3: {c}")

# Identity operators
list1 = [1, 2, 3]
list2 = [1, 2, 3]
list3 = list1

print(f"list1 is list2: {list1 is list2}")       # False
print(f"list1 is list3: {list1 is list3}")       # True
print(f"list1 is not list2: {list1 is not list2}")  # True

# Membership operators
print(f"1 in list1: {1 in list1}")         # True
print(f"4 not in list1: {4 not in list1}")  # True

# Bitwise operators
m, n = 10, 4  # 10 = 1010, 4 = 0100 in binary
print(f"m & n: {m & n}")    # Bitwise AND
print(f"m | n: {m | n}")    # Bitwise OR
print(f"m ^ n: {m ^ n}")    # Bitwise XOR
print(f"~m: {~m}")          # Bitwise NOT
print(f"m << 2: {m << 2}")  # Left shift
print(f"m >> 2: {m >> 2}")  # Right shift`,
      explanation: "This example demonstrates the different types of operators in Python, including arithmetic, comparison, logical, assignment, identity, membership, and bitwise operators."
    }
  ],
  quiz: [
    {
      question: "What is the output of 10 // 3 in Python?",
      options: ["3.33", "3", "3.0", "4"],
      correctAnswer: 1,
      explanation: "The // operator in Python performs floor division, which divides and rounds down to the nearest integer. So 10 // 3 equals 3."
    }
  ],
  flashcards: [
    {
      front: "What's the difference between == and is operators in Python?",
      back: "== checks if two objects have the same value, while is checks if two references point to the same object in memory (identity check)."
    }
  ]
};
