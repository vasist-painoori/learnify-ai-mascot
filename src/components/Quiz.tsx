
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quiz as QuizType } from '@/data/learningPaths';
import { Button } from '@/components/ui/button';
import { CheckCircle, XCircle, ChevronRight } from 'lucide-react';
import CodeEditor from './CodeEditor';

interface QuizProps {
  quizzes: QuizType[];
  onComplete?: () => void;
}

const Quiz = ({ quizzes, onComplete }: QuizProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [showResults, setShowResults] = useState(false);
  
  const currentQuiz = quizzes[currentIndex];
  
  const handleSelectOption = (index: number) => {
    if (!hasSubmitted) {
      setSelectedOption(index);
    }
  };
  
  const handleSubmit = () => {
    if (selectedOption === null) return;
    
    setHasSubmitted(true);
    
    if (selectedOption === currentQuiz.correctAnswer) {
      setCorrectAnswers(prev => prev + 1);
    }
  };
  
  const handleNext = () => {
    if (currentIndex < quizzes.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedOption(null);
      setHasSubmitted(false);
    } else {
      setShowResults(true);
      if (onComplete) {
        onComplete();
      }
    }
  };
  
  const resetQuiz = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setHasSubmitted(false);
    setCorrectAnswers(0);
    setShowResults(false);
  };
  
  if (!quizzes.length) {
    return (
      <div className="flex items-center justify-center h-64 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800">
        <p className="text-gray-500 dark:text-gray-400">No quizzes available for this topic</p>
      </div>
    );
  }

  // Check if the quiz contains code
  const hasCode = currentQuiz?.question.includes('```') || currentQuiz?.question.includes('console.log');

  // Format the question to display code nicely
  const formatQuestion = (question: string) => {
    if (hasCode) {
      // Very simple code extraction - could be improved with regex for more complex cases
      const parts = question.split('```');
      if (parts.length > 1) {
        return (
          <>
            <p>{parts[0]}</p>
            <CodeEditor initialCode={parts[1].trim()} readOnly={true} />
            {parts.length > 2 && <p>{parts[2]}</p>}
          </>
        );
      }
    }
    return <p>{question}</p>;
  };

  return (
    <div className="w-full bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 overflow-hidden">
      <div className="p-4 border-b border-gray-200 dark:border-gray-800 flex justify-between items-center">
        <h3 className="font-medium">Quiz</h3>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          Question {currentIndex + 1} of {quizzes.length}
        </div>
      </div>
      
      <AnimatePresence mode="wait">
        {showResults ? (
          <motion.div
            key="results"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="p-6"
          >
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quiz Completed!</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                You got {correctAnswers} out of {quizzes.length} questions correct.
              </p>
              
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-6">
                <div 
                  className="bg-primary h-2.5 rounded-full" 
                  style={{ width: `${(correctAnswers / quizzes.length) * 100}%` }}
                ></div>
              </div>
              
              <Button onClick={resetQuiz}>
                Try Again
              </Button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <div className="p-6">
              <div className="mb-6">
                <h4 className="text-lg font-medium mb-3">
                  {hasCode ? "Check the following code:" : currentQuiz.question}
                </h4>
                {hasCode && formatQuestion(currentQuiz.question)}
              </div>
              
              <div className="space-y-3 mb-6">
                {currentQuiz.options.map((option, index) => (
                  <div
                    key={index}
                    className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                      selectedOption === index
                        ? hasSubmitted
                          ? index === currentQuiz.correctAnswer
                            ? 'border-green-500 bg-green-50 dark:bg-green-900/20'
                            : 'border-red-500 bg-red-50 dark:bg-red-900/20'
                          : 'border-primary bg-primary/5'
                        : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                    }`}
                    onClick={() => handleSelectOption(index)}
                  >
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mr-3">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center text-xs ${
                          selectedOption === index
                            ? hasSubmitted
                              ? index === currentQuiz.correctAnswer
                                ? 'bg-green-500 text-white'
                                : 'bg-red-500 text-white'
                              : 'bg-primary text-white'
                            : 'border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300'
                        }`}>
                          {hasSubmitted && selectedOption === index ? (
                            index === currentQuiz.correctAnswer ? (
                              <CheckCircle className="h-3 w-3" />
                            ) : (
                              <XCircle className="h-3 w-3" />
                            )
                          ) : (
                            String.fromCharCode(65 + index) // A, B, C, D...
                          )}
                        </div>
                      </div>
                      <p className={`text-sm ${
                        hasSubmitted && index === currentQuiz.correctAnswer
                          ? 'font-medium text-green-700 dark:text-green-400'
                          : ''
                      }`}>
                        {option}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              {hasSubmitted && (
                <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <p className="text-sm font-medium mb-1">
                    {selectedOption === currentQuiz.correctAnswer 
                      ? 'Correct! ✓' 
                      : 'Incorrect ✗'}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {currentQuiz.explanation}
                  </p>
                </div>
              )}
              
              <div className="flex justify-end">
                {!hasSubmitted ? (
                  <Button onClick={handleSubmit} disabled={selectedOption === null}>
                    Submit Answer
                  </Button>
                ) : (
                  <Button onClick={handleNext}>
                    {currentIndex < quizzes.length - 1 ? (
                      <>Next Question <ChevronRight className="ml-1 h-4 w-4" /></>
                    ) : (
                      'Complete Quiz'
                    )}
                  </Button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Quiz;
