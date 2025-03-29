import { Topic } from '../../types';

export const controlFlowTopic: Topic = {
  id: "js-control-flow",
  title: "JavaScript Control Flow",
  description: "Learn about conditional statements and loops in JavaScript",
  content: `
# JavaScript Control Flow

Control flow statements allow you to control the execution flow of your program based on certain conditions.

## Conditional Statements

### if...else Statement
The if statement executes a block of code if a specified condition is true.

\`\`\`javascript
if (condition) {
  // code to execute if condition is true
} else if (anotherCondition) {
  // code to execute if anotherCondition is true
} else {
  // code to execute if all conditions are false
}
\`\`\`

### switch Statement
The switch statement evaluates an expression and executes statements based on matching cases.

\`\`\`javascript
switch (expression) {
  case value1:
    // code to execute if expression equals value1
    break;
  case value2:
    // code to execute if expression equals value2
    break;
  default:
    // code to execute if no case matches
}
\`\`\`

### Ternary Operator
A shorthand for simple if...else conditions.

\`\`\`javascript
condition ? expressionIfTrue : expressionIfFalse;
\`\`\`

## Loops

### for Loop
Executes code a specified number of times.

\`\`\`javascript
for (initialization; condition; increment) {
  // code to execute
}
\`\`\`

### while Loop
Executes code as long as a condition is true.

\`\`\`javascript
while (condition) {
  // code to execute
}
\`\`\`

### do...while Loop
Executes code once, then repeats as long as a condition is true.

\`\`\`javascript
do {
  // code to execute
} while (condition);
\`\`\`

### for...in Loop
Iterates over the properties of an object.

\`\`\`javascript
for (let key in object) {
  // code to execute
}
\`\`\`

### for...of Loop (ES6)
Iterates over the values of an iterable object like Array, String, etc.

\`\`\`javascript
for (let value of iterable) {
  // code to execute
}
\`\`\`
  `,
  codeExamples: [
    {
      title: "Conditional Statements",
      code: `// if...else statement
let hour = 14;
let greeting;

if (hour < 12) {
  greeting = "Good morning";
} else if (hour < 18) {
  greeting = "Good afternoon";
} else {
  greeting = "Good evening";
}

console.log(greeting); // "Good afternoon"

// switch statement
let day = 2;
let dayName;

switch (day) {
  case 0:
    dayName = "Sunday";
    break;
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  // ... other days
  default:
    dayName = "Invalid day";
}

console.log(dayName); // "Tuesday"

// Ternary operator
let age = 20;
let canVote = age >= 18 ? "Yes" : "No";
console.log(canVote); // "Yes"`,
      explanation: "This example demonstrates the use of if...else statements, switch statements, and the ternary operator for conditional logic in JavaScript."
    },
    {
      title: "Loops",
      code: `// for loop
for (let i = 0; i < 5; i++) {
  console.log(i); // Outputs 0, 1, 2, 3, 4
}

// while loop
let i = 0;
while (i < 5) {
  console.log(i); // Outputs 0, 1, 2, 3, 4
  i++;
}

// do...while loop
let j = 0;
do {
  console.log(j); // Outputs 0, 1, 2, 3, 4
  j++;
} while (j < 5);

// for...in loop (for objects)
const person = {
  name: "John",
  age: 30,
  job: "Developer"
};

for (let key in person) {
  console.log(key + ": " + person[key]);
  // Outputs "name: John", "age: 30", "job: Developer"
}

// for...of loop (for arrays and other iterables)
const colors = ["red", "green", "blue"];

for (let color of colors) {
  console.log(color); // Outputs "red", "green", "blue"
}`,
      explanation: "This example demonstrates different types of loops in JavaScript: for, while, do...while, for...in (for objects), and for...of (for arrays and iterables)."
    }
  ],
  quiz: [
    {
      question: "What will be the output of this code?\nlet x = 5;\nif (x > 10) {\n  console.log('A');\n} else if (x > 5) {\n  console.log('B');\n} else {\n  console.log('C');\n}",
      options: ["A", "B", "C", "Nothing will be output"],
      correctAnswer: 2,
      explanation: "Since x is 5, it's not greater than 10 (first condition) and not greater than 5 (second condition), so the else block executes, outputting 'C'."
    },
    {
      question: "Which loop is guaranteed to execute at least once?",
      options: ["for loop", "while loop", "do...while loop", "for...in loop"],
      correctAnswer: 2,
      explanation: "The do...while loop always executes its block of code once before checking the condition."
    }
  ],
  flashcards: [
    {
      front: "What is the difference between for...in and for...of loops?",
      back: "for...in iterates over the enumerable property names of an object, while for...of iterates over the values of iterable objects like arrays, strings, etc."
    },
    {
      front: "What happens if you omit the 'break' statement in a switch case?",
      back: "The code will 'fall through' to the next case, executing that code as well, until it reaches a break statement or the end of the switch block."
    }
  ]
};
