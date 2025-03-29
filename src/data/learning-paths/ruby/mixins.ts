
import { Topic } from '../../types';

export const mixinsTopic: Topic = {
  id: "ruby-mixins",
  title: "Mixins",
  description: "Understand how to use mixins in Ruby",
  content: `
# Mixins in Ruby

Mixins allow modules to be included in classes, providing a way to share methods between classes.
  `,
  codeExamples: [
    {
      title: "Using a Mixin",
      code: `
module MyMixin
  def greet
    puts "Hello from MyMixin!"
  end
end

class MyClass
  include MyMixin
end

obj = MyClass.new
obj.greet  # Hello from MyMixin!
      `,
      explanation: "This example demonstrates how to use a mixin in Ruby."
    }
  ],
  quiz: [
    {
      question: "What do mixins allow modules to do?",
      options: ["Define classes", "Be included in classes", "Create objects", "Define variables"],
      correctAnswer: 1,
      explanation: "Mixins allow modules to be included in classes, providing a way to share methods."
    }
  ],
  flashcards: [
    {
      front: "What are mixins in Ruby?",
      back: "Mixins allow modules to be included in classes, providing a way to share methods between classes."
    }
  ]
};
