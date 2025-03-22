
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { languages, Language } from '@/data/languages';
import { learningPaths, LearningPath, Module, Topic } from '@/data/learningPaths';

interface LearningContextType {
  selectedLanguage: Language | null;
  setSelectedLanguage: (language: Language | null) => void;
  currentPath: LearningPath | null;
  currentModule: Module | null;
  setCurrentModule: (module: Module | null) => void;
  currentTopic: Topic | null;
  setCurrentTopic: (topic: Topic | null) => void;
  completedTopics: string[];
  markTopicCompleted: (topicId: string) => void;
  progress: number;
  resetLearning: () => void;
}

const LearningContext = createContext<LearningContextType | undefined>(undefined);

interface LearningProviderProps {
  children: ReactNode;
}

export const LearningProvider = ({ children }: LearningProviderProps) => {
  const [selectedLanguage, setSelectedLanguage] = useState<Language | null>(null);
  const [currentModule, setCurrentModule] = useState<Module | null>(null);
  const [currentTopic, setCurrentTopic] = useState<Topic | null>(null);
  const [completedTopics, setCompletedTopics] = useState<string[]>([]);

  // Derive current learning path based on selected language
  const currentPath = selectedLanguage 
    ? learningPaths.find(path => path.languageId === selectedLanguage.id) || null
    : null;

  // Calculate progress as percentage of completed topics
  const calculateProgress = (): number => {
    if (!currentPath) return 0;
    
    const totalTopics = currentPath.modules.reduce(
      (total, module) => total + module.topics.length, 
      0
    );
    
    return totalTopics > 0 
      ? Math.round((completedTopics.length / totalTopics) * 100) 
      : 0;
  };

  const markTopicCompleted = (topicId: string) => {
    if (!completedTopics.includes(topicId)) {
      setCompletedTopics(prev => [...prev, topicId]);
    }
  };

  const resetLearning = () => {
    setSelectedLanguage(null);
    setCurrentModule(null);
    setCurrentTopic(null);
    setCompletedTopics([]);
  };

  const value = {
    selectedLanguage,
    setSelectedLanguage,
    currentPath,
    currentModule,
    setCurrentModule,
    currentTopic,
    setCurrentTopic,
    completedTopics,
    markTopicCompleted,
    progress: calculateProgress(),
    resetLearning,
  };

  return (
    <LearningContext.Provider value={value}>
      {children}
    </LearningContext.Provider>
  );
};

export const useLearning = () => {
  const context = useContext(LearningContext);
  if (context === undefined) {
    throw new Error('useLearning must be used within a LearningProvider');
  }
  return context;
};
