
import { LearningPath } from '../../types';
import { introductionTopic } from './introduction';
import { basicTypesTopic } from './basic-types';
import { interfacesTopic } from './interfaces';
import { classesTopic } from './classes';
import { functionsTopic } from './functions';
import { genericsTopic } from './generics';
import { typeInferenceTopic } from './type-inference';
import { enumsTopic } from './enums';
import { typeAssertionsTopic } from './type-assertions';
import { advancedTypesTopic } from './advanced-types';

export const typescriptPath: LearningPath = {
  languageId: "typescript",
  modules: [
    {
      id: "typescript-basics",
      title: "TypeScript Fundamentals",
      description: "Learn the core concepts of TypeScript programming",
      topics: [
        introductionTopic,
        basicTypesTopic,
        interfacesTopic,
        classesTopic,
        functionsTopic,
        genericsTopic,
        typeInferenceTopic,
        enumsTopic,
        typeAssertionsTopic,
        advancedTypesTopic
      ]
    }
  ]
};
