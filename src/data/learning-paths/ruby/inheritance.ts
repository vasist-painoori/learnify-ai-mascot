
import { Topic } from '../../types';

export const inheritanceTopic: Topic = {
  id: "ruby-inheritance",
  title: "Inheritance",
  description: "Understand how to use inheritance in Ruby",
  content: `
<h1>Inheritance in Ruby</h1>

<p>Let's say you already have a <code>Vehicle</code> class that knows how to start an engine, honk a horn, and track fuel. Now you want to make a <code>Car</code> class and a <code>Truck</code> class. Do you rewrite all that code from scratch? Nope! You use <strong>inheritance</strong> — it lets a new class automatically get all the features of an existing class, so you only write the stuff that's different.</p>

<p>In Ruby, inheritance uses the <code><</code> symbol. Writing <code>class Dog < Animal</code> means "Dog inherits from Animal." The <code>Animal</code> class is called the <strong>parent</strong> (or superclass), and <code>Dog</code> is the <strong>child</strong> (or subclass). The child gets everything the parent has — all its methods and behaviors — for free.</p>

<p>But here's where it gets interesting: the child class can <strong>override</strong> methods from the parent. If <code>Animal</code> has a <code>speak</code> method that says "Some generic sound," <code>Dog</code> can define its own <code>speak</code> that says "Woof!" instead. When you call <code>speak</code> on a Dog object, Ruby uses the Dog's version. This is called <strong>method overriding</strong>.</p>

<p>Sometimes you want to override a method but still use the parent's version too. That's where <code>super</code> comes in. Calling <code>super</code> inside a child method runs the parent's version of that same method. It's like saying, "Do everything mom's recipe does, but also add chocolate chips." This is super useful (pun intended!) for adding extra behavior without losing the original.</p>

<p>One important rule in Ruby: a class can only inherit from <strong>one parent</strong>. This is called single inheritance. You can't write <code>class FlyingCar < Car, Airplane</code>. However, Ruby has a clever workaround called <strong>modules and mixins</strong> (which you'll learn about later) that let you share code between classes without multiple inheritance.</p>
  `,
  codeExamples: [
    {
      title: "Inheritance in Action",
      code: `class Animal\n  attr_reader :name\n\n  def initialize(name)\n    @name = name\n  end\n\n  def speak\n    "..."\n  end\n\n  def describe\n    "I'm \#{@name}, and I say: \#{speak}"\n  end\nend\n\nclass Dog < Animal\n  def speak\n    "Woof! 🐕"\n  end\nend\n\nclass Cat < Animal\n  def speak\n    "Meow! 🐱"\n  end\n\n  def purr\n    "Purrrrrr..."\n  end\nend\n\ndog = Dog.new("Buddy")\ncat = Cat.new("Whiskers")\n\nputs dog.describe  # I'm Buddy, and I say: Woof! 🐕\nputs cat.describe  # I'm Whiskers, and I say: Meow! 🐱\nputs cat.purr      # Purrrrrr...`,
      explanation: "Dog and Cat inherit 'initialize' and 'describe' from Animal but override 'speak' with their own sounds. Cat also adds a unique 'purr' method. The parent class code is reused — no copy-pasting needed!"
    }
  ],
  quiz: [
    {
      question: "What does the 'super' keyword do in a child class method?",
      options: ["Creates a new class", "Calls the parent's version of the same method", "Deletes the parent class", "Makes the method private"],
      correctAnswer: 1,
      explanation: "The 'super' keyword calls the parent class's version of the current method, letting you extend its behavior."
    }
  ],
  flashcards: [
    {
      front: "What symbol does Ruby use for inheritance?",
      back: "Ruby uses < to indicate inheritance. Example: class Dog < Animal means Dog inherits from Animal."
    },
    {
      front: "Can a Ruby class inherit from multiple parents?",
      back: "No, Ruby only supports single inheritance (one parent). For sharing code across classes, you can use modules and mixins instead."
    }
  ]
};
