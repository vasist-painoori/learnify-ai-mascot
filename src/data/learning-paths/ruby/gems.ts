
import { Topic } from '../../types';

export const gemsTopic: Topic = {
  id: "ruby-gems",
  title: "Gems",
  description: "Learn about gems in Ruby",
  content: `
# Gems in Ruby

Gems are packages of Ruby code that can be installed and used in your projects.
  `,
  codeExamples: [
    {
      title: "Installing a Gem",
      code: `# gem install rails`,
      explanation: "This example shows how to install a gem using the gem command."
    }
  ],
  quiz: [
    {
      question: "What are gems in Ruby?",
      options: ["Classes", "Packages of Ruby code", "Objects", "Variables"],
      correctAnswer: 1,
      explanation: "Gems are packages of Ruby code that can be installed and used in your projects."
    }
  ],
  flashcards: [
    {
      front: "What are gems in Ruby?",
      back: "Gems are packages of Ruby code that can be installed and used in your projects."
    }
  ]
};
