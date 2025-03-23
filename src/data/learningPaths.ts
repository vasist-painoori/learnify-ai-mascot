
import { LearningPath } from './types';
import { javascriptPath } from './learning-paths/javascriptPath';
import { pythonPath } from './learning-paths/pythonPath';
import { javaPath } from './learning-paths/javaPath';
import { csharpPath } from './learning-paths/csharpPath';
import { cppPath } from './learning-paths/cppPath';
import { rubyPath } from './learning-paths/rubyPath';

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
  rubyPath
];
