
import { Topic } from '../../types';

export const dataTypesTopic: Topic = {
  id: "python-data-types",
  title: "Data Types in Python",
  description: "Explore the various data types available in Python",
  content: `
# Data Types in Python

Python has several built-in data types to store different kinds of values.
  `,
  codeExamples: [
    {
      title: "Common Data Types",
      code: `# Numeric types
integer_num = 42
float_num = 3.14159
complex_num = 1 + 2j

print(f"Integer: {integer_num}, type: {type(integer_num)}")
print(f"Float: {float_num}, type: {type(float_num)}")
print(f"Complex: {complex_num}, type: {type(complex_num)}")

# Sequence types
my_string = "Hello, Python!"
my_list = [1, 2, 3, "four", 5.0]
my_tuple = (1, 2, "three", 4.0)

print(f"String: {my_string}, type: {type(my_string)}")
print(f"List: {my_list}, type: {type(my_list)}")
print(f"Tuple: {my_tuple}, type: {type(my_tuple)}")

# Mapping type
my_dict = {"name": "Alice", "age": 25, "is_student": True}
print(f"Dictionary: {my_dict}, type: {type(my_dict)}")

# Set types
my_set = {1, 2, 3, 4, 5}
my_frozenset = frozenset([1, 2, 3, 4, 5])

print(f"Set: {my_set}, type: {type(my_set)}")
print(f"Frozen set: {my_frozenset}, type: {type(my_frozenset)}")

# Boolean type
is_true = True
is_false = False

print(f"Boolean values: {is_true}, {is_false}")

# None type
empty_value = None
print(f"None value: {empty_value}, type: {type(empty_value)}")

# Type conversion
a = int("42")       # String to int
b = float("3.14")   # String to float
c = str(42)         # Int to string
d = list("Hello")   # String to list

print(f"Converted values: {a}, {b}, {c}, {d}")`,
      explanation: "This example demonstrates the various data types in Python including numeric types (int, float, complex), sequence types (str, list, tuple), mapping types (dict), set types (set, frozenset), boolean, None, and type conversion."
    }
  ],
  quiz: [
    {
      question: "Which of the following is a mutable data type in Python?",
      options: ["int", "str", "tuple", "list"],
      correctAnswer: 3,
      explanation: "Lists are mutable in Python, meaning they can be changed after creation. Integers, strings, and tuples are immutable."
    }
  ],
  flashcards: [
    {
      front: "What's the difference between a list and a tuple in Python?",
      back: "Lists are mutable (can be changed after creation) and use square brackets []. Tuples are immutable (cannot be changed after creation) and use parentheses (). Lists are typically used for collections of similar items that might change, while tuples are used for collections of different items that won't change."
    }
  ]
};
