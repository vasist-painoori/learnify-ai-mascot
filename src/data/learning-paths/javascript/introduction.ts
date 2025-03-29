
import { Topic } from '../../types';

export const introductionTopic: Topic = {
  id: "js-introduction",
  title: "Introduction to JavaScript",
  description: "Learn the basics of JavaScript and its role in web development",
  content: `
# Introduction to JavaScript

JavaScript is a programming language that enables interactive web pages. It's an essential part of web applications, and it's used by nearly every website on the internet.

## History
JavaScript was created in 1995 by Brendan Eich while he was at Netscape Communications Corporation. It was originally called Mocha, then LiveScript, and finally JavaScript.

## What can JavaScript do?
- Change HTML content
- Change HTML attribute values
- Change HTML styles (CSS)
- Hide and show HTML elements
- And much more!
  `,
  codeExamples: [
    {
      title: "Hello World Example",
      code: `console.log("Hello, World!");`,
      explanation: "This example shows how to output 'Hello, World!' to the browser console."
    }
  ],
  quiz: [
    {
      question: "What year was JavaScript created?",
      options: ["1990", "1995", "2000", "2005"],
      correctAnswer: 1,
      explanation: "JavaScript was created in 1995 by Brendan Eich at Netscape Communications Corporation."
    }
  ],
  flashcards: [
    {
      front: "What is JavaScript?",
      back: "JavaScript is a programming language that enables interactive web pages and is an essential part of web applications."
    }
  ]
};
