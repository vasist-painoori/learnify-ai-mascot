
import { Topic } from '../../types';

export const objectsTopic: Topic = {
  id: "js-objects",
  title: "JavaScript Objects",
  description: "Learn about objects and object-oriented programming in JavaScript",
  content: `
# JavaScript Objects

Objects in JavaScript are collections of key-value pairs, where keys are strings (or Symbols) and values can be any data type.

## Creating Objects

\`\`\`javascript
// Object literal notation (most common)
const person = {
  name: "John",
  age: 30,
  isStudent: false
};

// Using the Object constructor
const car = new Object();
car.make = "Toyota";
car.model = "Corolla";
car.year = 2020;

// Using Object.create()
const animal = Object.create(null);
animal.species = "Dog";
animal.sound = "Bark";
\`\`\`

## Accessing Object Properties

\`\`\`javascript
// Dot notation
console.log(person.name);

// Bracket notation
console.log(person["age"]);
\`\`\`

## Object Methods

Methods are functions stored as object properties:

\`\`\`javascript
const person = {
  name: "John",
  greet: function() {
    return "Hello, my name is " + this.name;
  }
};

// Method shorthand (ES6)
const person = {
  name: "John",
  greet() {
    return "Hello, my name is " + this.name;
  }
};
\`\`\`

## Object Destructuring (ES6)

\`\`\`javascript
const person = {
  name: "John",
  age: 30,
  city: "New York"
};

const { name, age } = person;
console.log(name); // "John"
console.log(age);  // 30
\`\`\`

## Spread Operator with Objects (ES6)

\`\`\`javascript
const person = {
  name: "John",
  age: 30
};

const employee = {
  ...person,
  role: "Developer",
  salary: 50000
};
// employee: { name: "John", age: 30, role: "Developer", salary: 50000 }
\`\`\`

## Object Methods

- **Object.keys()**: Returns an array of keys
- **Object.values()**: Returns an array of values
- **Object.entries()**: Returns an array of [key, value] pairs
- **Object.assign()**: Copies properties from one object to another
- **Object.freeze()**: Makes an object immutable
- **Object.seal()**: Prevents adding or deleting properties
  `,
  codeExamples: [
    {
      title: "Object Basics",
      code: `// Creating an object
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  email: "john@example.com",
  isEmployed: true,
  address: {
    street: "123 Main St",
    city: "Boston",
    state: "MA",
    zipCode: "02108"
  }
};

// Accessing properties
console.log(person.firstName);        // "John"
console.log(person.address.city);     // "Boston"

// Using bracket notation
console.log(person["lastName"]);      // "Doe"

// Dynamic property access
const property = "age";
console.log(person[property]);        // 30

// Adding new properties
person.phone = "555-123-4567";
console.log(person.phone);            // "555-123-4567"

// Modifying properties
person.age = 31;
console.log(person.age);              // 31

// Deleting properties
delete person.isEmployed;
console.log(person.isEmployed);       // undefined`,
      explanation: "This example shows how to create objects, access properties using dot notation and bracket notation, and modify object properties."
    },
    {
      title: "Object Methods and Advanced Features",
      code: `// Object with methods
const calculator = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
  multiply(a, b) {
    return a * b;
  },
  divide(a, b) {
    if (b === 0) throw new Error("Cannot divide by zero");
    return a / b;
  }
};

console.log(calculator.add(5, 3));       // 8
console.log(calculator.multiply(4, 2));  // 8

// Object destructuring
const user = {
  name: "Alice",
  age: 25,
  role: "Developer",
  skills: ["JavaScript", "React", "Node.js"]
};

// Basic destructuring
const { name, role } = user;
console.log(name, role);  // "Alice" "Developer"

// Destructuring with new variable names
const { name: userName, age: userAge } = user;
console.log(userName, userAge);  // "Alice" 25

// Destructuring with default values
const { salary = 50000 } = user;
console.log(salary);  // 50000 (default value as 'salary' doesn't exist)

// Spread operator with objects
const baseProduct = { 
  id: 1, 
  name: "Basic Widget" 
};

const premiumProduct = {
  ...baseProduct,
  name: "Premium Widget",  // Overrides the name
  price: 99.99,
  features: ["Durable", "Smart", "Connected"]
};

console.log(premiumProduct);
// { id: 1, name: "Premium Widget", price: 99.99, features: [...] }`,
      explanation: "This example demonstrates object methods, object destructuring, and using the spread operator with objects."
    }
  ],
  quiz: [
    {
      question: "Which is the correct way to access the property 'name' in an object called 'person'?",
      options: ["person[name]", "person('name')", "person.name", "person->name"],
      correctAnswer: 2,
      explanation: "In JavaScript, you can access object properties using dot notation (person.name) or bracket notation (person['name'])."
    },
    {
      question: "What will be the output of the following code?\nconst obj = { a: 1 };\nconst copy = obj;\ncopy.a = 2;\nconsole.log(obj.a);",
      options: ["1", "2", "undefined", "Error"],
      correctAnswer: 1,
      explanation: "Objects are passed by reference in JavaScript. Both 'obj' and 'copy' refer to the same object in memory, so changing a property through one variable affects the original object."
    }
  ],
  flashcards: [
    {
      front: "What is the difference between Object.freeze() and Object.seal()?",
      back: "Object.freeze() prevents adding, removing, or changing properties (makes the object immutable). Object.seal() prevents adding or removing properties, but allows changing existing properties."
    },
    {
      front: "What is the 'this' keyword in the context of object methods?",
      back: "'this' refers to the object the method belongs to. It allows methods to access and manipulate the object's properties."
    }
  ]
};
