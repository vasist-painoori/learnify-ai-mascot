
import { Topic } from '../../types';

export const listsTopic: Topic = {
  id: "python-lists",
  title: "Lists in Python",
  description: "Learn how to create and manipulate lists in Python",
  content: `
# Lists in Python

Lists are ordered, mutable collections that can contain items of different data types.
  `,
  codeExamples: [
    {
      title: "Working with Lists",
      code: `# Creating lists
empty_list = []
numbers = [1, 2, 3, 4, 5]
mixed_list = [1, "hello", 3.14, True, [1, 2, 3]]

# Accessing list elements
print(numbers[0])      # First element
print(numbers[-1])     # Last element
print(numbers[1:3])    # Slicing: elements at index 1 and 2
print(numbers[:3])     # Elements from start to index 2
print(numbers[2:])     # Elements from index 2 to end
print(numbers[::2])    # Every second element
print(numbers[::-1])   # Reverse the list

# Modifying lists
fruits = ["apple", "banana", "cherry"]
fruits[1] = "blueberry"  # Change an element
print(fruits)

# List methods
numbers = [3, 1, 4, 1, 5, 9]
numbers.append(6)       # Add an element to the end
print(numbers)

numbers.insert(2, 7)    # Insert at specific position
print(numbers)

numbers.remove(1)       # Remove first occurrence of value
print(numbers)

popped = numbers.pop()  # Remove and return last element
print(popped)
print(numbers)

popped_index = numbers.pop(2)  # Remove and return element at index
print(popped_index)
print(numbers)

numbers.sort()          # Sort in place
print(numbers)

numbers.reverse()       # Reverse in place
print(numbers)

count = numbers.count(5)  # Count occurrences of a value
print(f"Count of 5: {count}")

index = numbers.index(4)  # Find index of first occurrence
print(f"Index of 4: {index}")

numbers.clear()         # Remove all elements
print(numbers)

# List operations
list1 = [1, 2, 3]
list2 = [4, 5, 6]

# Concatenation
combined = list1 + list2
print(combined)

# Repetition
repeated = list1 * 3
print(repeated)

# Membership test
print(2 in list1)      # True
print(4 in list1)      # False

# Length
print(len(list1))      # 3

# Maximum and minimum
print(max(list1))      # 3
print(min(list1))      # 1

# Sum
print(sum(list1))      # 6

# List comprehensions
squares = [x**2 for x in range(1, 6)]
print(squares)

even_squares = [x**2 for x in range(1, 11) if x % 2 == 0]
print(even_squares)

# Nested lists (2D lists)
matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

print(matrix[1][2])  # Access element in row 1, column 2 (value: 6)

# Iterating through a 2D list
for row in matrix:
    for elem in row:
        print(elem, end=" ")
    print()

# List unpacking
a, b, c = [1, 2, 3]
print(a, b, c)

# Deep copy vs shallow copy
import copy

original = [1, [2, 3], 4]
shallow = original.copy()  # or list(original) or original[:]
deep = copy.deepcopy(original)

original[1][0] = 99
print(f"Original: {original}")
print(f"Shallow copy: {shallow}")  # [1, [99, 3], 4] - nested list is modified
print(f"Deep copy: {deep}")        # [1, [2, 3], 4] - independent copy`,
      explanation: "This example covers a comprehensive range of list operations in Python, including creating lists, accessing elements, modifying lists, list methods, list operations, list comprehensions, nested lists, list unpacking, and copying lists."
    }
  ],
  quiz: [
    {
      question: "What is the output of [1, 2, 3, 4, 5][1:4]?",
      options: ["[1, 2, 3]", "[2, 3, 4]", "[1, 2, 3, 4]", "[2, 3, 4, 5]"],
      correctAnswer: 1,
      explanation: "List slicing with [1:4] returns elements from index 1 up to (but not including) index 4, which are [2, 3, 4]."
    }
  ],
  flashcards: [
    {
      front: "What's the difference between lists and tuples in Python?",
      back: "Lists are mutable (can be changed after creation) and are defined with square brackets []. Tuples are immutable (cannot be changed after creation) and are defined with parentheses (). Lists generally use more memory than tuples."
    }
  ]
};
