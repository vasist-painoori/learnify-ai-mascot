
import { LearningPath } from '../../types';
import { introductionTopic } from './introduction';
import { syntaxTopic } from './syntax';
import { variablesTopic } from './variables';
import { dataTypesTopic } from './data-types';
import { operatorsTopic } from './operators';
import { conditionalsTopic } from './conditionals';
import { loopsTopic } from './loops';
import { functionsTopic } from './functions';
import { listsTopic } from './lists';
import { dictionariesTopic } from './dictionaries';

export const pythonPath: LearningPath = {
  languageId: "python",
  modules: [
    {
      id: "python-basics",
      title: "Python Fundamentals",
      description: "Learn the core concepts of Python programming",
      topics: [
        introductionTopic,
        syntaxTopic,
        variablesTopic,
        dataTypesTopic,
        operatorsTopic,
        conditionalsTopic,
        loopsTopic,
        functionsTopic,
        listsTopic,
        dictionariesTopic
      ]
    }
  ]
};
