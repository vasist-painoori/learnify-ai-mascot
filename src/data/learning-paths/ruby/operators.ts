
import { Topic } from '../../types';

export const operatorsTopic: Topic = {
  id: "ruby-operators",
  title: "Operators",
  description: "Learn about the different operators in Ruby",
  content: `
<h1>Operators in Ruby</h1>

<p>Operators are special symbols that tell Ruby to perform specific actions, like math, comparisons, or logical decisions. You already know some operators from math class — like <code>+</code> for addition and <code>-</code> for subtraction. Ruby uses these and adds a bunch more that are super useful for programming.</p>

<p><strong>Arithmetic operators</strong> handle math. You've got the basics: <code>+</code> (add), <code>-</code> (subtract), <code>*</code> (multiply), <code>/</code> (divide), and <code>%</code> (modulus, which gives you the remainder after division). There's also <code>**</code> for exponents — so <code>2 ** 3</code> means "2 to the power of 3," which equals 8. The modulus operator is especially handy for checking if a number is even or odd: if <code>number % 2 == 0</code>, it's even!</p>

<p><strong>Comparison operators</strong> let you compare two values and get back <code>true</code> or <code>false</code>. You can check if things are equal (<code>==</code>), not equal (<code>!=</code>), greater than (<code>></code>), less than (<code><</code>), or combinations like greater-than-or-equal (<code>>=</code>). These are the building blocks of making decisions in your code.</p>

<p><strong>Logical operators</strong> combine multiple conditions together. <code>&&</code> (AND) means both conditions must be true. <code>||</code> (OR) means at least one condition must be true. <code>!</code> (NOT) flips true to false and false to true. Ruby also lets you write these as words: <code>and</code>, <code>or</code>, and <code>not</code>, which can make your code read more like English.</p>

<p>One unique Ruby operator is the <strong>spaceship operator</strong> <code><=></code>. It compares two values and returns -1, 0, or 1 depending on whether the first value is less than, equal to, or greater than the second. It's mostly used for sorting, and it's one of those fun things that makes Ruby feel different from other languages!</p>
  `,
  codeExamples: [
    {
      title: "Operators in Action",
      code: `# Arithmetic\nputs 10 + 5   # => 15\nputs 10 - 5   # => 5\nputs 10 * 5   # => 50\nputs 10 / 3   # => 3 (integer division)\nputs 10 % 3   # => 1 (remainder)\nputs 2 ** 4   # => 16 (exponent)\n\n# Comparison\nputs 5 == 5   # => true\nputs 5 != 3   # => true\nputs 5 > 10   # => false\n\n# Logical\nputs true && false   # => false (AND)\nputs true || false   # => true (OR)\nputs !true           # => false (NOT)\n\n# Spaceship operator\nputs 5 <=> 10   # => -1\nputs 5 <=> 5    # => 0\nputs 10 <=> 5   # => 1`,
      explanation: "This shows arithmetic operators for math, comparison operators for checking values, logical operators for combining conditions, and the unique spaceship operator for sorting."
    }
  ],
  quiz: [
    {
      question: "What does the % operator do in Ruby?",
      options: ["Division", "Multiplication", "Modulus (remainder)", "Exponentiation"],
      correctAnswer: 2,
      explanation: "The % operator returns the remainder after division. For example, 10 % 3 gives 1."
    }
  ],
  flashcards: [
    {
      front: "What does the spaceship operator <=> do?",
      back: "It compares two values and returns -1 (less than), 0 (equal), or 1 (greater than). It's commonly used for sorting."
    },
    {
      front: "How do you check if a number is even in Ruby?",
      back: "Use the modulus operator: number % 2 == 0. If the remainder is 0, the number is even."
    }
  ]
};
