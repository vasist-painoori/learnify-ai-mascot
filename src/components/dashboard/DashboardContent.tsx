
import React from 'react';
import { motion } from 'framer-motion';
import { Language } from '@/data/languages';
import LanguageSelection from '@/components/LanguageSelection';
import ProgressCard from './ProgressCard';
import LanguageCard from './LanguageCard';
import StatsCard from './StatsCard';

interface DashboardContentProps {
  selectedLanguage: Language | null;
  progress: number;
  resetLearning: () => void;
}

const DashboardContent = ({ 
  selectedLanguage, 
  progress, 
  resetLearning 
}: DashboardContentProps) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto"
      >
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold mb-2">Your Learning Dashboard</h1>
          <p className="text-gray-600 dark:text-gray-300">
            Choose a programming language to begin your learning journey
          </p>
        </div>
        
        {selectedLanguage ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <ProgressCard progress={progress} />
            <LanguageCard selectedLanguage={selectedLanguage} onReset={resetLearning} />
            <StatsCard progress={progress} />
          </div>
        ) : (
          <LanguageSelection />
        )}
      </motion.div>
    </div>
  );
};

export default DashboardContent;
