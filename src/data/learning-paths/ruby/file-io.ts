
import { Topic } from '../../types';

export const fileIoTopic: Topic = {
  id: "ruby-file-io",
  title: "File I/O",
  description: "Learn how to read from and write to files in Ruby",
  content: `
# File I/O in Ruby

File I/O allows you to read from and write to files.
  `,
  codeExamples: [
    {
      title: "Reading from a File",
      code: `
File.open("my_file.txt", "r") do |file|
  file.each_line do |line|
    puts line
  end
end
      `,
      explanation: "This example demonstrates how to read from a file in Ruby."
    }
  ],
  quiz: [
    {
      question: "What does File I/O allow you to do?",
      options: ["Define classes", "Read from and write to files", "Create objects", "Define variables"],
      correctAnswer: 1,
      explanation: "File I/O allows you to read from and write to files."
    }
  ],
  flashcards: [
    {
      front: "What is File I/O in Ruby?",
      back: "File I/O allows you to read from and write to files."
    }
  ]
};
