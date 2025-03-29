
import { Topic } from '../../types';

export const introductionTopic: Topic = {
  id: "ruby-introduction",
  title: "Introduction to Ruby",
  description: "Get started with Ruby and understand its basic syntax",
  content: `
# Introduction to Ruby

Ruby is a dynamic, open source programming language with a focus on simplicity and productivity. It has an elegant syntax that is natural to read and easy to write.
  `,
  codeExamples: [
    {
      title: "Hello, World!",
      code: `puts "Hello, World!"`,
      explanation: "This is the classic first program. It prints 'Hello, World!' to the console."
    }
  ],
  quiz: [
    {
      question: "What is the primary goal of Ruby?",
      options: ["Speed", "Simplicity", "Security", "Scalability"],
      correctAnswer: 1,
      explanation: "Ruby was designed with simplicity and programmer productivity in mind."
    }
  ],
  flashcards: [
    {
      front: "What type of language is Ruby?",
      back: "Ruby is a dynamic, interpreted, object-oriented language."
    }
  ]
};
