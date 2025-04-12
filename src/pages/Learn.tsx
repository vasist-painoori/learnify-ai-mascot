
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useLearning } from '@/contexts/LearningContext';
import Navbar from '@/components/Navbar';
import LearningPath from '@/components/LearningPath';
import CodeEditor from '@/components/CodeEditor';
import Flashcard from '@/components/Flashcard';
import Quiz from '@/components/Quiz';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, BookOpen, Code, BrainCircuit, CheckCircle } from 'lucide-react';
import Topbar from '@/components/Topbar';

const Learn = () => {
  const { 
    selectedLanguage, 
    currentPath, 
    currentModule,
    currentTopic,
    setCurrentTopic,
    markTopicCompleted
  } = useLearning();
  
  const [activeTab, setActiveTab] = useState('content');
  const navigate = useNavigate();
  
  // Redirect if no language is selected
  useEffect(() => {
    if (!selectedLanguage) {
      navigate('/dashboard');
    }
  }, [selectedLanguage, navigate]);
  
  if (!selectedLanguage || !currentPath) {
    return null;
  }

  // Get the first module if none is selected
  const module = currentModule || (currentPath.modules.length > 0 ? currentPath.modules[0] : null);
  
  // Get the first topic if none is selected
  const topic = currentTopic || (module?.topics.length > 0 ? module.topics[0] : null);
  
  const handleCompleteQuiz = () => {
    if (topic) {
      markTopicCompleted(topic.id);
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-16">
      <Topbar />
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => navigate('/dashboard')}
            className="rounded-full"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Sidebar - Learning Path */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-3"
          >
            <LearningPath />
          </motion.div>
          
          {/* Main Content Area */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="lg:col-span-9"
          >
            {topic ? (
              <>
                <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden mb-6">
                  <div className="p-6">
                    <h1 className="text-2xl font-bold mb-1">{topic.title}</h1>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">{topic.description}</p>
                    
                    <Tabs defaultValue="content" onValueChange={setActiveTab} value={activeTab}>
                      <TabsList className="grid grid-cols-4 mb-6">
                        <TabsTrigger value="content" className="flex items-center justify-center">
                          <BookOpen className="h-4 w-4 mr-2" />
                          <span>Learn</span>
                        </TabsTrigger>
                        <TabsTrigger value="code" className="flex items-center justify-center">
                          <Code className="h-4 w-4 mr-2" />
                          <span>Code</span>
                        </TabsTrigger>
                        <TabsTrigger value="flashcards" className="flex items-center justify-center">
                          <BrainCircuit className="h-4 w-4 mr-2" />
                          <span>Flashcards</span>
                        </TabsTrigger>
                        <TabsTrigger value="quiz" className="flex items-center justify-center">
                          <CheckCircle className="h-4 w-4 mr-2" />
                          <span>Quiz</span>
                        </TabsTrigger>
                      </TabsList>
                      
                      <TabsContent value="content" className="mt-0">
                        <div className="prose dark:prose-invert max-w-none">
                          {/* Render markdown content */}
                          <div dangerouslySetInnerHTML={{ __html: topic.content }} />
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="code" className="mt-0">
                        <h3 className="text-lg font-semibold mb-4">Try it yourself</h3>
                        {topic.codeExamples.length > 0 ? (
                          <div className="space-y-6">
                            {topic.codeExamples.map((example, index) => (
                              <div key={index} className="space-y-4">
                                <h4 className="font-medium">{example.title}</h4>
                                <CodeEditor 
                                  initialCode={example.code}
                                  language={selectedLanguage.id}
                                />
                                <p className="text-sm text-gray-600 dark:text-gray-400">{example.explanation}</p>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <p className="text-gray-500 dark:text-gray-400">No code examples available for this topic.</p>
                        )}
                      </TabsContent>
                      
                      <TabsContent value="flashcards" className="mt-0">
                        <h3 className="text-lg font-semibold mb-4">Flashcards</h3>
                        <Flashcard flashcards={topic.flashcards} />
                      </TabsContent>
                      
                      <TabsContent value="quiz" className="mt-0">
                        <h3 className="text-lg font-semibold mb-4">Test Your Knowledge</h3>
                        <Quiz quizzes={topic.quiz} onComplete={handleCompleteQuiz} />
                      </TabsContent>
                    </Tabs>
                  </div>
                </div>
              </>
            ) : (
              <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-8 text-center">
                <h2 className="text-xl font-semibold mb-2">Select a Module and Topic</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Please select a module and topic from the learning path to start learning.
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Learn;
