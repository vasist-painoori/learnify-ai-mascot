
import { Topic } from '../../types';

export const advancedTypesTopic: Topic = {
  id: "typescript-advanced-types",
  title: "Advanced Types",
  description: "Explore advanced type features in TypeScript",
  content: `
# Advanced Types in TypeScript

TypeScript provides a rich set of advanced type features for creating complex type systems.
  `,
  codeExamples: [
    {
      title: "Advanced Type Features",
      code: `// Union Types
type StringOrNumber = string | number;

function printId(id: StringOrNumber): void {
  if (typeof id === "string") {
    console.log(\`ID: \${id.toUpperCase()}\`);  // id is treated as string here
  } else {
    console.log(\`ID: \${id.toFixed(2)}\`);  // id is treated as number here
  }
}

printId("abc123");  // Output: ID: ABC123
printId(12.34);     // Output: ID: 12.34

// Intersection Types
interface Person {
  name: string;
  age: number;
}

interface Employee {
  employeeId: string;
  department: string;
}

type EmployeePerson = Person & Employee;

const john: EmployeePerson = {
  name: "John",
  age: 30,
  employeeId: "E123",
  department: "Engineering"
};

// Type Aliases
type Point = {
  x: number;
  y: number;
};

const origin: Point = { x: 0, y: 0 };

// Literal Types
type Direction = "north" | "east" | "south" | "west";
let direction: Direction = "north";
// direction = "northeast";  // Error: Type '"northeast"' is not assignable to type 'Direction'

// String Literal Union
type Alignment = "left" | "center" | "right";
let textAlign: Alignment = "center";

// Numeric Literal Union
type DiceRoll = 1 | 2 | 3 | 4 | 5 | 6;
let roll: DiceRoll = 4;

// Discriminated Unions
interface Circle {
  kind: "circle";
  radius: number;
}

interface Rectangle {
  kind: "rectangle";
  width: number;
  height: number;
}

type Shape = Circle | Rectangle;

function getArea(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "rectangle":
      return shape.width * shape.height;
  }
}

const circle: Circle = { kind: "circle", radius: 5 };
console.log(\`Circle area: \${getArea(circle)}\`);

// Type Guards
// 1. Using typeof
function padValue(value: string | number, padding: number): string {
  if (typeof value === "string") {
    return " ".repeat(padding) + value;
  }
  return " ".repeat(padding) + value.toString();
}

// 2. Using instanceof
class Car {
  drive() {
    console.log("Driving a car...");
  }
}

class Motorcycle {
  ride() {
    console.log("Riding a motorcycle...");
  }
}

type Vehicle = Car | Motorcycle;

function useVehicle(vehicle: Vehicle): void {
  if (vehicle instanceof Car) {
    vehicle.drive();
  } else {
    vehicle.ride();
  }
}

// 3. Custom type guard
function isCircle(shape: Shape): shape is Circle {
  return shape.kind === "circle";
}

function processShape(shape: Shape): void {
  if (isCircle(shape)) {
    console.log(\`Circle with radius \${shape.radius}\`);
  } else {
    console.log(\`Rectangle with dimensions \${shape.width}x\${shape.height}\`);
  }
}

// Index Signatures
interface Dictionary<T> {
  [key: string]: T;
}

const phoneBook: Dictionary<string> = {};
phoneBook["Alice"] = "123-456-7890";
phoneBook["Bob"] = "987-654-3210";

// Mapped Types
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

type ReadonlyPerson = Readonly<Person>;
const alice: ReadonlyPerson = { name: "Alice", age: 25 };
// alice.age = 26;  // Error: Cannot assign to 'age' because it is a read-only property

// Partial, Required, and Other Utility Types
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

// Make all properties optional
type PartialTodo = Partial<Todo>;
const incompleteTodo: PartialTodo = { title: "Learn TypeScript" };

// Make all properties required
type RequiredTodo = Required<Todo>;
const completeTodo: RequiredTodo = {
  title: "Learn TypeScript",
  description: "Study advanced types",
  completed: true
};

// Pick specific properties
type TodoPreview = Pick<Todo, "title" | "completed">;
const preview: TodoPreview = { title: "Clean room", completed: false };

// Omit specific properties
type TodoBasic = Omit<Todo, "description">;
const basicTodo: TodoBasic = { title: "Buy groceries", completed: false };

// Conditional Types
type NonNullable<T> = T extends null | undefined ? never : T;
type StringOrUndefined = string | undefined;
type JustString = NonNullable<StringOrUndefined>;  // string

// infer keyword in conditional types
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;
type FunctionReturnType = ReturnType<() => string>;  // string

// Template Literal Types (TypeScript 4.1+)
type Color = "red" | "green" | "blue";
type Quantity = "one" | "two" | "three";
type ColorQuantity = \`\${Quantity} \${Color}\`;  // "one red" | "one green" | ... | "three blue"

let colorQty: ColorQuantity = "two blue";
// let invalid: ColorQuantity = "four red";  // Error

// keyof and typeof operators
interface Person {
  name: string;
  age: number;
}

type PersonKeys = keyof Person;  // "name" | "age"
const key: PersonKeys = "name";

const colors = {
  red: "#FF0000",
  green: "#00FF00",
  blue: "#0000FF"
} as const;

type ColorKey = keyof typeof colors;  // "red" | "green" | "blue"
const colorKey: ColorKey = "red";

// Recursive types
type JSONValue = 
  | string
  | number
  | boolean
  | null
  | JSONValue[]
  | { [key: string]: JSONValue };

const json: JSONValue = {
  name: "John",
  age: 30,
  isActive: true,
  address: {
    city: "New York",
    zip: 10001
  },
  hobbies: ["reading", "coding"]
};`,
      explanation: "This example demonstrates a wide range of advanced type features in TypeScript, including union types, intersection types, type aliases, literal types, discriminated unions, type guards, index signatures, mapped types, utility types, conditional types with the infer keyword, template literal types, keyof and typeof operators, and recursive types. These advanced typing features allow you to create complex, type-safe applications with precise control over your data structures and functions."
    }
  ],
  quiz: [
    {
      question: "What is the purpose of a discriminated union in TypeScript?",
      options: [
        "To combine multiple types into one",
        "To create a type that represents one of several different types with a common property that identifies which type it is",
        "To exclude certain properties from a type",
        "To make all properties optional"
      ],
      correctAnswer: 1,
      explanation: "A discriminated union (also called a tagged union) is a pattern in TypeScript where each type in a union includes a common property with literal types that can be used to discriminate between the union members. This allows TypeScript to narrow down the specific type within the union based on the value of the discriminant property, providing type safety when working with different shapes of data."
    }
  ],
  flashcards: [
    {
      front: "What is the difference between a union type (A | B) and an intersection type (A & B) in TypeScript?",
      back: "A union type (A | B) represents a value that can be either type A or type B. It's used when a value could be one of several types. An intersection type (A & B) represents a value that has all the properties of both type A and type B combined. It's used when you want to merge multiple types together. For example, if A has properties x and y, and B has properties y and z, then A & B would have properties x, y, and z."
    }
  ]
};
