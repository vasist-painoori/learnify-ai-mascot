
import { Topic } from '../../types';

export const stringManipulationTopic: Topic = {
  id: "ruby-string-manipulation",
  title: "String Manipulation",
  description: "Advanced string manipulation techniques in Ruby",
  content: `
<h1>String Manipulation in Ruby</h1>

<p>Strings are everywhere in programming — usernames, messages, emails, website content — it's all text. Ruby gives you a massive toolbox for working with strings, making it one of the best languages for text processing. Let's explore what you can do!</p>

<p>Ruby strings come with tons of built-in <strong>methods</strong> you can call directly. Want to make text uppercase? Use <code>.upcase</code>. Lowercase? <code>.downcase</code>. Reverse it? <code>.reverse</code>. Check how long it is? <code>.length</code>. You can even chain methods together: <code>"hello".upcase.reverse</code> gives you "OLLEH". Each method returns a new string, so you can keep building on the result.</p>

<p>Need to grab just part of a string? Ruby makes it easy with <strong>slicing</strong>. You can use bracket notation like <code>str[0, 5]</code> to get the first 5 characters, or <code>str[-3..-1]</code> to grab the last 3. You can even check if a string contains a certain word with <code>.include?("word")</code> — notice the question mark at the end, which is Ruby's way of saying "this method returns true or false."</p>

<p>Two super important methods are <code>sub</code> and <code>gsub</code>. The <code>sub</code> method replaces the <strong>first</strong> match of a pattern, while <code>gsub</code> (global substitution) replaces <strong>all</strong> matches. For example, <code>"banana".gsub("a", "o")</code> turns it into "bonono." These methods are incredibly powerful when combined with regular expressions for pattern matching.</p>

<p>Don't forget about <code>split</code> and <code>join</code> — they're like opposite partners. <code>split</code> breaks a string into an array based on a separator (<code>"a,b,c".split(",")</code> gives <code>["a", "b", "c"]</code>), and <code>join</code> glues an array back into a string (<code>["a", "b", "c"].join("-")</code> gives <code>"a-b-c"</code>). These two methods are essential for processing CSV data, parsing user input, and building formatted output.</p>
  `,
  codeExamples: [
    {
      title: "String Methods in Action",
      code: `str = "Hello, Ruby!"\n\n# Transformations\nputs str.upcase       # HELLO, RUBY!\nputs str.downcase     # hello, ruby!\nputs str.reverse      # !ybuR ,olleH\nputs str.length       # 12\n\n# Slicing\nputs str[0, 5]        # Hello\nputs str[-5..-1]      # Ruby!\n\n# Checking content\nputs str.include?("Ruby")  # true\nputs str.start_with?("Hello")  # true\n\n# Replacing\nputs "banana".sub("a", "o")    # bonana (first only)\nputs "banana".gsub("a", "o")   # bonono (all)\n\n# Split and Join\nwords = "apple,banana,cherry".split(",")\nputs words.inspect    # ["apple", "banana", "cherry"]\nputs words.join(" & ")  # apple & banana & cherry\n\n# String interpolation\nlanguage = "Ruby"\nputs "I love \#{language}!"  # I love Ruby!`,
      explanation: "Ruby provides powerful string methods for transforming, slicing, searching, replacing, and splitting text. These tools make text processing tasks easy and readable."
    }
  ],
  quiz: [
    {
      question: "Which method replaces ALL occurrences of a pattern in a string?",
      options: ["replace", "sub", "gsub", "substitute"],
      correctAnswer: 2,
      explanation: "gsub (global substitution) replaces all occurrences, while sub only replaces the first one."
    }
  ],
  flashcards: [
    {
      front: "What is the difference between sub and gsub?",
      back: "sub replaces only the FIRST occurrence of a pattern, while gsub (global substitution) replaces ALL occurrences throughout the string."
    },
    {
      front: "What do split and join do?",
      back: "split breaks a string into an array using a separator. join does the opposite — it combines an array into a single string with a separator between elements."
    }
  ]
};
