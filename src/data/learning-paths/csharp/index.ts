
import { LearningPath } from '../../types';
import { introductionTopic } from './introduction';
import { syntaxTopic } from './syntax';
import { variablesTopic } from './variables';
import { dataTypesTopic } from './data-types';
import { operatorsTopic } from './operators';
import { controlFlowTopic } from './control-flow';
import { methodsTopic } from './methods';
import { classesTopic } from './classes';
import { inheritanceTopic } from './inheritance';
import { exceptionsTopic } from './exceptions';

export const csharpPath: LearningPath = {
  languageId: "csharp",
  modules: [
    {
      id: "csharp-basics",
      title: "C# Fundamentals",
      description: "Learn the core concepts of C# programming",
      topics: [
        introductionTopic,
        syntaxTopic,
        variablesTopic,
        dataTypesTopic,
        operatorsTopic,
        controlFlowTopic,
        methodsTopic,
        classesTopic,
        inheritanceTopic,
        exceptionsTopic
      ]
    }
  ]
};
