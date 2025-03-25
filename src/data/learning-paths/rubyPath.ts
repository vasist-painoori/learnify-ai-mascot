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
          id: "ruby-introduction",
          title: "Introduction to Ruby",
          description: "Get started with Ruby and understand its basic syntax",
          content: `
# Introduction to Ruby

Ruby is a dynamic, open source programming language with a focus on simplicity and productivity. It has an elegant syntax that is natural to read and easy to write.
          `,
          codeExamples: [
            {
              title: "Hello, World!",
              code: `puts "Hello, World!"`,
              explanation: "This is the classic first program. It prints 'Hello, World!' to the console."
            }
          ],
          quiz: [
            {
              question: "What is the primary goal of Ruby?",
              options: ["Speed", "Simplicity", "Security", "Scalability"],
              correctAnswer: 1,
              explanation: "Ruby was designed with simplicity and programmer productivity in mind."
            }
          ],
          flashcards: [
            {
              front: "What type of language is Ruby?",
              back: "Ruby is a dynamic, interpreted, object-oriented language."
            }
          ]
        },
        {
          id: "ruby-syntax",
          title: "Basic Syntax",
          description: "Learn about Ruby's syntax, variables, and data types",
          content: `
# Ruby Syntax

Ruby's syntax is designed to be easy to read and write. It is heavily influenced by Perl and Smalltalk.
          `,
          codeExamples: [
            {
              title: "Variables",
              code: `
name = "Alice"
age = 30
puts "Name: \#{name}, Age: \#{age}"
              `,
              explanation: "This example shows how to declare variables and use string interpolation."
            }
          ],
          quiz: [
            {
              question: "How do you declare a variable in Ruby?",
              options: ["var name = 'value'", "name := 'value'", "name = 'value'", "$name = 'value'"],
              correctAnswer: 2,
              explanation: "In Ruby, you declare a variable simply by assigning a value to a name."
            }
          ],
          flashcards: [
            {
              front: "What is string interpolation in Ruby?",
              back: "String interpolation is a way to embed expressions inside strings using \#{expression}."
            }
          ]
        },
        {
          id: "ruby-data-types",
          title: "Data Types",
          description: "Explore the different data types available in Ruby",
          content: `
# Data Types in Ruby

Ruby supports various data types including numbers, strings, arrays, and hashes.
          `,
          codeExamples: [
            {
              title: "Data Types",
              code: `
number = 42
string = "Hello"
array = [1, 2, 3]
hash = { "name" => "Alice", "age" => 30 }

puts number.class  # Integer
puts string.class  # String
puts array.class   # Array
puts hash.class    # Hash
              `,
              explanation: "This example demonstrates the basic data types in Ruby and how to check their classes."
            }
          ],
          quiz: [
            {
              question: "What is the class of an array in Ruby?",
              options: ["List", "Array", "Collection", "Sequence"],
              correctAnswer: 1,
              explanation: "In Ruby, the class of an array is Array."
            }
          ],
          flashcards: [
            {
              front: "What are the main data types in Ruby?",
              back: "The main data types in Ruby are numbers (Integer, Float), strings (String), arrays (Array), and hashes (Hash)."
            }
          ]
        },
        {
          id: "ruby-operators",
          title: "Operators",
          description: "Learn about the different operators in Ruby",
          content: `
# Operators in Ruby

Ruby supports a wide range of operators including arithmetic, comparison, and logical operators.
          `,
          codeExamples: [
            {
              title: "Arithmetic Operators",
              code: `
a = 10
b = 5

puts a + b  # 15
puts a - b  # 5
puts a * b  # 50
puts a / b  # 2
puts a % b  # 0
              `,
              explanation: "This example demonstrates the basic arithmetic operators in Ruby."
            }
          ],
          quiz: [
            {
              question: "What does the % operator do in Ruby?",
              options: ["Division", "Multiplication", "Modulus", "Exponentiation"],
              correctAnswer: 2,
              explanation: "The % operator in Ruby returns the remainder of a division."
            }
          ],
          flashcards: [
            {
              front: "What are the main types of operators in Ruby?",
              back: "The main types of operators in Ruby are arithmetic, comparison, and logical operators."
            }
          ]
        },
        {
          id: "ruby-control-structures",
          title: "Control Structures",
          description: "Understand how to use control structures in Ruby",
          content: `
# Control Structures in Ruby

Ruby provides control structures such as if, else, elsif, and case for controlling the flow of execution.
          `,
          codeExamples: [
            {
              title: "If-Else Statement",
              code: `
age = 20

if age >= 18
  puts "You are an adult"
else
  puts "You are not an adult"
end
              `,
              explanation: "This example demonstrates the use of an if-else statement in Ruby."
            }
          ],
          quiz: [
            {
              question: "Which keyword is used for 'else if' in Ruby?",
              options: ["elseif", "else if", "elsif", "elif"],
              correctAnswer: 2,
              explanation: "In Ruby, the keyword used for 'else if' is elsif."
            }
          ],
          flashcards: [
            {
              front: "What are the main control structures in Ruby?",
              back: "The main control structures in Ruby are if, else, elsif, and case."
            }
          ]
        },
        {
          id: "ruby-loops",
          title: "Loops",
          description: "Learn about the different types of loops in Ruby",
          content: `
# Loops in Ruby

Ruby supports various types of loops including while, until, for, and each.
          `,
          codeExamples: [
            {
              title: "While Loop",
              code: `
i = 0
while i < 5
  puts i
  i += 1
end
              `,
              explanation: "This example demonstrates the use of a while loop in Ruby."
            }
          ],
          quiz: [
            {
              question: "Which loop is used to iterate over a collection in Ruby?",
              options: ["while", "until", "for", "each"],
              correctAnswer: 3,
              explanation: "The each loop is commonly used to iterate over a collection in Ruby."
            }
          ],
          flashcards: [
            {
              front: "What are the main types of loops in Ruby?",
              back: "The main types of loops in Ruby are while, until, for, and each."
            }
          ]
        },
        {
          id: "ruby-methods",
          title: "Methods",
          description: "Understand how to define and use methods in Ruby",
          content: `
# Methods in Ruby

Methods are blocks of code that can be called by name. They are defined using the def keyword.
          `,
          codeExamples: [
            {
              title: "Defining a Method",
              code: `
def greet(name)
  puts "Hello, \#{name}!"
end

greet("Alice")  # Hello, Alice!
              `,
              explanation: "This example demonstrates how to define and call a method in Ruby."
            }
          ],
          quiz: [
            {
              question: "Which keyword is used to define a method in Ruby?",
              options: ["method", "def", "function", "define"],
              correctAnswer: 1,
              explanation: "In Ruby, the def keyword is used to define a method."
            }
          ],
          flashcards: [
            {
              front: "How do you define a method in Ruby?",
              back: "Methods in Ruby are defined using the def keyword, followed by the method name and parameters."
            }
          ]
        },
        {
          id: "ruby-classes",
          title: "Classes and Objects",
          description: "Learn about object-oriented programming in Ruby",
          content: `
# Classes and Objects in Ruby

Ruby is an object-oriented language. Everything in Ruby is an object.
          `,
          codeExamples: [
            {
              title: "Defining a Class",
              code: `
class Dog
  def initialize(name, breed)
    @name = name
    @breed = breed
  end

  def bark
    puts "Woof!"
  end
end

dog = Dog.new("Buddy", "Golden Retriever")
dog.bark  # Woof!
              `,
              explanation: "This example demonstrates how to define a class and create an object in Ruby."
            }
          ],
          quiz: [
            {
              question: "What is the purpose of the initialize method in a Ruby class?",
              options: ["To define the class", "To create a new object", "To initialize the object", "To destroy the object"],
              correctAnswer: 2,
              explanation: "The initialize method is used to initialize the object when it is created."
            }
          ],
          flashcards: [
            {
              front: "What is the main concept of object-oriented programming?",
              back: "The main concept of object-oriented programming is to organize code into classes and objects."
            }
          ]
        },
        {
          id: "ruby-inheritance",
          title: "Inheritance",
          description: "Understand how to use inheritance in Ruby",
          content: `
# Inheritance in Ruby

Inheritance allows a class to inherit properties and methods from another class.
          `,
          codeExamples: [
            {
              title: "Inheriting from a Class",
              code: `
class Animal
  def speak
    puts "Generic animal sound"
  end
end

class Dog < Animal
  def speak
    puts "Woof!"
  end
end

animal = Animal.new
animal.speak  # Generic animal sound

dog = Dog.new
dog.speak  # Woof!
              `,
              explanation: "This example demonstrates how to use inheritance in Ruby."
            }
          ],
          quiz: [
            {
              question: "What does inheritance allow a class to do?",
              options: ["Create new objects", "Inherit properties and methods", "Destroy objects", "Define methods"],
              correctAnswer: 1,
              explanation: "Inheritance allows a class to inherit properties and methods from another class."
            }
          ],
          flashcards: [
            {
              front: "What is inheritance in object-oriented programming?",
              back: "Inheritance is a mechanism where a class inherits properties and methods from another class."
            }
          ]
        },
        {
          id: "ruby-modules",
          title: "Modules",
          description: "Learn about modules in Ruby",
          content: `
# Modules in Ruby

Modules are a way of grouping together methods, classes, and constants.
          `,
          codeExamples: [
            {
              title: "Defining a Module",
              code: `
module MyModule
  def self.greet(name)
    puts "Hello, \#{name}!"
  end
end

MyModule.greet("Alice")  # Hello, Alice!
              `,
              explanation: "This example demonstrates how to define and use a module in Ruby."
            }
          ],
          quiz: [
            {
              question: "What is the purpose of modules in Ruby?",
              options: ["To define classes", "To group methods, classes, and constants", "To create objects", "To define variables"],
              correctAnswer: 1,
              explanation: "Modules are used to group together methods, classes, and constants."
            }
          ],
          flashcards: [
            {
              front: "What are modules in Ruby?",
              back: "Modules are a way of grouping together methods, classes, and constants."
            }
          ]
        },
        {
          id: "ruby-mixins",
          title: "Mixins",
          description: "Understand how to use mixins in Ruby",
          content: `
# Mixins in Ruby

Mixins allow modules to be included in classes, providing a way to share methods between classes.
          `,
          codeExamples: [
            {
              title: "Using a Mixin",
              code: `
module MyMixin
  def greet
    puts "Hello from MyMixin!"
  end
end

class MyClass
  include MyMixin
end

obj = MyClass.new
obj.greet  # Hello from MyMixin!
              `,
              explanation: "This example demonstrates how to use a mixin in Ruby."
            }
          ],
          quiz: [
            {
              question: "What do mixins allow modules to do?",
              options: ["Define classes", "Be included in classes", "Create objects", "Define variables"],
              correctAnswer: 1,
              explanation: "Mixins allow modules to be included in classes, providing a way to share methods."
            }
          ],
          flashcards: [
            {
              front: "What are mixins in Ruby?",
              back: "Mixins allow modules to be included in classes, providing a way to share methods between classes."
            }
          ]
        },
        {
          id: "ruby-blocks",
          title: "Blocks",
          description: "Learn about blocks in Ruby",
          content: `
# Blocks in Ruby

Blocks are chunks of code that can be passed to methods. They are similar to anonymous functions.
          `,
          codeExamples: [
            {
              title: "Using a Block",
              code: `
[1, 2, 3].each do |number|
  puts number * 2
end
              `,
              explanation: "This example demonstrates how to use a block in Ruby."
            }
          ],
          quiz: [
            {
              question: "What are blocks in Ruby similar to?",
              options: ["Classes", "Modules", "Anonymous functions", "Variables"],
              correctAnswer: 2,
              explanation: "Blocks in Ruby are similar to anonymous functions."
            }
          ],
          flashcards: [
            {
              front: "What are blocks in Ruby?",
              back: "Blocks are chunks of code that can be passed to methods, similar to anonymous functions."
            }
          ]
        },
        {
          id: "ruby-exceptions",
          title: "Exception Handling",
          description: "Understand how to handle exceptions in Ruby",
          content: `
# Exception Handling in Ruby

Exception handling is a way to deal with errors that occur during the execution of a program.
          `,
          codeExamples: [
            {
              title: "Handling Exceptions",
              code: `
begin
  result = 10 / 0
rescue ZeroDivisionError => e
  puts "Error: \#{e.message}"
end
              `,
              explanation: "This example demonstrates how to handle exceptions in Ruby."
            }
          ],
          quiz: [
            {
              question: "What is the purpose of exception handling?",
              options: ["To define classes", "To handle errors", "To create objects", "To define variables"],
              correctAnswer: 1,
              explanation: "Exception handling is used to deal with errors that occur during the execution of a program."
            }
          ],
          flashcards: [
            {
              front: "What is exception handling in Ruby?",
              back: "Exception handling is a way to deal with errors that occur during the execution of a program."
            }
          ]
        },
        {
          id: "ruby-file-io",
          title: "File I/O",
          description: "Learn how to read from and write to files in Ruby",
          content: `
# File I/O in Ruby

File I/O allows you to read from and write to files.
          `,
          codeExamples: [
            {
              title: "Reading from a File",
              code: `
File.open("my_file.txt", "r") do |file|
  file.each_line do |line|
    puts line
  end
end
              `,
              explanation: "This example demonstrates how to read from a file in Ruby."
            }
          ],
          quiz: [
            {
              question: "What does File I/O allow you to do?",
              options: ["Define classes", "Read from and write to files", "Create objects", "Define variables"],
              correctAnswer: 1,
              explanation: "File I/O allows you to read from and write to files."
            }
          ],
          flashcards: [
            {
              front: "What is File I/O in Ruby?",
              back: "File I/O allows you to read from and write to files."
            }
          ]
        },
        {
          id: "ruby-regular-expressions",
          title: "Regular Expressions",
          description: "Understand how to use regular expressions in Ruby",
          content: `
# Regular Expressions in Ruby

Regular expressions are patterns used to match character combinations in strings.
          `,
          codeExamples: [
            {
              title: "Matching a Pattern",
              code: `
string = "Hello, World!"
if string =~ /Hello/
  puts "String contains 'Hello'"
end
              `,
              explanation: "This example demonstrates how to use regular expressions in Ruby."
            }
          ],
          quiz: [
            {
              question: "What are regular expressions used for?",
              options: ["To define classes", "To match character combinations in strings", "To create objects", "To define variables"],
              correctAnswer: 1,
              explanation: "Regular expressions are patterns used to match character combinations in strings."
            }
          ],
          flashcards: [
            {
              front: "What are regular expressions in Ruby?",
              back: "Regular expressions are patterns used to match character combinations in strings."
            }
          ]
        },
        {
          id: "ruby-gems",
          title: "Gems",
          description: "Learn about gems in Ruby",
          content: `
# Gems in Ruby

Gems are packages of Ruby code that can be installed and used in your projects.
          `,
          codeExamples: [
            {
              title: "Installing a Gem",
              code: `# gem install rails`,
              explanation: "This example shows how to install a gem using the gem command."
            }
          ],
          quiz: [
            {
              question: "What are gems in Ruby?",
              options: ["Classes", "Packages of Ruby code", "Objects", "Variables"],
              correctAnswer: 1,
              explanation: "Gems are packages of Ruby code that can be installed and used in your projects."
            }
          ],
          flashcards: [
            {
              front: "What are gems in Ruby?",
              back: "Gems are packages of Ruby code that can be installed and used in your projects."
            }
          ]
        },
        {
          id: "ruby-testing",
          title: "Testing",
          description: "Understand how to write tests in Ruby",
          content: `
# Testing in Ruby

Testing is a way to ensure that your code works as expected.
          `,
          codeExamples: [
            {
              title: "Writing a Test",
              code: `
require 'test/unit'

class MyTest < Test::Unit::TestCase
  def test_addition
    assert_equal 4, 2 + 2
  end
end
              `,
              explanation: "This example demonstrates how to write a test in Ruby using the test/unit library."
            }
          ],
          quiz: [
            {
              question: "What is the purpose of testing?",
              options: ["To define classes", "To ensure that your code works as expected", "To create objects", "To define variables"],
              correctAnswer: 1,
              explanation: "Testing is a way to ensure that your code works as expected."
            }
          ],
          flashcards: [
            {
              front: "What is testing in Ruby?",
              back: "Testing is a way to ensure that your code works as expected."
            }
          ]
        },
        {
          id: "ruby-debugging",
          title: "Debugging",
          description: "Learn how to debug Ruby code",
          content: `
# Debugging in Ruby

Debugging is the process of finding and fixing errors in your code.
          `,
          codeExamples: [
            {
              title: "Using the Debugger",
              code: `
# require 'debug'
# a = 5
# b = 10
# debugger
# puts a + b
              `,
              explanation: "This example shows how to use the debugger in Ruby."
            }
          ],
          quiz: [
            {
              question: "What is debugging?",
              options: ["Defining classes", "Finding and fixing errors", "Creating objects", "Defining variables"],
              correctAnswer: 1,
              explanation: "Debugging is the process of finding and fixing errors in your code."
            }
          ],
          flashcards: [
            {
              front: "What is debugging in Ruby?",
              back: "Debugging is the process of finding and fixing errors in your code."
            }
          ]
        },
        {
          id: "ruby-string-manipulation",
          title: "String Manipulation",
          description: "Advanced string manipulation techniques in Ruby",
          content: `
# String Manipulation in Ruby

Ruby provides powerful tools for manipulating strings, making text processing tasks straightforward and elegant.
          `,
          codeExamples: [
            {
              title: "String Methods",
              code: `# Basic string methods
str = "Hello, Ruby!"
puts str.upcase      # HELLO, RUBY!
puts str.downcase    # hello, ruby!
puts str.length      # 12
puts str.reverse     # !ybuR ,olleH

# Substring
puts str[0,5]       # Hello
puts str[-5..-1]    # Ruby!

# Split and join
words = str.split(", ")
puts words.inspect  # ["Hello", "Ruby!"]
puts words.join("_")  # Hello_Ruby!

# String replacement
puts str.gsub("Ruby", "World")  # Hello, World!

# String interpolation
language = "Ruby"
puts "I love #{language} programming"  # I love Ruby programming

# Multiline strings
multiline = <<-TEXT
This is a multiline string
in Ruby. It can span
multiple lines.
TEXT
puts multiline

# String case conversion
message = "wElCoMe To RuBy"
puts message.capitalize  # Welcome to ruby
puts message.swapcase    # WeLoMe tO rUbY

# Checking content
puts "Does it contain Ruby? #{str.include?('Ruby')}"  # true
puts "Does it start with Hello? #{str.start_with?('Hello')}"  # true
puts "Does it end with world? #{str.end_with?('world')}"  # false

# Stripping whitespace
padded = "  padded string  "
puts padded.strip.inspect  # "padded string"
puts padded.lstrip.inspect  # "padded string  "
puts padded.rstrip.inspect  # "  padded string"

# String comparison
puts "apple" <=> "banana"  # -1 (less than)
puts "banana" <=> "apple"  # 1 (greater than)
puts "apple" <=> "apple"   # 0 (equal)

# Center, left justify, right justify
word = "Ruby"
puts word.center(10, '*')  # ***Ruby***
puts word.ljust(10, '*')   # Ruby******
puts word.rjust(10, '*')   # ******Ruby

# String inspection
puts "Line 1\\nLine 2".inspect  # "Line 1\\nLine 2"

# Using Regular Expressions
phone = "Call me at 555-123-4567"
puts phone.gsub(/\\d{3}-\\d{3}-\\d{4}/, "XXX-XXX-XXXX")  # Call me at XXX-XXX-XXXX

# Censoring words
text = "The stupid cat broke the damn vase"
censored = text.gsub(/stupid|damn/, "****")
puts censored  # The **** cat broke the **** vase

# Gsub with regex groups
formatted = "2023-11-23".gsub(/(\\d{4})-(\\d{2})-(\\d{2})/, '\\3/\\2/\\1')
puts formatted  # 23/11/2023

# Matching modifiers
email = "user@example.com"
puts email.match?(/^[\\w.%+-]+@[\\w.-]+\\.[a-z]{2,}$/i)  # true`,
              explanation: "This example demonstrates a wide range of string manipulation techniques in Ruby, including basic methods like upcase and downcase, substring extraction, splitting and joining strings, replacement with gsub, interpolation, multiline strings, case conversion, content checking, whitespace handling, string comparison, justification, and regular expressions for pattern matching and replacement."
            }
          ],
          quiz: [
            {
              question: "Which method would you use to replace all occurrences of a pattern in a string?",
              options: ["replace", "sub", "gsub", "substitute"],
              correctAnswer: 2,
              explanation: "The gsub method in Ruby is used to replace all occurrences of a pattern in a string. The sub method only replaces the first occurrence, while replace and substitute aren't standard Ruby string methods for this purpose."
            }
          ],
          flashcards: [
            {
              front: "What is the difference between sub and gsub in Ruby?",
              back: "In Ruby, sub replaces only the first occurrence of a pattern in a string, while gsub (global substitution) replaces all occurrences of the pattern throughout the string."
            },
            {
              front: "How can you create a multiline string in Ruby?",
              back: "In Ruby, multiline strings can be created using the heredoc syntax with <<- followed by a delimiter (often TEXT, EOF, or HTML). The string continues until the delimiter appears on a line by itself. Example:\n\nmultiline = <<-TEXT\nThis is a\nmultiline string\nTEXT"
            }
          ]
        }
      ]
    }
  ]
};
