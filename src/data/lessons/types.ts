export interface CodeBlock {
  language: string;
  snippet: string;
  explanation: string;
}

export interface LessonSection {
  heading: string;
  body: string;
  code?: CodeBlock;
}

export interface CodingQuiz {
  question: string;
  hint: string;
  expectedOutput: string;
}

export interface LessonData {
  title: string;
  sections: LessonSection[];
  diagram: string;
  codingQuiz: CodingQuiz;
}
