
import { Topic } from '../../types';

export const syntaxTopic: Topic = {
  id: "js-syntax",
  title: "JavaScript Syntax",
  description: "Learn the basic syntax rules of JavaScript",
  content: `
# JavaScript Syntax

JavaScript syntax is the set of rules that define how JavaScript programs are constructed:

## JavaScript Statements
JavaScript statements are composed of:
- Values, Operators, Expressions, Keywords, and Comments
- JavaScript statements are executed by the browser in the sequence they are written
- Semicolons separate JavaScript statements (optional but recommended)

## JavaScript Identifiers
Identifiers are names given to variables, functions, etc.
- Can contain letters, digits, underscores, and dollar signs
- Must begin with a letter, $ or _
- Case sensitive (y and Y are different variables)
- Reserved words (like JavaScript keywords) cannot be used as identifiers
  `,
  codeExamples: [
    {
      title: "Basic Syntax",
      code: `// This is a single-line comment

/* This is 
   a multi-line
   comment */

// Variables
let name = "John";  // Using let (ES6)
const age = 30;     // Using const (ES6)
var isStudent = true; // Using var (older style)

// Functions
function greet() {
  console.log("Hello, " + name + "!");
}

// Calling a function
greet();`,
      explanation: "This example shows the basic syntax of JavaScript including comments, variable declarations, function definition, and function call."
    }
  ],
  quiz: [
    {
      question: "Which of these is a valid JavaScript identifier?",
      options: ["2variable", "_variable", "class", "if-else"],
      correctAnswer: 1,
      explanation: "_variable is valid because identifiers can start with an underscore. 2variable is invalid because identifiers cannot start with a number. 'class' and 'if-else' are reserved words and cannot be used as identifiers."
    }
  ],
  flashcards: [
    {
      front: "What are JavaScript statements separated by?",
      back: "Semicolons (optional but recommended for clarity)"
    },
    {
      front: "How do you write a multi-line comment in JavaScript?",
      back: "/* This is a multi-line comment */"
    }
  ]
};
