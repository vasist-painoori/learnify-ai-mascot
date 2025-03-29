
import { Topic } from '../../types';

export const testingTopic: Topic = {
  id: "ruby-testing",
  title: "Testing",
  description: "Understand how to write tests in Ruby",
  content: `
# Testing in Ruby

Testing is a way to ensure that your code works as expected.
  `,
  codeExamples: [
    {
      title: "Writing a Test",
      code: `
require 'test/unit'

class MyTest < Test::Unit::TestCase
  def test_addition
    assert_equal 4, 2 + 2
  end
end
      `,
      explanation: "This example demonstrates how to write a test in Ruby using the test/unit library."
    }
  ],
  quiz: [
    {
      question: "What is the purpose of testing?",
      options: ["To define classes", "To ensure that your code works as expected", "To create objects", "To define variables"],
      correctAnswer: 1,
      explanation: "Testing is a way to ensure that your code works as expected."
    }
  ],
  flashcards: [
    {
      front: "What is testing in Ruby?",
      back: "Testing is a way to ensure that your code works as expected."
    }
  ]
};
