
import { Topic } from '../../types';

export const domManipulationTopic: Topic = {
  id: "js-dom-manipulation",
  title: "DOM Manipulation",
  description: "Learn how to manipulate the Document Object Model (DOM) with JavaScript",
  content: `
# DOM Manipulation

The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content.

## Selecting Elements

### By ID
\`\`\`javascript
const element = document.getElementById('myId');
\`\`\`

### By Class Name
\`\`\`javascript
const elements = document.getElementsByClassName('myClass');
\`\`\`

### By Tag Name
\`\`\`javascript
const elements = document.getElementsByTagName('div');
\`\`\`

### Using CSS Selectors
\`\`\`javascript
const element = document.querySelector('.myClass');       // First matching element
const elements = document.querySelectorAll('div.myClass'); // All matching elements
\`\`\`

## Modifying Elements

### Content
\`\`\`javascript
element.textContent = 'Hello World'; // Text content only
element.innerHTML = '<span>Hello World</span>'; // HTML content
\`\`\`

### Attributes
\`\`\`javascript
element.setAttribute('href', 'https://example.com');
element.getAttribute('href');
element.removeAttribute('href');
\`\`\`

### Classes
\`\`\`javascript
element.classList.add('active');
element.classList.remove('disabled');
element.classList.toggle('visible');
element.classList.contains('active');
\`\`\`

### Styles
\`\`\`javascript
element.style.color = 'red';
element.style.fontSize = '16px';
element.style.display = 'none';
\`\`\`

## Creating and Adding Elements

\`\`\`javascript
// Create a new element
const newElement = document.createElement('div');

// Add content
newElement.textContent = 'New Element';

// Append to a parent element
parentElement.appendChild(newElement);

// Insert at a specific position
parentElement.insertBefore(newElement, referenceElement);
\`\`\`

## Event Handling

\`\`\`javascript
element.addEventListener('click', function(event) {
  console.log('Element clicked!');
});

// With arrow function
element.addEventListener('mouseover', (event) => {
  console.log('Mouse over element!');
});

// Remove event listener
element.removeEventListener('click', handlerFunction);
\`\`\`

## DOM Traversal

### Parent, Children, Siblings
\`\`\`javascript
element.parentNode           // Parent node
element.parentElement        // Parent element
element.children             // Child elements
element.childNodes           // Child nodes (including text nodes)
element.firstChild           // First child node
element.firstElementChild    // First child element
element.lastChild            // Last child node
element.lastElementChild     // Last child element
element.nextSibling          // Next sibling node
element.nextElementSibling   // Next sibling element
element.previousSibling      // Previous sibling node
element.previousElementSibling // Previous sibling element
\`\`\`
  `,
  codeExamples: [
    {
      title: "DOM Selection and Modification",
      code: `// Selecting elements
const heading = document.getElementById('title');
const paragraphs = document.getElementsByTagName('p');
const highlights = document.getElementsByClassName('highlight');
const firstButton = document.querySelector('button');
const allLinks = document.querySelectorAll('a.external');

// Modifying content
heading.textContent = 'Updated Title';
paragraphs[0].innerHTML = 'This is the <strong>first</strong> paragraph.';

// Working with attributes
const link = document.querySelector('#main-link');
link.setAttribute('href', 'https://example.com');
const linkTarget = link.getAttribute('target');
console.log(linkTarget);

// Working with classes
const element = document.querySelector('.box');
element.classList.add('active');
element.classList.remove('hidden');
element.classList.toggle('selected');
const isDisabled = element.classList.contains('disabled');
console.log(isDisabled);

// Changing styles
const banner = document.querySelector('.banner');
banner.style.backgroundColor = '#f0f0f0';
banner.style.padding = '20px';
banner.style.borderRadius = '5px';`,
      explanation: "This example demonstrates how to select elements using different methods, modify their content, work with attributes and classes, and change styles using JavaScript."
    },
    {
      title: "Creating and Event Handling",
      code: `// Creating new elements
const newDiv = document.createElement('div');
newDiv.className = 'container';
newDiv.id = 'new-container';
newDiv.textContent = 'This is a new container.';

// Adding to the DOM
document.body.appendChild(newDiv);

// Creating and adding multiple elements
const list = document.createElement('ul');

for (let i = 1; i <= 3; i++) {
  const item = document.createElement('li');
  item.textContent = \`Item \${i}\`;
  list.appendChild(item);
}

newDiv.appendChild(list);

// Event handling
const button = document.createElement('button');
button.textContent = 'Click Me';
newDiv.appendChild(button);

// Adding click event listener
button.addEventListener('click', function(event) {
  alert('Button clicked!');
  console.log(event); // Event object contains information about the event
});

// Mouse over event
button.addEventListener('mouseover', function() {
  button.style.backgroundColor = 'lightblue';
});

// Mouse out event
button.addEventListener('mouseout', function() {
  button.style.backgroundColor = '';
});

// Form event example
const input = document.createElement('input');
input.type = 'text';
input.placeholder = 'Type something...';
newDiv.appendChild(input);

input.addEventListener('input', function() {
  console.log('Current value:', input.value);
});`,
      explanation: "This example shows how to create new DOM elements, add them to the page, and handle various events like clicks and input changes."
    }
  ],
  quiz: [
    {
      question: "Which method selects the first element that matches a CSS selector?",
      options: ["getElementById()", "getElementsByClassName()", "querySelector()", "getElementsByTagName()"],
      correctAnswer: 2,
      explanation: "querySelector() returns the first element that matches the specified CSS selector. To select all matching elements, use querySelectorAll()."
    },
    {
      question: "What's the difference between textContent and innerHTML?",
      options: [
        "There is no difference",
        "textContent sets only text, while innerHTML can include HTML markup",
        "innerHTML is faster than textContent",
        "textContent works only with paragraphs"
      ],
      correctAnswer: 1,
      explanation: "textContent gets/sets the text content of an element without parsing HTML, while innerHTML gets/sets the HTML content, parsing and rendering any HTML tags."
    }
  ],
  flashcards: [
    {
      front: "What is event delegation in DOM manipulation?",
      back: "Event delegation is a technique where you add a single event listener to a parent element instead of adding multiple listeners to child elements. It leverages event bubbling to handle events for current and future elements."
    },
    {
      front: "What is the difference between parentNode and parentElement?",
      back: "parentNode returns the parent node (which could be an element, document, or document fragment), while parentElement specifically returns the parent element node (or null if the parent is not an element)."
    }
  ]
};
