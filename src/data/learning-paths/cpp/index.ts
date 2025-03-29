
import { LearningPath } from '../../types';
import { introductionTopic } from './introduction';
import { syntaxTopic } from './syntax';
import { variablesTopic } from './variables';
import { dataTypesTopic } from './data-types';
import { operatorsTopic } from './operators';
import { controlFlowTopic } from './control-flow';
import { functionsTopic } from './functions';
import { classesTopic } from './classes';
import { memoryManagementTopic } from './memory-management';
import { templatesTopic } from './templates';

export const cppPath: LearningPath = {
  languageId: "cpp",
  modules: [
    {
      id: "cpp-basics",
      title: "C++ Fundamentals",
      description: "Learn the core concepts of C++ programming",
      topics: [
        introductionTopic,
        syntaxTopic,
        variablesTopic,
        dataTypesTopic,
        operatorsTopic,
        controlFlowTopic,
        functionsTopic,
        classesTopic,
        memoryManagementTopic,
        templatesTopic
      ]
    }
  ]
};
