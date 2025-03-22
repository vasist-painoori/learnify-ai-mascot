
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Flashcard as FlashcardType } from '@/data/learningPaths';
import { ChevronLeft, ChevronRight, RotateCcw } from 'lucide-react';

interface FlashcardProps {
  flashcards: FlashcardType[];
}

const Flashcard = ({ flashcards }: FlashcardProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [direction, setDirection] = useState<'left' | 'right' | null>(null);
  
  const currentFlashcard = flashcards[currentIndex];
  
  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };
  
  const handleNext = () => {
    if (currentIndex < flashcards.length - 1) {
      setDirection('right');
      setIsFlipped(false);
      setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
        setDirection(null);
      }, 200);
    }
  };
  
  const handlePrevious = () => {
    if (currentIndex > 0) {
      setDirection('left');
      setIsFlipped(false);
      setTimeout(() => {
        setCurrentIndex(currentIndex - 1);
        setDirection(null);
      }, 200);
    }
  };
  
  if (!flashcards.length) {
    return (
      <div className="flex items-center justify-center h-64 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800">
        <p className="text-gray-500 dark:text-gray-400">No flashcards available for this topic</p>
      </div>
    );
  }

  const variants = {
    enter: (direction: 'left' | 'right') => ({
      x: direction === 'right' ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: 'left' | 'right') => ({
      x: direction === 'right' ? -300 : 300,
      opacity: 0,
    }),
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-full max-w-lg mx-auto bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 overflow-hidden">
        <div className="p-4 border-b border-gray-200 dark:border-gray-800 flex justify-between items-center">
          <h3 className="font-medium">Flashcards</h3>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            {currentIndex + 1} of {flashcards.length}
          </div>
        </div>
        
        <div 
          className="relative w-full h-64 cursor-pointer [perspective:1000px]"
          onClick={handleFlip}
        >
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial={direction ? "enter" : "center"}
            animate="center"
            exit="exit"
            transition={{ type: 'tween', duration: 0.2 }}
            className="relative w-full h-full"
          >
            <div 
              className={`absolute inset-0 w-full h-full transition-all duration-500 ease-in-out [transform-style:preserve-3d] ${
                isFlipped ? '[transform:rotateY(180deg)]' : ''
              }`}
            >
              {/* Front of card */}
              <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] p-6 flex items-center justify-center bg-white dark:bg-gray-900 text-center">
                <div>
                  <p className="text-lg font-medium mb-2">{currentFlashcard.front}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">Click to flip</p>
                </div>
              </div>
              
              {/* Back of card */}
              <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] p-6 flex items-center justify-center bg-gray-50 dark:bg-gray-800 text-center">
                <div>
                  <p className="text-lg">{currentFlashcard.back}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">Click to flip back</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <div className="p-4 flex justify-between items-center">
          <Button 
            variant="outline" 
            size="icon"
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className="h-9 w-9"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            onClick={handleFlip}
            className="h-9 w-9"
          >
            <RotateCcw className="h-4 w-4" />
          </Button>
          
          <Button 
            variant="outline" 
            size="icon"
            onClick={handleNext}
            disabled={currentIndex === flashcards.length - 1}
            className="h-9 w-9"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Flashcard;
