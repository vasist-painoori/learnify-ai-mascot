
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

Ruby is a dynamic, object-oriented programming language designed for simplicity and productivity. It has an elegant syntax that is natural to read and easy to write.
          `,
          codeExamples: [
            {
              title: "Hello World in Ruby",
              code: `# The classic Hello World program
puts "Hello, World!"

# Hello World as a method
def greet(name = "World")
  puts "Hello, #{name}!"
end

greet
greet("Ruby")`,
              explanation: "This is a simple Ruby program that demonstrates the classic 'Hello, World!' example. In Ruby, the 'puts' method is used to print text to the console. The second part demonstrates defining a method with a default parameter value and using string interpolation with #{} syntax."
            }
          ],
          quiz: [
            {
              question: "Which of the following is true about Ruby?",
              options: ["Ruby is a statically typed language", "Ruby is primarily used for system programming", "Ruby follows the principle of 'convention over configuration'", "Ruby requires explicit type declarations"],
              correctAnswer: 2,
              explanation: "Ruby follows the principle of 'convention over configuration,' meaning it makes assumptions about what you want to do and how you're going to do it, reducing the need for explicit configuration. Ruby is dynamically typed (not statically typed), is used for general-purpose programming (especially web development), and doesn't require explicit type declarations."
            }
          ],
          flashcards: [
            {
              front: "What is Ruby?",
              back: "Ruby is a dynamic, object-oriented programming language designed for simplicity and productivity. Created by Yukihiro Matsumoto ('Matz') in 1995, it emphasizes human-readable code and follows the principles of good user interface design."
            },
            {
              front: "What does 'Everything is an object' mean in Ruby?",
              back: "In Ruby, everything is an object, including primitive data types like numbers and booleans. This means all values have methods and properties, and can be manipulated using object-oriented programming techniques. For example, even integers have methods: 5.times { puts 'Hello' }"
            }
          ]
        },
        {
          id: "ruby-variables",
          title: "Variables and Data Types",
          description: "Understanding variables and data types in Ruby",
          content: `
# Variables and Data Types in Ruby

Ruby is a dynamically typed language, which means you don't need to declare the type of a variable when you create it. The type is determined by the data assigned to it.
          `,
          codeExamples: [
            {
              title: "Variables and Basic Types",
              code: `# Variables don't need type declarations
name = "Alice"
age = 30
height = 5.8
is_student = true

# Printing variables
puts "Name: #{name}"
puts "Age: #{age}"
puts "Height: #{height}"
puts "Is student: #{is_student}"

# Checking variable types
puts "#{name} is a #{name.class}"
puts "#{age} is a #{age.class}"
puts "#{height} is a #{height.class}"
puts "#{is_student} is a #{is_student.class}"

# Constants start with an uppercase letter
PI = 3.14159
MAX_STUDENTS = 30

# Different variable scopes
$global_variable = "I'm global"
@instance_variable = "I'm an instance variable"
@@class_variable = "I'm a class variable"
local_variable = "I'm local"`,
              explanation: "This example demonstrates variable declaration and basic data types in Ruby. Ruby is dynamically typed, so variable types are determined at runtime. The example shows how to create variables for different types (String, Integer, Float, Boolean), how to check their types using the .class method, and the different variable scopes in Ruby (global, instance, class, and local)."
            },
            {
              title: "Collections",
              code: `# Arrays - ordered collection
fruits = ["apple", "banana", "cherry"]
puts "First fruit: #{fruits[0]}"
puts "All fruits: #{fruits}"

# Adding to an array
fruits << "orange"  # Push to the end
fruits.push("grape")  # Another way to add
puts "Updated fruits: #{fruits}"

# Accessing array elements
puts "First fruit: #{fruits.first}"
puts "Last fruit: #{fruits.last}"
puts "First 3 fruits: #{fruits.take(3)}"

# Hashes - key-value pairs
person = {
  "name" => "John",
  "age" => 25,
  "city" => "New York"
}
puts "Person's name: #{person["name"]}"

# Symbol keys (more common in Ruby)
person = {
  name: "John",
  age: 25,
  city: "New York"
}
puts "Person's age: #{person[:age]}"

# Accessing and modifying hash values
person[:job] = "Developer"
puts "Person's job: #{person[:job]}"
puts "Person hash: #{person}"

# Ranges
number_range = 1..5  # Inclusive range (1 to 5)
puts "Range: #{number_range.to_a}"

letter_range = 'a'..'e'
puts "Letter range: #{letter_range.to_a}"`,
              explanation: "This example demonstrates collections in Ruby, including arrays, hashes, and ranges. Arrays are ordered collections accessible by index. Hashes are collections of key-value pairs, with Ruby supporting both string and symbol keys (the symbol syntax with a colon is more common). Ranges represent sequences of values between start and end points."
            }
          ],
          quiz: [
            {
              question: "In Ruby, what is the difference between a symbol and a string?",
              options: [
                "There is no difference, they are interchangeable",
                "Symbols are immutable and more memory-efficient for hash keys",
                "Symbols can contain spaces, strings cannot",
                "Strings are faster to process than symbols"
              ],
              correctAnswer: 1,
              explanation: "Symbols in Ruby are immutable and more memory-efficient than strings, especially when used as hash keys. When you use a symbol multiple times in your code, it refers to the same object in memory, whereas each string is a separate object. Symbols start with a colon (e.g., :name) and are commonly used for hash keys."
            }
          ],
          flashcards: [
            {
              front: "What are the different variable scopes in Ruby?",
              back: "Ruby has four main variable scopes:\n1. Local variables: Start with a lowercase letter or underscore (_variable)\n2. Instance variables: Start with @ (@variable), belong to a specific instance of a class\n3. Class variables: Start with @@ (@@variable), shared across all instances of a class\n4. Global variables: Start with $ ($variable), accessible throughout the entire program"
            },
            {
              front: "What is the difference between p, puts, and print in Ruby?",
              back: "puts: Outputs its argument followed by a newline, calls .to_s on the object\nprint: Outputs its argument without a newline, calls .to_s\np: Outputs a more 'raw' version of the object (calls .inspect), returns the object itself\n\nExample:\nputs [1,2,3] # Outputs: 1\\n2\\n3\\n\nprint [1,2,3] # Outputs: [1, 2, 3]\np [1,2,3] # Outputs: [1, 2, 3] and returns the array"
            }
          ]
        },
        {
          id: "ruby-control-flow",
          title: "Control Flow",
          description: "Understanding control flow statements in Ruby",
          content: `
# Control Flow in Ruby

Control flow statements in Ruby allow you to control the flow of your program's execution based on conditions and iterations.
          `,
          codeExamples: [
            {
              title: "Conditionals",
              code: `# Basic if statement
age = 25

if age >= 18
  puts "You are an adult"
end

# If-else statement
temperature = 15

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

puts "Your grade is #{grade}"

# Unless statement (opposite of if)
is_raining = false

unless is_raining
  puts "You don't need an umbrella"
end

# One-line conditionals
puts "It's freezing!" if temperature < 0
puts "No need for a jacket" unless temperature < 15

# Case statement (similar to switch in other languages)
day = "Monday"

case day
when "Monday"
  puts "Start of the work week"
when "Tuesday", "Wednesday", "Thursday"
  puts "Middle of the work week"
when "Friday"
  puts "End of the work week"
when "Saturday", "Sunday"
  puts "It's the weekend!"
else
  puts "Invalid day"
end

# Case with ranges
case score
when 90..100
  puts "Excellent!"
when 80...90  # ... excludes the end value
  puts "Good job!"
when 70...80
  puts "Satisfactory"
else
  puts "Needs improvement"
end

# Ternary operator
status = age >= 18 ? "adult" : "minor"
puts "You are a #{status}"`,
              explanation: "This example demonstrates conditionals in Ruby, including if, if-else, if-elsif-else structures, unless statements (which are the opposite of if), one-line conditionals, case statements (similar to switch in other languages), and the ternary operator. Ruby's case statement is particularly powerful as it can match against multiple values, ranges, and even use complex matching with the === operator."
            },
            {
              title: "Loops and Iterations",
              code: `# While loop
count = 1
while count <= 5
  puts "while loop iteration #{count}"
  count += 1
end

# Until loop (opposite of while)
count = 1
until count > 5
  puts "until loop iteration #{count}"
  count += 1
end

# For loop with range
for i in 1..5
  puts "for loop iteration #{i}"
end

# Each iterator (most common in Ruby)
(1..5).each do |i|
  puts "each iterator iteration #{i}"
end

# Each iterator with array
fruits = ["apple", "banana", "cherry"]
fruits.each do |fruit|
  puts "I like #{fruit}"
end

# Each with one-line block syntax
(1..5).each { |i| puts "one-line each: #{i}" }

# Map (transform each element)
squares = (1..5).map { |i| i * i }
puts "Squares: #{squares}"

# Select (filter elements)
even_numbers = (1..10).select { |i| i.even? }
puts "Even numbers: #{even_numbers}"

# Reject (opposite of select)
odd_numbers = (1..10).reject { |i| i.even? }
puts "Odd numbers: #{odd_numbers}"

# Times iterator
5.times do |i|
  puts "times iterator: #{i}"
end

# Upto and downto
1.upto(5) { |i| puts "upto: #{i}" }
5.downto(1) { |i| puts "downto: #{i}" }

# Step
(1..10).step(2) { |i| puts "step by 2: #{i}" }  # 1, 3, 5, 7, 9

# Loop with break and next
loop do
  puts "This is an infinite loop, but we'll break out"
  break  # Exit the loop
end

# Break with condition
counter = 0
loop do
  counter += 1
  puts "Loop iteration #{counter}"
  break if counter >= 5  # Exit if counter is 5 or more
end

# Next (skip the rest of the current iteration)
for i in 1..10
  next if i.odd?  # Skip odd numbers
  puts "Even number: #{i}"
end`,
              explanation: "This example demonstrates loops and iterations in Ruby, including traditional loops like while, until, and for, as well as Ruby's powerful iterators like each, map, select, and reject. Ruby also provides convenient methods like times, upto, downto, and step. The example also shows how to use break to exit a loop and next to skip to the next iteration. In Ruby, iterators with blocks are generally preferred over traditional loops."
            }
          ],
          quiz: [
            {
              question: "In Ruby, which iterator would you use to transform each element in an array into something new?",
              options: [
                "each",
                "select",
                "map",
                "inject"
              ],
              correctAnswer: 2,
              explanation: "The map iterator (or its synonym, collect) is used to transform each element in a collection according to a given block. It returns a new array with the transformed elements. For example, [1, 2, 3].map { |n| n * 2 } returns [2, 4, 6]. The each iterator simply iterates without transformation, select filters elements, and inject (or reduce) accumulates a value."
            }
          ],
          flashcards: [
            {
              front: "What is the difference between a while loop and an until loop in Ruby?",
              back: "A while loop continues as long as its condition is true.\nExample: while x < 5 do ... end\n\nAn until loop continues as long as its condition is false (opposite of while).\nExample: until x >= 5 do ... end\n\nBoth achieve the same results but with inversed conditions, so you can choose the one that makes your code more readable in a given situation."
            },
            {
              front: "What are the common ways to break out of a loop in Ruby?",
              back: "1. break: Exits the loop completely\n2. next: Skips to the next iteration (similar to 'continue' in other languages)\n3. redo: Restarts the current iteration without rechecking the condition\n4. retry: Restarts the whole loop from the beginning (only in rescue blocks)\n\nExample:\nloop do\n  break if condition\nend"
            }
          ]
        },
        {
          id: "ruby-methods",
          title: "Methods",
          description: "Creating and using methods in Ruby",
          content: `
# Methods in Ruby

Methods in Ruby are used to bundle one or more repeatable statements into a single unit. They provide a way to organize and reuse code.
          `,
          codeExamples: [
            {
              title: "Method Basics",
              code: `# Basic method definition
def greet
  puts "Hello, world!"
end

# Calling the method
greet

# Method with parameters
def greet_person(name)
  puts "Hello, #{name}!"
end

greet_person("Ruby")

# Method with default parameter
def greet_with_default(name = "World")
  puts "Hello, #{name}!"
end

greet_with_default         # Uses default
greet_with_default("Ruby") # Uses provided value

# Multiple parameters
def introduce(name, age)
  puts "#{name} is #{age} years old."
end

introduce("Alice", 30)

# Return values
def add(a, b)
  return a + b  # Explicit return
end

sum = add(5, 3)
puts "Sum: #{sum}"

# Implicit return (last evaluated expression)
def multiply(a, b)
  a * b  # No explicit return needed
end

product = multiply(4, 6)
puts "Product: #{product}"

# Multiple return values
def get_coordinates
  [3, 7]  # Returns an array
end

x, y = get_coordinates
puts "Coordinates: (#{x}, #{y})"

# Named parameters (keyword arguments)
def create_user(name:, age:, city: "Unknown")
  puts "User: #{name}, Age: #{age}, City: #{city}"
end

create_user(name: "Bob", age: 25)
create_user(name: "Charlie", age: 35, city: "New York")

# Variable number of arguments (splat operator)
def print_all(*args)
  puts "Number of arguments: #{args.length}"
  args.each { |arg| puts arg }
end

print_all("one", "two", "three", "four")

# Variable number of keyword arguments (double splat)
def options_hash(**options)
  puts "Options: #{options}"
end

options_hash(font: "Arial", size: 12, color: "blue")`,
              explanation: "This example demonstrates the basics of defining and using methods in Ruby. It shows methods with no parameters, with regular parameters, default parameters, implicit returns, multiple return values, named parameters (keyword arguments), and the splat operator for variable numbers of arguments. In Ruby, methods are defined with the def keyword, and the last evaluated expression is implicitly returned if there's no explicit return statement."
            },
            {
              title: "Advanced Method Techniques",
              code: `# Method with block
def repeat_block(times)
  times.times do
    yield  # Execute the given block
  end
end

repeat_block(3) do
  puts "This will be printed 3 times"
end

# Method with block parameter
def repeat_with_param(times)
  times.times do |i|
    yield i  # Pass parameter to the block
  end
end

repeat_with_param(5) do |index|
  puts "Iteration #{index}"
end

# Check if block is given
def optional_block
  if block_given?
    yield
  else
    puts "No block given"
  end
end

optional_block                   # No block
optional_block { puts "Block!" } # With block

# Storing blocks as Proc objects
def create_multiplier(factor)
  # Returns a Proc that multiplies by factor
  proc { |n| n * factor }
end

double = create_multiplier(2)
triple = create_multiplier(3)

puts "Double 5: #{double.call(5)}"
puts "Triple 5: #{triple.call(5)}"

# Lambda vs Proc subtle differences
# Lambdas check number of arguments, Procs don't
my_lambda = lambda { |x| puts x }
# my_lambda.call        # Error: wrong number of arguments
# my_lambda.call(1, 2)  # Error: wrong number of arguments

my_proc = proc { |x| puts x }
my_proc.call           # Works, x is nil
my_proc.call(1, 2)     # Works, extra argument ignored

# Return behavior
def proc_return
  my_proc = proc { return "Returning from proc" }
  my_proc.call
  return "This will never be reached"
end

def lambda_return
  my_lambda = lambda { return "Returning from lambda" }
  my_lambda.call
  return "This will be reached"
end

puts proc_return    # "Returning from proc"
puts lambda_return  # "This will be reached"

# Method objects
method_object = method(:puts)
method_object.call("Called via method object")

# Method missing for dynamic method handling
class DynamicClass
  def method_missing(method_name, *args)
    puts "You called #{method_name} with #{args}"
  end
end

obj = DynamicClass.new
obj.any_method("hello", 123)  # Handled by method_missing`,
              explanation: "This example demonstrates advanced method techniques in Ruby. It covers blocks (Ruby's closures), procs and lambdas (which are portable blocks), method objects, and method_missing for dynamic method handling. Blocks are a fundamental concept in Ruby, allowing you to pass chunks of code to methods. The yield keyword is used to execute a block within a method. Procs and lambdas allow blocks to be saved as objects and passed around, with subtle differences in argument handling and return behavior."
            }
          ],
          quiz: [
            {
              question: "What is the difference between a Proc and a Lambda in Ruby?",
              options: [
                "Procs are faster than lambdas",
                "Lambdas check the number of arguments and have different return behavior",
                "Lambdas can access variables from their defining scope, Procs cannot",
                "Procs can be assigned to variables, lambdas cannot"
              ],
              correctAnswer: 1,
              explanation: "There are two key differences between Procs and Lambdas in Ruby: 1) Lambdas strictly check the number of arguments and raise an error if the wrong number is provided, while Procs are more lenient; 2) A return statement inside a lambda returns from the lambda itself, while a return inside a proc returns from the enclosing method. Both are types of Proc objects in Ruby, both can be assigned to variables, and both can access variables from their defining scope (closure behavior)."
            }
          ],
          flashcards: [
            {
              front: "What is a block in Ruby and how is it used?",
              back: "A block in Ruby is an anonymous piece of code that can be passed to a method. It's defined using do...end or curly braces {}.\n\nBlocks can take parameters between pipes |param| and are used extensively in Ruby for iterators and callback-style programming.\n\nExample:\n[1, 2, 3].each do |num|\n  puts num * 2\nend\n\nMethods can yield to blocks using the yield keyword or can capture them as Proc objects."
            },
            {
              front: "What does the splat operator (*) do in Ruby method parameters?",
              back: "The splat operator (*) in Ruby method parameters collects multiple arguments into an array.\n\nExample:\ndef print_all(*args)\n  args.each { |arg| puts arg }\nend\n\nprint_all(\"one\", \"two\", \"three\")\n\nIt can also be used to expand arrays into individual arguments:\nargs = [1, 2, 3]\nsum(*args) # Same as sum(1, 2, 3)\n\nThe double splat (**) does the same for keyword arguments, collecting them into a hash."
            }
          ]
        },
        {
          id: "ruby-classes",
          title: "Classes and Objects",
          description: "Object-oriented programming in Ruby",
          content: `
# Classes and Objects in Ruby

Ruby is a true object-oriented language, where everything is an object. Classes allow you to create custom objects with their own methods and attributes.
          `,
          codeExamples: [
            {
              title: "Classes and Instances",
              code: `# Basic class definition
class Person
  # Constructor method
  def initialize(name, age)
    @name = name  # Instance variable
    @age = age    # Instance variable
  end
  
  # Instance method
  def introduce
    puts "Hi, I'm #{@name} and I'm #{@age} years old."
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

# Creating objects (instances of the class)
person1 = Person.new("Alice", 30)
person2 = Person.new("Bob", 25)

# Calling methods
person1.introduce
person2.introduce

# Using getters and setters
puts "#{person1.name} is #{person1.age} years old."

person1.name = "Alicia"  # Using the setter
puts "New name: #{person1.name}"

# Using attr_accessor (shorthand for getters and setters)
class Student
  # Creates getter and setter methods for name and grade
  attr_accessor :name, :grade
  
  # Creates getter methods only
  attr_reader :id
  
  # Creates setter methods only
  attr_writer :address
  
  def initialize(name, grade, id)
    @name = name
    @grade = grade
    @id = id
    @address = nil
  end
  
  def to_s
    "Student #{@name} (ID: #{@id}) is in grade #{@grade}"
  end
end

student = Student.new("Charlie", 10, "S12345")
puts student

student.name = "Charles"  # Setter from attr_accessor
student.grade = 11        # Setter from attr_accessor
student.address = "123 School St"  # Setter from attr_writer

puts "Name: #{student.name}, Grade: #{student.grade}, ID: #{student.id}"
# puts student.address  # This would fail - no getter for address`,
              explanation: "This example demonstrates the basics of defining and using classes in Ruby. Classes are defined with the class keyword, and the initialize method serves as the constructor. Instance variables (prefixed with @) are used to store object state. Getter and setter methods provide access to these instance variables. Ruby also provides convenient shortcuts (attr_accessor, attr_reader, attr_writer) to automatically create getter and setter methods."
            },
            {
              title: "Inheritance and Advanced Class Features",
              code: `# Base class
class Animal
  attr_reader :name
  
  def initialize(name)
    @name = name
  end
  
  def speak
    # To be overridden by subclasses
    "Some generic animal sound"
  end
  
  def move
    "Moving..."
  end
end

# Derived class (inheritance)
class Dog < Animal
  attr_reader :breed
  
  def initialize(name, breed)
    super(name)  # Call parent initialize
    @breed = breed
  end
  
  # Override method from parent
  def speak
    "Woof! Woof!"
  end
  
  # New method specific to Dog
  def fetch
    "#{@name} is fetching the ball!"
  end
end

# Another derived class
class Cat < Animal
  def speak
    "Meow!"
  end
  
  def purr
    "Purrrr..."
  end
end

# Using inheritance
dog = Dog.new("Rex", "German Shepherd")
cat = Cat.new("Whiskers")

puts "#{dog.name} says: #{dog.speak}"
puts "#{cat.name} says: #{cat.speak}"

puts dog.fetch
puts cat.purr

puts "#{dog.name} is a #{dog.breed}"
puts "Both animals can move:"
puts "#{dog.name}: #{dog.move}"
puts "#{cat.name}: #{cat.move}"

# Class methods and variables
class MathUtils
  # Class variable (shared across all instances)
  @@pi = 3.14159
  
  # Class method (called on the class itself)
  def self.circle_area(radius)
    @@pi * radius * radius
  end
  
  # Instance method (called on instances)
  def square_area(side)
    side * side
  end
  
  # Class method to access class variable
  def self.pi
    @@pi
  end
end

# Using class methods (no instance needed)
area = MathUtils.circle_area(5)
puts "Circle area: #{area}"
puts "Pi value: #{MathUtils.pi}"

# Instance methods need an instance
math = MathUtils.new
puts "Square area: #{math.square_area(4)}"

# Modules for mixins
module Swimmable
  def swim
    "#{self.class} is swimming!"
  end
end

module Flyable
  def fly
    "#{self.class} is flying high!"
  end
end

# Using modules with classes
class Duck < Animal
  include Swimmable
  include Flyable
  
  def speak
    "Quack!"
  end
end

class Fish
  include Swimmable
end

duck = Duck.new("Donald")
fish = Fish.new

puts duck.swim  # From Swimmable module
puts duck.fly   # From Flyable module
puts fish.swim  # From Swimmable module`,
              explanation: "This example demonstrates inheritance and advanced class features in Ruby. Inheritance allows a class to inherit behavior from a parent class using the < operator. The example also shows class methods (defined with self.), class variables (prefixed with @@), and modules as mixins. Mixins use the include keyword to add functionality to classes, allowing for code reuse without multiple inheritance. This is a key part of Ruby's composition over inheritance approach."
            }
          ],
          quiz: [
            {
              question: "In Ruby, what is the purpose of the 'super' keyword?",
              options: [
                "To create a new instance of the superclass",
                "To access class variables of the superclass",
                "To call the corresponding method in the parent class",
                "To check if a class inherits from another class"
              ],
              correctAnswer: 2,
              explanation: "The 'super' keyword in Ruby is used to call the corresponding method in the parent class. When called without arguments (just 'super'), it passes all the arguments from the current method to the parent method. When called with specific arguments ('super(arg1, arg2)'), it passes only those arguments. It's commonly used in the initialize method to call the parent's initialization logic before adding subclass-specific initialization."
            }
          ],
          flashcards: [
            {
              front: "What is the difference between instance methods and class methods in Ruby?",
              back: "Instance methods are defined without the 'self' prefix and are called on instances of a class. They typically operate on the instance's state (instance variables).\nExample: def my_method; end\n\nClass methods are defined with the 'self' prefix and are called directly on the class itself, not on instances. They typically operate on class-level concepts.\nExample: def self.my_class_method; end\n\nUsage:\ninstance = MyClass.new\ninstance.my_method        # Instance method\nMyClass.my_class_method  # Class method"
            },
            {
              front: "How do modules differ from classes in Ruby?",
              back: "1. Modules cannot be instantiated (you can't create objects from them)\n2. Modules cannot inherit from other modules or classes\n3. Classes can inherit from only one superclass, but can include multiple modules\n\nModules serve two main purposes:\n1. Namespacing (organizing code under a named container)\n2. Mixins (sharing behavior across multiple classes)\n\nExample:\nmodule Walkable\n  def walk\n    \"Walking...\"\n  end\nend\n\nclass Person\n  include Walkable\nend"
            }
          ]
        },
        {
          id: "ruby-blocks-procs",
          title: "Blocks, Procs, and Lambdas",
          description: "Working with Ruby's closures and code blocks",
          content: `
# Blocks, Procs, and Lambdas in Ruby

Ruby provides several ways to work with blocks of code, allowing for powerful functional programming techniques.
          `,
          codeExamples: [
            {
              title: "Blocks and Yield",
              code: `# Block using do...end
[1, 2, 3].each do |number|
  puts number * 2
end

# Block using curly braces
[1, 2, 3].each { |number| puts number * 3 }

# Custom method that takes a block
def custom_times(n)
  i = 0
  while i < n
    yield i  # Call the block, passing i as an argument
    i += 1
  end
end

custom_times(5) do |i|
  puts "Iteration #{i}"
end

# Block parameters
def math_operation(a, b)
  yield(a, b)
end

sum = math_operation(5, 3) { |x, y| x + y }
product = math_operation(5, 3) { |x, y| x * y }

puts "Sum: #{sum}, Product: #{product}"

# Checking if a block is given
def optional_block
  if block_given?
    yield
  else
    puts "No block given"
  end
end

optional_block { puts "I'm a block!" }
optional_block

# Passing blocks explicitly
def explicit_block(&block)
  block.call  # Same as yield
end

explicit_block { puts "Called with explicit block parameter" }

# Block local variables
x = 10
[1, 2, 3].each do |x|
  puts "Block x: #{x}"  # Block parameter shadows outer x
end
puts "Outer x: #{x}"    # Outer x is unchanged`,
              explanation: "This example demonstrates the use of blocks in Ruby. Blocks are snippets of code that can be passed to methods, defined with either do...end or curly braces {}. The yield keyword is used inside methods to execute the block. Blocks can take parameters, which are specified between pipes |param|. The block_given? method checks if a block was provided to a method. Blocks can also be declared as explicit parameters using &block syntax, which converts the block to a Proc object."
            },
            {
              title: "Procs and Lambdas",
              code: `# Creating a Proc
square = Proc.new { |x| x * x }

# Using a Proc
puts square.call(5)  # 25

# Alternative way to create and call Procs
cube = proc { |x| x ** 3 }
puts cube.(5)       # 125 (alternative syntax)
puts cube[5]        # 125 (another alternative)

# Creating a lambda
multiply = lambda { |x, y| x * y }

# Alternative lambda syntax (stabby lambda)
divide = ->(x, y) { x / y }

puts multiply.call(5, 3)  # 15
puts divide.call(10, 2)   # 5

# Differences between procs and lambdas

# 1. Lambdas check argument count, procs don't
begin
  multiply.call(5)  # Error: wrong number of arguments
rescue ArgumentError => e
  puts "Lambda error: #{e.message}"
end

forgiving = proc { |x, y| puts "x: #{x}, y: #{y}" }
forgiving.call(5)  # No error, y is nil

# 2. Return behavior
def proc_return
  my_proc = Proc.new { return "Returning from proc" }
  my_proc.call
  return "This will never be reached"
end

def lambda_return
  my_lambda = lambda { return "Returning from lambda" }
  my_lambda.call
  return "This will be reached"
end

puts proc_return    # Outputs: Returning from proc
puts lambda_return  # Outputs: This will be reached

# Procs and lambdas as closures
def multiplier(factor)
  Proc.new { |n| n * factor }
end

double = multiplier(2)
triple = multiplier(3)
half = multiplier(0.5)

puts "Double 10: #{double.call(10)}"   # 20
puts "Triple 10: #{triple.call(10)}"   # 30
puts "Half of 10: #{half.call(10)}"    # 5

# Converting blocks to procs and vice versa
def convert_block(&block)
  block  # Returns the block as a proc
end

my_proc = convert_block { |x| x.upcase }
puts my_proc.call("hello")  # HELLO

# Passing procs as blocks
upcase_proc = Proc.new { |str| str.upcase }
["apple", "banana", "cherry"].map(&upcase_proc)  # ["APPLE", "BANANA", "CHERRY"]`,
              explanation: "This example covers Procs and lambdas in Ruby, which are types of closures. Both Procs and lambdas allow you to save blocks of code as objects that can be passed around and called later. The example highlights the key differences between Procs and lambdas: lambdas check the number of arguments and have different return behavior. It also demonstrates closures in action, showing how Procs and lambdas can access variables from their defining scope. The example also shows how to convert between blocks and Procs using the & operator."
            }
          ],
          quiz: [
            {
              question: "What happens when you use the return statement inside a Proc in Ruby?",
              options: [
                "It returns a value from the Proc itself",
                "It returns a value from the method that called the Proc",
                "It returns a value from the method where the Proc was defined",
                "It causes a syntax error"
              ],
              correctAnswer: 2,
              explanation: "When you use the return statement inside a Proc in Ruby, it returns from the method where the Proc was defined, not just from the Proc itself. This is a key difference from lambdas, which only return from their own scope. This behavior can lead to unexpected results if you're not careful, especially when passing Procs between methods or storing them for later use. If a Proc with a return is called outside of any method (at the top level), it will raise a LocalJumpError."
            }
          ],
          flashcards: [
            {
              front: "What are the key differences between blocks, Procs, and lambdas in Ruby?",
              back: "Blocks:\n- Syntax: do...end or {}\n- Not objects, cannot be stored in variables\n- Passed to methods implicitly\n\nProcs:\n- Created with Proc.new or proc\n- Are objects that can be stored and passed around\n- Lenient with argument count\n- Return exits from the enclosing method\n\nLambdas:\n- Created with lambda or -> syntax\n- Are Proc objects with different behavior\n- Strict with argument count\n- Return only exits from the lambda itself"
            },
            {
              front: "What is a closure in Ruby and why is it useful?",
              back: "A closure in Ruby is a function or block that remembers the variables, methods, and values from the context where it was defined, even if that context is no longer active.\n\nThis is useful for:\n1. Creating function factories\n2. Implementing callbacks\n3. Delayed execution with context\n4. Data encapsulation\n\nExample:\ndef counter\n  count = 0\n  return -> { count += 1 }\nend\n\nc = counter\nputs c.call # 1\nputs c.call # 2"
            }
          ]
        },
        {
          id: "ruby-modules",
          title: "Modules and Mixins",
          description: "Organizing code with modules and sharing behavior with mixins",
          content: `
# Modules and Mixins in Ruby

Modules in Ruby serve two primary purposes: they act as namespaces to organize code, and they can be "mixed in" to classes to share behavior.
          `,
          codeExamples: [
            {
              title: "Modules as Namespaces",
              code: `# Module as a namespace
module Mathematics
  PI = 3.14159
  
  def self.square(x)
    x * x
  end
  
  def self.cube(x)
    x ** 3
  end
  
  # Nested module
  module Trigonometry
    def self.sin(x)
      Math.sin(x)  # Using Ruby's built-in Math module
    end
    
    def self.cos(x)
      Math.cos(x)
    end
  end
  
  # Class inside module
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
puts "PI: #{Mathematics::PI}"

# Calling module methods
puts "Square of 5: #{Mathematics.square(5)}"
puts "Cube of 3: #{Mathematics.cube(3)}"

# Accessing nested module
puts "Sin of 0: #{Mathematics::Trigonometry.sin(0)}"
puts "Cos of 0: #{Mathematics::Trigonometry.cos(0)}"

# Creating an instance of a class inside a module
calc = Mathematics::Calculator.new
puts "5 + 3 = #{calc.add(5, 3)}"
puts "5 - 3 = #{calc.subtract(5, 3)}"

# Importing module constants or methods with 'include'
include Mathematics
puts "PI direct access: #{PI}"
# Note: 'include' only imports constants and instance methods,
# not module methods (those defined with self.)`,
              explanation: "This example demonstrates using modules as namespaces in Ruby. Modules provide a way to group related constants, methods, and classes together, preventing name collisions in your code. The example shows a Mathematics module with constants, module methods (defined with self.), a nested Trigonometry module, and a Calculator class. To access module components, you use the :: operator. You can also include a module to import its constants and instance methods into the current scope."
            },
            {
              title: "Modules as Mixins",
              code: `# Module for mixin
module Loggable
  def log(message)
    puts "[LOG] #{Time.now} - #{message}"
  end
  
  def debug(message)
    puts "[DEBUG] #{message}" if @debug_mode
  end
  
  # This method will be called when the module is included
  def self.included(base)
    puts "Loggable module was included in #{base}"
  end
end

# Module with enumerable functionality
module Countable
  def count_words
    split(' ').length
  end
  
  def count_chars
    length
  end
end

# Class including a module
class User
  include Loggable  # Mix in Loggable module
  
  attr_accessor :name, :email
  
  def initialize(name, email, debug_mode = false)
    @name = name
    @email = email
    @debug_mode = debug_mode
    
    log("New user created: #{name}")
    debug("User details: Name=#{name}, Email=#{email}")
  end
  
  def update_email(new_email)
    old_email = @email
    @email = new_email
    log("Email updated for #{@name}: #{old_email} -> #{new_email}")
  end
end

# Creating a User instance
user = User.new("Alice", "alice@example.com", true)
user.update_email("newalice@example.com")

# Extending built-in classes
class String
  include Countable
end

# Now all strings have Countable methods
text = "This is a sample text for testing Ruby mixins."
puts "Word count: #{text.count_words}"
puts "Character count: #{text.count_chars}"

# Extending an instance
specific_text = "Just this specific string instance"
specific_text.extend(Countable)  # Only this instance gets the methods
puts "Extended string word count: #{specific_text.count_words}"

# Multiple mixins
class Report
  include Loggable
  include Comparable  # Ruby's built-in module for comparison
  
  attr_reader :name, :size
  
  def initialize(name, size)
    @name = name
    @size = size
    log("Report created: #{name} (#{size} pages)")
  end
  
  # Required by Comparable module
  def <=>(other)
    size <=> other.size
  end
end

report1 = Report.new("Quarterly", 15)
report2 = Report.new("Annual", 40)

puts "report1 < report2: #{report1 < report2}"  # true
puts "report1 > report2: #{report1 > report2}"  # false

# Prepending modules (changes method lookup order)
module Prefixer
  def display
    "Prefixed: #{super}"
  end
end

class MyClass
  prepend Prefixer
  
  def display
    "Original text"
  end
end

obj = MyClass.new
puts obj.display  # "Prefixed: Original text"`,
              explanation: "This example demonstrates using modules as mixins in Ruby, a powerful way to share behavior across different classes. The include keyword is used to mix in module behavior into a class, extending its functionality without inheritance. The example shows the Loggable module being included in the User class, adding logging capabilities. It also demonstrates extending built-in classes like String, extending specific instances with the extend method, using multiple mixins, and changing method lookup order with prepend. Mixins are a key part of Ruby's approach to code reuse, providing an alternative to multiple inheritance."
            }
          ],
          quiz: [
            {
              question: "What is the main difference between 'include' and 'extend' when using modules in Ruby?",
              options: [
                "include adds methods to a class, extend adds methods to an object",
                "include adds instance methods to a class, extend adds class methods",
                "include can only be used with one module, extend can be used with multiple modules",
                "include is used in classes, extend is used in modules"
              ],
              correctAnswer: 1,
              explanation: "In Ruby, 'include' adds a module's methods as instance methods to a class (available to all instances of the class). 'extend' adds a module's methods as class methods (available directly on the class itself). You can also use 'extend' on an individual object to add methods just to that specific instance. Both 'include' and 'extend' can be used with multiple modules."
            }
          ],
          flashcards: [
            {
              front: "What is the method lookup path (or ancestor chain) in Ruby?",
              back: "The method lookup path in Ruby is the order in which Ruby searches for a method when it's called. When a method is called on an object, Ruby looks for it in:\n\n1. The object's singleton class (for methods defined specifically on that object)\n2. The object's class\n3. Modules prepended to the class (in reverse order of prepending)\n4. Modules included in the class (in reverse order of inclusion)\n5. The superclass\n6. Modules prepended/included in the superclass\n7. And so on up the inheritance chain\n\nYou can view this path for any class using: `MyClass.ancestors`"
            },
            {
              front: "What is the difference between 'prepend' and 'include' in Ruby?",
              back: "Both 'prepend' and 'include' mix modules into a class, but they differ in how they affect the method lookup path:\n\n'include' places the module's methods after the class's methods in the lookup path. If the class defines a method with the same name, the class's version takes precedence.\n\n'prepend' places the module's methods before the class's methods. If the module defines a method with the same name, the module's version takes precedence, and can call the original method using 'super'.\n\nExample with prepend:\n```ruby\nmodule Decorator\n  def method\n    \"Decorated #{super}\"\n  end\nend\n\nclass MyClass\n  prepend Decorator\n  def method\n    \"original\"\n  end\nend\n```"
            }
          ]
        },
        {
          id: "ruby-exceptions",
          title: "Exception Handling",
          description: "Managing errors and exceptions in Ruby",
          content: `
# Exception Handling in Ruby

Exception handling allows you to gracefully manage errors and unexpected situations in your Ruby programs.
          `,
          codeExamples: [
            {
              title: "Basic Exception Handling",
              code: `# Basic try-catch (begin-rescue in Ruby)
begin
  # Code that might raise an exception
  result = 10 / 0
  puts "This won't be executed"
rescue
  puts "An error occurred!"
end

# Capturing the exception object
begin
  result = 10 / 0
rescue ZeroDivisionError => e
  puts "Error: #{e.message}"
  puts "Error type: #{e.class}"
end

# Multiple rescue clauses
begin
  # Change the code to test different exceptions
  # result = 10 / 0  # ZeroDivisionError
  # result = undefined_variable  # NameError
  result = nil + 1  # NoMethodError
  
  puts "Result: #{result}"
rescue ZeroDivisionError => e
  puts "Division by zero: #{e.message}"
rescue NameError => e
  puts "Undefined variable: #{e.message}"
rescue NoMethodError => e
  puts "Undefined method: #{e.message}"
rescue => e
  puts "Other error: #{e.message}"
end

# Else clause (executes if no exception is raised)
begin
  result = 10 / 5
rescue ZeroDivisionError => e
  puts "Division by zero error!"
else
  puts "Calculation successful! Result: #{result}"
end

# Ensure clause (always executes, like 'finally' in other languages)
begin
  puts "Opening file..."
  # file = File.open("nonexistent.txt")
  puts "File opened successfully"
rescue Errno::ENOENT => e
  puts "File not found error: #{e.message}"
else
  puts "File processing successful"
ensure
  puts "This always executes, regardless of exceptions"
  # file.close if file  # Close file if it was opened
end

# Retry statement
attempt = 0
begin
  attempt += 1
  puts "Attempt #{attempt}"
  
  # Simulate random failures
  if rand(3) == 0
    puts "Operation succeeded!"
  else
    raise "Random failure"
  end
rescue => e
  puts "Error: #{e.message}"
  retry if attempt < 3  # Try again up to 3 times
  puts "Giving up after #{attempt} attempts"
end`,
              explanation: "This example demonstrates basic exception handling in Ruby. The begin-rescue-else-ensure structure is used to catch and handle exceptions. The rescue clause catches specific exception types, and multiple rescue clauses can be used to handle different exceptions differently. The else clause executes if no exception is raised, and the ensure clause always executes, making it useful for cleanup operations. The retry statement allows you to restart a begin block after an exception, which is useful for implementing retry logic."
            },
            {
              title: "Custom Exceptions and Advanced Techniques",
              code: `# Custom exception class
class InsufficientFundsError < StandardError
  attr_reader :amount, :balance
  
  def initialize(amount, balance, msg = nil)
    @amount = amount
    @balance = balance
    super(msg || "Insufficient funds: tried to withdraw #{amount} from balance of #{balance}")
  end
end

# Class using custom exception
class BankAccount
  attr_reader :balance
  
  def initialize(initial_balance = 0)
    @balance = initial_balance
  end
  
  def deposit(amount)
    raise ArgumentError, "Deposit amount must be positive" if amount <= 0
    @balance += amount
    puts "Deposited #{amount}. New balance: #{@balance}"
  end
  
  def withdraw(amount)
    raise ArgumentError, "Withdrawal amount must be positive" if amount <= 0
    
    if amount > @balance
      raise InsufficientFundsError.new(amount, @balance)
    end
    
    @balance -= amount
    puts "Withdrew #{amount}. New balance: #{@balance}"
  end
end

# Using the custom exception
account = BankAccount.new(100)

begin
  # Try different operations
  account.deposit(50)
  account.withdraw(75)
  account.withdraw(100)  # This will raise InsufficientFundsError
rescue ArgumentError => e
  puts "Invalid argument: #{e.message}"
rescue InsufficientFundsError => e
  puts "Error: #{e.message}"
  puts "Attempted to withdraw: #{e.amount}, Available balance: #{e.balance}"
  puts "Missing: #{e.amount - e.balance}"
end

# Exception handling in methods
def divide(a, b)
  begin
    result = a / b
  rescue ZeroDivisionError
    puts "Cannot divide by zero"
    return nil
  end
  result  # Return the result if no exception
end

puts divide(10, 2)  # 5
puts divide(10, 0)  # nil (after error message)

# Cleaner method syntax without explicit begin/end
def safer_divide(a, b)
  raise ArgumentError, "Arguments must be numeric" unless a.is_a?(Numeric) && b.is_a?(Numeric)
  a / b
rescue ZeroDivisionError => e
  puts "Error: #{e.message}"
  nil
end

puts safer_divide(10, 2)  # 5
puts safer_divide(10, 0)  # nil (after error message)

# Raising exceptions
def validate_age(age)
  raise ArgumentError, "Age must be a number" unless age.is_a? Numeric
  raise "Age cannot be negative" if age < 0
  raise "Age is unreasonably high" if age > 150
  
  puts "Age #{age} is valid"
end

begin
  validate_age(25)   # Valid
  validate_age(-5)   # Negative
  validate_age(200)  # Too high
rescue ArgumentError => e
  puts "Invalid argument: #{e.message}"
rescue => e
  puts "Validation error: #{e.message}"
end

# Handling exceptions at different levels
def level3
  puts "level3: Before raising exception"
  raise "Error in level 3"
  puts "level3: After raising exception"
end

def level2
  puts "level2: Before calling level3"
  begin
    level3
  rescue => e
    puts "level2: Caught exception: #{e.message}"
    raise "Error from level 2"  # Re-raise a new exception
  end
  puts "level2: After calling level3"
end

def level1
  puts "level1: Before calling level2"
  begin
    level2
  rescue => e
    puts "level1: Caught exception: #{e.message}"
  end
  puts "level1: After calling level2"
end

level1  # See how exceptions bubble up the call stack`,
              explanation: "This example demonstrates advanced exception handling techniques in Ruby. It shows how to create custom exception classes by inheriting from StandardError and adding custom attributes. The example also demonstrates exception handling in methods, the cleaner syntax for exception handling within method bodies, explicitly raising exceptions with raise, and how exceptions bubble up through the call stack if not caught. The BankAccount class provides a practical example of using custom exceptions to handle domain-specific error scenarios."
            }
          ],
          quiz: [
            {
              question: "In Ruby exception handling, what is the purpose of the 'ensure' clause?",
              options: [
                "To catch any exceptions that weren't caught by specific rescue clauses",
                "To execute code when no exceptions are raised",
                "To execute code whether an exception is raised or not",
                "To retry the operation that caused the exception"
              ],
              correctAnswer: 2,
              explanation: "The 'ensure' clause in Ruby exception handling is used to execute code whether an exception is raised or not. It's similar to the 'finally' block in other languages. This makes it ideal for cleanup operations like closing files or database connections that should happen regardless of whether the code executed successfully or raised an exception. The 'ensure' clause is executed even if the 'rescue' or 'else' clauses use 'return', 'break', or 'next' statements."
            }
          ],
          flashcards: [
            {
              front: "What is the difference between 'raise' and 'fail' in Ruby?",
              back: "There is no functional difference between 'raise' and 'fail' in Ruby - they are synonyms and can be used interchangeably to raise exceptions.\n\n'raise' tends to be more commonly used in modern Ruby code, but both methods are valid and perform exactly the same function.\n\nExamples:\nraise \"Error message\"  # Raises a RuntimeError\nfail \"Error message\"   # Also raises a RuntimeError\n\nraise ArgumentError, \"Invalid argument\"  # Raises a specific error type\nfail ArgumentError, \"Invalid argument\"   # Same effect"
            },
            {
              front: "What is the Ruby exception hierarchy?",
              back: "In Ruby, all exceptions are subclasses of `Exception`:\n\n- `Exception` (Root of hierarchy)\n  - `NoMemoryError`, `SystemExit`, `SignalException`, etc. (System/fatal errors)\n  - `StandardError` (Base for most common exceptions)\n    - `ArgumentError`, `NameError`, `TypeError`\n    - `RuntimeError` (Default when using `raise` with just a message)\n    - `IOError`, `NoMethodError`, etc.\n\nBest practice: Rescue `StandardError` or its subclasses, not `Exception`. Rescuing `Exception` can catch system-level exceptions that should generally be allowed to terminate the program."
            }
          ]
        },
        {
          id: "ruby-file-io",
          title: "File I/O",
          description: "Reading from and writing to files in Ruby",
          content: `
# File I/O in Ruby

Ruby provides comprehensive support for working with files, making it easy to read, write, and manipulate file content.
          `,
          codeExamples: [
            {
              title: "Basic File Operations",
              code: `# Writing to a file
File.open("example.txt", "w") do |file|
  file.puts "Hello, Ruby!"
  file.puts "This is line 2."
  file.puts "This is line 3."
end

puts "File created: example.txt"

# Reading from a file - all at once
content = File.read("example.txt")
puts "\\nFile content (read all):"
puts content

# Reading file line by line
puts "\\nFile content (line by line):"
File.foreach("example.txt") do |line|
  puts "Line: #{line.chomp}"  # chomp removes the trailing newline
end

# Reading file as an array of lines
lines = File.readlines("example.txt")
puts "\\nFile has #{lines.length} lines"
puts "First line: #{lines.first.chomp}"
puts "Last line: #{lines.last.chomp}"

# Checking if a file exists
if File.exist?("example.txt")
  puts "\\nThe file exists"
end

# Getting file information
puts "\\nFile information:"
puts "Absolute path: #{File.absolute_path('example.txt')}"
puts "Size: #{File.size('example.txt')} bytes"
puts "File type: #{File.ftype('example.txt')}"
puts "Last modified: #{File.mtime('example.txt')}"

# Appending to a file
File.open("example.txt", "a") do |file|
  file.puts "This line was appended."
end

puts "\\nFile content after appending:"
puts File.read("example.txt")

# Reading and writing with blocks (automatically closes the file)
puts "\\nUsing blocks for file operations:"

File.open("block_example.txt", "w") do |file|
  file.puts "Writing with a block"
  file.puts "The file will be automatically closed"
end

content = File.open("block_example.txt", "r") do |file|
  file.read
end

puts content

# Deleting a file
File.delete("block_example.txt") if File.exist?("block_example.txt")
puts "\\nDeleted block_example.txt"`,
              explanation: "This example demonstrates basic file operations in Ruby, including writing to files, reading files all at once or line by line, appending to files, getting file information, and deleting files. It shows the preferred Ruby approach of using blocks with File.open, which automatically closes the file when the block ends. The example also introduces methods like File.read, File.readlines, File.foreach, and various methods to get file information."
            },
            {
              title: "Advanced File and Directory Operations",
              code: `require 'fileutils'
require 'csv'
require 'json'

# Creating directories
FileUtils.mkdir_p('data/nested/directory') unless Dir.exist?('data/nested/directory')
puts "Created directory structure: data/nested/directory"

# List files in a directory
puts "\\nFiles in current directory:"
Dir.glob('*.txt').each do |file|
  puts "- #{file}"
end

# Working with file paths
filepath = "data/nested/directory/data.txt"
puts "\\nFile path components:"
puts "Directory: #{File.dirname(filepath)}"
puts "Filename: #{File.basename(filepath)}"
puts "Filename without extension: #{File.basename(filepath, '.txt')}"
puts "Extension: #{File.extname(filepath)}"

# Writing structured data to files
# CSV example
CSV.open("data/sample.csv", "w") do |csv|
  csv << ["Name", "Age", "City"]
  csv << ["Alice", 30, "New York"]
  csv << ["Bob", 25, "San Francisco"]
  csv << ["Charlie", 35, "Chicago"]
end
puts "\\nCreated CSV file: data/sample.csv"

# Reading CSV data
puts "\\nReading CSV data:"
CSV.foreach("data/sample.csv", headers: true) do |row|
  puts "#{row['Name']} is #{row['Age']} years old and lives in #{row['City']}"
end

# JSON example
data = {
  people: [
    { name: "Alice", age: 30, city: "New York" },
    { name: "Bob", age: 25, city: "San Francisco" },
    { name: "Charlie", age: 35, city: "Chicago" }
  ]
}

File.open("data/sample.json", "w") do |file|
  file.write(JSON.pretty_generate(data))
end
puts "\\nCreated JSON file: data/sample.json"

# Reading JSON data
puts "\\nReading JSON data:"
json_data = JSON.parse(File.read("data/sample.json"))
json_data["people"].each do |person|
  puts "#{person['name']} is #{person['age']} years old and lives in #{person['city']}"
end

# Binary data - reading and writing
File.open("data/binary.dat", "wb") do |file|  # wb = write binary
  file.write([1, 2, 3, 4, 5].pack("C*"))  # Pack as unsigned chars
end
puts "\\nWrote binary data to data/binary.dat"

binary_data = File.open("data/binary.dat", "rb") do |file|  # rb = read binary
  file.read.unpack("C*")  # Unpack as unsigned chars
end
puts "Read binary data: #{binary_data.inspect}"

# File permissions
File.chmod(0755, "data/sample.json") if File.exist?("data/sample.json")
puts "\\nChanged permissions for data/sample.json"

# Moving/renaming files
if File.exist?("data/sample.csv")
  FileUtils.mv("data/sample.csv", "data/people.csv")
  puts "Renamed data/sample.csv to data/people.csv"
end

# Copying files
if File.exist?("data/sample.json")
  FileUtils.cp("data/sample.json", "data/sample.json.bak")
  puts "Copied data/sample.json to data/sample.json.bak"
end

# Opening file with error handling
begin
  File.open("nonexistent.txt", "r") do |file|
    puts file.read
  end
rescue Errno::ENOENT => e
  puts "\\nFile error: #{e.message}"
end`,
              explanation: "This example demonstrates advanced file and directory operations in Ruby. It covers creating directory structures, working with file paths, reading and writing structured data formats like CSV and JSON, handling binary data, changing file permissions, and moving and copying files. The example uses the FileUtils module for higher-level file operations and includes specialized libraries for CSV and JSON data. It also demonstrates error handling for file operations, which is important for robust applications."
            }
          ],
          quiz: [
            {
              question: "In Ruby, what is the best way to ensure a file is properly closed after operations?",
              options: [
                "Always call File.close explicitly",
                "Use a begin/ensure block with File.close in the ensure clause",
                "Use File.open with a block, which automatically closes the file",
                "File handles are automatically garbage collected, so nothing special is needed"
              ],
              correctAnswer: 2,
              explanation: "The best practice in Ruby for file operations is to use File.open with a block. When you pass a block to File.open, Ruby automatically closes the file when the block exits, even if an exception occurs inside the block. This approach is cleaner and less error-prone than manually closing files, as you don't have to remember to call File.close, and it handles exceptions gracefully. Example: File.open('file.txt', 'w') { |file| file.puts 'content' }"
            }
          ],
          flashcards: [
            {
              front: "What are the common file access modes in Ruby?",
              back: "Common file access modes in Ruby:\n\n- 'r' - Read-only, starts at beginning (default)\n- 'w' - Write-only, truncates existing file to zero length or creates a new file\n- 'a' - Append-only, starts at end of file or creates a new file\n- 'r+' - Read-write, starts at beginning\n- 'w+' - Read-write, truncates existing file to zero length or creates a new file\n- 'a+' - Read-append, starts at end of file or creates a new file\n\nAdd 'b' for binary mode (e.g., 'rb' for binary read)"
            },
            {
              front: "What's the difference between `File.read` and `File.readlines` in Ruby?",
              back: "`File.read(filename)` reads the entire file content as a single string, preserving all newlines and formatting.\n\n`File.readlines(filename)` reads the file and returns an array of strings, where each string is one line from the file (including the newline character unless the chomp: true option is used).\n\nUse `File.read` when you need the entire file as one string.\nUse `File.readlines` when you need to process a file line by line or need an array of lines."
            }
          ]
        },
        {
          id: "ruby-gems",
          title: "Gems and Bundler",
          description: "Working with Ruby's package management system",
          content: `
# Gems and Bundler in Ruby

Ruby gems are packages or libraries that extend Ruby's functionality. Bundler is a tool for managing gem dependencies in your Ruby projects.
          `,
          codeExamples: [
            {
              title: "Working with Gems",
              code: `# Installing gems
# From the command line:
# gem install nokogiri
# gem install rails -v 6.1.3

# Listing installed gems
# gem list

# Requiring a gem in your code
require 'json'

# Use the gem
person = { name: 'John', age: 30, city: 'New York' }
json_string = JSON.generate(person)
puts "JSON: #{json_string}"

parsed_person = JSON.parse('{"name":"Alice","age":25,"city":"San Francisco"}')
puts "Parsed: #{parsed_person['name']} is #{parsed_person['age']}"

# Creating a simple gem (directory structure)
# my_gem/
# ├── lib/
# │   └── my_gem.rb
# ├── my_gem.gemspec
# ├── Gemfile
# └── README.md

# Example my_gem.rb
=begin
module MyGem
  class Greeter
    def initialize(name)
      @name = name
    end
    
    def greet
      "Hello, #{@name}!"
    end
  end
end
=end

# Example gemspec
=begin
Gem::Specification.new do |s|
  s.name        = 'my_gem'
  s.version     = '0.1.0'
  s.summary     = "A simple gem example"
  s.description = "A longer description of my simple gem"
  s.authors     = ["Your Name"]
  s.email       = 'your.email@example.com'
  s.files       = ["lib/my_gem.rb"]
  s.homepage    = 'https://github.com/yourusername/my_gem'
  s.license     = 'MIT'
end
=end

# Building and installing a gem
# From the command line:
# cd my_gem
# gem build my_gem.gemspec
# gem install ./my_gem-0.1.0.gem

# Publishing a gem
# From the command line:
# gem push my_gem-0.1.0.gem`,
              explanation: "This example demonstrates the basics of working with Ruby gems. It shows how to install gems using the gem command, require them in your code, and use their functionality. It also outlines the basic structure of a gem with a simple example of a module, class, and gemspec file. The example includes commands for building, installing, and publishing gems. Ruby gems are the standard way to package and distribute Ruby code, making it easy to share and reuse functionality across projects."
            },
            {
              title: "Using Bundler",
              code: `# Installing Bundler
# From the command line:
# gem install bundler

# Example Gemfile
=begin
source 'https://rubygems.org'

gem 'nokogiri', '~> 1.12.5'
gem 'rack', '2.2.3'
gem 'sinatra'

group :development do
  gem 'pry'
  gem 'rubocop'
end

group :test do
  gem 'rspec'
  gem 'minitest'
end

group :development, :test do
  gem 'byebug'
end

# Specify a gem from a git repository
gem 'rails', git: 'https://github.com/rails/rails.git', branch: 'main'

# Specify a local gem
# gem 'my_gem', path: '../my_gem'
=end

# Installing dependencies
# From the command line:
# bundle install

# Using Bundler in your code
=begin
# app.rb
require 'bundler/setup'  # Set up load paths
Bundler.require               # Require all gems specified in Gemfile

# Now you can use the gems without requiring them individually
# For example, if you have 'sinatra' in your Gemfile:

get '/' do
  'Hello World!'
end
=end

# Requiring specific gem groups
=begin
# Only require the default and development groups
Bundler.require(:default, :development)
=end

# Updating gems
# From the command line:
# bundle update                # Update all gems
# bundle update nokogiri       # Update specific gem

# Gemfile.lock
# After running bundle install, a Gemfile.lock file is created
# This file locks the specific versions of gems used in your project
# It ensures that all developers use the same gem versions

# Creating a new project with Bundler
# From the command line:
# bundle gem my_new_gem

# This creates a directory structure with:
# - lib/ directory for your code
# - test/ or spec/ directory for tests
# - .gemspec file for gem metadata
# - Rakefile for common tasks
# - README and CHANGELOG files

# Bundler Binstubs
# From the command line:
# bundle binstubs rspec

# This creates executable scripts in the bin/ directory
# You can run them without prefixing with 'bundle exec'
# bin/rspec instead of bundle exec rspec

# Running scripts with Bundler
# From the command line:
# bundle exec ruby script.rb

# This runs the script in the context of the current bundle`,
              explanation: "This example demonstrates using Bundler, Ruby's dependency manager. It shows how to create a Gemfile to specify dependencies, how to install dependencies with bundle install, and how to use Bundler.require to load gems in your code. The example also covers more advanced Bundler features like gem groups, updating gems, the Gemfile.lock file, creating new projects with Bundler, and using Bundler to run scripts. Bundler is an essential tool for managing dependencies in Ruby projects, ensuring consistent environments across different machines and developers."
            }
          ],
          quiz: [
            {
              question: "What is the purpose of the Gemfile.lock file in a Ruby project?",
              options: [
                "It contains user-specific configuration options for gems",
                "It specifies which gems should be installed for the project",
                "It locks the exact versions of gems and their dependencies used in the project",
                "It contains the source code for all gems used in the project"
              ],
              correctAnswer: 2,
              explanation: "The Gemfile.lock file locks the exact versions of gems and their dependencies used in a Ruby project. When you run 'bundle install', Bundler resolves all dependencies and writes the specific versions it installed to Gemfile.lock. This ensures that everyone working on the project, and all deployment environments, use the exact same gem versions, preventing inconsistencies due to gem updates. The Gemfile specifies which gems to install (and version constraints), but Gemfile.lock ensures version consistency."
            }
          ],
          flashcards: [
            {
              front: "What is the difference between a Gemfile and a gemspec file in Ruby?",
              back: "Gemfile:\n- Used by Bundler to specify project dependencies\n- Lists gems needed for an application or project\n- Contains environment-specific gems (development, test, production)\n- Used primarily for applications\n- Located at the root of a project\n\ngemspec file:\n- Used to define a gem's metadata and dependencies\n- Contains information like name, version, author, description, and runtime dependencies\n- Used primarily when creating your own gems\n- Usually references the gemspec in the Gemfile when developing a gem\n- Named [gemname].gemspec"
            },
            {
              front: "What are the version constraints in a Gemfile?",
              back: "In a Gemfile, version constraints specify which versions of a gem are acceptable:\n\n- Exact version: gem 'rails', '6.1.3'\n- Greater than or equal: gem 'rails', '>= 6.1'\n- Less than or equal: gem 'rails', '<= 6.1'\n- Pessimistic constraint (~>): gem 'rails', '~> 6.1' (>= 6.1, < 7.0)\n- Pessimistic minor: gem 'rails', '~> 6.1.0' (>= 6.1.0, < 6.2.0)\n- Multiple constraints: gem 'rails', '> 6.0', '< 7.0'\n\nThe pessimistic constraint (~>) is commonly used as it allows minor updates (bug fixes) but prevents potentially breaking major updates."
            }
          ]
        },
        {
          id: "ruby-metaprogramming",
          title: "Metaprogramming",
          description: "Writing code that writes code in Ruby",
          content: `
# Metaprogramming in Ruby

Metaprogramming is the practice of writing code that writes or manipulates code. Ruby's dynamic nature makes it particularly well-suited for metaprogramming.
          `,
          codeExamples: [
            {
              title: "Dynamic Methods and Method Missing",
              code: `# Define methods dynamically
class Person
  attr_accessor :name, :age
  
  def initialize(name, age)
    @name = name
    @age = age
  end
  
  # Dynamically defining methods
  ["whisper", "say", "shout"].each do |action|
    define_method(action) do |message|
      case action
      when "whisper"
        "#{@name} whispers: #{message.downcase}..."
      when "say"
        "#{@name} says: #{message}"
      when "shout"
        "#{@name} shouts: #{message.upcase}!"
      end
    end
  end
  
  # method_missing to handle undefined methods
  def method_missing(method_name, *args, &block)
    if method_name.to_s.start_with?("knows_")
      skill = method_name.to_s[6..-1]  # Extract the skill name
      true  # Pretend the person knows all skills
    else
      super  # Pass to the usual method_missing handling
    end
  end
  
  # Important: redefine respond_to_missing? when using method_missing
  def respond_to_missing?(method_name, include_private = false)
    method_name.to_s.start_with?("knows_") || super
  end
end

# Create a person
person = Person.new("Alice", 30)

# Use dynamically defined methods
puts person.whisper("This is a secret")
puts person.say("Hello, world")
puts person.shout("attention please")

# Use method_missing
if person.knows_ruby?
  puts "#{person.name} knows Ruby"
end

# Method doesn't exist but not handled by method_missing
begin
  person.unknown_method
rescue NoMethodError => e
  puts "Error: #{e.message}"
end

# Defining singleton methods (methods on a specific object)
def person.dance
  "#{name} is dancing!"
end

puts person.dance

# Another person won't have the dance method
another_person = Person.new("Bob", 25)
begin
  another_person.dance
rescue NoMethodError => e
  puts "Error: #{e.message}"
end

# Dynamically defining class methods
class << Person
  def species
    "Homo sapiens"
  end
end

puts "Person species: #{Person.species}"

# Dynamically defining instance methods for all instances
class Person
  def self.can(action, &block)
    define_method(action, &block)
  end
end

Person.can :sing do |song|
  "#{@name} sings: ♪ #{song} ♪"
end

puts person.sing("La la la")
puts another_person.sing("Do re mi")`,
              explanation: "This example demonstrates dynamic method definition and handling in Ruby. It shows how to define methods dynamically using define_method, how to use method_missing to handle calls to undefined methods, how to add methods to specific objects (singleton methods), and how to define class methods and instance methods dynamically. These techniques allow for more flexible and concise code by generating methods at runtime rather than defining them statically. The method_missing approach is particularly powerful for creating flexible interfaces and domain-specific languages."
            },
            {
              title: "Eval Methods and Metaprogramming Techniques",
              code: `# Warning: eval is powerful but can be dangerous if used with untrusted input
# Basic eval - evaluates a string as code
str = "2 + 2"
result = eval(str)
puts "eval result: #{result}"  # 4

# instance_eval - evaluates in the context of an object
class Example
  def initialize
    @private_var = "I'm private"
  end
  
  private
  
  def private_method
    "This is private"
  end
end

obj = Example.new

# Access private methods and instance variables
result = obj.instance_eval do
  "Private var: #{@private_var}, Private method: #{private_method}"
end

puts result

# class_eval (or module_eval) - adds methods to a class
String.class_eval do
  def palindrome?
    self == self.reverse
  end
end

puts "level".palindrome?  # true
puts "ruby".palindrome?   # false

# Using define_method with class_eval
Array.class_eval do
  define_method :second do
    self[1]
  end
end

puts [10, 20, 30].second  # 20

# Creating attribute accessors manually
class Person
  def self.attributes(*attrs)
    attrs.each do |attr|
      # Define getter
      define_method(attr) do
        instance_variable_get("@#{attr}")
      end
      
      # Define setter
      define_method("#{attr}=") do |value|
        instance_variable_set("@#{attr}", value)
      end
    end
  end
  
  attributes :name, :age, :email
end

person = Person.new
person.name = "Alice"
person.age = 30
person.email = "alice@example.com"

puts "Name: #{person.name}, Age: #{person.age}, Email: #{person.email}"

# Creating a simple DSL (Domain Specific Language)
class EventDSL
  def initialize(&block)
    @event = {}
    instance_eval(&block) if block_given?
  end
  
  def name(value)
    @event[:name] = value
  end
  
  def date(value)
    @event[:date] = value
  end
  
  def location(value)
    @event[:location] = value
  end
  
  def to_s
    "Event: #{@event[:name]} on #{@event[:date]} at #{@event[:location]}"
  end
end

event = EventDSL.new do
  name "Ruby Conference"
  date "2023-09-15"
  location "San Francisco"
end

puts event

# Using send to call methods dynamically
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
    a / b.to_f
  end
end

calc = Calculator.new
operations = ["add", "subtract", "multiply", "divide"]
a, b = 10, 2

operations.each do |op|
  puts "#{op}: #{calc.send(op, a, b)}"
end

# Using const_get to access classes dynamically
shapes = ["Array", "Hash", "String"]

shapes.each do |shape|
  klass = Object.const_get(shape)
  puts "#{shape} is a #{klass.superclass}"
end

# Creating a simple memoization implementation
module Memoize
  def memoize(method_name)
    original_method = instance_method(method_name)
    cache_var = "@#{method_name}_cache"
    
    define_method(method_name) do |*args|
      cache = instance_variable_get(cache_var) || {}
      
      key = args
      if cache.has_key?(key)
        return cache[key]
      else
        result = original_method.bind(self).call(*args)
        cache[key] = result
        instance_variable_set(cache_var, cache)
        return result
      end
    end
  end
end

class MathCalculations
  extend Memoize
  
  def fibonacci(n)
    puts "Computing fibonacci(#{n})"  # To show when computation happens
    return n if n <= 1
    fibonacci(n-1) + fibonacci(n-2)
  end
  
  memoize :fibonacci
end

math = MathCalculations.new
puts "Result: #{math.fibonacci(5)}"  # Will compute all values
puts "Result again: #{math.fibonacci(5)}"  # Will use cached result`,
              explanation: "This example covers advanced metaprogramming techniques in Ruby. It demonstrates the use of eval, instance_eval, and class_eval for code evaluation in different contexts, creating custom attribute accessors, building domain-specific languages (DSLs), dynamically calling methods with send, accessing classes with const_get, and implementing method memoization. These techniques harness Ruby's dynamic nature to create flexible, concise, and expressive code. However, it's important to note that methods like eval can pose security risks if used with untrusted input."
            }
          ],
          quiz: [
            {
              question: "What is the purpose of 'method_missing' in Ruby metaprogramming?",
              options: [
                "To raise an error when a method doesn't exist",
                "To dynamically define new methods at runtime",
                "To intercept calls to undefined methods and handle them dynamically",
                "To prevent methods from being overridden"
              ],
              correctAnswer: 2,
              explanation: "method_missing is a Ruby method that's called when an object receives a message (method call) that it doesn't understand. By overriding method_missing, you can intercept calls to undefined methods and handle them dynamically, rather than raising a NoMethodError. This enables creating flexible interfaces and dynamic proxies. It's a powerful metaprogramming technique for implementing ghost methods that appear to exist but are actually handled at runtime. When using method_missing, it's good practice to also override respond_to_missing? for proper reflection."
            }
          ],
          flashcards: [
            {
              front: "What are the key metaprogramming methods in Ruby and what do they do?",
              back: "Key metaprogramming methods in Ruby:\n\n- define_method: Dynamically creates instance methods\n- method_missing: Intercepts calls to undefined methods\n- send/public_send: Calls a method by its name (as a symbol or string)\n- instance_eval: Evaluates code in the context of an object instance\n- class_eval/module_eval: Evaluates code in the context of a class/module\n- instance_variable_get/set: Accesses instance variables by name\n- const_get/const_set: Accesses constants by name\n- eval: Evaluates a string as Ruby code (use with caution)\n- binding: Captures the execution context for later evaluation"
            },
            {
              front: "What are the dangers of metaprogramming in Ruby and how can they be mitigated?",
              back: "Dangers of metaprogramming:\n\n1. Readability issues - code becomes harder to understand\n2. Debugging difficulty - dynamic code is hard to trace\n3. Security risks - particularly with 'eval' and user input\n4. Performance overhead - dynamic methods can be slower\n5. Maintainability problems - future developers may struggle\n\nMitigation strategies:\n\n1. Document metaprogramming code thoroughly\n2. Avoid 'eval' with untrusted input\n3. Prefer safer alternatives (define_method over eval)\n4. Use metaprogramming judiciously, only when it offers clear benefits\n5. Write comprehensive tests\n6. Consider generating code at load time rather than runtime"
            }
          ]
        },
        {
          id: "ruby-testing",
          title: "Testing",
          description: "Testing your Ruby code with various frameworks and techniques",
          content: `
# Testing in Ruby

Testing is a crucial part of Ruby development, with a rich ecosystem of testing frameworks and tools available.
          `,
          codeExamples: [
            {
              title: "MiniTest",
              code: `# minitest_example.rb
require 'minitest/autorun'

# Class to test
class Calculator
  def add(a, b)
    a + b
  end
  
  def subtract(a, b)
    a - b
  end
  
  def divide(a, b)
    raise ZeroDivisionError, "Cannot divide by zero" if b == 0
    a / b.to_f
  end
end

# Test class
class TestCalculator < Minitest::Test
  def setup
    @calc = Calculator.new
  end
  
  def test_add
    assert_equal 8, @calc.add(5, 3)
    assert_equal 0, @calc.add(-5, 5)
    assert_equal -2, @calc.add(-5, 3)
  end
  
  def test_subtract
    assert_equal 2, @calc.subtract(5, 3)
    assert_equal -10, @calc.subtract(-5, 5)
  end
  
  def test_divide
    assert_equal 2.5, @calc.divide(5, 2)
    assert_in_delta 1.6667, @calc.divide(5, 3), 0.001
  end
  
  def test_divide_by_zero
    assert_raises ZeroDivisionError do
      @calc.divide(5, 0)
    end
  end
  
  def test_with_custom_message
    assert @calc.add(1, 1) == 2, "1 + 1 should equal 2"
  end
end

# MiniTest::Spec style
describe Calculator do
  before do
    @calc = Calculator.new
  end
  
  describe "#add" do
    it "correctly adds two numbers" do
      _(@calc.add(2, 3)).must_equal 5
    end
    
    it "handles negative numbers" do
      _(@calc.add(-1, 1)).must_equal 0
    end
  end
  
  describe "#divide" do
    it "correctly divides two numbers" do
      _(@calc.divide(10, 2)).must_equal 5
    end
    
    it "raises error when dividing by zero" do
      _ { @calc.divide(10, 0) }.must_raise ZeroDivisionError
    end
  end
end`,
              explanation: "This example demonstrates unit testing with MiniTest, Ruby's built-in testing framework. It shows two different styles of writing tests: the traditional Test::Unit style using assert methods, and the more modern spec-style syntax that uses expectations. The example tests a simple Calculator class, covering basic assertions, testing for exceptions, and using custom error messages. MiniTest is included in the Ruby standard library, making it a convenient choice for testing Ruby code."
            },
            {
              title: "RSpec and Test Techniques",
              code: `# Note: RSpec requires the 'rspec' gem to be installed
# gem install rspec

# calculator.rb
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
    raise ArgumentError, "Division by zero is not allowed" if b.zero?
    a / b.to_f
  end
end

# calculator_spec.rb
require 'rspec'
require_relative 'calculator'

describe Calculator do
  # Create a new calculator before each test
  subject(:calc) { Calculator.new }
  
  # Shared examples
  shared_examples "basic arithmetic" do |method, a, b, expected|
    it "correctly calculates #{a} #{method} #{b}" do
      result = calc.send(method, a, b)
      expect(result).to eq(expected)
    end
  end
  
  describe "#add" do
    context "with positive numbers" do
      include_examples "basic arithmetic", :add, 5, 3, 8
    end
    
    context "with negative numbers" do
      include_examples "basic arithmetic", :add, -5, -3, -8
    end
    
    it "returns the same value when adding zero" do
      expect(calc.add(5, 0)).to eq(5)
    end
  end
  
  describe "#subtract" do
    include_examples "basic arithmetic", :subtract, 5, 3, 2
    include_examples "basic arithmetic", :subtract, 3, 5, -2
  end
  
  describe "#multiply" do
    include_examples "basic arithmetic", :multiply, 5, 3, 15
    include_examples "basic arithmetic", :multiply, -5, 3, -15
    
    it "returns zero when multiplying by zero" do
      expect(calc.multiply(5, 0)).to eq(0)
    end
  end
  
  describe "#divide" do
    context "when divisor is non-zero" do
      include_examples "basic arithmetic", :divide, 10, 2, 5.0
      
      it "returns a float result for non-integer division" do
        result = calc.divide(5, 2)
        expect(result).to eq(2.5)
        expect(result).to be_a(Float)
      end
    end
    
    context "when divisor is zero" do
      it "raises an ArgumentError" do
        expect { calc.divide(5, 0) }.to raise_error(ArgumentError, /not allowed/)
      end
    end
  end
  
  # Mocking and stubbing
  describe "using doubles and stubs" do
    it "can work with a test double" do
      fake_calculator = double("calculator")
      allow(fake_calculator).to receive(:add).and_return(42)
      
      expect(fake_calculator.add(1, 1)).to eq(42)
    end
    
    it "can create partial doubles" do
      real_calc = Calculator.new
      allow(real_calc).to receive(:add).and_return(100)
      
      expect(real_calc.add(5, 3)).to eq(100)  # Stubbed method
      expect(real_calc.subtract(5, 3)).to eq(2)  # Real method
    end
    
    it "can set expectations on method calls" do
      expect_calc = double("calculator")
      expect(expect_calc).to receive(:add).with(5, 3).and_return(8)
      
      expect_calc.add(5, 3)
      # Test will fail if add(5, 3) is not called or called with wrong arguments
    end
  end
end

# Commenting out as an example of how you'd typically run RSpec
# To run the tests:
# rspec calculator_spec.rb

# To run with detailed formatting:
# rspec calculator_spec.rb --format documentation`,
              explanation: "This example demonstrates testing with RSpec, a popular testing framework for Ruby. It illustrates RSpec's expressive syntax, which uses describe, context, and it blocks to organize tests. The example shows various RSpec features like shared examples, different expectation matchers, test doubles (mocks), method stubbing, and setting expectations on method calls. RSpec's readable syntax makes it a popular choice for behavior-driven development (BDD) in Ruby, allowing tests to serve as living documentation of how the code should behave."
            }
          ],
          quiz: [
            {
              question: "What is the primary difference between MiniTest and RSpec in Ruby?",
              options: [
                "MiniTest only supports unit testing, while RSpec supports integration testing as well",
                "MiniTest is included in Ruby's standard library, while RSpec is a separate gem",
                "MiniTest uses assertions, while RSpec uses expectations",
                "MiniTest is slower but more reliable than RSpec"
              ],
              correctAnswer: 1,
              explanation: "The primary difference is that MiniTest is included in Ruby's standard library, making it available in any Ruby installation without additional gems, while RSpec is a separate gem that needs to be installed. Both frameworks support different styles of testing (unit, integration, etc.), both can use assertions or expectations (MiniTest supports both assert_equal and expect syntax), and both have comparable performance. Each has its own strengths: MiniTest is lightweight and bundled with Ruby, while RSpec has a more expressive DSL and extensive features."
            }
          ],
          flashcards: [
            {
              front: "What are the key components of a test suite in Ruby?",
              back: "Key components of a Ruby test suite:\n\n1. Test framework (MiniTest, RSpec, etc.)\n2. Test files/classes that group related tests\n3. Individual test methods/examples that test specific functionality\n4. Setup/teardown methods to prepare test environment\n5. Assertions/expectations that verify results\n6. Mocks and stubs for isolating units of code\n7. Fixtures or factories for test data\n8. Test runners to execute tests and report results\n9. Configuration for test environments\n10. Coverage tools to measure test coverage"
            },
            {
              front: "What is the difference between mocks and stubs in testing?",
              back: "Stubs:\n- Provide canned answers to method calls\n- Used to simulate specific return values\n- Don't verify whether methods were called\n- Example: `allow(object).to receive(:method).and_return(value)`\n\nMocks:\n- Also provide canned answers, but additionally verify method calls\n- Used to ensure that specific methods are called with specific arguments\n- Fail the test if expectations aren't met\n- Example: `expect(object).to receive(:method).with(args)`\n\nSimply put: stubs are for state verification, mocks are for behavior verification."
            }
          ]
        }
      ]
    }
  ]
};
