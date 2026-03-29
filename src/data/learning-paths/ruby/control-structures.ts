
import { Topic } from '../../types';

export const controlStructuresTopic: Topic = {
  id: "ruby-control-structures",
  title: "Control Structures",
  description: "Understand how to use control structures in Ruby",
  content: `
<h1>Control Structures in Ruby</h1>

<p>Imagine you're playing a video game. If you collect a power-up, your character gets stronger. If you fall into a pit, you lose a life. These "if this happens, do that" decisions are exactly what <strong>control structures</strong> do in programming. They let your program make choices and react differently depending on the situation.</p>

<p>The most basic control structure is the <strong>if statement</strong>. It checks a condition and runs code only if that condition is true. You can add an <code>else</code> block for what should happen when the condition is false, and <code>elsif</code> (Ruby's way of saying "else if") for checking additional conditions. Notice it's <code>elsif</code> — not "elseif" or "else if" — that's a common gotcha for beginners!</p>

<p>Ruby also has <strong>unless</strong>, which is basically the opposite of <code>if</code>. It runs code only when a condition is <em>false</em>. So <code>unless tired</code> means "do this if you're NOT tired." It might sound confusing at first, but once you get used to it, it makes your code read more naturally — like a sentence.</p>

<p>For checking a single value against many possibilities, Ruby has the <strong>case statement</strong> (similar to "switch" in other languages). Instead of writing a bunch of <code>elsif</code> lines, you can list out different options with <code>when</code>. It's much cleaner and easier to read, especially when you have 3 or more possibilities to check.</p>

<p>One cool Ruby trick is <strong>inline conditionals</strong>. You can put a simple if or unless at the end of a single line: <code>puts "You win!" if score > 100</code>. This is called a "modifier" form, and it's great for short, simple conditions. Ruby developers love this style because it keeps code compact and readable.</p>
  `,
  codeExamples: [
    {
      title: "If, Elsif, Else, and Case",
      code: `# If / elsif / else\ntemperature = 25\n\nif temperature > 30\n  puts "It's hot outside! ☀️"\nelsif temperature > 20\n  puts "It's nice and warm! 🌤️"\nelsif temperature > 10\n  puts "It's a bit chilly! 🧥"\nelse\n  puts "It's cold! Bundle up! 🥶"\nend\n\n# Unless (opposite of if)\nraining = false\nunless raining\n  puts "Let's go outside!"\nend\n\n# Case statement\nday = "Saturday"\ncase day\nwhen "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"\n  puts "It's a school day 📚"\nwhen "Saturday", "Sunday"\n  puts "It's the weekend! 🎉"\nend\n\n# Inline conditional\nscore = 95\nputs "Great job!" if score > 90`,
      explanation: "This shows how to make decisions in Ruby: 'if/elsif/else' for branching logic, 'unless' for negative conditions, 'case/when' for matching multiple values, and inline conditionals for short one-liners."
    }
  ],
  quiz: [
    {
      question: "Which keyword is used for 'else if' in Ruby?",
      options: ["elseif", "else if", "elsif", "elif"],
      correctAnswer: 2,
      explanation: "In Ruby, the keyword is 'elsif' — no space, no second 'e'. It's unique to Ruby!"
    }
  ],
  flashcards: [
    {
      front: "What does 'unless' do in Ruby?",
      back: "Unless is the opposite of if — it runs code only when the condition is FALSE. Example: unless tired means 'do this if NOT tired'."
    },
    {
      front: "When should you use a case statement instead of if/elsif?",
      back: "Use case when you're comparing one value against many possible matches. It's cleaner than multiple elsif statements."
    }
  ]
};
