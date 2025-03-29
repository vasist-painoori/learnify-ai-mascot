
import { Topic } from '../../types';

export const classesTopic: Topic = {
  id: "typescript-classes",
  title: "Classes",
  description: "Learn about object-oriented programming with classes in TypeScript",
  content: `
# Classes in TypeScript

TypeScript offers full support for classes introduced in ES2015, with additional features like access modifiers and abstract classes.
  `,
  codeExamples: [
    {
      title: "Class Definition and Usage",
      code: `// Basic class
class Greeter {
  greeting: string;

  constructor(message: string) {
    this.greeting = message;
  }

  greet() {
    return "Hello, " + this.greeting;
  }
}

let greeter = new Greeter("world");
console.log(greeter.greet()); // Output: Hello, world

// Access modifiers: public, private, protected
class Animal {
  private name: string;
  protected species: string;
  public color: string;

  constructor(name: string, species: string, color: string) {
    this.name = name;
    this.species = species;
    this.color = color;
  }

  public getName(): string {
    return this.name;
  }
}

class Dog extends Animal {
  constructor(name: string, color: string) {
    super(name, "Canine", color);
  }

  getSpecies(): string {
    return this.species; // OK: 'species' is protected and accessible
    // return this.name; // Error: 'name' is private and not accessible
  }
}

const dog = new Dog("Rex", "brown");
console.log(dog.color); // OK: 'color' is public
console.log(dog.getName()); // OK: public method
// console.log(dog.name); // Error: 'name' is private

// Parameter properties
class Octopus {
  constructor(
    readonly name: string,
    private readonly numberOfLegs: number = 8
  ) {}

  getNumberOfLegs(): number {
    return this.numberOfLegs;
  }
}

const octopus = new Octopus("Dave");
console.log(octopus.name); // OK: name is readonly but accessible
// console.log(octopus.numberOfLegs); // Error: property is private

// Accessors (getters/setters)
class Employee {
  private _fullName: string = "";

  get fullName(): string {
    return this._fullName;
  }

  set fullName(newName: string) {
    if (newName.length > 0) {
      this._fullName = newName;
    } else {
      throw new Error("Full name cannot be empty");
    }
  }
}

const employee = new Employee();
employee.fullName = "John Doe";
console.log(employee.fullName); // Output: John Doe

// Static properties
class Grid {
  static origin = { x: 0, y: 0 };

  calculateDistance(point: { x: number; y: number }): number {
    let xDist = point.x - Grid.origin.x;
    let yDist = point.y - Grid.origin.y;
    return Math.sqrt(xDist * xDist + yDist * yDist);
  }
}

let grid = new Grid();
let distance = grid.calculateDistance({ x: 3, y: 4 });
console.log(distance); // Output: 5

// Abstract classes
abstract class Shape {
  abstract getArea(): number;

  printArea(): void {
    console.log("Area: " + this.getArea());
  }
}

class Circle extends Shape {
  constructor(private radius: number) {
    super();
  }

  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

// let shape = new Shape(); // Error: Cannot create an instance of an abstract class
let circle = new Circle(5);
circle.printArea(); // Output: Area: 78.53981633974483

// Class implementing an interface
interface Drawable {
  draw(): void;
}

class Square implements Drawable {
  constructor(private sideLength: number) {}

  draw(): void {
    console.log("Drawing a square of side length " + this.sideLength);
  }
}

// Using generic classes
class GenericBox<T> {
  private value: T;

  constructor(value: T) {
    this.value = value;
  }

  getValue(): T {
    return this.value;
  }
}

let numberBox = new GenericBox<number>(10);
let stringBox = new GenericBox<string>("Hello");

console.log(numberBox.getValue()); // Output: 10
console.log(stringBox.getValue()); // Output: Hello`,
      explanation: "This example demonstrates the various aspects of classes in TypeScript, including basic class definition, inheritance, access modifiers (public, private, protected), parameter properties, accessors (getters/setters), static properties, abstract classes, implementing interfaces, and generic classes. TypeScript's class system offers strong typing and additional features beyond JavaScript's standard classes."
    }
  ],
  quiz: [
    {
      question: "What is the purpose of the 'protected' access modifier in TypeScript classes?",
      options: [
        "It makes a member public to all code",
        "It makes a member accessible only within the same class",
        "It makes a member accessible within the class and its subclasses",
        "It makes a member immutable (read-only)"
      ],
      correctAnswer: 2,
      explanation: "The 'protected' access modifier in TypeScript makes a class member (property or method) accessible within the class it's declared in and any classes that extend it (subclasses). It's more restrictive than public (accessible everywhere) but less restrictive than private (only accessible within the same class)."
    }
  ],
  flashcards: [
    {
      front: "What is the difference between 'public', 'private', and 'protected' access modifiers in TypeScript?",
      back: "public: Members are accessible from anywhere (this is the default). private: Members are only accessible within the class they're declared in. protected: Members are accessible within the class they're declared in and any subclasses (derived classes). TypeScript's access modifiers only exist at compile time and are not enforced at runtime in JavaScript."
    }
  ]
};
