
import { Topic } from '../../types';

export const classesTopic: Topic = {
  id: "ruby-classes",
  title: "Classes and Objects",
  description: "Learn about object-oriented programming in Ruby",
  content: `
<h1>Classes and Objects in Ruby</h1>

<p>Think of a <strong>class</strong> as a blueprint or template. Just like an architect's blueprint describes what a house should look like (how many rooms, where the doors go, etc.), a class describes what an object should contain (what data it holds and what actions it can perform). The actual house you build from the blueprint? That's the <strong>object</strong>.</p>

<p>In Ruby, <strong>everything is an object</strong>. Numbers, strings, arrays — they're all objects made from built-in classes. When you write <code>"hello"</code>, Ruby is secretly creating an object from the <code>String</code> class. When you write <code>42</code>, that's an object from the <code>Integer</code> class. Pretty cool, right?</p>

<p>To create your own class, you use the <code>class</code> keyword. Inside, you define an <code>initialize</code> method — this is the special method that runs automatically when you create a new object. It's where you set up the object's starting data using <strong>instance variables</strong> (variables that start with <code>@</code>). These <code>@variables</code> belong to each individual object, so every dog object can have its own name and breed.</p>

<p>You also define regular methods inside the class to give your objects <strong>behaviors</strong>. A <code>Dog</code> class might have a <code>bark</code> method and a <code>fetch</code> method. These methods can access the object's instance variables, so <code>bark</code> could say "Woof! My name is \#{@name}!" — each dog introduces itself differently because each has its own <code>@name</code>.</p>

<p>To let code outside the class read or change instance variables, you use <strong>attr_accessor</strong>, <strong>attr_reader</strong>, or <strong>attr_writer</strong>. Think of <code>attr_reader</code> as a window (you can look but not touch), <code>attr_writer</code> as a mail slot (you can put things in but can't see inside), and <code>attr_accessor</code> as an open door (full access both ways).</p>
  `,
  codeExamples: [
    {
      title: "Building a Class",
      code: `class Pet\n  attr_accessor :name, :species\n  attr_reader :age\n\n  def initialize(name, species, age)\n    @name = name\n    @species = species\n    @age = age\n  end\n\n  def introduce\n    puts "Hi! I'm \#{@name}, a \#{@age}-year-old \#{@species}."\n  end\n\n  def birthday\n    @age += 1\n    puts "\#{@name} is now \#{@age} years old! 🎂"\n  end\nend\n\n# Creating objects from the class\ncat = Pet.new("Whiskers", "cat", 3)\ndog = Pet.new("Buddy", "dog", 5)\n\ncat.introduce   # Hi! I'm Whiskers, a 3-year-old cat.\ndog.introduce   # Hi! I'm Buddy, a 5-year-old dog.\ndog.birthday    # Buddy is now 6 years old! 🎂`,
      explanation: "A class is a blueprint for creating objects. 'initialize' sets up each object's data with instance variables (@name, @species). Methods like 'introduce' and 'birthday' give objects behaviors. attr_accessor creates getter and setter methods automatically."
    }
  ],
  quiz: [
    {
      question: "What is the purpose of the initialize method in a Ruby class?",
      options: ["To define the class", "To delete an object", "To set up the object's starting data", "To print the object"],
      correctAnswer: 2,
      explanation: "The initialize method runs automatically when you create a new object with .new, setting up its initial data."
    }
  ],
  flashcards: [
    {
      front: "What is the difference between a class and an object?",
      back: "A class is the blueprint/template, and an object is an actual instance created from that blueprint. You can make many objects from one class."
    },
    {
      front: "What does attr_accessor do?",
      back: "attr_accessor creates both getter (read) and setter (write) methods for an instance variable, giving full access from outside the class."
    }
  ]
};
