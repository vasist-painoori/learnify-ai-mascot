
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { languages, Language } from '@/data/languages';
import { learningPaths, LearningPath, Module, Topic } from '@/data/learningPaths';
import { toast } from "@/components/ui/sonner";

// Keys for localStorage
const STORAGE_KEYS = {
  SELECTED_LANGUAGE: 'learnify-selected-language',
  CURRENT_MODULE: 'learnify-current-module',
  CURRENT_TOPIC: 'learnify-current-topic',
  COMPLETED_TOPICS: 'learnify-completed-topics'
};

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
  // Initialize state with values from localStorage if available
  const [selectedLanguage, setSelectedLanguageState] = useState<Language | null>(() => {
    const storedLanguageId = localStorage.getItem(STORAGE_KEYS.SELECTED_LANGUAGE);
    if (storedLanguageId) {
      return languages.find(lang => lang.id === storedLanguageId) || null;
    }
    return null;
  });
  
  const [currentModule, setCurrentModuleState] = useState<Module | null>(() => {
    const storedModuleId = localStorage.getItem(STORAGE_KEYS.CURRENT_MODULE);
    if (storedModuleId && selectedLanguage) {
      const path = learningPaths.find(path => path.languageId === selectedLanguage.id);
      if (path) {
        return path.modules.find(module => module.id === storedModuleId) || null;
      }
    }
    return null;
  });
  
  const [currentTopic, setCurrentTopicState] = useState<Topic | null>(() => {
    const storedTopicId = localStorage.getItem(STORAGE_KEYS.CURRENT_TOPIC);
    if (storedTopicId && currentModule) {
      return currentModule.topics.find(topic => topic.id === storedTopicId) || null;
    }
    return null;
  });
  
  const [completedTopics, setCompletedTopics] = useState<string[]>(() => {
    const storedCompletedTopics = localStorage.getItem(STORAGE_KEYS.COMPLETED_TOPICS);
    return storedCompletedTopics ? JSON.parse(storedCompletedTopics) : [];
  });

  // Update localStorage when state changes
  useEffect(() => {
    if (selectedLanguage) {
      localStorage.setItem(STORAGE_KEYS.SELECTED_LANGUAGE, selectedLanguage.id);
    } else {
      localStorage.removeItem(STORAGE_KEYS.SELECTED_LANGUAGE);
    }
  }, [selectedLanguage]);

  useEffect(() => {
    if (currentModule) {
      localStorage.setItem(STORAGE_KEYS.CURRENT_MODULE, currentModule.id);
    } else {
      localStorage.removeItem(STORAGE_KEYS.CURRENT_MODULE);
    }
  }, [currentModule]);

  useEffect(() => {
    if (currentTopic) {
      localStorage.setItem(STORAGE_KEYS.CURRENT_TOPIC, currentTopic.id);
    } else {
      localStorage.removeItem(STORAGE_KEYS.CURRENT_TOPIC);
    }
  }, [currentTopic]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.COMPLETED_TOPICS, JSON.stringify(completedTopics));
  }, [completedTopics]);

  // Wrapper functions for state setters with notifications
  const setSelectedLanguage = (language: Language | null) => {
    setSelectedLanguageState(language);
    if (language) {
      toast.success(`Selected ${language.name} as your learning language`);
    }
  };

  const setCurrentModule = (module: Module | null) => {
    setCurrentModuleState(module);
    if (module) {
      toast.info(`Now learning: ${module.title}`);
    }
  };

  const setCurrentTopic = (topic: Topic | null) => {
    setCurrentTopicState(topic);
  };

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
      toast.success("Topic completed! Great job!");
    }
  };

  const resetLearning = () => {
    setSelectedLanguageState(null);
    setCurrentModuleState(null);
    setCurrentTopicState(null);
    setCompletedTopics([]);
    
    // Clear localStorage
    localStorage.removeItem(STORAGE_KEYS.SELECTED_LANGUAGE);
    localStorage.removeItem(STORAGE_KEYS.CURRENT_MODULE);
    localStorage.removeItem(STORAGE_KEYS.CURRENT_TOPIC);
    localStorage.removeItem(STORAGE_KEYS.COMPLETED_TOPICS);
    
    toast.info("Your learning progress has been reset");
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
