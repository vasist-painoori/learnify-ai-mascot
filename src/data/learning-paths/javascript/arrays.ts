
import { Topic } from '../../types';

export const arraysTopic: Topic = {
  id: "js-arrays",
  title: "JavaScript Arrays",
  description: "Learn about arrays and array methods in JavaScript",
  content: `
# JavaScript Arrays

Arrays in JavaScript are used to store multiple values in a single variable. They are zero-indexed, meaning the first element is at index 0.

## Creating Arrays

\`\`\`javascript
// Array literal notation (preferred)
const fruits = ['apple', 'banana', 'orange'];

// Array constructor
const numbers = new Array(1, 2, 3, 4, 5);
\`\`\`

## Accessing Array Elements

\`\`\`javascript
const fruits = ['apple', 'banana', 'orange'];
console.log(fruits[0]); // 'apple'
console.log(fruits[1]); // 'banana'
\`\`\`

## Array Properties and Methods

### Properties
- **length**: Returns the number of elements

### Common Methods
- **push()**: Adds elements to the end
- **pop()**: Removes the last element
- **unshift()**: Adds elements to the beginning
- **shift()**: Removes the first element
- **splice()**: Adds/removes elements from a specified position
- **slice()**: Extracts a section of an array
- **concat()**: Combines arrays
- **join()**: Joins all elements into a string
- **indexOf()**: Finds the index of an element
- **includes()**: Checks if an array contains an element
- **sort()**: Sorts the elements
- **reverse()**: Reverses the order of elements
- **map()**: Creates a new array with the results of a function
- **filter()**: Creates a new array with elements that pass a test
- **reduce()**: Reduces the array to a single value
- **forEach()**: Executes a function for each element
- **find()**: Returns the first element that passes a test
- **findIndex()**: Returns the index of the first element that passes a test
- **some()**: Checks if any elements pass a test
- **every()**: Checks if all elements pass a test

## Array Destructuring (ES6)

\`\`\`javascript
const [first, second, ...rest] = ['apple', 'banana', 'orange', 'grape'];
console.log(first);  // 'apple'
console.log(second); // 'banana'
console.log(rest);   // ['orange', 'grape']
\`\`\`

## Spread Operator (ES6)

\`\`\`javascript
const fruits = ['apple', 'banana'];
const moreFruits = [...fruits, 'orange', 'grape'];
// moreFruits: ['apple', 'banana', 'orange', 'grape']
\`\`\`
  `,
  codeExamples: [
    {
      title: "Array Basics",
      code: `// Creating arrays
const fruits = ['apple', 'banana', 'orange'];
const emptyArray = [];
const mixedArray = [1, 'hello', true, null, { name: 'John' }];

// Accessing elements
console.log(fruits[0]); // 'apple'
console.log(fruits[1]); // 'banana'
console.log(fruits[2]); // 'orange'
console.log(fruits[3]); // undefined (out of bounds)

// Modifying elements
fruits[1] = 'pear';
console.log(fruits); // ['apple', 'pear', 'orange']

// Array length
console.log(fruits.length); // 3

// Adding and removing elements
fruits.push('grape');        // Add to end
console.log(fruits);         // ['apple', 'pear', 'orange', 'grape']

const lastFruit = fruits.pop(); // Remove from end
console.log(lastFruit);          // 'grape'
console.log(fruits);             // ['apple', 'pear', 'orange']

fruits.unshift('mango');     // Add to beginning
console.log(fruits);         // ['mango', 'apple', 'pear', 'orange']

const firstFruit = fruits.shift(); // Remove from beginning
console.log(firstFruit);            // 'mango'
console.log(fruits);               // ['apple', 'pear', 'orange']`,
      explanation: "This example demonstrates basic array operations including creating arrays, accessing elements, modifying elements, and using common methods to add or remove elements."
    },
    {
      title: "Array Methods",
      code: `const numbers = [1, 2, 3, 4, 5];

// map: creates a new array by applying a function to each element
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// filter: creates a new array with elements that pass a test
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4]

// reduce: reduces an array to a single value
const sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum); // 15 (1+2+3+4+5)

// forEach: executes a function for each element
numbers.forEach(num => console.log(num)); // Logs 1, 2, 3, 4, 5

// find: returns the first element that passes a test
const found = numbers.find(num => num > 3);
console.log(found); // 4

// some: checks if any elements pass a test
const hasEven = numbers.some(num => num % 2 === 0);
console.log(hasEven); // true

// every: checks if all elements pass a test
const allPositive = numbers.every(num => num > 0);
console.log(allPositive); // true

// sort: sorts the elements
const fruits = ['banana', 'apple', 'orange', 'grape'];
fruits.sort();
console.log(fruits); // ['apple', 'banana', 'grape', 'orange']

// Sorting numbers requires a compare function
const nums = [40, 1, 5, 200];
nums.sort((a, b) => a - b);
console.log(nums); // [1, 5, 40, 200]`,
      explanation: "This example showcases higher-order array methods that are commonly used for data transformation and analysis, such as map, filter, reduce, and more."
    }
  ],
  quiz: [
    {
      question: "Which method adds an element to the END of an array?",
      options: ["shift()", "unshift()", "pop()", "push()"],
      correctAnswer: 3,
      explanation: "push() adds one or more elements to the end of an array and returns the new length of the array."
    },
    {
      question: "What will be the output of the following code?\nconst arr = [1, 2, 3, 4, 5];\nconst result = arr.filter(num => num > 2).map(num => num * 2);\nconsole.log(result);",
      options: ["[2, 4, 6, 8, 10]", "[6, 8, 10]", "[3, 4, 5]", "[1, 2, 3, 4, 5]"],
      correctAnswer: 1,
      explanation: "First, filter() creates a new array with elements greater than 2: [3, 4, 5]. Then, map() multiplies each element by 2, resulting in [6, 8, 10]."
    }
  ],
  flashcards: [
    {
      front: "What is the difference between map() and forEach() methods?",
      back: "map() creates a new array by applying a function to each element and returns the new array. forEach() executes a function for each element but doesn't return anything."
    },
    {
      front: "How can you check if an array includes a certain value?",
      back: "Use the includes() method: array.includes(value)"
    }
  ]
};
