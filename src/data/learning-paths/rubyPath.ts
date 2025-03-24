
import { LearningPath } from '../types';

export const rubyPath: LearningPath = {
  languageId: "ruby",
  modules: [
    {
      id: "ruby-basics",
      title: "Ruby Fundamentals",
      description: "Learn the core concepts of Ruby programming",
      topics: [
        {
          id: "ruby-intro",
          title: "Introduction to Ruby",
          description: "Understanding the basics of Ruby programming",
          content: `
# Introduction to Ruby

Ruby is a dynamic, object-oriented programming language known for its simplicity and productivity.
          `,
          codeExamples: [
            {
              title: "Hello World in Ruby",
              code: `# This is a simple Ruby program
puts "Hello, World!"`,
              explanation: "This is a basic Ruby program that prints 'Hello, World!' to the console. The 'puts' command prints a string with a newline character at the end."
            }
          ],
          quiz: [
            {
              question: "Who created the Ruby programming language?",
              options: ["Guido van Rossum", "James Gosling", "Yukihiro Matsumoto", "Bjarne Stroustrup"],
              correctAnswer: 2,
              explanation: "Ruby was created by Yukihiro Matsumoto (often known as 'Matz') in the mid-1990s in Japan. Matz designed Ruby to make programmers happy by creating an elegant language that balances functional and imperative programming."
            }
          ],
          flashcards: [
            {
              front: "What is Ruby?",
              back: "Ruby is a dynamic, interpreted, object-oriented programming language designed for simplicity and productivity. It has an elegant syntax that is natural to read and easy to write."
            },
            {
              front: "What is the current stable version of Ruby?",
              back: "As of 2023, Ruby 3.x is the current stable version, with significant improvements in performance, concurrency, and typing."
            }
          ]
        },
        {
          id: "ruby-variables",
          title: "Variables and Data Types",
          description: "Understanding variables and data types in Ruby",
          content: `
# Variables and Data Types in Ruby

Ruby is dynamically typed, which means you don't need to declare a variable's type when you create it.
          `,
          codeExamples: [
            {
              title: "Variables and Basic Data Types",
              code: `# Numeric types
age = 30             # Integer
price = 19.99        # Float

# String type
name = "Ruby"        # String with double quotes
language = 'Ruby'    # String with single quotes

# Boolean type
is_active = true
is_completed = false

# Array type (ordered collection)
fruits = ["apple", "banana", "cherry"]

# Hash type (key-value pairs)
person = { "name" => "John", "age" => 30 }
person_symbol = { name: "John", age: 30 }  # Modern syntax

# Symbol type
status = :active

# Nil (represents absence of value)
result = nil

# Display values
puts "Age: #{age}"
puts "Price: #{price}"
puts "Name: #{name}"
puts "Active? #{is_active}"
puts "Fruits: #{fruits}"
puts "Person: #{person}"
puts "Symbol: #{status}"
puts "Result: #{result.inspect}"`,
              explanation: "This example demonstrates the basic data types in Ruby: numbers (integers and floats), strings, booleans, arrays, hashes, symbols, and nil. Ruby is dynamically typed, so variables can change their type throughout the program."
            }
          ],
          quiz: [
            {
              question: "Which of the following is NOT a valid variable name in Ruby?",
              options: ["_user", "User1", "1user", "user_name"],
              correctAnswer: 2,
              explanation: "In Ruby, variable names cannot start with a number. They must start with a letter or underscore, followed by letters, numbers, or underscores."
            }
          ],
          flashcards: [
            {
              front: "What is the difference between single quotes and double quotes for strings in Ruby?",
              back: "Double-quoted strings allow string interpolation (e.g., \"Hello #{name}\") and escape sequences (e.g., \"\\n\" for newline). Single-quoted strings interpret characters literally with few exceptions (e.g., escaping a single quote inside the string)."
            },
            {
              front: "What is a Symbol in Ruby?",
              back: "A Symbol in Ruby is an immutable name or string. Symbols are lightweight objects often used as hash keys or to represent names. They are prefixed with a colon (e.g., :name). Unlike strings, identical symbols refer to the same object in memory, making them more memory-efficient."
            }
          ]
        },
        {
          id: "ruby-operators",
          title: "Operators",
          description: "Understanding Ruby operators for arithmetic, comparison, and logical operations",
          content: `
# Operators in Ruby

Ruby provides various types of operators for performing operations on variables and values.
          `,
          codeExamples: [
            {
              title: "Arithmetic and Assignment Operators",
              code: `# Arithmetic operators
a = 10
b = 3

puts "a + b = #{a + b}"    # Addition: 13
puts "a - b = #{a - b}"    # Subtraction: 7
puts "a * b = #{a * b}"    # Multiplication: 30
puts "a / b = #{a / b}"    # Division: 3 (integer division)
puts "a % b = #{a % b}"    # Modulus (remainder): 1
puts "a ** b = #{a ** b}"  # Exponentiation: 1000

# Floating-point division
puts "a.to_f / b = #{a.to_f / b}"  # 3.3333...

# Assignment operators
x = 10
puts "x = #{x}"

x += 5     # Same as: x = x + 5
puts "x += 5: #{x}"   # 15

x -= 3     # Same as: x = x - 3
puts "x -= 3: #{x}"   # 12

x *= 2     # Same as: x = x * 2
puts "x *= 2: #{x}"   # 24

x /= 4     # Same as: x = x / 4
puts "x /= 4: #{x}"   # 6

x %= 4     # Same as: x = x % 4
puts "x %= 4: #{x}"   # 2

x **= 3    # Same as: x = x ** 3
puts "x **= 3: #{x}"  # 8`,
              explanation: "This example shows arithmetic operators (+, -, *, /, %, **) and compound assignment operators (+=, -=, *=, /=, %=, **=) in Ruby. Note that division between integers (a / b) returns an integer result, while division with at least one float (a.to_f / b) returns a float result."
            },
            {
              title: "Comparison and Logical Operators",
              code: `# Comparison operators
a = 10
b = 5
c = 10

puts "a == c: #{a == c}"      # Equal to: true
puts "a != b: #{a != b}"      # Not equal to: true
puts "a > b: #{a > b}"        # Greater than: true
puts "a < b: #{a < b}"        # Less than: false
puts "a >= c: #{a >= c}"      # Greater than or equal to: true
puts "a <= b: #{a <= b}"      # Less than or equal to: false

# Comparison of different types
puts "1 == 1.0: #{1 == 1.0}"  # true
puts "1 === 1.0: #{1 === 1.0}"  # true
puts "'5' == 5: #{'5' == 5}"  # false

# Combined comparison operator (spaceship)
puts "a <=> b: #{a <=> b}"    # 1 (a > b)
puts "b <=> a: #{b <=> a}"    # -1 (b < a)
puts "a <=> c: #{a <=> c}"    # 0 (a == c)

# Logical operators
x = true
y = false

puts "x && y: #{x && y}"      # Logical AND: false
puts "x || y: #{x || y}"      # Logical OR: true
puts "!x: #{!x}"              # Logical NOT: false

# Short-circuit evaluation
def test_method
  puts "This method was called"
  return false
end

puts "Short-circuit with ||:"
result = true || test_method  # test_method is not called
puts "Result: #{result}"

puts "\\nShort-circuit with &&:"
result = false && test_method  # test_method is not called
puts "Result: #{result}"`,
              explanation: "This example demonstrates comparison operators (==, !=, >, <, >=, <=), the combined comparison operator (<=>), and logical operators (&&, ||, !). It also shows short-circuit evaluation in logical operations, where the second operand isn't evaluated if the first one determines the result."
            }
          ],
          quiz: [
            {
              question: "What will be the output of the following Ruby code?\n\nx = 10\ny = 5\nputs x / y, x.to_f / y",
              options: ["2, 2", "2, 2.0", "2.0, 2.0", "Error"],
              correctAnswer: 1,
              explanation: "The first division (x / y) is integer division, which returns 2. The second division (x.to_f / y) converts x to a float before division, resulting in 2.0 as the output."
            }
          ],
          flashcards: [
            {
              front: "What is the purpose of the spaceship operator (<=>) in Ruby?",
              back: "The spaceship operator (<=>) in Ruby is a comparison operator that returns -1 if the left operand is less than the right operand, 0 if they are equal, and 1 if the left operand is greater than the right operand. It's commonly used for implementing custom comparison methods and sorting."
            },
            {
              front: "What's the difference between '==' and '===' in Ruby?",
              back: "In Ruby, == tests if two objects have the same value, while === is typically used in case statements for pattern matching. For most built-in classes, === is the same as ==, but some classes override === to provide special behavior (e.g., Range === 5 tests if 5 is in the range)."
            }
          ]
        },
        {
          id: "ruby-control-flow",
          title: "Control Flow",
          description: "Understanding decision making and loops in Ruby",
          content: `
# Control Flow in Ruby

Control flow in Ruby allows you to control the flow of your program's execution based on conditions and iterations.
          `,
          codeExamples: [
            {
              title: "Conditional Statements",
              code: `# If statement
number = 10

if number > 0
  puts "#{number} is positive"
end

# If-else statement
temperature = 25

if temperature > 30
  puts "It's hot outside!"
else
  puts "It's not too hot today."
end

# If-elsif-else statement
score = 85

if score >= 90
  grade = "A"
elsif score >= 80
  grade = "B"
elsif score >= 70
  grade = "C"
elsif score >= 60
  grade = "D"
else
  grade = "F"
end

puts "Grade: #{grade}"  # Grade: B

# Unless statement (opposite of if)
is_raining = false

unless is_raining
  puts "No need for an umbrella!"
end

# Modifier form of if and unless
puts "Number is positive" if number > 0
puts "Don't forget your umbrella" if is_raining
puts "You can leave your umbrella" unless is_raining

# Ternary operator
age = 20
status = age >= 18 ? "Adult" : "Minor"
puts "Status: #{status}"  # Status: Adult

# Case statement (switch)
day = 3

case day
when 1
  day_name = "Monday"
when 2
  day_name = "Tuesday"
when 3
  day_name = "Wednesday"
when 4
  day_name = "Thursday"
when 5
  day_name = "Friday"
when 6
  day_name = "Saturday"
when 7
  day_name = "Sunday"
else
  day_name = "Invalid day"
end

puts "Day: #{day_name}"  # Day: Wednesday

# Case statement with ranges
case score
when 90..100
  letter_grade = "A"
when 80...90
  letter_grade = "B"
when 70...80
  letter_grade = "C"
when 60...70
  letter_grade = "D"
else
  letter_grade = "F"
end

puts "Letter grade: #{letter_grade}"  # Letter grade: B`,
              explanation: "This example demonstrates conditional statements in Ruby, including if, if-else, if-elsif-else, unless, and case statements. It also shows the modifier form of if and unless, which allows for more concise syntax when the condition is simple. The case statement in Ruby is more powerful than switch statements in many other languages, as it can work with ranges and use the === operator for pattern matching."
            },
            {
              title: "Loops and Iteration",
              code: `# While loop
puts "While loop:"
count = 1
while count <= 5
  puts "Count: #{count}"
  count += 1
end

# Until loop (opposite of while)
puts "\\nUntil loop:"
count = 1
until count > 5
  puts "Count: #{count}"
  count += 1
end

# For loop with range
puts "\\nFor loop with range:"
for i in 1..5
  puts "i = #{i}"
end

# Each iterator with range
puts "\\nEach iterator with range:"
(1..5).each do |i|
  puts "i = #{i}"
end

# Each iterator with array
puts "\\nEach iterator with array:"
fruits = ["apple", "banana", "cherry"]
fruits.each do |fruit|
  puts fruit
end

# Each with index
puts "\\nEach with index:"
fruits.each_with_index do |fruit, index|
  puts "#{index + 1}. #{fruit}"
end

# Times iterator
puts "\\n3.times:"
3.times do |i|
  puts "i = #{i}"  # 0, 1, 2
end

# Upto and downto methods
puts "\\n1.upto(3):"
1.upto(3) do |i|
  puts "i = #{i}"  # 1, 2, 3
end

puts "\\n3.downto(1):"
3.downto(1) do |i|
  puts "i = #{i}"  # 3, 2, 1
end

# Step method
puts "\\nStep method:"
(1..10).step(2) do |i|
  puts "i = #{i}"  # 1, 3, 5, 7, 9
end

# Loop control statements: break
puts "\\nBreak statement:"
for i in 1..10
  break if i > 5
  puts "i = #{i}"
end

# Loop control statements: next (like continue)
puts "\\nNext statement:"
for i in 1..10
  next if i % 2 == 0  # Skip even numbers
  puts "i = #{i}"
end

# Loop control statements: redo
puts "\\nRedo example:"
count = 0
for i in 1..3
  puts "i = #{i}"
  if i == 2 && count < 1
    count += 1
    puts "Redoing i = 2"
    redo  # Repeat the current iteration
  end
end

# Infinite loop with break
puts "\\nInfinite loop with break:"
counter = 1
loop do
  puts "Counter: #{counter}"
  counter += 1
  break if counter > 5
end`,
              explanation: "This example shows various types of loops and iteration methods in Ruby. In addition to traditional while, until, and for loops, Ruby offers many iterators like each, times, upto, downto, and step. It also demonstrates loop control statements like break (to exit a loop), next (to skip to the next iteration), and redo (to repeat the current iteration). The loop method creates an infinite loop that must be explicitly terminated with a break statement."
            }
          ],
          quiz: [
            {
              question: "What will be the output of the following Ruby code?\n\nx = 5\nunless x > 10\n  puts \"x is not greater than 10\"\nelse\n  puts \"x is greater than 10\"\nend",
              options: [
                "x is not greater than 10",
                "x is greater than 10",
                "No output",
                "Error"
              ],
              correctAnswer: 0,
              explanation: "The 'unless' statement executes its body when the condition is false. Since x (5) is not greater than 10, the condition is false, and the code outputs 'x is not greater than 10'. You can think of 'unless condition' as equivalent to 'if !condition'."
            }
          ],
          flashcards: [
            {
              front: "What is the difference between 'while' and 'until' loops in Ruby?",
              back: "A 'while' loop executes as long as the condition is true, whereas an 'until' loop executes as long as the condition is false. You can think of 'until condition' as equivalent to 'while !condition'."
            },
            {
              front: "How does the 'case' statement in Ruby differ from 'switch' statements in other languages?",
              back: "Ruby's 'case' statement is more powerful than traditional switch statements because: 1) It uses the '===' operator for pattern matching, not just equality. 2) It can work with ranges, classes, and regular expressions. 3) It doesn't require 'break' statements to prevent fall-through. 4) It can assign the result of the matched when clause to a variable."
            }
          ]
        },
        {
          id: "ruby-methods",
          title: "Methods",
          description: "Creating and using methods in Ruby",
          content: `
# Methods in Ruby

Methods are reusable blocks of code that perform specific tasks in Ruby programs.
          `,
          codeExamples: [
            {
              title: "Defining and Calling Methods",
              code: `# Basic method definition
def say_hello
  puts "Hello, World!"
end

# Calling the method
say_hello  # Output: Hello, World!

# Method with parameters
def greet(name)
  puts "Hello, #{name}!"
end

greet("Ruby")  # Output: Hello, Ruby!

# Method with default parameter
def welcome(name = "Guest")
  puts "Welcome, #{name}!"
end

welcome           # Output: Welcome, Guest!
welcome("Alice")  # Output: Welcome, Alice!

# Method with multiple parameters
def introduce(name, age)
  puts "#{name} is #{age} years old."
end

introduce("Bob", 30)  # Output: Bob is 30 years old.

# Method with return value
def add(a, b)
  return a + b
end

sum = add(5, 3)
puts "Sum: #{sum}"  # Output: Sum: 8

# Implicit return (last evaluated expression)
def multiply(a, b)
  a * b  # No explicit return needed
end

product = multiply(4, 6)
puts "Product: #{product}"  # Output: Product: 24

# Multiple return values
def get_coordinates
  return 10, 20, 30  # Returns an array [10, 20, 30]
end

x, y, z = get_coordinates
puts "Coordinates: #{x}, #{y}, #{z}"  # Output: Coordinates: 10, 20, 30

# Passing a block to a method
def do_three_times
  yield if block_given?
  yield if block_given?
  yield if block_given?
end

do_three_times { puts "Hello from block!" }

# Variable number of arguments (splat operator)
def sum(*numbers)
  total = 0
  numbers.each { |n| total += n }
  total
end

puts sum(1, 2, 3, 4, 5)  # Output: 15

# Keyword arguments (Ruby 2.0+)
def create_person(name:, age:, city: "Unknown")
  "#{name}, #{age}, from #{city}"
end

person = create_person(name: "Charlie", age: 35, city: "New York")
puts person  # Output: Charlie, 35, from New York

# Method with block parameter (Ruby 2.0+)
def custom_each(array, &block)
  array.each(&block)
end

custom_each([1, 2, 3]) { |num| puts num * 2 }`,
              explanation: "This example demonstrates defining and calling methods in Ruby. It covers methods with no parameters, methods with parameters (including default parameters and variable arguments), methods that return values (both explicitly with 'return' and implicitly), methods that take blocks, and methods with keyword arguments. Ruby methods can return multiple values as an array, and they can be readily assigned to multiple variables."
            },
            {
              title: "Method Scope and Visibility",
              code: `# Class with different method visibility
class Person
  def initialize(name)
    @name = name
  end
  
  # Public method (default)
  def say_hello
    puts "#{@name} says hello!"
    private_method  # Can call private methods
  end
  
  # Protected method
  protected
  
  def protected_method
    puts "This is a protected method."
  end
  
  # Private method
  private
  
  def private_method
    puts "This is a private method."
  end
end

# Creating instances
alice = Person.new("Alice")
bob = Person.new("Bob")

# Calling methods
alice.say_hello  # Works: public method

# alice.protected_method  # Error: protected method
# alice.private_method    # Error: private method

# Singleton methods (methods for specific objects)
def alice.dance
  puts "Alice is dancing!"
end

alice.dance  # Works for alice
# bob.dance  # Error: undefined method for bob

# Method aliasing
class Calculator
  def add(a, b)
    a + b
  end
  
  alias sum add  # Create an alias 'sum' for method 'add'
end

calc = Calculator.new
puts calc.add(3, 4)  # Output: 7
puts calc.sum(3, 4)  # Output: 7

# Method with method_missing
class ResponseObject
  def method_missing(name, *args)
    if name.to_s.start_with?("find_by_")
      attribute = name.to_s[8..-1]  # Extract attribute name
      puts "Finding by #{attribute} with value #{args.first}"
    else
      super  # Call the original method_missing
    end
  end
end

resp = ResponseObject.new
resp.find_by_name("John")     # Output: Finding by name with value John
resp.find_by_email("j@ex.com")  # Output: Finding by email with value j@ex.com

# Method introspection
def example_method(a, b = 1, *c, d:, e: 2, **f, &g)
  puts "Method called"
end

method_object = method(:example_method)
puts "Method name: #{method_object.name}"
puts "Method parameters: #{method_object.parameters}"
puts "Method arity: #{method_object.arity}"`,
              explanation: "This example explores method scope and visibility in Ruby. It demonstrates public, protected, and private methods within a class, singleton methods (methods defined for specific objects), method aliasing (creating alternative names for methods), the method_missing mechanism (for handling calls to undefined methods), and method introspection (examining a method's properties like parameters and arity)."
            }
          ],
          quiz: [
            {
              question: "What is the difference between public, protected, and private methods in Ruby?",
              options: [
                "Public methods can be called anywhere, protected methods only within the class, and private methods only within the instance",
                "Public methods can be called anywhere, protected methods can be called by instances of the same class, and private methods can only be called by the current object",
                "Public methods require access control, protected methods can be inherited, and private methods cannot be inherited",
                "There is no difference; these are just naming conventions"
              ],
              correctAnswer: 1,
              explanation: "In Ruby, public methods can be called by anyone. Protected methods can be called by instances of the same class or its subclasses, allowing them to interact with each other. Private methods can only be called by the current object (implicitly), without explicitly specifying a receiver, making them useful for internal implementation details."
            }
          ],
          flashcards: [
            {
              front: "What does the 'yield' keyword do in Ruby?",
              back: "The 'yield' keyword in Ruby executes the block that was passed to the method. If no block was given, yield raises a LocalJumpError unless used with 'block_given?'. It allows methods to accept blocks of code as implicit parameters, enabling powerful patterns for customization and abstraction."
            },
            {
              front: "What is method_missing in Ruby?",
              back: "method_missing is a special method in Ruby that's called when you invoke a method that doesn't exist. By overriding method_missing, you can dynamically handle undefined methods, enabling techniques like dynamic finders in ActiveRecord, method proxying, and flexible DSLs. It's a key part of Ruby's metaprogramming capabilities."
            }
          ]
        },
        {
          id: "ruby-arrays",
          title: "Arrays",
          description: "Working with Arrays in Ruby",
          content: `
# Arrays in Ruby

Arrays are ordered collections that can hold objects of different types.
          `,
          codeExamples: [
            {
              title: "Creating and Accessing Arrays",
              code: `# Creating arrays
numbers = [1, 2, 3, 4, 5]
mixed = [1, "two", 3.0, true, nil]
empty = []
words = %w(apple banana cherry)  # Same as ["apple", "banana", "cherry"]
symbols = %i(red green blue)     # Same as [:red, :green, :blue]

# Creating arrays with Array.new
zeros = Array.new(5, 0)          # [0, 0, 0, 0, 0]
array_of_arrays = Array.new(3) { [] }  # Creates 3 distinct empty arrays

# Accessing elements
puts "First element: #{numbers[0]}"      # First element: 1
puts "Last element: #{numbers[-1]}"      # Last element: 5
puts "Second element: #{numbers.at(1)}"  # Second element: 2

# Array slicing
puts "First two elements: #{numbers[0, 2]}"   # First two elements: [1, 2]
puts "First three elements: #{numbers[0..2]}" # First three elements: [1, 2, 3]
puts "All except first two: #{numbers[2..-1]}" # All except first two: [3, 4, 5]

# Accessing multiple elements
puts "First and third: #{numbers.values_at(0, 2)}"  # First and third: [1, 3]

# Checking for elements
puts "Contains 3? #{numbers.include?(3)}"   # Contains 3? true
puts "Contains 10? #{numbers.include?(10)}" # Contains 10? false

# Array size
puts "Size: #{numbers.size}"        # Size: 5
puts "Length: #{numbers.length}"    # Length: 5
puts "Empty? #{numbers.empty?}"     # Empty? false
puts "Empty? #{empty.empty?}"       # Empty? true

# First and last elements
puts "First: #{numbers.first}"      # First: 1
puts "Last: #{numbers.last}"        # Last: 5
puts "First 2: #{numbers.first(2)}" # First 2: [1, 2]
puts "Last 2: #{numbers.last(2)}"   # Last 2: [4, 5]`,
              explanation: "This example demonstrates creating arrays in Ruby using various methods, accessing elements by index (both positive and negative), slicing arrays to get portions, and checking for elements and array properties. Ruby provides many convenience methods for working with arrays, such as first, last, include?, and values_at."
            },
            {
              title: "Modifying Arrays",
              code: `# Starting with a simple array
arr = [1, 2, 3]
puts "Original array: #{arr}"  # Original array: [1, 2, 3]

# Adding elements
arr.push(4)        # Add to the end
arr << 5           # Also adds to the end (shovel operator)
arr.unshift(0)     # Add to the beginning
arr.insert(3, 2.5) # Insert at specific position
puts "After adding elements: #{arr}"  # After adding elements: [0, 1, 2, 2.5, 3, 4, 5]

# Removing elements
arr.pop            # Remove from the end
arr.shift          # Remove from the beginning
arr.delete_at(2)   # Delete at specific index
arr.delete(2.5)    # Delete specific value
puts "After removing elements: #{arr}"  # After removing elements: [1, 3, 4]

# Removing elements conditionally
even_numbers = [2, 4, 6, 7, 8, 9, 10]
even_numbers.delete_if { |num| num % 2 != 0 }  # Delete if odd
puts "Even numbers only: #{even_numbers}"  # Even numbers only: [2, 4, 6, 8, 10]

# Keep if (opposite of delete_if)
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
numbers.keep_if { |num| num <= 5 }  # Keep if <= 5
puts "Numbers <= 5: #{numbers}"  # Numbers <= 5: [1, 2, 3, 4, 5]

# Array union, intersection, difference
a = [1, 2, 3, 4]
b = [3, 4, 5, 6]
puts "Union: #{a | b}"        # Union: [1, 2, 3, 4, 5, 6]
puts "Intersection: #{a & b}" # Intersection: [3, 4]
puts "Difference: #{a - b}"   # Difference: [1, 2]

# Combining arrays
c = [7, 8]
combined = a + c
puts "Combined: #{combined}"  # Combined: [1, 2, 3, 4, 7, 8]

# Multiplying arrays
repeated = [1, 2] * 3
puts "Repeated: #{repeated}"  # Repeated: [1, 2, 1, 2, 1, 2]

# Compact - remove nil values
with_nils = [1, nil, 2, nil, 3]
puts "Compacted: #{with_nils.compact}"  # Compacted: [1, 2, 3]

# Flatten - reduce nested arrays
nested = [1, [2, [3, 4]]]
puts "Flattened: #{nested.flatten}"  # Flattened: [1, 2, 3, 4]

# Uniq - remove duplicates
duplicates = [1, 2, 2, 3, 3, 3, 4]
puts "Uniq: #{duplicates.uniq}"  # Uniq: [1, 2, 3, 4]

# Sorting
unsorted = [3, 1, 4, 2]
puts "Sorted: #{unsorted.sort}"  # Sorted: [1, 2, 3, 4]
puts "Sorted descending: #{unsorted.sort.reverse}"  # Sorted descending: [4, 3, 2, 1]

# Advanced sorting
people = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 }
]
sorted_by_age = people.sort_by { |person| person[:age] }
puts "Sorted by age: #{sorted_by_age}"`,
              explanation: "This example shows how to modify arrays in Ruby by adding elements (push, <<, unshift, insert), removing elements (pop, shift, delete_at, delete), and transforming arrays with methods like union (|), intersection (&), difference (-), compact, flatten, uniq, and sort. Ruby provides many convenient methods for array manipulation that make common operations concise and readable."
            }
          ],
          quiz: [
            {
              question: "What will be the output of the following Ruby code?\n\narr = [1, 2, 3, 4, 5]\nputs arr[2, 2]",
              options: [
                "[3]",
                "[3, 4]",
                "[2, 3]",
                "Error"
              ],
              correctAnswer: 1,
              explanation: "The array slicing syntax arr[start_index, length] returns 'length' elements starting at 'start_index'. In this case, arr[2, 2] returns 2 elements starting at index 2, which are [3, 4]."
            }
          ],
          flashcards: [
            {
              front: "What's the difference between arr.pop and arr.shift in Ruby?",
              back: "arr.pop removes and returns the last element of the array, whereas arr.shift removes and returns the first element of the array. Both methods modify the original array. Their counterparts for adding elements are arr.push (or arr <<) and arr.unshift, respectively."
            },
            {
              front: "What does the & operator do when used with arrays in Ruby?",
              back: "The & operator returns the intersection of two arrays - a new array containing only the elements that appear in both arrays. For example, [1, 2, 3] & [2, 3, 4] returns [2, 3]. It automatically removes any duplicates in the result."
            }
          ]
        },
        {
          id: "ruby-hashes",
          title: "Hashes",
          description: "Working with Hashes (key-value pairs) in Ruby",
          content: `
# Hashes in Ruby

Hashes are collections of key-value pairs, similar to dictionaries or maps in other languages.
          `,
          codeExamples: [
            {
              title: "Creating and Accessing Hashes",
              code: `# Creating hashes
# Old syntax with hash rockets
person = {"name" => "John", "age" => 30, "city" => "New York"}

# New syntax with symbols as keys (preferred in modern Ruby)
person = {name: "John", age: 30, city: "New York"}

# Creating an empty hash
empty_hash = {}
another_empty = Hash.new

# Hash with default value
scores = Hash.new(0)  # Default value is 0
puts scores["alice"]  # Output: 0 (default value)

# Accessing values
puts "Name: #{person[:name]}"  # Output: Name: John
puts "Age: #{person[:age]}"    # Output: Age: 30

# Accessing non-existent key
puts "Phone: #{person[:phone]}"  # Output: Phone:  (nil)

# Fetch with default value
puts "Phone: #{person.fetch(:phone, "Not provided")}"  # Output: Phone: Not provided

# Fetch with block
puts "Phone: #{person.fetch(:phone) { |key| "No #{key} found" }}"  # Output: Phone: No phone found

# Checking if key exists
puts "Has name? #{person.key?(:name)}"           # Output: Has name? true
puts "Has phone? #{person.has_key?(:phone)}"     # Output: Has phone? false
puts "Includes age? #{person.include?(:age)}"    # Output: Includes age? true

# Getting all keys and values
puts "Keys: #{person.keys}"          # Output: Keys: [:name, :age, :city]
puts "Values: #{person.values}"      # Output: Values: ["John", 30, "New York"]
puts "Key-value pairs: #{person.to_a}"  # Output: Key-value pairs: [[:name, "John"], [:age, 30], [:city, "New York"]]

# Iterating over a hash
puts "\\nIterating over a hash:"
person.each do |key, value|
  puts "#{key}: #{value}"
end

# Iterating over just keys or values
puts "\\nJust keys:"
person.each_key { |key| puts key }

puts "\\nJust values:"
person.each_value { |value| puts value }`,
              explanation: "This example demonstrates creating hashes in Ruby using both the older hash rocket syntax (=>) and the newer symbol syntax (:). It shows how to access hash values, provide default values, check for key existence, and iterate over a hash. Hashes are fundamental data structures in Ruby, used extensively for configurations, parameter options, and representing structured data."
            },
            {
              title: "Modifying Hashes",
              code: `# Starting with a simple hash
person = {name: "John", age: 30}
puts "Original hash: #{person}"  # Original hash: {:name=>"John", :age=>30}

# Adding and updating elements
person[:city] = "New York"  # Add new key-value pair
person[:age] = 31           # Update existing value
puts "After adding/updating: #{person}"  # After adding/updating: {:name=>"John", :age=>31, :city=>"New York"}

# Multiple additions/updates
person.update({email: "john@example.com", phone: "555-1234"})
# Or use merge! which is an alias for update
# person.merge!({email: "john@example.com", phone: "555-1234"})
puts "After update: #{person}"

# Creating a new hash with merge (non-destructive)
updated_person = person.merge({age: 32, job: "Developer"})
puts "Original after merge: #{person}"  # Original unchanged
puts "New merged hash: #{updated_person}"

# Removing items
person.delete(:phone)
puts "After delete: #{person}"

# Removing conditionally
person.delete_if { |key, value| key == :email }
puts "After delete_if: #{person}"

# Selecting items
adults = {alice: 30, bob: 15, charlie: 25, dave: 17}
adult_only = adults.select { |name, age| age >= 18 }
puts "Adults only: #{adult_only}"

# Rejecting items (opposite of select)
minors_only = adults.reject { |name, age| age >= 18 }
puts "Minors only: #{minors_only}"

# Transforming keys and values
prices = {apple: 0.99, banana: 0.50, orange: 0.75}
sale_prices = prices.transform_values { |price| price * 0.8 }
puts "Sale prices: #{sale_prices}"

upcase_keys = prices.transform_keys { |key| key.to_s.upcase.to_sym }
puts "Upcase keys: #{upcase_keys}"

# Using map on a hash
mapped = prices.map { |k, v| [k, v * 2] }.to_h
puts "Mapped prices: #{mapped}"

# Inverting a hash (swapping keys and values)
inverted = prices.invert
puts "Inverted prices: #{inverted}"

# Clearing a hash
prices.clear
puts "After clear: #{prices}"  # After clear: {}

# Hash slicing (Ruby 2.5+)
info = {name: "Jane", age: 28, city: "Boston", job: "Engineer"}
# person_details = info.slice(:name, :age)  # For Ruby 2.5+
# puts "Sliced hash: #{person_details}"

# Alternative for pre-2.5
person_details = info.select { |k, _| [:name, :age].include?(k) }
puts "Selected keys: #{person_details}"`,
              explanation: "This example shows how to modify hashes in Ruby by adding, updating, and removing elements. It demonstrates methods like update/merge!, merge, delete, delete_if, select, reject, transform_values, transform_keys, map, invert, and clear. These operations allow for flexible hash manipulation in Ruby programs."
            }
          ],
          quiz: [
            {
              question: "What will be the output of the following Ruby code?\n\nh1 = {a: 1, b: 2}\nh2 = {b: 3, c: 4}\nputs h1.merge(h2)",
              options: [
                "{:a=>1, :b=>2, :b=>3, :c=>4}",
                "{:a=>1, :b=>3, :c=>4}",
                "{:a=>1, :b=>[2, 3], :c=>4}",
                "Error: duplicate key :b"
              ],
              correctAnswer: 1,
              explanation: "When merging hashes with the merge method, if there are duplicate keys, the values from the hash being merged (h2 in this case) take precedence. So h1.merge(h2) produces {:a=>1, :b=>3, :c=>4}, where the value for :b is 3 from h2, not 2 from h1."
            }
          ],
          flashcards: [
            {
              front: "What is the difference between Hash.new and Hash.new(0) in Ruby?",
              back: "Hash.new creates an empty hash where accessing a non-existent key returns nil. Hash.new(0) creates an empty hash where accessing a non-existent key returns the default value 0. This is particularly useful for counters and aggregations, as you don't need to check if a key exists before incrementing its value."
            },
            {
              front: "What's the difference between merge and update (merge!) methods in Ruby hashes?",
              back: "merge creates and returns a new hash containing the combined contents of the original hash and the provided hash, without modifying the original. update (or its alias merge!) modifies the original hash in-place by adding the contents of the provided hash. Both methods let the second hash's values overwrite any duplicate keys from the first hash."
            }
          ]
        },
        {
          id: "ruby-classes",
          title: "Classes and Objects",
          description: "Object-oriented programming in Ruby with classes",
          content: `
# Classes and Objects in Ruby

Ruby is a pure object-oriented language where everything is an object, including numbers and strings.
          `,
          codeExamples: [
            {
              title: "Creating Classes and Objects",
              code: `# Defining a basic class
class Person
  # Constructor method
  def initialize(name, age)
    @name = name  # Instance variable (prefixed with @)
    @age = age
  end
  
  # Instance method
  def introduce
    "Hi, I'm #{@name} and I'm #{@age} years old."
  end
  
  # Getter methods
  def name
    @name
  end
  
  def age
    @age
  end
  
  # Setter methods
  def name=(new_name)
    @name = new_name
  end
  
  def age=(new_age)
    @age = new_age
  end
end

# Creating an instance (object) of the class
person = Person.new("Alice", 30)
puts person.introduce  # Output: Hi, I'm Alice and I'm 30 years old.

# Using getter and setter methods
puts person.name  # Output: Alice
person.age = 31
puts person.age   # Output: 31

# Using attr_* methods for getters and setters
class Student
  # Creates both getter and setter methods
  attr_accessor :name, :grade
  
  # Creates getter methods only
  attr_reader :id
  
  # Creates setter methods only
  attr_writer :address
  
  def initialize(id, name)
    @id = id
    @name = name
  end
end

student = Student.new(12345, "Bob")
puts student.name  # Output: Bob
student.name = "Robert"
puts student.name  # Output: Robert
puts student.id    # Output: 12345
# student.id = 54321  # This would raise an error
student.address = "123 Main St"  # Sets @address
# puts student.address  # This would raise an error

# Class with custom inspect/to_s methods
class Book
  attr_accessor :title, :author, :pages
  
  def initialize(title, author, pages)
    @title = title
    @author = author
    @pages = pages
  end
  
  # Custom string representation
  def to_s
    "\"#{@title}\" by #{@author} (#{@pages} pages)"
  end
  
  # Used by p, pp, and inspect methods
  def inspect
    "#<Book:#{object_id} title=#{@title.inspect} author=#{@author.inspect} pages=#{@pages}>"
  end
end

book = Book.new("The Ruby Programming Language", "Matz", 500)
puts book  # Uses to_s method
p book     # Uses inspect method`,
              explanation: "This example demonstrates creating classes in Ruby, which are blueprints for objects. It shows how to define instance variables (with the @ prefix), create instance methods, define constructors (initialize method), and use getter and setter methods. It also shows the attr_accessor, attr_reader, and attr_writer methods, which automatically create getter and setter methods. Finally, it demonstrates customizing string representation with to_s and inspect methods."
            },
            {
              title: "Class Variables, Class Methods, and Inheritance",
              code: `# Class with class variables and class methods
class Counter
  # Class variable (shared across all instances)
  @@count = 0
  
  # Class method (called on the class, not instances)
  def self.count
    @@count
  end
  
  def initialize
    @@count += 1
  end
  
  # Instance method
  def increment
    @@count += 1
  end
end

puts "Initial count: #{Counter.count}"  # Output: Initial count: 0

counter1 = Counter.new
puts "After creating counter1: #{Counter.count}"  # Output: After creating counter1: 1

counter2 = Counter.new
puts "After creating counter2: #{Counter.count}"  # Output: After creating counter2: 2

counter1.increment
puts "After incrementing: #{Counter.count}"  # Output: After incrementing: 3

# Inheritance
class Animal
  attr_reader :name
  
  def initialize(name)
    @name = name
  end
  
  def speak
    "Some generic animal sound"
  end
end

# Dog inherits from Animal
class Dog < Animal
  def initialize(name, breed)
    super(name)  # Call parent's initialize
    @breed = breed
  end
  
  # Override the speak method
  def speak
    "Woof!"
  end
  
  def fetch
    "#{@name} is fetching the ball!"
  end
  
  def info
    "#{@name} is a #{@breed}"
  end
end

# Cat inherits from Animal
class Cat < Animal
  def speak
    "Meow!"
  end
  
  def purr
    "Purrrrrr..."
  end
end

dog = Dog.new("Rex", "German Shepherd")
cat = Cat.new("Whiskers")

puts dog.name   # Output: Rex
puts dog.speak  # Output: Woof!
puts dog.fetch  # Output: Rex is fetching the ball!
puts dog.info   # Output: Rex is a German Shepherd

puts cat.name   # Output: Whiskers
puts cat.speak  # Output: Meow!
puts cat.purr   # Output: Purrrrrr...

# Checking inheritance
puts "Dog is an Animal: #{Dog < Animal}"               # Output: true
puts "Dog instance is an Animal: #{dog.is_a?(Animal)}" # Output: true
puts "Dog instance is a Dog: #{dog.is_a?(Dog)}"        # Output: true
puts "Dog instance is a Cat: #{dog.is_a?(Cat)}"        # Output: false

# Modules and Mixins
module Swimmable
  def swim
    "#{self.class} is swimming!"
  end
end

module Climbable
  def climb
    "#{self.class} is climbing!"
  end
end

class Mammal
  def breathe
    "Inhale... Exhale..."
  end
end

class Monkey < Mammal
  include Climbable  # Mix in the Climbable module
  
  def initialize(name)
    @name = name
  end
end

class Fish
  include Swimmable  # Mix in the Swimmable module
end

monkey = Monkey.new("George")
fish = Fish.new

puts monkey.breathe  # Output: Inhale... Exhale...
puts monkey.climb    # Output: Monkey is climbing!
puts fish.swim       # Output: Fish is swimming!`,
              explanation: "This example covers class variables (prefixed with @@), which are shared across all instances of a class, and class methods (defined with self.), which are called on the class itself. It also demonstrates inheritance, where a subclass inherits behavior from a superclass, and can override methods or add new ones. The 'super' keyword calls the parent class's implementation. Finally, it shows modules and mixins, which allow for sharing behavior across multiple classes without using inheritance."
            }
          ],
          quiz: [
            {
              question: "What's the difference between class variables (@@var) and instance variables (@var) in Ruby?",
              options: [
                "Class variables are accessible outside the class, while instance variables are private",
                "Class variables are shared among all instances of a class, while instance variables are unique to each instance",
                "Class variables can only be used in class methods, while instance variables can only be used in instance methods",
                "There is no difference; they are just alternative syntaxes"
              ],
              correctAnswer: 1,
              explanation: "Class variables (prefixed with @@) are shared among all instances of a class and its subclasses. They store data that applies to the class as a whole. Instance variables (prefixed with @) are unique to each instance of a class and store data specific to that instance."
            }
          ],
          flashcards: [
            {
              front: "What does attr_accessor do in Ruby?",
              back: "attr_accessor is a method that automatically creates getter and setter methods for instance variables. For example, attr_accessor :name creates methods name and name= that get and set the @name instance variable. It's a shorthand that reduces boilerplate code."
            },
            {
              front: "What is the purpose of the super keyword in Ruby?",
              back: "The super keyword in Ruby calls the method with the same name in the parent class. When used without arguments (just super), it passes all the arguments received by the current method. When used with specific arguments (super(arg1, arg2)), it passes only those arguments. It's commonly used in initialize methods of subclasses to set up the parent class's state."
            }
          ]
        },
        {
          id: "ruby-modules",
          title: "Modules and Mixins",
          description: "Using modules for namespacing and mixins in Ruby",
          content: `
# Modules and Mixins in Ruby

Modules in Ruby provide a mechanism for namespacing, sharing functionality between classes, and creating mixins.
          `,
          codeExamples: [
            {
              title: "Modules for Namespacing",
              code: `# Module as a namespace
module Mathematics
  PI = 3.14159
  
  def self.square(x)
    x * x
  end
  
  def self.cube(x)
    x * x * x
  end
  
  # Nested module
  module Geometry
    def self.circle_area(radius)
      PI * radius * radius
    end
    
    def self.square_area(side)
      side * side
    end
  end
  
  # Class inside a module
  class Calculator
    def add(a, b)
      a + b
    end
    
    def subtract(a, b)
      a - b
    end
  end
end

# Accessing module constants
puts "PI: #{Mathematics::PI}"  # Output: PI: 3.14159

# Calling module methods
puts "Square of 5: #{Mathematics.square(5)}"  # Output: Square of 5: 25
puts "Cube of 3: #{Mathematics.cube(3)}"      # Output: Cube of 3: 27

# Accessing nested module methods
puts "Circle area: #{Mathematics::Geometry.circle_area(2)}"  # Output: Circle area: 12.56636

# Creating an instance of a class inside a module
calc = Mathematics::Calculator.new
puts "5 + 3 = #{calc.add(5, 3)}"          # Output: 5 + 3 = 8
puts "5 - 3 = #{calc.subtract(5, 3)}"     # Output: 5 - 3 = 2

# Another namespace example: different classes with the same name
module Animals
  class Dog
    def speak
      "Animals::Dog says Woof!"
    end
  end
end

module Robots
  class Dog
    def speak
      "Robots::Dog says Beep Boop!"
    end
  end
end

dog1 = Animals::Dog.new
dog2 = Robots::Dog.new

puts dog1.speak  # Output: Animals::Dog says Woof!
puts dog2.speak  # Output: Robots::Dog says Beep Boop!`,
              explanation: "This example demonstrates using modules as namespaces in Ruby. Namespaces help organize code and prevent naming conflicts. You can define constants, methods, nested modules, and classes inside a module. To access them, you use the scope resolution operator (::). This allows different classes with the same name to coexist in different namespaces."
            },
            {
              title: "Modules as Mixins",
              code: `# Module as a mixin (provides shared functionality)
module Loggable
  def log(message)
    puts "[LOG] #{Time.now}: #{message}"
  end
  
  def debug(message)
    puts "[DEBUG] #{message}" if @debug_enabled
  end
  
  def enable_debugging
    @debug_enabled = true
  end
  
  def disable_debugging
    @debug_enabled = false
  end
end

# Module with included callback
module Identifiable
  def self.included(base)
    puts "Identifiable module included in #{base}"
    base.extend(ClassMethods)  # Add class methods when module is included
  end
  
  # Instance methods - added to instances of including class
  def id
    @id ||= generate_id
  end
  
  private
  
  def generate_id
    "#{self.class.name.downcase}-#{object_id}"
  end
  
  # Class methods - added to the class itself
  module ClassMethods
    def count_instances
      @count ||= 0
      @count += 1
    end
  end
end

# Class including modules
class User
  include Loggable     # Mix in instance methods from Loggable
  include Identifiable  # Mix in instance methods from Identifiable
  
  attr_reader :name
  
  def initialize(name)
    @name = name
    log("Created user: #{name}")
    self.class.count_instances
  end
end

# Creating instances
user1 = User.new("Alice")       # Logs: [LOG] 2023-06-01 12:00:00: Created user: Alice
puts "User ID: #{user1.id}"     # Output: User ID: user-47030960298380

user1.enable_debugging
user1.debug("Testing debug mode")  # Output: [DEBUG] Testing debug mode

# Multiple inheritance via mixins
module Swimmable
  def swim
    "#{self.class} is swimming!"
  end
end

module Flyable
  def fly
    "#{self.class} is flying!"
  end
end

class Bird
  include Flyable
end

class Fish
  include Swimmable
end

class Duck
  include Swimmable
  include Flyable
end

bird = Bird.new
fish = Fish.new
duck = Duck.new

puts bird.fly   # Output: Bird is flying!
puts fish.swim  # Output: Fish is swimming!
puts duck.fly   # Output: Duck is flying!
puts duck.swim  # Output: Duck is swimming!

# Using prepend instead of include
module Decorator
  def greet
    "** #{super} **"  # 'super' calls the original method
  end
end

class Greeter
  prepend Decorator  # Prepend puts the module's methods before the class's methods
  
  def greet
    "Hello, world!"
  end
end

greeter = Greeter.new
puts greeter.greet  # Output: ** Hello, world! **`,
              explanation: "This example shows using modules as mixins in Ruby, which is a way to share functionality across different classes. The 'include' method adds a module's instance methods to a class's instances. The 'extend' method adds a module's instance methods as class methods. The 'prepend' method works like 'include', but places the module's methods before the class's methods in the lookup chain, allowing them to override class methods. This provides a form of multiple inheritance where a class can inherit behavior from multiple sources."
            }
          ],
          quiz: [
            {
              question: "What is the primary difference between 'include' and 'extend' when using modules in Ruby?",
              options: [
                "include adds the module's methods as instance methods, while extend adds them as class methods",
                "include is used for namespacing, while extend is used for mixins",
                "include makes module methods available in subclasses, while extend does not",
                "There is no difference; they are interchangeable"
              ],
              correctAnswer: 0,
              explanation: "The key difference is that 'include' adds a module's methods as instance methods to the including class, so they're available to instances of that class. 'extend' adds a module's methods as class methods, so they're available directly on the class itself. This is a common pattern for creating both instance-level and class-level functionality from modules."
            }
          ],
          flashcards: [
            {
              front: "What is the difference between 'include' and 'prepend' in Ruby?",
              back: "Both 'include' and 'prepend' add a module's methods as instance methods to a class, but with a different priority in the method lookup chain. With 'include', the class's own methods take precedence over the module's methods. With 'prepend', the module's methods take precedence over the class's methods, allowing them to override class methods while still being able to call the original method with 'super'."
            },
            {
              front: "What is the Ruby method lookup chain (ancestor chain)?",
              back: "The Ruby method lookup chain is the order in which Ruby searches for methods when they're called. For instance methods, Ruby looks in: 1) Prepended modules (newest first), 2) The class itself, 3) Included modules (newest last), 4) Superclass and its modules, continuing up the inheritance chain. This can be examined with the ancestors method on a class."
            }
          ]
        },
        {
          id: "ruby-blocks",
          title: "Blocks, Procs, and Lambdas",
          description: "Working with blocks, procs, and lambdas in Ruby",
          content: `
# Blocks, Procs, and Lambdas in Ruby

Blocks, procs, and lambdas are Ruby's way of implementing closures - chunks of code that can be passed around and executed later.
          `,
          codeExamples: [
            {
              title: "Blocks",
              code: `# Using a block with do...end
3.times do |i|
  puts "Iteration #{i}"
end

# Using a block with curly braces
[1, 2, 3].each { |num| puts "Number: #{num}" }

# Method that yields to a block
def greet
  puts "Before the greeting"
  yield if block_given?  # Execute the block if one was provided
  puts "After the greeting"
end

# Calling method with a block
greet { puts "Hello, World!" }

# Calling method without a block
greet  # No error because we check with block_given?

# Method with parameter and block
def repeat(n)
  n.times { yield }
end

repeat(3) { puts "Echo!" }

# Block parameters
def math_operation(a, b)
  yield(a, b) if block_given?
end

math_operation(5, 3) { |x, y| puts "Sum: #{x + y}" }
math_operation(5, 3) { |x, y| puts "Product: #{x * y}" }

# Returning a value from a block
def calculate(a, b)
  result = yield(a, b)
  puts "The result is #{result}"
  result  # Return the result
end

sum = calculate(5, 3) { |x, y| x + y }  # Block returns x + y
puts "Sum variable: #{sum}"

# Block variables scope
outer_var = "Outside"

1.times do
  inner_var = "Inside"
  puts "Inside block: outer_var = #{outer_var}"  # Can access outer variables
end

# puts inner_var  # Error: inner_var is not available outside the block

# Block that can handle any number of arguments
def flexible_yield(*args)
  yield(*args)
end

flexible_yield(1, 2, 3) { |a, b, c| puts "Got #{a}, #{b}, #{c}" }
flexible_yield(1, 2) { |a, b| puts "Got #{a}, #{b}" }`,
              explanation: "This example demonstrates blocks in Ruby, which are chunks of code that can be passed to methods and executed using the 'yield' keyword. Blocks can be written with either do...end or {}, and they can accept parameters. Methods can check if a block was provided using 'block_given?'. Blocks can also return values, which the method can then use or return. Blocks have access to variables from their outside scope (closures)."
            },
            {
              title: "Procs and Lambdas",
              code: `# Creating a Proc object
square = Proc.new { |x| x * x }
cube = proc { |x| x * x * x }  # Alternative syntax

# Using a Proc
puts "Square of 5: #{square.call(5)}"  # Output: Square of 5: 25
puts "Cube of 3: #{cube.call(3)}"      # Output: Cube of 3: 27

# Alternative ways to call a proc
puts square[5]      # Using square bracket syntax
puts square.(5)     # Using dot syntax
puts square === 5   # Using threequals operator (case equality)

# Creating a lambda
greeting = lambda { |name| "Hello, #{name}!" }
farewell = -> (name) { "Goodbye, #{name}!" }  # Alternative syntax

# Using a lambda
puts greeting.call("Alice")  # Output: Hello, Alice!
puts farewell.call("Bob")    # Output: Goodbye, Bob!

# Differences between procs and lambdas: argument checking
proc_example = proc { |a, b| "a: #{a}, b: #{b}" }
lambda_example = lambda { |a, b| "a: #{a}, b: #{b}" }

puts proc_example.call(1)      # Output: a: 1, b:  (nil for missing arg)
# puts lambda_example.call(1)   # Error: wrong number of arguments

puts proc_example.call(1, 2, 3)  # Output: a: 1, b: 2 (ignores extra args)
# puts lambda_example.call(1, 2, 3)  # Error: wrong number of arguments

# Differences between procs and lambdas: return behavior
def proc_return
  p = Proc.new { return "Returned from proc" }
  p.call
  return "Returned from method"  # This line is never reached
end

def lambda_return
  l = lambda { return "Returned from lambda" }
  result = l.call
  return "Returned from method: #{result}"
end

puts proc_return    # Output: Returned from proc
puts lambda_return  # Output: Returned from method: Returned from lambda

# Converting a block to a proc
def block_to_proc(&block)
  puts "Block converted to proc"
  block.call("Hello from proc")
end

block_to_proc { |msg| puts msg }

# Method that accepts both regular args and a block
def both_args_and_block(arg1, arg2, &block)
  puts "Args: #{arg1}, #{arg2}"
  block.call if block_given?
end

both_args_and_block("one", "two") { puts "Block executed" }

# Using Symbol#to_proc (shorthand)
numbers = [1, 2, 3, 4, 5]

# Standard block
squares = numbers.map { |n| n * n }

# Using method reference
def square(n)
  n * n
end
squares_with_method = numbers.map(&method(:square))

# Using Symbol#to_proc
upcase_words = ["hello", "world"].map(&:upcase)  # Same as { |str| str.upcase }
puts "Upcase words: #{upcase_words}"  # Output: Upcase words: ["HELLO", "WORLD"]

# Currying (partial application of functions)
multiply = ->(x, y) { x * y }
double = multiply.curry[2]  # Fix first argument to 2
triple = multiply.curry[3]  # Fix first argument to 3

puts "Double 5: #{double.call(5)}"  # Output: Double 5: 10
puts "Triple 5: #{triple.call(5)}"  # Output: Triple 5: 15`,
              explanation: "This example covers Procs and lambdas in Ruby, which are objects that encapsulate blocks. They can be stored in variables, passed to methods, and called later. The main differences between Procs and lambdas are in argument checking (lambdas are strict, Procs are not) and return behavior (return in a Proc exits the enclosing method, while return in a lambda only exits the lambda). The example also shows how to convert blocks to Procs using the & operator, using Symbol#to_proc for shorthand syntax, and currying (creating a new Proc by fixing some arguments of an existing one)."
            }
          ],
          quiz: [
            {
              question: "What's the difference between a Proc and a lambda in Ruby?",
              options: [
                "Procs are objects, lambdas are just syntax sugar for blocks",
                "Procs check argument count, lambdas don't",
                "Lambdas check argument count and treat 'return' differently than Procs",
                "There is no difference; they are different names for the same feature"
              ],
              correctAnswer: 2,
              explanation: "There are two main differences between Procs and lambdas in Ruby: 1) Lambdas check the number of arguments passed to them, while Procs don't (they set missing arguments to nil and ignore extra ones). 2) A 'return' statement in a Proc returns from the enclosing method, while a 'return' statement in a lambda only returns from the lambda itself."
            }
          ],
          flashcards: [
            {
              front: "What does yield do in Ruby?",
              back: "The yield keyword in Ruby executes the block that was passed to the method where yield is called. If no block was provided, yield raises a 'LocalJumpError' unless used with 'block_given?'. yield can also accept arguments that are passed to the block and can receive the block's return value."
            },
            {
              front: "What does the & operator do with blocks and methods in Ruby?",
              back: "The & operator serves two purposes with blocks and methods in Ruby: 1) In a method parameter (&block), it converts the block passed to the method into a Proc object, which can be stored or passed around. 2) When calling a method (&some_proc), it converts a Proc or any object that responds to to_proc into a block. This is often used with symbols: array.map(&:method_name)."
            }
          ]
        },
        {
          id: "ruby-exceptions",
          title: "Exception Handling",
          description: "Working with exceptions and error handling in Ruby",
          content: `
# Exception Handling in Ruby

Exception handling allows you to manage errors and exceptional conditions in your Ruby programs.
          `,
          codeExamples: [
            {
              title: "Basic Exception Handling",
              code: `# Basic try-rescue (try-catch in other languages)
begin
  # Code that might raise an exception
  10 / 0  # ZeroDivisionError
rescue
  puts "An error occurred!"
end

# Rescuing specific exceptions
begin
  # These two lines will raise different exceptions
  # 10 / 0  # ZeroDivisionError
  File.open("nonexistent_file.txt")  # Errno::ENOENT
rescue ZeroDivisionError
  puts "Division by zero error!"
rescue Errno::ENOENT
  puts "File not found error!"
end

# Capturing the exception object
begin
  10 / 0
rescue ZeroDivisionError => e
  puts "Error: #{e.message}"  # Output: Error: divided by 0
  puts "Backtrace: #{e.backtrace}"
end

# Multiple exceptions in one rescue clause
begin
  # Some code that might raise different errors
  # [1, 2, 3].fetch(5)  # IndexError
  # Integer("abc")      # ArgumentError
rescue IndexError, ArgumentError => e
  puts "Either an IndexError or ArgumentError occurred: #{e.message}"
end

# The else clause (executes when no exceptions occur)
begin
  puts "This code might raise an exception"
  # 10 / 0  # Uncomment to see the difference
rescue ZeroDivisionError
  puts "An error occurred"
else
  puts "No error occurred"
end

# The ensure clause (always executes)
begin
  puts "Trying to open a file"
  file = File.open("test.txt", "w")
  file.write("Test data")
  # 10 / 0  # Uncomment to raise an exception
rescue => e
  puts "Error: #{e.message}"
else
  puts "File operation successful"
ensure
  file.close if file  # Ensure file is closed whether an error occurred or not
  puts "File closed (ensure block)"
end

# Using retry
attempts = 0
begin
  attempts += 1
  puts "Attempt #{attempts}"
  raise "Simulated error" if attempts < 3  # Simulate an error for the first two attempts
rescue => e
  puts "Error: #{e.message}"
  retry if attempts < 3  # Try again for the first two attempts
end
puts "Success after #{attempts} attempts"`,
              explanation: "This example demonstrates basic exception handling in Ruby using begin, rescue, else, and ensure blocks. The rescue clause catches exceptions, the else clause runs when no exceptions occur, and the ensure clause always runs, making it useful for cleanup code. You can rescue specific exception types and capture the exception object to access its message and backtrace. The retry keyword restarts execution from the beginning of the begin block, useful for retrying operations that might fail temporarily."
            },
            {
              title: "Custom Exceptions and Advanced Techniques",
              code: `# Creating a custom exception class
class CustomError < StandardError
  attr_reader :custom_data
  
  def initialize(message = "A custom error occurred", custom_data = nil)
    @custom_data = custom_data
    super(message)
  end
end

# Using a custom exception
begin
  raise CustomError.new("Something went wrong", {code: 123})
rescue CustomError => e
  puts "Custom error: #{e.message}"
  puts "Custom data: #{e.custom_data}"
end

# Exception hierarchy
begin
  # This will raise a TypeError
  "string" + 123
rescue StandardError => e
  puts "Caught StandardError: #{e.class}"
end

# Raising exceptions
def validate_age(age)
  raise ArgumentError, "Age must be positive" if age < 0
  raise TypeError, "Age must be a number" unless age.is_a?(Numeric)
  puts "Age is valid: #{age}"
end

begin
  validate_age(-5)
rescue ArgumentError => e
  puts "Validation error: #{e.message}"
end

begin
  validate_age("twenty")
rescue TypeError => e
  puts "Type error: #{e.message}"
end

# Re-raising exceptions
begin
  begin
    10 / 0
  rescue => e
    puts "Inner rescue caught: #{e.class}"
    raise  # Re-raise the exception
  end
rescue => e
  puts "Outer rescue caught: #{e.class}"
end

# Catching exceptions in method definitions
def divide_numbers(a, b)
  a / b
rescue ZeroDivisionError
  "Division by zero is not allowed"
end

puts divide_numbers(10, 2)  # Output: 5
puts divide_numbers(10, 0)  # Output: Division by zero is not allowed

# Exception handling with ensure
def process_file(filename)
  file = File.open(filename, "r")
  yield(file)
rescue Errno::ENOENT
  puts "Error: File not found"
rescue => e
  puts "Error: #{e.message}"
ensure
  file.close if file
end

# process_file("example.txt") { |f| puts f.read }  # Will display the file contents or an error

# Handling exceptions in threads
threads = []
5.times do |i|
  threads << Thread.new do
    begin
      if i == 3
        raise "Error in thread #{i}"
      end
      puts "Thread #{i} completed successfully"
    rescue => e
      puts "Thread #{i} error: #{e.message}"
    end
  end
end

threads.each(&:join)

# Exception handling best practices
def example_of_best_practices
  # Be specific about which exceptions to catch
  begin
    # Some code that might raise exceptions
  rescue SpecificError => e
    # Handle the specific error
  end
  
  # Don't rescue Exception (would catch everything, including system errors and interrupts)
  # begin
  #   # Some code
  # rescue Exception => e  # DON'T DO THIS
  #   # Handle the error
  # end
  
  # Only rescue exceptions you know how to handle
  # Let unknown exceptions propagate up
end`,
              explanation: "This example covers advanced exception handling techniques in Ruby. It shows how to create custom exception classes by inheriting from StandardError, how to raise exceptions with specific messages and data, and how to catch exceptions in method definitions without explicit begin/rescue blocks. It also demonstrates re-raising exceptions, using ensure for cleanup, handling exceptions in threads, and best practices for exception handling. In Ruby, it's generally better to rescue specific exceptions rather than catching all exceptions, and to only rescue exceptions you know how to handle."
            }
          ],
          quiz: [
            {
              question: "Which of the following is NOT a built-in exception class in Ruby?",
              options: [
                "ArgumentError",
                "ZeroDivisionError",
                "NullPointerException",
                "NoMethodError"
              ],
              correctAnswer: 2,
              explanation: "NullPointerException is not a built-in exception class in Ruby. It's a common exception in Java, but in Ruby, the equivalent would be NoMethodError (when calling a method on nil) or a specific message like 'undefined method for nil:NilClass'. The other options - ArgumentError, ZeroDivisionError, and NoMethodError - are all built-in Ruby exception classes."
            }
          ],
          flashcards: [
            {
              front: "What's the difference between raise and fail in Ruby?",
              back: "In Ruby, 'raise' and 'fail' are aliases for the same method and can be used interchangeably to raise exceptions. However, there's a community convention that 'raise' is preferred when raising a new exception, while 'fail' is sometimes used when signaling a failure in the current method. This is just a style preference, not a technical difference."
            },
            {
              front: "What should you inherit from when creating custom exception classes in Ruby?",
              back: "In Ruby, custom exception classes should typically inherit from StandardError or one of its subclasses, not directly from Exception. This is because rescue without a specific class catches StandardError and its subclasses, but not other Exception subclasses like SystemExit, SignalException, and fatal errors. This design allows system-level exceptions to bypass regular rescue clauses."
            }
          ]
        },
        {
          id: "ruby-file-io",
          title: "File I/O and Input/Output",
          description: "Working with files and I/O operations in Ruby",
          content: `
# File I/O and Input/Output in Ruby

Ruby provides robust capabilities for reading from and writing to files, as well as handling standard input and output.
          `,
          codeExamples: [
            {
              title: "File Reading and Writing",
              code: `# Writing to a file
File.open("example.txt", "w") do |file|
  file.puts "Line 1"
  file.puts "Line 2"
  file.puts "Line 3"
end

# Reading an entire file at once
content = File.read("example.txt")
puts "File content:"
puts content

# Reading a file line by line
puts "\\nReading line by line:"
File.open("example.txt", "r") do |file|
  file.each_line do |line|
    puts "Line: #{line.chomp}"  # chomp removes the newline character
  end
end

# Reading with readlines
puts "\\nReading with readlines:"
lines = File.readlines("example.txt")
lines.each_with_index do |line, index|
  puts "Line #{index + 1}: #{line.chomp}"
end

# Appending to a file
File.open("example.txt", "a") do |file|
  file.puts "Line 4 (appended)"
end

puts "\\nFile after appending:"
puts File.read("example.txt")

# Reading and writing binary data
File.open("binary.dat", "wb") do |file|  # 'b' for binary mode
  file.write [0xFF, 0x00, 0xAA, 0x55].pack('C*')  # Pack bytes
end

bindata = File.binread("binary.dat")
puts "\\nBinary data (bytes):"
puts bindata.bytes.map { |b| b.to_s(16).upcase.rjust(2, '0') }.join(' ')

# File information
file = "example.txt"
puts "\\nFile information for #{file}:"
puts "Exists? #{File.exist?(file)}"
puts "File? #{File.file?(file)}"
puts "Directory? #{File.directory?(file)}"
puts "Size: #{File.size(file)} bytes"
puts "Modification time: #{File.mtime(file)}"

# File operations
new_name = "renamed.txt"
File.rename(file, new_name) if File.exist?(file)
puts "\\nRenamed file exists? #{File.exist?(new_name)}"

# File.delete(new_name)  # Uncomment to delete the file
# puts "File deleted. Exists? #{File.exist?(new_name)}"

# Directory operations
Dir.mkdir("example_dir") unless Dir.exist?("example_dir")
puts "\\nDirectory created."

puts "Files in current directory:"
Dir.glob("*").each do |entry|
  puts "#{entry} (#{File.directory?(entry) ? 'directory' : 'file'})"
end

# Dir.rmdir("example_dir")  # Uncomment to remove the directory
# puts "Directory removed."`,
              explanation: "This example demonstrates file I/O operations in Ruby, including writing to files, reading files (entire file, line by line, or with readlines), appending to files, and working with binary data. It also shows how to get file information (existence, size, modification time), perform file operations (rename, delete), and work with directories (create, list contents, remove). Note that some lines are commented out to prevent actual deletion of files and directories."
            },
            {
              title: "Standard I/O and Advanced File Operations",
              code: `# Standard Input
puts "Enter your name:"
name = gets.chomp  # gets reads a line from standard input, chomp removes newline
puts "Hello, #{name}!"

# Reading multiple lines from standard input
puts "Enter multiple lines (Ctrl+D to end on Unix/Linux, Ctrl+Z on Windows):"
lines = $stdin.readlines
puts "You entered #{lines.length} lines:"
lines.each_with_index do |line, index|
  puts "#{index + 1}: #{line.chomp}"
end

# Standard Output and Standard Error
$stdout.puts "This goes to standard output."
$stderr.puts "This goes to standard error."

# Redirecting output
original_stdout = $stdout
$stdout = File.open("output.log", "w")
puts "This goes to the log file."
$stdout = original_stdout
puts "Back to console output."

# Working with paths
require 'pathname'

path = Pathname.new("example/path/to/file.txt")
puts "Pathname operations:"
puts "Directory: #{path.dirname}"
puts "Basename: #{path.basename}"
puts "Extension: #{path.extname}"
puts "Absolute? #{path.absolute?}"

# Joining paths
puts "Joined path: #{File.join('path', 'to', 'file.txt')}"

# Expanding path (resolving relative paths)
puts "Expanded path: #{File.expand_path('~/documents')}"  # Resolves ~ to home directory

# File permissions
File.open("permission_example.txt", "w") do |file|
  file.puts "This file will have specific permissions."
end

# Set permissions (chmod)
File.chmod(0644, "permission_example.txt")  # -rw-r--r--

# Check permissions
puts "File permissions:"
puts "Readable? #{File.readable?("permission_example.txt")}"
puts "Writable? #{File.writable?("permission_example.txt")}"
puts "Executable? #{File.executable?("permission_example.txt")}"

# Temporary files
require 'tempfile'

temp = Tempfile.new('example')
temp.puts "This is temporary content."
temp.close

puts "Temporary file path: #{temp.path}"
puts "Temp file content: #{File.read(temp.path)}"
temp.unlink  # Delete the temporary file

# Working with CSV
require 'csv'

# Writing CSV
CSV.open("data.csv", "w") do |csv|
  csv << ["Name", "Age", "City"]
  csv << ["Alice", 30, "New York"]
  csv << ["Bob", 25, "Chicago"]
  csv << ["Charlie", 35, "Los Angeles"]
end

# Reading CSV
puts "\\nCSV content:"
CSV.foreach("data.csv", headers: true) do |row|
  puts "#{row["Name"]} is #{row["Age"]} years old and lives in #{row["City"]}"
end

# Working with JSON
require 'json'

# Creating JSON
person = {
  name: "Alice",
  age: 30,
  address: {
    city: "New York",
    zip: "10001"
  },
  hobbies: ["reading", "hiking", "photography"]
}

json_string = JSON.generate(person)
File.write("person.json", json_string)

# Reading JSON
parsed = JSON.parse(File.read("person.json"))
puts "\\nParsed JSON:"
puts "Name: #{parsed["name"]}"
puts "Age: #{parsed["age"]}"
puts "City: #{parsed["address"]["city"]}"
puts "Hobbies: #{parsed["hobbies"].join(", ")}"`,
              explanation: "This example covers standard I/O operations (input from the keyboard, output to the console), advanced file operations, working with paths, file permissions, temporary files, and working with structured data formats like CSV and JSON. It demonstrates how to read from standard input, redirect standard output, join and expand paths, set and check file permissions, create and use temporary files, and read/write CSV and JSON files. These capabilities make Ruby well-suited for a wide range of file and data processing tasks."
            }
          ],
          quiz: [
            {
              question: "Which mode should you use to append to an existing file in Ruby?",
              options: [
                "\"r\"",
                "\"w\"",
                "\"a\"",
                "\"b\""
              ],
              correctAnswer: 2,
              explanation: "To append to an existing file in Ruby, you should use mode \"a\" (append). Mode \"r\" is for reading only, \"w\" is for writing (but it truncates the file first, erasing any existing content), and \"b\" is not a mode by itself but can be combined with other modes for binary operations (like \"rb\" or \"wb\")."
            }
          ],
          flashcards: [
            {
              front: "What's the difference between File.read and File.readlines in Ruby?",
              back: "File.read reads the entire file content as a single string, while File.readlines reads the file line by line and returns an array of lines (including newline characters, unless a different separator is specified). For large files, File.readlines can be more memory-efficient if you need to process the file line by line, while File.read is simpler when you need the entire content as a string."
            },
            {
              front: "What is the purpose of the 'chomp' method in Ruby file I/O?",
              back: "The 'chomp' method in Ruby removes the trailing newline character(s) from a string. It's commonly used with 'gets' and when reading lines from files to strip the newline that's automatically included at the end of each line. For example, 'gets.chomp' reads a line from standard input and removes the trailing newline, making it easier to work with user input."
            }
          ]
        },
        {
          id: "ruby-regex",
          title: "Regular Expressions",
          description: "Pattern matching with regular expressions in Ruby",
          content: `
# Regular Expressions in Ruby

Regular expressions (regex or regexp) provide a powerful way to match patterns in strings.
          `,
          codeExamples: [
            {
              title: "Basic Regular Expressions",
              code: `# Creating regular expressions
pattern1 = /ruby/        # Using literal notation
pattern2 = %r{ruby}      # Alternative literal notation
pattern3 = Regexp.new("ruby")  # Using constructor

# Basic matching
string = "I love Ruby programming"
puts "Contains 'Ruby'? #{string =~ /Ruby/}"  # Returns index (7) or nil
puts "Contains 'Ruby'? #{string.match(/Ruby/)}"  # Returns MatchData object or nil

# Case sensitivity
puts "Case sensitive: #{"ruby" =~ /Ruby/}"    # nil (no match)
puts "Case insensitive: #{"ruby" =~ /Ruby/i}" # 0 (match at index 0)

# Character classes
puts "Digit matches: #{"abc123" =~ /[0-9]/}"  # 3 (first digit)
puts "Digit matches: #{"abc123" =~ /\\d/}"     # 3 (same as above)
puts "Word char matches: #{"hello!" =~ /\\w/}" # 0 (first word character)
puts "Whitespace matches: #{"a b" =~ /\\s/}"   # 1 (space character)

# Negated character classes
puts "Non-digit matches: #{"abc123" =~ /[^0-9]/}"  # 0 (first non-digit)
puts "Non-digit matches: #{"abc123" =~ /\\D/}"     # 0 (same as above)
puts "Non-word matches: #{"hello!" =~ /\\W/}"      # 5 (non-word character, the '!')
puts "Non-whitespace matches: #{"a b" =~ /\\S/}"   # 0 (first non-whitespace)

# Quantifiers
puts "One or more digits: #{"abc123def" =~ /\\d+/}"        # 3 (matches "123")
puts "Zero or more digits: #{"abcdef" =~ /\\d*/}"          # 0 (matches empty string)
puts "Zero or one digit: #{"abc1def" =~ /\\d?/}"           # 0 (matches empty string)
puts "Exactly 3 digits: #{"abc123def" =~ /\\d{3}/}"        # 3 (matches "123")
puts "2 to 4 digits: #{"abc12345def" =~ /\\d{2,4}/}"       # 3 (matches "1234")
puts "2 or more digits: #{"abc12345def" =~ /\\d{2,}/}"     # 3 (matches "12345")

# Anchors
puts "Start of string: #{"Ruby" =~ /^R/}"      # 0 (R at start)
puts "End of string: #{"Ruby" =~ /y$/}"        # 3 (y at end)
puts "Word boundary: #{"Ruby code" =~ /\\bRuby\\b/}"  # 0 (Ruby as a whole word)

# Grouping and capturing
match = "Ruby 3.1.2".match(/Ruby (\\d+)\\.(\\d+)\\.(\\d+)/)
if match
  puts "Full match: #{match[0]}"  # "Ruby 3.1.2"
  puts "Major version: #{match[1]}"  # "3"
  puts "Minor version: #{match[2]}"  # "1"
  puts "Patch version: #{match[3]}"  # "2"
end

# Named captures
match = "Ruby 3.1.2".match(/Ruby (?<major>\\d+)\\.(?<minor>\\d+)\\.(?<patch>\\d+)/)
if match
  puts "Using named captures:"
  puts "Major version: #{match[:major]}"  # "3"
  puts "Minor version: #{match[:minor]}"  # "1"
  puts "Patch version: #{match[:patch]}"  # "2"
end`,
              explanation: "This example demonstrates basic regular expressions in Ruby, including different ways to create patterns, basic matching, case sensitivity options, character classes (\\d for digits, \\w for word characters, \\s for whitespace), quantifiers (+ for one or more, * for zero or more, ? for zero or one, {n} for exactly n, {n,m} for n to m), anchors (^ for start of string, $ for end of string, \\b for word boundary), grouping with parentheses for capturing matched parts, and named captures using (?<name>...) syntax."
            },
            {
              title: "Advanced Regular Expressions",
              code: `# Alternation (OR)
puts "Matches 'cat' or 'dog': #{"I have a cat" =~ /cat|dog/}"  # 9
puts "Matches 'cat' or 'dog': #{"I have a dog" =~ /cat|dog/}"  # 9

# Grouping with alternation
puts "Groups with OR: #{"catfish" =~ /cat(fish|nip)/}"  # 0 (matches 'catfish')
puts "Groups with OR: #{"catnip" =~ /cat(fish|nip)/}"   # 0 (matches 'catnip')

# Non-capturing groups
match = "catfish".match(/cat(?:fish|nip)/)
puts "Non-capturing group: #{match[0]}"  # "catfish"
puts "No capture available: #{match[1]}"  # nil (no first capture)

# Lookahead and lookbehind assertions
puts "Positive lookahead: #{"password123" =~ /password(?=\\d)/}"   # 0 (matches if followed by a digit)
puts "Negative lookahead: #{"password" =~ /password(?!\\d)/}"      # 0 (matches if NOT followed by a digit)
puts "Positive lookbehind: #{"123password" =~ /(?<=\\d)password/}" # 3 (matches if preceded by a digit)
puts "Negative lookbehind: #{"xpassword" =~ /(?<!\\d)password/}"   # 1 (matches if NOT preceded by a digit)

# Modifiers
puts "Multiline mode: #{"Line1\\nLine2" =~ /^Line2$/m}"  # 6 (^ and $ match start/end of lines)
puts "Extended mode: #{
  "abc" =~ /a  # Match 'a'
             b  # followed by 'b'
             c  # followed by 'c'
            /x  # Extended mode ignores whitespace and comments
}"  # 0

# Greedy vs. non-greedy quantifiers
text = "This is <em>emphasized</em> and <strong>strong</strong> text"
greedy = text.scan(/<.+?>/)       # Non-greedy (matches each tag separately)
puts "Non-greedy: #{greedy}"      # ["<em>", "</em>", "<strong>", "</strong>"]
greedy = text.scan(/<.+>/)        # Greedy (matches from first < to last >)
puts "Greedy: #{greedy}"          # ["<em>emphasized</em> and <strong>strong</strong>"]

# Substitution with gsub
phone = "123-456-7890"
formatted = phone.gsub(/\\d{3}-\\d{3}-\\d{4}/, "(\\1) \\2-\\3")  # Doesn't work as written
puts "Direct approach doesn't work: #{formatted}"

# Proper way with captures
formatted = phone.gsub(/(\\d{3})-(\\d{3})-(\\d{4})/, "(\\1) \\2-\\3")
puts "With proper captures: #{formatted}"  # "(123) 456-7890"

# Using gsub with a block
formatted = phone.gsub(/(\\d{3})-(\\d{3})-(\\d{4})/) do |match|
  "(" + $1 + ") " + $2 + "-" + $3
end
puts "Using global variables: #{formatted}"  # "(123) 456-7890"

# Named captures in substitution
formatted = phone.gsub(/(?<area>\\d{3})-(?<prefix>\\d{3})-(?<line>\\d{4})/, 
                       "(\\k<area>) \\k<prefix>-\\k<line>")
puts "Using named captures: #{formatted}"  # "(123) 456-7890"

# Match and captures with scan
emails = "Contact alice@example.com or bob@example.org for help"
matches = emails.scan(/\\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}\\b/)
puts "Extracted emails: #{matches}"  # ["alice@example.com", "bob@example.org"]

# Extracting captures with scan
log = "User 123 logged in at 08:30, User 456 logged in at 09:45"
captures = log.scan(/User (\\d+) logged in at (\\d{2}:\\d{2})/)
puts "Captures from scan: #{captures}"  # [["123", "08:30"], ["456", "09:45"]]

# Splitting with regex
csv = "apple,banana,\"cherry,pie\",date"
parts = csv.split(/,(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/)
puts "Split CSV: #{parts}"  # ["apple", "banana", "\"cherry,pie\"", "date"]`,
              explanation: "This example explores advanced regular expression features in Ruby, including alternation (pattern1|pattern2), non-capturing groups (?:pattern), lookahead (?=pattern), lookbehind (?<=pattern), modifiers (m for multiline, x for extended), greedy vs. non-greedy quantifiers (+? for non-greedy version of +), substitution with gsub using captures and blocks, extracting matches and captures with scan, and complex splitting with regex. These advanced techniques allow for sophisticated pattern matching and text processing in Ruby programs."
            }
          ],
          quiz: [
            {
              question: "Which of the following regular expressions will match all occurrences of 'cat' that are not part of a longer word?",
              options: [
                "/cat/",
                "/\\bcat\\b/",
                "/^cat$/",
                "/(\\s|^)cat(\\s|$)/"
              ],
              correctAnswer: 1,
              explanation: "The expression /\\bcat\\b/ is correct because \\b represents a word boundary, which matches positions where a word character is not followed or preceded by another word character. This ensures that 'cat' is matched as a whole word, not as part of words like 'catalog' or 'concatenate'. The pattern /^cat$/ would only match if 'cat' is the entire string, and /(\\s|^)cat(\\s|$)/ attempts to match similar behavior but misses word boundaries with punctuation."
            }
          ],
          flashcards: [
            {
              front: "What's the difference between =~ and match? when using regular expressions in Ruby?",
              back: "The =~ operator returns the position (index) of the first match or nil if there's no match. It's often used in conditional statements. The match? method (Ruby 2.4+) returns true if there's a match or false otherwise, which is more semantically clear for boolean checks. The match method returns a MatchData object containing details about the match, or nil if there's no match, useful for extracting captured groups."
            },
            {
              front: "What are the common regex modifiers in Ruby and what do they do?",
              back: "Common regex modifiers in Ruby include: i (case-insensitive matching), m (multiline mode, where ^ and $ match start/end of each line), x (extended mode, ignoring whitespace and allowing comments), and o (perform interpolation only once). They can be combined, like /pattern/im for both case-insensitive and multiline matching."
            }
          ]
        },
        {
          id: "ruby-symbols",
          title: "Symbols",
          description: "Understanding and using symbols in Ruby",
          content: `
# Symbols in Ruby

Symbols are lightweight, immutable, reusable identifiers, often used as keys in hashes and for method names.
          `,
          codeExamples: [
            {
              title: "Working with Symbols",
              code: `# Creating symbols
symbol1 = :name
symbol2 = :"name"  # Same as :name
symbol3 = "name".to_sym  # Convert string to symbol
symbol4 = "status".intern  # Another way to convert string to symbol

# Symbol comparison
puts ":name == :name: #{:name == :name}"  # true
puts ":name == :age: #{:name == :age}"    # false
puts ":name == 'name': #{:name == 'name'}"  # false

# Object IDs (memory efficiency)
puts "Symbol object IDs:"
puts ":name.object_id: #{:name.object_id}"
puts ":name.object_id again: #{:name.object_id}"  # Same ID, same object in memory

puts "\\nString object IDs:"
puts "'name'.object_id: #{'name'.object_id}"
puts "'name'.object_id again: #{'name'.object_id}"  # Different IDs, different objects

# Converting between symbols and strings
name_symbol = :name
name_string = name_symbol.to_s  # Convert symbol to string
puts "Symbol to string: #{name_string.class}"  # String

status_string = "status"
status_symbol = status_string.to_sym  # Convert string to symbol
puts "String to symbol: #{status_symbol.class}"  # Symbol

# Symbols as hash keys (common use case)
person_with_string_keys = {"name" => "John", "age" => 30, "city" => "New York"}
person_with_symbol_keys = {:name => "John", :age => 30, :city => "New York"}
person_with_new_syntax = {name: "John", age: 30, city: "New York"}  # Shorthand

puts "\\nHash with string keys: #{person_with_string_keys}"
puts "Hash with symbol keys: #{person_with_symbol_keys}"
puts "Hash with symbol keys (new syntax): #{person_with_new_syntax}"

# Accessing hash values
puts "Accessing with string key: #{person_with_string_keys["name"]}"  # John
puts "Accessing with symbol key: #{person_with_symbol_keys[:name]}"   # John
puts "Accessing with symbol key (new syntax): #{person_with_new_syntax[:name]}"  # John

# Dynamic symbols (created at runtime)
key = "dynamic_key"
dynamic_symbol = key.to_sym
hash = {dynamic_symbol => "value"}
puts "\\nDynamic symbol as key: #{hash}"  # {:dynamic_key=>"value"}

# Symbol to proc
names = ["john", "paul", "george", "ringo"]
upcased = names.map(&:upcase)  # Shorthand for names.map { |name| name.upcase }
puts "\\nUpcased with symbol to proc: #{upcased}"  # ["JOHN", "PAUL", "GEORGE", "RINGO"]

# Symbols in method parameters (especially common for Rails)
def configure(options = {})
  puts "Host: #{options[:host] || 'localhost'}"
  puts "Port: #{options[:port] || 3000}"
  puts "Protocol: #{options[:protocol] || 'http'}"
end

configure(host: "example.com", port: 8080)

# Symbols as method names
methods = String.instance_methods.grep(/case/)
puts "\\nString methods with 'case':"
methods.each { |method| puts "  #{method}" }

# Checking if a symbol exists
all_symbols = Symbol.all_symbols
puts "\\nTotal number of symbols: #{all_symbols.size}"
puts "Contains :name? #{all_symbols.include?(:name)}"
puts "Contains :nonexistent? #{all_symbols.include?(:nonexistent)}"`,
              explanation: "This example demonstrates symbols in Ruby, which are immutable identifiers starting with a colon (:). It shows creating symbols, converting between symbols and strings, comparing symbols, and observing their memory efficiency through object IDs. Symbols are often used as hash keys and for method names, as shown in the example. The symbol-to-proc shorthand (&:method_name) is a powerful feature that leverages symbols for concise functional programming. Unlike strings, symbols with the same name are the same object in memory, making them more efficient for identifiers used repeatedly."
            },
            {
              title: "Symbols for Metaprogramming",
              code: `# Symbols for method names
class SymbolExample
  # Define methods dynamically
  [:foo, :bar, :baz].each do |method_name|
    define_method(method_name) do |arg = nil|
      puts "Called method #{method_name} with argument: #{arg}"
    end
  end
  
  # Method that accepts a method name as a symbol
  def call_method(method_name, *args)
    if respond_to?(method_name)
      send(method_name, *args)  # Call the method by name
    else
      puts "Method #{method_name} does not exist"
    end
  end
  
  # Dynamic attribute accessors
  def method_missing(method_name, *args, &block)
    method_str = method_name.to_s
    
    if method_str.end_with?('=') && args.size == 1
      # Setter method (e.g., name=)
      attribute = method_str.chop.to_sym  # Remove = and convert to symbol
      instance_variable_set("@#{attribute}", args.first)
    elsif method_str !~ /=/ && args.empty?
      # Getter method (e.g., name)
      instance_variable_get("@#{method_name}")
    else
      super  # Pass to the default method_missing handler
    end
  end
  
  # Prevent respond_to_missing? warning
  def respond_to_missing?(method_name, include_private = false)
    method_str = method_name.to_s
    method_str.end_with?('=') || instance_variable_defined?("@#{method_name}") || super
  end
end

example = SymbolExample.new

# Call the dynamically defined methods
example.foo("hello")
example.bar(42)
example.baz

# Call methods by name with send
example.call_method(:foo, "dynamic call")
example.call_method(:nonexistent)

# Use dynamic attributes
example.name = "John"
example.age = 30
puts "Name: #{example.name}, Age: #{example.age}"

# Exploring a class's methods with symbols
string_methods = String.instance_methods(false).sort
puts "\\nSome String instance methods:"
string_methods.first(5).each { |method| puts "  #{method}" }

# Symbol matching with grep
array_filter_methods = Array.instance_methods.grep(/filter|select|reject/)
puts "\\nArray filter methods:"
array_filter_methods.each { |method| puts "  #{method}" }

# Dynamic dispatch with case statement
def process_by_type(obj)
  case obj
  when Symbol
    puts "Processing symbol: #{obj}"
  when String
    puts "Processing string: #{obj}"
  when Numeric
    puts "Processing number: #{obj}"
  else
    puts "Unknown type: #{obj.class}"
  end
end

process_by_type(:symbol)
process_by_type("string")
process_by_type(42)

# Using symbols with tap for method chaining
[1, 2, 3, 4, 5]
  .select { |n| n.even? }
  .tap { |arr| puts "After select: #{arr}" }
  .map { |n| n * n }
  .tap { |arr| puts "After map: #{arr}" }

# Alternative using symbol to proc
[1, 2, 3, 4, 5]
  .select(&:even?)
  .tap { |arr| puts "After select with symbol: #{arr}" }
  .map { |n| n * n }`,
              explanation: "This example explores more advanced uses of symbols in Ruby, particularly for metaprogramming. It demonstrates defining methods dynamically, calling methods by name using 'send', implementing dynamic attributes with 'method_missing', exploring a class's methods, filtering method names, dynamic dispatch based on object type, and using the 'symbol to proc' shorthand for method chaining. Symbols play a central role in Ruby's metaprogramming capabilities, allowing for flexible and dynamic code."
            }
          ],
          quiz: [
            {
              question: "What is the primary advantage of using symbols over strings as hash keys in Ruby?",
              options: [
                "Symbols are easier to type with the colon prefix",
                "Symbols are immutable, so they're safer to use as keys",
                "Symbols always remain the same object with the same object ID, making them more memory-efficient",
                "Symbols allow for the JSON-like syntax in hashes, e.g., {name: 'value'}"
              ],
              correctAnswer: 2,
              explanation: "The primary advantage of using symbols over strings as hash keys is memory efficiency. Each time you create a string, it's a new object with a new object ID, even if the content is the same. Symbols with the same name are always the same object with the same object ID, which makes them more memory-efficient when used repeatedly as hash keys. While symbols are indeed immutable and do enable the new hash syntax, their memory efficiency is the main reason they're preferred for hash keys."
            }
          ],
          flashcards: [
            {
              front: "What is the &: syntax in Ruby and how is it used?",
              back: "The &: syntax in Ruby converts a symbol to a proc, which is then passed to a method expecting a block. For example, array.map(&:upcase) is equivalent to array.map { |item| item.upcase }, and array.select(&:even?) is equivalent to array.select { |item| item.even? }. This shorthand works because & calls to_proc on the symbol, and Symbol#to_proc returns a proc that calls the method named by the symbol on its argument."
            },
            {
              front: "What's the difference between :name and 'name' in Ruby?",
              back: ":name is a Symbol, which is immutable, has a fixed object ID, and is more memory-efficient for identifiers used repeatedly. 'name' is a String, which is mutable, has a new object ID each time it's created, and has many more built-in methods for text manipulation. Symbols are ideal for identifiers like hash keys and method names, while strings are better for text that needs to be manipulated."
            }
          ]
        },
        {
          id: "ruby-metaprogramming",
          title: "Metaprogramming",
          description: "Writing code that writes or modifies code in Ruby",
          content: `
# Metaprogramming in Ruby

Metaprogramming is writing code that writes or modifies code, allowing for dynamic program behavior and code generation.
          `,
          codeExamples: [
            {
              title: "Dynamic Method Definition and Object Introspection",
              code: `# Class with dynamic method definition
class Product
  attr_accessor :name, :price, :category
  
  def initialize(name, price, category)
    @name = name
    @price = price
    @category = category
  end
  
  # Define methods dynamically
  def self.define_discount_method(name, discount_percentage)
    define_method("#{name}_price") do
      price * (1 - discount_percentage / 100.0)
    end
  end
end

# Define discount methods
Product.define_discount_method(:sale, 10)      # 10% off
Product.define_discount_method(:clearance, 50) # 50% off

# Create a product
product = Product.new("Laptop", 1000, "Electronics")

# Use the dynamically defined methods
puts "Regular price: $#{product.price}"
puts "Sale price: $#{product.sale_price}"          # $900.0
puts "Clearance price: $#{product.clearance_price}" # $500.0

# Check which methods are available
puts "\\nProduct instance methods:"
puts product.methods(false).sort # Show only methods defined in the class

# Object introspection
puts "\\nObject introspection:"
puts "Class: #{product.class}"
puts "Is a Product? #{product.is_a?(Product)}"
puts "Responds to 'sale_price'? #{product.respond_to?(:sale_price)}"
puts "Instance variables: #{product.instance_variables}"

# Get and set instance variables by name
puts "\\nDynamic instance variable access:"
puts "price: #{product.instance_variable_get(:@price)}"
product.instance_variable_set(:@price, 1200)
puts "new price: #{product.price}"

# Get class's ancestors
puts "\\nClass hierarchy:"
puts Product.ancestors.inspect

# Open a class and add methods (monkey patching)
class String
  def shout
    upcase + "!"
  end
end

puts "hello".shout  # "HELLO!"

# Class methods and singleton methods
class Example
  # Class method
  def self.class_method
    "This is a class method"
  end
  
  # Instance method
  def instance_method
    "This is an instance method"
  end
end

obj = Example.new
puts Example.class_method  # Call class method
puts obj.instance_method   # Call instance method

# Add a singleton method (a method only available to this instance)
def obj.unique_method
  "This method only exists on this instance"
end

puts obj.unique_method  # "This method only exists on this instance"

# Try calling it on another instance
another_obj = Example.new
# another_obj.unique_method  # NoMethodError

# Check an object's singleton methods
puts "\\nSingleton methods:"
puts obj.singleton_methods.inspect`,
              explanation: "This example demonstrates basic metaprogramming techniques in Ruby. It shows dynamic method definition using 'define_method', object introspection to examine an object's properties and capabilities, dynamic instance variable access, class hierarchy exploration, monkey patching (modifying existing classes), and singleton methods (methods available only to specific instances). These techniques allow for flexible and dynamic programming styles, making Ruby particularly well-suited for creating domain-specific languages and adaptable frameworks."
            },
            {
              title: "Advanced Metaprogramming",
              code: `# Method missing and dynamic dispatch
class DynamicFinder
  def initialize(data)
    @data = data
  end
  
  def method_missing(method_name, *args, &block)
    method_str = method_name.to_s
    
    # Handle find_by_* methods
    if method_str.start_with?('find_by_')
      attribute = method_str[8..-1]  # Extract the attribute name
      value = args.first             # Get the search value
      
      # Find the matching items
      @data.select do |item|
        item.respond_to?(attribute.to_sym) && 
          item.send(attribute.to_sym) == value
      end
    else
      super  # Pass to the default method_missing handler
    end
  end
  
  # Always define respond_to_missing? when using method_missing
  def respond_to_missing?(method_name, include_private = false)
    method_str = method_name.to_s
    method_str.start_with?('find_by_') || super
  end
end

# Example data
Person = Struct.new(:name, :age, :city)
people = [
  Person.new("Alice", 30, "New York"),
  Person.new("Bob", 25, "Boston"),
  Person.new("Charlie", 30, "Chicago"),
  Person.new("Diana", 35, "New York")
]

finder = DynamicFinder.new(people)

# Use dynamic finder methods
puts "People age 30:"
finder.find_by_age(30).each { |p| puts "  #{p.name}" }

puts "\\nPeople in New York:"
finder.find_by_city("New York").each { |p| puts "  #{p.name}" }

# Class-level methods with class_eval
class Person
  attr_accessor :name, :age
  
  def initialize(name, age)
    @name = name
    @age = age
  end
end

# Add new functionality to the Person class
Person.class_eval do
  # Add a new instance method
  def greeting
    "Hello, I'm #{@name}"
  end
  
  # Add new class method
  def self.create_adult(name)
    new(name, 18)
  end
end

person = Person.new("Alice", 30)
puts "\\nDynamically added method: #{person.greeting}"
adult = Person.create_adult("Teen")
puts "Created with class method: #{adult.name}, #{adult.age}"

# Adding methods to a specific instance with instance_eval
person.instance_eval do
  def special_greeting
    "Special greeting from #{@name}"
  end
end

puts person.special_greeting

# Creating attributes dynamically with attr_accessor
class DynamicAttributes
  def self.attributes(*names)
    names.each do |name|
      # Create getter method
      define_method(name) do
        instance_variable_get("@#{name}")
      end
      
      # Create setter method
      define_method("#{name}=") do |value|
        instance_variable_set("@#{name}", value)
      end
    end
  end
end

class Car < DynamicAttributes
  attributes :make, :model, :year
  
  def initialize(make, model, year)
    @make = make
    @model = model
    @year = year
  end
end

car = Car.new("Toyota", "Corolla", 2020)
puts "\\nDynamic attributes: #{car.make} #{car.model} (#{car.year})"

# Metaprogramming with instance_variable_set and define_method
class ActiveRecord
  def initialize(attributes = {})
    attributes.each do |attribute, value|
      instance_variable_set("@#{attribute}", value)
    end
  end
  
  def self.define_attribute_methods(*attributes)
    attributes.each do |attribute|
      # Define getter
      define_method(attribute) do
        instance_variable_get("@#{attribute}")
      end
      
      # Define setter
      define_method("#{attribute}=") do |value|
        instance_variable_set("@#{attribute}", value)
      end
    end
  end
end

class User < ActiveRecord
  define_attribute_methods :name, :email, :password
end

user = User.new({name: "John", email: "john@example.com"})
user.password = "secret"

puts "\\nUser info:"
puts "  Name: #{user.name}"
puts "  Email: #{user.email}"
puts "  Password: #{user.password}"`,
              explanation: "This example explores advanced metaprogramming techniques in Ruby. It demonstrates using 'method_missing' to handle dynamic method calls like ActiveRecord's 'find_by_attribute' methods, 'class_eval' to add methods to a class, 'instance_eval' to add methods to specific instances, creating attributes dynamically with 'attr_accessor'-like functionality, and implementing a simple ActiveRecord-like pattern for defining and setting attributes. These powerful metaprogramming capabilities enable Ruby to create flexible, expressive frameworks like Rails, where much of the code is generated at runtime."
            }
          ],
          quiz: [
            {
              question: "What is the key difference between define_method and class_eval in Ruby metaprogramming?",
              options: [
                "define_method can only create instance methods, while class_eval can create both instance and class methods",
                "define_method creates a method individually, while class_eval executes arbitrary code within a class's context",
                "define_method creates class methods, while class_eval creates instance methods",
                "There is no difference; they're interchangeable approaches"
              ],
              correctAnswer: 1,
              explanation: "define_method creates a single method at a time, and the code is evaluated when the method is called. class_eval executes code within the context of a class, allowing you to define multiple methods, add class variables, or perform any other operations within the class scope. With class_eval, you can use regular def syntax to define methods, while define_method requires you to provide a block that becomes the method's body."
            }
          ],
          flashcards: [
            {
              front: "What is method_missing in Ruby and when would you use it?",
              back: "method_missing is a method that's called when an object receives a message (method call) it doesn't understand. By overriding method_missing, you can implement dynamic method handling, like catching all calls to find_by_* methods in ActiveRecord. It's useful for dynamic proxies, creating DSLs, and implementing ghost methods. Always define respond_to_missing? alongside method_missing to ensure proper behavior with respond_to?."
            },
            {
              front: "What's the difference between class_eval and instance_eval in Ruby?",
              back: "class_eval (or module_eval) executes code in the context of a class or module, allowing you to define instance methods or modify class properties. Any methods defined with def inside class_eval become instance methods. instance_eval executes code in the context of a specific object instance, allowing you to define singleton methods that exist only on that instance. This distinction is crucial for metaprogramming to modify either classes or specific instances."
            }
          ]
        },
        {
          id: "ruby-gems",
          title: "RubyGems and Bundler",
          description: "Managing Ruby libraries and dependencies",
          content: `
# RubyGems and Bundler

RubyGems is Ruby's package manager, and Bundler is a tool for managing gem dependencies in Ruby applications.
          `,
          codeExamples: [
            {
              title: "Using RubyGems",
              code: `# This is mostly a command-line based workflow, but here's a summary of commands:

# Installing a gem
# gem install nokogiri

# Installing a specific version
# gem install rails -v 6.1.4

# Listing installed gems
# gem list

# Getting info about a gem
# gem info nokogiri

# Searching for gems
# gem search -r regex

# Updating gems
# gem update rails

# Uninstalling gems
# gem uninstall nokogiri

# Creating a new gem (scaffolding)
# bundle gem my_new_gem

# Using RubyGems in code
require 'nokogiri'  # Require a gem in your Ruby code

html = <<-HTML
<!DOCTYPE html>
<html>
<head>
  <title>Sample Document</title>
</head>
<body>
  <h1>Hello, World!</h1>
  <p>This is a sample HTML document.</p>
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>
</body>
</html>
HTML

# Using the nokogiri gem to parse HTML (if it were installed)
# doc = Nokogiri::HTML(html)
# puts doc.at_css('title').text  # "Sample Document"
# puts doc.at_css('h1').text     # "Hello, World!"
# puts doc.css('li').map(&:text) # ["Item 1", "Item 2", "Item 3"]

# A Gemfile specifies project dependencies
# Example Gemfile content:
=begin
source 'https://rubygems.org'

gem 'rails', '~> 6.1.4'
gem 'pg', '~> 1.2.3'
gem 'puma', '~> 5.4'
gem 'nokogiri', '~> 1.12.3'

group :development do
  gem 'listen', '~> 3.7'
  gem 'spring'
end

group :test do
  gem 'rspec', '~> 3.10'
  gem 'capybara', '~> 3.35'
end
=end

# After creating a Gemfile, you can install the dependencies:
# bundle install

# Updating dependencies:
# bundle update

# Running a command with bundler:
# bundle exec rspec

# Checking outdated gems:
# bundle outdated

# Showing dependency graph:
# bundle viz

# Creating a gem with Bundler

# First, create a new gem scaffold:
# bundle gem awesome_gem

# This creates a directory structure like:
=begin
awesome_gem/
├── .git/
├── .gitignore
├── Gemfile
├── LICENSE.txt
├── README.md
├── Rakefile
├── bin/
│   ├── console
│   └── setup
├── awesome_gem.gemspec
└── lib/
    ├── awesome_gem/
    │   └── version.rb
    └── awesome_gem.rb
=end

# Example gem structure:

# lib/awesome_gem.rb
=begin
require "awesome_gem/version"

module AwesomeGem
  class Error < StandardError; end
  
  def self.hello
    puts "Hello from AwesomeGem!"
  end
end
=end

# lib/awesome_gem/version.rb
=begin
module AwesomeGem
  VERSION = "0.1.0"
end
=end

# awesome_gem.gemspec
=begin
require_relative 'lib/awesome_gem/version'

Gem::Specification.new do |spec|
  spec.name          = "awesome_gem"
  spec.version       = AwesomeGem::VERSION
  spec.authors       = ["Your Name"]
  spec.email         = ["your.email@example.com"]

  spec.summary       = "A short summary"
  spec.description   = "A longer description"
  spec.homepage      = "https://github.com/yourusername/awesome_gem"
  spec.license       = "MIT"
  spec.required_ruby_version = Gem::Requirement.new(">= 2.5.0")

  spec.metadata["homepage_uri"] = spec.homepage
  spec.metadata["source_code_uri"] = spec.homepage

  # Specify which files should be added to the gem when it is released.
  spec.files = Dir.glob("{bin,lib}/**/*") + %w[LICENSE.txt README.md]
  
  spec.bindir        = "bin"
  spec.executables   = spec.files.grep(%r{^bin/}) { |f| File.basename(f) }
  spec.require_paths = ["lib"]

  spec.add_development_dependency "rspec", "~> 3.10"
  spec.add_development_dependency "rake", "~> 13.0"
end
=end

# Building and installing your gem:
# gem build awesome_gem.gemspec
# gem install ./awesome_gem-0.1.0.gem

# Publishing to RubyGems.org:
# gem push awesome_gem-0.1.0.gem`,
              explanation: "This example provides an overview of RubyGems, Ruby's package manager. It shows common gem commands for installing, updating, and managing gems, how to require gems in Ruby code (with an example using Nokogiri for HTML parsing), and the structure of a Gemfile for managing project dependencies. It also demonstrates how to create a new gem using Bundler, including the directory structure, main code files, and gemspec configuration. Note that actual gem installation and HTML parsing are commented out since this is a code example, not a live environment."
            },
            {
              title: "Bundler and Dependency Management",
              code: `# Creating a Gemfile for your project
=begin
# Gemfile
source 'https://rubygems.org'

# Gems with specific version constraints
gem 'rails', '6.1.4'                # Exact version
gem 'pg', '~> 1.2.3'                # Pessimistic version constraint (~> allows minor updates)
gem 'puma', '>= 5.4'                # Greater than or equal to
gem 'nokogiri', '~> 1.12', '>= 1.12.3'  # Combined constraints

# Gems from git repositories
gem 'rails_admin', git: 'https://github.com/rails-admin/rails_admin.git'
gem 'custom_gem', git: 'https://github.com/user/custom_gem.git', branch: 'master'

# Gems with conditions
gem 'sqlite3', platforms: [:ruby, :mswin, :mingw]  # Only on certain platforms
gem 'tzinfo-data', platforms: [:mingw, :mswin]     # Windows-only gems

# Group gems by environment
group :development, :test do
  gem 'rspec-rails', '~> 5.0'
  gem 'factory_bot_rails', '~> 6.2'
  gem 'faker', '~> 2.18'
end

group :development do
  gem 'listen', '~> 3.7'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0'
  gem 'web-console', '>= 4.1.0'
end

group :test do
  gem 'capybara', '~> 3.35'
  gem 'selenium-webdriver', '~> 3.142'
  gem 'webdrivers', '~> 4.6'
end

group :production do
  gem 'redis', '~> 4.4'
  gem 'sidekiq', '~> 6.2'
end

# Gems from a different source
source 'https://gems.example.com' do
  gem 'private_gem'
end

# Gems with require option
gem 'awesome_print', require: 'ap'
gem 'rubyzip', require: 'zip'
gem 'json', require: false  # Don't automatically require
=end

# Gemfile.lock
=begin
GEM
  remote: https://rubygems.org/
  specs:
    actioncable (6.1.4)
      actionpack (= 6.1.4)
      activesupport (= 6.1.4)
      nio4r (~> 2.0)
      websocket-driver (>= 0.6.1)
    actionmailbox (6.1.4)
      actionpack (= 6.1.4)
      activejob (= 6.1.4)
      activerecord (= 6.1.4)
      activestorage (= 6.1.4)
      activesupport (= 6.1.4)
      mail (>= 2.7.1)
    # ... more gem specs ...
=end

# Using Bundler in Ruby code
=begin
# Require everything in your Gemfile
require 'bundler/setup'
Bundler.require

# Or require specific groups
require 'bundler/setup'
Bundler.require(:default, Rails.env)
=end

# .bundle/config (Bundler configuration)
=begin
---
BUNDLE_PATH: "vendor/bundle"
BUNDLE_JOBS: "4"
BUNDLE_RETRY: "3"
BUNDLE_WITHOUT: "production"
=end

# Environment variables that affect Bundler
=begin
# BUNDLE_GEMFILE: Specify a different Gemfile location
# export BUNDLE_GEMFILE=./Gemfile.custom

# BUNDLE_PATH: Where to install gems
# export BUNDLE_PATH=./vendor/bundle

# BUNDLE_WITHOUT: Groups to skip
# export BUNDLE_WITHOUT=development:test
=end

# Bundler commands
=begin
# Install gems
$ bundle install

# Install gems to a specific path
$ bundle install --path vendor/bundle

# Update all gems
$ bundle update

# Update specific gems
$ bundle update nokogiri rails

# Show outdated gems
$ bundle outdated

# Show where a gem is installed
$ bundle info nokogiri

# Run a command in context of the bundle
$ bundle exec rspec

# Clean old gem versions
$ bundle clean --force

# Deployment mode (strict versioning)
$ bundle install --deployment

# Generate a visual dependency graph
$ bundle viz
=end

# Gemfile.lock explained
=begin
The Gemfile.lock contains:
1. Exact versions of all gems (direct and transitive dependencies)
2. Source information for each gem
3. Dependency relationships
4. Platform-specific information

This ensures consistent installation across all environments.
=end

# Common Bundler workflow
=begin
1. Create/modify Gemfile
2. Run 'bundle install' to update Gemfile.lock
3. Commit both Gemfile and Gemfile.lock to version control
4. On deployment or when another developer clones the repo:
   - Run 'bundle install' to install exact versions from Gemfile.lock
5. To update dependencies:
   - Run 'bundle update [gem_name]'
   - Review changes to Gemfile.lock
   - Test thoroughly
   - Commit updated Gemfile.lock
=end

# Bundler with different Ruby versions (using .ruby-version)
=begin
# .ruby-version
3.0.2
=end

# Specifying Ruby version in Gemfile
=begin
# Gemfile
source 'https://rubygems.org'

ruby '3.0.2'

# ... rest of Gemfile ...
=end`,
              explanation: "This example focuses on Bundler, the dependency manager for Ruby. It shows how to create a Gemfile with various version constraints, gem sources, and grouping options, explains the purpose of the Gemfile.lock file for reproducible builds, and demonstrates common Bundler commands for managing dependencies. It also covers advanced topics like Bundler configuration, environment variables, deployment options, and specifying Ruby versions. While this is primarily documentation rather than executable code, it provides a comprehensive overview of how to manage dependencies in Ruby projects."
            }
          ],
          quiz: [
            {
              question: "What does the version constraint '~> 2.5.1' mean in a Gemfile?",
              options: [
                "Exactly version 2.5.1, no updates allowed",
                "Greater than or equal to 2.5.1, but less than 2.6.0 (allows patch updates only)",
                "Greater than or equal to 2.5.1, but less than 3.0.0 (allows minor and patch updates)",
                "Any version starting with 2.5.1 (allows any updates including major versions)"
              ],
              correctAnswer: 1,
              explanation: "The pessimistic version constraint '~> 2.5.1' is equivalent to '>= 2.5.1, < 2.6.0', meaning it allows patch updates (2.5.2, 2.5.3, etc.) but not minor or major updates (2.6.0, 3.0.0, etc.). If you want to allow minor updates too, you would use '~> 2.5' (equivalent to '>= 2.5, < 3.0')."
            }
          ],
          flashcards: [
            {
              front: "What's the difference between Gemfile and Gemfile.lock?",
              back: "The Gemfile specifies your project's dependencies with version constraints, but doesn't specify exact versions (e.g., '~> 1.2.3'). The Gemfile.lock is generated by Bundler and locks all gems to specific versions, including transitive dependencies. The Gemfile is maintained by the developer, while Gemfile.lock is generated automatically. Both should be committed to version control to ensure consistent installations across environments."
            },
            {
              front: "What does 'bundle exec' do and why is it important?",
              back: "'bundle exec' runs a command in the context of the current bundle, ensuring that the command uses the gem versions specified in your Gemfile.lock, rather than default gems that might be installed on the system. This is important to avoid version conflicts and ensure consistent behavior across development, testing, and production environments. For example, 'bundle exec rspec' ensures that RSpec runs with the version specified in your Gemfile.lock."
            }
          ]
        },
        {
          id: "ruby-testing",
          title: "Testing Ruby Code",
          description: "Unit, integration, and functional testing in Ruby",
          content: `
# Testing Ruby Code

Testing is a crucial part of Ruby development, with rich frameworks and methodologies available.
          `,
          codeExamples: [
            {
              title: "RSpec: Behavior-Driven Development",
              code: `# Example Class to Test
class Calculator
  def add(a, b)
    a + b
  end
  
  def subtract(a, b)
    a - b
  end
  
  def multiply(a, b)
    a * b
  end
  
  def divide(a, b)
    raise ArgumentError, "Cannot divide by zero" if b.zero?
    a / b.to_f
  end
end

# RSpec Tests
=begin
# calculator_spec.rb
require 'rspec'
require_relative 'calculator'

describe Calculator do
  let(:calculator) { Calculator.new }
  
  describe '#add' do
    it 'adds two numbers' do
      expect(calculator.add(2, 3)).to eq(5)
    end
    
    it 'works with negative numbers' do
      expect(calculator.add(2, -3)).to eq(-1)
    end
  end
  
  describe '#subtract' do
    it 'subtracts the second number from the first' do
      expect(calculator.subtract(5, 3)).to eq(2)
    end
  end
  
  describe '#multiply' do
    it 'multiplies two numbers' do
      expect(calculator.multiply(2, 3)).to eq(6)
    end
    
    it 'returns zero when multiplying by zero' do
      expect(calculator.multiply(5, 0)).to eq(0)
    end
  end
  
  describe '#divide' do
    it 'divides the first number by the second number' do
      expect(calculator.divide(10, 2)).to eq(5.0)
    end
    
    it 'returns a floating-point result' do
      expect(calculator.divide(5, 2)).to eq(2.5)
    end
    
    it 'raises an error when dividing by zero' do
      expect { calculator.divide(10, 0) }.to raise_error(ArgumentError, "Cannot divide by zero")
    end
  end
end
=end

# Running RSpec tests
# $ rspec calculator_spec.rb

# Using matchers in RSpec
=begin
describe 'RSpec matchers examples' do
  # Equality matchers
  it 'demonstrates equality matchers' do
    expect(5).to eq(5)                # Equality (==)
    expect('hello').to eql('hello')   # Equality with same type
    expect([1, 2]).to equal([1, 2])   # Same object identity
    expect(5).to be(5)                # Same object identity
    expect(5).to be_within(0.01).of(5.001)  # Close to a value
  end
  
  # Comparison matchers
  it 'demonstrates comparison matchers' do
    expect(10).to be > 5
    expect(5).to be < 10
    expect(10).to be >= 10
    expect(10).to be <= 10
    expect(5).to be_between(1, 10)
  end
  
  # Class/type matchers
  it 'demonstrates class/type matchers' do
    expect('hello').to be_an_instance_of(String)
    expect(5).to be_an(Integer)
    expect('hello').to be_a(String)
    expect([]).to be_an(Array)
  end
  
  # Truthiness matchers
  it 'demonstrates truthiness matchers' do
    expect(true).to be_truthy
    expect(false).to be_falsey
    expect(nil).to be_nil
    expect(1).to be_truthy
    expect(0).to be_truthy  # 0 is truthy in Ruby
  end
  
  # Collection matchers
  it 'demonstrates collection matchers' do
    expect([1, 2, 3]).to include(1)
    expect([1, 2, 3]).to include(1, 3)
    expect('hello').to include('ell')
    expect({ a: 1, b: 2 }).to include(:a)
    expect([1, 2, 3]).to contain_exactly(3, 2, 1)  # Same elements, any order
    expect([1, 2, 3]).to match_array([3, 2, 1])    # Same as contain_exactly
    expect([1, 2, 3]).to start_with(1)
    expect([1, 2, 3]).to end_with(3)
  end
  
  # Exception matchers
  it 'demonstrates exception matchers' do
    expect { raise "error" }.to raise_error
    expect { raise "specific error" }.to raise_error("specific error")
    expect { raise ArgumentError }.to raise_error(ArgumentError)
  end
  
  # Predicate matchers
  it 'demonstrates predicate matchers' do
    expect([]).to be_empty          # calls empty? method
    expect(5).to be_positive        # calls positive? method
    expect(5).not_to be_zero        # calls zero? method
    expect(5).to be_integer         # calls integer? method
  end
  
  # Change matchers
  it 'demonstrates change matchers' do
    array = [1, 2, 3]
    expect { array.push(4) }.to change { array.length }.by(1)
    expect { array.push(5) }.to change { array.length }.from(4).to(5)
    expect { array.pop }.to change { array.length }.by(-1)
  end
end
=end

# Example mocks and stubs in RSpec
=begin
class WeatherService
  def current_temperature(city)
    # Imagine this connects to an external API
    # In reality, it would return the temperature in Celsius
  end
end

class WeatherReport
  def initialize(weather_service)
    @weather_service = weather_service
  end
  
  def generate_report(city)
    temp = @weather_service.current_temperature(city)
    if temp < 0
      "It's freezing in #{city}!"
    elsif temp < 15
      "It's cool in #{city}."
    else
      "It's warm in #{city}."
    end
  end
end

describe WeatherReport do
  let(:weather_service) { instance_double("WeatherService") }
  let(:report) { WeatherReport.new(weather_service) }
  
  describe '#generate_report' do
    it 'reports freezing weather when temperature is below 0' do
      allow(weather_service).to receive(:current_temperature).with("Oslo").and_return(-5)
      expect(report.generate_report("Oslo")).to eq("It's freezing in Oslo!")
    end
    
    it 'reports cool weather when temperature is between 0 and 15' do
      allow(weather_service).to receive(:current_temperature).with("London").and_return(10)
      expect(report.generate_report("London")).to eq("It's cool in London.")
    end
    
    it 'reports warm weather when temperature is 15 or above' do
      allow(weather_service).to receive(:current_temperature).with("Rome").and_return(25)
      expect(report.generate_report("Rome")).to eq("It's warm in Rome.")
    end
    
    it 'verifies that the weather service is called with the right city' do
      expect(weather_service).to receive(:current_temperature).with("Paris").and_return(20)
      report.generate_report("Paris")
    end
  end
end
=end`,
              explanation: "This example demonstrates RSpec, a behavior-driven development (BDD) testing framework for Ruby. It shows how to write tests for a Calculator class, covering basic expectations, test organization with describe/it blocks, and the 'let' helper for creating test objects. It also provides a comprehensive overview of RSpec matchers for equality, comparison, type checking, truthiness, collections, exceptions, predicates, and changes. Finally, it demonstrates mocking and stubbing external dependencies, which is crucial for unit testing isolated components."
            },
            {
              title: "Minitest and Test Helpers",
              code: `# Minitest is built into Ruby's standard library

require 'minitest/autorun'

# Class to test
class Product
  attr_reader :name, :price
  
  def initialize(name, price)
    @name = name
    @price = price
  end
  
  def discount(percentage)
    @price * (1 - percentage / 100.0)
  end
  
  def on_sale?
    @price < 50
  end
end

# Unit tests with Minitest::Test
class ProductTest < Minitest::Test
  def setup
    @product = Product.new("Ruby Book", 40)
    @expensive_product = Product.new("Ruby Course", 200)
  end
  
  def test_initialization
    assert_equal "Ruby Book", @product.name
    assert_equal 40, @product.price
  end
  
  def test_discount
    assert_equal 36, @product.discount(10)
    assert_equal 20, @product.discount(50)
  end
  
  def test_on_sale
    assert @product.on_sale?
    refute @expensive_product.on_sale?
  end
end

# Spec-style syntax with Minitest::Spec
describe Product do
  before do
    @product = Product.new("Ruby Book", 40)
    @expensive_product = Product.new("Ruby Course", 200)
  end
  
  describe "initialization" do
    it "sets the name and price attributes" do
      _(@product.name).must_equal "Ruby Book"
      _(@product.price).must_equal 40
    end
  end
  
  describe "#discount" do
    it "calculates the discounted price" do
      _(@product.discount(10)).must_equal 36
      _(@product.discount(50)).must_equal 20
    end
  end
  
  describe "#on_sale?" do
    it "returns true for products under $50" do
      _(@product.on_sale?).must_equal true
      _(@expensive_product.on_sale?).must_equal false
    end
  end
end

# Mock objects in Minitest
class OrderProcessor
  def initialize(payment_gateway)
    @payment_gateway = payment_gateway
  end
  
  def process_order(order)
    if @payment_gateway.charge(order.total_amount)
      order.status = "paid"
      true
    else
      order.status = "payment_failed"
      false
    end
  end
end

class Order
  attr_accessor :total_amount, :status
  
  def initialize(total_amount)
    @total_amount = total_amount
    @status = "pending"
  end
end

describe OrderProcessor do
  describe "#process_order" do
    it "marks the order as paid when payment succeeds" do
      order = Order.new(100)
      payment_gateway = Minitest::Mock.new
      
      payment_gateway.expect :charge, true, [100]
      
      processor = OrderProcessor.new(payment_gateway)
      result = processor.process_order(order)
      
      _(result).must_equal true
      _(order.status).must_equal "paid"
      payment_gateway.verify
    end
    
    it "marks the order as failed when payment fails" do
      order = Order.new(100)
      payment_gateway = Minitest::Mock.new
      
      payment_gateway.expect :charge, false, [100]
      
      processor = OrderProcessor.new(payment_gateway)
      result = processor.process_order(order)
      
      _(result).must_equal false
      _(order.status).must_equal "payment_failed"
      payment_gateway.verify
    end
  end
end

# Fixtures and test data
class TestFixtures
  def self.sample_products
    [
      Product.new("Book", 20),
      Product.new("Course", 199),
      Product.new("Ticket", 50)
    ]
  end
end

describe "Using fixtures" do
  it "can use fixture data" do
    products = TestFixtures.sample_products
    _(products.length).must_equal 3
    _(products.first.name).must_equal "Book"
  end
end

# Customizing test output with reporters
class CustomReporter < Minitest::Reporters::DefaultReporter
  def record(result)
    super
    puts "Just finished running: #{result.name}"
  end
end

# Minitest::Reporters.use! CustomReporter.new

# Testing Rails applications with Minitest
=begin
# app/models/user.rb
class User < ApplicationRecord
  validates :email, presence: true, uniqueness: true
  validates :name, presence: true
  
  has_many :posts
  
  def full_name
    "#{name} <#{email}>"
  end
end

# test/models/user_test.rb
require "test_helper"

class UserTest < ActiveSupport::TestCase
  test "valid user" do
    user = User.new(name: "John", email: "john@example.com")
    assert user.valid?
  end
  
  test "invalid without email" do
    user = User.new(name: "John")
    refute user.valid?
    assert_not_nil user.errors[:email]
  end
  
  test "invalid without name" do
    user = User.new(email: "john@example.com")
    refute user.valid?
    assert_not_nil user.errors[:name]
  end
  
  test "full_name returns name and email" do
    user = User.new(name: "John", email: "john@example.com")
    assert_equal "John <john@example.com>", user.full_name
  end
end
=end

# Integration testing with Capybara
=begin
# test/system/users_test.rb
require "application_system_test_case"

class UsersTest < ApplicationSystemTestCase
  test "visiting the index" do
    visit users_url
    assert_selector "h1", text: "Users"
  end
  
  test "creating a User" do
    visit users_url
    click_on "New User"
    
    fill_in "Email", with: "john@example.com"
    fill_in "Name", with: "John Doe"
    click_on "Create User"
    
    assert_text "User was successfully created"
    click_on "Back"
  end
end
=end`,
              explanation: "This example demonstrates testing in Ruby using Minitest, which is part of Ruby's standard library. It shows both the traditional assertion-based syntax (Minitest::Test) and the spec-style syntax (Minitest::Spec) for different preferences. The code includes examples of setup and teardown, assertions and expectations, mocking objects, using fixtures for test data, and customizing test output with reporters. It also touches on testing Rails applications with Minitest, including model testing and system tests with Capybara for browser-based testing. Minitest is a lightweight alternative to RSpec with a smaller API and faster execution time."
            }
          ],
          quiz: [
            {
              question: "What is the main difference between RSpec and Minitest in Ruby testing?",
              options: [
                "RSpec is part of Ruby's standard library while Minitest requires a gem installation",
                "RSpec only supports unit testing while Minitest supports integration testing",
                "Minitest is part of Ruby's standard library and offers both assertion and spec-style syntax, while RSpec is a separate gem with a more DSL-focused approach",
                "Minitest only supports Rails applications while RSpec works with any Ruby code"
              ],
              correctAnswer: 2,
              explanation: "Minitest is included in Ruby's standard library, making it immediately available without additional gems. It offers both a traditional assertion-based syntax (assert_equal) and a spec-style syntax (must_equal). RSpec is a separate gem with a more extensive domain-specific language (DSL) focused on behavior-driven development (BDD). Both frameworks can test any Ruby code, including Rails applications, and support all types of testing (unit, integration, system)."
            }
          ],
          flashcards: [
            {
              front: "What's the difference between a mock and a stub in testing?",
              back: "A stub provides canned answers to method calls during a test without caring if or how they're called. It's used when you want to control the indirect inputs of the test. A mock not only provides canned answers but also verifies that specific methods are called with specific arguments. It's used when you want to test the interaction between objects. In RSpec: stubs use 'allow(...).to receive', mocks use 'expect(...).to receive'."
            },
            {
              front: "What is the purpose of the 'let' helper in RSpec?",
              back: "The 'let' helper in RSpec lazily defines a memoized helper method that can be used in multiple examples in a test group. It's evaluated only when it's first invoked and then cached for the remainder of the example. This makes tests more efficient and DRY by avoiding redundant setup code. 'let!' is a variant that executes the block immediately, rather than lazily, which is useful when you need side effects during setup."
            }
          ]
        },
        {
          id: "ruby-rails",
          title: "Introduction to Ruby on Rails",
          description: "Overview of the Ruby on Rails web framework",
          content: `
# Introduction to Ruby on Rails

Ruby on Rails is a web application framework written in Ruby that follows the Model-View-Controller (MVC) pattern.
          `,
          codeExamples: [
            {
              title: "Rails Basics and MVC Structure",
              code: `# Creating a new Rails application
# $ rails new blog
# $ cd blog

# Project Structure
=begin
blog/
├── app/                    # Application code
│   ├── controllers/        # Controller classes
│   ├── models/             # Model classes
│   ├── views/              # View templates
│   ├── helpers/            # View helper methods
│   ├── assets/             # JavaScript, CSS, images
│   ├── mailers/            # Email classes
│   ├── jobs/               # Background job classes
│   └── channels/           # Action Cable channels
├── bin/                    # Executables
├── config/                 # Configuration files
│   ├── routes.rb           # URL routing
│   ├── database.yml        # Database configuration
│   ├── application.rb      # App configuration
│   └── environments/       # Environment configs
├── db/                     # Database files
│   ├── migrate/            # Database migrations
│   └── seeds.rb            # Seed data
├── lib/                    # Library code
├── log/                    # Log files
├── public/                 # Public files
├── test/ or spec/          # Tests
├── vendor/                 # Third-party code
├── Gemfile                 # Gem dependencies
├── Gemfile.lock            # Locked gem versions
└── README.md               # Project README
=end

# Model (app/models/article.rb)
=begin
class Article < ApplicationRecord
  has_many :comments, dependent: :destroy
  
  validates :title, presence: true
  validates :body, presence: true, length: { minimum: 10 }
  
  def summary
    body.truncate(100)
  end
end
=end

# Controller (app/controllers/articles_controller.rb)
=begin
class ArticlesController < ApplicationController
  before_action :set_article, only: [:show, :edit, :update, :destroy]
  
  # GET /articles
  def index
    @articles = Article.all
  end
  
  # GET /articles/1
  def show
  end
  
  # GET /articles/new
  def new
    @article = Article.new
  end
  
  # GET /articles/1/edit
  def edit
  end
  
  # POST /articles
  def create
    @article = Article.new(article_params)
    
    if @article.save
      redirect_to @article, notice: 'Article was successfully created.'
    else
      render :new
    end
  end
  
  # PATCH/PUT /articles/1
  def update
    if @article.update(article_params)
      redirect_to @article, notice: 'Article was successfully updated.'
    else
      render :edit
    end
  end
  
  # DELETE /articles/1
  def destroy
    @article.destroy
    redirect_to articles_url, notice: 'Article was successfully destroyed.'
  end
  
  private
  
  def set_article
    @article = Article.find(params[:id])
  end
  
  def article_params
    params.require(:article).permit(:title, :body)
  end
end
=end

# View (app/views/articles/index.html.erb)
=begin
<h1>Articles</h1>

<% @articles.each do |article| %>
  <div class="article">
    <h2><%= link_to article.title, article %></h2>
    <p><%= article.summary %></p>
  </div>
<% end %>

<%= link_to "New Article", new_article_path, class: "button" %>
=end

# View (app/views/articles/show.html.erb)
=begin
<article>
  <h1><%= @article.title %></h1>
  <div class="content">
    <%= @article.body %>
  </div>
</article>

<div class="actions">
  <%= link_to "Edit", edit_article_path(@article) %> |
  <%= link_to "Back", articles_path %> |
  <%= link_to "Delete", article_path(@article),
              method: :delete,
              data: { confirm: 'Are you sure?' } %>
</div>
=end

# Routes (config/routes.rb)
=begin
Rails.application.routes.draw do
  resources :articles do
    resources :comments
  end
  
  root "articles#index"
end
=end

# Database Migration (db/migrate/20210715123456_create_articles.rb)
=begin
class CreateArticles < ActiveRecord::Migration[6.1]
  def change
    create_table :articles do |t|
      t.string :title
      t.text :body
      
      t.timestamps
    end
  end
end
=end

# Commands and Workflow
=begin
# Generate a model
$ rails generate model Article title:string body:text

# Run migrations
$ rails db:migrate

# Generate a controller
$ rails generate controller Articles index show new edit

# Start the server
$ rails server

# Rails console (for debugging/exploration)
$ rails console
=end`,
              explanation: "This example provides an overview of Ruby on Rails, a full-stack web framework following the Model-View-Controller (MVC) architecture. It covers the project structure, showing how models (for data and business logic), controllers (for handling requests), and views (for rendering responses) work together. The code includes examples of a basic Article model with validations, a RESTful ArticlesController with CRUD operations, ERB views for displaying articles, routes configuration, and database migrations. It also mentions common Rails commands for generating code, running migrations, and starting the server. While this is a high-level overview, it demonstrates Rails' convention-over-configuration philosophy that makes web development faster and more structured."
            },
            {
              title: "Rails Associations and Active Record",
              code: `# Active Record Associations

# Models with associations

# app/models/user.rb
=begin
class User < ApplicationRecord
  has_many :articles, dependent: :destroy
  has_many :comments, dependent: :destroy
  
  validates :email, presence: true, uniqueness: true
  validates :username, presence: true, uniqueness: true, length: { minimum: 3 }
  
  has_secure_password
end
=end

# app/models/article.rb
=begin
class Article < ApplicationRecord
  belongs_to :user
  has_many :comments, dependent: :destroy
  has_many :article_categories
  has_many :categories, through: :article_categories
  has_one_attached :featured_image
  
  validates :title, presence: true
  validates :body, presence: true, length: { minimum: 10 }
  
  scope :published, -> { where(published: true) }
  scope :recent, -> { order(created_at: :desc).limit(5) }
  
  def self.search(query)
    where("title LIKE ? OR body LIKE ?", "%#{query}%", "%#{query}%")
  end
end
=end

# app/models/comment.rb
=begin
class Comment < ApplicationRecord
  belongs_to :article
  belongs_to :user
  
  validates :body, presence: true
end
=end

# app/models/category.rb
=begin
class Category < ApplicationRecord
  has_many :article_categories
  has_many :articles, through: :article_categories
  
  validates :name, presence: true, uniqueness: true
end
=end

# app/models/article_category.rb (Join Model)
=begin
class ArticleCategory < ApplicationRecord
  belongs_to :article
  belongs_to :category
end
=end

# Active Record Migrations

# Creating tables
=begin
class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :email, null: false
      t.string :password_digest
      
      t.timestamps
    end
    
    add_index :users, :email, unique: true
    add_index :users, :username, unique: true
  end
end
=end

# Adding a reference/foreign key
=begin
class AddUserToArticles < ActiveRecord::Migration[6.1]
  def change
    add_reference :articles, :user, null: false, foreign_key: true
  end
end
=end

# Join table for many-to-many
=begin
class CreateArticleCategories < ActiveRecord::Migration[6.1]
  def change
    create_table :article_categories do |t|
      t.references :article, null: false, foreign_key: true
      t.references :category, null: false, foreign_key: true
      
      t.timestamps
    end
    
    add_index :article_categories, [:article_id, :category_id], unique: true
  end
end
=end

# Active Record Querying

# Basic queries
=begin
# Find a record by ID
user = User.find(1)

# Find a record by attribute
user = User.find_by(email: "user@example.com")

# Get all records
all_articles = Article.all

# Get first/last record
first_article = Article.first
last_article = Article.last

# Count records
article_count = Article.count
=end

# Query methods
=begin
# Where clause
recent_articles = Article.where(published: true).order(created_at: :desc)

# Multiple conditions
featured_articles = Article.where(published: true, featured: true)

# OR conditions
results = Article.where("title LIKE ? OR body LIKE ?", "%search%", "%search%")

# Ordering
ordered_articles = Article.order(created_at: :desc)

# Limit and offset
paginated = Article.limit(10).offset(0)  # First 10
paginated = Article.limit(10).offset(10) # Next 10
=end

# Loading associations
=begin
# Eager loading to avoid N+1 queries
articles = Article.includes(:user, :categories).where(published: true)

# Joining tables
popular_articles = Article.joins(:comments)
                         .select("articles.*, COUNT(comments.id) as comments_count")
                         .group("articles.id")
                         .order("comments_count DESC")
=end

# Scopes and class methods
=begin
# Using the scope defined in the model
recent_published = Article.published.recent

# Using the class method
search_results = Article.search("Ruby")
=end

# Callbacks
=begin
class Article < ApplicationRecord
  # Callbacks
  before_validation :normalize_title
  after_create :notify_subscribers
  before_destroy :check_deletable
  
  private
  
  def normalize_title
    self.title = title.strip.titleize if title.present?
  end
  
  def notify_subscribers
    # Logic to notify subscribers about new article
  end
  
  def check_deletable
    throw(:abort) if published? && created_at < 1.day.ago
  end
end
=end

# Validations
=begin
class User < ApplicationRecord
  # Presence validations
  validates :email, :username, presence: true
  
  # Uniqueness validation
  validates :email, uniqueness: { case_sensitive: false }
  
  # Format validation
  validates :email, format: { with: /\A[^@\s]+@[^@\s]+\z/ }
  
  # Length validation
  validates :username, length: { minimum: 3, maximum: 20 }
  
  # Custom validation
  validate :password_complexity
  
  private
  
  def password_complexity
    return if password.blank?
    
    unless password.match(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^\w\s]).{8,}$/)
      errors.add(:password, "must include uppercase, lowercase, number, and special character")
    end
  end
end
=end`,
              explanation: "This example focuses on Active Record, Rails' Object-Relational Mapping (ORM) system, which handles database interactions and associations between models. It demonstrates different types of associations (has_many, belongs_to, has_one, many-to-many through a join model), database migrations for creating tables and relationships, and various querying techniques. Advanced features like scopes, callbacks, validations, eager loading, and joining tables are also covered. These patterns are central to Rails development, enabling developers to express complex database relationships and queries in clean, readable Ruby code instead of writing SQL directly."
            }
          ],
          quiz: [
            {
              question: "In Ruby on Rails, what is the main purpose of the 'routes.rb' file?",
              options: [
                "To define database table schemas",
                "To map URLs to controller actions",
                "To configure database connection settings",
                "To define relationships between models"
              ],
              correctAnswer: 1,
              explanation: "The routes.rb file in Rails defines the application's URL structure, mapping incoming requests to controller actions. It determines which controller and action should handle a given URL pattern. This is a key part of Rails' RESTful design, allowing you to create resourceful routes with methods like 'resources :articles', which automatically sets up routes for CRUD operations (index, show, new, create, edit, update, destroy)."
            }
          ],
          flashcards: [
            {
              front: "What is the MVC pattern in Rails?",
              back: "MVC (Model-View-Controller) is an architectural pattern that Rails follows. Models handle data and business logic, connecting to database tables and defining relationships, validations, and behavior. Views are templates that display data to users, usually written in ERB, HAML, or other template languages. Controllers handle incoming requests, interact with models to fetch or modify data, and render the appropriate views. This separation of concerns makes applications more maintainable and easier to understand."
            },
            {
              front: "What are the differences between has_many and belongs_to associations in Rails?",
              back: "has_many establishes a one-to-many relationship from the model it's defined in, indicating it can have multiple instances of another model (e.g., User has_many :articles). belongs_to establishes the other side of the relationship, indicating a model belongs to a single instance of another model (e.g., Article belongs_to :user). belongs_to models typically contain the foreign key column and are considered the 'child' in the relationship. Using these together creates a properly linked bidirectional association."
            }
          ]
        },
        {
          id: "ruby-performance",
          title: "Ruby Performance and Optimization",
          description: "Techniques for improving Ruby code performance",
          content: `
# Ruby Performance and Optimization

Understanding how to optimize Ruby code for better performance and resource efficiency.
          `,
          codeExamples: [
            {
              title: "Performance Analysis and Optimization Techniques",
              code: `# Benchmarking code
require 'benchmark'

# Comparing different ways to concatenate strings
Benchmark.bm(10) do |x|
  x.report("String +:") do
    result = ""
    1000.times { |i| result += i.to_s }
  end
  
  x.report("Array join:") do
    result = []
    1000.times { |i| result << i.to_s }
    result.join
  end
  
  x.report("String interp:") do
    result = ""
    1000.times { |i| result = "#{result}#{i}" }
  end
  
  x.report("StringIO:") do
    require 'stringio'
    sio = StringIO.new
    1000.times { |i| sio.write(i.to_s) }
    result = sio.string
  end
end

# Using benchmark-ips for iterations per second
=begin
require 'benchmark/ips'

Benchmark.ips do |x|
  x.report("String +:") { 
    result = ""
    100.times { |i| result += i.to_s }
  }
  
  x.report("Array join:") { 
    result = []
    100.times { |i| result << i.to_s }
    result.join
  }
  
  x.compare!  # Compare the results
end
=end

# Ruby profilers
=begin
# Using ruby-prof
require 'ruby-prof'

# Start profiling
RubyProf.start

# Code to profile
result = []
10000.times do |i|
  result << i ** 2
end

# Stop profiling
result = RubyProf.stop

# Print results to console (flat format)
printer = RubyProf::FlatPrinter.new(result)
printer.print(STDOUT)

# Or in a more detailed call graph format
# printer = RubyProf::GraphPrinter.new(result)
# printer.print(STDOUT)
=end

# Memory usage analysis
=begin
require 'memory_profiler'

report = MemoryProfiler.report do
  # Code to analyze
  array = Array.new(1000) { Object.new }
end

report.pretty_print
=end

# Common performance optimizations

# 1. Use efficient data structures
def efficient_data_structures_example
  # Hash lookups are O(1) vs Array lookups which are O(n)
  puts "Hash vs Array lookups for 10,000 elements:"
  
  array = (1..10_000).to_a
  hash = Hash[array.map { |i| [i, true] }]
  
  Benchmark.bm(10) do |x|
    x.report("Array:") { array.include?(9999) }
    x.report("Hash:") { hash.key?(9999) }
  end
end

# 2. Avoid unnecessary object creation
def reduce_object_creation
  puts "Impact of unnecessary object creation:"
  
  Benchmark.bm(10) do |x|
    x.report("With new:") do
      100_000.times do |i|
        s = "Number: " + i.to_s  # Creates a new string each time
      end
    end
    
    x.report("Frozen:") do
      prefix = "Number: ".freeze
      100_000.times do |i|
        s = prefix + i.to_s  # Reuses the frozen string
      end
    end
  end
end

# 3. Use symbols instead of strings for hash keys
def symbols_vs_strings
  puts "Symbols vs Strings for hash keys:"
  
  Benchmark.bm(10) do |x|
    string_hash = {}
    symbol_hash = {}
    
    x.report("Strings:") do
      1_000_000.times do |i|
        string_hash["key"] = i
        val = string_hash["key"]
      end
    end
    
    x.report("Symbols:") do
      1_000_000.times do |i|
        symbol_hash[:key] = i
        val = symbol_hash[:key]
      end
    end
  end
end

# 4. Memoization to avoid redundant calculations
def fibonacci_slow(n)
  return n if n <= 1
  fibonacci_slow(n-1) + fibonacci_slow(n-2)
end

def fibonacci_memoized(n, cache = {})
  return n if n <= 1
  cache[n] ||= fibonacci_memoized(n-1, cache) + fibonacci_memoized(n-2, cache)
end

def memoization_example
  puts "Memoization for Fibonacci calculation:"
  
  n = 30
  
  Benchmark.bm(10) do |x|
    # Uncomment to see slow version but beware, it's SLOW
    # x.report("Slow:") { fibonacci_slow(n) }
    x.report("Memoized:") { fibonacci_memoized(n) }
  end
end

# 5. Avoid N+1 query problem (database specific)
=begin
# Bad (N+1 queries)
posts = Post.all
posts.each do |post|
  puts post.user.name  # Each access to post.user is a separate query
end

# Good (eager loading)
posts = Post.includes(:user)
posts.each do |post|
  puts post.user.name  # No additional queries
end
=end

# 6. Block vs Proc vs lambda performance
def block_proc_lambda_comparison
  puts "Block vs Proc vs lambda performance:"
  
  Benchmark.bm(10) do |x|
    x.report("Block:") do
      sum = 0
      1_000_000.times { |i| sum += i }
    end
    
    x.report("Proc:") do
      sum = 0
      proc = Proc.new { |i| sum += i }
      1_000_000.times { |i| proc.call(i) }
    end
    
    x.report("lambda:") do
      sum = 0
      lambda_func = ->(i) { sum += i }
      1_000_000.times { |i| lambda_func.call(i) }
    end
  end
end

# 7. Lazy enumeration for large collections
def lazy_enumeration_example
  puts "Eager vs Lazy enumeration:"
  
  Benchmark.bm(10) do |x|
    x.report("Eager:") do
      (1..10_000_000).map { |i| i * i }.first(10)
    end
    
    x.report("Lazy:") do
      (1..10_000_000).lazy.map { |i| i * i }.first(10)
    end
  end
end

# 8. String interpolation vs concatenation
def string_operations_comparison
  puts "String interpolation vs concatenation:"
  
  name = "Ruby"
  
  Benchmark.bm(15) do |x|
    x.report("Concatenation:") do
      1_000_000.times { s = "Hello, " + name + "!" }
    end
    
    x.report("Interpolation:") do
      1_000_000.times { s = "Hello, #{name}!" }
    end
  end
end

# 9. Use appropriate iterators
def iterator_comparison
  puts "Different iterators performance:"
  
  array = (1..100_000).to_a
  
  Benchmark.bm(15) do |x|
    x.report("for loop:") do
      sum = 0
      for i in array
        sum += i
      end
    end
    
    x.report("each:") do
      sum = 0
      array.each { |i| sum += i }
    end
    
    x.report("each_with_index:") do
      sum = 0
      array.each_with_index { |num, idx| sum += num }
    end
    
    x.report("while loop:") do
      sum = 0
      i = 0
      while i < array.size
        sum += array[i]
        i += 1
      end
    end
  end
end

# 10. Regular expressions optimization
def regex_optimization
  puts "Optimizing regular expressions:"
  
  text = "The quick brown fox jumps over the lazy dog." * 1000
  
  Benchmark.bm(15) do |x|
    x.report("Simple regex:") do
      text =~ /fox/
    end
    
    x.report("Complex regex:") do
      text =~ /f[a-z]x/
    end
    
    x.report("Anchored regex:") do
      text =~ /^The/  # Anchored to start
    end
    
    x.report("Precompiled:") do
      regex = /fox/
      text =~ regex
    end
  end
end

# Run examples
symbols_vs_strings
reduce_object_creation
string_operations_comparison
iterator_comparison`,
              explanation: "This example covers performance analysis and optimization techniques for Ruby code. It demonstrates how to benchmark and profile code using various tools like Benchmark, benchmark-ips, ruby-prof, and memory_profiler. It then explores common optimization strategies, including choosing efficient data structures (hashes over arrays for lookups), reducing object creation with frozen strings, using symbols instead of strings for hash keys, implementing memoization to avoid redundant calculations, solving the N+1 query problem in database operations, comparing block/proc/lambda performance, utilizing lazy enumeration for large collections, optimizing string operations, choosing appropriate iterators, and improving regular expression efficiency. These techniques help make Ruby code faster and more memory-efficient."
            },
            {
              title: "Advanced Optimization Techniques",
              code: `# Using native extensions with C

# Example of a C extension (factorial.c)
=begin
#include <ruby.h>

static VALUE rb_factorial(VALUE self, VALUE n_value) {
    long n = NUM2LONG(n_value);
    
    if (n < 0) {
        rb_raise(rb_eArgError, "Factorial of negative number is undefined");
    }
    
    long result = 1;
    for (long i = 2; i <= n; i++) {
        result *= i;
    }
    
    return LONG2NUM(result);
}

void Init_factorial() {
    VALUE MathUtil = rb_define_module("MathUtil");
    rb_define_singleton_method(MathUtil, "factorial", rb_factorial, 1);
}
=end

# Using it from Ruby
=begin
require 'factorial'

# Much faster than Ruby implementation
puts MathUtil.factorial(20)
=end

# Parallelization with threads
require 'thread'

def parallel_processing
  puts "Sequential vs Parallel processing:"
  
  numbers = (1..100).to_a
  
  Benchmark.bm(15) do |x|
    x.report("Sequential:") do
      results = numbers.map { |n| n ** 2 }
    end
    
    x.report("Parallel (4):") do
      # Split work into chunks
      chunks = numbers.each_slice((numbers.size/4.0).ceil).to_a
      
      # Process each chunk in a separate thread
      threads = chunks.map do |chunk|
        Thread.new do
          chunk.map { |n| n ** 2 }
        end
      end
      
      # Collect results
      results = threads.flat_map(&:value)
    end
  end
end

# Using parallel gem for easier parallelization
=begin
require 'parallel'

def parallel_gem_example
  puts "Using parallel gem:"
  
  numbers = (1..100).to_a
  
  Benchmark.bm(15) do |x|
    x.report("Sequential:") do
      results = numbers.map { |n| n ** 2 }
    end
    
    x.report("Parallel (CPU):") do
      results = Parallel.map(numbers, in: :processes) { |n| n ** 2 }
    end
    
    x.report("Parallel (2x):") do
      results = Parallel.map(numbers, in: 2) { |n| n ** 2 }
    end
  end
end
=end

# Using Fibers for cooperative concurrency
def fibonacci_generator(max)
  Fiber.new do
    a, b = 0, 1
    while a < max
      Fiber.yield a
      a, b = b, a + b
    end
  end
end

def fibers_example
  fib = fibonacci_generator(100)
  
  puts "First 10 Fibonacci numbers using Fibers:"
  10.times do
    puts fib.resume
  end
end

# Caching for expensive operations
require 'digest'

class ComputationCache
  def initialize
    @cache = {}
  end
  
  def compute(input)
    @cache[input] ||= begin
      puts "Computing for #{input}..."
      # Simulate expensive computation
      sleep(0.1)
      Digest::SHA256.hexdigest(input.to_s)
    end
  end
end

def caching_example
  cache = ComputationCache.new
  
  puts "First call (not cached):"
  time_first = Benchmark.realtime { result1 = cache.compute("test_input") }
  puts "Time: #{time_first}"
  
  puts "\nSecond call (cached):"
  time_second = Benchmark.realtime { result2 = cache.compute("test_input") }
  puts "Time: #{time_second}"
  
  puts "\nSpeed improvement: #{(time_first / time_second).round(2)}x"
end

# Method caching with memoization
class ExpensiveCalculator
  def initialize
    @memo = {}
  end
  
  def factorial(n)
    @memo[n] ||= begin
      puts "Calculating factorial(#{n})..."
      return 1 if n <= 1
      n * factorial(n-1)
    end
  end
  
  # Alternative using Ruby 2.7+ pattern matching and numbered parameters
  def factorial_with_pattern(n)
    @memo[n] ||= begin
      puts "Calculating factorial(#{n})..."
      case n
      in 0 | 1 then 1
      else n * factorial_with_pattern(n-1)
      end
    end
  end
end

def method_caching_example
  calc = ExpensiveCalculator.new
  
  puts "First call sequence:"
  calc.factorial(5)
  
  puts "\nSecond call (should use cached values):"
  calc.factorial(5)
  
  puts "\nPartial cached call:"
  calc.factorial(7)  # Should only calculate for 6 and 7
end

# Using faster data serialization formats
=begin
require 'json'
require 'msgpack'
require 'oj'  # Optimized JSON

def serialization_comparison
  data = { 
    users: 1000.times.map { |i|
      {
        id: i,
        name: "User #{i}",
        email: "user#{i}@example.com",
        roles: ["user", i % 10 == 0 ? "admin" : "member"]
      }
    }
  }
  
  Benchmark.bm(15) do |x|
    # Standard JSON
    x.report("JSON:") do
      json = JSON.generate(data)
      parsed = JSON.parse(json)
    end
    
    # Oj (optimized JSON)
    x.report("Oj:") do
      json = Oj.dump(data)
      parsed = Oj.load(json)
    end
    
    # MessagePack
    x.report("MessagePack:") do
      packed = MessagePack.pack(data)
      unpacked = MessagePack.unpack(packed)
    end
  end
end
=end

# Memory optimization techniques
class MemoryOptimization
  def String_vs_Symbol
    puts "Memory usage: String vs Symbol"
    
    # Create 10,000 duplicate strings
    strings = 10_000.times.map { "this_is_a_string" }
    
    # Create 10,000 duplicate symbols
    symbols = 10_000.times.map { :this_is_a_symbol }
    
    # In reality, only one symbol is stored regardless of how many times it's used
    puts "Unique object IDs in strings: #{strings.map(&:object_id).uniq.count}"
    puts "Unique object IDs in symbols: #{symbols.map(&:object_id).uniq.count}"
  end
  
  def frozen_string_literals
    puts "\nImpact of frozen string literals:"
    
    # Regular strings
    a = "string"
    b = "string"
    puts "Same object? #{a.object_id == b.object_id}"  # false
    
    # Frozen string literals
    c = "frozen_string".freeze
    d = "frozen_string".freeze
    puts "Same object after freeze? #{c.object_id == d.object_id}"  # may be true with string deduplication
    
    # With magic comment '# frozen_string_literal: true', all strings would be frozen by default
  end
  
  def using_flyweight_pattern
    puts "\nFlyweight pattern for memory optimization:"
    
    class FlyweightFactory
      def initialize
        @flyweights = {}
      end
      
      def get_flyweight(key)
        @flyweights[key] ||= Flyweight.new(key)
      end
      
      def flyweight_count
        @flyweights.size
      end
    end
    
    class Flyweight
      def initialize(shared_state)
        @shared_state = shared_state
      end
      
      def operation(unique_state)
        # Use shared_state and unique_state to perform operation
        "#{@shared_state}-#{unique_state}"
      end
    end
    
    # Using the flyweight pattern
    factory = FlyweightFactory.new
    
    # Create 1000 operations with only 5 different shared states
    1000.times do |i|
      shared = "shared#{i % 5}"
      flyweight = factory.get_flyweight(shared)
      result = flyweight.operation("unique#{i}")
    end
    
    puts "Total unique flyweights created: #{factory.flyweight_count}"  # Should be 5
  end
  
  def run
    String_vs_Symbol
    frozen_string_literals
    using_flyweight_pattern
  end
end

# Demonstrate memory optimization
memory_demo = MemoryOptimization.new
memory_demo.run

# Using JIT in Ruby 3.0+
=begin
# To run with JIT:
# ruby --jit program.rb

require 'benchmark'
def fibonacci(n)
  return n if n <= 1
  fibonacci(n-1) + fibonacci(n-2)
end

puts "With or without JIT comparison:"
puts "Note: Ruby must be run with --jit flag to see difference"

Benchmark.bm(15) do |x|
  x.report("Fibonacci(30):") do
    fibonacci(30)
  end
end
=end`,
              explanation: "This example explores advanced Ruby optimization techniques beyond basic code improvements. It covers using C extensions for performance-critical code, parallelization with threads and the Parallel gem, cooperative concurrency with Fibers, various caching strategies (including method memoization), faster data serialization formats, and memory optimization techniques. The memory optimization section demonstrates important concepts like symbol vs string memory usage, frozen string literals for deduplication, and the Flyweight design pattern for sharing common objects. It also mentions Ruby 3's Just-In-Time (JIT) compilation feature. These advanced techniques are particularly valuable for Ruby applications handling large datasets, complex computations, or high traffic loads."
            }
          ],
          quiz: [
            {
              question: "Which of the following is generally the most memory-efficient way to concatenate many strings in Ruby?",
              options: [
                "Using the + operator (str = str + new_str)",
                "Using string interpolation (str = \"#{str}#{new_str}\")",
                "Using an array and join (arr << new_str; str = arr.join)",
                "Using StringIO (io.write(new_str); str = io.string)"
              ],
              correctAnswer: 2,
              explanation: "Using an array to collect string fragments and then joining them with join is generally the most memory-efficient approach for concatenating many strings. The + operator and interpolation create a new string object with each concatenation, leading to many intermediate objects. An array with join creates the strings once when collected and once when joined. StringIO is also efficient but slightly more complex and has overhead for simple cases. For a large number of concatenations, array.join significantly outperforms the alternatives."
            }
          ],
          flashcards: [
            {
              front: "What is the N+1 query problem in Ruby/Rails applications and how can it be solved?",
              back: "The N+1 query problem occurs when you fetch N records and then make an additional query for each record (resulting in N+1 database queries). For example, getting all posts and then querying for each post's author separately. This can be solved with eager loading: in Rails, use includes(), preload(), or eager_load() to fetch the associated records in a single query (e.g., Post.includes(:author) instead of Post.all followed by post.author for each post)."
            },
            {
              front: "What are the key differences between Proc, lambda, and blocks in Ruby, particularly regarding performance?",
              back: "In terms of performance: Blocks are the fastest because they're built into the language and have the least overhead. Procs add a slight overhead because they're objects that need to be created and called. Lambdas add slightly more overhead than Procs due to their argument checking. Other differences include: blocks are not objects while Procs and lambdas are; lambdas check argument counts while Procs don't; and return statements in Procs return from the enclosing method while in lambdas they only return from the lambda itself."
            }
          ]
        }
      ]
    }
  ]
};
