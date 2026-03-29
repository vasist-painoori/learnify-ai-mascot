
import { Topic } from '../../types';

export const syntaxTopic: Topic = {
  id: "ruby-syntax",
  title: "Basic Syntax",
  description: "Learn about Ruby's syntax, variables, and data types",
  content: `
<h1>Ruby Syntax</h1>

<p>Ruby's syntax is designed to be clean and easy to read — almost like reading English. Unlike many other languages, Ruby doesn't use semicolons at the end of lines or curly braces to group code blocks. Instead, it uses simple keywords like <code>end</code> to close things. This makes Ruby code look neat and uncluttered.</p>

<p>Let's start with <strong>variables</strong>. A variable is like a labeled box where you store information. In Ruby, you create a variable just by giving it a name and a value. For example, <code>age = 12</code> creates a variable called "age" that holds the number 12. You don't need to say what type it is — Ruby is smart enough to figure that out.</p>

<p>Ruby also has something super useful called <strong>string interpolation</strong>. This lets you put variables right inside a piece of text. Instead of awkwardly joining strings together, you just wrap the variable in <code>\#{}</code> inside double quotes. For example, <code>"Hello, \#{name}"</code> will replace <code>\#{name}</code> with whatever value the variable holds. Just remember — this only works with double quotes, not single quotes!</p>

<p>Another thing to know is that Ruby uses <strong>comments</strong> to leave notes in your code. A comment starts with a <code>#</code> symbol, and Ruby completely ignores it when running the program. Comments are great for explaining what your code does, so future you (or someone else) can understand it easily.</p>

<p>Finally, Ruby is <strong>case-sensitive</strong>, meaning <code>Name</code> and <code>name</code> are two completely different things. Variable names should start with a lowercase letter or underscore, and by convention, Ruby developers use <strong>snake_case</strong> (like <code>my_favorite_color</code>) instead of camelCase. It's just the Ruby way!</p>
  `,
  codeExamples: [
    {
      title: "Variables and String Interpolation",
      code: `# Creating variables\nname = "Alice"\nage = 12\nfavorite_color = "blue"\n\n# String interpolation (note the double quotes!)\nputs "Hi, my name is \#{name}"\nputs "I am \#{age} years old"\nputs "My favorite color is \#{favorite_color}"\n\n# Math with variables\nbirthYear = 2024 - age\nputs "I was born in \#{birthYear}"`,
      explanation: "Variables store data, and string interpolation lets you insert variables directly into text using \#{variable_name} inside double quotes."
    }
  ],
  quiz: [
    {
      question: "How do you declare a variable in Ruby?",
      options: ["var name = 'value'", "name := 'value'", "name = 'value'", "$name = 'value'"],
      correctAnswer: 2,
      explanation: "In Ruby, you declare a variable simply by assigning a value to a name — no special keyword needed."
    }
  ],
  flashcards: [
    {
      front: "What is string interpolation in Ruby?",
      back: "String interpolation lets you embed variables or expressions inside a string using \#{expression} with double quotes."
    },
    {
      front: "What naming convention does Ruby use for variables?",
      back: "Ruby uses snake_case for variable names (e.g., my_favorite_color)."
    }
  ]
};
