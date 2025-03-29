
import { Topic } from '../../types';

export const enumsTopic: Topic = {
  id: "typescript-enums",
  title: "Enums",
  description: "Learn how to use enumerations in TypeScript",
  content: `
# Enums in TypeScript

Enums allow you to define a set of named constants, making code more readable and less error-prone.
  `,
  codeExamples: [
    {
      title: "Working with Enums",
      code: `// Numeric enums (default)
enum Direction {
  North,  // 0
  East,   // 1
  South,  // 2
  West    // 3
}

let dir: Direction = Direction.South;
console.log(dir);  // Output: 2

// You can access enum values by name or by value
let dirName: string = Direction[2];  // "South"
console.log(dirName);

// Enums with initialized values
enum HttpStatus {
  OK = 200,
  BadRequest = 400,
  Unauthorized = 401,
  NotFound = 404,
  InternalServerError = 500
}

function respondToRequest(status: HttpStatus): void {
  console.log(\`Response status: \${status}\`);
}

respondToRequest(HttpStatus.OK);  // Output: Response status: 200

// String enums (TypeScript 2.4+)
enum CardinalDirection {
  North = "NORTH",
  East = "EAST",
  South = "SOUTH",
  West = "WEST"
}

let direction: CardinalDirection = CardinalDirection.North;
console.log(direction);  // Output: "NORTH"

// Heterogeneous enums (mixed string and numeric)
enum BooleanLikeHeterogeneousEnum {
  No = 0,
  Yes = "YES"
}

// Computed and constant enum members
enum FileAccess {
  // Constant members
  None = 0,
  Read = 1 << 0,  // 1
  Write = 1 << 1,  // 2
  ReadWrite = Read | Write,  // 3
  // Computed member
  G = "123".length  // 3
}

// Enum as parameter type
function checkAccess(access: FileAccess): void {
  if (access === FileAccess.ReadWrite) {
    console.log("Full access");
  } else if (access === FileAccess.Read) {
    console.log("Read access");
  } else if (access === FileAccess.Write) {
    console.log("Write access");
  } else {
    console.log("No access");
  }
}

checkAccess(FileAccess.ReadWrite);  // Output: Full access

// Using enums as flags
enum Permissions {
  None = 0,
  Read = 1 << 0,  // 1
  Write = 1 << 1,  // 2
  Execute = 1 << 2  // 4
}

// Combining flags using bitwise OR
let userPermissions: Permissions = Permissions.Read | Permissions.Write;  // 3

// Checking for a specific permission using bitwise AND
if (userPermissions & Permissions.Read) {
  console.log("User has read permission");
}

if (userPermissions & Permissions.Execute) {
  console.log("User has execute permission");
} else {
  console.log("User does not have execute permission");
}

// Const enums (inlined during compilation for performance)
const enum Planet {
  Mercury = 1,
  Venus,
  Earth,
  Mars
}

let earth: Planet = Planet.Earth;
console.log(earth);  // Output: 3

// Ambient enums (for describing existing enums from external code)
declare enum ExternalEnum {
  A = 1,
  B,
  C = 2
}

// Reverse mappings (numeric enums only)
enum Weekday {
  Monday,
  Tuesday,
  Wednesday
}

let day = Weekday.Tuesday;  // 1
let dayName = Weekday[day];  // "Tuesday"
console.log(dayName);

// Using Object.keys with enums
const weekdays = Object.keys(Weekday)
  .filter(key => !isNaN(Number(key)))  // Filter out reverse mappings
  .map(key => Weekday[key as any]);

console.log(weekdays);  // ["Monday", "Tuesday", "Wednesday"]

// Using enums with switch statements
function getDirectionCode(direction: Direction): string {
  switch (direction) {
    case Direction.North:
      return "N";
    case Direction.East:
      return "E";
    case Direction.South:
      return "S";
    case Direction.West:
      return "W";
    default:
      return "Unknown";
  }
}

console.log(getDirectionCode(Direction.East));  // Output: "E"`,
      explanation: "This example demonstrates various aspects of enums in TypeScript, including numeric enums, string enums, mixed enums, computed enum members, using enums as parameter types, bitwise operations with flag enums, const enums, ambient enums, reverse mappings, and practical patterns for working with enums. Enums help make code more readable and maintainable by giving meaningful names to sets of related values."
    }
  ],
  quiz: [
    {
      question: "What is the output of the following code? enum Color { Red, Green, Blue } let colorName = Color[1];",
      options: [
        "1",
        "Red",
        "Green",
        "Error: Cannot index enum with a number"
      ],
      correctAnswer: 2,
      explanation: "Numeric enums in TypeScript create both forward (name → value) and reverse (value → name) mappings. The default values start at 0 for the first member and increment by 1 for each subsequent member. In this case, Color[0] would be 'Red', Color[1] would be 'Green', and Color[2] would be 'Blue'. So, Color[1] returns 'Green'."
    }
  ],
  flashcards: [
    {
      front: "What is the difference between regular enums and const enums in TypeScript?",
      back: "Regular enums are compiled into JavaScript objects that exist at runtime, allowing both forward and reverse lookups (for numeric enums). Const enums are completely removed during compilation, and their values are inlined wherever they're used. This improves performance but means const enum values cannot be accessed by name at runtime. Const enums are best for cases where you only need the enum values during compilation."
    }
  ]
};
