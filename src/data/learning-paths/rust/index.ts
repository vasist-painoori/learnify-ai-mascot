
import { LearningPath } from '../../types';
import { introductionTopic } from './introduction';
import { syntaxTopic } from './syntax';
import { variablesTopic } from './variables';
import { dataTypesTopic } from './data-types';
import { ownershipTopic } from './ownership';
import { borrowingTopic } from './borrowing';
import { structsTopic } from './structs';
import { enumsTopic } from './enums';
import { errorHandlingTopic } from './error-handling';
import { concurrencyTopic } from './concurrency';

export const rustPath: LearningPath = {
  languageId: "rust",
  modules: [
    {
      id: "rust-basics",
      title: "Rust Fundamentals",
      description: "Learn the core concepts of Rust programming",
      topics: [
        introductionTopic,
        syntaxTopic,
        variablesTopic,
        dataTypesTopic,
        ownershipTopic,
        borrowingTopic,
        structsTopic,
        enumsTopic,
        errorHandlingTopic,
        concurrencyTopic
      ]
    }
  ]
};
