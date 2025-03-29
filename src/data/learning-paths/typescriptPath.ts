
import { LearningPath } from '../types';

export const typescriptPath: LearningPath = {
  languageId: "typescript",
  modules: [
    {
      id: "ts-basics",
      title: "TypeScript Fundamentals",
      description: "Learn the core concepts of TypeScript programming",
      topics: [
        {
          id: "ts-intro",
          title: "Introduction to TypeScript",
          description: "Understanding the basics of TypeScript programming",
          content: `
# Introduction to TypeScript

TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.
          `,
          codeExamples: [
            {
              title: "Hello World in TypeScript",
              code: `function greet(name: string): string {
    return \`Hello, \${name}!\`;
}

console.log(greet("TypeScript"));`,
              explanation: "This is a simple TypeScript program that defines a function with a typed parameter and return value, and then calls it."
            }
          ],
          quiz: [
            {
              question: "What is the relationship between TypeScript and JavaScript?",
              options: ["They are completely different languages", "TypeScript is a superset of JavaScript", "JavaScript is a superset of TypeScript", "They are the same language"],
              correctAnswer: 1,
              explanation: "TypeScript is a superset of JavaScript, which means all valid JavaScript code is also valid TypeScript code, but TypeScript adds additional features such as static typing."
            }
          ],
          flashcards: [
            {
              front: "What is TypeScript?",
              back: "TypeScript is a strongly typed programming language that builds on JavaScript, adding static types through optional type annotations. It's designed for the development of large applications and transpiles to JavaScript."
            }
          ]
        },
        {
          id: "ts-types",
          title: "Types and Interfaces",
          description: "Working with TypeScript's type system",
          content: `
# Types and Interfaces in TypeScript

TypeScript's type system allows you to define the shape of JavaScript objects through types and interfaces.
          `,
          codeExamples: [
            {
              title: "Basic Types",
              code: `// Basic types
let isDone: boolean = false;
let decimal: number = 6;
let color: string = "blue";
let list: number[] = [1, 2, 3];
let tuple: [string, number] = ["hello", 10];

// Enum
enum Color {Red, Green, Blue}
let c: Color = Color.Green;

// Any
let notSure: any = 4;
notSure = "maybe a string";
notSure = false;

// Void
function warnUser(): void {
    console.log("This is a warning message");
}

// Null and Undefined
let u: undefined = undefined;
let n: null = null;`,
              explanation: "This example demonstrates the basic types in TypeScript, including primitives, arrays, tuples, enums, any, void, null, and undefined."
            }
          ],
          quiz: [
            {
              question: "What is the difference between an interface and a type alias in TypeScript?",
              options: ["They are exactly the same", "Interfaces can be extended, but type aliases cannot", "Type aliases can represent primitives, but interfaces cannot", "Interfaces are faster than type aliases"],
              correctAnswer: 2,
              explanation: "While interfaces and type aliases are similar, type aliases can represent primitive types, unions, tuples, and other types that interfaces cannot."
            }
          ],
          flashcards: [
            {
              front: "What is a union type in TypeScript?",
              back: "A union type in TypeScript is a type formed from two or more other types, representing values that may be any one of those types. It's written as type1 | type2 | type3."
            }
          ]
        },
        {
          id: "ts-interfaces",
          title: "Interfaces",
          description: "Creating and implementing interfaces in TypeScript",
          content: `
# Interfaces in TypeScript

Interfaces define contracts in your code and provide explicit names for type checking.
          `,
          codeExamples: [
            {
              title: "Interface Basics",
              code: `interface Person {
    firstName: string;
    lastName: string;
    age: number;
    readonly id: number;
    sayHello(): string;
    contact?: string; // Optional property
}

function greet(person: Person): string {
    return \`Hello, \${person.firstName} \${person.lastName}!\`;
}

const john: Person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    id: 123,
    sayHello() {
        return \`Hi, I'm \${this.firstName}\`;
    }
};

console.log(greet(john)); // Output: Hello, John Doe!
console.log(john.sayHello()); // Output: Hi, I'm John`,
              explanation: "This example shows how to define and use interfaces in TypeScript, including required properties, optional properties (marked with ?), readonly properties, and method signatures."
            }
          ],
          quiz: [
            {
              question: "Which of the following can an interface describe in TypeScript?",
              options: ["Only objects", "Only classes", "Objects, classes, and functions", "Only primitive types"],
              correctAnswer: 2,
              explanation: "Interfaces in TypeScript can describe the shape of objects, provide a contract for classes to implement, and define function types."
            }
          ],
          flashcards: [
            {
              front: "How do you define an optional property in a TypeScript interface?",
              back: "Optional properties in TypeScript interfaces are denoted with a question mark (?) after the property name. For example: `interface User { name: string; email?: string; }`"
            }
          ]
        },
        {
          id: "ts-classes",
          title: "Classes",
          description: "Object-oriented programming with TypeScript classes",
          content: `
# Classes in TypeScript

TypeScript offers full support for classes introduced in ES6, with additional features like access modifiers.
          `,
          codeExamples: [
            {
              title: "Class Basics",
              code: `class Animal {
    // Properties with access modifiers
    private name: string;
    protected species: string;
    public age: number;
    readonly id: number;
    
    // Constructor
    constructor(name: string, species: string, age: number, id: number) {
        this.name = name;
        this.species = species;
        this.age = age;
        this.id = id;
    }
    
    // Methods
    public makeSound(): void {
        console.log("Some generic sound");
    }
    
    // Getter
    get animalName(): string {
        return this.name;
    }
    
    // Setter
    set animalName(name: string) {
        this.name = name;
    }
}

// Inheritance
class Dog extends Animal {
    constructor(name: string, age: number, id: number) {
        super(name, "Canine", age, id);
    }
    
    // Method override
    public makeSound(): void {
        console.log("Woof! Woof!");
    }
    
    // Additional method
    public fetch(): void {
        console.log(\`\${this.animalName} is fetching...\`);
    }
}

const dog = new Dog("Rex", 3, 1);
dog.makeSound(); // Output: Woof! Woof!
console.log(dog.age); // Output: 3
// console.log(dog.name); // Error: Property 'name' is private
dog.animalName = "Buddy"; // Using the setter
console.log(dog.animalName); // Output: Buddy (using the getter)
dog.fetch(); // Output: Buddy is fetching...`,
              explanation: "This example demonstrates classes in TypeScript, including access modifiers (public, private, protected), inheritance, constructors, method overriding, and getters/setters."
            }
          ],
          quiz: [
            {
              question: "What is the default access modifier for class members in TypeScript?",
              options: ["private", "protected", "public", "readonly"],
              correctAnswer: 2,
              explanation: "In TypeScript, the default access modifier for class members is public. This means that if you don't specify an access modifier, the member can be accessed from anywhere."
            }
          ],
          flashcards: [
            {
              front: "What are the access modifiers available in TypeScript?",
              back: "TypeScript provides three access modifiers: public (accessible from anywhere), private (only accessible within the class), and protected (accessible within the class and its subclasses)."
            }
          ]
        },
        {
          id: "ts-generics",
          title: "Generics",
          description: "Writing reusable, type-safe code with generics",
          content: `
# Generics in TypeScript

Generics allow you to create reusable components that work with a variety of types rather than a single one.
          `,
          codeExamples: [
            {
              title: "Generic Functions",
              code: `// Generic function
function identity<T>(arg: T): T {
    return arg;
}

let output1 = identity<string>("hello"); // type: string
let output2 = identity(42); // type inference: number

// Generic interface
interface Box<T> {
    value: T;
    getValue(): T;
}

// Generic class
class Container<T> implements Box<T> {
    value: T;
    
    constructor(value: T) {
        this.value = value;
    }
    
    getValue(): T {
        return this.value;
    }
}

let numberBox = new Container<number>(42);
console.log(numberBox.getValue()); // 42

let stringBox = new Container<string>("hello");
console.log(stringBox.getValue()); // hello

// Generic constraints
interface Lengthwise {
    length: number;
}

function getLength<T extends Lengthwise>(arg: T): number {
    return arg.length;
}

console.log(getLength("hello")); // 5
console.log(getLength([1, 2, 3])); // 3
// console.log(getLength(123)); // Error: number doesn't have length property`,
              explanation: "This example shows various ways to use generics in TypeScript, including generic functions, interfaces, classes, and constraints. Generics allow you to write flexible, reusable code while maintaining type safety."
            }
          ],
          quiz: [
            {
              question: "What is the main purpose of generics in TypeScript?",
              options: ["To create dynamic types at runtime", "To provide type safety for reusable components", "To convert between different types", "To improve code execution speed"],
              correctAnswer: 1,
              explanation: "The main purpose of generics in TypeScript is to provide type safety for reusable components. They allow you to create functions, classes, and interfaces that work with a variety of types while maintaining type checking."
            }
          ],
          flashcards: [
            {
              front: "What is a generic constraint in TypeScript?",
              back: "A generic constraint in TypeScript limits the types that can be used with a generic. It is specified using the 'extends' keyword. For example, `<T extends { length: number }>` constrains T to types that have a length property."
            }
          ]
        },
        {
          id: "ts-advanced-types",
          title: "Advanced Types",
          description: "Working with advanced type features in TypeScript",
          content: `
# Advanced Types in TypeScript

TypeScript provides several advanced type features to help express complex type relationships.
          `,
          codeExamples: [
            {
              title: "Union and Intersection Types",
              code: `// Union types
type StringOrNumber = string | number;
function display(id: StringOrNumber) {
    console.log(\`ID: \${id}\`);
}
display("abc123"); // OK
display(123); // OK

// Type guards
function isString(x: any): x is string {
    return typeof x === "string";
}

function processValue(value: string | number) {
    if (isString(value)) {
        // In this block, TypeScript knows value is a string
        console.log(value.toUpperCase());
    } else {
        // In this block, TypeScript knows value is a number
        console.log(value.toFixed(2));
    }
}

// Intersection types
interface Person {
    name: string;
    age: number;
}

interface Employee {
    employeeId: number;
    department: string;
}

type EmployeePerson = Person & Employee;

const john: EmployeePerson = {
    name: "John",
    age: 30,
    employeeId: 12345,
    department: "Engineering"
};

// Literal types
type Direction = "north" | "south" | "east" | "west";
function move(direction: Direction) {
    console.log(\`Moving \${direction}\`);
}
move("north"); // OK
// move("northeast"); // Error: Type '"northeast"' is not assignable to type 'Direction'

// Nullable types
function getName(name: string | null | undefined): string {
    return name ?? "Anonymous";
}

console.log(getName("John")); // John
console.log(getName(null)); // Anonymous
console.log(getName(undefined)); // Anonymous`,
              explanation: "This example demonstrates advanced types in TypeScript, including union types, type guards, intersection types, literal types, and nullable types. These features help you express complex type relationships and make your code more robust."
            }
          ],
          quiz: [
            {
              question: "What does the `&` operator represent in TypeScript types?",
              options: ["Union", "Intersection", "Inheritance", "Polymorphism"],
              correctAnswer: 1,
              explanation: "The `&` operator in TypeScript represents intersection types. An intersection type combines multiple types into one, requiring an object to fulfill all the requirements of all the constituent types."
            }
          ],
          flashcards: [
            {
              front: "What is a discriminated union in TypeScript?",
              back: "A discriminated union (or tagged union) is a design pattern used with union types where each type in the union contains a common property with literal types (the discriminant), allowing TypeScript to narrow down the specific type based on that property."
            }
          ]
        },
        {
          id: "ts-modules",
          title: "Modules and Namespaces",
          description: "Organizing code with TypeScript modules and namespaces",
          content: `
# Modules and Namespaces in TypeScript

TypeScript provides two ways to organize code: ES modules and namespaces.
          `,
          codeExamples: [
            {
              title: "ES Modules",
              code: `// math.ts
export function add(x: number, y: number): number {
    return x + y;
}

export function subtract(x: number, y: number): number {
    return x - y;
}

export const PI = 3.14159;

// main.ts
import { add, subtract, PI } from './math';
import * as math from './math';

console.log(add(5, 3)); // 8
console.log(math.subtract(10, 4)); // 6
console.log(PI); // 3.14159

// Default exports
// calculator.ts
export default class Calculator {
    add(x: number, y: number): number {
        return x + y;
    }
}

// main.ts
import Calculator from './calculator';
const calc = new Calculator();
console.log(calc.add(5, 3)); // 8`,
              explanation: "This example shows how to use ES modules in TypeScript to organize code across multiple files. It covers named exports, importing specific exports, importing all exports as a namespace, and default exports."
            }
          ],
          quiz: [
            {
              question: "What is the difference between modules and namespaces in TypeScript?",
              options: [
                "Modules are file-based, while namespaces can span multiple files",
                "Modules can only export functions, while namespaces can export any type",
                "Modules are a newer, recommended approach, while namespaces are primarily for legacy code",
                "There is no difference, they are just different terms for the same concept"
              ],
              correctAnswer: 2,
              explanation: "Modules are the recommended way to organize code in modern TypeScript applications. They are file-based and align with ES6 module syntax. Namespaces (formerly called 'internal modules') are primarily supported for backward compatibility with older codebases."
            }
          ],
          flashcards: [
            {
              front: "What is the re-export syntax in TypeScript modules?",
              back: "Re-export syntax allows you to export items that were imported from other modules. For example: `export { add, subtract } from './math';` or `export * from './math';`"
            }
          ]
        },
        {
          id: "ts-decorators",
          title: "Decorators",
          description: "Using decorators for meta-programming in TypeScript",
          content: `
# Decorators in TypeScript

Decorators provide a way to add annotations and modify classes and class members.
          `,
          codeExamples: [
            {
              title: "Class and Method Decorators",
              code: `// Method decorator
function log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    
    descriptor.value = function(...args: any[]) {
        console.log(\`Calling \${propertyKey} with arguments: \${JSON.stringify(args)}\`);
        const result = originalMethod.apply(this, args);
        console.log(\`Result: \${result}\`);
        return result;
    };
    
    return descriptor;
}

// Class decorator
function sealed(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
    console.log(\`Class \${constructor.name} has been sealed\`);
}

// Property decorator
function defaultValue(value: any) {
    return function(target: any, propertyKey: string) {
        target[propertyKey] = value;
    };
}

// Parameter decorator
function required(target: any, propertyKey: string, parameterIndex: number) {
    const requiredParams: number[] = Reflect.getMetadata('required', target, propertyKey) || [];
    requiredParams.push(parameterIndex);
    Reflect.defineMetadata('required', requiredParams, target, propertyKey);
}

@sealed
class Calculator {
    @defaultValue(0)
    private total: number;
    
    @log
    add(a: number, b: number): number {
        return a + b;
    }
    
    @log
    multiply(@required a: number, @required b: number): number {
        return a * b;
    }
}

const calc = new Calculator();
calc.add(5, 3); // Logs: Calling add with arguments: [5,3], Result: 8
calc.multiply(4, 2); // Logs: Calling multiply with arguments: [4,2], Result: 8`,
              explanation: "This example demonstrates different types of decorators in TypeScript: class decorators, method decorators, property decorators, and parameter decorators. Decorators are a form of meta-programming that allow you to annotate and modify classes and class members at design time."
            }
          ],
          quiz: [
            {
              question: "What must be enabled in the TypeScript configuration to use decorators?",
              options: [
                "strictNullChecks",
                "experimentalDecorators",
                "noImplicitAny",
                "moduleResolution"
              ],
              correctAnswer: 1,
              explanation: "To use decorators in TypeScript, you must enable the 'experimentalDecorators' compiler option in your tsconfig.json file. This is because decorators are still an experimental feature in the JavaScript language."
            }
          ],
          flashcards: [
            {
              front: "What are the types of decorators in TypeScript?",
              back: "TypeScript supports five types of decorators: class decorators, method decorators, accessor decorators, property decorators, and parameter decorators. Each type of decorator is applied to a different part of a class definition."
            }
          ]
        },
        {
          id: "ts-utility-types",
          title: "Utility Types",
          description: "Leveraging built-in utility types for type transformations",
          content: `
# Utility Types in TypeScript

TypeScript provides several utility types to facilitate common type transformations.
          `,
          codeExamples: [
            {
              title: "Common Utility Types",
              code: `// Define a base interface
interface User {
    id: number;
    name: string;
    email: string;
    age: number;
    createdAt: Date;
}

// Partial<T> - Makes all properties optional
type PartialUser = Partial<User>;
const updateUser = (id: number, userData: PartialUser) => {
    // Update only the provided fields
    console.log(\`Updating user \${id} with: \${JSON.stringify(userData)}\`);
};
updateUser(1, { name: "John Doe" }); // Valid, only updating name

// Required<T> - Makes all properties required
type StrictUser = Required<User>;
// All fields are mandatory, even if optional in the original type

// Readonly<T> - Makes all properties readonly
type ReadonlyUser = Readonly<User>;
const user: ReadonlyUser = {
    id: 1,
    name: "Alice",
    email: "alice@example.com",
    age: 28,
    createdAt: new Date()
};
// user.name = "Alice Smith"; // Error: Cannot assign to 'name' because it is a read-only property

// Record<K, T> - Constructs a type with keys K and values T
type UserRoles = Record<string, boolean>;
const permissions: UserRoles = {
    "read": true,
    "write": true,
    "delete": false
};

// Pick<T, K> - Picks a set of properties from T
type UserBasicInfo = Pick<User, "id" | "name" | "email">;
const userInfo: UserBasicInfo = {
    id: 1,
    name: "Bob",
    email: "bob@example.com"
};

// Omit<T, K> - Omits a set of properties from T
type UserWithoutDates = Omit<User, "createdAt">;
const newUser: UserWithoutDates = {
    id: 2,
    name: "Charlie",
    email: "charlie@example.com",
    age: 35
};

// Exclude<T, U> - Excludes types that are assignable to U from T
type NumericId = Exclude<string | number, string>;
let id: NumericId = 123;
// let stringId: NumericId = "123"; // Error: Type 'string' is not assignable to type 'number'

// Extract<T, U> - Extracts types that are assignable to U from T
type StringId = Extract<string | number, string>;
let userId: StringId = "user_123";
// let numId: StringId = 123; // Error: Type 'number' is not assignable to type 'string'

// NonNullable<T> - Removes null and undefined from T
type NonNullableId = NonNullable<string | number | null | undefined>;
let nonNullId: NonNullableId = "id_123"; // string or number, but not null or undefined

// ReturnType<T> - Extracts the return type of a function type
function createUser(name: string, email: string): User {
    return { id: 1, name, email, age: 30, createdAt: new Date() };
}
type NewUser = ReturnType<typeof createUser>; // Type is User`,
              explanation: "This example demonstrates TypeScript's built-in utility types, which provide shortcuts for common type transformations. These include Partial, Required, Readonly, Record, Pick, Omit, Exclude, Extract, NonNullable, ReturnType, and more. Utility types help you manipulate and transform types without having to redefine them."
            }
          ],
          quiz: [
            {
              question: "What does the `Pick<T, K>` utility type do?",
              options: [
                "Makes all properties of T optional",
                "Creates a new type by selecting a set of properties K from T",
                "Removes properties K from type T",
                "Converts all properties of T to be readonly"
              ],
              correctAnswer: 1,
              explanation: "The Pick<T, K> utility type creates a new type by selecting a set of properties K from type T. It is useful when you want to create a subset of an existing type with only specific properties."
            }
          ],
          flashcards: [
            {
              front: "What's the difference between `Omit<T, K>` and `Pick<T, K>`?",
              back: "Pick<T, K> creates a type by including only the specified properties K from T, while Omit<T, K> creates a type by excluding the specified properties K from T. Pick selects what to keep, while Omit selects what to remove."
            }
          ]
        },
        {
          id: "ts-async",
          title: "Async Programming",
          description: "Working with asynchronous code in TypeScript",
          content: `
# Async Programming in TypeScript

TypeScript provides strong typing for asynchronous programming patterns like Promises and async/await.
          `,
          codeExamples: [
            {
              title: "Promises and Async/Await",
              code: `// Promises with type annotations
function fetchData(): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = Math.random() > 0.2;
            if (success) {
                resolve("Data successfully fetched");
            } else {
                reject(new Error("Failed to fetch data"));
            }
        }, 1000);
    });
}

// Using the promise with .then/.catch
fetchData()
    .then((data: string) => {
        console.log(data); // Data successfully fetched
    })
    .catch((error: Error) => {
        console.error(error.message); // Failed to fetch data
    });

// Async/await with error handling
async function getData(): Promise<string> {
    try {
        const data = await fetchData();
        return data;
    } catch (error) {
        if (error instanceof Error) {
            console.error(error.message);
        }
        return "Default data due to error";
    }
}

// Using async/await with IIFE (Immediately Invoked Function Expression)
(async () => {
    const result = await getData();
    console.log(result);
})();

// Parallel execution with Promise.all
async function fetchMultipleData(): Promise<string[]> {
    const promises = [
        fetchData(),
        fetchData(),
        fetchData()
    ];
    
    return Promise.all(promises);
}

// Sequential execution
async function fetchSequentially(): Promise<string[]> {
    const results: string[] = [];
    
    results.push(await fetchData());
    results.push(await fetchData());
    results.push(await fetchData());
    
    return results;
}

// Promise.race example
async function fetchWithTimeout(timeoutMs: number): Promise<string> {
    const dataPromise = fetchData();
    const timeoutPromise = new Promise<never>((_, reject) => {
        setTimeout(() => {
            reject(new Error(\`Operation timed out after \${timeoutMs}ms\`));
        }, timeoutMs);
    });
    
    return Promise.race([dataPromise, timeoutPromise]);
}

// Async generators
async function* generateSequence(): AsyncGenerator<number> {
    for (let i = 0; i < 5; i++) {
        await new Promise(resolve => setTimeout(resolve, 500));
        yield i;
    }
}

// Using async generator
(async () => {
    for await (const num of generateSequence()) {
        console.log(num); // 0, 1, 2, 3, 4 (with 500ms delay between each)
    }
})();`,
              explanation: "This example demonstrates various aspects of async programming in TypeScript, including Promises with type annotations, async/await syntax, error handling, parallel execution with Promise.all, sequential execution, Promise.race for implementing timeouts, and async generators/iterators. TypeScript provides strong typing for all these patterns, making async code more reliable."
            }
          ],
          quiz: [
            {
              question: "What is the return type of an async function in TypeScript?",
              options: [
                "void",
                "Promise<T> where T is the type returned within the function",
                "any",
                "The exact type returned within the function"
              ],
              correctAnswer: 1,
              explanation: "In TypeScript, an async function always returns a Promise<T>, where T is the type of the value that the function returns. Even if you return a non-promise value from an async function, TypeScript will automatically wrap it in a Promise."
            }
          ],
          flashcards: [
            {
              front: "What's the difference between Promise.all and Promise.allSettled?",
              back: "Promise.all() returns a promise that resolves when all provided promises resolve, or rejects as soon as one promise rejects. Promise.allSettled() always resolves after all promises complete (either resolve or reject), with an array of objects describing each outcome."
            }
          ]
        }
      ]
    }
  ]
};
