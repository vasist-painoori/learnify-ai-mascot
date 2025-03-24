
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

Ruby is a dynamic, object-oriented programming language designed for simplicity and productivity.
          `,
          codeExamples: [
            {
              title: "Hello World in Ruby",
              code: `# Simple Hello World program
puts "Hello, World!"

# Using a variable
greeting = "Hello, Ruby!"
puts greeting`,
              explanation: "This example shows how to print text to the console using the 'puts' method, which adds a newline character at the end. It also demonstrates assigning a string to a variable and then printing that variable."
            }
          ],
          quiz: [
            {
              question: "Who created the Ruby programming language?",
              options: ["Guido van Rossum", "Yukihiro Matsumoto", "James Gosling", "Bjarne Stroustrup"],
              correctAnswer: 1,
              explanation: "Ruby was created by Yukihiro Matsumoto (often referred to as 'Matz') in Japan. He designed it to be a language that emphasizes human needs rather than computer needs."
            }
          ],
          flashcards: [
            {
              front: "What is Ruby?",
              back: "Ruby is a dynamic, interpreted, object-oriented programming language that emphasizes simplicity and productivity. It has an elegant syntax that is natural to read and easy to write."
            },
            {
              front: "When was Ruby created?",
              back: "Ruby was created by Yukihiro Matsumoto in 1995. It was designed to be a language that emphasizes human understanding rather than computer understanding."
            },
            {
              front: "What is the Ruby philosophy?",
              back: "Ruby follows the principle of 'least surprise', meaning it tries to behave in a way that minimizes confusion for experienced users. It also follows the saying 'There's more than one way to do it', offering flexibility in programming approaches."
            }
          ]
        },
        {
          id: "ruby-variables",
          title: "Variables and Data Types",
          description: "Understanding variables and data types in Ruby",
          content: `
# Variables and Data Types in Ruby

Ruby is a dynamically typed language, which means variables don't have predefined types.
          `,
          codeExamples: [
            {
              title: "Variables and Basic Data Types",
              code: `# Integer
age = 30
puts "Age: #{age}"

# Float
price = 19.99
puts "Price: #{price}"

# String
name = "Ruby"
puts "Name: #{name}"

# Boolean
is_active = true
puts "Active: #{is_active}"

# Nil (equivalent to null in other languages)
user = nil
puts "User: #{user.inspect}"

# Symbol (immutable, reusable identifiers)
status = :active
puts "Status: #{status}"

# Constants (start with uppercase letter)
PI = 3.14159
puts "PI: #{PI}"`,
              explanation: "This example demonstrates different data types in Ruby including integers, floats, strings, booleans, nil, symbols, and constants. Note how Ruby uses string interpolation with #{} to embed expressions within strings."
            }
          ],
          quiz: [
            {
              question: "In Ruby, how do you check the data type of a variable?",
              options: ["typeof variable", "variable.type", "variable.class", "gettype(variable)"],
              correctAnswer: 2,
              explanation: "In Ruby, you can check the data type of a variable by calling the .class method on it. For example, 'hello'.class would return String."
            }
          ],
          flashcards: [
            {
              front: "What is a Symbol in Ruby?",
              back: "A Symbol in Ruby is an immutable object that represents a name or string. Symbols are often used as keys in hashes and for method names. They are prefixed with a colon, like :name."
            },
            {
              front: "How are variables named in Ruby?",
              back: "Ruby variable names are case-sensitive and typically use snake_case (lowercase with underscores). Local variables start with a lowercase letter, instance variables start with @, class variables start with @@, and constants start with an uppercase letter."
            }
          ]
        },
        {
          id: "ruby-strings",
          title: "Strings and String Manipulation",
          description: "Working with strings in Ruby",
          content: `
# Strings in Ruby

Strings in Ruby are objects of the String class and offer many built-in methods for manipulation.
          `,
          codeExamples: [
            {
              title: "String Creation and Manipulation",
              code: `# Creating strings
str1 = "Hello"
str2 = 'World'
puts str1 + " " + str2  # Concatenation

# String interpolation (only works with double quotes)
name = "Ruby"
puts "Hello, #{name}!"   # Output: Hello, Ruby!
puts 'Hello, #{name}!'   # Output: Hello, #{name}!

# Multiline strings
multiline = "This is a
multiline string
in Ruby"
puts multiline

# Here documents
long_text = <<-HEREDOC
  This is another way to create
  a multiline string in Ruby.
  It's called a "here document".
HEREDOC
puts long_text

# String methods
text = "ruby programming"
puts text.length        # 16
puts text.upcase        # RUBY PROGRAMMING
puts text.capitalize    # Ruby programming
puts text.include?("ruby")  # true
puts text.gsub("ruby", "Ruby")  # Ruby programming
puts text.split(" ")    # ["ruby", "programming"]

# Accessing characters
puts text[0]            # r
puts text[0..3]         # ruby
puts text[-11..-1]      # programming`,
              explanation: "This example demonstrates creating strings using single and double quotes, string interpolation, multiline strings, here documents, and various string methods such as length, upcase, capitalize, include?, gsub, and split. It also shows how to access characters and substrings using index notation."
            }
          ],
          quiz: [
            {
              question: "What is the output of this Ruby code?\n\"Hello\".gsub(\"H\", \"J\").downcase",
              options: ["Hello", "hello", "jello", "Jello"],
              correctAnswer: 2,
              explanation: "The gsub method replaces all occurrences of \"H\" with \"J\", resulting in \"Jello\". Then the downcase method converts it to lowercase, giving \"jello\"."
            }
          ],
          flashcards: [
            {
              front: "What is the difference between single-quoted and double-quoted strings in Ruby?",
              back: "Double-quoted strings (\"text\") allow for escape sequences and string interpolation using #{expression}, while single-quoted strings ('text') interpret most characters literally and don't allow interpolation."
            },
            {
              front: "What is a here document in Ruby?",
              back: "A here document (or heredoc) is a way to create multiline strings in Ruby using <<-IDENTIFIER and IDENTIFIER to mark the beginning and end. Heredocs preserve newlines and spacing, making them useful for templates or large text blocks."
            }
          ]
        },
        {
          id: "ruby-arrays",
          title: "Arrays",
          description: "Working with arrays in Ruby",
          content: `
# Arrays in Ruby

Arrays in Ruby are ordered collections that can hold objects of different types.
          `,
          codeExamples: [
            {
              title: "Creating and Using Arrays",
              code: `# Creating arrays
numbers = [1, 2, 3, 4, 5]
mixed = [1, "two", 3.0, :four, [5, 6]]
empty = []

# Accessing elements
puts numbers[0]      # 1 (first element)
puts numbers[-1]     # 5 (last element)
puts numbers[1..3]   # [2, 3, 4] (range of elements)

# Modifying arrays
numbers.push(6)          # Add to the end: [1, 2, 3, 4, 5, 6]
numbers << 7             # Also adds to the end: [1, 2, 3, 4, 5, 6, 7]
numbers.unshift(0)       # Add to the beginning: [0, 1, 2, 3, 4, 5, 6, 7]
numbers.insert(3, 2.5)   # Insert at specific position: [0, 1, 2, 2.5, 3, 4, 5, 6, 7]

popped = numbers.pop     # Remove from the end: 7
shifted = numbers.shift  # Remove from the beginning: 0
deleted = numbers.delete(2.5)  # Remove specific element: 2.5

puts "After modifications: #{numbers.inspect}"

# Array methods
puts numbers.length     # Get length
puts numbers.include?(5)  # Check if element exists
puts numbers.join(", ")   # Join elements into a string
puts numbers.reverse      # Reverse the array
numbers.sort!             # Sort the array in place
puts numbers.inspect

# Iterating through arrays
numbers.each do |num|
  puts "Number: #{num}"
end

# Map (create a new array by transforming elements)
doubled = numbers.map { |num| num * 2 }
puts "Doubled: #{doubled.inspect}"

# Select (filter elements)
even = numbers.select { |num| num.even? }
puts "Even numbers: #{even.inspect}"`,
              explanation: "This example demonstrates creating arrays, accessing elements, modifying arrays with methods like push, pop, shift, unshift, and delete, and using common array methods like length, include?, join, reverse, and sort. It also shows how to iterate through arrays using each, and transform arrays using map and select."
            }
          ],
          quiz: [
            {
              question: "What is the output of this Ruby code?\n[1, 2, 3, 4, 5].select { |n| n > 2 }.map { |n| n * 2 }",
              options: ["[2, 4, 6, 8, 10]", "[6, 8, 10]", "[3, 4, 5]", "[1, 2, 3, 4, 5]"],
              correctAnswer: 1,
              explanation: "The code first selects all elements greater than 2, resulting in [3, 4, 5]. Then it applies the map operation to multiply each element by 2, resulting in [6, 8, 10]."
            }
          ],
          flashcards: [
            {
              front: "What methods are used to add elements to the beginning and end of an array in Ruby?",
              back: "To add to the end of an array, use push or the shovel operator (<<). To add to the beginning of an array, use unshift."
            },
            {
              front: "What is the difference between map and each in Ruby arrays?",
              back: "The each method iterates through each element and executes a block of code, returning the original array. The map method transforms each element according to a block and returns a new array with the transformed values."
            }
          ]
        },
        {
          id: "ruby-hashes",
          title: "Hashes",
          description: "Working with key-value pairs in Ruby",
          content: `
# Hashes in Ruby

Hashes are collections of key-value pairs, similar to dictionaries in other languages.
          `,
          codeExamples: [
            {
              title: "Creating and Using Hashes",
              code: `# Creating hashes
person = { "name" => "John", "age" => 30, "city" => "New York" }
puts person["name"]   # John

# Symbol keys (more common in modern Ruby)
user = { name: "Alice", age: 25, city: "Boston" }
puts user[:name]      # Alice

# Alternative syntax
book = { :title => "Ruby Programming", :author => "Matz", :year => 1995 }
puts book[:title]     # Ruby Programming

# Nested hashes
contact = {
  name: "Bob",
  details: {
    email: "bob@example.com",
    phone: "555-1234"
  }
}
puts contact[:details][:email]  # bob@example.com

# Adding and modifying values
person["occupation"] = "Developer"  # Add new key-value pair
person["age"] = 31                  # Modify existing value

# Removing values
removed = person.delete("city")
puts "Removed: #{removed}"

# Hash methods
puts person.keys.inspect      # Get all keys
puts person.values.inspect    # Get all values
puts person.length            # Number of key-value pairs
puts person.has_key?("name")  # Check if key exists
puts person.has_value?(31)    # Check if value exists
puts person.empty?            # Check if hash is empty

# Default values
grades = Hash.new(0)  # Default value is 0
grades["Alice"] = 95
puts grades["Alice"]  # 95
puts grades["Bob"]    # 0 (default value, "Bob" key does not exist)

# Iterating through hashes
user.each do |key, value|
  puts "#{key}: #{value}"
end

# Transforming hashes
uppercase_names = person.transform_keys(&:upcase)
puts uppercase_names.inspect`,
              explanation: "This example demonstrates creating hashes with different syntaxes (hash rocket => and symbol keys), accessing values, adding, modifying and removing key-value pairs, and using common hash methods. It also shows how to set default values for non-existent keys, iterate through hashes, and transform hash keys."
            }
          ],
          quiz: [
            {
              question: "Which of the following is the correct way to create a hash with symbol keys in Ruby?",
              options: [
                "{ name => \"John\", age => 30 }",
                "{ \"name\": \"John\", \"age\": 30 }",
                "{ :name => \"John\", :age => 30 }",
                "{ name: \"John\", age: 30 }"
              ],
              correctAnswer: 3,
              explanation: "The modern Ruby syntax for creating a hash with symbol keys is { name: \"John\", age: 30 }, which is shorthand for { :name => \"John\", :age => 30 }."
            }
          ],
          flashcards: [
            {
              front: "What is the difference between arrays and hashes in Ruby?",
              back: "Arrays are ordered collections indexed by integers, starting from 0. Hashes are collections of key-value pairs, where keys can be any object (commonly symbols or strings), and values are accessed by their associated key rather than a numeric index."
            },
            {
              front: "How do you set a default value for a hash in Ruby?",
              back: "You can set a default value for a hash by using Hash.new(default_value) when creating the hash. When a non-existent key is accessed, the default value is returned instead of nil."
            }
          ]
        },
        {
          id: "ruby-control-flow",
          title: "Control Flow",
          description: "Understanding control flow in Ruby",
          content: `
# Control Flow in Ruby

Control flow statements allow you to control the execution of your code based on conditions and iterations.
          `,
          codeExamples: [
            {
              title: "Conditional Statements",
              code: `# If-else statement
age = 18

if age >= 18
  puts "You are an adult"
else
  puts "You are a minor"
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

puts "Grade: #{grade}"

# Unless statement (opposite of if)
is_raining = false

unless is_raining
  puts "You don't need an umbrella"
else
  puts "Take an umbrella"
end

# Ternary operator
age = 20
status = age >= 18 ? "adult" : "minor"
puts status

# Case statement (switch)
day = "Wednesday"

case day
when "Monday"
  puts "Start of the work week"
when "Wednesday"
  puts "Middle of the week"
when "Friday"
  puts "End of the work week"
when "Saturday", "Sunday"
  puts "Weekend!"
else
  puts "Regular day"
end

# Case with ranges
age = 25

case age
when 0..12
  puts "Child"
when 13..19
  puts "Teenager"
when 20..65
  puts "Adult"
else
  puts "Senior"
end`,
              explanation: "This example shows various conditional statements in Ruby, including if-else, if-elsif-else, unless (which is the opposite of if), the ternary operator for simple conditionals, and case statements (Ruby's version of switch). The case statement can match not just exact values, but also ranges and other patterns."
            },
            {
              title: "Loops and Iterations",
              code: `# While loop
counter = 0
while counter < 5
  puts "While loop: #{counter}"
  counter += 1
end

# Until loop (opposite of while)
counter = 0
until counter >= 5
  puts "Until loop: #{counter}"
  counter += 1
end

# For loop (less common in Ruby)
for i in 0..4
  puts "For loop: #{i}"
end

# Each method with block
(0..4).each do |i|
  puts "Each loop: #{i}"
end

# Each with single-line block
(0..4).each { |i| puts "Each one-line: #{i}" }

# Times method
5.times do |i|
  puts "Times loop: #{i}"
end

# Upto and downto methods
1.upto(3) { |i| puts "Upto: #{i}" }
3.downto(1) { |i| puts "Downto: #{i}" }

# Loop method with break
i = 0
loop do
  puts "Infinite loop: #{i}"
  i += 1
  break if i >= 3
end

# Next and redo
for i in 0..5
  next if i % 2 == 0  # Skip even numbers
  puts "Odd number: #{i}"
end`,
              explanation: "This example demonstrates different ways to create loops in Ruby, including while loops, until loops, for loops with ranges, and various iterator methods like each, times, upto, and downto. It also shows the loop method for creating infinite loops with manual breaks, and the next keyword for skipping iterations."
            }
          ],
          quiz: [
            {
              question: "What will be the output of this Ruby code?\n\ni = 0\nwhile i < 3 do\n  puts i\n  i += 1\nend",
              options: ["0 1 2 3", "0 1 2", "1 2 3", "Error"],
              correctAnswer: 1,
              explanation: "The while loop will run as long as i < 3. It will output 0, then 1, then 2, and then i becomes 3, the condition becomes false, and the loop exits without printing 3."
            }
          ],
          flashcards: [
            {
              front: "What is the difference between 'while' and 'until' loops in Ruby?",
              back: "A 'while' loop executes as long as the condition is true. An 'until' loop executes as long as the condition is false. 'until x > 5' is functionally equivalent to 'while x <= 5'."
            },
            {
              front: "What is the most 'Ruby-like' way to iterate through a collection?",
              back: "The most idiomatic way to iterate in Ruby is to use the 'each' method with a block, rather than traditional for/while loops. For example: collection.each { |item| puts item }."
            }
          ]
        },
        {
          id: "ruby-methods",
          title: "Methods",
          description: "Defining and using methods in Ruby",
          content: `
# Methods in Ruby

Methods are reusable blocks of code that perform specific tasks in Ruby.
          `,
          codeExamples: [
            {
              title: "Defining and Calling Methods",
              code: `# Basic method definition
def greet
  puts "Hello, world!"
end

# Call the method
greet

# Method with parameters
def say_hello(name)
  puts "Hello, #{name}!"
end

say_hello("Ruby")

# Method with default parameter
def greet_person(name = "Guest")
  puts "Welcome, #{name}!"
end

greet_person         # Uses default parameter
greet_person("John") # Uses provided parameter

# Method with multiple parameters
def add(a, b)
  return a + b
end

sum = add(3, 5)
puts "Sum: #{sum}"

# Explicit return is optional, Ruby returns the last evaluated expression
def multiply(a, b)
  a * b  # Implicit return
end

product = multiply(4, 6)
puts "Product: #{product}"

# Method with variable number of arguments
def calculate_average(*numbers)
  total = numbers.sum
  average = total / numbers.length.to_f
  return average
end

avg = calculate_average(2, 4, 6, 8)
puts "Average: #{avg}"

# Named parameters (keyword arguments)
def create_user(name:, email:, age: nil)
  puts "Creating user:"
  puts "  Name: #{name}"
  puts "  Email: #{email}"
  puts "  Age: #{age || 'Not provided'}"
end

create_user(name: "Alice", email: "alice@example.com")
create_user(name: "Bob", email: "bob@example.com", age: 30)

# Predicates (methods that return true/false, conventionally end with ?)
def even?(number)
  number % 2 == 0
end

puts "Is 4 even? #{even?(4)}"
puts "Is 7 even? #{even?(7)}"

# Bang methods (methods that modify the caller, conventionally end with !)
def capitalize_name(name)
  name.capitalize  # Returns a new capitalized string, original unchanged
end

def capitalize_name!(name)
  name.capitalize! # Modifies the original string in place
  return name
end

name1 = "john"
name2 = capitalize_name(name1)
puts "Original: #{name1}, New: #{name2}"

name3 = "jane"
capitalize_name!(name3)
puts "Modified in place: #{name3}"`,
              explanation: "This example demonstrates defining methods in Ruby with and without parameters, using default parameters, returning values (both explicitly and implicitly), accepting variable numbers of arguments with the splat operator (*), using named parameters (keyword arguments), and the conventions for predicate methods (ending with ?) and bang methods (ending with !) that modify their receiver."
            }
          ],
          quiz: [
            {
              question: "What is the output of this Ruby code?\n\ndef greet(message, name = \"World\")\n  \"#{message}, #{name}!\"\nend\n\nputs greet(\"Hello\")",
              options: ["Hello", "Hello, World!", "Hello, !", "Error"],
              correctAnswer: 1,
              explanation: "The method call greet(\"Hello\") uses the default value \"World\" for the name parameter, so the output is \"Hello, World!\"."
            }
          ],
          flashcards: [
            {
              front: "What is the difference between a method with a bang (!) and without in Ruby?",
              back: "In Ruby, methods ending with a bang (!) typically modify the object they're called on (destructive), while their non-bang counterparts return a new object with the modifications, leaving the original unchanged. For example, str.upcase! modifies str, while str.upcase returns a new uppercase string."
            },
            {
              front: "What is the splat operator (*) used for in Ruby method parameters?",
              back: "The splat operator (*) in method parameters allows a method to accept a variable number of arguments, which are collected into an array. For example, def method(*args) lets you call method(1, 2, 3), and inside the method, args will be [1, 2, 3]."
            }
          ]
        },
        {
          id: "ruby-classes",
          title: "Classes and Objects",
          description: "Object-oriented programming in Ruby",
          content: `
# Classes and Objects in Ruby

Ruby is a pure object-oriented language where everything is an object, and classes are used to define the behavior of objects.
          `,
          codeExamples: [
            {
              title: "Defining and Using Classes",
              code: `# Define a simple class
class Person
  # Constructor method
  def initialize(name, age)
    @name = name  # Instance variable
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

# Create objects (instances of the class)
person1 = Person.new("Alice", 30)
person2 = Person.new("Bob", 25)

# Call instance methods
puts person1.introduce
puts person2.introduce

# Access and modify attributes
puts "Name: #{person1.name}"
person1.name = "Alicia"
puts "New name: #{person1.name}"

# Using attr_accessor (shorthand for getters and setters)
class Student
  # Creates getter and setter methods automatically
  attr_accessor :name, :grade
  
  # Creates getter methods only
  attr_reader :id
  
  # Creates setter methods only
  attr_writer :password
  
  def initialize(name, grade, id)
    @name = name
    @grade = grade
    @id = id
    @password = nil
  end
  
  def to_s
    "Student #{@name}, Grade #{@grade}, ID: #{@id}"
  end
end

student = Student.new("Charlie", "A", 12345)
puts student.to_s

# Can use getters and setters
puts student.name
student.grade = "A+"
puts student.grade

# Can read id but not write it
puts student.id
# student.id = 54321  # This would raise an error

# Class methods and variables
class MathHelper
  # Class variable (shared by all instances)
  @@pi = 3.14159
  
  # Class method (called on the class, not instances)
  def self.circle_area(radius)
    @@pi * radius * radius
  end
  
  # Instance method
  def square_area(side)
    side * side
  end
end

# Call class method directly on the class
area = MathHelper.circle_area(5)
puts "Circle area: #{area}"

# Instance methods require an instance
helper = MathHelper.new
square_area = helper.square_area(4)
puts "Square area: #{square_area}"`,
              explanation: "This example demonstrates defining classes in Ruby with instance variables, instance methods, getter and setter methods, and using attr_accessor, attr_reader, and attr_writer as shortcuts for creating accessors. It also shows class methods defined with self. and class variables with @@, which are shared across all instances of the class."
            }
          ],
          quiz: [
            {
              question: "What does attr_accessor :name do in a Ruby class?",
              options: [
                "Creates a class variable called name",
                "Creates a constant called name",
                "Creates both getter (name) and setter (name=) methods for the @name instance variable",
                "Creates a class method called name"
              ],
              correctAnswer: 2,
              explanation: "attr_accessor :name automatically creates both a getter method (name) and a setter method (name=) for the @name instance variable, which allows you to read and write the instance variable from outside the class."
            }
          ],
          flashcards: [
            {
              front: "What is the difference between a class method and an instance method in Ruby?",
              back: "An instance method is called on an instance of a class and has access to the instance's state (instance variables). A class method is called directly on the class itself, defined with self. prefix, and doesn't have access to instance variables unless an instance is passed in."
            },
            {
              front: "What is the purpose of the initialize method in a Ruby class?",
              back: "The initialize method is a special method in Ruby classes that acts as a constructor. It's automatically called when a new object is created with Class.new. It's used to set up the initial state of the object by initializing instance variables."
            }
          ]
        },
        {
          id: "ruby-inheritance",
          title: "Inheritance and Modules",
          description: "Understanding inheritance and modules in Ruby",
          content: `
# Inheritance and Modules in Ruby

Ruby supports single inheritance through classes and multiple inheritance of behavior through modules.
          `,
          codeExamples: [
            {
              title: "Class Inheritance",
              code: `# Base class
class Animal
  attr_reader :name, :age
  
  def initialize(name, age)
    @name = name
    @age = age
  end
  
  def speak
    "Some generic animal sound"
  end
  
  def description
    "#{@name} is #{@age} years old"
  end
end

# Derived class
class Dog < Animal
  attr_reader :breed
  
  def initialize(name, age, breed)
    super(name, age)  # Call the parent's initialize method
    @breed = breed
  end
  
  # Override speak method
  def speak
    "Woof!"
  end
  
  # Add new method
  def fetch
    "#{@name} is fetching the ball!"
  end
  
  # Extend description method
  def description
    "#{super} and is a #{@breed}"
  end
end

# Create instances
animal = Animal.new("Generic Animal", 5)
dog = Dog.new("Rex", 3, "German Shepherd")

puts animal.speak           # Some generic animal sound
puts dog.speak              # Woof!
puts dog.fetch              # Rex is fetching the ball!
puts dog.description        # Rex is 3 years old and is a German Shepherd

# Modules for mixins
module Swimmable
  def swim
    "#{self.class} is swimming"
  end
  
  def dive
    "#{self.class} is diving underwater"
  end
end

module Climbable
  def climb
    "#{self.class} is climbing"
  end
end

# Class with module inclusion
class Fish < Animal
  include Swimmable
  
  def speak
    "Blub blub"
  end
end

class Monkey < Animal
  include Swimmable
  include Climbable
  
  def speak
    "Ooh ooh aah aah"
  end
end

fish = Fish.new("Nemo", 1)
monkey = Monkey.new("George", 8)

puts fish.speak      # Blub blub
puts fish.swim       # Fish is swimming
puts monkey.speak    # Ooh ooh aah aah
puts monkey.swim     # Monkey is swimming
puts monkey.climb    # Monkey is climbing

# Check ancestry
puts "Dog ancestors: #{Dog.ancestors}"
puts "Fish ancestors: #{Fish.ancestors}"

# Modules for namespacing
module Mathematics
  PI = 3.14159
  
  def self.square(x)
    x * x
  end
  
  class Calculator
    def add(a, b)
      a + b
    end
  end
end

puts Mathematics::PI
puts Mathematics.square(4)
calc = Mathematics::Calculator.new
puts calc.add(2, 3)

# Module methods
module StringUtils
  def self.reverse(str)
    str.reverse
  end
  
  def self.capitalize_words(str)
    str.split.map(&:capitalize).join(' ')
  end
end

puts StringUtils.reverse("hello")                # olleh
puts StringUtils.capitalize_words("hello world") # Hello World`,
              explanation: "This example demonstrates class inheritance in Ruby, where a derived class (Dog) inherits from a base class (Animal), and can override methods, add new methods, and use super to call the parent's method. It also shows modules being used as mixins to provide shared behavior across different classes, giving Ruby a form of multiple inheritance. Finally, it shows modules being used for namespacing to organize code and prevent name collisions."
            }
          ],
          quiz: [
            {
              question: "In Ruby, what keyword is used to include a module's methods as instance methods in a class?",
              options: ["extend", "require", "include", "import"],
              correctAnswer: 2,
              explanation: "The 'include' keyword is used to include a module's methods as instance methods in a class. This is how Ruby enables mixin functionality, allowing classes to inherit behavior from multiple sources."
            }
          ],
          flashcards: [
            {
              front: "What is the difference between 'include' and 'extend' when using modules in Ruby?",
              back: "'include' adds a module's methods as instance methods to a class, so instances of the class can call these methods. 'extend' adds a module's methods as class methods, so they can be called directly on the class itself, without creating an instance."
            },
            {
              front: "What is a mixin in Ruby?",
              back: "A mixin is a module that's included in a class to add behavior. Mixins are Ruby's way of implementing multiple inheritance of behavior, since a class can only inherit from one parent class but can include many modules."
            }
          ]
        },
        {
          id: "ruby-exceptions",
          title: "Exception Handling",
          description: "Handling errors and exceptions in Ruby",
          content: `
# Exception Handling in Ruby

Ruby's exception handling provides a way to manage errors and ensure your program behaves gracefully when things go wrong.
          `,
          codeExamples: [
            {
              title: "Exception Basics",
              code: `# Basic exception handling
begin
  # Code that might raise an exception
  result = 10 / 0  # This will raise a ZeroDivisionError
  puts "This line won't be executed"
rescue
  puts "An error occurred!"
end

puts "Program continues..."

# Catching specific exceptions
begin
  # Try to open a non-existent file
  file = File.open("non_existent_file.txt")
  content = file.read
  file.close
rescue Errno::ENOENT
  puts "File does not exist"
rescue => e
  puts "Some other error occurred: #{e.message}"
end

# Multiple rescue clauses
begin
  # Ask the user for a number
  print "Enter a number: "
  num = Integer(gets.chomp)
  result = 100 / num
  puts "100 / #{num} = #{result}"
rescue ZeroDivisionError
  puts "You can't divide by zero!"
rescue ArgumentError
  puts "That's not a valid number"
end

# Else and ensure clauses
begin
  print "Enter another number: "
  num = Integer(gets.chomp)
  result = 100 / num
rescue ZeroDivisionError, ArgumentError => e
  puts "Error: #{e.message}"
else
  # Executes only if no exception was raised
  puts "Result: #{result}"
ensure
  # Always executes, whether there was an exception or not
  puts "This calculation attempt is complete"
end

# Creating custom exceptions
class NegativeNumberError < StandardError
  def initialize(msg="Cannot process negative numbers")
    super
  end
end

def square_root(number)
  if number < 0
    raise NegativeNumberError, "Cannot calculate square root of #{number}"
  end
  Math.sqrt(number)
end

begin
  result = square_root(-9)
rescue NegativeNumberError => e
  puts "Error: #{e.message}"
end

# Retry
attempts = 0
begin
  attempts += 1
  puts "Attempt #{attempts}"
  
  # Simulate a random failure
  if rand < 0.7
    raise "Random error occurred"
  end
  
  puts "Operation succeeded!"
rescue => e
  puts "Error: #{e.message}"
  if attempts < 3
    puts "Retrying..."
    retry  # Go back to the beginning of the begin block
  else
    puts "Giving up after #{attempts} attempts"
  end
end`,
              explanation: "This example demonstrates various aspects of exception handling in Ruby, including the basic begin-rescue-end structure, catching specific exception types, using rescue with variables to capture the exception object, the else clause for success cases, the ensure clause for cleanup code, creating custom exception classes, and using retry to attempt an operation multiple times after a failure."
            }
          ],
          quiz: [
            {
              question: "In Ruby, what block always executes regardless of whether an exception was raised or caught?",
              options: ["ensure", "else", "finally", "rescue"],
              correctAnswer: 0,
              explanation: "The 'ensure' block in Ruby (equivalent to 'finally' in some other languages) always executes regardless of whether an exception was raised or caught. It's typically used for cleanup operations like closing files or database connections."
            }
          ],
          flashcards: [
            {
              front: "What is the purpose of the 'rescue' block in Ruby?",
              back: "The 'rescue' block in Ruby's exception handling is used to catch exceptions raised in the corresponding 'begin' block. It allows you to handle specific types of errors and take appropriate actions, preventing the program from crashing."
            },
            {
              front: "What happens when you use the 'retry' keyword in a rescue block?",
              back: "When you use 'retry' in a rescue block, execution jumps back to the beginning of the associated 'begin' block, allowing you to attempt the operation again. This is useful for retrying operations that may fail temporarily (like network requests)."
            }
          ]
        },
        {
          id: "ruby-files",
          title: "File I/O",
          description: "Reading and writing files in Ruby",
          content: `
# File I/O in Ruby

Ruby provides a rich set of tools for working with files, making it easy to read from and write to external files.
          `,
          codeExamples: [
            {
              title: "Reading and Writing Files",
              code: `# Writing to a file
File.open("example.txt", "w") do |file|
  file.puts "Hello, Ruby!"
  file.puts "This is a test file."
  file.puts "Line three."
end

puts "File created!"

# Reading from a file
puts "\\nReading entire file at once:"
content = File.read("example.txt")
puts content

# Reading file line by line
puts "\\nReading file line by line:"
File.open("example.txt", "r") do |file|
  file.each_line do |line|
    puts "Line: #{line.chomp}"
  end
end

# Writing to a file (appending)
File.open("example.txt", "a") do |file|
  file.puts "This line was appended."
end

puts "\\nAfter appending:"
puts File.read("example.txt")

# Checking if a file exists
if File.exist?("example.txt")
  puts "\\nFile exists."
else
  puts "\\nFile does not exist."
end

# Getting file information
puts "\\nFile information:"
puts "Size: #{File.size("example.txt")} bytes"
puts "Directory: #{File.dirname(__FILE__)}"
puts "Last modified: #{File.mtime("example.txt")}"

# Reading and writing binary data
File.open("binary.dat", "wb") do |file|
  file.write([0xFF, 0x00, 0xAA, 0x55].pack("C*"))
end

binary_data = File.binread("binary.dat")
puts "\\nBinary data (bytes): #{binary_data.bytes}"

# Working with directories
puts "\\nCurrent directory: #{Dir.pwd}"
puts "Files in current directory: #{Dir.entries(".")}"

# Creating a directory
Dir.mkdir("test_dir") unless Dir.exist?("test_dir")
puts "Directory created."

# Removing files and directories
File.delete("binary.dat") if File.exist?("binary.dat")
Dir.rmdir("test_dir") if Dir.exist?("test_dir")
puts "Cleanup complete."

# Using file modes
# "r" - Read-only (default)
# "w" - Write-only (creates a new file or truncates existing file)
# "a" - Append (writes to end of file)
# "r+" - Read-write, starts at beginning
# "w+" - Read-write, truncates existing file
# "a+" - Read-write, starts at end
# "b" - Binary file mode (may be combined with above)

# File path operations
require 'pathname'

path = Pathname.new("example.txt")
puts "\\nPathname operations:"
puts "Base name: #{path.basename}"
puts "Extension: #{path.extname}"
puts "Directory: #{path.dirname}"
puts "Absolute path: #{path.realpath}"

# Cleanup
File.delete("example.txt") if File.exist?("example.txt")`,
              explanation: "This example demonstrates various file operations in Ruby, including opening files for reading, writing, and appending, reading entire files or line by line, checking if files exist, getting file information, working with binary data, creating and removing directories, understanding file modes, and using the Pathname class for path manipulations."
            }
          ],
          quiz: [
            {
              question: "What file mode should you use to append to a file in Ruby?",
              options: ["r", "w", "a", "r+"],
              correctAnswer: 2,
              explanation: "The 'a' file mode is used to open a file for appending, which means writing to the end of the file without overwriting existing content. If the file doesn't exist, it will be created."
            }
          ],
          flashcards: [
            {
              front: "What is the difference between File.read and File.readlines in Ruby?",
              back: "File.read reads the entire file content as a single string. File.readlines reads the file and returns an array of lines, preserving newline characters. File.read is better for small files, while File.readlines is useful when you need to process a file line by line."
            },
            {
              front: "How do you ensure a file is properly closed in Ruby?",
              back: "The best practice is to use a block with File.open: File.open('file.txt', 'r') do |file| ... end. Ruby automatically closes the file when the block exits, even if an exception occurs. Alternatively, you can manually call file.close after operations, preferably in an ensure block."
            }
          ]
        },
        {
          id: "ruby-gems",
          title: "Gems and Bundler",
          description: "Working with Ruby libraries and dependencies",
          content: `
# Gems and Bundler in Ruby

Gems are packaged Ruby libraries or applications, and Bundler is a tool for managing gem dependencies.
          `,
          codeExamples: [
            {
              title: "Working with Gems and Bundler",
              code: `# Installing a gem from the command line
# $ gem install nokogiri

# Using an installed gem
require 'date'

today = Date.today
puts "Today is #{today}"
puts "Tomorrow is #{today + 1}"

# Creating a Gemfile for bundler
=begin
# Example Gemfile
source 'https://rubygems.org'

gem 'nokogiri', '~> 1.12'
gem 'sinatra', require: 'sinatra/base'
gem 'rake', '~> 13.0'

group :development, :test do
  gem 'rspec', '~> 3.10'
  gem 'pry'
end

group :production do
  gem 'pg'
end
=end

# Installing gems from a Gemfile
# $ bundle install

# Using gems with bundler
=begin
# Example of using bundler in a script
#!/usr/bin/env ruby
require 'bundler/setup'  # Set up gems listed in the Gemfile
require 'nokogiri'
require 'open-uri'

# Use the nokogiri gem
document = Nokogiri::HTML(URI.open('https://example.com'))
puts document.title
=end

# Creating a simple gem directory structure
=begin
# my_gem/
# ├── bin/
# │   └── my_gem
# ├── lib/
# │   ├── my_gem.rb
# │   └── my_gem/
# │       └── version.rb
# ├── spec/
# │   └── my_gem_spec.rb
# ├── Gemfile
# ├── Rakefile
# ├── README.md
# ├── LICENSE.txt
# └── my_gem.gemspec
=end

# Example gemspec file
=begin
# my_gem.gemspec
require_relative 'lib/my_gem/version'

Gem::Specification.new do |spec|
  spec.name          = "my_gem"
  spec.version       = MyGem::VERSION
  spec.authors       = ["Your Name"]
  spec.email         = ["your.email@example.com"]
  spec.summary       = "Short summary of your gem"
  spec.description   = "Longer description of your gem"
  spec.homepage      = "https://github.com/yourusername/my_gem"
  spec.license       = "MIT"
  
  spec.files         = Dir['lib/**/*', 'README.md']
  spec.require_paths = ["lib"]
  
  spec.add_dependency "nokogiri", "~> 1.12"
  spec.add_development_dependency "rspec", "~> 3.10"
end
=end

# Example version file
=begin
# lib/my_gem/version.rb
module MyGem
  VERSION = "0.1.0"
end
=end

# Example main gem file
=begin
# lib/my_gem.rb
require "my_gem/version"

module MyGem
  class Error < StandardError; end
  
  # Your code goes here...
  def self.hello
    "Hello from MyGem!"
  end
end
=end

# Building and publishing a gem
=begin
# $ gem build my_gem.gemspec
# $ gem push my_gem-0.1.0.gem
=end

# Using your own gem
=begin
# $ gem install my_gem
=end

puts "This is an example of gems and bundler usage"`,
              explanation: "This example provides an overview of working with Ruby gems and Bundler. It shows how to install and use gems, create a Gemfile for dependency management, use Bundler to manage dependencies, and even create, build, and publish your own gems. The commented sections indicate terminal commands and file structures that can't be directly executed, but demonstrate the workflow."
            }
          ],
          quiz: [
            {
              question: "What is the purpose of a Gemfile in a Ruby project?",
              options: [
                "To document the code structure",
                "To specify dependencies (gems) that the project requires",
                "To configure the Ruby interpreter",
                "To create executable scripts"
              ],
              correctAnswer: 1,
              explanation: "A Gemfile is used to specify the dependencies (gems) that a Ruby project requires, along with their versions. Bundler uses this file to manage dependencies consistently across different development and production environments."
            }
          ],
          flashcards: [
            {
              front: "What is RubyGems?",
              back: "RubyGems is Ruby's package manager, which allows you to download, install, and use libraries (gems) created by the Ruby community. It provides commands like 'gem install', 'gem update', and 'gem list' for managing gems on your system."
            },
            {
              front: "What is Bundler and how does it differ from RubyGems?",
              back: "Bundler is a dependency manager for Ruby that works with RubyGems. While RubyGems handles individual gems, Bundler manages a project's entire dependency graph, ensuring that all gems work together without conflicts. It uses a Gemfile to specify dependencies and a Gemfile.lock to record exact versions for consistent installations."
            }
          ]
        },
        {
          id: "ruby-blocks",
          title: "Blocks, Procs, and Lambdas",
          description: "Working with closures in Ruby",
          content: `
# Blocks, Procs, and Lambdas in Ruby

Ruby provides several ways to work with closures (chunks of code that can be passed around and executed later).
          `,
          codeExamples: [
            {
              title: "Blocks, Procs, and Lambdas",
              code: `# Block with do...end
[1, 2, 3].each do |num|
  puts "Number: #{num}"
end

# Block with braces (for single-line blocks)
[1, 2, 3].each { |num| puts "Number: #{num}" }

# Methods that take blocks
def say_hello
  puts "Hello, before yield"
  yield if block_given?  # Execute the block if one was given
  puts "Hello, after yield"
end

say_hello do
  puts "This is the block being executed"
end

# Block parameters
def calculate(a, b)
  result = yield(a, b) if block_given?
  puts "The result is #{result}"
end

calculate(5, 3) { |x, y| x + y }     # Addition
calculate(5, 3) { |x, y| x * y }     # Multiplication

# Returning a value from a block
names = ["Alice", "Bob", "Charlie"]
upcase_names = names.map { |name| name.upcase }
puts "Uppercase names: #{upcase_names}"

# Creating a Proc object
greeter = Proc.new { |name| puts "Hello, #{name}!" }
greeter.call("World")  # Call the proc

# Alternative Proc creation
greeter = proc { |name| puts "Hello, #{name}!" }
greeter.call("Ruby")

# Procs don't check argument count
greeter.call  # No error, name will be nil
greeter.call("Alice", "Bob")  # Extra arguments are ignored

# Creating a Lambda
multiplier = lambda { |x, y| x * y }
puts multiplier.call(5, 3)  # 15

# Alternative Lambda syntax (stabby lambda)
adder = ->(x, y) { x + y }
puts adder.call(5, 3)  # 8

# Lambdas check argument count
begin
  adder.call(5)  # Error: wrong number of arguments
rescue ArgumentError => e
  puts "Error: #{e.message}"
end

# Returning from a Proc vs. Lambda
def proc_return
  my_proc = Proc.new { return "Returned from Proc" }
  my_proc.call
  return "Returned from method"  # This is not reached
end

def lambda_return
  my_lambda = lambda { return "Returned from Lambda" }
  my_lambda.call
  return "Returned from method"  # This is reached
end

puts proc_return    # "Returned from Proc"
puts lambda_return  # "Returned from method"

# Closures - capturing the surrounding context
def create_multiplier(factor)
  return Proc.new { |number| number * factor }
end

double = create_multiplier(2)
triple = create_multiplier(3)

puts double.call(5)  # 10
puts triple.call(5)  # 15

# Converting a block to a Proc with &
def with_logging
  puts "Starting method"
  yield if block_given?
  puts "Ending method"
end

# Storing the block as a Proc
def store_block(&block)
  @stored_block = block
end

def execute_stored_block
  @stored_block.call if @stored_block
end

store_block { puts "This is a stored block" }
execute_stored_block

# Passing a Proc as a block
multiply_by_2 = Proc.new { |num| num * 2 }
[1, 2, 3].map(&multiply_by_2)  # Same as [1, 2, 3].map { |num| num * 2 }

# Symbol to Proc shorthand
names = ["alice", "bob", "charlie"]
puts names.map(&:upcase)  # Same as names.map { |name| name.upcase }`,
              explanation: "This example demonstrates blocks (anonymous chunks of code), Procs (stored blocks), and Lambdas (more function-like Procs) in Ruby. It shows how to create and use them, how they capture their surrounding environment (closures), and the differences between them, like how they handle returns and argument checking. It also shows the &block parameter for converting blocks to Procs, and the &:symbol shorthand for creating Procs from methods."
            }
          ],
          quiz: [
            {
              question: "What is the main difference between a Proc and a Lambda in Ruby?",
              options: [
                "Lambdas can't be stored in variables, Procs can",
                "Procs can capture their environment, Lambdas can't",
                "Lambdas check the number of arguments, Procs don't",
                "Procs can be called multiple times, Lambdas only once"
              ],
              correctAnswer: 2,
              explanation: "The main difference is that Lambdas check the number of arguments and will raise an error if called with the wrong number, while Procs are more lenient (missing arguments become nil, extras are ignored). Additionally, 'return' in a Lambda returns from the Lambda itself, while 'return' in a Proc returns from the method where the Proc was defined."
            }
          ],
          flashcards: [
            {
              front: "What is a block in Ruby?",
              back: "A block in Ruby is an anonymous piece of code that can be passed to a method. It's enclosed in either do...end or curly braces {}, can take parameters between vertical bars |param|, and is invoked using the 'yield' keyword within the method."
            },
            {
              front: "What does the '&' symbol do when used with a block parameter?",
              back: "The '&' symbol before the last parameter in a method definition (def method(&block)) converts the block passed to the method into a Proc object, allowing it to be stored in a variable, passed to other methods, or called later with the .call method."
            }
          ]
        },
        {
          id: "ruby-symbols",
          title: "Symbols and Metaprogramming",
          description: "Understanding symbols and metaprogramming in Ruby",
          content: `
# Symbols and Metaprogramming in Ruby

Symbols are immutable, reusable identifiers, and metaprogramming allows you to write code that generates or manipulates code.
          `,
          codeExamples: [
            {
              title: "Symbols and Basic Metaprogramming",
              code: `# Symbols
string_name = "name"
symbol_name = :name

puts "String object ID: #{string_name.object_id}"
puts "Another string: #{"name".object_id}"  # Different object_id

puts "Symbol object ID: #{symbol_name.object_id}"
puts "Another symbol: #{:name.object_id}"   # Same object_id

# Symbols as hash keys (common use case)
person_string = { "name" => "John", "age" => 30 }
person_symbol = { name: "John", age: 30 }  # Shorthand for { :name => "John", :age => 30 }

puts "Using string keys: #{person_string["name"]}"
puts "Using symbol keys: #{person_symbol[:name]}"

# Converting between strings and symbols
puts "String to symbol: #{"hello".to_sym}"
puts "Symbol to string: #{:hello.to_s}"

# Basic metaprogramming

# The 'send' method to call methods dynamically
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
    a / b
  end
end

calc = Calculator.new
operations = [:add, :subtract, :multiply, :divide]

operations.each do |op|
  result = calc.send(op, 10, 2)
  puts "#{op}: 10 #{op} 2 = #{result}"
end

# The 'define_method' method to define methods dynamically
class DynamicGreeter
  GREETINGS = ["Hello", "Hi", "Hey", "Howdy"]
  
  GREETINGS.each do |greeting|
    define_method("say_#{greeting.downcase}") do |name|
      "#{greeting}, #{name}!"
    end
  end
end

greeter = DynamicGreeter.new
puts greeter.say_hello("Alice")
puts greeter.say_howdy("Bob")

# Method_missing for handling calls to undefined methods
class FlexibleHash
  def initialize
    @data = {}
  end
  
  def method_missing(name, *args)
    if name.to_s.end_with?("=")
      # Setter method
      key = name.to_s.chop.to_sym  # Remove the '=' and convert to symbol
      @data[key] = args.first
    else
      # Getter method
      @data[name]
    end
  end
  
  def respond_to_missing?(method_name, include_private = false)
    true
  end
  
  def inspect
    @data.inspect
  end
end

person = FlexibleHash.new
person.name = "Charlie"
person.age = 35
puts "Name: #{person.name}, Age: #{person.age}"
puts "Person hash: #{person.inspect}"

# Eval family of methods (be cautious with these!)
code = "puts 'This code is evaluated at runtime'"
eval(code)  # Executes the string as code

# instance_eval - change the context of self
class Example
  def initialize
    @private_var = "I'm private"
  end
  
  private
  
  def private_method
    "This is a private method"
  end
end

example = Example.new
example.instance_eval do
  puts @private_var  # Can access private instance variables
  puts private_method  # Can call private methods
end

# class_eval (or module_eval) - add methods to a class
String.class_eval do
  def palindrome?
    self == self.reverse
  end
end

puts "racecar".palindrome?  # true
puts "hello".palindrome?    # false`,
              explanation: "This example covers symbols in Ruby, which are immutable, reusable identifiers, often used as hash keys because they're more memory-efficient than strings for this purpose. It also demonstrates metaprogramming techniques, including using send to call methods dynamically, define_method to create methods at runtime, method_missing to handle calls to undefined methods, and the eval family of methods to execute strings as code or change the execution context."
            }
          ],
          quiz: [
            {
              question: "What happens when a method is called on an object in Ruby, but the method doesn't exist?",
              options: [
                "A NoMethodError is always raised",
                "Ruby looks for a method_missing method and calls it if defined",
                "Ruby creates the method dynamically",
                "The program crashes immediately"
              ],
              correctAnswer: 1,
              explanation: "When a method is called that doesn't exist, Ruby looks for a method_missing method on the object. If method_missing is defined, Ruby calls it with the method name and arguments. If method_missing isn't defined or doesn't handle the call, a NoMethodError is raised."
            }
          ],
          flashcards: [
            {
              front: "What is metaprogramming in Ruby?",
              back: "Metaprogramming is writing code that writes or manipulates code. In Ruby, it involves techniques like defining methods dynamically, intercepting calls to missing methods, extending classes at runtime, and evaluating code from strings. It allows for more flexible, concise, and powerful programming."
            },
            {
              front: "Why are symbols often preferred over strings as hash keys in Ruby?",
              back: "Symbols are preferred as hash keys because they're immutable and reused (the same symbol name points to the same object in memory), making them more memory-efficient and slightly faster for hash lookups. Additionally, the symbol: value syntax for hashes is more concise than the 'string' => value syntax."
            }
          ]
        },
        {
          id: "ruby-regex",
          title: "Regular Expressions",
          description: "Pattern matching with regular expressions in Ruby",
          content: `
# Regular Expressions in Ruby

Regular expressions are powerful tools for pattern matching and text processing in Ruby.
          `,
          codeExamples: [
            {
              title: "Working with Regular Expressions",
              code: `# Creating regular expressions
regex1 = /ruby/             # Literal notation
regex2 = Regexp.new("ruby") # Constructor notation

# Basic matching
text = "I love ruby programming"
puts text =~ /ruby/            # Returns index of match (7)
puts text.match(/ruby/)        # Returns MatchData object
puts text.match?(/javascript/) # Returns true/false (false)

# Match operators
puts "Match with =~: #{text =~ /ruby/}"
puts "Match with !~: #{text !~ /ruby/}"   # True if no match

# Character classes
digits = "Phone: 123-456-7890"
puts "Digits: #{digits.scan(/\d/).join}" # Matches digits: 1234567890

# Any digit: \d or [0-9]
# Any non-digit: \D or [^0-9]
# Any word character: \w or [a-zA-Z0-9_]
# Any non-word character: \W or [^a-zA-Z0-9_]
# Any whitespace: \s or [ \t\r\n\f]
# Any non-whitespace: \S or [^ \t\r\n\f]

# Custom character classes
vowels = "apple banana cherry"
puts "Vowels: #{vowels.scan(/[aeiou]/).join}"  # aaeaa

# Negated character classes
consonants = "ruby programming"
puts "Not vowels or space: #{consonants.scan(/[^aeiou\s]/).join}"  # rbyprgmmng

# Quantifiers
text = "The quick brown fox jumps over the lazy dog"
puts "Words with 3-5 letters: #{text.scan(/\b\w{3,5}\b/)}"

# * (0 or more times)
# + (1 or more times)
# ? (0 or 1 time)
# {n} (exactly n times)
# {n,} (n or more times)
# {n,m} (between n and m times)

# Anchors
puts "Words starting with 't': #{text.scan(/\bt\w+/i)}"   # The, the
puts "Words ending with 'g': #{text.scan(/\w+g\b/)}"      # dog

# ^ (start of line)
# $ (end of line)
# \b (word boundary)
# \B (non-word boundary)

# Groups and captures
phone = "Call me at 123-456-7890 or 987-654-3210"
phone.scan(/(\d{3})-(\d{3})-(\d{4})/) do |area, prefix, line|
  puts "Area: #{area}, Prefix: #{prefix}, Line: #{line}"
end

# Named captures
date = "Date: 2023-11-23"
if date =~ /Date: (?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/
  puts "Year: #{$~[:year]}, Month: #{$~[:month]}, Day: #{$~[:day]}"
end

# Using scan with a block
text.scan(/\w+/) do |word|
  puts "Word: #{word}"
end

# Gsub for replacement
censored = "The damn cat broke the damn vase".gsub(/damn/, "****")
puts censored  # The **** cat broke the **** vase

# Gsub with regex groups
formatted = "2023-11-23".gsub(/(\d{4})-(\d{2})-(\d{2})/, '\3/\2/\1')
puts formatted  # 23/11/2023

# Matching modifiers
# i - case insensitive
puts "Case insensitive: #{"RUBY" =~ /ruby/i}"

# m - multiline (. matches newline)
multiline = "Line1\nLine2"
puts "Multiline: #{multiline =~ /Line1.Line2/m}"

# x - extended (whitespace is ignored, allows comments)
complex_regex = %r{
  \b      # word boundary
  \w+     # one or more word characters
  \b      # another word boundary
}x

# Using RegExp in string split
csv = "apple,banana,cherry"
puts "Split: #{csv.split(/,/)}"

# Case Conversion
url = "user-profile-page".gsub(/-([a-z])/) { $1.upcase }
puts "Camel case: #{url}"  # userProfilePage`,
              explanation: "This example demonstrates creating and using regular expressions in Ruby for pattern matching and text processing. It covers basic matching, character classes, quantifiers, anchors, groups and captures, replacement with gsub, matching modifiers, and various applications like extracting phone numbers, formatting dates, and case conversion."
            }
          ],
          quiz: [
            {
              question: "What is the output of \"hello world\".gsub(/[aeiou]/, '*')?",
              options: ["h*ll* w*rld", "h*ll* world", "hello world", "***** *****"],
              correctAnswer: 0,
              explanation: "The gsub method with the regular expression /[aeiou]/ replaces all vowels with '*'. So \"hello world\" becomes \"h*ll* w*rld\" after the substitution."
            }
          ],
          flashcards: [
            {
              front: "What is the difference between scan and match methods for regular expressions in Ruby?",
              back: "match finds the first match of a pattern in a string and returns a MatchData object (or nil if no match). scan finds all matches of a pattern in a string and returns an array of all matched substrings or an array of arrays if the pattern contains capture groups."
            },
            {
              front: "What are common regex anchors in Ruby and what do they do?",
              back: "Common anchors in Ruby regex are: ^ (matches the start of a line), $ (matches the end of a line), \\b (matches a word boundary), and \\B (matches a non-word boundary). Anchors don't match any character but rather a position in the string."
            }
          ]
        },
        {
          id: "ruby-datatypes",
          title: "Advanced Data Types",
          description: "Working with advanced data types in Ruby",
          content: `
# Advanced Data Types in Ruby

Ruby offers several specialized data types beyond the basics, providing powerful tools for specific tasks.
          `,
          codeExamples: [
            {
              title: "Working with Advanced Data Types",
              code: `# Range
nums = 1..5  # Inclusive range (1, 2, 3, 4, 5)
chars = 'a'...'e'  # Exclusive range (a, b, c, d)

puts "Range to array: #{nums.to_a}"
puts "First element: #{nums.first}"
puts "Last element: #{nums.last}"
puts "Include 3? #{nums.include?(3)}"
puts "Include 6? #{nums.include?(6)}"
puts "Min value: #{nums.min}"
puts "Max value: #{nums.max}"

# Using ranges in case statements
score = 85
grade = case score
  when 90..100 then 'A'
  when 80...90 then 'B'
  when 70...80 then 'C'
  when 60...70 then 'D'
  else 'F'
end
puts "Grade: #{grade}"

# Set (requires 'set' library)
require 'set'

set1 = Set.new([1, 2, 3, 3, 4, 5])  # Duplicate 3 is ignored
set2 = Set.new([3, 4, 5, 6, 7])

puts "Set1: #{set1.inspect}"  # {1, 2, 3, 4, 5}
puts "Set2: #{set2.inspect}"  # {3, 4, 5, 6, 7}

# Set operations
puts "Union: #{(set1 + set2).inspect}"        # {1, 2, 3, 4, 5, 6, 7}
puts "Intersection: #{(set1 & set2).inspect}" # {3, 4, 5}
puts "Difference: #{(set1 - set2).inspect}"   # {1, 2}
puts "Exclusive OR: #{(set1 ^ set2).inspect}" # {1, 2, 6, 7}

# Time and Date
require 'date'
require 'time'

# Current time
now = Time.now
puts "Current time: #{now}"
puts "Year: #{now.year}, Month: #{now.month}, Day: #{now.day}"
puts "Hour: #{now.hour}, Min: #{now.min}, Sec: #{now.sec}"
puts "Weekday: #{now.wday} (0=Sunday)"
puts "Day of year: #{now.yday}"

# Time manipulation
tomorrow = now + (60 * 60 * 24)  # Add 24 hours in seconds
puts "Tomorrow: #{tomorrow}"

# Date class
today = Date.today
puts "Today: #{today}"
puts "Next week: #{today + 7}"
puts "3 months later: #{today >> 3}"
puts "1 year ago: #{today << 12}"

# DateTime class (combines date and time)
dt = DateTime.now
puts "Current datetime: #{dt}"
puts "ISO 8601: #{dt.iso8601}"
puts "Current timezone: #{dt.zone}"

# Struct
Person = Struct.new(:name, :age, :email)

person1 = Person.new("Alice", 30, "alice@example.com")
person2 = Person.new("Bob", 25)
person2.email = "bob@example.com"

puts "Person1: #{person1.name}, #{person1.age}, #{person1.email}"
puts "Person2: #{person2.to_a}"

# OpenStruct (requires 'ostruct' library)
require 'ostruct'

user = OpenStruct.new
user.name = "Charlie"
user.email = "charlie@example.com"
user.active = true

puts "User: #{user.name}, #{user.email}, Active: #{user.active}"

# Enumerable module methods
numbers = [1, 2, 3, 4, 5]

puts "All greater than 0? #{numbers.all? { |n| n > 0 }}"   # true
puts "Any greater than 4? #{numbers.any? { |n| n > 4 }}"   # true
puts "Count of odd numbers: #{numbers.count { |n| n.odd? }}"  # 3
puts "Inject (sum): #{numbers.inject(:+)}"  # 15
puts "Group by odd/even: #{numbers.group_by { |n| n.odd? ? 'odd' : 'even' }}"

# Matrix (requires 'matrix' library)
require 'matrix'

matrix1 = Matrix[[1, 2], [3, 4]]
matrix2 = Matrix[[5, 6], [7, 8]]

puts "Matrix1:\\n#{matrix1}"
puts "Determinant: #{matrix1.determinant}"
puts "Inverse:\\n#{matrix1.inverse}"
puts "Matrix1 + Matrix2:\\n#{matrix1 + matrix2}"
puts "Matrix1 * Matrix2:\\n#{matrix1 * matrix2}"

# Complex numbers
require 'complex'

c1 = Complex(3, 4)  # 3 + 4i
c2 = Complex(1, 2)  # 1 + 2i

puts "Complex number: #{c1}"
puts "Real part: #{c1.real}, Imaginary part: #{c1.imaginary}"
puts "Absolute value (magnitude): #{c1.abs}"
puts "Addition: #{c1 + c2}"
puts "Multiplication: #{c1 * c2}"`,
              explanation: "This example explores advanced data types in Ruby, including ranges for representing sequences, sets for unique collections, time and date classes for temporal operations, structs and OpenStruct for simple data structures, the Enumerable module's methods for collection operations, Matrix for linear algebra, and Complex for complex number mathematics. These specialized data types provide powerful tools for specific tasks in Ruby programming."
            }
          ],
          quiz: [
            {
              question: "In Ruby, what is the main difference between a Struct and an OpenStruct?",
              options: [
                "OpenStruct allows any attributes to be defined dynamically, while Struct requires attributes to be predefined",
                "Struct can only contain string attributes, while OpenStruct can contain any type",
                "Struct is for single values, while OpenStruct is for collections",
                "Struct is built-in to Ruby, while OpenStruct requires an external gem"
              ],
              correctAnswer: 0,
              explanation: "The main difference is that Struct requires you to define its attributes when you create the class (Struct.new(:name, :age)), while OpenStruct allows you to define any attribute dynamically at runtime (obj.any_attribute = value). Struct is generally faster and more memory-efficient, while OpenStruct offers more flexibility."
            }
          ],
          flashcards: [
            {
              front: "What is the difference between an inclusive range (1..5) and an exclusive range (1...5) in Ruby?",
              back: "An inclusive range (1..5) includes both the start and end values, representing 1, 2, 3, 4, 5. An exclusive range (1...5) includes the start value but excludes the end value, representing 1, 2, 3, 4."
            },
            {
              front: "How does Ruby's Set differ from an Array?",
              back: "A Set in Ruby is a collection of unique elements with no duplicates allowed. It's optimized for fast lookups (checking if an element exists) and set operations like union, intersection, and difference. Arrays allow duplicate elements and maintain a specific order. Sets require the 'set' library to be required."
            }
          ]
        },
        {
          id: "ruby-testing",
          title: "Testing in Ruby",
          description: "Writing tests for your Ruby code",
          content: `
# Testing in Ruby

Testing is a crucial part of Ruby development, with several frameworks available to help ensure code correctness.
          `,
          codeExamples: [
            {
              title: "Testing with MiniTest and RSpec",
              code: `# Here's a simple class we want to test
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

# Testing with MiniTest (built into Ruby)
require 'minitest/autorun'

class CalculatorTest < Minitest::Test
  def setup
    @calc = Calculator.new
  end
  
  def test_add
    assert_equal 4, @calc.add(2, 2)
    assert_equal 0, @calc.add(-2, 2)
    assert_equal -4, @calc.add(-2, -2)
  end
  
  def test_subtract
    assert_equal 0, @calc.subtract(2, 2)
    assert_equal -4, @calc.subtract(-2, 2)
    assert_equal 0, @calc.subtract(-2, -2)
  end
  
  def test_multiply
    assert_equal 4, @calc.multiply(2, 2)
    assert_equal -4, @calc.multiply(-2, 2)
    assert_equal 4, @calc.multiply(-2, -2)
  end
  
  def test_divide
    assert_equal 1, @calc.divide(2, 2)
    assert_equal 2.5, @calc.divide(5, 2)
    assert_equal -2.5, @calc.divide(-5, 2)
  end
  
  def test_divide_by_zero
    assert_raises ArgumentError do
      @calc.divide(1, 0)
    end
  end
end

# MiniTest with spec-style syntax
require 'minitest/autorun'

describe Calculator do
  before do
    @calc = Calculator.new
  end
  
  describe "when doing addition" do
    it "adds two positive numbers" do
      _(@calc.add(2, 2)).must_equal 4
    end
    
    it "adds a negative and positive number" do
      _(@calc.add(-2, 2)).must_equal 0
    end
  end
  
  describe "when dividing" do
    it "raises an error when dividing by zero" do
      _ { @calc.divide(1, 0) }.must_raise ArgumentError
    end
  end
end

# Testing with RSpec (requires 'rspec' gem)
# This is commented out since it requires RSpec to be installed

=begin
require 'rspec'
require_relative 'calculator'  # Assuming calculator class is in calculator.rb

RSpec.describe Calculator do
  let(:calc) { Calculator.new }
  
  describe "#add" do
    it "adds two positive numbers" do
      expect(calc.add(2, 2)).to eq(4)
    end
    
    it "adds a negative and positive number" do
      expect(calc.add(-2, 2)).to eq(0)
    end
    
    it "adds two negative numbers" do
      expect(calc.add(-2, -2)).to eq(-4)
    end
  end
  
  describe "#divide" do
    it "divides two numbers" do
      expect(calc.divide(10, 2)).to eq(5)
    end
    
    it "returns floating point when needed" do
      expect(calc.divide(5, 2)).to eq(2.5)
    end
    
    it "raises an error when dividing by zero" do
      expect { calc.divide(1, 0) }.to raise_error(ArgumentError)
    end
  end
end
=end

# Test doubles (mocks and stubs) in RSpec
=begin
class WeatherService
  def temperature(city)
    # Imagine this makes a network request to get the temperature
    # For this example, we'll simulate a hard-coded response
    return 72 if city == "San Francisco"
    raise "Unknown city"
  end
end

class WeatherReport
  def initialize(service)
    @service = service
  end
  
  def display_temperature(city)
    temp = @service.temperature(city)
    "The temperature in #{city} is #{temp}°F"
  end
end

RSpec.describe WeatherReport do
  describe "#display_temperature" do
    it "formats the temperature for display" do
      # Create a mock/double of the WeatherService
      service = double("WeatherService")
      
      # Set up the expectation that temperature will be called with "Miami" and should return 85
      allow(service).to receive(:temperature).with("Miami").and_return(85)
      
      # Create a WeatherReport with our mock service
      report = WeatherReport.new(service)
      
      # Test that the display_temperature method works correctly
      expect(report.display_temperature("Miami")).to eq("The temperature in Miami is 85°F")
    end
  end
end
=end

# Ruby's built-in Test::Unit (older style)
=begin
require 'test/unit'

class TestCalculator < Test::Unit::TestCase
  def setup
    @calc = Calculator.new
  end
  
  def test_add
    assert_equal 4, @calc.add(2, 2)
  end
  
  def test_divide_by_zero
    assert_raise ArgumentError do
      @calc.divide(1, 0)
    end
  end
end
=end`,
              explanation: "This example demonstrates testing in Ruby, primarily using Minitest, which is built into the Ruby standard library. It shows both Minitest's traditional assert-style syntax and its spec-style syntax for behavior-driven development (BDD). The example also includes commented-out examples of testing with RSpec (a popular external testing framework), showing how to create test doubles (mocks) for isolating components in unit tests, and a brief example of the older Test::Unit framework. The code tests a simple Calculator class, verifying that its methods work correctly and that it raises appropriate errors."
            }
          ],
          quiz: [
            {
              question: "What is the main difference between MiniTest and RSpec in Ruby?",
              options: [
                "MiniTest can only test classes, while RSpec can test modules too",
                "RSpec is built into Ruby, while MiniTest needs to be installed as a gem",
                "MiniTest is built into Ruby, while RSpec needs to be installed as a gem",
                "MiniTest only supports assert-style testing, not spec-style testing"
              ],
              correctAnswer: 2,
              explanation: "MiniTest is included in the Ruby standard library, so it's available without installing any additional gems. RSpec, on the other hand, is an external library that you need to install as a gem. Both support various testing styles, though RSpec was specifically designed for behavior-driven development (BDD)."
            }
          ],
          flashcards: [
            {
              front: "What is the difference between assert-style and spec-style testing?",
              back: "Assert-style testing (traditional in MiniTest and Test::Unit) focuses on making assertions about the state of the system using methods like assert_equal. Spec-style testing (BDD style in RSpec and MiniTest's spec DSL) uses a more natural language approach with describe/it blocks and expectation syntax like expect(x).to eq(y) or x.must_equal y."
            },
            {
              front: "What is a test double (or mock) in Ruby testing?",
              back: "A test double is an object that stands in for a real object in a test. It allows you to isolate the code you're testing by removing dependencies on other components. Common types of test doubles include stubs (providing canned answers), mocks (verifying method calls), and fakes (simplified implementations). In RSpec, you can create doubles with the double method and set expectations with allow and expect."
            }
          ]
        },
        {
          id: "ruby-security",
          title: "Security Best Practices",
          description: "Understanding security considerations in Ruby",
          content: `
# Security Best Practices in Ruby

Writing secure code is essential in any language, and Ruby provides tools and patterns to help developers avoid common security pitfalls.
          `,
          codeExamples: [
            {
              title: "Security Best Practices in Ruby",
              code: `# 1. Input Validation and Sanitization

# Bad example - vulnerable to SQL Injection
def find_user_unsafe(username)
  # Don't do this in real code!
  query = "SELECT * FROM users WHERE username = '#{username}'"
  # Execute query...
end

# Good example - parameterized query
def find_user_safe(username)
  # Using prepared statements (pseudocode)
  query = "SELECT * FROM users WHERE username = ?"
  # execute_with_params(query, username)
end

# 2. Avoiding Command Injection

# Bad example - vulnerable to command injection
def execute_command_unsafe(filename)
  # Don't do this in real code!
  system("ls #{filename}")  # Attacker could input "; rm -rf /"
end

# Good example - safe execution
def execute_command_safe(filename)
  # Using arrays to prevent command injection
  system("ls", filename)
end

# 3. Secure Password Handling

# Bad example - storing passwords in plain text
def unsafe_authentication(username, password)
  user = find_user(username)
  if user && user.password == password  # Plain text comparison
    # Grant access
  end
end

# Good example - using secure password hashing
require 'bcrypt'

def create_user_secure(username, password)
  # Store hashed password
  password_hash = BCrypt::Password.create(password)
  # Save user with password_hash
end

def secure_authentication(username, password)
  user = find_user(username)
  if user && BCrypt::Password.new(user.password_hash) == password
    # Grant access
  end
end

# 4. Mass Assignment Vulnerability

# Bad example - vulnerable to mass assignment
class User
  attr_accessor :name, :email, :admin  # admin should not be mass-assignable
  
  def initialize(attributes = {})
    attributes.each do |key, value|
      self.send("#{key}=", value)  # Dangerous!
    end
  end
end

# Good example - explicit attribute setting
class SafeUser
  attr_accessor :name, :email
  attr_reader :admin  # No setter for admin
  
  def initialize(attributes = {})
    @name = attributes[:name]
    @email = attributes[:email]
    @admin = false  # Set explicitly, not from input
  end
  
  # Admin can only be set through a controlled method
  def make_admin
    # Check authorization here
    @admin = true
  end
end

# 5. Cross-Site Scripting (XSS) Prevention

# Bad example - vulnerable to XSS
def render_comment_unsafe(comment)
  "<div class='comment'>#{comment}</div>"  # Comment could contain malicious JavaScript
end

# Good example - escaping HTML
require 'cgi'

def render_comment_safe(comment)
  escaped_comment = CGI.escapeHTML(comment)
  "<div class='comment'>#{escaped_comment}</div>"
end

# 6. Preventing Timing Attacks

# Bad example - vulnerable to timing attacks
def compare_secret_unsafe(a, b)
  a == b  # Comparison time varies based on how many characters match
end

# Good example - constant-time comparison
require 'openssl'

def compare_secret_safe(a, b)
  OpenSSL::HMAC.hexdigest("SHA256", a, "") == OpenSSL::HMAC.hexdigest("SHA256", b, "")
end

# 7. Safe Deserialization

# Bad example - dangerous deserialization
def unsafe_deserialize(data)
  Marshal.load(data)  # Could execute arbitrary code
end

# Good example - using safer JSON
require 'json'

def safe_deserialize(data)
  JSON.parse(data)  # JSON is safer than Marshal
end

# 8. Environment Variable Protection

# Bad example - hardcoded credentials
API_KEY = "1234567890abcdef"

# Good example - using environment variables
API_KEY = ENV['API_KEY']

# 9. Regular Expression DoS (ReDoS) Prevention

# Bad example - vulnerable to ReDoS
def validate_email_unsafe(email)
  email =~ /^([a-zA-Z0-9]+([\.+_-][a-zA-Z0-9]+)*)@(([a-zA-Z0-9]+((\.|[-]{1,2})[a-zA-Z0-9]+)*)\.[a-zA-Z]{2,6})$/
end

# Good example - simpler regex with limits
def validate_email_safe(email)
  return false if email.length > 100  # Set reasonable limits
  email =~ /\A[^@\s]+@[^@\s]+\.[^@\s]+\z/
end

# 10. Secure Random Generation

# Bad example - predictable tokens
def generate_token_unsafe
  rand(10000...99999).to_s
end

# Good example - cryptographically secure random tokens
require 'securerandom'

def generate_token_safe
  SecureRandom.hex(16)  # 32 character hex string
end

# Example usage of secure practices
def demo_security_practices
  puts "Secure token: #{generate_token_safe}"
  
  # Safely deserialize data
  begin
    data = '{"name":"John","email":"john@example.com"}'
    user_data = safe_deserialize(data)
    puts "User: #{user_data['name']}"
  rescue JSON::ParserError => e
    puts "Invalid data format"
  end
  
  # Safe HTML rendering
  comment = "<script>alert('XSS')</script>Hello"
  puts "Safe HTML: #{render_comment_safe(comment)}"
end

demo_security_practices`,
              explanation: "This example covers key security best practices in Ruby, including preventing SQL injection through parameterized queries, avoiding command injection vulnerabilities, secure password handling with bcrypt, preventing mass assignment vulnerabilities, escaping HTML to prevent XSS, using constant-time comparisons to prevent timing attacks, safe deserialization, protecting sensitive data like API keys, preventing regular expression DoS attacks, and generating secure random tokens. These practices help defend against common vulnerabilities in web applications."
            }
          ],
          quiz: [
            {
              question: "In Ruby, which method provides a more secure way to execute system commands with user input?",
              options: [
                "system(\"command #{user_input}\")",
                "exec(\"command #{user_input}\")",
                "system(\"command\", user_input)",
                "`command #{user_input}`"
              ],
              correctAnswer: 2,
              explanation: "The system(\"command\", user_input) syntax (passing multiple arguments to system) is more secure because it prevents command injection. The shell doesn't interpret the arguments, so special characters in user_input aren't treated as shell commands. The other options interpolate user input directly into the command string, which is vulnerable to command injection."
            }
          ],
          flashcards: [
            {
              front: "What is SQL Injection and how can it be prevented in Ruby?",
              back: "SQL Injection is an attack where malicious SQL code is inserted into queries, potentially allowing data theft or manipulation. In Ruby, prevent it by using parameterized queries (prepared statements) instead of string interpolation in SQL, or using an ORM like Active Record with safe methods like User.where(name: params[:name]) that automatically sanitize inputs."
            },
            {
              front: "Why is BCrypt recommended for password storage in Ruby?",
              back: "BCrypt is recommended because it's a slow, adaptive hash function designed specifically for passwords. It incorporates a salt to protect against rainbow table attacks and deliberately takes time to compute, making brute-force attacks more difficult. Its work factor can be adjusted as computers get faster. In Ruby, it's easily used via the bcrypt gem with BCrypt::Password.create and BCrypt::Password.new."
            }
          ]
        },
        {
          id: "ruby-performance",
          title: "Performance Optimization",
          description: "Improving the performance of Ruby applications",
          content: `
# Performance Optimization in Ruby

While Ruby prioritizes developer productivity over raw speed, there are many techniques to optimize performance when needed.
          `,
          codeExamples: [
            {
              title: "Performance Optimization Techniques",
              code: `# 1. Measuring Performance

# Using Benchmark module
require 'benchmark'

# Basic benchmarking
Benchmark.bm(7) do |x|
  x.report("slow:") { 100_000.times { 1 + 2 } }
  x.report("fast:") { 100_000.times { 3 } }
end

# Compare multiple implementations
def slow_sum(n)
  sum = 0
  1.upto(n) { |i| sum += i }
  sum
end

def fast_sum(n)
  n * (n + 1) / 2  # Mathematical formula
end

n = 1_000_000
Benchmark.bm(10) do |x|
  x.report("iterative:") { slow_sum(n) }
  x.report("formula:") { fast_sum(n) }
end

# Using benchmark/ips for more detailed analysis
require 'benchmark/ips'

Benchmark.ips do |x|
  x.report("slow") { slow_sum(1000) }
  x.report("fast") { fast_sum(1000) }
  x.compare!
end

# 2. String Optimization

# Inefficient string concatenation
def build_string_slow(n)
  result = ""
  n.times { |i| result += "item#{i}" }
  result
end

# Efficient string concatenation
def build_string_fast(n)
  result = []
  n.times { |i| result << "item#{i}" }
  result.join
end

# String interpolation vs concatenation
def string_concat(name, age)
  "Name: " + name + ", Age: " + age.to_s
end

def string_interpolation(name, age)
  "Name: #{name}, Age: #{age}"
end

# Heredoc for large strings
long_text = <<~HEREDOC
  This is a multi-line text.
  It's much cleaner than concatenating
  multiple strings with +.
HEREDOC

# 3. Array and Hash Optimization

# Pre-allocating arrays
def preallocate_example(n)
  # Preallocate space
  array = Array.new(n)
  n.times { |i| array[i] = i * i }
  array
end

# Inefficient array manipulation
def manipulate_array_slow(array)
  result = []
  array.each do |x|
    result << x * 2 if x % 2 == 0
  end
  result
end

# More efficient array manipulation
def manipulate_array_fast(array)
  array.select { |x| x % 2 == 0 }.map { |x| x * 2 }
end

# Even more efficient (single pass)
def manipulate_array_fastest(array)
  array.each_with_object([]) do |x, result|
    result << x * 2 if x % 2 == 0
  end
end

# 4. Symbol vs String as Hash Keys

str_hash = {}
sym_hash = {}

# Fill hashes
1_000.times do |i|
  str_key = "key#{i}"
  sym_key = :"key#{i}"
  str_hash[str_key] = i
  sym_hash[sym_key] = i
end

Benchmark.bm(10) do |x|
  x.report("string:") { 10_000.times { str_hash["key500"] } }
  x.report("symbol:") { 10_000.times { sym_hash[:key500] } }
end

# 5. Memoization for expensive operations

# Without memoization
def fibonacci_slow(n)
  return n if n <= 1
  fibonacci_slow(n-1) + fibonacci_slow(n-2)
end

# With memoization
def fibonacci_fast(n, memo = {})
  return memo[n] if memo.has_key?(n)
  return n if n <= 1
  
  memo[n] = fibonacci_fast(n-1, memo) + fibonacci_fast(n-2, memo)
end

# 6. Lazy Enumerators

# Eager evaluation (processes all elements)
def first_even_square_eager(array)
  array.select { |x| x % 2 == 0 }.map { |x| x * x }.first
end

# Lazy evaluation (stops after finding the first one)
def first_even_square_lazy(array)
  array.lazy.select { |x| x % 2 == 0 }.map { |x| x * x }.first
end

# 7. Using Specialized Data Structures

require 'set'

# Using Array for uniqueness (slower)
def unique_items_array(items)
  result = []
  items.each do |item|
    result << item unless result.include?(item)
  end
  result
end

# Using Set (faster for lookups)
def unique_items_set(items)
  Set.new(items).to_a
end

# 8. Avoiding method_missing overhead

# Slow due to method_missing overhead
class SlowDynamicAttributes
  def initialize
    @attributes = {}
  end
  
  def method_missing(method_name, *args)
    attribute = method_name.to_s
    if attribute.end_with?("=")
      @attributes[attribute.chop] = args.first
    else
      @attributes[attribute]
    end
  end
end

# Faster with defined methods
class FastDynamicAttributes
  def initialize
    @attributes = {}
  end
  
  def set(name, value)
    @attributes[name.to_s] = value
  end
  
  def get(name)
    @attributes[name.to_s]
  end
end

# 9. Using Freeze to prevent modifications

# Define a frozen string
GREETING = "Hello, world!".freeze

def greet_user(name)
  "#{GREETING} Welcome, #{name}!"
end

# 10. Native extensions for critical paths (pseudocode)
# For truly performance-critical code, Ruby can call C extensions.
# Example of using a gem with native extensions:
# gem 'nokogiri'  # Has native C extensions for XML parsing
# gem 'sqlite3'   # Has native extensions for database access

puts "Performance optimization examples completed."`,
              explanation: "This example demonstrates various techniques for optimizing Ruby code performance, including using the Benchmark module to measure performance, optimizing string operations, array and hash manipulations, using symbols instead of strings for hash keys, implementing memoization for expensive calculations, using lazy enumerators to avoid unnecessary work, choosing appropriate data structures like Set for uniqueness checks, avoiding method_missing overhead, and freezing objects to prevent unnecessary object allocations. These techniques can significantly improve performance in critical parts of Ruby applications."
            }
          ],
          quiz: [
            {
              question: "Which of these is typically the fastest way to build a large string in Ruby?",
              options: [
                "result = ''; 1000.times { |i| result += i.to_s }",
                "1000.times.map(&:to_s).join",
                "result = ''; 1000.times { |i| result << i.to_s }",
                "1000.times.inject('') { |result, i| result + i.to_s }"
              ],
              correctAnswer: 1,
              explanation: "The fastest approach is typically to use map to create an array of strings and then join them at the end: 1000.times.map(&:to_s).join. This avoids repeatedly creating new string objects, which happens with += concatenation. The << operator is better than + but still requires converting each number to a string individually. The inject approach suffers from the same issues as +=."
            }
          ],
          flashcards: [
            {
              front: "What is memoization in Ruby and why is it useful for performance?",
              back: "Memoization is a technique where you cache the results of expensive function calls and return the cached result when the same inputs occur again. It's implemented by storing results in a hash table, typically using a method's parameters as keys. This is especially useful for recursive algorithms (like Fibonacci) or any computation where the same values are calculated repeatedly."
            },
            {
              front: "What is the difference between eager and lazy evaluation in Ruby?",
              back: "Eager evaluation (Ruby's default) processes all elements in a collection immediately. Lazy evaluation (using the .lazy method on enumerables) defers processing until the values are actually needed. Lazy evaluation can significantly improve performance when working with large collections where you only need a subset of results, as it avoids unnecessary computation."
            }
          ]
        },
        {
          id: "ruby-concurrency",
          title: "Concurrency and Parallelism",
          description: "Handling concurrent operations in Ruby",
          content: `
# Concurrency and Parallelism in Ruby

Ruby offers several tools for handling concurrent and parallel operations, allowing your programs to do multiple things at once.
          `,
          codeExamples: [
            {
              title: "Concurrency and Parallelism Techniques",
              code: `# NOTE: Some examples would need to be run in a proper Ruby environment

# 1. Threads
require 'thread'

# Basic thread creation
thread = Thread.new do
  puts "Started thread"
  sleep 1
  puts "Thread completed"
end

puts "Main thread continues..."
thread.join  # Wait for thread to finish
puts "All done!"

# Running multiple threads
threads = []
5.times do |i|
  threads << Thread.new(i) do |index|
    puts "Thread #{index} started"
    sleep rand(0.1..0.5)
    puts "Thread #{index} completed"
  end
end

# Wait for all threads to complete
threads.each(&:join)
puts "All threads completed"

# Thread safety issues with shared data
counter = 0
threads = 10.times.map do
  Thread.new do
    1000.times do
      counter += 1  # Not thread-safe!
    end
  end
end
threads.each(&:join)
puts "Counter: #{counter}"  # Might not be 10,000 due to race conditions

# 2. Mutexes for thread safety
counter = 0
mutex = Mutex.new

threads = 10.times.map do
  Thread.new do
    1000.times do
      mutex.synchronize do
        counter += 1  # Thread-safe
      end
    end
  end
end
threads.each(&:join)
puts "Thread-safe counter: #{counter}"  # Should be 10,000

# 3. Queue for thread communication
queue = Queue.new  # Thread-safe queue

# Producer thread
producer = Thread.new do
  5.times do |i|
    sleep rand(0.1..0.5)
    queue << "Item #{i}"
    puts "Produced item #{i}"
  end
end

# Consumer threads
consumers = 2.times.map do |consumer_id|
  Thread.new do
    while producer.alive? || !queue.empty?
      begin
        item = queue.pop(true)  # non-blocking
        puts "Consumer #{consumer_id} got: #{item}"
        sleep rand(0.1..0.5)
      rescue ThreadError
        # Queue is empty, wait a bit
        sleep 0.1
      end
    end
  end
end

producer.join
consumers.each(&:join)

# 4. Thread pools
require 'concurrent'

# Using concurrent-ruby's thread pool
pool = Concurrent::FixedThreadPool.new(5)

10.times do |i|
  pool.post do
    puts "Task #{i} started"
    sleep rand(0.5..2)
    puts "Task #{i} completed"
  end
end

pool.shutdown
pool.wait_for_termination

# 5. Fibers (cooperative concurrency)
fiber = Fiber.new do
  puts "Fiber started"
  Fiber.yield "First yield"
  puts "Fiber resumed"
  Fiber.yield "Second yield"
  puts "Fiber resumed again"
  "Fiber completed"
end

puts fiber.resume   # Start the fiber, prints "Fiber started" and returns "First yield"
puts fiber.resume   # Resume the fiber, prints "Fiber resumed" and returns "Second yield"
puts fiber.resume   # Resume again, prints "Fiber resumed again" and returns "Fiber completed"

# 6. Ractor (parallel execution in Ruby 3+)
# Note: This requires Ruby 3.0 or later
=begin
# Creating a Ractor
r = Ractor.new do
  # This code runs in parallel
  puts "Ractor started"
  received = Ractor.receive
  puts "Ractor received: #{received}"
  "Message from Ractor"
end

# Send message to Ractor
r.send("Hello from main Ractor")

# Receive message from Ractor
result = r.take
puts "Main received: #{result}"

# Multiple Ractors
ractors = 3.times.map do |i|
  Ractor.new(i) do |index|
    # Each Ractor runs in parallel
    sleep 1
    "Result from Ractor #{index}"
  end
end

# Get results from all Ractors
results = ractors.map(&:take)
puts "Results: #{results.inspect}"
=end

# 7. Processes with fork (Unix-like systems only)
=begin
puts "Parent process: #{Process.pid}"

3.times do |i|
  fork do
    # This runs in a separate process
    puts "Child process #{i}: #{Process.pid}"
    sleep rand(1..3)
    puts "Child process #{i} exiting"
    exit
  end
end

# Wait for all child processes to finish
Process.waitall
puts "All child processes finished"
=end

# 8. Async/Await with Async gem
=begin
require 'async'

Async do |task|
  # Create several tasks
  5.times do |i|
    task.async do
      puts "Task #{i} started"
      # Simulate I/O operation
      sleep rand(0.5..2)
      puts "Task #{i} completed"
    end
  end
  
  # All tasks complete automatically at the end of the Async block
  puts "All tasks submitted"
end

puts "All tasks completed"
=end

# 9. Combining threads with timeout
require 'timeout'

begin
  Timeout.timeout(2) do
    # This block needs to complete within 2 seconds
    puts "Starting long operation..."
    sleep 3  # Simulates a long operation
    puts "Completed long operation"  # This won't be printed
  end
rescue Timeout::Error
  puts "Operation timed out!"
end

# 10. Thread-local variables
Thread.current[:user_id] = 123

thread = Thread.new do
  # Each thread has its own thread-local variables
  puts "Thread local from parent: #{Thread.current[:user_id]}"
  Thread.current[:user_id] = 456
  puts "Thread local after change: #{Thread.current[:user_id]}"
end

thread.join
puts "Main thread's user_id: #{Thread.current[:user_id]}"  # Still 123

puts "Concurrency examples completed"`,
              explanation: "This example demonstrates various concurrency and parallelism techniques in Ruby. It covers basic threads, mutexes for thread safety, queues for thread communication, thread pools for controlling resource usage, fibers for cooperative concurrency, Ractors for parallel execution (Ruby 3+), processes with fork, async/await patterns with the Async gem, thread timeouts, and thread-local variables. Some examples (Ractor, fork, Async) are commented out as they require specific Ruby versions or gems."
            }
          ],
          quiz: [
            {
              question: "Which of the following Ruby concurrency mechanisms provides true parallelism in CRuby (MRI)?",
              options: [
                "Threads",
                "Fibers",
                "Processes (via fork)",
                "Mutexes"
              ],
              correctAnswer: 2,
              explanation: "In CRuby (MRI), threads are subject to the Global Interpreter Lock (GIL), which prevents multiple threads from executing Ruby code in parallel. Fibers provide cooperative concurrency but not parallelism. Processes created with fork run as separate OS processes, each with their own Ruby interpreter, allowing true parallelism. Mutexes are synchronization primitives, not concurrency mechanisms themselves."
            }
          ],
          flashcards: [
            {
              front: "What is the Global Interpreter Lock (GIL) in Ruby and how does it affect concurrency?",
              back: "The Global Interpreter Lock (GIL) is a mechanism in CRuby (MRI) that prevents multiple Ruby threads from executing code simultaneously. Only one thread can execute Ruby code at any given time, which means threads don't provide true parallelism for CPU-bound tasks. The GIL helps with thread safety for the interpreter, but for parallel execution, you need to use processes, native extensions, or alternative Ruby implementations like JRuby or TruffleRuby."
            },
            {
              front: "What is the difference between concurrency and parallelism in Ruby?",
              back: "Concurrency is about dealing with many things at once (like handling multiple tasks by interleaving their execution). Parallelism is about doing many things at once (executing multiple tasks simultaneously on multiple processors). Ruby threads provide concurrency, but due to the GIL in CRuby, they don't provide parallelism for CPU-bound tasks. For true parallelism in CRuby, you can use processes (fork), Ractors (Ruby 3+), or native extensions."
            }
          ]
        },
        {
          id: "ruby-dsl",
          title: "Domain-Specific Languages",
          description: "Creating and using DSLs in Ruby",
          content: `
# Domain-Specific Languages (DSLs) in Ruby

Ruby's flexible syntax makes it ideal for creating domain-specific languages, which are mini-languages tailored to specific problem domains.
          `,
          codeExamples: [
            {
              title: "Creating and Using DSLs",
              code: `# 1. What are DSLs?
# Domain-Specific Languages are mini-languages tailored to specific problems.
# Ruby is great for DSLs because of its flexible syntax.
# Examples of Ruby DSLs include:
#  - RSpec for testing
#  - Rails routes
#  - Sinatra for web apps
#  - Rake for task automation

# 2. Building a simple DSL for a recipe book

class Recipe
  attr_reader :name, :ingredients, :steps
  
  def initialize(name, &block)
    @name = name
    @ingredients = []
    @steps = []
    
    # Execute the block in the context of this instance
    instance_eval(&block) if block_given?
  end
  
  # DSL methods
  def ingredient(name, options = {})
    quantity = options[:quantity] || "some"
    unit = options[:unit] || ""
    @ingredients << "#{quantity} #{unit} #{name}".strip
  end
  
  def step(description)
    @steps << description
  end
  
  # Method to display the recipe
  def display
    puts "Recipe: #{@name}"
    puts "\nIngredients:"
    @ingredients.each_with_index do |ingredient, index|
      puts "#{index + 1}. #{ingredient}"
    end
    
    puts "\nSteps:"
    @steps.each_with_index do |step, index|
      puts "#{index + 1}. #{step}"
    end
  end
end

# Using our recipe DSL
pancakes = Recipe.new("Pancakes") do
  ingredient "flour", quantity: 2, unit: "cups"
  ingredient "sugar", quantity: 2, unit: "tbsp"
  ingredient "baking powder", quantity: 1, unit: "tbsp"
  ingredient "salt", quantity: 0.5, unit: "tsp"
  ingredient "milk", quantity: 1.5, unit: "cups"
  ingredient "eggs", quantity: 2
  ingredient "butter", quantity: 2, unit: "tbsp", note: "melted"
  
  step "Mix the dry ingredients (flour, sugar, baking powder, salt)."
  step "In another bowl, whisk milk and eggs together."
  step "Add melted butter to the wet ingredients."
  step "Combine wet ingredients with dry ingredients and mix until just combined."
  step "Heat a lightly oiled griddle or frying pan over medium-high heat."
  step "Pour batter onto the griddle, about 1/4 cup for each pancake."
  step "Cook until bubbles form and the edges are dry."
  step "Flip and cook until browned on the other side."
  step "Serve hot with maple syrup."
end

pancakes.display

# 3. Building a DSL for a simple state machine

class StateMachine
  def initialize(&block)
    @states = {}
    @current_state = nil
    
    instance_eval(&block) if block_given?
  end
  
  def initial(state)
    @current_state = state
  end
  
  def state(name, &block)
    @states[name] = {
      actions: {},
      on_enter: nil,
      on_exit: nil
    }
    
    # Create a state configurator object
    state_config = StateConfig.new(@states[name])
    state_config.instance_eval(&block) if block_given?
  end
  
  def trigger(event)
    return unless @current_state
    
    state_data = @states[@current_state]
    return unless state_data && state_data[:actions][event]
    
    # Execute exit action for current state
    state_data[:on_exit]&.call
    
    # Transition to new state
    new_state = state_data[:actions][event]
    @current_state = new_state
    
    # Execute enter action for new state
    @states[new_state][:on_enter]&.call
    
    puts "Transitioned to #{new_state}"
  end
  
  def current_state
    @current_state
  end
  
  # Inner class for state configuration
  class StateConfig
    def initialize(state_data)
      @state_data = state_data
    end
    
    def on_enter(&block)
      @state_data[:on_enter] = block
    end
    
    def on_exit(&block)
      @state_data[:on_exit] = block
    end
    
    def transition(event, target)
      @state_data[:actions][event] = target
    end
  end
end

# Using our state machine DSL
traffic_light = StateMachine.new do
  initial :red
  
  state :red do
    on_enter { puts "Red light is on. Stop!" }
    on_exit { puts "Red light is turning off" }
    
    transition :timer, :green
  end
  
  state :green do
    on_enter { puts "Green light is on. Go!" }
    on_exit { puts "Green light is turning off" }
    
    transition :timer, :yellow
  end
  
  state :yellow do
    on_enter { puts "Yellow light is on. Prepare to stop!" }
    on_exit { puts "Yellow light is turning off" }
    
    transition :timer, :red
  end
end

puts "Initial state: #{traffic_light.current_state}"
traffic_light.trigger(:timer)  # red -> green
traffic_light.trigger(:timer)  # green -> yellow
traffic_light.trigger(:timer)  # yellow -> red

# 4. Method chaining for a query builder DSL

class QueryBuilder
  def initialize
    @table = nil
    @selected_columns = []
    @conditions = []
    @order_clauses = []
    @limit_value = nil
  end
  
  def select(*columns)
    @selected_columns = columns.flatten
    self  # Return self for method chaining
  end
  
  def from(table)
    @table = table
    self
  end
  
  def where(condition)
    @conditions << condition
    self
  end
  
  def order_by(column, direction = :asc)
    @order_clauses << "#{column} #{direction.to_s.upcase}"
    self
  end
  
  def limit(value)
    @limit_value = value
    self
  end
  
  def to_sql
    columns = @selected_columns.empty? ? "*" : @selected_columns.join(", ")
    sql = "SELECT #{columns} FROM #{@table}"
    
    unless @conditions.empty?
      sql += " WHERE #{@conditions.join(' AND ')}"
    end
    
    unless @order_clauses.empty?
      sql += " ORDER BY #{@order_clauses.join(', ')}"
    end
    
    if @limit_value
      sql += " LIMIT #{@limit_value}"
    end
    
    sql
  end
end

# Using the query builder DSL
query = QueryBuilder.new
          .select(:id, :name, :email)
          .from(:users)
          .where("age > 18")
          .where("status = 'active'")
          .order_by(:name)
          .limit(10)

puts "\nGenerated SQL:"
puts query.to_sql

# 5. Block parameters for a test DSL

class TestSuite
  def initialize(name)
    @name = name
    @setup_block = nil
    @teardown_block = nil
    @tests = {}
  end
  
  def setup(&block)
    @setup_block = block
  end
  
  def teardown(&block)
    @teardown_block = block
  end
  
  def test(name, &block)
    @tests[name] = block
  end
  
  def run
    puts "Running test suite: #{@name}"
    
    @tests.each do |name, test_block|
      puts "\n  Test: #{name}"
      begin
        # Run setup if defined
        @setup_block.call if @setup_block
        
        # Run the test
        test_block.call
        puts "    ✓ Passed"
      rescue => e
        puts "    ✗ Failed: #{e.message}"
      ensure
        # Run teardown if defined
        @teardown_block.call if @teardown_block
      end
    end
  end
end

# Using the test DSL
calculator_tests = TestSuite.new("Calculator Tests")

calculator_tests.setup do
  # This would set up test environment
  puts "    Setting up test..."
  @calculator = Object.new  # In real code, this would be the actual class
end

calculator_tests.teardown do
  # This would clean up after each test
  puts "    Cleaning up..."
end

calculator_tests.test("addition") do
  # This would be the actual test
  puts "    Testing addition..."
  # assert_equal(4, @calculator.add(2, 2))
end

calculator_tests.test("subtraction") do
  puts "    Testing subtraction..."
  # assert_equal(5, @calculator.subtract(10, 5))
end

calculator_tests.run

puts "\nDSL examples completed"`,
              explanation: "This example demonstrates how to create Domain-Specific Languages (DSLs) in Ruby. It includes a recipe book DSL for defining recipes with ingredients and steps, a state machine DSL for modeling state transitions, a SQL query builder DSL using method chaining, and a testing DSL similar to RSpec or Minitest. These examples show various Ruby techniques for creating expressive, readable DSLs, including instance_eval for executing blocks in a specific context, method chaining for fluent interfaces, and blocks with parameters."
            }
          ],
          quiz: [
            {
              question: "What Ruby method is commonly used to run a block in the context of an object, making it ideal for DSLs?",
              options: [
                "block.call",
                "eval",
                "instance_eval",
                "yield"
              ],
              correctAnswer: 2,
              explanation: "instance_eval is commonly used in DSLs because it executes a block in the context of the receiver object, making the object's instance variables and methods available as if they were local. This allows for a clean DSL syntax without having to pass the object explicitly. In the example, Recipe.new('Pancakes') { ingredient... } uses instance_eval to make ingredient and step methods available directly in the block."
            }
          ],
          flashcards: [
            {
              front: "What makes Ruby particularly well-suited for creating DSLs?",
              back: "Ruby's features that make it ideal for DSLs include: flexible syntax with optional parentheses and semicolons, blocks and closures, method_missing for handling undefined methods, instance_eval for changing execution context, symbol-to-proc shortcuts, and meta-programming capabilities. These allow developers to create expressive, readable mini-languages tailored to specific domains."
            },
            {
              front: "What is the difference between an internal and external DSL in Ruby?",
              back: "An internal DSL (like the examples shown) uses Ruby's own syntax and is executed as Ruby code. It's easier to implement but constrained by Ruby's syntax. An external DSL has its own custom syntax that's parsed separately from Ruby (like a configuration language) and requires building a parser. Internal DSLs are more common in Ruby due to the language's flexibility."
            }
          ]
        },
        {
          id: "ruby-web",
          title: "Web Development",
          description: "Building web applications with Ruby",
          content: `
# Web Development with Ruby

Ruby has several frameworks and libraries for web development, with Ruby on Rails being the most popular.
          `,
          codeExamples: [
            {
              title: "Web Development with Ruby",
              code: `# 1. Simple Web Server with WEBrick
require 'webrick'

=begin
# Create a basic HTTP server
server = WEBrick::HTTPServer.new(Port: 8000)

# Define a simple request handler
server.mount_proc '/' do |req, res|
  res.body = "Hello, World! The time is #{Time.now}"
  res.content_type = 'text/plain'
end

# Define a handler for a specific path
server.mount_proc '/about' do |req, res|
  res.body = "This is a simple Ruby web server using WEBrick."
  res.content_type = 'text/plain'
end

# Start the server (use trap to allow Ctrl+C shutdown)
trap('INT') { server.shutdown }
server.start
=end

# 2. Sinatra - Lightweight Web Framework
require 'sinatra'

=begin
# Basic route
get '/' do
  "Hello, World from Sinatra!"
end

# Route with parameters
get '/hello/:name' do
  "Hello, #{params[:name]}!"
end

# Multiple HTTP methods
get '/users/:id' do
  "Showing user #{params[:id]}"
end

post '/users' do
  "Creating a new user"
end

put '/users/:id' do
  "Updating user #{params[:id]}"
end

delete '/users/:id' do
  "Deleting user #{params[:id]}"
end

# Serving JSON
get '/api/users' do
  content_type :json
  { users: ['Alice', 'Bob', 'Charlie'] }.to_json
end

# Serving a template
get '/template' do
  erb :index, locals: { title: "Sinatra Template", message: "Hello from a template!" }
end
=end

# 3. Ruby on Rails (Framework Overview)
# Rails follows the MVC (Model-View-Controller) pattern

# Example Rails Model (app/models/user.rb)
=begin
class User < ApplicationRecord
  has_many :posts
  has_secure_password
  
  validates :email, presence: true, uniqueness: true
  validates :username, presence: true, length: { minimum: 3, maximum: 50 }
  
  before_save :downcase_email
  
  def full_name
    "#{first_name} #{last_name}"
  end
  
  private
  
  def downcase_email
    self.email = email.downcase
  end
end
=end

# Example Rails Controller (app/controllers/users_controller.rb)
=begin
class UsersController < ApplicationController
  before_action :set_user, only: [:show, :edit, :update, :destroy]
  before_action :require_login, except: [:new, :create]
  
  def index
    @users = User.all
  end
  
  def show
  end
  
  def new
    @user = User.new
  end
  
  def create
    @user = User.new(user_params)
    
    if @user.save
      redirect_to @user, notice: 'User was successfully created.'
    else
      render :new
    end
  end
  
  def edit
  end
  
  def update
    if @user.update(user_params)
      redirect_to @user, notice: 'User was successfully updated.'
    else
      render :edit
    end
  end
  
  def destroy
    @user.destroy
    redirect_to users_url, notice: 'User was successfully destroyed.'
  end
  
  private
  
  def set_user
    @user = User.find(params[:id])
  end
  
  def user_params
    params.require(:user).permit(:username, :email, :password, :password_confirmation)
  end
end
=end

# Example Rails View (app/views/users/show.html.erb)
=begin
<h1><%= @user.username %></h1>

<p>
  <strong>Email:</strong>
  <%= @user.email %>
</p>

<p>
  <strong>Joined:</strong>
  <%= @user.created_at.strftime('%B %d, %Y') %>
</p>

<% if @user.posts.any? %>
  <h2>Posts (<%= @user.posts.count %>)</h2>
  <ul>
    <% @user.posts.each do |post| %>
      <li><%= link_to post.title, post %></li>
    <% end %>
  </ul>
<% else %>
  <p>No posts yet.</p>
<% end %>

<%= link_to 'Edit', edit_user_path(@user) %> |
<%= link_to 'Back', users_path %>
=end

# 4. Rails Routes (config/routes.rb)
=begin
Rails.application.routes.draw do
  # Root route
  root 'home#index'
  
  # RESTful resources
  resources :users
  resources :posts
  
  # Nested resources
  resources :users do
    resources :posts, only: [:index]
  end
  
  # Custom routes
  get 'about', to: 'static#about'
  get 'login', to: 'sessions#new'
  post 'login', to: 'sessions#create'
  delete 'logout', to: 'sessions#destroy'
  
  # API namespace
  namespace :api do
    namespace :v1 do
      resources :users, only: [:index, :show]
    end
  end
  
  # Route with constraints
  get 'profile/:username', to: 'users#show', as: :user_profile, 
                          constraints: { username: /[a-zA-Z0-9_]+/ }
end
=end

# 5. Rails Active Record Migrations
# (db/migrate/20210101120000_create_users.rb)
=begin
class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :email, null: false
      t.string :password_digest
      t.string :first_name
      t.string :last_name
      t.boolean :admin, default: false
      
      t.timestamps
    end
    
    add_index :users, :email, unique: true
    add_index :users, :username, unique: true
  end
end
=end

# 6. Rails Active Record Associations
=begin
class User < ApplicationRecord
  has_many :posts, dependent: :destroy
  has_many :comments
  has_many :likes
  has_one :profile
  belongs_to :team, optional: true
  has_and_belongs_to_many :roles
  has_many :followed_users, through: :follows, source: :followed
end

class Post < ApplicationRecord
  belongs_to :user
  has_many :comments, dependent: :destroy
  has_many :likes, as: :likeable
  has_many :liking_users, through: :likes, source: :user
end
=end

# 7. Rails Action Mailer
=begin
# app/mailers/user_mailer.rb
class UserMailer < ApplicationMailer
  default from: 'notifications@example.com'
  
  def welcome_email
    @user = params[:user]
    @url = 'http://example.com/login'
    
    mail(
      to: @user.email,
      subject: 'Welcome to Our Application'
    )
  end
  
  def password_reset
    @user = params[:user]
    @token = params[:token]
    @url = edit_password_reset_url(@token)
    
    mail to: @user.email, subject: 'Password Reset Instructions'
  end
end

# app/views/user_mailer/welcome_email.html.erb
# <h1>Welcome to Example App, <%= @user.name %></h1>
# <p>
#   You have successfully signed up to example.com,
#   your username is: <%= @user.username %>.<br>
# </p>
# <p>
#   To login to the site, just follow this link: <%= @url %>.
# </p>
# <p>Thanks for joining and have a great day!</p>
=end

# 8. Rails Action Cable (WebSockets)
=begin
# app/channels/chat_channel.rb
class ChatChannel < ApplicationCable::Channel
  def subscribed
    stream_from "chat_#{params[:room]}"
  end
  
  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
  
  def speak(data)
    message = Message.create(
      body: data['message'],
      user: current_user,
      room: params[:room]
    )
    
    ActionCable.server.broadcast(
      "chat_#{params[:room]}",
      message: render_message(message)
    )
  end
  
  private
  
  def render_message(message)
    ApplicationController.renderer.render(
      partial: 'messages/message',
      locals: { message: message }
    )
  end
end
=end

# 9. Rails API-only Application
=begin
# app/controllers/api/v1/posts_controller.rb
module Api
  module V1
    class PostsController < ApplicationController
      before_action :set_post, only: [:show, :update, :destroy]
      
      # GET /api/v1/posts
      def index
        @posts = Post.includes(:user).all
        
        render json: @posts, include: :user
      end
      
      # GET /api/v1/posts/1
      def show
        render json: @post, include: [:user, :comments]
      end
      
      # POST /api/v1/posts
      def create
        @post = current_user.posts.build(post_params)
        
        if @post.save
          render json: @post, status: :created
        else
          render json: { errors: @post.errors }, status: :unprocessable_entity
        end
      end
      
      # PATCH/PUT /api/v1/posts/1
      def update
        if @post.update(post_params)
          render json: @post
        else
          render json: { errors: @post.errors }, status: :unprocessable_entity
        end
      end
      
      # DELETE /api/v1/posts/1
      def destroy
        @post.destroy
        head :no_content
      end
      
      private
      
      def set_post
        @post = Post.find(params[:id])
      end
      
      def post_params
        params.require(:post).permit(:title, :content)
      end
    end
  end
end
=end

# 10. Other Ruby Web Frameworks
# - Hanami (formerly Lotus) - https://hanamirb.org
# - Grape - Ruby API framework - https://github.com/ruby-grape/grape
# - Padrino - Lightweight framework built on Sinatra - http://padrinorb.com
# - Roda - Routing tree web toolkit - https://roda.jeremyevans.net
# - Cuba - Microframework - https://cuba.is

puts "This is an overview of web development with Ruby. The examples above need to be run in proper web applications."`,
              explanation: "This example provides an overview of web development with Ruby, covering several frameworks and techniques. It starts with a simple web server using WEBrick, then demonstrates Sinatra for lightweight web applications. Most of the example focuses on Ruby on Rails, the most popular Ruby web framework, showing its MVC architecture, models with associations and validations, controllers with RESTful actions, views using ERB templates, routing, database migrations, mailers, and WebSockets with Action Cable. It also covers API development with Rails. Most of the code is commented out as it represents fragments from various files in a typical web application structure."
            }
          ],
          quiz: [
            {
              question: "Which of the following is NOT a Ruby web framework?",
              options: [
                "Sinatra",
                "Django",
                "Rails",
                "Hanami"
              ],
              correctAnswer: 1,
              explanation: "Django is a Python web framework, not a Ruby framework. Sinatra, Rails, and Hanami are all web frameworks built with Ruby. Rails is the most popular and comprehensive, Sinatra is lightweight and minimalist, and Hanami (formerly Lotus) is a newer framework that emphasizes clean architecture."
            }
          ],
          flashcards: [
            {
              front: "What is the MVC pattern in Ruby on Rails?",
              back: "MVC (Model-View-Controller) is an architectural pattern Rails uses to organize code. Models handle data, logic, and rules, and interact with the database through Active Record. Views handle the presentation layer, typically using ERB or HAML templates. Controllers receive requests, interact with models, and render views or return data. This separation of concerns makes applications more maintainable and testable."
            },
            {
              front: "What is Active Record in Rails?",
              back: "Active Record is Rails' ORM (Object-Relational Mapping) layer that provides an object-oriented interface to the database. It implements the Active Record pattern, where objects carry both persistent data and behavior. Key features include automatic mapping between tables and classes, associations between models (has_many, belongs_to, etc.), validations, callbacks, and migrations for managing database schema changes."
            }
          ]
        },
        {
          id: "ruby-debugging",
          title: "Debugging and Profiling",
          description: "Tools and techniques for debugging and profiling Ruby code",
          content: `
# Debugging and Profiling in Ruby

Ruby offers various tools for debugging issues and profiling performance bottlenecks in your applications.
          `,
          codeExamples: [
            {
              title: "Debugging and Profiling Techniques",
              code: `# 1. Basic Debugging Techniques

# puts debugging
def calculate_total(items)
  puts "Items: #{items.inspect}"
  total = 0
  
  items.each do |item|
    puts "Processing item: #{item}"
    price = item[:price]
    quantity = item[:quantity]
    subtotal = price * quantity
    puts "Subtotal: #{subtotal}"
    total += subtotal
  end
  
  puts "Final total: #{total}"
  total
end

items = [
  {name: "Widget", price: 10, quantity: 2},
  {name: "Gadget", price: 5, quantity: 3}
]

calculate_total(items)

# Using p instead of puts (shows more detail)
data = {name: "Ruby", version: "3.1.0", features: ["OOP", "Dynamic", "Flexible"]}
p data  # Shows detailed output with quotes, symbols, etc.

# Printing a call stack trace
def method_a
  method_b
end

def method_b
  method_c
end

def method_c
  puts "Call stack:"
  puts caller
end

method_a

# 2. Using the Ruby Debugger (byebug/debug)
# Note: This would require the byebug or debug gem

=begin
def complex_calculation(n)
  # In a real application, you would add a 'debugger' or 'binding.break' statement here
  # debugger  # For byebug
  # binding.break  # For debug.rb (Ruby 3.1+)
  
  result = 0
  n.times do |i|
    result += (i * i)
  end
  result
end

complex_calculation(10)
=end

# 3. Using IRB for Interactive Debugging
# This would be run in an IRB session in a real application

=begin
# In irb:
> require './my_script.rb'
> obj = MyClass.new
> obj.inspect  # Look at the object
> obj.some_method(123)  # Try calling methods
> exit  # Exit IRB
=end

# 4. Logging for Debugging

require 'logger'

# Create a logger
logger = Logger.new(STDOUT)
logger.level = Logger::INFO

# Log levels: DEBUG, INFO, WARN, ERROR, FATAL
logger.debug("This is a debug message")
logger.info("This is an info message")
logger.warn("This is a warning message")
logger.error("This is an error message")
logger.fatal("This is a fatal message")

# Logging to a file
# file_logger = Logger.new('application.log')

# 5. Exception Handling for Debugging

def divide(a, b)
  begin
    result = a / b
  rescue ZeroDivisionError => e
    puts "Error: Division by zero"
    puts "Exception message: #{e.message}"
    puts "Exception backtrace:"
    puts e.backtrace
    result = nil
  end
  result
end

puts divide(10, 2)
puts divide(10, 0)

# 6. Profiling Code Execution Time

require 'benchmark'

def fibonacci_recursive(n)
  return n if n <= 1
  fibonacci_recursive(n-1) + fibonacci_recursive(n-2)
end

def fibonacci_iterative(n)
  return n if n <= 1
  
  a, b = 0, 1
  (2..n).each do |i|
    a, b = b, a + b
  end
  b
end

n = 20

Benchmark.bm(10) do |x|
  x.report("recursive:") { fibonacci_recursive(n) }
  x.report("iterative:") { fibonacci_iterative(n) }
end

# 7. Using Ruby's Profiler
# This requires the 'profile' standard library

=begin
require 'profile'

def process_data(n)
  result = []
  n.times do |i|
    result << fibonacci_recursive(i) if i.even?
  end
  result
end

process_data(20)  # This will be profiled
=end

# 8. Memory Profiling
# This would require the 'memory_profiler' gem

=begin
require 'memory_profiler'

report = MemoryProfiler.report do
  # Code to profile
  objects = []
  1000.times do
    objects << "string-#{rand(1000)}"
  end
end

report.pretty_print
=end

# 9. Using TracePoint API for Debugging

trace = TracePoint.new(:call) do |tp|
  puts "Method called: #{tp.defined_class}##{tp.method_id}"
end

# Enable the trace for a specific block
trace.enable do
  calculate_total(items)
end

# 10. Object Inspection Methods

class Person
  attr_accessor :name, :age
  
  def initialize(name, age)
    @name = name
    @age = age
    @private_data = "sensitive"
  end
  
  def to_s
    "#{name}, #{age} years old"
  end
  
  def inspect
    "#<Person:#{object_id} name=#{name.inspect} age=#{age}>"
  end
end

person = Person.new("Alice", 30)

# Different ways to inspect objects
puts "person: #{person}"  # Uses to_s
puts "inspect: #{person.inspect}"  # Uses inspect
puts "instance variables: #{person.instance_variables}"
puts "methods: #{person.methods - Object.methods}"  # Only Person's methods

# Bonus: Getting a specific caller location
def who_called_me
  caller_info = caller_locations(1,1).first
  "Called by #{caller_info.path}:#{caller_info.lineno} in #{caller_info.label}"
end

def method_x
  puts who_called_me
end

method_x

puts "Debugging and profiling examples completed"`,
              explanation: "This example demonstrates various techniques for debugging and profiling Ruby code. It starts with basic debugging using puts statements and p for detailed output, showing caller stack traces, and then covers more advanced tools like debuggers, interactive debugging with IRB, logging, exception handling for debugging, performance profiling with the Benchmark module, code profiling, memory profiling, and using Ruby's TracePoint API for method call tracing. It also shows different methods for inspecting objects during debugging. Many of the advanced examples reference external tools or gems that would need to be installed in a real environment."
            }
          ],
          quiz: [
            {
              question: "In Ruby, what is the main difference between using puts and p for debugging?",
              options: [
                "puts is faster than p for large objects",
                "p shows more detailed information including object type and structure",
                "puts can only print strings, while p can print any object",
                "p is a part of the Ruby debugger, puts is part of the standard library"
              ],
              correctAnswer: 1,
              explanation: "The main difference is that p provides more detailed information about objects compared to puts. While puts calls to_s on objects and outputs a user-friendly representation, p calls inspect on objects, showing quotes around strings, showing symbols with their colon, and revealing object structure for arrays, hashes, and other objects. This makes p more useful for debugging complex objects."
            }
          ],
          flashcards: [
            {
              front: "What is the caller method in Ruby and how is it useful for debugging?",
              back: "The caller method in Ruby returns an array of strings containing the current execution stack trace — the locations of all methods currently in the execution stack. Each entry shows the file, line number, and method where the call originated. This is useful for debugging to see the path of execution that led to a particular point in your code, especially for tracking down where a method is being called from."
            },
            {
              front: "What is the primary purpose of the Benchmark module in Ruby?",
              back: "The Benchmark module provides methods to measure and report the time used to execute Ruby code. It's primarily used to compare the performance of different implementations of the same functionality (e.g., different algorithms). Common methods include Benchmark.bm for basic benchmarking and Benchmark.ips (iterations per second, from the benchmark-ips gem) for more sophisticated measurements. This helps identify performance bottlenecks in your code."
            }
          ]
        },
        {
          id: "ruby-design-patterns",
          title: "Design Patterns",
          description: "Common design patterns implemented in Ruby",
          content: `
# Design Patterns in Ruby

Design patterns are reusable solutions to common software design problems. Ruby's flexible nature offers unique implementations of these patterns.
          `,
          codeExamples: [
            {
              title: "Common Design Patterns in Ruby",
              code: `# 1. Singleton Pattern
# Ensures a class has only one instance and provides a global point of access to it

require 'singleton'

class Logger
  include Singleton
  
  def initialize
    @logs = []
  end
  
  def log(message)
    @logs << "#{Time.now}: #{message}"
    puts "Logged: #{message}"
  end
  
  def logs
    @logs.dup
  end
end

# Usage
Logger.instance.log("This is a log message")
Logger.instance.log("Another log message")
puts "Logs: #{Logger.instance.logs}"

# 2. Factory Method Pattern
# Defines an interface for creating an object, but lets subclasses decide which class to instantiate

class Product
  attr_reader :name
  
  def initialize(name)
    @name = name
  end
end

class ConcreteProductA < Product
  def use
    "Using concrete product A: #{name}"
  end
end

class ConcreteProductB < Product
  def use
    "Using concrete product B: #{name}"
  end
end

class Creator
  def create_product(type, name)
    case type
    when :a
      ConcreteProductA.new(name)
    when :b
      ConcreteProductB.new(name)
    else
      raise "Unknown product type"
    end
  end
end

# Usage
creator = Creator.new
product_a = creator.create_product(:a, "ProductA")
product_b = creator.create_product(:b, "ProductB")

puts product_a.use
puts product_b.use

# 3. Builder Pattern
# Separates the construction of a complex object from its representation

class Computer
  attr_accessor :cpu, :memory, :storage, :gpu
  
  def to_s
    "Computer with: CPU=#{cpu}, Memory=#{memory}GB, Storage=#{storage}GB, GPU=#{gpu}"
  end
end

class ComputerBuilder
  def initialize
    @computer = Computer.new
  end
  
  def build_cpu(cpu)
    @computer.cpu = cpu
    self
  end
  
  def build_memory(memory)
    @computer.memory = memory
    self
  end
  
  def build_storage(storage)
    @computer.storage = storage
    self
  end
  
  def build_gpu(gpu)
    @computer.gpu = gpu
    self
  end
  
  def computer
    @computer
  end
end

# Usage
computer = ComputerBuilder.new
             .build_cpu("Intel i7")
             .build_memory(16)
             .build_storage(512)
             .build_gpu("NVIDIA RTX 3080")
             .computer

puts computer

# 4. Observer Pattern
# Defines a one-to-many dependency between objects so that when one object changes state, all its dependents are notified

module Subject
  def initialize
    @observers = []
  end
  
  def add_observer(observer)
    @observers << observer
  end
  
  def remove_observer(observer)
    @observers.delete(observer)
  end
  
  def notify_observers
    @observers.each { |observer| observer.update(self) }
  end
end

class NewsPublisher
  include Subject
  
  attr_reader :news
  
  def initialize
    super
    @news = []
  end
  
  def add_news(news)
    @news << news
    notify_observers
  end
end

class NewsSubscriber
  def initialize(name)
    @name = name
  end
  
  def update(publisher)
    puts "#{@name} received news: #{publisher.news.last}"
  end
end

# Usage
publisher = NewsPublisher.new
subscriber1 = NewsSubscriber.new("Subscriber 1")
subscriber2 = NewsSubscriber.new("Subscriber 2")

publisher.add_observer(subscriber1)
publisher.add_observer(subscriber2)

publisher.add_news("Breaking news: Ruby 3.0 released!")

# 5. Strategy Pattern
# Defines a family of algorithms, encapsulates each one, and makes them interchangeable

class Context
  attr_writer :strategy
  
  def initialize(strategy)
    @strategy = strategy
  end
  
  def execute
    @strategy.execute
  end
end

class Strategy
  def execute
    raise NotImplementedError, "#{self.class} has not implemented method '#{__method__}'"
  end
end

class ConcreteStrategyA < Strategy
  def execute
    "Executing strategy A"
  end
end

class ConcreteStrategyB < Strategy
  def execute
    "Executing strategy B"
  end
end

# Usage
context = Context.new(ConcreteStrategyA.new)
puts context.execute

context.strategy = ConcreteStrategyB.new
puts context.execute

# 6. Adapter Pattern
# Allows the interface of an existing class to be used as another interface

class OldSystem
  def initialize(name)
    @name = name
  end
  
  def legacy_method
    "Legacy system: #{@name}"
  end
end

class NewSystem
  def initialize(name)
    @name = name
  end
  
  def modern_method
    "Modern system: #{@name}"
  end
end

class Adapter
  def initialize(adaptee)
    @adaptee = adaptee
  end
  
  def modern_method
    if @adaptee.respond_to?(:modern_method)
      @adaptee.modern_method
    else
      "Adapted: #{@adaptee.legacy_method}"
    end
  end
end

# Usage
systems = [
  NewSystem.new("System1"),
  Adapter.new(OldSystem.new("System2"))
]

systems.each do |system|
  puts system.modern_method
end

# 7. Decorator Pattern
# Attaches additional responsibilities to an object dynamically

class Component
  def operation
    "Basic component"
  end
end

class Decorator
  def initialize(component)
    @component = component
  end
  
  def operation
    @component.operation
  end
end

class ConcreteDecoratorA < Decorator
  def operation
    "#{super} with Decorator A"
  end
end

class ConcreteDecoratorB < Decorator
  def operation
    "#{super} with Decorator B"
  end
end

# Usage
component = Component.new
decorator_a = ConcreteDecoratorA.new(component)
decorator_b = ConcreteDecoratorB.new(decorator_a)

puts component.operation
puts decorator_a.operation
puts decorator_b.operation

# 8. Template Method Pattern
# Defines the skeleton of an algorithm in a method, deferring some steps to subclasses

class AbstractClass
  def template_method
    step_one
    step_two
    step_three
  end
  
  def step_one
    puts "AbstractClass: Step One"
  end
  
  def step_two
    raise NotImplementedError, "#{self.class} has not implemented method '#{__method__}'"
  end
  
  def step_three
    puts "AbstractClass: Step Three"
  end
end

class ConcreteClass < AbstractClass
  def step_two
    puts "ConcreteClass: Step Two"
  end
end

# Usage
concrete = ConcreteClass.new
concrete.template_method

# 9. Command Pattern
# Encapsulates a request as an object, allowing for parameterization of clients with different requests

class Command
  def execute
    raise NotImplementedError
  end
end

class LightOnCommand < Command
  def initialize(light)
    @light = light
  end
  
  def execute
    @light.turn_on
  end
end

class LightOffCommand < Command
  def initialize(light)
    @light = light
  end
  
  def execute
    @light.turn_off
  end
end

class Light
  def turn_on
    puts "Light is on"
  end
  
  def turn_off
    puts "Light is off"
  end
end

class RemoteControl
  def initialize
    @commands = {}
  end
  
  def set_command(slot, command)
    @commands[slot] = command
  end
  
  def press_button(slot)
    @commands[slot].execute if @commands[slot]
  end
end

# Usage
light = Light.new
light_on = LightOnCommand.new(light)
light_off = LightOffCommand.new(light)

remote = RemoteControl.new
remote.set_command(:on, light_on)
remote.set_command(:off, light_off)

remote.press_button(:on)
remote.press_button(:off)

# 10. Proxy Pattern
# Provides a surrogate or placeholder for another object to control access to it

class RealObject
  def perform
    puts "RealObject: performing operation"
  end
end

class Proxy
  def initialize
    @real_object = nil
  end
  
  def perform
    @real_object = RealObject.new unless @real_object
    puts "Proxy: logging before forwarding to real object"
    @real_object.perform
    puts "Proxy: logging after forwarding"
  end
end

# Usage
proxy = Proxy.new
proxy.perform

puts "Design patterns examples completed"`,
              explanation: "This example demonstrates ten common design patterns implemented in Ruby. The Singleton pattern ensures a class has only one instance. The Factory Method pattern defines an interface for creating objects. The Builder pattern separates construction from representation. The Observer pattern creates a one-to-many dependency between objects. The Strategy pattern makes algorithms interchangeable. The Adapter pattern converts one interface to another. The Decorator pattern adds responsibilities to objects dynamically. The Template Method pattern defers steps to subclasses. The Command pattern encapsulates requests as objects. The Proxy pattern controls access to objects. Each pattern solves a specific design problem and takes advantage of Ruby's flexible features like modules, blocks, and dynamic typing."
            }
          ],
          quiz: [
            {
              question: "Which design pattern is most appropriate when you need to ensure a class has only one instance across the entire application?",
              options: [
                "Factory Method",
                "Singleton",
                "Builder",
                "Adapter"
              ],
              correctAnswer: 1,
              explanation: "The Singleton pattern is specifically designed to ensure a class has only one instance and provides a global point of access to that instance. In Ruby, the Singleton module in the standard library makes it easy to implement this pattern by disabling the new method and providing an instance class method to access the single instance."
            }
          ],
          flashcards: [
            {
              front: "What is the main purpose of the Builder design pattern?",
              back: "The Builder pattern separates the construction of a complex object from its representation. It allows the same construction process to create different representations. This is useful when an object requires many steps to build it or when the construction needs to create different representations. In Ruby, it's often implemented with a fluent interface using method chaining."
            },
            {
              front: "How does Ruby's implementation of design patterns differ from languages like Java or C++?",
              back: "Ruby's implementation of design patterns tends to be more concise and flexible due to its dynamic nature, duck typing, modules, blocks, and metaprogramming capabilities. While traditional languages might use abstract classes and interfaces, Ruby often uses modules, mixins, blocks, and dynamic method definition. Many patterns that require complex structures in static languages can be implemented more elegantly in Ruby, sometimes to the point where they blend into the language itself."
            }
          ]
        },
        {
          id: "ruby-functional",
          title: "Functional Programming",
          description: "Functional programming techniques in Ruby",
          content: `
# Functional Programming in Ruby

While Ruby is primarily object-oriented, it supports many functional programming concepts that can make your code more concise and maintainable.
          `,
          codeExamples: [
            {
              title: "Functional Programming Techniques",
              code: `# 1. First-class functions
# Functions (methods) can be assigned to variables and passed as arguments

# Method as a Proc object
add = lambda { |a, b| a + b }
subtract = lambda { |a, b| a - b }

puts "2 + 3 = #{add.call(2, 3)}"
puts "5 - 2 = #{subtract.call(5, 2)}"

# Higher-order functions - functions that take other functions as arguments
def apply_operation(a, b, operation)
  operation.call(a, b)
end

puts "Apply add: #{apply_operation(5, 3, add)}"
puts "Apply subtract: #{apply_operation(5, 3, subtract)}"

# Symbol to proc for passing methods
['apple', 'banana', 'cherry'].map(&:upcase)  # => ["APPLE", "BANANA", "CHERRY"]

# 2. Pure functions
# Functions that have no side effects and always return the same output for the same input

# Pure function
def add_numbers(a, b)
  a + b  # Always returns the same result for the same inputs
end

# Impure function (has side effect)
def add_with_side_effect(a, b)
  result = a + b
  puts "The result is #{result}"  # Side effect (output)
  result
end

puts "Pure add: #{add_numbers(2, 3)}"
puts "Impure add: #{add_with_side_effect(2, 3)}"

# 3. Immutability
# Once created, objects should not be modified

# Using freeze for immutability
point = [10, 20].freeze
# point[0] = 5  # This would raise a FrozenError

# Returning new objects instead of modifying
def add_to_array(array, item)
  # Return a new array with the item added rather than modifying the original
  array + [item]
end

numbers = [1, 2, 3]
new_numbers = add_to_array(numbers, 4)
puts "Original array: #{numbers}"
puts "New array: #{new_numbers}"

# 4. Function composition
# Combining functions to create new functions

# Simple composition
square = ->(x) { x * x }
double = ->(x) { x * 2 }

square_then_double = ->(x) { double.call(square.call(x)) }
double_then_square = ->(x) { square.call(double.call(x)) }

puts "3² × 2 = #{square_then_double.call(3)}"    # 18
puts "3 × 2² = #{double_then_square.call(3)}"    # 36

# Composition with reduce
def compose(*functions)
  ->(x) { functions.reverse.reduce(x) { |result, f| f.call(result) } }
end

add_one = ->(x) { x + 1 }
multiply_by_two = ->(x) { x * 2 }
subtract_three = ->(x) { x - 3 }

composed = compose(subtract_three, multiply_by_two, add_one)
puts "((5 + 1) × 2) - 3 = #{composed.call(5)}"  # 9

# 5. Recursion
# Functions that call themselves

# Recursive factorial
def factorial(n)
  return 1 if n <= 1
  n * factorial(n - 1)
end

puts "Factorial of 5: #{factorial(5)}"  # 120

# Recursive Fibonacci
def fibonacci(n)
  return n if n <= 1
  fibonacci(n - 1) + fibonacci(n - 2)
end

puts "Fibonacci of 10: #{fibonacci(10)}"  # 55

# 6. Closures
# Functions that capture their surrounding lexical environment

def create_multiplier(factor)
  ->(x) { x * factor }
end

double = create_multiplier(2)
triple = create_multiplier(3)

puts "Double 5: #{double.call(5)}"  # 10
puts "Triple 5: #{triple.call(5)}"  # 15

# 7. Currying
# Transforming a function with multiple arguments into a sequence of functions, each with a single argument

add = ->(a, b) { a + b }
add_curried = add.curry

add_five = add_curried.call(5)
puts "5 + 3 = #{add_five.call(3)}"  # 8

# 8. Partial application
# Fixing a number of arguments to a function, producing another function of smaller arity

def greet(greeting, name)
  "#{greeting}, #{name}!"
end

hello = method(:greet).curry.call("Hello")
bonjour = method(:greet).curry.call("Bonjour")

puts hello.call("Alice")    # "Hello, Alice!"
puts bonjour.call("Bob")    # "Bonjour, Bob!"

# 9. Higher order array operations
# map, filter, reduce for working with collections in a functional style

numbers = [1, 2, 3, 4, 5]

# Map - transform each element
squares = numbers.map { |n| n * n }
puts "Squares: #{squares}"  # [1, 4, 9, 16, 25]

# Filter (select) - keep elements that match a condition
even_numbers = numbers.select { |n| n.even? }
puts "Even numbers: #{even_numbers}"  # [2, 4]

# Reduce (inject) - combine elements to a single value
sum = numbers.reduce(0) { |acc, n| acc + n }
puts "Sum: #{sum}"  # 15

product = numbers.reduce(1) { |acc, n| acc * n }
puts "Product: #{product}"  # 120

# 10. Function memoization
# Caching results of expensive function calls for reuse

def memoize(func)
  cache = {}
  ->(*args) {
    key = args
    if cache.has_key?(key)
      puts "Cache hit for #{key}"
      cache[key]
    else
      puts "Cache miss for #{key}"
      cache[key] = func.call(*args)
    end
  }
end

expensive_fibonacci = memoize(->n {
  return n if n <= 1
  expensive_fibonacci.call(n - 1) + expensive_fibonacci.call(n - 2)
})

puts "Fibonacci(5): #{expensive_fibonacci.call(5)}"
puts "Fibonacci(5) again: #{expensive_fibonacci.call(5)}"  # Uses cached result

# 11. Lazy evaluation
# Only computing values when they are needed

# Infinite sequence of fibonacci numbers (lazy)
fibonacci_sequence = Enumerator.new do |yielder|
  a, b = 0, 1
  loop do
    yielder << a
    a, b = b, a + b
  end
end.lazy

puts "First 10 Fibonacci numbers:"
puts fibonacci_sequence.take(10).to_a.inspect

# 12. Pattern matching (Ruby 2.7+)
# Destructuring data structures and matching patterns

case [1, 2, 3]
in [a, 2, 3]
  puts "Matched with a = #{a}"
end

case {name: "Alice", age: 30}
in {name: "Alice", age:}
  puts "Alice is #{age} years old"
end

# 13. Functional-style pipeline with the then method (Ruby 2.6+)
result = 5.then { |x| x + 1 }
         .then { |x| x * 2 }
         .then { |x| x - 3 }

puts "Pipeline result: #{result}"  # ((5 + 1) * 2) - 3 = 9

puts "Functional programming examples completed"`,
              explanation: "This example demonstrates functional programming techniques in Ruby. It covers first-class functions, pure functions (no side effects), immutability using freeze, function composition, recursion, closures, currying, partial application, higher-order array operations (map, filter, reduce), function memoization for caching results, lazy evaluation for working with infinite sequences, pattern matching for destructuring data, and functional pipelines using the then method. These techniques can make code more concise, maintainable, and less prone to certain types of bugs by minimizing state and side effects."
            }
          ],
          quiz: [
            {
              question: "Which of the following is a key principle of functional programming demonstrated in the example?",
              options: [
                "Inheritance hierarchies",
                "Immutability",
                "Global state",
                "Encapsulation"
              ],
              correctAnswer: 1,
              explanation: "Immutability is a key principle of functional programming, where data structures are not modified after creation but instead new structures are created with the desired changes. This helps avoid side effects and makes code more predictable. The example demonstrates this by freezing objects and returning new arrays instead of modifying existing ones."
            }
          ],
          flashcards: [
            {
              front: "What is a pure function in functional programming?",
              back: "A pure function is a function that has no side effects (doesn't modify state outside its scope or interact with the outside world) and always returns the same output for the same input. Pure functions are easier to test, understand, and parallelize. In the example, add_numbers is a pure function, while add_with_side_effect is not because it has the side effect of printing to the console."
            },
            {
              front: "What is the difference between currying and partial application in functional programming?",
              back: "Currying transforms a function with multiple arguments into a sequence of functions, each taking a single argument. When called with one argument, it returns a new function that takes the next argument, and so on. Partial application, on the other hand, fixes a specific number of arguments to a function, producing another function of smaller arity. The difference is that currying always produces unary functions (taking one argument), while partial application can fix any number of arguments."
            }
          ]
        },
        {
          id: "ruby-style",
          title: "Ruby Style Guide",
          description: "Best practices for writing clean and idiomatic Ruby code",
          content: `
# Ruby Style Guide

Following consistent style guidelines makes your Ruby code more readable and maintainable.
          `,
          codeExamples: [
            {
              title: "Ruby Style Best Practices",
              code: `# 1. Code Layout and Formatting

# Use 2 spaces for indentation (not tabs)
def good_indentation
  if true
    puts "Properly indented"
  end
end

# Maximum line length is around 80-100 characters
# Long lines should be broken up
long_string = "This is a very long string that would exceed the recommended line" \
              " length limit, so it should be broken up like this."

# Spaces around operators
result = 1 + 2 * 3 / 4

# No space after opening or before closing parentheses
def method_call(arg1, arg2)
  # Good
end

# Space after commas
[1, 2, 3, 4, 5]

# 2. Naming Conventions

# Snake_case for methods and variables
def calculate_total_price(base_price, tax_rate)
  # ...
end

# CamelCase for classes and modules
class UserAuthentication
  # ...
end

module TextFormatting
  # ...
end

# SCREAMING_SNAKE_CASE for constants
MAX_LOGIN_ATTEMPTS = 3
DEFAULT_CONFIG = { timeout: 30, retries: 3 }.freeze

# Predicate methods (return true/false) end with question mark
def valid?
  # ...
end

def admin?
  # ...
end

# Dangerous methods (modify self) end with exclamation mark
def save!
  # ...
end

# 3. Classes and Modules

# One class per file, named the same as the file (user.rb contains User class)

# Prefer instance methods over class methods
class User
  # Good
  def full_name
    "#{first_name} #{last_name}"
  end
  
  # Use sparingly
  def self.find_by_email(email)
    # ...
  end
end

# Order of class methods and attributes
class Person
  # extend and include go first
  extend SomeModule
  include AnotherModule
  
  # inner classes
  class InnerClass
    # ...
  end
  
  # constants
  SOME_CONSTANT = 20
  
  # attribute macros
  attr_reader :name
  
  # other macros (if/whenever needed)
  validates :name, presence: true
  
  # public class methods
  def self.some_method
    # ...
  end
  
  # initialization goes between class methods and other instance methods
  def initialize(name)
    @name = name
  end
  
  # public instance methods
  def some_method
    # ...
  end
  
  # protected and private methods are grouped near the end
  protected
  
  def some_protected_method
    # ...
  end
  
  private
  
  def some_private_method
    # ...
  end
end

# 4. Collections

# Use %w for arrays of words
cities = %w[New\ York London Paris Tokyo]

# Use %i for arrays of symbols
states = %i[Alabama Alaska Arizona Arkansas]

# Use the Ruby 1.9+ hash syntax when keys are symbols
# Good
options = { font_size: 10, font_family: 'Arial' }

# Avoid unless with multiple conditions or complex expressions
# Good
if age >= 18
  puts "Adult"
end

# Bad
# unless age < 18
#   puts "Adult"
# end

# 5. Strings

# Prefer string interpolation over concatenation
name = "Alice"
# Good
greeting = "Hello, #{name}!"
# Bad
# greeting = "Hello, " + name + "!"

# Use single quotes when not doing interpolation
message = 'This is a simple message.'

# 6. Conditionals

# No parentheses around conditions
if x > 10
  # ...
end

# Use ternary operator for simple conditionals
result = age >= 18 ? "Adult" : "Minor"

# Use if/unless as modifiers for single-line conditions
puts "Adult" if age >= 18
return unless valid?

# case statements
case status
when :active
  activate_user
when :inactive
  deactivate_user
else
  raise "Invalid status"
end

# Avoid explicit returns
def full_name(user)
  "#{user.first_name} #{user.last_name}"
end

# Use the === operator with case
case number
when 0..9
  puts "Single digit"
when 10..99
  puts "Two digits"
else
  puts "Three or more digits"
end

# 7. Methods

# Use implicit returns (last expression is the return value)
def full_name
  "#{first_name} #{last_name}"
end

# Use keyword arguments for options
def draw_line(from:, to:, color: "black", width: 1)
  # ...
end

# Avoid more than 3 levels of nesting
def parse_data
  data.each do |item|
    item.parts.each do |part|
      # Avoid more nesting
    end
  end
end

# 8. Comments

# Use RDoc/YARD syntax for documenting code
# Good:

# Calculates the total price including tax
#
# @param base_price [Float] the base price of the item
# @param tax_rate [Float] the tax rate as a decimal
# @return [Float] the total price
def calculate_total_price(base_price, tax_rate)
  base_price * (1 + tax_rate)
end

# 9. Exceptions

# Use raise to raise exceptions
raise ArgumentError, "Name cannot be blank" if name.blank?

# Use meaningful exception classes
class ValidationError < StandardError; end

# Always use begin/rescue/end for exception handling
begin
  # code that might raise an exception
rescue SpecificError => e
  # handle specific error
rescue => e
  # handle any other error
ensure
  # ensure this runs regardless of exception
end

# 10. Collections Processing

# Prefer iterators over for loops
# Good
[1, 2, 3].each { |n| puts n }

# Bad
# for n in [1, 2, 3]
#   puts n
# end

# Use map instead of collect, find instead of detect, etc.
squares = [1, 2, 3].map { |n| n * n }
even = [1, 2, 3, 4].find { |n| n.even? }

# 11. Metaprogramming

# Avoid using method_missing unless absolutely necessary
# Prefer using define_method for metaprogramming

# 12. Misc

# Avoid global variables ($var)
# Good
CONST_VAR = 'A constant'
# Bad
# $global_var = 'Global variable'

# Use the -> syntax for creating lambdas with arguments
add = ->(a, b) { a + b }
puts add.call(1, 2)

# Use the &: shorthand for block calls when possible
names = ['alice', 'bob', 'charlie']
names.map(&:capitalize)  # => ["Alice", "Bob", "Charlie"]

# Use _ for unused block parameters
hash.map { |_, v| v }

# Use parallel assignment when applicable
a, b = [1, 2]
a, b = b, a  # swap variables

# Use Ruby's built-in English versions of Boolean operators
# Good
if valid && ready?
  # ...
end

# Bad
# if valid and ready?
#   # ...
# end

puts "Style guide examples completed"`,
              explanation: "This example demonstrates Ruby style best practices based on community standards like the Ruby Style Guide and common conventions. It covers code layout, naming conventions, class and module organization, collections, strings, conditionals, methods, comments, exceptions, collections processing, metaprogramming best practices, and miscellaneous recommendations. Following these conventions makes Ruby code more readable, maintainable, and idiomatic. These practices are commonly enforced by tools like RuboCop."
            }
          ],
          quiz: [
            {
              question: "According to Ruby style guidelines, what's the recommended naming convention for methods and variables?",
              options: [
                "CamelCase (e.g., CalculateTotal)",
                "snake_case (e.g., calculate_total)",
                "PascalCase (e.g., CalculateTotal)",
                "SCREAMING_SNAKE_CASE (e.g., CALCULATE_TOTAL)"
              ],
              correctAnswer: 1,
              explanation: "In Ruby, the recommended naming convention for methods and variables is snake_case, where words are lowercase and separated by underscores (e.g., calculate_total, first_name). Classes and modules use CamelCase (e.g., UserAuthentication), and constants use SCREAMING_SNAKE_CASE (e.g., MAX_LOGIN_ATTEMPTS)."
            }
          ],
          flashcards: [
            {
              front: "What does it mean when a Ruby method ends with a question mark (?)?",
              back: "When a Ruby method name ends with a question mark (e.g., valid?, admin?), it indicates a 'predicate method' that returns a boolean value (true or false). This is a naming convention that makes the code more readable; the method answers a yes/no question about the object it's called on. For example, array.empty? returns true if the array has no elements."
            },
            {
              front: "What does it mean when a Ruby method ends with an exclamation mark (!)?",
              back: "When a Ruby method name ends with an exclamation mark (e.g., save!, delete!), it indicates a 'dangerous' or 'destructive' method that modifies its receiver or has some significant side effect. Often, there is a safer, non-destructive version without the exclamation mark. For example, array.sort returns a new sorted array, while array.sort! sorts the original array in place."
            }
          ]
        },
        {
          id: "ruby-ecosystem",
          title: "The Ruby Ecosystem",
          description: "Understanding the Ruby ecosystem and community",
          content: `
# The Ruby Ecosystem

The Ruby ecosystem consists of tools, libraries, frameworks, and a vibrant community that make Ruby a productive language for various applications.
          `,
          codeExamples: [
            {
              title: "Ruby Ecosystem Overview",
              code: `# This is primarily informational content about the Ruby ecosystem
# Most of these are references, not executable code

# 1. Ruby Versions and Implementations

# MRI/CRuby - The reference implementation of Ruby
# ruby --version
# ruby 3.2.2 (2023-03-30 revision e51014f9c0) [x86_64-linux]

# JRuby - Ruby on the JVM
# jruby --version
# jruby 9.4.2.0 (3.1.4) 2023-03-10

# TruffleRuby - High-performance Ruby implementation
# truffleruby --version
# truffleruby 23.0.1, like ruby 3.1.4

# 2. Package Management

# RubyGems - Ruby's package manager
# gem list # list installed gems
# gem install nokogiri # install a gem

# Bundler - Dependency management
# bundle install # Install dependencies from Gemfile
# bundle update # Update dependencies

# Example Gemfile
=begin
source 'https://rubygems.org'

gem 'rails', '~> 7.0.0'
gem 'pg', '~> 1.1'
gem 'puma', '~> 5.0'
gem 'sass-rails', '>= 6'
gem 'webpacker', '~> 5.0'
gem 'turbolinks', '~> 5'

group :development, :test do
  gem 'byebug'
  gem 'rspec-rails'
end

group :development do
  gem 'web-console'
  gem 'listen'
  gem 'spring'
end

group :test do
  gem 'capybara'
  gem 'selenium-webdriver'
end
=end

# 3. Major Ruby Frameworks and Libraries

# Web Frameworks
puts "Ruby on Rails - Full-featured web framework: https://rubyonrails.org"
puts "Sinatra - Lightweight web framework: http://sinatrarb.com"
puts "Hanami - Modern web framework: https://hanamirb.org"
puts "Grape - API framework: https://github.com/ruby-grape/grape"

# Testing
puts "RSpec - Testing framework: https://rspec.info"
puts "Minitest - Built-in testing framework: https://github.com/minitest/minitest"
puts "Cucumber - BDD testing: https://cucumber.io"
puts "Capybara - Web application testing: https://github.com/teamcapybara/capybara"

# Web Servers
puts "Puma - Modern web server: https://puma.io"
puts "Unicorn - HTTP server: https://bogomips.org/unicorn/"
puts "Passenger - Production app server: https://www.phusionpassenger.com"

# Background Processing
puts "Sidekiq - Background job processing: https://sidekiq.org"
puts "Resque - Job queue based on Redis: https://github.com/resque/resque"

# Database Tools
puts "Active Record - ORM (part of Rails): https://guides.rubyonrails.org/active_record_basics.html"
puts "Sequel - Database toolkit: https://github.com/jeremyevans/sequel"

# API Clients
puts "HTTParty - Simple HTTP client: https://github.com/jnunemaker/httparty"
puts "Faraday - HTTP client library: https://github.com/lostisland/faraday"

# DevOps & Deployment
puts "Capistrano - Deployment automation: https://capistranorb.com"
puts "Mina - Fast deployer: https://github.com/mina-deploy/mina"

# 4. Ruby Version Management

# RVM - Ruby Version Manager
# rvm install 3.2.0
# rvm use 3.2.0

# rbenv - Ruby environment manager
# rbenv install 3.2.0
# rbenv global 3.2.0

# asdf - Multi-language version manager
# asdf plugin add ruby
# asdf install ruby 3.2.0
# asdf global ruby 3.2.0

# 5. Ruby Community and Resources

# Community
puts "RubyGems.org - Ruby package registry: https://rubygems.org"
puts "Ruby Toolbox - Find gems by category: https://www.ruby-toolbox.com"
puts "Ruby Weekly - Newsletter: https://rubyweekly.com"
puts "Ruby Inside - Blog: https://rubyinside.com"

# Documentation
puts "Ruby-Doc.org - Official documentation: https://ruby-doc.org"
puts "RubyGuides - Tutorials: https://www.rubyguides.com"

# Conferences
puts "RubyConf - Main conference: https://rubyconf.org"
puts "RailsConf - Rails conference: https://railsconf.com"
puts "RubyKaigi - Japanese Ruby conference: https://rubykaigi.org"

# 6. Development Tools

# Code Quality and Analysis
puts "RuboCop - Linter and formatter: https://rubocop.org"
puts "Brakeman - Security scanner: https://brakemanscanner.org"
puts "Fasterer - Performance suggestions: https://github.com/DamirSvrtan/fasterer"

# Debugging
puts "Byebug - Debugger: https://github.com/deivid-rodriguez/byebug"
puts "Pry - Enhanced REPL: https://pry.github.io"

# Documentation
puts "YARD - Documentation generator: https://yardoc.org"

# 7. Ruby Code Structure Example

# Example of a typical Ruby gem structure
=begin
my_gem/
├── .gitignore
├── .rubocop.yml
├── .github/
│   └── workflows/
│       └── ci.yml
├── bin/
│   ├── console
│   └── setup
├── lib/
│   ├── my_gem.rb
│   └── my_gem/
│       ├── version.rb
│       └── core.rb
├── spec/
│   ├── spec_helper.rb
│   └── my_gem_spec.rb
├── Gemfile
├── LICENSE.txt
├── README.md
├── Rakefile
└── my_gem.gemspec
=end

# 8. Ruby Package Registries

# • RubyGems.org - The official Ruby package registry
# • GitHub Packages - Can also host Ruby gems
# • GemFury - Private gem hosting

# 9. Typical Development Workflow

puts "1. Create application structure (manually or with rails new)"
puts "2. Set up version control (git init, git add, git commit)"
puts "3. Define dependencies in Gemfile"
puts "4. Install dependencies (bundle install)"
puts "5. Write tests (RSpec, Minitest)"
puts "6. Implement code to satisfy tests"
puts "7. Check code quality (RuboCop)"
puts "8. Run tests (rspec, rake test)"
puts "9. Commit changes"
puts "10. Deploy application (Capistrano, Heroku)"

# 10. Popular Ruby Applications and Use Cases

puts "Web Applications - Ruby on Rails, Sinatra"
puts "APIs and Microservices - Rails API, Grape, Sinatra"
puts "DevOps Tooling - Chef, Puppet"
puts "Static Site Generation - Jekyll, Middleman"
puts "Automation Scripts - Custom Ruby scripts"
puts "Data Processing - Custom processing with gems like CSV, Nokogiri"

# 11. Ruby Meta-programming Example

module Accessor
  def my_attr_accessor(*names)
    names.each do |name|
      # Create a getter method
      define_method(name) do
        instance_variable_get("@#{name}")
      end
      
      # Create a setter method
      define_method("#{name}=") do |value|
        instance_variable_set("@#{name}", value)
      end
    end
  end
end

class Person
  extend Accessor
  
  my_attr_accessor :name, :age
end

person = Person.new
person.name = "Ruby"
person.age = 30
puts "#{person.name} is #{person.age} years old"

puts "Ruby ecosystem overview completed"`,
              explanation: "This example provides an informational overview of the Ruby ecosystem, covering major components like Ruby implementations (MRI/CRuby, JRuby, TruffleRuby), package management with RubyGems and Bundler, popular frameworks and libraries (Rails, Sinatra, RSpec, etc.), version managers (RVM, rbenv, asdf), community resources, development tools, typical project structures, and common workflows. It's meant as a reference guide to the broader Ruby environment rather than executable code, though it does include a meta-programming example at the end to demonstrate Ruby's flexibility."
            }
          ],
          quiz: [
            {
              question: "Which of the following is NOT a Ruby version manager mentioned in the overview?",
              options: [
                "RVM",
                "rbenv",
                "asdf",
                "npm"
              ],
              correctAnswer: 3,
              explanation: "npm (Node Package Manager) is not a Ruby version manager; it's a package manager for JavaScript/Node.js. The Ruby version managers mentioned in the overview are RVM (Ruby Version Manager), rbenv, and asdf (which can manage versions for multiple languages including Ruby)."
            }
          ],
          flashcards: [
            {
              front: "What is the difference between RubyGems and Bundler?",
              back: "RubyGems is Ruby's package manager that handles the installation and management of individual gems (libraries). Bundler is a dependency manager that works with RubyGems to ensure a consistent set of gems is used across development, testing, and production environments. Bundler uses a Gemfile to specify project dependencies and creates a Gemfile.lock to lock versions, while RubyGems manages the central repository and installation process."
            },
            {
              front: "What are the main Ruby implementations and how do they differ?",
              back: "The main Ruby implementations are: 1) MRI/CRuby - the reference implementation written in C, 2) JRuby - Ruby on the Java Virtual Machine, offering Java interoperability, 3) TruffleRuby - a high-performance implementation on GraalVM. They differ in performance characteristics, platform compatibility, garbage collection, concurrency model (MRI has a Global Interpreter Lock while JRuby doesn't), and ability to interface with other languages (JRuby with Java, TruffleRuby with other GraalVM languages)."
            }
          ]
        },
        {
          id: "ruby-future",
          title: "The Future of Ruby",
          description: "Recent developments and future directions of Ruby",
          content: `
# The Future of Ruby

Ruby continues to evolve with new features, performance improvements, and adaptations to modern programming needs.
          `,
          codeExamples: [
            {
              title: "Recent and Future Ruby Features",
              code: `# This is primarily informational content about Ruby's future
# Many of these features require Ruby 3.0+ to run

# 1. Ruby 3.0 (Released December 2020) - "Ruby 3x3" Initiative

# 1.1 Performance Improvements
# Ruby 3.0 aimed to be 3 times faster than Ruby 2.0

# 1.2 Concurrency with Ractor
# Ractors enable parallel execution without thread-safety concerns
=begin
# This requires Ruby 3.0+
ractor1 = Ractor.new do
  puts "Ractor 1 working..."
  "Result from Ractor 1"
end

ractor2 = Ractor.new do
  puts "Ractor 2 working..."
  "Result from Ractor 2"
end

# Get results
puts ractor1.take
puts ractor2.take
=end

# 1.3 Type Checking with RBS and TypeProf
# RBS - Ruby type signature language
=begin
# example.rbs
class User
  attr_reader name: String
  attr_reader age: Integer
  
  def initialize: (name: String, age: Integer) -> void
  def adult?: -> bool
  def display_profile: -> String
end
=end

# 1.4 Pattern Matching (Refined in Ruby 3.0)
case [1, 2, 3]
in [a, 2, 3]
  puts "Matched: a = #{a}"
end

# Hash pattern matching
case {name: "Alice", age: 30}
in {name: "Alice", age:}
  puts "Found Alice, age #{age}"
end

# 1.5 Rightward Assignment (New in 3.0)
# This assigns the right value to the left variable
# 42 => x

# 2. Ruby 3.1 (Released December 2021)

# 2.1 Improved Pattern Matching with Pin Operator
=begin
pattern = [1, 2]
case [1, 2, 3]
in [*^pattern, 3]
  puts "Matches pattern followed by 3"
end
=end

# 2.2 One-Line Pattern Matching with =~
=begin
users = [{name: "Alice", age: 20}, {name: "Bob", age: 30}]

# Find users older than 25
users.filter { |user| user =~ {age: 25..} }
=end

# 2.3 New Shorthand Method Syntax for Arguments
=begin
def squared(n) = n * n

# Is equivalent to:
def squared(n)
  n * n
end
=end

# 3. Ruby 3.2 (Released December 2022)

# 3.1 WASI Support for WebAssembly
# Ruby can now be compiled to WebAssembly

# 3.2 Regexp Timeout
# Helps prevent Regular Expression DoS attacks
=begin
Regexp.timeout = 1.0  # Set a timeout of 1 second for regex operations
/a*b*c*d*e*f*g*/.match("a" * 1_000_000)  # Will timeout after 1 second
=end

# 3.3 Data Class
=begin
class Point < Data.define(:x, :y)
end

point = Point.new(x: 1, y: 2)
puts point.x  # 1
puts point.y  # 2

# Points with the same coordinates are equal
puts Point.new(x: 1, y: 2) == Point.new(x: 1, y: 2)  # true
=end

# 4. Ruby 3.3 (Released December 2023)

# 4.1 JIT Improvements
# RJIT and YJIT improvements

# 4.2 Better Parsing Error Messages
=begin
# Invalid syntax will give more helpful error messages
def example(
  # Missing closing parenthesis
=end

# 5. Future Ruby Features and Directions

# 5.1 JIT Compilation Improvements
puts "JIT (Just-In-Time) compilation continues to be improved for better performance"

# 5.2 Built-in Typed Ruby
puts "More integrated typing system, building on RBS and TypeProf"

# 5.3 Improved Concurrency Models
puts "Further development of Ractor and other concurrency primitives"

# 5.4 Value Objects and Immutability
puts "More built-in support for value objects and immutable data structures"

# 5.5 Continued Standard Library Improvements
puts "Regular updates and improvements to the standard library"

# 5.6 Language Simplification
puts "Removing deprecated features and simplifying language constructs"

# 5.7 HTTP/3 and Modern Protocol Support
puts "Better support for modern web protocols"

# 5.8 Ruby for Machine Learning and Data Science
puts "Enhanced capabilities for data science and ML applications"

# 6. Community Trends and Developments

# 6.1 Increased TypeScript-like Type Safety
puts "More developers are using type checking with RBS files and tools like Sorbet"

# 6.2 Ruby in Edge Computing
puts "Ruby for serverless functions and edge computing"

# 6.3 Ruby in GitHub Actions and DevOps
puts "Ruby for automation, CI/CD, and infrastructure as code"

# 6.4 Revival of Smaller Ruby Web Frameworks
puts "Focus on smaller, faster frameworks alongside Rails"

# 6.5 Ruby in WebAssembly
puts "Running Ruby in browsers and edge environments through WebAssembly"

# 7. Demo of Some Newer Ruby Features

# Pattern matching with array and hash 
case {name: "Ruby", version: "3.2.2", features: ["Ractor", "RBS"]}
in {name: "Ruby", version:, features: [first, *rest]}
  puts "Ruby version #{version} with first feature: #{first}"
  puts "Remaining features: #{rest.join(', ')}"
end

# Endless method definitions (Ruby 3.0+)
# These compact methods are ideal for simple one-liners
def square(x) = x * x
def greet(name) = "Hello, #{name}!"

puts square(5)     # 25
puts greet("Ruby") # Hello, Ruby!

# Find method for Enumerable
numbers = [1, 2, 3, 4, 5]
puts numbers.find(-> { "Not found" }) { |n| n > 10 }  # Not found

# Beginless range (Ruby 2.7+)
alphabet = ("a".."z").to_a
puts alphabet[..5].join  # "abcdef"

# Calling a method with leading argument as a block
def process_data(data, &transform)
  data.map(&transform)
end

result = process_data([1, 2, 3], &:to_s)
puts result.inspect  # ["1", "2", "3"]

puts "Future of Ruby examples completed"`,
              explanation: "This example provides an informational overview of recent and upcoming Ruby features, starting with Ruby 3.0's 'Ruby 3x3' performance initiative, Ractors for concurrency, RBS for type signatures, and pattern matching. It covers features from Ruby 3.1 like enhanced pattern matching and shorthand method syntax, Ruby 3.2 additions like WASI support and the Data class, and Ruby 3.3 improvements. It also explores future directions in JIT compilation, typing, concurrency, value objects, and areas where Ruby is growing. The code demonstrates some newer features that are available in current Ruby versions, including pattern matching, endless method definitions, and beginless ranges."
            }
          ],
          quiz: [
            {
              question: "What major feature introduced in Ruby 3.0 enables true parallel execution without the limitations of the Global Interpreter Lock (GIL)?",
              options: [
                "Fibers",
                "Threads",
                "Ractors",
                "Processes"
              ],
              correctAnswer: 2,
              explanation: "Ractors (short for 'Ruby Actors') were introduced in Ruby 3.0 to enable true parallel execution without the limitations of the Global Interpreter Lock (GIL). Ractors are isolated concurrent execution units that don't share objects, allowing Ruby programs to utilize multiple CPU cores for parallel computation while maintaining thread safety."
            }
          ],
          flashcards: [
            {
              front: "What is RBS in Ruby and why is it important?",
              back: "RBS (Ruby Signature) is a language to describe the types of Ruby programs, introduced in Ruby 3.0. It allows developers to write type definitions separately from their Ruby code, enabling optional static type checking through tools like TypeProf and Steep. RBS is important because it brings the benefits of static typing (catching errors at compile time, better documentation, editor support) while maintaining Ruby's dynamic nature. It represents Ruby's approach to gradual typing."
            },
            {
              front: "What are the key performance initiatives in modern Ruby versions?",
              back: "Key performance initiatives in modern Ruby include: 1) MJIT/YJIT - Just-In-Time compilers to speed up code execution, 2) Ractors - For parallel execution across multiple cores, 3) Memory optimizations like Object Shape and Variable Width Allocation, 4) Improved garbage collection algorithms, and 5) Faster method calls and object allocations. These initiatives aim to make Ruby more competitive in performance while maintaining its developer-friendly syntax and flexibility."
            }
          ]
        }
      ]
    }
  ]
};
