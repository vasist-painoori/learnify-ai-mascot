
import React, { useEffect } from 'react';
import { useLearning } from '@/contexts/LearningContext';
import AIMascot from '@/components/AIMascot';
import DashboardContent from '@/components/dashboard/DashboardContent';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

const Dashboard = () => {
  const { selectedLanguage, progress, resetLearning } = useLearning();
  
  useEffect(() => {
    // Welcome notification when dashboard loads
    if (selectedLanguage) {
      toast(`Welcome back to your ${selectedLanguage.name} learning journey!`, {
        description: `You're ${progress}% through the curriculum.`
      });
    } else {
      toast('Welcome to LearnifyAI!', {
        description: 'Choose a programming language to begin your learning journey.'
      });
    }
  }, []);

  return (
    <motion.div 
      className="min-h-screen flex overflow-hidden bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-950"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <main className="flex-1 overflow-y-auto pb-10 w-full pt-16">
        <DashboardContent
          selectedLanguage={selectedLanguage}
          progress={progress}
          resetLearning={resetLearning}
        />
        
        <AIMascot />
      </main>
    </motion.div>
  );
};

export default Dashboard;
