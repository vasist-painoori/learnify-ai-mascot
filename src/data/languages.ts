
export interface Language {
  id: string;
  name: string;
  icon: string;
  description: string;
  tagline: string;
  applications: string[];
  color: string;
}

export const languages: Language[] = [
  {
    id: "javascript",
    name: "JavaScript",
    icon: "🟨",
    description: "JavaScript is a versatile programming language that powers the web. It's the backbone of front-end development and can be used for back-end with Node.js.",
    tagline: "The language of the web",
    applications: ["Web Development", "Mobile Apps", "Server-side", "Game Development"],
    color: "bg-yellow-400",
  },
  {
    id: "python",
    name: "Python",
    icon: "🐍",
    description: "Python is known for its simplicity and readability. It's widely used in data science, artificial intelligence, and web development.",
    tagline: "Simple yet powerful",
    applications: ["Data Science", "AI & ML", "Web Development", "Automation"],
    color: "bg-blue-500",
  },
  {
    id: "java",
    name: "Java",
    icon: "☕",
    description: "Java is a class-based, object-oriented programming language designed to be portable and run on any device that supports Java.",
    tagline: "Write once, run anywhere",
    applications: ["Enterprise Applications", "Android Development", "Big Data", "Financial Services"],
    color: "bg-red-500",
  },
  {
    id: "csharp",
    name: "C#",
    icon: "🎯",
    description: "C# is a modern, object-oriented programming language developed by Microsoft as part of the .NET initiative.",
    tagline: "Elegant and type-safe",
    applications: ["Windows Applications", "Game Development", "Enterprise Software", "Web Services"],
    color: "bg-purple-600",
  },
  {
    id: "cpp",
    name: "C++",
    icon: "⚙️",
    description: "C++ is a powerful general-purpose programming language. It can be used to develop operating systems, browsers, games, and more.",
    tagline: "Performance and control",
    applications: ["Systems Programming", "Game Engines", "High-Performance Apps", "Embedded Systems"],
    color: "bg-blue-700",
  },
  {
    id: "typescript",
    name: "TypeScript",
    icon: "🔷",
    description: "TypeScript is a superset of JavaScript that adds static type definitions, helping to catch errors early and make code more robust.",
    tagline: "JavaScript that scales",
    applications: ["Large-scale Applications", "Front-end Development", "Enterprise Apps", "Node.js"],
    color: "bg-blue-400",
  },
  {
    id: "go",
    name: "Go",
    icon: "🐹",
    description: "Go is an open source programming language designed for building simple, fast, and reliable software at scale.",
    tagline: "Simplicity and performance",
    applications: ["Cloud Services", "Microservices", "Web Servers", "DevOps Tools"],
    color: "bg-teal-500",
  },
  {
    id: "rust",
    name: "Rust",
    icon: "🦀",
    description: "Rust is a systems programming language focused on safety, speed, and concurrency. It's designed to be memory-safe without a garbage collector.",
    tagline: "Fast, reliable, productive",
    applications: ["Systems Programming", "WebAssembly", "Network Services", "Embedded Devices"],
    color: "bg-amber-600",
  },
];
