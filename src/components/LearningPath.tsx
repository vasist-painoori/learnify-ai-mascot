
import React from 'react';
import { useLearning } from '@/contexts/LearningContext';
import { CheckCircle, Circle, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const LearningPath = () => {
  const { 
    currentPath, 
    currentModule, 
    setCurrentModule, 
    completedTopics,
    currentTopic,
    setCurrentTopic
  } = useLearning();

  if (!currentPath) return null;

  const handleSelectModule = (moduleId: string) => {
    const module = currentPath.modules.find(m => m.id === moduleId);
    if (module) {
      setCurrentModule(module);
      if (module.topics.length > 0) {
        setCurrentTopic(module.topics[0]);
      }
    }
  };

  const handleSelectTopic = (moduleId: string, topicId: string) => {
    const module = currentPath.modules.find(m => m.id === moduleId);
    if (module) {
      setCurrentModule(module);
      const topic = module.topics.find(t => t.id === topicId);
      if (topic) {
        setCurrentTopic(topic);
      }
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden">
      <div className="p-4 border-b border-gray-200 dark:border-gray-800">
        <h2 className="text-lg font-semibold">Learning Path</h2>
      </div>
      
      <div className="p-4 space-y-6">
        {currentPath.modules.map((module, moduleIndex) => (
          <div key={module.id} className="space-y-2">
            <div 
              className={`flex items-center p-3 rounded-lg transition-colors cursor-pointer ${
                currentModule?.id === module.id 
                  ? 'bg-primary/10 text-primary font-medium' 
                  : 'hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
              onClick={() => handleSelectModule(module.id)}
            >
              <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center mr-3">
                {moduleIndex + 1}
              </div>
              <div className="flex-grow">
                <div className="text-base font-medium">{module.title}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  {module.topics.length} topics
                </div>
              </div>
              <ChevronRight size={16} className="flex-shrink-0 ml-2" />
            </div>
            
            {currentModule?.id === module.id && (
              <div className="ml-6 pl-6 border-l border-gray-200 dark:border-gray-800 space-y-2">
                {module.topics.map((topic) => {
                  const isCompleted = completedTopics.includes(topic.id);
                  const isActive = currentTopic?.id === topic.id;
                  
                  return (
                    <div 
                      key={topic.id}
                      className={`flex items-center p-2 rounded-md cursor-pointer transition-colors ${
                        isActive 
                          ? 'bg-primary/10 text-primary font-medium' 
                          : isCompleted 
                          ? 'text-gray-500 dark:text-gray-400' 
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                      }`}
                      onClick={() => handleSelectTopic(module.id, topic.id)}
                    >
                      <div className="flex-shrink-0 mr-3">
                        {isCompleted ? (
                          <CheckCircle size={16} className="text-green-500" />
                        ) : (
                          <Circle size={16} className={isActive ? 'text-primary' : 'text-gray-400'} />
                        )}
                      </div>
                      <span className="text-sm">{topic.title}</span>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearningPath;
