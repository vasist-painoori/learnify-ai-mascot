
export interface Module {
  id: string;
  title: string;
  description: string;
  topics: Topic[];
}

export interface Topic {
  id: string;
  title: string;
  description: string;
  content: string;
  codeExamples: CodeExample[];
  quiz: Quiz[];
  flashcards: Flashcard[];
}

export interface CodeExample {
  title: string;
  code: string;
  explanation: string;
}

export interface Quiz {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface Flashcard {
  front: string;
  back: string;
}

export interface LearningPath {
  languageId: string;
  modules: Module[];
}
