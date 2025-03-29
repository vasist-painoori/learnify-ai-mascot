
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
import { modulesTopic } from './modules';
import { mixinsTopic } from './mixins';
import { blocksTopic } from './blocks';
import { exceptionsTopic } from './exceptions';
import { fileIoTopic } from './file-io';
import { regularExpressionsTopic } from './regular-expressions';
import { gemsTopic } from './gems';
import { testingTopic } from './testing';
import { debuggingTopic } from './debugging';
import { stringManipulationTopic } from './string-manipulation';

// Combine all topics into an array - we'll use the first 10 for our path
const allTopics = [
  introductionTopic,
  syntaxTopic,
  dataTypesTopic,
  operatorsTopic,
  controlStructuresTopic,
  loopsTopic,
  methodsTopic,
  classesTopic,
  inheritanceTopic,
  stringManipulationTopic, // Prioritizing this over some of the later topics
  modulesTopic,
  mixinsTopic,
  blocksTopic,
  exceptionsTopic,
  fileIoTopic,
  regularExpressionsTopic,
  gemsTopic,
  testingTopic,
  debuggingTopic
];

// Create the Ruby learning path with just 10 topics
export const rubyPath: LearningPath = {
  languageId: "ruby",
  modules: [
    {
      id: "ruby-basics",
      title: "Ruby Fundamentals",
      description: "Learn the core concepts of Ruby programming",
      topics: allTopics.slice(0, 10) // Take just the first 10 topics
    }
  ]
};
