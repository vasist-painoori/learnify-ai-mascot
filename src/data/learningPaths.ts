
import { LearningPath } from './types';
import { javascriptPath } from './learning-paths/javascript';
import { pythonPath } from './learning-paths/python';
import { javaPath } from './learning-paths/java';
import { csharpPath } from './learning-paths/csharp';
import { cppPath } from './learning-paths/cpp';
import { rubyPath } from './learning-paths/ruby';
import { typescriptPath } from './learning-paths/typescript';
import { rustPath } from './learning-paths/rust';

export type { 
  Module, 
  Topic, 
  CodeExample, 
  Quiz, 
  Flashcard, 
  LearningPath 
} from './types';

export const learningPaths: LearningPath[] = [
  javascriptPath,
  pythonPath,
  javaPath,
  csharpPath,
  cppPath,
  rubyPath,
  typescriptPath,
  rustPath
];
