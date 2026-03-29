
import { Topic } from '../../types';

export const introductionTopic: Topic = {
  id: "ruby-introduction",
  title: "Introduction to Ruby",
  description: "Get started with Ruby and understand its basic syntax",
  content: `
<h1>Introduction to Ruby</h1>

<p>Welcome to Ruby! Ruby is a programming language that was created in the mid-1990s by a developer named Yukihiro Matsumoto (nicknamed "Matz") from Japan. He wanted to build a language that was fun and easy to use — one that felt natural, almost like writing in plain English. That's why Ruby is often called one of the most beginner-friendly programming languages out there.</p>

<p>So what makes Ruby special? First, everything in Ruby is an <strong>object</strong>. Numbers, text, even true and false values — they're all objects. This means you can do cool things like call methods directly on a number, such as <code>5.times { puts "Hi!" }</code>, which prints "Hi!" five times. Most other languages don't let you do that!</p>

<p>Ruby is also a <strong>dynamically typed</strong> language. That means you don't have to tell Ruby what type of data a variable holds — it figures it out on its own. You just write <code>name = "Alice"</code> and Ruby knows it's a string. This makes writing code faster and less stressful, especially when you're just starting out.</p>

<p>Another awesome thing about Ruby is the huge community behind it. There are thousands of free libraries called <strong>gems</strong> that other developers have made. Need to build a website? There's a gem for that (it's called Rails!). Need to send emails? There's a gem for that too. You can think of gems like add-ons or plugins that give Ruby superpowers.</p>

<p>By the end of this course, you'll understand how to write Ruby code, create your own programs, and build cool projects. Let's get started with the classic first program — "Hello, World!"</p>
  `,
  codeExamples: [
    {
      title: "Hello, World!",
      code: `# Your very first Ruby program!\nputs "Hello, World!"\n\n# You can also print multiple things\nputs "My name is Ruby"\nputs "I am a programming language"\nputs 2 + 3  # This prints 5`,
      explanation: "The 'puts' command prints text to the screen. Each 'puts' starts a new line. You can print words (strings) by wrapping them in quotes, or print numbers and math results directly."
    }
  ],
  quiz: [
    {
      question: "What is the primary goal of Ruby?",
      options: ["Speed", "Simplicity and productivity", "Security", "Scalability"],
      correctAnswer: 1,
      explanation: "Ruby was designed with simplicity and programmer happiness in mind. Matz wanted coding to be enjoyable!"
    }
  ],
  flashcards: [
    {
      front: "What type of language is Ruby?",
      back: "Ruby is a dynamic, interpreted, object-oriented language where everything is an object."
    },
    {
      front: "Who created Ruby?",
      back: "Yukihiro Matsumoto (Matz) created Ruby in the mid-1990s in Japan."
    }
  ]
};
