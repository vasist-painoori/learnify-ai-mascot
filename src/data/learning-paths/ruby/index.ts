
import { LearningPath } from '../../types';
import { introductionTopic } from './introduction';
import { syntaxTopic } from './syntax';
import { dataTypesTopic } from './data-types';
import { operatorsTopic } from './operators';
import { controlStructuresTopic } from './control-structures';
import { loopsTopic } from './loops';
import { methodsTopic } from './methods';
import { classesTopic } from './classes';
import { inheritanceTopic } from './inheritance';
import { stringManipulationTopic } from './string-manipulation';

export const rubyPath: LearningPath = {
  languageId: "ruby",
  modules: [
    {
      id: "ruby-basics",
      title: "Ruby Fundamentals",
      description: "Learn the core concepts of Ruby programming",
      topics: [
        introductionTopic,
        syntaxTopic,
        dataTypesTopic,
        operatorsTopic,
        controlStructuresTopic,
        loopsTopic,
        methodsTopic,
        classesTopic,
        inheritanceTopic,
        stringManipulationTopic,
      ]
    }
  ]
};
