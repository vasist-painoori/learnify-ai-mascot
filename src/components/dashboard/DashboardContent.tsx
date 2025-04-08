
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
  // Create stagger animation effect for cards
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-5xl mx-auto"
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            Your Learning Dashboard
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-xl mx-auto">
            Choose a programming language to begin your learning journey
          </p>
        </div>
        
        {selectedLanguage ? (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <ProgressCard progress={progress} />
            </motion.div>
            <motion.div variants={itemVariants}>
              <LanguageCard selectedLanguage={selectedLanguage} onReset={resetLearning} />
            </motion.div>
            <motion.div variants={itemVariants}>
              <StatsCard progress={progress} />
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <LanguageSelection />
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default DashboardContent;
