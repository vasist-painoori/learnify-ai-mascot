
import { Topic } from '../../types';

export const stringManipulationTopic: Topic = {
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
puts "I love #{language} programming"  # I love Ruby programming`,
      explanation: "This example demonstrates a range of string manipulation techniques in Ruby, including basic methods like upcase and downcase, substring extraction, splitting and joining strings, replacement with gsub, and interpolation."
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
      back: "In Ruby, multiline strings can be created using the heredoc syntax with <<- followed by a delimiter (often TEXT, EOF, or HTML). The string continues until the delimiter appears on a line by itself."
    }
  ]
};
