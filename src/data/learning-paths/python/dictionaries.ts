
import { Topic } from '../../types';

export const dictionariesTopic: Topic = {
  id: "python-dictionaries",
  title: "Dictionaries in Python",
  description: "Learn how to create and use dictionaries in Python",
  content: `
# Dictionaries in Python

Dictionaries are unordered, mutable collections of key-value pairs.
  `,
  codeExamples: [
    {
      title: "Working with Dictionaries",
      code: `# Creating dictionaries
empty_dict = {}
person = {"name": "Alice", "age": 25, "city": "New York"}
another_dict = dict(name="Bob", age=30, city="London")

# Accessing dictionary values
print(person["name"])  # Using key

# Using get() method (safer - returns None if key doesn't exist)
print(person.get("age"))
print(person.get("country"))  # Returns None
print(person.get("country", "Unknown"))  # Returns default value if key doesn't exist

# Modifying dictionaries
person["age"] = 26  # Change existing value
person["country"] = "USA"  # Add new key-value pair
print(person)

# Dictionary methods
keys = person.keys()  # Get all keys
values = person.values()  # Get all values
items = person.items()  # Get all key-value pairs as tuples

print(f"Keys: {list(keys)}")
print(f"Values: {list(values)}")
print(f"Items: {list(items)}")

# Removing items
age = person.pop("age")  # Remove and return the value for key
print(f"Popped age: {age}")
print(person)

item = person.popitem()  # Remove and return the last inserted key-value pair
print(f"Popped item: {item}")
print(person)

person.clear()  # Remove all items
print(person)

# Dictionary comprehensions
squares = {x: x**2 for x in range(1, 6)}
print(squares)

# Conditional dictionary comprehension
even_squares = {x: x**2 for x in range(1, 11) if x % 2 == 0}
print(even_squares)

# Nested dictionaries
employees = {
    "Alice": {"position": "Developer", "salary": 75000},
    "Bob": {"position": "Designer", "salary": 65000},
    "Charlie": {"position": "Manager", "salary": 85000}
}

print(employees["Alice"]["salary"])  # Access nested value

# Updating dictionaries
dict1 = {"a": 1, "b": 2}
dict2 = {"b": 3, "c": 4}

dict1.update(dict2)  # Update dict1 with key-value pairs from dict2
print(dict1)  # {'a': 1, 'b': 3, 'c': 4}

# Checking if key exists
print("a" in dict1)  # True
print("z" in dict1)  # False

# Dictionary membership only checks keys, not values
print(1 in dict1)  # False (1 is a value, not a key)

# Iterating through dictionaries
prices = {"apple": 0.5, "banana": 0.3, "orange": 0.6}

# Iterate over keys (default)
for fruit in prices:
    print(f"{fruit}: ${prices[fruit]}")

# Iterate over key-value pairs
for fruit, price in prices.items():
    print(f"{fruit}: ${price}")

# Iterating over values
for price in prices.values():
    print(f"${price}")

# Dictionary unpacking
def display_info(name, age, city):
    print(f"{name} is {age} years old and lives in {city}.")

person = {"name": "David", "age": 35, "city": "Chicago"}
display_info(**person)  # Unpacks dictionary as keyword arguments

# Merging dictionaries (Python 3.5+)
dict1 = {"a": 1, "b": 2}
dict2 = {"c": 3, "d": 4}

# Using unpacking (Python 3.5+)
merged = {**dict1, **dict2}
print(merged)

# Using | operator (Python 3.9+)
# merged = dict1 | dict2
# print(merged)`,
      explanation: "This example covers a comprehensive range of dictionary operations in Python, including creating dictionaries, accessing values, modifying dictionaries, dictionary methods, dictionary comprehensions, nested dictionaries, updating dictionaries, checking for keys, iterating through dictionaries, dictionary unpacking, and merging dictionaries."
    }
  ],
  quiz: [
    {
      question: "Which of the following is NOT a valid way to create a dictionary in Python?",
      options: [
        "empty_dict = {}",
        "person = dict(name='Alice', age=25)",
        "scores = dict([('math', 90), ('science', 85)])",
        "data = [1: 'one', 2: 'two']"
      ],
      correctAnswer: 3,
      explanation: "The syntax data = [1: 'one', 2: 'two'] is invalid. Square brackets [] are used for lists, not dictionaries. Dictionary literals use curly braces {} with key-value pairs separated by colons, like {1: 'one', 2: 'two'}."
    }
  ],
  flashcards: [
    {
      front: "What are the key characteristics of Python dictionaries?",
      back: "Python dictionaries are: mutable (can be changed), unordered (prior to Python 3.7) or insertion-ordered (Python 3.7+), have unique keys (duplicates overwrite), allow any immutable type as keys (strings, numbers, tuples), and any type as values (including lists, dictionaries, etc.)."
    }
  ]
};
