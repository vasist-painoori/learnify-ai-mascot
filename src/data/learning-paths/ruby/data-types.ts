
import { Topic } from '../../types';

export const dataTypesTopic: Topic = {
  id: "ruby-data-types",
  title: "Data Types",
  description: "Explore the different data types available in Ruby",
  content: `
<h1>Data Types in Ruby</h1>

<p>In programming, <strong>data types</strong> are the different kinds of information your program can work with. Think of it like organizing your school supplies — you have pencils, notebooks, erasers, and rulers, and each one is a different "type" of supply. In Ruby, data comes in different types too, and understanding them is key to writing good code.</p>

<p>The most common data types are <strong>Integers</strong> and <strong>Floats</strong> (numbers). Integers are whole numbers like 5, -3, or 1000. Floats are numbers with decimal points, like 3.14 or 99.99. Ruby keeps these separate because math works a little differently depending on which one you use. For example, <code>7 / 2</code> gives you 3 (integer division drops the decimal), but <code>7.0 / 2</code> gives you 3.5.</p>

<p><strong>Strings</strong> are pieces of text wrapped in quotes, like <code>"Hello"</code> or <code>'Ruby is cool'</code>. You can combine strings together (called concatenation) using the <code>+</code> sign, or use string interpolation to mix text and variables together. Strings are probably the data type you'll use the most!</p>

<p><strong>Arrays</strong> are ordered lists of items. Imagine a row of lockers — each locker has a number (starting from 0) and holds something inside. You write arrays with square brackets: <code>[1, 2, 3]</code> or <code>["apple", "banana", "cherry"]</code>. You can mix types too: <code>[1, "hello", true]</code> is totally valid in Ruby.</p>

<p><strong>Hashes</strong> are like dictionaries — they store data in <strong>key-value pairs</strong>. Instead of looking up items by position (like arrays), you look them up by name. For example, <code>{ "name" => "Alice", "age" => 12 }</code> lets you quickly find Alice's age by asking for the "age" key. Hashes are incredibly useful for organizing related information together.</p>
  `,
  codeExamples: [
    {
      title: "Working with Data Types",
      code: `# Numbers\nwhole_number = 42        # Integer\ndecimal_number = 3.14    # Float\nputs 7 / 2     # => 3 (integer division!)\nputs 7.0 / 2   # => 3.5 (float division)\n\n# Strings\ngreeting = "Hello"\nname = "Ruby"\nputs greeting + ", " + name + "!"  # Concatenation\n\n# Arrays (ordered lists)\nfruits = ["apple", "banana", "cherry"]\nputs fruits[0]   # => apple (first item)\nputs fruits[2]   # => cherry (third item)\n\n# Hashes (key-value pairs)\nstudent = { "name" => "Alice", "age" => 12, "grade" => "7th" }\nputs student["name"]   # => Alice\nputs student["grade"]  # => 7th`,
      explanation: "This shows the four main data types in Ruby: integers and floats for numbers, strings for text, arrays for ordered lists, and hashes for key-value data like mini-databases."
    }
  ],
  quiz: [
    {
      question: "What is the class of an array in Ruby?",
      options: ["List", "Array", "Collection", "Sequence"],
      correctAnswer: 1,
      explanation: "In Ruby, the class of an array is Array. You can verify by running [1,2,3].class"
    }
  ],
  flashcards: [
    {
      front: "What is the difference between an Integer and a Float?",
      back: "Integers are whole numbers (42, -3), while Floats have decimal points (3.14, 99.99). Integer division drops decimals, float division keeps them."
    },
    {
      front: "What is a Hash in Ruby?",
      back: "A Hash stores data in key-value pairs, like a dictionary. Example: { 'name' => 'Alice', 'age' => 12 }"
    }
  ]
};
