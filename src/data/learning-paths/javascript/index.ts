
import { LearningPath } from '../../types';
import { introductionTopic } from './introduction';
import { syntaxTopic } from './syntax';
import { variablesTopic } from './variables';
import { dataTypesTopic } from './data-types';
import { operatorsTopic } from './operators';
import { controlFlowTopic } from './control-flow';
import { functionsTopic } from './functions';
import { arraysTopic } from './arrays';
import { objectsTopic } from './objects';
import { domManipulationTopic } from './dom-manipulation';

export const javascriptPath: LearningPath = {
  languageId: "javascript",
  modules: [
    {
      id: "js-basics",
      title: "JavaScript Fundamentals",
      description: "Learn the core concepts of JavaScript programming",
      topics: [
        introductionTopic,
        syntaxTopic,
        variablesTopic,
        dataTypesTopic,
        operatorsTopic,
        controlFlowTopic,
        functionsTopic,
        arraysTopic,
        objectsTopic,
        domManipulationTopic
      ]
    }
  ]
};
