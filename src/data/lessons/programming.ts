import { LessonData } from './types';

export const programmingLessons: Record<string, LessonData> = {
  'javascript': {
    title: 'JavaScript — Language of the Web',
    sections: [
      {
        heading: 'Why JavaScript Matters',
        body: 'JavaScript is the only language that runs natively in every web browser. When you click a button and something happens without the page reloading — that\'s JavaScript. It started as a simple scripting language in 1995 but now runs servers (Node.js), mobile apps (React Native), desktop apps (Electron), and even ML models. Learning JavaScript gives you access to the widest range of platforms of any single language.'
      },
      {
        heading: 'Variables and Data Types',
        body: 'JavaScript has three variable declarations: var (old, avoid), let (for values that change), and const (for constants). It\'s dynamically typed — the language figures out types. Primitives: string, number, boolean, null, undefined, symbol, bigint. Complex types: objects (key-value pairs) and arrays (ordered lists). A famous quirk: typeof null returns "object" — a bug from 1995 never fixed.',
        code: {
          language: 'javascript',
          snippet: 'const name = "Alice";       // string\nlet score = 0;              // number, can reassign\nscore = score + 10;\n\nconst player = {\n  name: "Alice",\n  level: 5,\n  items: ["sword", "shield"]\n};\n\nconsole.log(player.name);       // "Alice"\nconsole.log(player.items[0]);   // "sword"\nconsole.log(typeof null);       // "object" (the bug!)',
          explanation: 'Use const by default, let when you need to reassign. Objects group related data with dot notation access.'
        }
      },
      {
        heading: 'Functions — Three Ways',
        body: 'Function declarations are hoisted (usable before written). Function expressions are assigned to variables. Arrow functions (ES6) are concise and don\'t have their own "this". Functions are first-class: store in variables, pass as arguments, return from other functions. Array methods like map, filter, reduce take functions as callbacks for powerful data transformations.',
        code: {
          language: 'javascript',
          snippet: '// Arrow functions + array methods\nconst numbers = [3, 1, 4, 1, 5, 9];\n\nconst doubled = numbers.map(n => n * 2);\n// [6, 2, 8, 2, 10, 18]\n\nconst evens = numbers.filter(n => n % 2 === 0);\n// [4]\n\nconst sum = numbers.reduce((total, n) => total + n, 0);\n// 23',
          explanation: 'Arrow functions shine in array methods. Single-expression arrows have implicit return — no braces or return keyword needed.'
        }
      },
      {
        heading: 'Async/Await',
        body: 'JavaScript is single-threaded but non-blocking. Promises represent future values (pending/fulfilled/rejected). Async/await makes promise code read like synchronous code. Any async function returns a promise. Always wrap await in try/catch. The fetch API doesn\'t throw on 404/500 — you must check response.ok yourself.'
      }
    ],
    diagram: '<div style="padding:20px;background:linear-gradient(135deg,#fefce8,#fef9c3);border-radius:16px;border:2px solid #eab308;"><div style="font-weight:700;color:#a16207;text-align:center;margin-bottom:16px;font-size:15px;">JavaScript Event Loop</div><div style="display:flex;flex-direction:column;gap:8px;max-width:400px;margin:0 auto;"><div style="padding:12px;background:#fff;border-radius:10px;border:2px solid #fbbf24;"><div style="font-weight:bold;text-align:center;color:#92400e;">Call Stack</div><div style="font-size:12px;color:#64748b;text-align:center;">Runs code one function at a time</div></div><div style="text-align:center;color:#eab308;">↕</div><div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;"><div style="padding:12px;background:#fff;border-radius:10px;border:2px solid #22c55e;text-align:center;"><div style="font-weight:bold;color:#15803d;font-size:13px;">Microtasks</div><div style="font-size:11px;color:#64748b;">Promises, await</div></div><div style="padding:12px;background:#fff;border-radius:10px;border:2px solid #3b82f6;text-align:center;"><div style="font-weight:bold;color:#1d4ed8;font-size:13px;">Macrotasks</div><div style="font-size:11px;color:#64748b;">setTimeout, events</div></div></div></div></div>',
    codingQuiz: {
      question: 'What is the output of: console.log(typeof undefined)',
      hint: 'typeof returns a string. undefined is its own type.',
      expectedOutput: 'undefined'
    }
  },
  'python': {
    title: 'Python — Readable & Powerful',
    sections: [
      {
        heading: 'Why Python Is Special',
        body: 'Python uses indentation instead of braces to define code blocks, making readable code a requirement. It\'s the world\'s most popular language, dominating data science, ML, web dev (Django/Flask), and automation. Its "batteries included" standard library handles most tasks without extra packages.'
      },
      {
        heading: 'Data Structures',
        body: 'Four core structures: lists (ordered, mutable), tuples (ordered, immutable), dictionaries (key-value pairs), and sets (unique values). List comprehensions are Python\'s superpower: [x*2 for x in range(5)] creates [0, 2, 4, 6, 8] in one line.',
        code: {
          language: 'python',
          snippet: 'numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]\nevens = [n for n in numbers if n % 2 == 0]\nprint(evens)  # [2, 4, 6, 8, 10]\n\nuser = {"name": "Alice", "age": 30}\nfor key, val in user.items():\n    print(f"{key}: {val}")\n\nfirst, *middle, last = [1, 2, 3, 4, 5]\nprint(middle)  # [2, 3, 4]',
          explanation: 'List comprehensions replace loops with one-line expressions. The * operator in unpacking captures "the rest" into a list.'
        }
      },
      {
        heading: 'Pythonic Patterns',
        body: 'Use enumerate() for index+value, zip() for parallel iteration, "with" statements for file handling (auto-closes). F-strings (f"Hello {name}") for formatting. The philosophy: "There should be one obvious way to do it."',
        code: {
          language: 'python',
          snippet: 'fruits = ["apple", "banana", "cherry"]\nfor i, fruit in enumerate(fruits):\n    print(f"{i}: {fruit}")\n\nnames = ["Alice", "Bob"]\nscores = [95, 87]\nfor name, score in zip(names, scores):\n    print(f"{name}: {score}")\n\nwith open("data.txt") as file:\n    content = file.read()\n# File auto-closed here',
          explanation: 'enumerate gives index+value. zip pairs parallel lists. "with" guarantees cleanup even if errors occur.'
        }
      },
      {
        heading: 'Classes and OOP',
        body: 'Every method takes "self" as first parameter. __init__ is the constructor. Dunder methods (__str__, __len__, __eq__) enable operator overloading. Dataclasses (3.7+) auto-generate boilerplate for simple data containers. Python supports multiple paradigms: procedural, OOP, and functional.'
      }
    ],
    diagram: '<div style="padding:20px;background:linear-gradient(135deg,#eff6ff,#dbeafe);border-radius:16px;border:2px solid #3b82f6;"><div style="font-weight:700;color:#1d4ed8;text-align:center;margin-bottom:16px;font-size:15px;">Python Data Structures</div><div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;max-width:400px;margin:0 auto;"><div style="padding:12px;background:#fff;border-radius:10px;border:2px solid #93c5fd;text-align:center;"><div style="font-weight:bold;color:#1d4ed8;">list []</div><div style="font-size:12px;color:#64748b;">Ordered, Mutable</div></div><div style="padding:12px;background:#fff;border-radius:10px;border:2px solid #93c5fd;text-align:center;"><div style="font-weight:bold;color:#1d4ed8;">tuple ()</div><div style="font-size:12px;color:#64748b;">Ordered, Immutable</div></div><div style="padding:12px;background:#fff;border-radius:10px;border:2px solid #93c5fd;text-align:center;"><div style="font-weight:bold;color:#1d4ed8;">dict {}</div><div style="font-size:12px;color:#64748b;">Key-Value Lookup</div></div><div style="padding:12px;background:#fff;border-radius:10px;border:2px solid #93c5fd;text-align:center;"><div style="font-weight:bold;color:#1d4ed8;">set {}</div><div style="font-size:12px;color:#64748b;">Unique Values Only</div></div></div></div>',
    codingQuiz: {
      question: 'What is the output of: print(len([x for x in range(10) if x % 3 == 0]))',
      hint: 'range(10) = 0-9. Divisible by 3: 0, 3, 6, 9. Count them.',
      expectedOutput: '4'
    }
  },
  'java': {
    title: 'Java — Enterprise Powerhouse',
    sections: [
      { heading: 'Why Java Endures', body: 'Java runs on the JVM across every OS. It powers Android apps, banking systems, e-commerce, and big data tools (Hadoop, Spark). Over 3 billion devices run Java. Strict typing catches errors at compile time.' },
      { heading: 'Strict Typing and OOP', body: 'Every variable declares its type. Everything lives inside a class. Primitives (int, double, boolean) vs objects (String, arrays). Entry point: public static void main(String[] args). Encapsulation: private fields, public methods.',
        code: { language: 'java', snippet: 'public class Player {\n    private String name;\n    private int health = 100;\n    \n    public Player(String name) {\n        this.name = name;\n    }\n    \n    public void takeDamage(int amount) {\n        health = Math.max(0, health - amount);\n        System.out.println(name + " HP: " + health);\n    }\n}\n// Usage: Player hero = new Player("Alice");', explanation: 'Java enforces encapsulation with private fields and public methods. The "new" keyword creates instances.' }
      },
      { heading: 'Collections and Generics', body: 'List (ordered), Set (unique), Map (key-value), Queue. Generics ensure type safety: List<String> only holds strings. Java 8 Streams enable functional transformations: list.stream().filter().map().collect().' },
      { heading: 'Interfaces', body: 'Interfaces define contracts — what methods a class must implement. A class can implement multiple interfaces but extend only one parent. Since Java 8, interfaces can have default methods with implementation.' }
    ],
    diagram: '<div style="padding:20px;background:linear-gradient(135deg,#fef2f2,#fee2e2);border-radius:16px;border:2px solid #ef4444;"><div style="font-weight:700;color:#dc2626;text-align:center;margin-bottom:16px;font-size:15px;">Java Class Structure</div><div style="max-width:350px;margin:0 auto;background:#fff;border-radius:12px;border:2px solid #fca5a5;overflow:hidden;"><div style="padding:10px;background:#ef4444;color:white;font-weight:bold;text-align:center;">public class ClassName</div><div style="padding:12px;display:flex;flex-direction:column;gap:6px;"><div style="padding:8px;background:#fef2f2;border-radius:6px;border-left:3px solid #f87171;font-size:12px;"><strong>Fields</strong> — private String name;</div><div style="padding:8px;background:#fef2f2;border-radius:6px;border-left:3px solid #fb923c;font-size:12px;"><strong>Constructor</strong> — public ClassName(params)</div><div style="padding:8px;background:#fef2f2;border-radius:6px;border-left:3px solid #fbbf24;font-size:12px;"><strong>Methods</strong> — public void doThing()</div><div style="padding:8px;background:#fef2f2;border-radius:6px;border-left:3px solid #a3e635;font-size:12px;"><strong>main()</strong> — entry point</div></div></div></div>',
    codingQuiz: { question: 'What is the output of: System.out.println("Hello".length())', hint: 'length() returns number of characters.', expectedOutput: '5' }
  },
  'csharp': {
    title: 'C# — Modern & Versatile',
    sections: [
      { heading: 'C# Overview', body: 'Microsoft\'s flagship language on .NET. Combines C++ power with Java safety plus LINQ, async/await, and pattern matching. Used for Unity games, ASP.NET web apps, and cross-platform mobile with .NET MAUI. Strongly typed with excellent Visual Studio tooling.' },
      { heading: 'Core Syntax', body: 'C-style syntax with strong typing. "var" provides local type inference. Value types (int, struct) on stack, reference types (class, string) on heap. Properties replace getter/setter boilerplate. Pattern matching with switch expressions.',
        code: { language: 'csharp', snippet: 'public class Player {\n    public string Name { get; set; }\n    public int Health { get; private set; } = 100;\n    \n    public Player(string name) => Name = name;\n    \n    public bool IsAlive => Health > 0;\n    \n    public string GetStatus() => Health switch {\n        > 75 => "Healthy",\n        > 25 => "Wounded",\n        > 0  => "Critical",\n        _    => "Dead"\n    };\n}', explanation: 'Properties, expression-bodied members (=>), and switch expressions keep C# code concise and readable.' }
      },
      { heading: 'LINQ', body: 'Query data with SQL-like syntax in C#: people.Where(p => p.Age >= 18).OrderBy(p => p.Name).Select(p => p.Name). Works on any IEnumerable — lists, databases, XML, APIs.' },
      { heading: 'Async/Await', body: 'C# pioneered async/await. Methods return Task<T>, await pauses until resolved. The compiler transforms linear code into efficient state machines. Makes responsive UIs and scalable servers natural to write.' }
    ],
    diagram: '<div style="padding:20px;background:linear-gradient(135deg,#f5f3ff,#ede9fe);border-radius:16px;border:2px solid #8b5cf6;"><div style="font-weight:700;color:#6d28d9;text-align:center;margin-bottom:16px;font-size:15px;">C# / .NET Ecosystem</div><div style="display:grid;grid-template-columns:repeat(2,1fr);gap:8px;max-width:350px;margin:0 auto;"><div style="padding:12px;background:#fff;border-radius:10px;border:1px solid #ddd6fe;text-align:center;"><div style="font-weight:bold;color:#6d28d9;">Unity Games</div><div style="font-size:11px;color:#64748b;">2D/3D + VR/AR</div></div><div style="padding:12px;background:#fff;border-radius:10px;border:1px solid #ddd6fe;text-align:center;"><div style="font-weight:bold;color:#6d28d9;">ASP.NET</div><div style="font-size:11px;color:#64748b;">Web APIs</div></div><div style="padding:12px;background:#fff;border-radius:10px;border:1px solid #ddd6fe;text-align:center;"><div style="font-weight:bold;color:#6d28d9;">.NET MAUI</div><div style="font-size:11px;color:#64748b;">Mobile Apps</div></div><div style="padding:12px;background:#fff;border-radius:10px;border:1px solid #ddd6fe;text-align:center;"><div style="font-weight:bold;color:#6d28d9;">Azure</div><div style="font-size:11px;color:#64748b;">Cloud</div></div></div></div>',
    codingQuiz: { question: 'In C#, what is the output of: Console.WriteLine("Hello World".Split(" ").Length)', hint: 'Split(" ") creates an array of words. Length counts elements.', expectedOutput: '2' }
  },
  'cpp': {
    title: 'C++ — Performance King',
    sections: [
      { heading: 'The Power of C++', body: 'Compiles to machine code with zero runtime overhead. Powers game engines (Unreal), OS kernels, browsers, and databases. Harder to learn but gives deep insight into how computers actually work.' },
      { heading: 'Memory Management', body: 'Stack (auto-freed) vs heap (new/delete). Modern C++11+ uses smart pointers: unique_ptr (one owner, auto-deletes), shared_ptr (reference-counted). Eliminates memory leaks when used properly.',
        code: { language: 'cpp', snippet: '#include <iostream>\n#include <vector>\n#include <memory>\n\nclass Player {\n    std::string name;\n    int health;\npublic:\n    Player(const std::string& n, int hp=100)\n        : name(n), health(hp) {}\n    void hit(int dmg) {\n        health = std::max(0, health - dmg);\n        std::cout << name << " HP: " << health << "\\n";\n    }\n};\n\nint main() {\n    auto hero = std::make_unique<Player>("Alice");\n    hero->hit(30);  // Alice HP: 70\n    // auto-freed when scope ends\n}', explanation: 'unique_ptr ensures automatic cleanup. Vectors manage their own memory. Range-based for loops are clean C++11 syntax.' }
      },
      { heading: 'STL and Templates', body: 'Standard Template Library: vector, map, set, queue. Algorithms: sort, find, transform. Templates enable generic code. std::sort works on any container type.' },
      { heading: 'Modern C++', body: 'Auto type inference, range-for, lambdas, move semantics, structured bindings. Modern C++ is almost a different language from old-style C++. Motto: "don\'t pay for what you don\'t use."' }
    ],
    diagram: '<div style="padding:20px;background:linear-gradient(135deg,#fffbeb,#fef3c7);border-radius:16px;border:2px solid #f59e0b;"><div style="font-weight:700;color:#b45309;text-align:center;margin-bottom:16px;font-size:15px;">C++ Memory Layout</div><div style="max-width:300px;margin:0 auto;display:flex;flex-direction:column;gap:4px;"><div style="padding:12px;background:#fef3c7;border-radius:8px 8px 4px 4px;border:2px solid #fbbf24;text-align:center;font-size:13px;"><strong>Stack</strong> — Auto variables (fast)</div><div style="padding:12px;background:#fed7aa;border-radius:4px;border:2px solid #fb923c;text-align:center;font-size:13px;"><strong>Heap</strong> — Dynamic alloc (manual/smart)</div><div style="padding:12px;background:#fecaca;border-radius:4px;border:2px solid #f87171;text-align:center;font-size:13px;"><strong>Static</strong> — Globals</div><div style="padding:12px;background:#e2e8f0;border-radius:4px 4px 8px 8px;border:2px solid #94a3b8;text-align:center;font-size:13px;"><strong>Code</strong> — Read-only instructions</div></div></div>',
    codingQuiz: { question: 'In C++, what is the output of: cout << (17 % 5)', hint: '% gives remainder. 17 / 5 = 3 remainder ?', expectedOutput: '2' }
  },
  'ruby': {
    title: 'Ruby — Programmer Happiness',
    sections: [
      { heading: 'Ruby\'s Philosophy', body: 'Created to make programming enjoyable. Syntax reads like English: 5.times { puts "hello" }. Everything is an object — even numbers have methods. Ruby on Rails revolutionized web dev and is used by Shopify, GitHub, Airbnb.' },
      { heading: 'Blocks and Iteration', body: 'Blocks are chunks of code passed to methods. Almost all iteration uses them. select filters, map transforms, reduce aggregates. Methods ending in ? return booleans, ! modify in place. Symbols (:name) are lightweight immutable identifiers.',
        code: { language: 'ruby', snippet: 'puts 42.even?      # true\nputs "hello".upcase # HELLO\n\nnumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]\nevens = numbers.select { |n| n.even? }\nputs evens.inspect  # [2, 4, 6, 8, 10]\n\ntotal = numbers.reduce(0) { |sum, n| sum + n }\nputs total  # 55\n\nuser = { name: "Alice", role: :admin }\nputs user[:name]  # Alice', explanation: 'Ruby methods with ? return booleans. Blocks make iteration elegant and readable. Symbols are perfect hash keys.' }
      },
      { heading: 'Classes and Mixins', body: 'Single inheritance + modules for mixins. Include a module to add its methods to any class — composition over inheritance. Open classes let you add methods to existing types. Metaprogramming: method_missing, define_method, attr_accessor.' },
      { heading: 'The Rails Effect', body: 'Ruby on Rails introduced "convention over configuration" — follow naming conventions and the framework does the rest. Active Record ORM, RESTful routing, MVC architecture. Still the fastest way to go from idea to deployed web app.' }
    ],
    diagram: '<div style="padding:20px;background:linear-gradient(135deg,#fdf2f8,#fce7f3);border-radius:16px;border:2px solid #ec4899;"><div style="font-weight:700;color:#be185d;text-align:center;margin-bottom:16px;font-size:15px;">Ruby Object Hierarchy</div><div style="display:flex;flex-direction:column;align-items:center;gap:6px;"><div style="padding:10px 24px;background:#ec4899;color:white;border-radius:10px;font-weight:bold;">BasicObject</div><div style="width:2px;height:8px;background:#ec4899;"></div><div style="padding:10px 24px;background:#f472b6;color:white;border-radius:10px;font-weight:bold;">Object + Kernel</div><div style="width:2px;height:8px;background:#ec4899;"></div><div style="display:flex;gap:6px;"><div style="padding:8px 12px;background:#fce7f3;border-radius:8px;font-size:12px;border:1px solid #f9a8d4;">Your Class</div><div style="padding:8px 12px;background:#fef3c7;border-radius:8px;font-size:12px;border:1px solid #fde68a;">+ Module</div><div style="padding:8px 12px;background:#dcfce7;border-radius:8px;font-size:12px;border:1px solid #bbf7d0;">+ Mixin</div></div></div></div>',
    codingQuiz: { question: 'What is the output of: puts [1,2,3,4,5].select(&:odd?).sum', hint: 'Odd numbers: 1,3,5. Sum: 1+3+5', expectedOutput: '9' }
  },
  'go': {
    title: 'Go — Simple, Fast, Concurrent',
    sections: [
      { heading: 'Go\'s Design', body: 'Created at Google to solve slow compile times and complex concurrency. Compiles to a single static binary in seconds. No classes, no inheritance, no exceptions — radical simplicity. Powers Docker, Kubernetes, Terraform.' },
      { heading: 'Structs and Interfaces', body: 'Structs hold data, methods defined separately with a "receiver." Interfaces are implicitly satisfied — if your type has the right methods, it implements the interface. No "implements" keyword. Multiple return values replace exceptions.',
        code: { language: 'go', snippet: 'type Player struct {\n    Name   string\n    Health int\n}\n\nfunc (p *Player) TakeDamage(amount int) {\n    p.Health -= amount\n    fmt.Printf("%s HP: %d\\n", p.Name, p.Health)\n}\n\nfunc main() {\n    hero := Player{Name: "Alice", Health: 100}\n    hero.TakeDamage(30)  // Alice HP: 70\n    \n    val, err := strconv.Atoi("42")\n    if err != nil {\n        log.Fatal(err)\n    }\n    fmt.Println(val)  // 42\n}', explanation: 'Go methods have a receiver (p *Player). := declares and assigns. Error handling is explicit: check err != nil after every call.' }
      },
      { heading: 'Goroutines and Channels', body: 'Goroutines: lightweight concurrent functions (go keyword, ~2KB each vs ~1MB threads). Channels: typed pipes for safe communication. "Don\'t communicate by sharing memory; share memory by communicating." Eliminates most race conditions.',
        code: { language: 'go', snippet: 'func fetch(url string, ch chan<- string) {\n    time.Sleep(time.Second)\n    ch <- "Got " + url\n}\n\nfunc main() {\n    ch := make(chan string)\n    urls := []string{"a.com", "b.com", "c.com"}\n    \n    for _, url := range urls {\n        go fetch(url, ch)\n    }\n    \n    for i := 0; i < 3; i++ {\n        fmt.Println(<-ch)\n    }\n}', explanation: 'Three goroutines fetch in parallel. Channel collects results safely. Total: ~1 second instead of 3.' }
      },
      { heading: 'Error Handling', body: 'No exceptions — functions return errors as values. Check if err != nil after every call. Verbose but explicit. Go 1.13 added error wrapping for better error chains.' }
    ],
    diagram: '<div style="padding:20px;background:linear-gradient(135deg,#ecfeff,#cffafe);border-radius:16px;border:2px solid #06b6d4;"><div style="font-weight:700;color:#0e7490;text-align:center;margin-bottom:16px;font-size:15px;">Go Concurrency</div><div style="display:flex;align-items:center;gap:8px;justify-content:center;max-width:400px;margin:0 auto;"><div style="flex:1;padding:12px;background:#fff;border-radius:10px;border:2px solid #67e8f9;text-align:center;"><div style="font-weight:bold;color:#0e7490;">Goroutine A</div><div style="font-size:11px;font-family:monospace;">go func()</div></div><div style="padding:8px 14px;background:#06b6d4;color:white;border-radius:8px;font-weight:bold;font-size:12px;">Channel</div><div style="flex:1;padding:12px;background:#fff;border-radius:10px;border:2px solid #67e8f9;text-align:center;"><div style="font-weight:bold;color:#0e7490;">Goroutine B</div><div style="font-size:11px;font-family:monospace;">data := <-ch</div></div></div></div>',
    codingQuiz: { question: 'In Go, what does fmt.Println(len("Hello, World!")) output?', hint: 'len() counts bytes. ASCII = 1 byte each. Count all characters.', expectedOutput: '13' }
  },
  'typescript': {
    title: 'TypeScript — JS with Types',
    sections: [
      { heading: 'Why TypeScript', body: 'Adds static types to JavaScript. Catches bugs before runtime: wrong types, misspelled properties, wrong arguments. Every valid JS is valid TS — adopt gradually. Now the standard for serious web development.' },
      { heading: 'Types and Inference', body: 'Add types with colon syntax: let name: string. But TypeScript infers most types automatically. Interfaces define object shapes. Union types (string | number) for multiple possibilities. Generics for reusable typed functions.',
        code: { language: 'typescript', snippet: 'interface User {\n  id: number;\n  name: string;\n  role: "admin" | "user";\n  email?: string;\n}\n\nfunction greet(user: User): string {\n  return "Hello " + user.name;\n}\n\nfunction first<T>(arr: T[]): T | undefined {\n  return arr[0];\n}\n\nconst n = first([1, 2, 3]);\nconst s = first(["a", "b"]);', explanation: 'Union literal types restrict values. Optional properties use ?. Generics let you write type-safe reusable code.' }
      },
      { heading: 'Advanced Types', body: 'Utility types: Partial<T> (all optional), Pick<T, keys>, Omit<T, keys>, Record<K, V>. Mapped and conditional types derive new types programmatically. Keeps types DRY as codebases grow.' },
      { heading: 'In Practice', body: 'React with TSX gives typed props. Prisma generates database types. Strict mode catches null access, wrong args, missing properties. VS Code uses TS even for JS files for autocompletion.' }
    ],
    diagram: '<div style="padding:20px;background:linear-gradient(135deg,#f0fdf4,#dcfce7);border-radius:16px;border:2px solid #22c55e;"><div style="font-weight:700;color:#15803d;text-align:center;margin-bottom:16px;font-size:15px;">TypeScript Type Hierarchy</div><div style="display:flex;flex-direction:column;align-items:center;gap:6px;"><div style="padding:10px 20px;background:#22c55e;color:white;border-radius:10px;font-weight:bold;">unknown (top)</div><div style="width:2px;height:6px;background:#22c55e;"></div><div style="display:flex;gap:6px;flex-wrap:wrap;justify-content:center;"><div style="padding:6px 10px;background:#fff;border-radius:6px;font-size:12px;border:1px solid #86efac;">string</div><div style="padding:6px 10px;background:#fff;border-radius:6px;font-size:12px;border:1px solid #86efac;">number</div><div style="padding:6px 10px;background:#fff;border-radius:6px;font-size:12px;border:1px solid #86efac;">boolean</div><div style="padding:6px 10px;background:#fff;border-radius:6px;font-size:12px;border:1px solid #86efac;">object</div></div><div style="width:2px;height:6px;background:#22c55e;"></div><div style="padding:10px 20px;background:#166534;color:white;border-radius:10px;font-weight:bold;">never (bottom)</div></div></div>',
    codingQuiz: { question: 'What type does TS infer for: const x = [1, "hello"]', hint: 'TS infers the union of all element types.', expectedOutput: '(string | number)[]' }
  },
  'rust': {
    title: 'Rust — Safe & Fast',
    sections: [
      { heading: 'Why Rust Is Revolutionary', body: 'Memory safety without garbage collection via the ownership system. If it compiles, no null pointers, no data races, no buffer overflows. Used by Firefox, Dropbox, Discord, and the Linux kernel. Voted "most loved language" for years.' },
      { heading: 'Ownership', body: 'Every value has one owner. When owner leaves scope, value is dropped. Borrow with &T (shared read) or &mut T (exclusive write). Compiler enforces these rules — prevents use-after-free, double-free, dangling pointers at compile time.',
        code: { language: 'rust', snippet: 'fn main() {\n    let name = String::from("Alice");\n    greet(name);\n    // name is invalid here!\n    \n    let score = String::from("95");\n    print_len(&score);\n    println!("{}", score); // still valid\n    \n    let mut items = vec!["sword"];\n    items.push("shield");\n}\n\nfn greet(n: String) { println!("Hi {}!", n); }\nfn print_len(s: &String) { println!("{}", s.len()); }', explanation: 'Moving transfers ownership — original variable becomes invalid. & borrows without taking ownership.' }
      },
      { heading: 'Option and Result', body: 'No null, no exceptions. Option<T> = Some(value) or None. Result<T,E> = Ok(value) or Err(error). Compiler forces you to handle both cases. The ? operator propagates errors concisely.' },
      { heading: 'Zero-Cost Abstractions', body: 'High-level features (iterators, closures, generics) compile to the same code as hand-written loops. No GC pauses, no runtime overhead. Matches or beats C/C++ in benchmarks while being memory-safe.' }
    ],
    diagram: '<div style="padding:20px;background:linear-gradient(135deg,#fef2f2,#fee2e2);border-radius:16px;border:2px solid #ef4444;"><div style="font-weight:700;color:#dc2626;text-align:center;margin-bottom:16px;font-size:15px;">Rust Ownership Rules</div><div style="display:flex;flex-direction:column;gap:8px;max-width:400px;margin:0 auto;"><div style="padding:12px;background:#fff;border-radius:10px;border-left:4px solid #ef4444;font-size:13px;"><strong>Rule 1:</strong> Each value has one owner</div><div style="padding:12px;background:#fff;border-radius:10px;border-left:4px solid #f97316;font-size:13px;"><strong>Rule 2:</strong> Owner leaves scope = value dropped</div><div style="padding:12px;background:#fff;border-radius:10px;border-left:4px solid #eab308;font-size:13px;"><strong>Rule 3:</strong> Many &amp;T OR one &amp;mut T</div><div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:4px;"><div style="padding:10px;background:#dcfce7;border-radius:8px;text-align:center;font-size:12px;"><strong>Option&lt;T&gt;</strong><br/>Replaces null</div><div style="padding:10px;background:#dbeafe;border-radius:8px;text-align:center;font-size:12px;"><strong>Result&lt;T,E&gt;</strong><br/>Replaces exceptions</div></div></div></div>',
    codingQuiz: { question: 'What does println!("{}", vec![10,20,30].len()) output?', hint: 'len() counts vector elements.', expectedOutput: '3' }
  },
  'php': {
    title: 'PHP — The Web\'s Workhorse',
    sections: [
      { heading: 'PHP Powers the Web', body: 'Runs ~77% of websites with known server-side language. WordPress (43% of ALL websites), Wikipedia, Slack, Etsy. Server-side: browser requests page, PHP executes, generates HTML, sends response. User never sees PHP code.' },
      { heading: 'Modern PHP', body: 'Variables start with $. Arrays are ordered maps (list + dictionary). PHP 8+ has constructor promotion, match expressions, named arguments, strict typing. Each HTTP request starts fresh (shared-nothing architecture) — inherently scalable.',
        code: { language: 'php', snippet: '<?php\ndeclare(strict_types=1);\n\nclass User {\n    public function __construct(\n        private string $name,\n        private int $age\n    ) {}\n    \n    public function greet(): string {\n        return "Hello, {$this->name}!";\n    }\n}\n\n$user = new User(name: "Alice", age: 30);\necho $user->greet(); // Hello, Alice!\n\n$nums = [3, 1, 4, 1, 5, 9];\n$sum = array_reduce($nums, fn($c, $n) => $c + $n, 0);\necho $sum; // 23', explanation: 'PHP 8 constructor promotion declares properties inline. strict_types enforces type checking. Arrow functions (fn =>) are concise.' }
      },
      { heading: 'Laravel', body: 'PHP\'s premier framework. Eloquent ORM for readable database queries, Blade templating, built-in auth, job queues. Philosophy: "developer happiness." Composer package manager provides thousands of quality libraries.' },
      { heading: 'PHP Today', body: 'PHP 8.3 has typed properties, enums, fibers (async), JIT compilation. Nothing like PHP of 2005. With WordPress powering 43% of the web, PHP knowledge remains one of the most marketable skills.' }
    ],
    diagram: '<div style="padding:20px;background:linear-gradient(135deg,#eef2ff,#e0e7ff);border-radius:16px;border:2px solid #6366f1;"><div style="font-weight:700;color:#4338ca;text-align:center;margin-bottom:16px;font-size:15px;">PHP Request Lifecycle</div><div style="display:flex;align-items:center;gap:6px;justify-content:center;flex-wrap:wrap;"><div style="padding:10px;background:#fff;border-radius:10px;border:2px solid #a5b4fc;text-align:center;font-size:12px;"><strong>Browser</strong><br/>Request</div><div style="color:#6366f1;">&#8594;</div><div style="padding:10px;background:#fff;border-radius:10px;border:2px solid #a5b4fc;text-align:center;font-size:12px;"><strong>Server</strong><br/>Nginx</div><div style="color:#6366f1;">&#8594;</div><div style="padding:10px;background:#6366f1;color:white;border-radius:10px;text-align:center;font-size:12px;"><strong>PHP</strong><br/>Execute</div><div style="color:#6366f1;">&#8594;</div><div style="padding:10px;background:#fff;border-radius:10px;border:2px solid #a5b4fc;text-align:center;font-size:12px;"><strong>HTML</strong><br/>Response</div></div></div>',
    codingQuiz: { question: 'What is the output of: echo strlen("Hello World");', hint: 'strlen() counts characters including the space.', expectedOutput: '11' }
  }
};
