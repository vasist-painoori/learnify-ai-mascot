
import { Topic } from '../../types';

export const loopsTopic: Topic = {
  id: "ruby-loops",
  title: "Loops",
  description: "Learn about the different types of loops in Ruby",
  content: `
<h1>Loops in Ruby</h1>

<p>Sometimes you need your program to repeat something over and over. Maybe you want to print numbers from 1 to 100, or go through every item in a shopping list. Writing the same code 100 times would be crazy — that's where <strong>loops</strong> come in. A loop repeats a block of code until a certain condition is met.</p>

<p>The <strong>while loop</strong> keeps running as long as a condition is true. Think of it like saying, "While I still have homework, keep working." Once the condition becomes false (homework is done!), the loop stops. Be careful though — if the condition never becomes false, you'll create an <strong>infinite loop</strong> and your program will run forever!</p>

<p>The <strong>until loop</strong> is the opposite of while. It keeps running <em>until</em> a condition becomes true. So <code>until i >= 5</code> means "keep going until i reaches 5." It's the same logic as while, just written in a way that sometimes reads more naturally.</p>

<p>Ruby's most popular loop is the <strong>each loop</strong>. Instead of manually counting with a variable, <code>each</code> goes through every item in a collection (like an array) one at a time and lets you do something with it. It's the "Ruby way" of looping, and you'll see it everywhere. The syntax looks like <code>array.each do |item|</code> — the variable between the <code>|pipes|</code> holds the current item on each pass.</p>

<p>There's also the <strong>times loop</strong>, which is the simplest of all. Just write <code>5.times do</code> and the block runs exactly 5 times. No counters, no conditions — just "do this thing N times." It's perfect for simple repetition and is one of those things that makes Ruby feel magical compared to other languages.</p>
  `,
  codeExamples: [
    {
      title: "Different Types of Loops",
      code: `# While loop\ni = 1\nwhile i <= 5\n  puts "Count: \#{i}"\n  i += 1\nend\n\n# Until loop (opposite of while)\nj = 1\nuntil j > 5\n  puts "Until count: \#{j}"\n  j += 1\nend\n\n# Each loop (the Ruby favorite!)\nfruits = ["apple", "banana", "cherry"]\nfruits.each do |fruit|\n  puts "I love \#{fruit}!"\nend\n\n# Times loop (simplest)\n3.times do\n  puts "Hip hip hooray!"\nend\n\n# Times with index\n5.times do |i|\n  puts "Number \#{i}"\nend`,
      explanation: "Ruby has many loop styles: 'while' runs as long as a condition is true, 'until' runs until a condition becomes true, 'each' iterates over collections, and 'times' repeats a block a specific number of times."
    }
  ],
  quiz: [
    {
      question: "Which loop is the most commonly used 'Ruby way' to iterate over a collection?",
      options: ["while", "until", "for", "each"],
      correctAnswer: 3,
      explanation: "The 'each' loop is the most idiomatic Ruby way to iterate over arrays and other collections."
    }
  ],
  flashcards: [
    {
      front: "What is an infinite loop?",
      back: "An infinite loop happens when the loop condition never becomes false, causing the program to repeat forever. Always make sure your loop has a way to stop!"
    },
    {
      front: "What does 5.times do?",
      back: "It runs the code block exactly 5 times. Example: 5.times { puts 'Hi' } prints 'Hi' five times."
    }
  ]
};
