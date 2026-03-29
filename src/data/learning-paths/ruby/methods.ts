
import { Topic } from '../../types';

export const methodsTopic: Topic = {
  id: "ruby-methods",
  title: "Methods",
  description: "Understand how to define and use methods in Ruby",
  content: `
<h1>Methods in Ruby</h1>

<p>Imagine you have a recipe for making a sandwich. Every time you want a sandwich, you don't reinvent the process — you just follow the recipe. <strong>Methods</strong> work the same way in programming. They're reusable blocks of code that you give a name to, so you can "call" them whenever you need that code to run.</p>

<p>In Ruby, you create a method using the <code>def</code> keyword (short for "define"), followed by the method name, and close it with <code>end</code>. Methods can take <strong>parameters</strong> — these are like blanks that you fill in when you call the method. For example, a <code>greet</code> method might take a <code>name</code> parameter so it can say hello to different people.</p>

<p>One important concept is <strong>return values</strong>. In Ruby, a method automatically returns the last thing it evaluates — you don't even need to write the word <code>return</code> (though you can if you want to). So if the last line in your method is <code>a + b</code>, the method will give back the sum. This is different from many other languages where you always have to say "return" explicitly.</p>

<p>Methods can also have <strong>default parameters</strong>. This means you set a fallback value that gets used if the caller doesn't provide one. For example, <code>def greet(name = "friend")</code> will use "friend" as the name if none is given. This makes your methods flexible — they work with or without the extra info.</p>

<p>A good rule of thumb is that each method should do <strong>one thing</strong> and do it well. If a method is getting really long or doing many different tasks, it's time to split it into smaller methods. This makes your code easier to read, easier to test, and easier to fix when something goes wrong. Think of methods as LEGO blocks — small, simple pieces that you snap together to build something awesome.</p>
  `,
  codeExamples: [
    {
      title: "Creating and Using Methods",
      code: `# Simple method\ndef say_hello\n  puts "Hello there!"\nend\nsay_hello  # => Hello there!\n\n# Method with parameters\ndef greet(name)\n  puts "Hey, \#{name}! Welcome!"\nend\ngreet("Alice")  # => Hey, Alice! Welcome!\n\n# Method with return value (last line is returned)\ndef add(a, b)\n  a + b\nend\nresult = add(3, 7)\nputs result  # => 10\n\n# Method with default parameter\ndef welcome(name = "friend")\n  "Welcome, \#{name}!"\nend\nputs welcome("Bob")   # => Welcome, Bob!\nputs welcome          # => Welcome, friend!`,
      explanation: "Methods are defined with 'def' and 'end'. They can take parameters, return values automatically (the last expression), and have default values for optional parameters."
    }
  ],
  quiz: [
    {
      question: "Which keyword is used to define a method in Ruby?",
      options: ["method", "def", "function", "define"],
      correctAnswer: 1,
      explanation: "In Ruby, the 'def' keyword is used to define a method. It's short for 'define'."
    }
  ],
  flashcards: [
    {
      front: "Do you always need to write 'return' in a Ruby method?",
      back: "No! Ruby automatically returns the value of the last expression in a method. You only need 'return' for early exits."
    },
    {
      front: "What are default parameters?",
      back: "Default parameters provide a fallback value when no argument is given. Example: def greet(name = 'friend') uses 'friend' if no name is passed."
    }
  ]
};
