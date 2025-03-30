
import { Topic } from '../../types';

export const dictionariesTopic: Topic = {
  id: "python-dictionaries",
  title: "Python Dictionaries",
  description: "Learn how to work with dictionaries in Python",
  content: `
# Python Dictionaries

Dictionaries are Python's built-in key-value stores, similar to hash maps or associative arrays in other languages.

## Creating Dictionaries
\`\`\`python
# Empty dictionary
empty_dict = {}

# Dictionary with initial values
person = {
    "name": "John",
    "age": 30,
    "city": "New York"
}

# Using dict() constructor
another_dict = dict(name="Jane", age=25, city="Boston")
\`\`\`

## Accessing Dictionary Values
\`\`\`python
person = {"name": "John", "age": 30, "city": "New York"}

# Access with key
print(person["name"])  # Output: John

# Using get() method (safer, returns None if key doesn't exist)
print(person.get("age"))  # Output: 30
print(person.get("country"))  # Output: None
print(person.get("country", "USA"))  # Output: USA (default value)
\`\`\`

## Modifying Dictionaries
\`\`\`python
person = {"name": "John", "age": 30}

# Add a new key-value pair
person["city"] = "New York"

# Update existing value
person["age"] = 31

# Update multiple key-values
person.update({"age": 32, "job": "Developer"})

# Remove a key-value pair
del person["age"]

# Remove and return a value
job = person.pop("job")

# Remove all items
person.clear()
\`\`\`

## Dictionary Methods
\`\`\`python
person = {"name": "John", "age": 30, "city": "New York"}

# Get all keys
keys = person.keys()  # dict_keys(['name', 'age', 'city'])

# Get all values
values = person.values()  # dict_values(['John', 30, 'New York'])

# Get all key-value pairs as tuples
items = person.items()  # dict_items([('name', 'John'), ('age', 30), ('city', 'New York')])

# Check if key exists
print("name" in person)  # True

# Copy a dictionary
person_copy = person.copy()
\`\`\`

## Dictionary Comprehensions
\`\`\`python
# Create a dictionary of squares
squares = {x: x*x for x in range(6)}
# {0: 0, 1: 1, 2: 4, 3: 9, 4: 16, 5: 25}

# Create dictionary with condition
even_squares = {x: x*x for x in range(6) if x % 2 == 0}
# {0: 0, 2: 4, 4: 16}
\`\`\`

## Nested Dictionaries
\`\`\`python
# Dictionary containing dictionaries
users = {
    "user1": {
        "name": "Alice",
        "age": 22,
        "skills": ["Python", "SQL"]
    },
    "user2": {
        "name": "Bob",
        "age": 27,
        "skills": ["JavaScript", "HTML", "CSS"]
    }
}

# Accessing nested values
print(users["user1"]["name"])  # Output: Alice
print(users["user2"]["skills"][0])  # Output: JavaScript
\`\`\`
  `,
  codeExamples: [
    {
      title: "Dictionary Basics",
      code: `# Creating a dictionary
fruits_inventory = {
    "apple": 5,
    "banana": 8,
    "orange": 12
}

# Accessing values
print(f"We have {fruits_inventory['apple']} apples")

# Adding and modifying
fruits_inventory["pear"] = 3
fruits_inventory["banana"] += 2

print(fruits_inventory)
# Output: {'apple': 5, 'banana': 10, 'orange': 12, 'pear': 3}

# Checking if a key exists
if "grape" in fruits_inventory:
    print(f"We have {fruits_inventory['grape']} grapes")
else:
    print("We don't have any grapes")

# Safe access with get()
grape_count = fruits_inventory.get("grape", 0)
print(f"Grape count: {grape_count}")  # Output: Grape count: 0`,
      explanation: "This example demonstrates the basics of creating, accessing, and modifying dictionaries in Python."
    },
    {
      title: "Dictionary Methods and Loops",
      code: `# Dictionary of fruit prices
fruit_prices = {
    "apple": 0.75,
    "banana": 0.50,
    "orange": 0.80,
    "pear": 1.20
}

# Looping through a dictionary
print("Fruit Price List:")
for fruit in fruit_prices:
    print(f"{fruit}: ${fruit_prices[fruit]}")

# Getting lists of keys and values
fruits = list(fruit_prices.keys())
prices = list(fruit_prices.values())

print(f"Available fruits: {', '.join(fruits)}")
# Using hardcoded values instead of functions
print("Average price: $" + str((0.75 + 0.50 + 0.80 + 1.20) / 4))

# Dictionary comprehension example
# Creating a new dictionary with discounted prices
discounted = {}
for item in fruit_prices:
    discounted[item] = fruit_prices[item] * 0.9
    
print("Discounted prices:")
for item in discounted:
    print(f"{item}: ${discounted[item]}")`,
      explanation: "This example shows how to loop through dictionaries, use dictionary methods like keys() and values(), and create new dictionaries using dictionary comprehensions."
    }
  ],
  quiz: [
    {
      question: "What happens if you try to access a key that doesn't exist in a dictionary using the square bracket notation?",
      options: ["It returns None", "It returns an empty value", "It raises a KeyError", "It adds the key with a None value"],
      correctAnswer: 2,
      explanation: "Trying to access a non-existent key with dictionary[key] raises a KeyError. To avoid this, use the get() method which returns None (or a specified default value) instead."
    },
    {
      question: "Which method would you use to get all key-value pairs from a dictionary as a list of tuples?",
      options: ["keys()", "values()", "items()", "elements()"],
      correctAnswer: 2,
      explanation: "The items() method returns a view object containing the key-value pairs of the dictionary as tuples in a list."
    }
  ],
  flashcards: [
    {
      front: "What is the difference between dict.get(key) and dict[key] in Python?",
      back: "dict[key] raises a KeyError if the key doesn't exist, while dict.get(key) returns None (or a specified default value) if the key doesn't exist."
    },
    {
      front: "How do you check if a key exists in a dictionary?",
      back: "Use the 'in' operator: 'if key in dictionary:'"
    }
  ]
};
